export default function (obj) {
  let size = 0
  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) size += 1
  }
  return size
}
