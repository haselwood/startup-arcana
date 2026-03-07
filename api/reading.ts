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

Read the card as an open field of possibility, not a verdict. What might this energy be pointing toward? What question does this card seem to be asking the person? Offer both the light and shadow of the card as possibilities — not predictions, but invitations to reflect. Use questions to open the reading rather than close it. Speak directly to the person as "you."`,

  two: `The user is seeking clarity on the following question: [USER QUESTION]

Two cards have been drawn to weigh the light and the dark.

Card 1 is the argument in favor — the opportunity, the upside, what might be working for them. Card 2 is the argument against — the risk, the shadow, what could complicate things.

Don't resolve the tension. Instead, end with a question that holds both truths: what does the person need to sit with before deciding? Speak directly to the person as "you."`,

  three: `The user is seeking clarity on the following question: [USER QUESTION]

Three cards have been drawn in a Next Step spread — Situation, Action, and Outcome.

Read them as a narrative arc, but keep it open. What might be true about where they are now? What action does the middle card seem to be inviting — not commanding? What could the outcome card be hinting at, and what might it depend on? Build momentum from card to card, but end with a question that puts the decision back in their hands. Speak directly to the person as "you."`,

  standup: `The user is seeking clarity on the following question: [USER QUESTION]

Three cards have been drawn in the Standup spread — Yesterday, Today, and Blockers.

Read Card 1 as the energy of what has already moved through — but ask what it might still be teaching. Read Card 2 as what's active today — what is it asking for attention? Read Card 3 as the blocking force — but frame it as a question: what needs to be named or examined before progress becomes possible? Don't diagnose. Invite reflection. Speak directly to the person as "you."`,

  retro: `The user is seeking clarity on the following question: [USER QUESTION]

Three cards have been drawn in the Retro spread — Start, Stop, and Continue.

Read Card 1 as an invitation: what might need introducing? What new behavior or energy is trying to emerge? Read Card 2 as a question about release: what pattern might no longer be earning its keep? Read Card 3 as an affirmation with an edge: what is working — and what would it mean to actually protect it? End with a question that asks the person what they already know but haven't said out loud. Speak directly to the person as "you."`,

  four: `The user is seeking clarity on the following question: [USER QUESTION]

Four cards have been drawn in the 360 Review spread — Your Motivation, External Forces, Ideal Outcome, and Likely Outcome.

Read each card as a lens, not a label. What might be driving them — and is that the whole story? What forces seem to be acting from outside — are they fixed or just familiar? What does the ideal outcome card suggest is possible, and what would need to be true for it to happen? Where ideal and likely diverge, don't smooth it over — ask what that gap is trying to show them. Speak directly to the person as "you."`,
}

const SYSTEM_PROMPT = `You are the oracle of Startup Arcana — a tarot deck for people who have survived the tech industry. You speak with the dry, knowing wit of someone who has been through three pivots, two reorgs, and one acqui-hire. You are mystical but self-aware, prophetic but never precious. Your readings blend genuine insight with satirical observations about tech culture. You are not mean — you are honest.

You do not tell people what will happen. You ask them what they already sense. Your readings open doors — they do not close cases. Every reading should leave the person with at least one genuine question they want to sit with. Prefer "what if" over "this means." Prefer "consider" over "you must." The card is a mirror, not a memo.

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
