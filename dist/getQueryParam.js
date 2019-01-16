'use strict';

exports.__esModule = true;
exports.default = getQueryParam;

var _htmlGlobals = require('./htmlGlobals');

var _htmlGlobals2 = _interopRequireDefault(_htmlGlobals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getQueryParam(name, queryString) {
  if (typeof queryString !== 'string') {
    queryString = _htmlGlobals2.default.getLocation().search;
  }
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(queryString);
  if (results === null) {
    return '';
  }
  var output = decodeURIComponent(results[1].replace(/\+/g, ' '));
  return output;
}