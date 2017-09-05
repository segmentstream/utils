'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getProp = getProp;
exports.setProp = setProp;
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
    if (nestedVar.hasOwnProperty(childKey) && nestedVar[childKey] !== undefined) {
      nestedVar = nestedVar[childKey];
    } else {
      return undefined;
    }
  }
  return nestedVar;
}

function setProp(obj, prop, value) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || typeof prop !== 'string') {
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

exports.default = { getProp: getProp, setProp: setProp };