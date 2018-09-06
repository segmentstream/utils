export default function camelize(str, firstLetterUpperCase = false) {
  const result = str.replace(/(?:^|[-_\s]+)(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
  if (!firstLetterUpperCase) {
    return `${result[0].toLowerCase()}${result.substr(1)}`;
  }
  return result;
}
