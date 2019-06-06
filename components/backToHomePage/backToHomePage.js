var app = getApp();
Component({
  properties: {
    backToHomePage: {
      type: Object,
      value: {
        showButton: false
      }
    }
  },
  data: {
    backToHomePage: {
      showButton: true
    }
  },
  methods: {
    backToHomePage:function() {
      wx.reLaunch({ url: '/pages/' + app.globalData.homepageRouter + '/' + app.globalData.homepageRouter })
    },
  }
})