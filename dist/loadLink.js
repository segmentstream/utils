"use strict";

exports.__esModule = true;
exports.default = _default;

var _nextTick = _interopRequireDefault(require("async/nextTick"));

var _scriptOnLoad = _interopRequireDefault(require("./scriptOnLoad"));

var _setAttributes = _interopRequireDefault(require("./helpers/setAttributes"));

var _setOptionsProtocol = _interopRequireDefault(require("./helpers/setOptionsProtocol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(options, fn) {
  if (!options) throw new Error('Cant load nothing...');
  (0, _setOptionsProtocol.default)(options, 'href'); // Make the `<link>` element and insert it before the first link on the
  // page, which is guaranteed to exist since this CSS is included on the page.

  var link = document.createElement('link');
  (0, _setAttributes.default)(link, options, ['https', 'http']);
  /* eslint-disable max-len */
  // If we have a fn, attach event handlers, even in IE. Based off of
  // the Third-Party Javascript script loading example:
  // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html

  /* eslint-enable max-len */

  if (typeof fn === 'function') {
    (0, _scriptOnLoad.default)(link, fn);
  }

  (0, _nextTick.default)(function () {
    // Append after event listeners are attached for IE.
    var firstLink = document.getElementsByTagName('link')[0];
    firstLink.parentNode.insertBefore(link, firstLink);
  }); // Return the link element in case they want to do anything special, like
  // give it an ID or attributes.

  return link;
}