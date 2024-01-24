import './style.css'

;(async function () {
  const dayjs = await import('./dayjs')
  const luxon = await import('./luxon')

  console.log(dayjs.display)
  console.log(luxon.display)
})()
