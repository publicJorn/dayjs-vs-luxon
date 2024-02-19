import './style.css'
;(async function () {
  const dayjs = await import('./dayjs')
  const luxon = await import('./luxon')
  const datefns = await import('./date-fns')

  console.log('dayjs', dayjs.display)
  console.log('luxon', luxon.display)
  console.log('date-fns', datefns.display)
})()
