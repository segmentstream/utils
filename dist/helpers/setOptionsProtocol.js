'use strict';

exports.__esModule = true;

// set http / https protocol as source of element options
exports.default = function (options) {
  var urlKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'src';

  var https = document.location.protocol === 'https:' || document.location.protocol === 'chrome-extension:';

  // If you use protocol relative URLs, third-party scripts like Google
  // Analytics break when testing with `file:` so this fixes that.
  if (options[urlKey] && options[urlKey].indexOf('//') === 0) {
    options[urlKey] = https ? 'https:' + options[urlKey] : 'http:' + options[urlKey];
  }

  // Allow them to pass in different URLs depending on the protocol.
  if (https && options.https) options[urlKey] = options.https;else if (!https && options.http) options[urlKey] = options.http;
};