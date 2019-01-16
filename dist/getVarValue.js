'use strict';

exports.__esModule = true;
exports.default = getVarValue;

var _dotProp = require('./dotProp');

function getVarValue(variable, source) {
  if (variable.type === 'constant') {
    return variable.value;
  }
  return (0, _dotProp.getProp)(source, variable.value);
}