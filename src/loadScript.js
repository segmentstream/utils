import onLoad from './scriptOnLoad'
import setAttributes from './helpers/setAttributes'
import setOptionsProtocol from './helpers/setOptionsProtocol'

export default function (options, fn) {
  if (!options) throw new Error('Cant load nothing...')

  // Allow for the simplest case, just passing a `src` string.
  if (typeof options === 'string') options = { src: options }

  setOptionsProtocol(options)

  // Make the `<script>` element and insert it before the first script on the
  // page, which is guaranteed to exist since this Javascript is running.
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  setAttributes(script, options, ['async', 'type', 'http', 'https'])
  script.src = options.src

  /* eslint-disable max-len */
  // If we have a fn, attach event handlers, even in IE. Based off of
  // the Third-Party Javascript script loading example:
  // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
  /* eslint-enable max-len */
  if (typeof fn === 'function') {
    onLoad(script, fn)
  }

  const addScriptToHead = () => {
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)
  }

  if (navigator.appName === 'Microsoft Internet Explorer' ||
      !!(navigator.userAgent.match(/Trident/) ||
      navigator.userAgent.match(/rv:11/))) {
    // Append after event listeners are attached for IE.
    setTimeout(addScriptToHead, 0)
  } else {
    addScriptToHead()
  }

  // Return the script element in case they want to do anything special, like
  // give it an ID or attributes.
  return script
}
