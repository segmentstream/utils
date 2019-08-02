"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(element, attributes) {
  var excludeKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  Object.keys(attributes).forEach(function (key) {
    var value = attributes[key];

    if (excludeKeys.indexOf(key) < 0) {
      if (/^data-.*/.test(key)) {
        element.setAttribute(key, value);
      } else {
        element[key] = value;
      }
    }
  });
};

exports.default = _default;