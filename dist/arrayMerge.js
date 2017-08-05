"use strict";

exports.__esModule = true;
exports.default = arrayMerge;
function arrayMerge(destArray, sourceArray) {
  for (var _iterator = sourceArray, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var value = _ref;

    if (destArray.indexOf(value) < 0) {
      destArray.push(value);
    }
  }
}