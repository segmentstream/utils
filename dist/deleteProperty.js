"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (obj, prop) {
  try {
    delete obj[prop];
  } catch (e) {
    obj[prop] = undefined;
  }
};