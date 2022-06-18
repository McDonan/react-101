export function getDate(dt) {
  let dateTime = new Date(dt)
  return `${dateTime.getFullYear()}-${('0' + (dateTime.getMonth() + 1)).slice(
    -2
  )}-${('0' + dateTime.getDate()).slice(-2)}`
}

export function getDateTime(dt) {
  let dateTime = new Date(dt)
  return `${('0' + dateTime.getDate()).slice(-2)}/${(
    '0' +
    (dateTime.getMonth() + 1)
  ).slice(-2)}/${dateTime.getFullYear()} ${(
    '0' +
    (dateTime.getHours() + 1)
  ).slice(-2)}:${('0' + (dateTime.getMinutes() + 1)).slice(-2)} น.`
}
