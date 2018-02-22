/**
 * extend
 *
 * @export
 * @param {any} destination
 * @param {any} source
 */
const extend = () => {
  const isObjFunc = function (name) {
    let toString = Object.prototype.toString;
    return function () {
      return toString.call(arguments[0]) === '[object ' + name + ']';
    }
  };
  const isObject = isObjFunc('Object');
  const isArray = isObjFunc('Array');
  const isBoolean = isObjFunc('Boolean');

  return function extend() {
    let index = 0
    let isDeep = false
    let destination;
    if (isBoolean(arguments[0])) {
      index = 1
      isDeep = arguments[0]
    }
    for (let i = arguments.length - 1; i > index; i--) {
      destination = arguments[i - 1];
      const source = arguments[i];
      if (isObject(source) || isArray(source)) {
        console.log(source);
        for (let property in source) {
          const obj = source[property];
          // 判断是深拷贝且这个属性是纯对象
          if (isDeep && (isObject(obj) || isArray(obj))) {
            const copy = isObject(obj) ? {} : [];
            // 递归调用，创建一份obj的拷贝，赋值给destination
            const extended = extend(isDeep, copy, obj);
            destination[property] = extended;
          } else {
            destination[property] = source[property];
          }
        }
      } else {
        if (destination[property]) {
          // 提示
          console.log(`${destination[property]} 已被覆写`);
        }
        destination = source;
      }
    }

    return destination;
  }
}

export default extend;
