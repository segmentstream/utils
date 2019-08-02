"use strict";

exports.__esModule = true;
exports.default = generateUtmFromReferrer;
exports.setIgnoreSameDomainCheck = void 0;

var _topDomain = _interopRequireDefault(require("./topDomain"));

var _url = require("./url");

var _queryString = require("./queryString");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var engines = [{
  regex: /www.google./,
  query: 'q',
  name: 'google'
}, {
  regex: /yandex..*\/.*\?.*text=/,
  query: 'text',
  name: 'yandex'
}, {
  regex: /rambler.ru\/search/,
  query: 'query',
  name: 'rambler'
}, {
  regex: /go.mail.ru\//,
  query: 'q',
  name: 'mailru'
}, {
  regex: /www.bing.com\//,
  query: 'q',
  name: 'bing'
}, {
  regex: /search.yahoo.com\/search/,
  query: 'p',
  name: 'yahoo'
}, {
  regex: /ru.ask.com\//,
  query: 'q',
  name: 'ask'
}, {
  regex: /search.qip.ru\/search/,
  query: 'query',
  name: 'qip'
}, {
  regex: /360.cn\//,
  query: 'q',
  name: '360.cn'
}, {
  regex: /www.alice.com\//,
  query: 'qs',
  name: 'Alice'
}, {
  regex: /aliceadsl.fr/,
  query: 'qs',
  name: 'Alice'
}, {
  regex: /www.alltheweb.com\//,
  query: 'q',
  name: 'Alltheweb'
}, {
  regex: /www.altavista.com\//,
  query: 'q',
  name: 'Altavista'
}, {
  regex: /www.ask.com\//,
  query: 'q',
  name: 'Ask'
}, {
  regex: /search.aol.fr/,
  query: 'q',
  name: 'Ask'
}, {
  regex: /alicesuche.aol.de/,
  query: 'q',
  name: 'Ask'
}, {
  regex: /search.auone.jp\//,
  query: 'q',
  name: 'Auone'
}, {
  regex: /isearch.avg.com/,
  query: 'q',
  name: 'Avg'
}, {
  regex: /search.babylon.com/,
  query: 'q',
  name: 'Babylon'
}, {
  regex: /www.baidu.com\//,
  query: 'wd',
  name: 'Baidu'
}, {
  regex: /biglobe.ne.jp/,
  query: 'q',
  name: 'Biglobe'
}, {
  regex: /search.centrum.cz\//,
  query: 'q',
  name: 'Centrum.cz'
}, {
  regex: /search.comcast.net/,
  query: 'q',
  name: 'Comcast'
}, {
  regex: /search.conduit.com/,
  query: 'q',
  name: 'Conduit'
}, {
  regex: /www.cnn.com\/SEARCH\//,
  query: 'q',
  name: 'CNN'
}, {
  regex: /www.daum.net\//,
  query: 'q',
  name: 'Daum'
}, {
  regex: /www.ekolay.net\//,
  query: 'q',
  name: 'Ekolay'
}, {
  regex: /www.eniro.se\//,
  query: 'search_word',
  name: 'Eniro'
}, {
  regex: /www.globo.com\/busca\//,
  query: 'q',
  name: 'Globo'
}, {
  regex: /goo.ne.jp/,
  query: 'MT',
  name: 'goo.ne'
}, {
  regex: /www.haosou.com\/s/,
  query: 'q',
  name: 'haosou.com'
}, {
  regex: /search.incredimail.com/,
  query: 'q',
  name: 'Incredimail'
}, {
  regex: /www.kvasir.no\//,
  query: 'q',
  name: 'Kvasir'
}, {
  regex: /www.lycos.com\//,
  query: 'q',
  name: 'Lycos'
}, {
  regex: /search.lycos./,
  query: 'query',
  name: 'Lycos'
}, {
  regex: /www.mamma.com\//,
  query: 'query',
  name: 'Mamma'
}, {
  regex: /www.msn.com\//,
  query: 'q',
  name: 'MSN'
}, {
  regex: /www.mynet.com\//,
  query: 'q',
  name: 'Mynet'
}, {
  regex: /najdi.si/,
  query: 'q',
  name: 'Najdi'
}, {
  regex: /www.naver.com\//,
  query: 'query',
  name: 'Naver'
}, {
  regex: /search.netscape.com\//,
  query: 'query',
  name: 'Netscape'
}, {
  regex: /szukaj.onet.pl/,
  query: 'qt',
  name: 'ONET'
}, {
  regex: /www.ozu.es\//,
  query: 'q',
  name: 'Ozu'
}, {
  regex: /rakuten.co.jp/,
  query: 'qt',
  name: 'Rakuten'
}, {
  regex: /search-results.com/,
  query: 'q',
  name: 'Search-results'
}, {
  regex: /search.smt.docomo.ne.jp/,
  query: 'MT',
  name: 'search.smt.docomo'
}, {
  regex: /sesam.no\//,
  query: 'q',
  name: 'Sesam'
}, {
  regex: /www.seznam.cz\//,
  query: 'q',
  name: 'Seznam'
}, {
  regex: /www.so.com\/s/,
  query: 'q',
  name: 'So.com'
}, {
  regex: /www.sogou.com\//,
  query: 'query',
  name: 'Sogou'
}, {
  regex: /www.startsiden.no\/sok/,
  query: 'q',
  name: 'Startsiden'
}, {
  regex: /www.szukacz.pl\//,
  query: 'q',
  name: 'Szukacz'
}, {
  regex: /buscador.terra.com.br/,
  query: 'query',
  name: 'Terra'
}, {
  regex: /search.tut.by\//,
  query: 'query',
  name: 'Tut.by'
}, {
  regex: /search.ukr.net\//,
  query: 'q',
  name: 'Ukr'
}, {
  regex: /search.virgilio.it\//,
  query: 'qs',
  name: 'Virgilio'
}, {
  regex: /www.voila.fr\//,
  query: 'rdata',
  name: 'Voila'
}, {
  regex: /www.wp.pl\//,
  query: 'szukaj',
  name: 'Wirtulana Polska'
}, {
  regex: /www.yam.com\//,
  query: 'k',
  name: 'Yam'
}];
var ignoreSameDomainCheck = false; // Set skip topDomain check while unit testing

var setIgnoreSameDomainCheck = function setIgnoreSameDomainCheck(value) {
  ignoreSameDomainCheck = value;
};

exports.setIgnoreSameDomainCheck = setIgnoreSameDomainCheck;

var getSearchEngine = function getSearchEngine(referrer) {
  var engine = engines.find(function (item) {
    return item.regex.test(referrer);
  });
  return engine || false;
};

var normalizeHostName = function normalizeHostName(hostname) {
  return hostname.replace(/^www\./i, '');
};

function generateUtmFromReferrer(referrer) {
  var utmParams = {};

  if (ignoreSameDomainCheck || (0, _topDomain.default)(referrer) !== (0, _topDomain.default)(window.location.hostname)) {
    var engine = getSearchEngine(referrer);
    var urlParams = (0, _url.parse)(referrer);

    if (engine) {
      var params = (0, _queryString.parse)(urlParams.query);
      utmParams.source = engine.name;
      utmParams.medium = 'organic';

      if (params[engine.query]) {
        utmParams.term = params[engine.query];
      }
    } else if (referrer) {
      utmParams.source = normalizeHostName(urlParams.hostname);
      utmParams.medium = 'referral';
    }
  }

  return utmParams;
}