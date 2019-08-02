"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cleanObject;

var _deleteProperty = _interopRequireDefault(require("./deleteProperty"));

var _each = _interopRequireDefault(require("./each"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function cleanObject(object) {
  (0, _each.default)(object, function (key) {
    var value = object[key];

    if (value === undefined || value === null || value === '') {
      (0, _deleteProperty.default)(object, key);
    } else if (_typeof(value) === 'object' && !(value instanceof Date) && (!Array.isArray(value) || Object.keys(value).length > 0)) {
      cleanObject(object[key]);
    }
  });
  return object;
}