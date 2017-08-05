"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStyle;
function getStyle(el, prop) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(el)[prop];
  } else if (el.currentStyle) {
    return el.currentStyle[prop];
  }
  return undefined;
}