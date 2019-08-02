"use strict";

exports.__esModule = true;
exports.default = _default;

function _default(obj, fn) {
  for (var key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      fn(key, obj[key]);
    }
  }
}