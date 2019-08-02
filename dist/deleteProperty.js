"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(obj, prop) {
  try {
    delete obj[prop];
  } catch (e) {
    obj[prop] = undefined;
  }
}