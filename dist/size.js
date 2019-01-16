"use strict";

exports.__esModule = true;

exports.default = function (obj) {
  var size = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};