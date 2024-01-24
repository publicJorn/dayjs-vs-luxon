import * as dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'
import * as timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const dLocal = dayjs('2024-01-01')
const dAmsterdam = dayjs.tz('2024-01-01', 'Europe/Amsterdam')
// const dUTC = dAmsterdam.utc() // Not required, done by `toISOString`

export const display = {
  local: dLocal.format(),
  amsterdam: dAmsterdam.format(),
  utc: dAmsterdam.toISOString(),
}
