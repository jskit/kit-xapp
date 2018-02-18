
/**
 * Usage

import {
  me,
  App,
  Page,
} from 'x-app/mini';

 */

// 对系统变量进行统一处理
import origin from './origin';
import rewrite from './rewrite';
import {
  extendMe,
  extendApp,
  extendPage,
} from './extend';

export default {
  ...origin,
  rewrite() {
    rewrite();

    extendMe();
    extendApp();
    extendPage();
  },
};
