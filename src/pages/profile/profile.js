import {
  me,
  xPage,
} from '../../mini';

xPage({
  data: {},
  onLoad() {
    me.showLoading();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    me.hideLoading();
  },
});
