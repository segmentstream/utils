"use strict";

exports.__esModule = true;
exports.default = camelize;

function camelize(str, firstLetterUpperCase) {
  if (firstLetterUpperCase === void 0) {
    firstLetterUpperCase = false;
  }

  var result = str.replace(/(?:^|[-_\s]+)(\w)/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });

  if (!firstLetterUpperCase) {
    return "" + result[0].toLowerCase() + result.substr(1);
  }

  return result;
}