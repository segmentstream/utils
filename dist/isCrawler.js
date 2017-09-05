"use strict";

exports.__esModule = true;
exports.default = isCrawler;
var crawlers = [/bot/i, /spider/i, /facebookexternalhit/i, /simplepie/i, /yahooseeker/i, /embedly/i, /quora link preview/i, /outbrain/i, /vkshare/i, /monit/i, /Pingability/i, /Monitoring/i, /WinHttpRequest/i, /Apache-HttpClient/i, /getprismatic.com/i, /python-requests/i, /Twurly/i, /yandex/i, /browserproxy/i, /Monitoring/i, /crawler/i, /Qwantify/i, /Yahoo! Slurp/i, /pinterest/i];

function isCrawler(userAgent) {
  return crawlers.some(function (crawler) {
    return crawler.test(userAgent);
  });
}