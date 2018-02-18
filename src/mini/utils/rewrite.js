
export function methodRewrite(func, opts, funcName) {
  const funcTemp = func;
  return (options) => {
    let op = options;
    if (funcName === 'showToast' && !op) {
      // showToast content 必须要有值
      op = '数据出错';
    }
    if (typeof op === 'string') {
      op = Object.assign({
        title: op,
      }, opts);
    }
    funcTemp(op);
  };
}

