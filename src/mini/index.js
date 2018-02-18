// 对小程序进行封装

import mini from './mini';
import pages from './pages';
import store from './store';

export default {
  ...mini,
  pages,
  store,
};
