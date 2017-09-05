'use strict';

exports.__esModule = true;

exports.default = function (options, fn) {
  if (!options) throw new Error('Cant load nothing...');

  var https = document.location.protocol === 'https:' || document.location.protocol === 'chrome-extension:';

  // If you use protocol relative URLs, third-party scripts like Google
  // Analytics break when testing with `file:` so this fixes that.
  if (options.href && options.href.indexOf('//') === 0) {
    options.href = https ? 'https:' + options.href : 'http:' + options.href;
  }

  // Allow them to pass in different URLs depending on the protocol.
  if (https && options.https) options.href = options.https;else if (!https && options.http) options.href = options.http;

  // Make the `<link>` element and insert it before the first link on the
  // page, which is guaranteed to exist since this CSS is included on the page.
  var link = document.createElement('link');
  link.href = options.href;
  if (options.rel) link.rel = options.rel;
  if (options.type) link.type = options.type;

  // If we have a fn, attach event handlers, even in IE. Based off of
  // the Third-Party Javascript script loading example:
  // https://github.com/thirdpartyjs/thirdpartyjs-code/blob/master/examples/templates/02/loading-files/index.html
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

var _scriptOnLoad = require('./scriptOnLoad.js');

var _scriptOnLoad2 = _interopRequireDefault(_scriptOnLoad);

var _nextTick = require('async/nextTick');

var _nextTick2 = _interopRequireDefault(_nextTick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }