"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelize;

function camelize(str) {
  var firstLetterUpperCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var result = str.replace(/(?:^|[-_\s]+)(\w)/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });

  if (!firstLetterUpperCase) {
    return "".concat(result[0].toLowerCase()).concat(result.substr(1));
  }

  return result;
}