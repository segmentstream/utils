"use strict";

exports.__esModule = true;
exports.default = utmParams;

var _queryString = require("./queryString.js");

var _each = _interopRequireDefault(require("./each.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function utmParams(query) {
  // Remove leading ? if present
  if (query.charAt(0) === '?') {
    query = query.substring(1);
  }

  query = query.replace(/\?/g, '&');
  var params = (0, _queryString.parse)(query);
  var results = {};
  (0, _each.default)(params, function (key, param) {
    if (key.substr(0, 4) === 'utm_') {
      param = key.substr(4);
      if (param === 'campaign') param = 'name';
      results[param] = params[key];
    }
  });
  return results;
}