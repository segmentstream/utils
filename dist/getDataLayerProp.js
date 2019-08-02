"use strict";

exports.__esModule = true;
exports.default = getDataLayerProp;

var _dotProp = require("./dotProp");

function getDataLayerProp(prop) {
  if (!window.dataLayer || !window.dataLayer.push) return undefined;

  for (var i = window.dataLayer.length; i >= 0; i -= 1) {
    if (typeof window.dataLayer[i] === 'object') {
      var value = (0, _dotProp.getProp)(window.dataLayer[i], prop);

      if (value !== undefined) {
        return value;
      }
    }
  }

  return undefined;
}