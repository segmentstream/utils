'use strict';

exports.__esModule = true;
exports.default = domQuery;
function domQuery(selector, context) {
  context = context || window.document;
  // Redirect simple selectors to the more performant function
  if (/^(#?[\w-]+|\.[\w-.]+)$/.test(selector)) {
    switch (selector.charAt(0)) {
      case '#':
        // Handle ID-based selectors
        var el = context.getElementById(selector.substr(1));
        if (el) {
          return [el];
        }
        return [];
      case '.':
        // Handle class-based selectors
        // Query by multiple classes by converting the selector
        // string into single spaced class names
        var classes = selector.substr(1).replace(/\./g, ' ');
        return [].slice.call(context.getElementsByClassName(classes));
      default:
        // Handle tag-based selectors
        return [].slice.call(context.getElementsByTagName(selector));
    }
  }
  // Default to `querySelectorAll`
  return [].slice.call(context.querySelectorAll(selector));
}