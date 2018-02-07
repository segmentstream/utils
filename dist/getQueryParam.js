'use strict';

exports.__esModule = true;
exports.default = getQueryParam;

var _htmlGlobals = require('./htmlGlobals');

var _htmlGlobals2 = _interopRequireDefault(_htmlGlobals);

var _normalizeString = require('./normalizeString');

var _normalizeString2 = _interopRequireDefault(_normalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getQueryParam(name, queryString) {
  var normalize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!queryString) {
    queryString = _htmlGlobals2.default.getLocation().search;
  }
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(queryString);
  if (results === null) {
    return '';
  }
  var output = decodeURIComponent(results[1].replace(/\+/g, ' '));
  if (normalize) {
    return (0, _normalizeString2.default)(output);
  }
  return output;
}