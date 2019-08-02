"use strict";

exports.__esModule = true;
exports.default = jsonIsEqual;

function jsonIsEqual(json1, json2) {
  if (typeof json1 !== 'string') {
    json1 = JSON.stringify(json1);
  }

  if (typeof json2 !== 'string') {
    json2 = JSON.stringify(json2);
  }

  return json1 === json2;
}