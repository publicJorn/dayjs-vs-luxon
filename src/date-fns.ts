import { format } from 'date-fns-tz'

// import * as utc from 'dayjs/plugin/utc'
// import * as timezone from 'dayjs/plugin/timezone'

// dayjs.extend(utc)
// dayjs.extend(timezone)

const dLocal = new Date(2024, 0, 1)
// const dAmsterdam = utcToZonedTime(new Date('2024-01-01T00:00:00'), 'Europe/Amsterdma')
// const dUTC = dAmsterdam.utc() // Not required, done by `toISOString`

export const display = {
  local: format(dLocal, 'dd-MM-yyyy'),
  issues:
    'date-fns-tz does not work with v3 of date-fns. Also I really dislike the API, so not going to bother',
  // amsterdam: format(dAmsterdam, 'dd-MM-yyyy'),
  // utc: dAmsterdam.toISOString(),
}
