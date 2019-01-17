"use strict";

exports.__esModule = true;

exports.default = function (element, attributes) {
  var excludeKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  Object.keys(attributes).forEach(function (key) {
    var value = attributes[key];
    if (!excludeKeys.includes(key)) {
      if (/^data-.*/.test(key)) {
        element.setAttribute(key, value);
      } else {
        element[key] = value;
      }
    }
  });
};