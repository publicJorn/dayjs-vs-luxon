import './style.css'
;(async function () {
  const dayjs = await import('./dayjs')
  const luxon = await import('./luxon')

  console.log('dayjs', dayjs.display)
  console.log('luxon', luxon.display)
})()
