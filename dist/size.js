"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(obj) {
  var size = 0;

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }

  return size;
}