"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getQueryParam;

var _htmlGlobals = _interopRequireDefault(require("./htmlGlobals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getQueryParam(name, queryString) {
  if (typeof queryString !== 'string') {
    queryString = _htmlGlobals.default.getLocation().search;
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