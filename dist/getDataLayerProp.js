'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = getDataLayerProp;

var _dotProp = require('./dotProp');

function getDataLayerProp(prop) {
  if (!window.dataLayer || !window.dataLayer.push) return undefined;
  for (var i = window.dataLayer.length; i >= 0; i -= 1) {
    if (_typeof(window.dataLayer[i]) === 'object') {
      var value = (0, _dotProp.getProp)(window.dataLayer[i], prop);
      if (value !== undefined) {
        return value;
      }
    }
  }
  return undefined;
}