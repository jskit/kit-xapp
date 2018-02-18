// 原始系统变量
// 对系统变量进行统一处理，无法干掉原来的变量
const noop = () => {};
const origin = {
  me: {},
  App: noop,
  Page: noop,
  getCurrentPages: noop,
};

if (typeof wx !== 'undefined') {
  Object.assign(origin.me, wx, { miniType: 'wxapp' });
  // wx = {};
}
if (typeof my !== 'undefined') {
  Object.assign(origin.me, my, { miniType: 'aliapp' });
  // my = {};
}
if (typeof App !== 'undefined') {
  origin.App = App;
  // App = noop;
}
if (typeof Page !== 'undefined') {
  origin.Page = Page;
  // Page = noop; is read-only
}
if (typeof getCurrentPages !== 'undefined') {
  origin.getCurrentPages = getCurrentPages;
  // getCurrentPages = noop; is read-only
}

const mini = Object.assign({}, origin);



export default mini;
