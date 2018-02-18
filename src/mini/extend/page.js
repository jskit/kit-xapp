
import {
  // me,
  // App,
  // Page,
} from '../origin';
import mixins from './mixins';
import extend from '../utils/extend';

function hooks(func, cb) {
  const funcTemp = func;
  cb(opt, )
};

// 混入的函数以及变量标识，全以 page/mini 开头
// 如：pageQuery，pagePreLoad，pageShareInfo
function extendPage() {
  const onLoadTemp = Page.onLoad;
  extend(Page, mixins, {
    onLoad(query) {
      this.pagePreLoad(query);

      onLoadTemp(query);
    },
  });
}

export default extendPage;
