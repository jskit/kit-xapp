
import {
  // me,
  // App,
  MiniPage,
} from '../origin';
import mixins from './mixins';
import extend from '../utils/extend';

function hooks(func, opts = {
  pre() {},
  post() {},
}) {
  if (typeof opts === 'function') {
    opts = {
      pre: opts,
      post: noop,
    };
  }
  const funcTemp = func;
  func = function(...rest) {
    opts.pre(...rest);
    funcTemp(...rest);
    opts.post(...rest);
  };
};

// 混入的函数以及变量标识，全以 page/mini 开头
// 如：pageQuery，pagePreLoad，pageShareInfo
function extendPage() {
  console.log('执行 extendPage 扩展');

  const onLoadTemp = Page.onLoad;
  extend(MiniPage, mixins, {
    onLoad(query) {
      this.pagePreLoad(query);

      onLoadTemp(query);
    },
  });
}

export default extendPage;
