export default (element, attributes, excludeKeys = []) => {
  Object.entries(attributes).forEach(([key, value]) => {
    if (!excludeKeys.includes(key)) {
      if (/^data-.*/.test(key)) {
        element.setAttribute(key, value);
      } else {
        element[key] = value;
      }
    }
  });
};
