"use strict";

exports.__esModule = true;

exports.default = function (times, fn) {
  var timeLeft = times;
  return function afterAll() {
    if (--timeLeft < 1) {
      return fn.apply(this, arguments);
    }
  };
};