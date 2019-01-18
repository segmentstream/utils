export default (element, attributes, excludeKeys = []) => {
  Object.keys(attributes).forEach((key) => {
    const value = attributes[key];
    if (excludeKeys.indexOf(key) < 0) {
      if (/^data-.*/.test(key)) {
        element.setAttribute(key, value);
      } else {
        element[key] = value;
      }
    }
  });
};
