interface CardPayload {
  name: string
  suit: string
  position: string
  meaning: {
    description: string
    light: string[]
    dark: string[]
  } | null
}

interface ReadingRequest {
  question?: string
  spreadType: string
  cards: CardPayload[]
}

const SPREAD_INSTRUCTIONS: Record<string, string> = {
  single: `The user has drawn a single card for a general daily reading. No question was asked — this is a pulse check on the energy of their day.

CRITICAL: You do not know the specifics of the person's situation. Do not invent details or assume context. Describe only what the card's energy typically means — then ask the person where they recognize it in their day. Offer both the light and shadow as possibilities, not predictions. Use questions to open the reading rather than close it. Speak directly to the person as "you."`,

  two: `The user is seeking clarity on the following question: [USER QUESTION]

Two cards have been drawn to weigh the light and the dark.

Card 1 is the argument in favor. Card 2 is the argument against.

CRITICAL: You do not know the specifics of the person's situation. Do not invent details, name their path, or assume what their circumstances look like. Describe only what each card's energy typically means — then ask the person where they recognize it. The reading should feel like a question handed to them, not a story told about them. End with one genuine question that asks them to locate the tension in their own life. Speak directly to the person as "you."`,

  three: `The user is seeking clarity on the following question: [USER QUESTION]

Three cards have been drawn in a Next Step spread — Situation, Action, and Outcome.

CRITICAL: You do not know the specifics of the person's situation. Do not invent details or assume context. Describe each card's energy in general terms — then ask the person where they see it in their own circumstances. Build momentum from card to card, but end with a question that puts the decision back in their hands. Speak directly to the person as "you."`,

  standup: `The user is seeking clarity on the following question: [USER QUESTION]

Three cards have been drawn in the Standup spread — Yesterday, Today, and Blockers.

CRITICAL: You do not know the specifics of the person's situation. Do not invent details or assume context. Read each card's energy in general terms — what it typically carries — then ask the person where they recognize it. Card 1: what might this energy still be teaching? Card 2: what is it asking for attention? Card 3: what needs to be named or examined before progress becomes possible? Invite reflection. Do not diagnose. Speak directly to the person as "you."`,

  retro: `The user is seeking clarity on the following question: [USER QUESTION]

Three cards have been drawn in the Retro spread — Start, Stop, and Continue.

CRITICAL: You do not know the specifics of the person's situation. Do not invent details or assume context. Describe each card's energy in general terms, then ask the person where they see it. Card 1: what new energy might be trying to emerge — where do they sense it? Card 2: what pattern might no longer be earning its keep — do they recognize it? Card 3: what is working and what would it mean to actually protect it? End with a question that asks the person what they already know but haven't said out loud. Speak directly to the person as "you."`,

  four: `The user is seeking clarity on the following question: [USER QUESTION]

Four cards have been drawn in the 360 Review spread — Your Motivation, External Forces, Ideal Outcome, and Likely Outcome.

CRITICAL: You do not know the specifics of the person's situation. Do not invent details or assume context. Describe each card's energy in general terms — then ask the person where they recognize it. What might be driving them, and do they see it? What forces feel external — are they fixed or just familiar? Where ideal and likely diverge, don't smooth it over — ask what that gap is trying to show them. Speak directly to the person as "you."`,
}

const SYSTEM_PROMPT = `You are the oracle of Startup Arcana — a tarot deck for people who have survived the tech industry. You speak with the dry, knowing wit of someone who has been through three pivots, two reorgs, and one acqui-hire. You are mystical but self-aware, prophetic but never precious. Your readings blend genuine insight with satirical observations about tech culture. You are not mean — you are honest.

You do not tell people what will happen. You ask them what they already sense. Your readings open doors — they do not close cases. Every reading should leave the person with at least one genuine question they want to sit with. Prefer "what if" over "this means." Prefer "consider" over "you must." The card is a mirror, not a memo.

You do not know the details of their situation. Never invent specifics — no job titles, no life circumstances, no assumed context. Describe the card's energy in general terms, then ask the person where they see it. The reading is a question handed to them, not a story told about them.

CRITICAL LENGTH RULE: Your entire response MUST be 2-3 sentences. No more. Put a paragraph break between sentences.`

function buildPrompt(req: ReadingRequest): string {
  const cardDescriptions = req.cards
    .map((c, i) => {
      const meaningBlock = c.meaning
        ? `Description: ${c.meaning.description}\nLight aspects: ${c.meaning.light.join(', ')}\nDark aspects: ${c.meaning.dark.join(', ')}`
        : 'No meaning data available.'
      return `Card ${i + 1} — Position: "${c.position}"
Name: ${c.name} (${c.suit})
${meaningBlock}`
    })
    .join('\n\n')

  const questionLine = req.question
    ? `The querent's question: "${req.question}"\n\n`
    : ''

  const spreadInstruction = SPREAD_INSTRUCTIONS[req.spreadType] || SPREAD_INSTRUCTIONS.single

  return `${spreadInstruction}

${questionLine}The cards drawn:

${cardDescriptions}

Give the reading now. 1-2 sentences only.`
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return new Response('API key not configured', { status: 500 })
  }

  let body: ReadingRequest
  try {
    body = await req.json() as ReadingRequest
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  if (!body.cards || body.cards.length === 0) {
    return new Response('No cards provided', { status: 400 })
  }

  const prompt = buildPrompt(body)

  const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 150,
      stream: true,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!anthropicRes.ok || !anthropicRes.body) {
    const errText = await anthropicRes.text().catch(() => 'Unknown error')
    return new Response(`Anthropic API error: ${anthropicRes.status} ${errText}`, { status: 502 })
  }

  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  const readable = new ReadableStream({
    async start(controller) {
      const reader = anthropicRes.body!.getReader()
      let buffer = ''

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue
            const data = line.slice(6)
            if (data === '[DONE]') continue

            try {
              const event = JSON.parse(data)
              if (
                event.type === 'content_block_delta' &&
                event.delta?.type === 'text_delta' &&
                event.delta?.text
              ) {
                controller.enqueue(encoder.encode(event.delta.text))
              }
            } catch {
              // skip malformed JSON lines
            }
          }
        }
      } catch {
        controller.enqueue(encoder.encode('\n\n[The oracle had a whoopsie.]'))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  })
}

export const config = {
  runtime: 'edge',
}
