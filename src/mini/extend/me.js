

import {
  me,
  // App,
  // Page,
  // getCurrentPages,
} from '../origin';
import regPages, { tabPages } from '../pages';
import extend from '../utils/extend';
import { stringify } from '../../utils/stringUtil';

function extendMe() {
  console.log('执行 extendMe 扩展');

  me.getCurPageUrl = (url, params = {}) => {
    let query = { ...params };
    let urlArr = url.split('?');
    let pageName = urlArr[0];
    if (!pageName) return;
    let pagePath = regPages[pageName];
    query = !urlArr[1] ? stringify(query) :
         [stringify(query), urlArr[1]].join('&');
    if (!pagePath) {
      me.showToast('此链接不支持跳转');
      return {};
      // 要处理外部 url 数据
      // const { hash, search } = new URL(url);
      // console.log(search);
      // let h5PageName = hash;
      // if (/\?/.test(hash)) {
      //   [h5PageName] = hash.split('?');
      // }
      // pageName = h5Map[h5PageName.replace(/#/g, '')];
      // pagePath = regPages[pageName];
    }
    query = query ? `?${query}` : '';
    return {
      pageName,
      query,
      pagePath: `${pagePath}${query}`,
    };
  };
  /**
   * 扩展页面跳转方法，支持内部跳转以及H5 url 映射到小程序内部跳转
   *
   * @param {any} url
   * @param {any} [query={}]
   * @returns
   */
  me.goPage = (url, query = {}) => {
    if (!url) return;
    const { replace, back } = query;
    let type = replace ? 'replace' : (back ? 'back' : '');
    /* eslint no-param-reassign: 0 */
    delete query.replace;
    delete query.back;
    const { pageName, pagePath } = me.getCurPageUrl(url, query);
    if (!pagePath) return;
    const page = { url: `../../${pagePath}` };
    if (tabPages[pageName]) {
      type = 'switch';
    }
    switch (type) {
      case 'replace':
        me.redirectTo(page);
        break;
      case 'back':
        me.navigateBack(page);
        break;
      case 'switch':
        me.switchTab(page);
        break;
      default:
        /* eslint no-undef: 0 */
        if (getCurrentPages().length >= 10) {
          me.redirectTo(page);
        } else {
          // navigateTo, redirectTo 只能打开非 tabBar 页面。
          // switchTab 只能打开 tabBar 页面。
          me.navigateTo(page);
        }
        break;
    }
  };
  me.showErrPage = (message = '', replace = true) => {
    me.goPage('error', {
      message,
      replace,
    });
  };
}

export default extendMe;

// export function delayPromise(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
