"use strict";

exports.__esModule = true;
exports.default = preventDefault;
function preventDefault(e) {
  e = e || window.event;
  return e.preventDefault ? e.preventDefault() : e.returnValue = false;
}