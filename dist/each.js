"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, fn) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn(key, obj[key]);
    }
  }
};