import type { TarotCard, Suit, SpreadConfig } from '../types'

const SUIT_FOLDERS: Record<Suit, string> = {
  ARCHETYPE: 'archetypes',
  MINDSET: 'mindset',
  ARTIFACTS: 'artifacts',
  VIBES: 'vibes',
}

function nameToSlug(name: string): string {
  return name
    .replace(/^(The |A )/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const createCards = (suit: Suit, names: string[]): TarotCard[] =>
  names.map((name, i) => ({
    id: `${suit.toLowerCase()}-${name.toLowerCase().replace(/\s+/g, '-')}`,
    name,
    suit,
    image: `/img/${SUIT_FOLDERS[suit]}/${i + 1}-${nameToSlug(name)}.jpg`,
  }))

export const ARCHETYPE = createCards('ARCHETYPE', [
  'Junior',
  'The Besties',
  'The Recruiter',
  'Brilliant Jerk',
  'Side Hustler',
  'Powerhungry Fool',
  'Mentor',
  'The OG',
  '9-9-6 Grinder',
  'Martyr',
  'Quiet Quitter',
  'Middle Manager',
  'The Executive',
  'Visionary',
  'Thought Leader',
  'Digital Nomad',
])

export const MINDSET = createCards('MINDSET', [
  'Alignment',
  'Growth Mindset',
  'Low Hanging Fruit',
  'Fail Fast',
  'Ship It',
  'Drink from the Firehose',
  'Deep work',
  'Boil the Ocean',
  'Moving Goalposts',
  'Circle Back',
  'Radical Candor',
  'Chess Not Checkers',
  'Hill to Die On',
  'Vanity Metrics',
  'Clarity',
  'Disagree and Commit',
])

export const ARTIFACTS = createCards('ARTIFACTS', [
  'One Pager',
  'Pitch Deck',
  'NDA',
  'Wireframe',
  'Prototype',
  'Roadmap',
  'The Backlog',
  'Bug Ticket',
  'Pull Request',
  'Feature Release',
  'Slack Message',
  'All Hands',
  '1 Star Review',
  'Retro',
  'Offsite',
  'AI Slop',
])

export const VIBES = createCards('VIBES', [
  'Day One',
  'Blue Sky',
  'The Collab',
  'Flow State',
  'Imposter Syndrome',
  'Sunday Scaries',
  'Out of Office',
  'Craft',
  'The Pivot',
  'The Reorg',
  'Burnout',
  'Golden Handcuffs',
  'Layoffs',
  'The Liquidity Event',
  'The Counteroffer',
  'Exit Interview',
])

export const ALL_CARDS: TarotCard[] = [...ARCHETYPE, ...MINDSET, ...ARTIFACTS, ...VIBES]

export const SPREAD_CONFIGS: Record<string, SpreadConfig> = {
  single: {
    type: 'single',
    label: 'Pulse Check',
    description: 'Card of the day',
    count: 1,
    positions: ['Card of the Day'],
  },
  two: {
    type: 'two',
    label: 'Pro / Con',
    description: 'Weigh the light and dark',
    count: 2,
    positions: ['Pro', 'Con'],
  },
  three: {
    type: 'three',
    label: 'Next Step',
    description: 'Situation / Action / Outcome',
    count: 3,
    positions: ['Situation', 'Action', 'Outcome'],
  },
  standup: {
    type: 'standup',
    label: 'Standup',
    description: 'Yesterday / Today / Blockers',
    count: 3,
    positions: ['Yesterday', 'Today', 'Blockers'],
  },
  retro: {
    type: 'retro',
    label: 'Retro',
    description: 'Start / Stop / Continue',
    count: 3,
    positions: ['Start', 'Stop', 'Continue'],
  },
  four: {
    type: 'four',
    label: '360 Review',
    description: 'Examine blind spots',
    count: 4,
    positions: [
      'Your Motivation',
      'External Forces',
      'Ideal Outcome',
      'Likely Outcome',
    ],
  },
}

export function shuffleDeck(): TarotCard[] {
  const deck = [...ALL_CARDS]
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck
}
