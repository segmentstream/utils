"use strict";

exports.__esModule = true;

exports.default = function (obj, prop) {
  try {
    delete obj[prop];
  } catch (e) {
    obj[prop] = undefined;
  }
};