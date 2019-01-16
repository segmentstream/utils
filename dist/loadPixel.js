'use strict';

exports.__esModule = true;

exports.default = function (options, fn) {
  fn = fn || function onPixelLoaded() {};
  var img = new Image();
  img.onerror = error(fn, 'failed to load pixel', img);
  img.onload = fn;
  (0, _setAttributes2.default)(img, options, ['width', 'height']);
  img.width = 1;
  img.height = 1;
  return img;
};

var _setAttributes = require('./setAttributes');

var _setAttributes2 = _interopRequireDefault(_setAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an error handler.
 *
 * @param {Fucntion} fn
 * @param {String} message
 * @param {Image} img
 * @return {Function}
 * @api private
 */

function error(fn, message, img) {
  return function (e) {
    e = e || window.event;
    var err = new Error(message);
    err.event = e;
    err.source = img;
    fn(err);
  };
}