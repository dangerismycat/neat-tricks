function get(nestedObj, path) {
  const pathArr = path.split('.');
  return pathArr.reduce((obj, key) => (obj && obj[key] !== undefined) ? obj[key] : null, nestedObj);
}
