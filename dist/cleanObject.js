"use strict";

exports.__esModule = true;
exports.default = cleanObject;

var _deleteProperty = _interopRequireDefault(require("./deleteProperty"));

var _each = _interopRequireDefault(require("./each"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cleanObject(object) {
  (0, _each.default)(object, function (key) {
    var value = object[key];

    if (value === undefined || value === null || value === '') {
      (0, _deleteProperty.default)(object, key);
    } else if (typeof value === 'object' && !(value instanceof Date) && (!Array.isArray(value) || Object.keys(value).length > 0)) {
      cleanObject(object[key]);
    }
  });
  return object;
}