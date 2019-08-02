"use strict";

exports.__esModule = true;
exports.default = _default;

function _default(obj, prop) {
  try {
    delete obj[prop];
  } catch (e) {
    obj[prop] = undefined;
  }
}