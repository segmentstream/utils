import nextTick from 'async/nextTick';
import onLoad from './scriptOnLoad';
import setAttributes from './helpers/setAttributes';
import setOptionsProtocol from './helpers/setOptionsProtocol';

export default function (options, fn) {
  if (!options) throw new Error('Cant load nothing...');

  // Allow for the simplest case, just passing a `src` string.
  if (typeof options === 'string') options = { src: options };

  setOptionsProtocol(options);

  // Make the `<iframe>` element and insert it before the first iframe on the
  // page, which is guaranteed to exist since this Javaiframe is running.
  const iframe = document.createElement('iframe');
  setAttributes(iframe, options, ['width', 'height', 'frameBorder', 'style', 'http', 'https']);
  iframe.width = options.width || 0;
  iframe.height = options.height || 0;
  iframe.frameBorder = options.frameBorder || 0;
  iframe.style.display = 'none';

  /* eslint-disable max-len */
  // If we have a fn, attach event handlers, even in IE. Based off of
  // the Third-Party Javascript script loading example:
  // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
  /* eslint-enable max-len */
  if (typeof fn === 'function') {
    onLoad(iframe, fn);
  }

  nextTick(() => {
    // Append after event listeners are attached for IE.
    document.body.appendChild(iframe);
  });

  // Return the iframe element in case they want to do anything special, like
  // give it an ID or attributes.
  return iframe;
}
