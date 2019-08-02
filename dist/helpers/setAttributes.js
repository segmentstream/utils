"use strict";

exports.__esModule = true;
exports.default = void 0;

var _default = function _default(element, attributes, excludeKeys) {
  if (excludeKeys === void 0) {
    excludeKeys = [];
  }

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