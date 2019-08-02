"use strict";

exports.__esModule = true;
exports.parse = parse;

/**
 * Return default port for `protocol`.
 *
 * @param  {String} protocol
 * @return {String}
 * @api private
 */
function port(protocol) {
  switch (protocol) {
    case 'http:':
      return 80;

    case 'https:':
      return 443;

    default:
      return window.location.port;
  }
}

function parse(url) {
  var a = document.createElement('a');
  a.href = url;
  return {
    href: a.href,
    host: a.host || window.location.host,
    port: a.port === '0' || a.port === '' ? port(a.protocol) : a.port,
    hash: a.hash,
    hostname: a.hostname || window.location.hostname,
    pathname: a.pathname.charAt(0) !== '/' ? '/' + a.pathname : a.pathname,
    protocol: !a.protocol || a.protocol === ':' ? window.location.protocol : a.protocol,
    search: a.search,
    query: a.search.slice(1)
  };
}