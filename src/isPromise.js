export default function isPromise (result) {
  return (result && typeof result === 'object' && result.then && typeof result.then === 'function')
}
