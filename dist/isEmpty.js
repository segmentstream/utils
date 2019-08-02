"use strict";

exports.__esModule = true;
exports.default = isEmpty;

function isEmpty(obj) {
  if (obj.constructor === Object && Object.keys(obj).length === 0) {
    return true;
  }

  return false;
}