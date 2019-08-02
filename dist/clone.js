"use strict";

exports.__esModule = true;
exports.default = clone;

function clone(obj, preserveFunctions) {
  if (preserveFunctions === void 0) {
    preserveFunctions = false;
  }

  if (!obj) {
    return obj;
  }

  if (!preserveFunctions && JSON.parse && JSON.stringify) {
    return JSON.parse(JSON.stringify(obj));
  }

  switch (typeof obj) {
    case 'object':
      if (!Array.isArray(obj)) {
        if (obj instanceof Date) {
          return new Date(obj.getTime());
        } // plain object


        var _copy = {};

        for (var key in obj) {
          if ({}.hasOwnProperty.call(obj, key)) {
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