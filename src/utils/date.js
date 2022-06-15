export function getDate(dt) {
  let datetime = new Date(dt);
  return `${datetime.getFullYear()}-${("0" + (datetime.getMonth() + 1)).slice(
    -2
  )}-${("0" + datetime.getDate()).slice(-2)}`;
}

export function getDateTime(dt) {
  let datetime = new Date(dt);
  return `${("0" + datetime.getDate()).slice(-2)}/${(
    "0" +
    (datetime.getMonth() + 1)
  ).slice(-2)}/${datetime.getFullYear()} ${(
    "0" +
    (datetime.getHours() + 1)
  ).slice(-2)}:${("0" + (datetime.getMinutes() + 1)).slice(-2)} น.`;
}
