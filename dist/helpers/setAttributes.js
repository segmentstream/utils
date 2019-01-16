"use strict";

exports.__esModule = true;

exports.default = function (element, attributes) {
  var excludeKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  Object.entries(attributes).forEach(function (_ref) {
    var key = _ref[0],
        value = _ref[1];

    if (!excludeKeys.includes(key)) {
      if (/^data-.*/.test(key)) {
        element.setAttribute(key, value);
      } else {
        element[key] = value;
      }
    }
  });
};