"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProp = getProp;
exports.setProp = setProp;
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _keyToArray(key) {
  key = key.trim();

  if (key === '') {
    return [];
  }

  key = key.replace(/\[(\w+)\]/g, '.$1');
  key = key.replace(/^\./, '');
  return key.split('.');
}

function getProp(obj, prop) {
  var keyParts = _keyToArray(prop);

  var nestedVar = obj;

  while (keyParts.length > 0) {
    var childKey = keyParts.shift();

    if (nestedVar !== undefined && nestedVar !== null && nestedVar.hasOwnProperty && nestedVar.hasOwnProperty(childKey) && nestedVar[childKey] !== undefined) {
      nestedVar = nestedVar[childKey];
    } else {
      return undefined;
    }
  }

  return nestedVar;
}

function setProp(obj, prop, value) {
  if (_typeof(obj) !== 'object' || typeof prop !== 'string') {
    return;
  }

  var keyParts = _keyToArray(prop);

  for (var i = 0; i < keyParts.length; i++) {
    var p = keyParts[i];

    if (_typeof(obj[p]) !== 'object') {
      obj[p] = {};
    }

    if (i === keyParts.length - 1) {
      obj[p] = value;
    }

    obj = obj[p];
  }
}

var _default = {
  getProp: getProp,
  setProp: setProp
};
exports.default = _default;