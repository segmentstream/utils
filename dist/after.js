"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/**
 * Return the `fn` wrapped in logic that will only let it be called after
 * it has been invoked a certain number of `times`.
 *
 * @param {Number} times
 * @param {Function} fn
 */
function _default(times, fn) {
  var timeLeft = times;
  return function afterAll() {
    if (--timeLeft < 1) {
      return fn.apply(this, arguments);
    }
  };
}