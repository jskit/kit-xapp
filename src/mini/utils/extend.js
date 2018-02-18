/**
 * extend
 *
 * @export
 * @param {any} origin
 * @param {any} source
 */
export default function extend(origin, source) {
  for (let key in source) {
    if (source[key]) {
      if (origin[key]) {
        console.log(`${origin[key]} 已被覆写`);
      }
      origin[key] = source[key];
    }
  }
}
