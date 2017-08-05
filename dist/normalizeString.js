'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeString;
function normalizeString(str) {
  if (!str) return '';

  return String(str).trim().toLowerCase();
}