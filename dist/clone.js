"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clone;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function clone(obj) {
  var preserveFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!obj) {
    return obj;
  }

  if (!preserveFunctions && JSON.parse && JSON.stringify) {
    return JSON.parse(JSON.stringify(obj));
  }

  switch (_typeof(obj)) {
    case 'object':
      if (!Array.isArray(obj)) {
        if (obj instanceof Date) {
          return new Date(obj.getTime());
        } // plain object


        var _copy = {};

        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            _copy[key] = clone(obj[key], preserveFunctions);
          }
        }

        return _copy;
      } // array


      var copy = new Array(obj.length);

      for (var i = 0, l = obj.length; i < l; i += 1) {
        copy[i] = clone(obj[i], preserveFunctions);
      }

      return copy;

    default:
      // string, number, boolean, …
      return obj;
  }
}