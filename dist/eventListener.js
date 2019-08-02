"use strict";

exports.__esModule = true;
exports.bind = bind;
exports.unbind = unbind;
var bindName = window.addEventListener ? 'addEventListener' : 'attachEvent';
var unbindName = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
var prefix = bindName !== 'addEventListener' ? 'on' : '';
/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

function bind(el, type, fn, capture) {
  el[bindName](prefix + type, fn, capture || false);
  return fn;
}
/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */


function unbind(el, type, fn, capture) {
  el[unbindName](prefix + type, fn, capture || false);
  return fn;
}