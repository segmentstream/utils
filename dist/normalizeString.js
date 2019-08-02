"use strict";

exports.__esModule = true;
exports.default = normalizeString;

function normalizeString(str) {
  if (!str) return '';
  return String(str).trim().toLowerCase();
}