'use strict';

exports.__esModule = true;
exports.default = camelize;
function camelize(str) {
  var firstLetterUpperCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var result = str.replace(/(?:^|[-_\s]+)(\w)/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  if (!firstLetterUpperCase) {
    return '' + result[0].toLowerCase() + result.substr(1);
  }
  return result;
}