'use strict';

exports.__esModule = true;
exports.setIgnoreSameDomainCheck = undefined;
exports.default = generateUtmFromReferrer;

var _topDomain = require('./topDomain');

var _topDomain2 = _interopRequireDefault(_topDomain);

var _url = require('./url');

var _queryString = require('./queryString');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var engines = [{ url: 'www.google.', query: 'q', name: 'google' }, { url: 'yandex.', query: 'text', name: 'yandex' }, { url: 'rambler.ru/search', query: 'query', name: 'rambler' }, { url: 'go.mail.ru/', query: 'q', name: 'mailru' }, { url: 'www.bing.com/', query: 'q', name: 'bing' }, { url: 'search.yahoo.com/search', query: 'p', name: 'yahoo' }, { url: 'ru.ask.com/', query: 'q', name: 'ask' }, { url: 'search.qip.ru/search', query: 'query', name: 'qip' }, { url: '360.cn/', query: 'q', name: '360.cn' }, { url: 'www.alice.com/', query: 'qs', name: 'Alice' }, { url: 'aliceadsl.fr', query: 'qs', name: 'Alice' }, { url: 'www.alltheweb.com/', query: 'q', name: 'Alltheweb' }, { url: 'www.altavista.com/', query: 'q', name: 'Altavista' }, { url: 'www.ask.com/', query: 'q', name: 'Ask' }, { url: 'search.aol.fr', query: 'q', name: 'Ask' }, { url: 'alicesuche.aol.de', query: 'q', name: 'Ask' }, { url: 'search.auone.jp/', query: 'q', name: 'Auone' }, { url: 'isearch.avg.com', query: 'q', name: 'Avg' }, { url: 'search.babylon.com', query: 'q', name: 'Babylon' }, { url: 'www.baidu.com/', query: 'wd', name: 'Baidu' }, { url: 'biglobe.ne.jp', query: 'q', name: 'Biglobe' }, { url: 'search.centrum.cz/', query: 'q', name: 'Centrum.cz' }, { url: 'search.comcast.net', query: 'q', name: 'Comcast' }, { url: 'search.conduit.com', query: 'q', name: 'Conduit' }, { url: 'www.cnn.com/SEARCH/', query: 'q', name: 'CNN' }, { url: 'www.daum.net/', query: 'q', name: 'Daum' }, { url: 'www.ekolay.net/', query: 'q', name: 'Ekolay' }, { url: 'www.eniro.se/', query: 'search_word', name: 'Eniro' }, { url: 'www.globo.com/busca/', query: 'q', name: 'Globo' }, { url: 'goo.ne.jp', query: 'MT', name: 'goo.ne' }, { url: 'www.haosou.com/s', query: 'q', name: 'haosou.com' }, { url: 'search.incredimail.com', query: 'q', name: 'Incredimail' }, { url: 'www.kvasir.no/', query: 'q', name: 'Kvasir' }, { url: 'www.lycos.com/', query: 'q', name: 'Lycos' }, { url: 'search.lycos.', query: 'query', name: 'Lycos' }, { url: 'www.mamma.com/', query: 'query', name: 'Mamma' }, { url: 'www.msn.com/', query: 'q', name: 'MSN' }, { url: 'www.mynet.com/', query: 'q', name: 'Mynet' }, { url: 'najdi.si', query: 'q', name: 'Najdi' }, { url: 'www.naver.com/', query: 'query', name: 'Naver' }, { url: 'search.netscape.com/', query: 'query', name: 'Netscape' }, { url: 'szukaj.onet.pl', query: 'qt', name: 'ONET' }, { url: 'www.ozu.es/', query: 'q', name: 'Ozu' }, { url: 'rakuten.co.jp', query: 'qt', name: 'Rakuten' }, { url: 'search-results.com', query: 'q', name: 'Search-results' }, { url: 'search.smt.docomo.ne.jp', query: 'MT', name: 'search.smt.docomo' }, { url: 'sesam.no/', query: 'q', name: 'Sesam' }, { url: 'www.seznam.cz/', query: 'q', name: 'Seznam' }, { url: 'www.so.com/s', query: 'q', name: 'So.com' }, { url: 'www.sogou.com/', query: 'query', name: 'Sogou' }, { url: 'www.startsiden.no/sok', query: 'q', name: 'Startsiden' }, { url: 'www.szukacz.pl/', query: 'q', name: 'Szukacz' }, { url: 'buscador.terra.com.br', query: 'query', name: 'Terra' }, { url: 'search.tut.by/', query: 'query', name: 'Tut.by' }, { url: 'search.ukr.net/', query: 'q', name: 'Ukr' }, { url: 'search.virgilio.it/', query: 'qs', name: 'Virgilio' }, { url: 'www.voila.fr/', query: 'rdata', name: 'Voila' }, { url: 'www.wp.pl/', query: 'szukaj', name: 'Wirtulana Polska' }, { url: 'www.yam.com/', query: 'k', name: 'Yam' }];

var ignoreSameDomainCheck = false;

// Set skip topDomain check while unit testing
var setIgnoreSameDomainCheck = exports.setIgnoreSameDomainCheck = function setIgnoreSameDomainCheck(value) {
  ignoreSameDomainCheck = value;
};

var getSearchEngine = function getSearchEngine(referrer) {
  var engine = engines.find(function (item) {
    return referrer.indexOf(item.url) !== -1;
  });
  return engine || false;
};

var normalizeHostName = function normalizeHostName(hostname) {
  return hostname.replace(/^www\./i, '');
};

function generateUtmFromReferrer(referrer) {
  var utmParams = {};
  if (ignoreSameDomainCheck || (0, _topDomain2.default)(referrer) !== (0, _topDomain2.default)(window.location.hostname)) {
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