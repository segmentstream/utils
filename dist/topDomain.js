'use strict';

exports.__esModule = true;
exports.default = topDomain;

var _url = require('./url.js');

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Levels returns all levels of the given url.
 *
 * @param {String} url
 * @return {Array}
 * @api public
 */
function getLevels(url) {
  var host = (0, _url.parse)(url).hostname;
  var parts = host.split('.');
  var last = parts[parts.length - 1];
  var levels = [];

  // Ip address.
  if (parts.length === 4 && parseInt(last, 10) === last) {
    return levels;
  }

  // Localhost.
  if (parts.length <= 1) {
    return levels;
  }

  // Create levels.
  for (var i = parts.length - 2; i >= 0; --i) {
    levels.push(parts.slice(i).join('.'));
  }

  return levels;
}

/**
 * Get the top domain.
 *
 * The function constructs the levels of domain
 * and attempts to set a global cookie on each one
 * when it succeeds it returns the top level domain.
 *
 * The method returns an empty string when the hostname
 * is an ip or `localhost`.
 *
 * Example levels:
 *
 *      domain.levels('http://www.google.co.uk');
 *      // => ["co.uk", "google.co.uk", "www.google.co.uk"]
 *
 * Example:
 *
 *      domain('http://localhost:3000/baz');
 *      // => ''
 *      domain('http://dev:3000/baz');
 *      // => ''
 *      domain('http://127.0.0.1:3000/baz');
 *      // => ''
 *      domain('http://example.com/baz');
 *      // => 'example.com'
 *
 * @param {String} url
 * @return {String}
 * @api public
 */

function topDomain(url) {
  var levels = getLevels(url);

  // Lookup the real top level one.
  for (var i = 0; i < levels.length; ++i) {
    var cname = '__tld__';
    var domain = levels[i];
    var opts = {
      domain: '.' + domain
    };
    _jsCookie2.default.set(cname, 1, opts);
    if (_jsCookie2.default.get(cname)) {
      _jsCookie2.default.set(cname, null, opts);
      return domain;
    }
  }

  return '';
}