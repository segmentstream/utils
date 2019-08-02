"use strict";

exports.__esModule = true;
exports.default = _default;

var _nextTick = _interopRequireDefault(require("async/nextTick"));

var _scriptOnLoad = _interopRequireDefault(require("./scriptOnLoad"));

var _setAttributes = _interopRequireDefault(require("./helpers/setAttributes"));

var _setOptionsProtocol = _interopRequireDefault(require("./helpers/setOptionsProtocol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(options, fn) {
  if (!options) throw new Error('Cant load nothing...'); // Allow for the simplest case, just passing a `src` string.

  if (typeof options === 'string') options = {
    src: options
  };
  (0, _setOptionsProtocol.default)(options); // Make the `<script>` element and insert it before the first script on the
  // page, which is guaranteed to exist since this Javascript is running.

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  (0, _setAttributes.default)(script, options, ['async', 'type', 'http', 'https']);
  script.src = options.src;
  /* eslint-disable max-len */
  // If we have a fn, attach event handlers, even in IE. Based off of
  // the Third-Party Javascript script loading example:
  // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html

  /* eslint-enable max-len */

  if (typeof fn === 'function') {
    (0, _scriptOnLoad.default)(script, fn);
  }

  var addScriptToHead = function addScriptToHead() {
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  };

  if (navigator.appName === 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/))) {
    // Append after event listeners are attached for IE.
    (0, _nextTick.default)(addScriptToHead);
  } else {
    addScriptToHead();
  } // Return the script element in case they want to do anything special, like
  // give it an ID or attributes.


  return script;
}