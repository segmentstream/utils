export default (element, attributes, excludeKeys = []) => {
  Object.keys(attributes).forEach((key) => {
    const value = attributes[key];
    if (!excludeKeys.includes(key)) {
      if (/^data-.*/.test(key)) {
        element.setAttribute(key, value);
      } else {
        element[key] = value;
      }
    }
  });
};
