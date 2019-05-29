// var Page = global.GioPage;
Page({
  onLoad(opt) {
    getApp().turnToPage('/pages/page10003/page10003?detail=' + (opt.detail || '446433'), true);
  },
  onShow() {
    getApp().turnToPage('/pages/page10003/page10003?detail=446433', true);
  }
})