"use strict";

exports.__esModule = true;
exports.log = log;
exports.warn = warn;
exports.info = info;
exports.error = error;
exports.group = group;
exports.groupEnd = groupEnd;

var _noop = _interopRequireDefault(require("./noop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.console.log = window.console.log || _noop.default;
window.console.info = window.console.info || window.console.log;
window.console.warn = window.console.warn || window.console.log;
window.console.error = window.console.error || window.console.warn;
var browserSupportsGroups = !!window.console.group;

function log(message, style) {
  window.console.log(message, style);
}

function warn(message) {
  window.console.warn(message);
}

function info(message) {
  window.console.info(message);
}

function error(errorMsg) {
  if (window.__DEV_MODE__) {
    throw errorMsg;
  }

  window.console.error(errorMsg);
}

function group(message) {
  if (browserSupportsGroups) {
    window.console.group(message);
  } else {
    log(message);
  }
}

function groupEnd() {
  if (browserSupportsGroups) window.console.groupEnd();
}