import { format } from 'date-fns'

export function getDate(dt) {
  let dateTime = new Date(dt)
  return `${dateTime.getFullYear()}-${('0' + (dateTime.getMonth() + 1)).slice(
    -2
  )}-${('0' + dateTime.getDate()).slice(-2)}`
}

export function getDateTime(dt) {
  let dateTime = new Date(dt)
  return format(dateTime, 'dd/MM/yyyy HH:mm')
}
