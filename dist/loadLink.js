'use strict';

exports.__esModule = true;

exports.default = function (options, fn) {
  if (!options) throw new Error('Cant load nothing...');

  (0, _setOptionsProtocol2.default)(options, 'href');

  // Make the `<link>` element and insert it before the first link on the
  // page, which is guaranteed to exist since this CSS is included on the page.
  var link = document.createElement('link');
  (0, _setAttributes2.default)(link, options, ['https', 'http']);

  /* eslint-disable max-len */
  // If we have a fn, attach event handlers, even in IE. Based off of
  // the Third-Party Javascript script loading example:
  // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
  /* eslint-enable max-len */
  if (typeof fn === 'function') {
    (0, _scriptOnLoad2.default)(link, fn);
  }

  (0, _nextTick2.default)(function () {
    // Append after event listeners are attached for IE.
    var firstLink = document.getElementsByTagName('link')[0];
    firstLink.parentNode.insertBefore(link, firstLink);
  });

  // Return the link element in case they want to do anything special, like
  // give it an ID or attributes.
  return link;
};

var _nextTick = require('async/nextTick');

var _nextTick2 = _interopRequireDefault(_nextTick);

var _scriptOnLoad = require('./scriptOnLoad');

var _scriptOnLoad2 = _interopRequireDefault(_scriptOnLoad);

var _setAttributes = require('./helpers/setAttributes');

var _setAttributes2 = _interopRequireDefault(_setAttributes);

var _setOptionsProtocol = require('./helpers/setOptionsProtocol');

var _setOptionsProtocol2 = _interopRequireDefault(_setOptionsProtocol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }