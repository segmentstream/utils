'use strict';

exports.__esModule = true;

exports.default = function (options, fn) {
  if (!options) throw new Error('Cant load nothing...');

  // Allow for the simplest case, just passing a `src` string.
  if (typeof options === 'string') options = { src: options };

  (0, _setOptionsProtocol2.default)(options);

  // Make the `<iframe>` element and insert it before the first iframe on the
  // page, which is guaranteed to exist since this Javaiframe is running.
  var iframe = document.createElement('iframe');
  (0, _setAttributes2.default)(iframe, options, ['width', 'height', 'frameBorder', 'style', 'http', 'https']);
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
    (0, _scriptOnLoad2.default)(iframe, fn);
  }

  (0, _nextTick2.default)(function () {
    // Append after event listeners are attached for IE.
    document.body.appendChild(iframe);
  });

  // Return the iframe element in case they want to do anything special, like
  // give it an ID or attributes.
  return iframe;
};

var _nextTick = require('async/nextTick');

var _nextTick2 = _interopRequireDefault(_nextTick);

var _scriptOnLoad = require('./scriptOnLoad');

var _scriptOnLoad2 = _interopRequireDefault(_scriptOnLoad);

var _setAttributes = require('./setAttributes');

var _setAttributes2 = _interopRequireDefault(_setAttributes);

var _setOptionsProtocol = require('./setOptionsProtocol');

var _setOptionsProtocol2 = _interopRequireDefault(_setOptionsProtocol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }