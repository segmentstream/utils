"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preventDefault;
function preventDefault(e) {
  e = e || window.event;
  return e.preventDefault ? e.preventDefault() : e.returnValue = false;
}