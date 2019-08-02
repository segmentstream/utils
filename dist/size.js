"use strict";

exports.__esModule = true;
exports.default = _default;

function _default(obj) {
  var size = 0;

  for (var key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) size += 1;
  }

  return size;
}