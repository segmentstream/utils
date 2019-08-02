"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDataLayerProp;

var _dotProp = require("./dotProp");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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