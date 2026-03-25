const SYNODIC_DAYS = 29.53058867
/** Known new moon (UTC), Jan 6 2000 ~18:14 — anchor for phase fraction */
const NEW_MOON_ANCHOR_MS = Date.UTC(2000, 0, 6, 18, 14, 0)

/**
 * 0 = new moon, 0.5 = full moon (synodic fraction).
 */
function lunarPhaseFraction(date: Date): number {
  const daysSince = (date.getTime() - NEW_MOON_ANCHOR_MS) / 86400000
  const pos = ((daysSince % SYNODIC_DAYS) + SYNODIC_DAYS) % SYNODIC_DAYS
  return pos / SYNODIC_DAYS
}

const PHASE_LABELS = [
  'New Moon',
  'Waxing Crescent',
  'First Quarter',
  'Waxing Gibbous',
  'Full Moon',
  'Waning Gibbous',
  'Last Quarter',
  'Waning Crescent',
] as const

export function getMoonPhaseLabel(date: Date = new Date()): string {
  const frac = lunarPhaseFraction(date)
  const index = Math.floor((frac * 8 + 0.5) % 8)
  return PHASE_LABELS[index] ?? 'New Moon'
}

/** Illuminated fraction visible from Earth, 0–100 (0 = new, 100 = full). */
export function getMoonIlluminationPercent(date: Date = new Date()): number {
  const frac = lunarPhaseFraction(date)
  const illum = (1 - Math.cos(2 * Math.PI * frac)) / 2
  return Math.round(illum * 100)
}

const PHASE_EMOJI: Record<(typeof PHASE_LABELS)[number], string> = {
  'New Moon': '🌑',
  'Waxing Crescent': '🌒',
  'First Quarter': '🌓',
  'Waxing Gibbous': '🌔',
  'Full Moon': '🌕',
  'Waning Gibbous': '🌖',
  'Last Quarter': '🌗',
  'Waning Crescent': '🌘',
}

export function getMoonPhaseEmoji(date: Date = new Date()): string {
  const label = getMoonPhaseLabel(date)
  return PHASE_EMOJI[label as keyof typeof PHASE_EMOJI] ?? '🌑'
}

export interface MoonPhaseDisplay {
  emoji: string
  /** Title Case, e.g. Waxing Gibbous */
  label: string
  percent: number
}

export function getMoonPhaseDisplay(date: Date = new Date()): MoonPhaseDisplay {
  return {
    emoji: getMoonPhaseEmoji(date),
    label: getMoonPhaseLabel(date),
    percent: getMoonIlluminationPercent(date),
  }
}
