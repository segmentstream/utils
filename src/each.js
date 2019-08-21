export default function (obj, fn) {
  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      fn(key, obj[key])
    }
  }
}
