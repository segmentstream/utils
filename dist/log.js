"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _noop = _interopRequireDefault(require("./noop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MESSAGE = 'message';
var WARNING = 'warning';
var ERROR = 'error';

function log(msg, type) {
  /* eslint-disable */
  console.log = console.log || _noop.default;
  console.warn = console.warn || console.log;
  console.error = console.error || console.warn;

  if (!type) {
    console.log(msg);
  } else if (type === WARNING) {
    console.warn(msg);
  } else if (type === ERROR) {
    console.error(msg);
  }
  /* eslint-enable */

}

log.MESSAGE = MESSAGE;
log.WARNING = WARNING;
log.ERROR = ERROR;
var _default = log;
exports.default = _default;