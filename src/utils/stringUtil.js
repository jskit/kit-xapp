
function stringify(params = {}) {
  const temp = params;
  const arr = [];
  for (const key in params) {
    if (!temp[key]) {
      delete temp[key];
    } else {
      arr.push(`${key}=${temp[key]}`);
    }
  }
  return arr.join('&');
}

export default {
  stringify,
}
