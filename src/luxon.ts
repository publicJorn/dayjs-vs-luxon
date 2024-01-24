import { DateTime } from 'luxon'

const dLocal = DateTime.fromISO('2024-01-01')
const dAmsterdam = DateTime.fromISO('2024-01-01', { zone: 'Europe/Amsterdam' })
const dUTC = dAmsterdam.toUTC()

export const display = {
  local: dLocal.toISO(),
  amsterdam: dAmsterdam.toISO(),
  utc: dUTC.toISO(),
}
