import htmlGlobals from './htmlGlobals';

export default function getQueryParam(name, queryString) {
  if (typeof queryString !== 'string') {
    queryString = htmlGlobals.getLocation().search;
  } 
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(queryString);
  if (results === null) {
    return '';
  }
  let output = decodeURIComponent(results[1].replace(/\+/g, ' '));
  return output;
}
