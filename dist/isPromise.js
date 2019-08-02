"use strict";

exports.__esModule = true;
exports.default = isPromise;

function isPromise(result) {
  return result && typeof result === 'object' && result.then && typeof result.then === 'function';
}