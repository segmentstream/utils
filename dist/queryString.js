"use strict";

exports.__esModule = true;
exports.parse = parse;
exports.stringify = stringify;

var _each = _interopRequireDefault(require("./each.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pattern = /(\w+)\[(\d+)\]/;
/**
 * Safely encode the given string
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

var encode = function encode(str) {
  try {
    return encodeURIComponent(str);
  } catch (e) {
    return str;
  }
};
/**
 * Safely decode the string
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


var decode = function decode(str) {
  try {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch (e) {
    return str;
  }
};
/**
 * Parse the given query `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */


function parse(str) {
  if (typeof str !== 'string') return {};
  str = str.trim();
  if (str === '') return {};
  if (str.charAt(0) === '?') str = str.slice(1);
  var obj = {};
  var pairs = str.split('&');

  for (var i = 0; i < pairs.length; i++) {
    var parts = pairs[i].split('=');
    var key = decode(parts[0]);
    var m = pattern.exec(key);

    if (m) {
      obj[m[1]] = obj[m[1]] || [];
      obj[m[1]][m[2]] = decode(parts[1]);
      continue;
    }

    obj[parts[0]] = parts[1] === null ? '' : decode(parts[1]);
  }

  return obj;
}
/**
 * Stringify the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */


function stringify(obj) {
  if (!obj) return '';
  var pairs = [];
  (0, _each.default)(obj, function (key, value) {
    if (typeof value === 'object' && value.length) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(encode(key + '[' + i + ']') + '=' + encode(value[i]));
      }

      return;
    }

    pairs.push(encode(key) + '=' + encode(obj[key]));
  });
  return pairs.join('&');
}