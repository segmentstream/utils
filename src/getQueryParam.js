import htmlGlobals from './htmlGlobals';
import normalizeString from './normalizeString';

export default function getQueryParam(name, queryString, normalize = true) {
  if (typeof queryString === 'boolean') {
    normalize = !!queryString;
    queryString = undefined;
  }
  if (!queryString) {
    queryString = htmlGlobals.getLocation().search;
  } 
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(queryString);
  if (results === null) {
    return '';
  }
  let output = decodeURIComponent(results[1].replace(/\+/g, ' '));
  if (normalize) {
    return normalizeString(output);
  }
  return output;
}
