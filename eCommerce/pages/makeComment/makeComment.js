
var app = getApp()

Page({
  data: {
    goodsInfo: [],
    submitData: {
      order_id: '',
      goods: [],
      score: 5,
      appointment_score: 5,
      logistics_score: 5
    },
    goodsType: '',    
  },
  onLoad: function(options){
    this.setData({
      'submitData.order_id': options.detail,
      'submitData.sub_shop_app_id': options.franchisee || ''
    })
    this.getOrderDetail();
    this.getAppECStoreConfig();
  },
  getOrderDetail: function(){
    var that = this;
    app.getOrderDetail({
      data: {
        order_id: that.data.submitData.order_id,
        sub_shop_app_id: this.data.submitData.sub_shop_app_id
      },
      success: function(res){
        var goodsType = res.data[0].form_data.goods_type,
            goodsInfo = res.data[0].form_data.goods_info,
            goods = [];

        for (var i = 0, j = goodsInfo.length - 1; i <= j; i++) {
          goods.push({
            goods_id: goodsInfo[i].goods_id,
            info: {
              content: '',
              level: 1,
              img_arr: []
            }
          })
        }
        that.setData({
          goodsInfo: goodsInfo,
          'submitData.goods': goods,
          goodsType: goodsType
        })
      }
    })
  },
  setDescScore: function(e){
    var score = e.target.dataset.score;
    this.setData({
      'submitData.score': score,
      'submitData.appointment_score':score
    })
  },
  setLogisticsScore: function(e){
    var score = e.target.dataset.score;
    this.setData({
      'submitData.logistics_score': score
    })
  },
  clickLevelSpan: function(e){
    var goodsIndex = e.currentTarget.dataset.goodsIndex,
        level = e.currentTarget.dataset.level,
        data = {};

    data['submitData.goods['+goodsIndex+'].info.level'] = level;
    this.setData(data);
  },
  commentInput: function(e){
    var goodsIndex = e.target.dataset.goodsIndex,
        data = {};

    data['submitData.goods['+goodsIndex+'].info.content'] = e.detail.value;
    this.setData(data);
  },
  chooseImage: function(e){
    var that = this,
        goodsIndex = e.currentTarget.dataset.goodsIndex,
        img_arr = that.data.submitData.goods[goodsIndex].info.img_arr;

    app.chooseImage(function(images){
      var data = {};
      data['submitData.goods['+goodsIndex+'].info.img_arr'] = img_arr.concat(images);
      that.setData(data);
    }, 3 - img_arr.length);
  },
  removePic: function(e){
    var goodsIndex = e.currentTarget.dataset.goodsIndex,
        picIndex = e.currentTarget.dataset.picIndex,
        img_arr = this.data.submitData.goods[goodsIndex].info.img_arr,
        data = {};

    img_arr.splice(picIndex, 1);
    data['submitData.goods['+goodsIndex+'].info.img_arr'] = img_arr;
    this.setData(data);
  },
  makeComment: function(){
    var that = this,
        submitData = that.data.submitData,
        modalText = '';

    for (var i = submitData.goods.length - 1; i >= 0; i--) {
      var goods = submitData.goods[i];
      // if(goods.info.content.length < 10){
      //   modalText = '评价内容少于10个字';
      //   break;
      // }
      if(!goods.info.level) {
        modalText = '尚未给商品评分';
        break;
      }
      if(goods.info.img_arr.length > 3) {
        modalText = '每个商品最多上传3张图片';
        break;
      }
    }

    if(modalText){
      app.showModal({
        content: modalText
      })
      return;
    }

    let addTime = Date.now();
    app.sendRequest({
      url: '/index.php?r=AppShop/AddAssessList',
      method: 'post',
      data: submitData,
      success: function(res){
        app.sendRequest({
          hideLoading: true,
          url: '/index.php?r=appShop/getIntegralLog',
          data: { add_time: addTime },
          success: function (res) {
            if (res.data == 0) {
              app.showModal({
                content: '评论成功',
                confirm: function () {
                  app.turnToPage('/eCommerce/pages/transactionSuccess/transactionSuccess?pageFrom=comment&orderId=' + that.data.submitData.order_id + '&franchiseeId=' + that.data.submitData.sub_shop_app_id, 1);
                }
              });
            } else {
              that.setData({
                'rewardPointObj': {
                  showModal: true,
                  count: res.data,
                  callback: function () {
                    app.turnToPage('/eCommerce/pages/transactionSuccess/transactionSuccess?pageFrom=comment&orderId=' + that.data.submitData.order_id + '&franchiseeId=' + that.data.submitData.sub_shop_app_id, 1);
                  }
                }
              });
            }
          }
        });
      }
    })
  },
  getAppECStoreConfig: function () {
    app.getAppECStoreConfig((res) => {
      this.setData({
        storeStyle: res.color_config
      })
    }, this.data.submitData.sub_shop_app_id);
  }
})
