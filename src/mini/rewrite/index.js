// 针对小程序挂载的方法进行覆写或扩展，优化增强调用方法
import {
  me,
} from '../origin';
import extend from '../utils/extend';

let rewrite;

if (me.miniType === 'aliapp') {
  rewrite = require('./aliapp');
}
if (me.miniType === 'wxapp') {
  rewrite = require('./wxapp');
}

export default rewrite;
