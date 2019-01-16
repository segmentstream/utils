'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = cleanObject;

var _deleteProperty = require('./deleteProperty');

var _deleteProperty2 = _interopRequireDefault(_deleteProperty);

var _each = require('./each');

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cleanObject(object) {
  (0, _each2.default)(object, function (key) {
    var value = object[key];
    if (value === undefined || value === null || value === '') {
      (0, _deleteProperty2.default)(object, key);
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !(value instanceof Date) && (!Array.isArray(value) || Object.keys(value).length > 0)) {
      cleanObject(object[key]);
    }
  });

  return object;
}