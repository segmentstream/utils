import nextTick from 'async/nextTick';
import onLoad from './scriptOnLoad';
import setAttributes from './helpers/setAttributes';
import setOptionsProtocol from './helpers/setOptionsProtocol';

export default function (options, fn) {
  if (!options) throw new Error('Cant load nothing...');

  setOptionsProtocol(options, 'href');

  // Make the `<link>` element and insert it before the first link on the
  // page, which is guaranteed to exist since this CSS is included on the page.
  const link = document.createElement('link');
  setAttributes(link, options, ['https', 'http']);

  /* eslint-disable max-len */
  // If we have a fn, attach event handlers, even in IE. Based off of
  // the Third-Party Javascript script loading example:
  // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
  /* eslint-enable max-len */
  if (typeof fn === 'function') {
    onLoad(link, fn);
  }

  nextTick(() => {
    // Append after event listeners are attached for IE.
    const firstLink = document.getElementsByTagName('link')[0];
    firstLink.parentNode.insertBefore(link, firstLink);
  });

  // Return the link element in case they want to do anything special, like
  // give it an ID or attributes.
  return link;
}
