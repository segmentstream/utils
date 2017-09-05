'use strict';

exports.__esModule = true;
exports.default = getQueryParam;

var _htmlGlobals = require('./htmlGlobals');

var _htmlGlobals2 = _interopRequireDefault(_htmlGlobals);

var _normalizeString = require('./normalizeString');

var _normalizeString2 = _interopRequireDefault(_normalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getQueryParam(name, queryString) {
  if (!queryString) {
    queryString = _htmlGlobals2.default.getLocation().search;
  }
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(queryString);
  return results === null ? '' : (0, _normalizeString2.default)(decodeURIComponent(results[1].replace(/\+/g, ' ')));
}