"use strict";

exports.__esModule = true;
exports.getProp = getProp;
exports.setProp = setProp;
exports.default = void 0;

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

    if (nestedVar !== undefined && nestedVar !== null && nestedVar.hasOwnProperty && {}.hasOwnProperty.call(nestedVar, childKey) && nestedVar[childKey] !== undefined) {
      nestedVar = nestedVar[childKey];
    } else {
      return undefined;
    }
  }

  return nestedVar;
}

function setProp(obj, prop, value) {
  if (typeof obj !== 'object' || typeof prop !== 'string') {
    return;
  }

  var keyParts = _keyToArray(prop);

  for (var i = 0; i < keyParts.length; i++) {
    var p = keyParts[i];

    if (typeof obj[p] !== 'object') {
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