// 原始系统变量
// 对系统变量进行统一处理，无法干掉原来的变量
const noop = () => {};
const origin = {
  me: {},
  MiniApp: noop,
  MiniPage: noop,
  getCurrentPages: noop,
};

if (typeof wx !== 'undefined') {
  origin.me = {
    ...wx,
    miniType: 'wxapp',
  };
  // wx = {};
}
if (typeof my !== 'undefined') {
  origin.me = {
    ...my,
    miniType: 'aliapp',
  };
  // my = {};
}

// App, Page, getCurrentPages is read-only
if (typeof App !== 'undefined') {
  origin.MiniApp = (opts) => {
    return App(opts);
  };
}
if (typeof Page !== 'undefined') {
  origin.MiniPage = (opts) => {
    return Page(opts);
  };
  // Page = noop; is read-only
}
if (typeof getCurrentPages !== 'undefined') {
  origin.getCurrentPages = getCurrentPages;
  // getCurrentPages = noop; is read-only
}

const mini = Object.assign({}, origin);

export default mini;
