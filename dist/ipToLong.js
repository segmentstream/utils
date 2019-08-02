"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ipToLong;

function ipToLong(ip) {
  var ipl = 0;
  ip.split('.').forEach(function (octet) {
    ipl <<= 8;
    ipl += parseInt(octet, 10);
  });
  return ipl >>> 0;
}