// var Page = global.GioPage;
var Page = require('../../../utils/wlad_sdk.min.js').Page;
var app      = getApp();

var pageData = {
  data: {
    viewPeople: 578,
    id: '',
    "text1":{"type":"text","style":"line-height:58.59375rpx;border-color:rgb(34, 34, 34);color:rgb(102, 102, 102);background-color:rgba(0, 0, 0, 0);border-width:4.6875rpx;text-align:center;margin-left:auto;height:58.59375rpx;opacity:1;border-style:none;margin-top:0;font-weight:bold;margin-right:auto;font-size:32.8125rpx;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"\u6807\u9898","customFeature":{"textStyle":false,"index_value":"","textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":true,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","firstClassifyId":"","xcx-page-url":"","plateId":"","phoneNumberSource":"static","segment":"qMbzTFAsrn","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"xcx-id":"105221","xcx-appid":"wx241fedce8b4b709a","isWordWrap":0},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"hidden":false,"id":"zhichi_739587045781","page_form":"KpCXiTKEDK","compId":"text1","markColor":"","mode":0},"breakline2":{"type":"breakline","style":"border-width:4.6875rpx;border-bottom-style:solid;margin-top:0rpx;margin-left:0;margin-right:auto;width:750rpx;border-bottom-color:#f3f3f3;","content":"<div><\/div>","customFeature":{"name":"\u5206\u5272\u7ebf","isLockWidget":false},"animations":[],"hidden":false,"id":"zhichi_56271129931","page_form":"KpCXiTKEDK","compId":"breakline2"},"free_vessel3":{"type":"free-vessel","style":"margin-left:0rpx;width:750rpx;height:76.875rpx;margin-bottom:auto;opacity:1;margin-top:0rpx;margin-right:auto;","content":[{"type":"text","style":"line-height:58.59375rpx;border-color:rgb(34, 34, 34);color:rgb(245, 53, 48);background-color:rgba(0, 0, 0, 0);border-width:4.6875rpx;text-align:center;margin-left:0;width:464.0625rpx;left:138.28125rpx;height:58.59375rpx;position:absolute;opacity:1;border-style:none;top:11.71875rpx;margin-top:0;margin-right:0;font-size:28.125rpx;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.5s;-webkit-animation-delay:0.5s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"\u6458\u8981","customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":true,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"nYyHOkKXxi","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.5,"count":1}],"hidden":false,"id":"zhichi_960942225152","compId":"data.content[0]","parentCompid":"free_vessel3","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"name":"\u81ea\u7531\u9762\u677f","isLockWidget":false},"animations":[],"hidden":false,"id":"zhichi_356569517626","page_form":"KpCXiTKEDK","compId":"free_vessel3"},"breakline4":{"type":"breakline","style":"border-width:4.6875rpx;border-bottom-style:solid;margin-top:0rpx;margin-left:0;margin-right:auto;width:750rpx;border-bottom-color:#f3f3f3;","content":"<div><\/div>","customFeature":{"name":"\u5206\u5272\u7ebf","isLockWidget":false},"animations":[],"hidden":false,"id":"zhichi_349905008849","page_form":"KpCXiTKEDK","compId":"breakline4"},"text5":{"type":"text","style":"line-height:58.59375rpx;border-color:rgb(34, 34, 34);color:rgb(102, 102, 102);background-color:rgba(0, 0, 0, 0);border-width:4.6875rpx;text-align:left;margin-left:auto;height:58.59375rpx;opacity:1;border-style:none;margin-top:0;margin-right:auto;font-size:28.125rpx;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:1s;-webkit-animation-delay:1s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"\u5185\u5bb9","customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":true,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"PDeoTPDJtJ","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":1,"count":1}],"hidden":false,"id":"zhichi_869317039960","page_form":"KpCXiTKEDK","compId":"text5","markColor":"","mode":0},"breakline6":{"type":"breakline","style":"border-width:4.6875rpx;border-bottom-style:solid;margin-top:11.71875rpx;margin-left:0;margin-right:auto;width:750rpx;border-bottom-color:#f3f3f3;","content":"<div><\/div>","customFeature":{"name":"\u5206\u5272\u7ebf","isLockWidget":false},"animations":[],"hidden":false,"id":"zhichi_372635506980","page_form":"KpCXiTKEDK","compId":"breakline6"},"free_vessel7":{"type":"free-vessel","style":"width:750rpx;height:104.0625rpx;margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:46.875rpx;opacity:1;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:103.125rpx;width:112.5rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:4.6875rpx;top:0rpx;","content":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_5c6fc0eab754a.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","dataObject":false,"phoneNumberSource":"static","phoneDisplayContent":"static","isAuto":false,"photoRatio":"1.00","name":"\u56fe\u7247","backgroundType":false,"isLockWidget":false},"animations":[],"hidden":false,"id":"zhichi_470081290879","compId":"data.content[0]","parentCompid":"free_vessel7"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;font-weight:bold;height:70.3125rpx;line-height:58.59375rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:133.59375rpx;top:18.75rpx;width:147.65625rpx;","content":"\u66f4\u591a\u8d44\u8baf","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","textColor":"rgb(0, 0, 0)","textStyle":false,"textX":"0","textY":"0","textR":"5","isWordWrap":0,"dataObject":false,"word-wrap":2,"phoneNumberSource":"static","phoneDisplayContent":"static","name":"\u6587\u672c","isLockWidget":false},"animations":[],"hidden":false,"id":"zhichi_89190030917","compId":"data.content[1]","parentCompid":"free_vessel7","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"name":"\u81ea\u7531\u9762\u677f","isLockWidget":false},"animations":[],"hidden":false,"id":"zhichi_353381478661","page_form":"KpCXiTKEDK","compId":"free_vessel7"},"breakline8":{"type":"breakline","style":"border-width:4.6875rpx;border-bottom-style:solid;margin-top:11.71875rpx;margin-left:0;margin-right:auto;width:750rpx;border-bottom-color:#f3f3f3;","content":"<div><\/div>","customFeature":{"name":"\u5206\u5272\u7ebf","isLockWidget":false},"animations":[],"hidden":false,"id":"zhichi_581639273715","page_form":"KpCXiTKEDK","compId":"breakline8"},"list_vessel9":{"type":"list-vessel","style":"margin-top:0rpx;opacity:1;background-color:rgb(255, 255, 255);margin-left:auto;","content":[{"type":"free-vessel","style":"width:423.28125rpx;height:421.875rpx;margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:0rpx;opacity:1;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:239.0625rpx;width:367.96875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:2.34375rpx;top:2.34375rpx;","content":"https:\/\/cdn.jisuapp.cn\/static\/jisuapp_editor\/images\/zhichi-default.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","dataObject":true,"phoneNumberSource":"static","phoneDisplayContent":"static","isAuto":false,"photoRatio":"1.00","name":"\u56fe\u7247","backgroundType":false,"isLockWidget":false,"segment":"UamDXwFSRf","ifMust":false},"animations":[],"hidden":false,"id":"zhichi_666660858426","compId":"data.content[0]","parentCompid":"data.content[0]"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:23.4375rpx;font-weight:bold;height:58.59375rpx;line-height:58.59375rpx;margin-left:0;margin-right:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:2.34375rpx;top:246.09375rpx;","content":"\u6211\u662f\u6587\u672c","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","textColor":"rgb(0, 0, 0)","textStyle":false,"textX":"0","textY":"0","textR":"5","isWordWrap":0,"dataObject":true,"word-wrap":2,"phoneNumberSource":"static","phoneDisplayContent":"static","name":"\u6587\u672c","isLockWidget":false,"segment":"qMbzTFAsrn","ifMust":false},"animations":[],"hidden":false,"id":"zhichi_88661607640","compId":"data.content[1]","parentCompid":"data.content[0]","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"name":"\u81ea\u7531\u9762\u677f","isLockWidget":false,"segment":""},"animations":[],"hidden":false,"id":"zhichi_767645733367","parentCompid":"list_vessel9","compId":"data.content[0]"}],"customFeature":{"background-color":"rgb(255, 255, 255)","background-image":"","form":"KpCXiTKEDK","id":"zhichi_83220414403","lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","link":"page10003","margin":"3","name":"\u5217\u8868","source":"none","vesselAutoheight":1,"mode":1,"loadingMethod":1,"loadingStyle":"text","loadingText":"\u70b9\u51fb\u52a0\u8f7d","loadingNum":"10000","loadingImg":"https:\/\/cdn.jisuapp.cn\/zhichi_frontend\/static\/webapp\/images\/list-vessel\/loading1.png","loadingColor":"#000","isShowFinishText":false,"classifyType":2,"pickUpArr":{"express":true,"sameJourney":true,"selfLifting":true}},"animations":[],"hidden":false,"id":"zhichi_945636057055","page_form":"KpCXiTKEDK","compId":"list_vessel9","list_style":"margin-bottom:7.03125rpx;background-color:rgb(255, 255, 255);margin-left:auto;","customFeature_id":"zhichi_83220414403","is_more":1,"param":"{\"id\":\"zhichi_83220414403\",\"form\":\"KpCXiTKEDK\",\"page\":1,\"app_id\":\"nnx1022Wu9\",\"is_count\":0}","form":"KpCXiTKEDK"},"suspension10":{"type":"suspension","style":"color:#000;background-color:rgba(0,0,0,0);opacity:1;border-radius:93.75rpx;right:11.71875rpx;font-size:28.125rpx;margin-left:auto;animation-name:appear_fade_left,transit_jump;-webkit-animation-name:appear_fade_left,transit_jump;animation-duration:1s,2s;-webkit-animation-duration:1s,2s;animation-delay:1.5s,2.7s;-webkit-animation-delay:1.5s,2.7s;animation-iteration-count:1,infinite;-webkit-animation-iteration-count:1,infinite;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":[{"customFeature":{"action":"top","width":"20px","height":"20px"},"pic":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_5c778d4b6a2f1.jpg","title":"\u56de\u5230\u9876\u90e8","widgetIdPath":["zhichi_904262736903",null],"content":"","parentCompid":"suspension10","style":"","itemType":null,"itemParentType":"suspension","itemIndex":0,"eventParams":"[]","eventHandler":"scrollPageTop"},{"customFeature":{"action":"contact","width":"20px","height":"20px","index_value":"","plateId":"","firstClassifyId":"","xcx-page-url":"","xcx-appid":""},"pic":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_5c6e5e998b2ef.jpg","title":"\u5ba2\u670d","widgetIdPath":["zhichi_904262736903",null],"content":"","parentCompid":"suspension10","style":""},{"customFeature":{"action":"inner-link","width":"20px","height":"20px","index_value":"","plateId":"","firstClassifyId":"","xcx-page-url":"","xcx-appid":"","inner-page-link":"page10000","pageRouterName":"\u9ed8\u8ba4\u7ec4 \/ \u602a\u517d\u5546\u8baf"},"pic":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/thumb\/t_15536597265c9af74e0105a.jpg","title":"\u8fd4\u56de\u9996\u9875","widgetIdPath":["zhichi_904262736903",null],"content":"","parentCompid":"suspension10","style":"","itemType":null,"itemParentType":"suspension","itemIndex":2,"eventParams":"{\"inner_page_link\":\"page10000\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"customFeature":{"action":"page-share","width":"20px","height":"20px","index_value":"","plateId":"","firstClassifyId":"","xcx-page-url":"","xcx-appid":"","pageShareImgUrl":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_5c88baf6e7e80.png","pageShareCustomText":"\u6295\u8d44\u602a\u517d\uff0c\u8d44\u8baf\u5929\u4e0b\uff01"},"pic":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/thumb\/t_15536596175c9af6e13ca49.jpg","title":"\u8f6c\u53d1\u597d\u53cb","widgetIdPath":["zhichi_904262736903",null],"content":"","parentCompid":"suspension10","style":"","itemType":null,"itemParentType":"suspension","itemIndex":3,"eventParams":"{\"pageShareImgUrl\":\"https:\\\/\\\/img.zhichiwangluo.com\\\/zcimgdir\\\/album\\\/file_5c88baf6e7e80.png\",\"pageShareCustomText\":\"\\u6295\\u8d44\\u602a\\u517d\\uff0c\\u8d44\\u8baf\\u5929\\u4e0b\\uff01\"}","eventHandler":"tapPageShareHandler"}],"customFeature":{"lineBackgroundColor":"rgba(0,0,0,0)","mode":0,"openIcon":true,"width":"60px","height":"250px","backgroundType":false,"img-size":"50px","margin":2,"openText":false,"backgroundTypeNew":false,"lineBackgroundImage":""},"animations":[{"name":"appear_fade","direction":"_left","duration":1,"delay":1.5,"count":1},{"name":"transit_jump","direction":"","duration":2,"delay":0.2,"count":"infinite"}],"hidden":false,"id":"zhichi_904262736903","page_form":"KpCXiTKEDK","compId":"suspension10","list_style":"margin-bottom:4.6875rpx;border-radius:93.75rpx;width:;height:;background-color:rgba(0,0,0,0);margin-left:auto;","suspension_bottom":"93.75rpx"},"has_tabbar":0,"page_hidden":true,"page_form":"KpCXiTKEDK","top_nav":{"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black","navigationBarTitleText":"\u8d44\u8baf\u8be6\u60c5\u9875 - \u526f\u672c"},"dataId":"",wlad: { adData: {}, ad: { banner: ["banner_0","banner_1","banner_2","banner_3","banner_4","banner_5","banner_6","banner_7","banner_8","banner_9","banner_10","banner_11","banner_12","banner_13","banner_14","banner_15","banner_16","banner_17","banner_18","banner_19","banner_20","banner_21","banner_22","banner_23"], insert: "insert", fixed: "fixed" } }},
    need_login: false,
      bind_phone: false,
    page_router: 'page10013',
    page_form: 'KpCXiTKEDK',
      dataId: '',
      list_compids_params: [{"compid":"list_vessel9","param":{"id":"zhichi_83220414403","form":"KpCXiTKEDK","page":1,"app_id":"nnx1022Wu9","is_count":0}}],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      dynamicClassifyGroupidsParams: [],
      newClassifyGroupidsParams: [],
      videoListComps: [],
      videoProjectComps: [],
      newsComps: [],
      popupWindowComps: [],
        formVesselComps: [],
      searchComponentParam: [],
      topicComps: [],
      topicClassifyComps: [],
      topicSortComps: [],
      rowNumComps: [],
      sidebarComps: [],
      slidePanelComps: [],
      newCountComps: [],
      exchangeCouponComps: [],
      communityGroupComps: [],
      groupBuyStatusComps: [],
      groupBuyListComps: [],
      timelineComps: [],
      signInComps: [],
    returnToVersionFlag: true,
  requesting: false,
  requestNum: 1,
  modelChoose: [],
  modelChooseId: '',
  modelChooseName: [],
  onLoad: function (e) {
    if (e.statisticsType == 11) {
      delete e.statisticsType
      delete e.needStatistics
    }
    if (e.franchisee) {
      this.franchiseeId = e.franchisee;
      this.setData({
        franchiseeInfo: {
          id: e.franchisee,
          mode: e.fmode || ''
        }
      });
    }
    this.setData({ id: e.detail })
    app.onPageLoad(e);
    app.isNeedRewardModal();
    this.initViewPeopleRandom();
  },
  initViewPeopleRandom() {
    this.setData({
      viewPeople: Math.floor(Math.random() * 421 + 578)
    });
    if (this.interval) clearInterval(this.interval)
    this.interval = setInterval(() => {
      this.setData({
        viewPeople: Math.floor(Math.random() * 421 + 578)
      });
    }, 10000);
  },
  dataInitial: function () {
    app.pageDataInitial();
    if (this.page_router === 'userCenterComponentPage'){
      this.getAppECStoreConfig();
    }
  },
  onPageScroll: function(e) {
    app.onPageScroll(e);
  },
  onShareAppMessage: function (e) {
    if (e.from == 'button') {
      if (e.target.dataset && e.target.dataset.from == 'topicButton') {
        let franchiseeId = app.getPageFranchiseeId();
        let chainParam = franchiseeId ? '&franchisee=' + franchiseeId : '';
        return app.shareAppMessage({
          path: '/informationManagement/pages/communityDetail/communityDetail?detail=' + e.target.dataset.id + chainParam,
          desc: e.target.dataset.desc,
          success: function(addTime) {
            app.getIntegralLog(addTime);
            app.CountSpreadCount(e.target.dataset.id);
          }
        });
      }
    };

    const nickname = this.data.userInfo && this.data.userInfo.nickname || '';
    const title = this.data.detail_data[this.data.text1.customFeature.segment][0].text;
    return {
      title: `${nickname}推荐${title}`,
      imageUrl:'../../../images/share.jpeg',
      path: `pages/jump/toPage10003?detail=${this.data.id}`
    }
    // return app.onPageShareAppMessage(e, app.getIntegralLog);
  },
  onShow: function () {
    app.onPageShow();
  },
  onHide: function () {
    app.onPageHide();
  },
  reachBottomFuc: [],
  onReachBottom: function () {
    app.onPageReachBottom( this.reachBottomFuc );
  },
  onUnload: function () {
    app.onPageUnload(this);
  },
  slidePanelStart: function (e) {
    app.slidePanelStart(e);
  },
  slidePanelEnd: function (e) {
    app.slidePanelEnd(e);
  },
  onPullDownRefresh : function(){
    app.onPagePullDownRefresh();
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  dynamicVesselScrollFunc: function (e) {
    app.dynamicVesselScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  dynamicVesselTurnToPage: function (e) {
    app.dynamicVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  callPhone: function (e) {
    app.callPhone(e);
  },
  tapVideoPlayHandler: function(e){
    app.tapVideoPlayHandler(e);
  },
  tapToPluginHandler: function (e) {
    app.tapToPluginHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  showGoodsShoppingcart: function(e){
    app.showGoodsShoppingcart(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.imgarr || [dataset.src],
    });
  },
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  // 文字组件跳到地图
  textToMap: function(e) {
    app.textToMap(e);
  },
  tapDynamicClassifyFunc: function(e){
    app.tapDynamicClassifyFunc(e);
  },
  // 跳转到资讯详情
  turnToNewsDetail: function (e) {
    app.turnToNewsDetail(e)
  },
  //切换资讯分类
  getNewsCateList: function (e) {
    app.getNewsCateList(e);
  },
  //话题组件
  topicEleScrollFunc: function (e) {
    app.topicEleScrollFunc(e);
  },
  switchTopiclistOrderBy: function (e) {
    app.switchTopiclistOrderBy(e);
  },
  switchTopicCategory: function (e) {
    app.switchTopicCategory(e);
  },
  turnToTopicDetail: function (e) {
    app.turnToTopicDetail(e);
  },
  pageBackTopAct: function (e) {
    app.pageBackTopAct(e);
  },
  turnToTopicPublish: function (e) {
    app.turnToTopicPublish(e);
  },
  showTopicCommentBox: function (e) {
    app.showTopicCommentBox(e);
  },
  showTopicPhoneModal: function (e) {
    app.showTopicPhoneModal(e);
  },
  topicMakePhoneCall: function (e) {
    app.topicMakePhoneCall(e);
  },
  showTopicReplyComment: function (e) {
    app.showTopicReplyComment(e);
  },
  topicCommentReplyInput: function (e) {
    app.topicCommentReplyInput(e);
  },
  topicReplycommentSubmit: function (e) {
    app.topicReplycommentSubmit(e);
  },
  topicPerformLikeAct: function (e) {
    app.topicPerformLikeAct(e);
  },
  topicImgLoad: function (e) {
    app.topicImgLoad(e);
  },
  topicCommentReplyfocus:function (e) {
    app.topicCommentReplyfocus(e);
  },
  topicCommentReplyblur:function (e) {
    app.topicCommentReplyblur(e);
  },

  // 筛选组件 综合排序tab = 0
  sortByDefault: function (e) {
    app.sortByDefault(e);
  },
  // 筛选组件 按销量排序 tab = 1
  sortBySales: function (e) {
    app.sortBySales(e);
  },
  // 筛选组件 按价格排序 tab = 2
  sortByPrice: function (e) {
    app.sortByPrice(e);
  },
  // 筛选组件 按取货排序 tab = 3
  pickUpStyle: function (e) {
    app.pickUpStyle(e);
  },
  hideFilterPickUpBox: function (e){
    app.hideFilterPickUpBox(e);
  },
  selectPickUp: function(e){
    app.selectPickUp(e);
  },
  surePickBtn: function(e){
    app.surePickBtn(e);
  },
  resetPickBtn: function(e){
    app.resetPickBtn(e);
  },
  // 筛选组件 展示侧边筛选
  filterList: function(e){
    app.filterList(e);
  },
  // 筛选侧栏确定
  filterConfirm: function(e){
    app.filterConfirm(e);
  },
  // 动画结束回调函数
  animationEnd: function(e){
    app.animationEnd(e);
  },
  //排号
  showTakeNumberWindow: function(e){
    app.showTakeNumberWindow(e);
  },
  hideTakeNumberWindow: function(e){
    app.hideTakeNumberWindow(e);
  },
  goToPreviewRowNumberOrder: function(e){
    app.goToPreviewRowNumberOrder(e);
  },
  selectRowNumberType: function(e){
    app.selectRowNumberType(e);
  },
  sureTakeNumber: function(e){
    app.sureTakeNumber(e);
  },
  goToCheckRowNunberDetail: function(e){
    app.goToCheckRowNunberDetail(e);
  },
  cancelCheckRowNunber: function(e){
    app.cancelCheckRowNunber(e);
  },
  rowNumberRefresh: function(e){
    app.rowNumberRefresh(e);
  },
  showCancelWindow: function (e) {
    app.showCancelWindow(e)
  },
  hideCancelWindow: function (e) {
    app.hideCancelWindow(e)
  },
  tapEventCommonHandler: function(e){
    app.tapEventCommonHandler(e);
  },
  getCarouselData: function(e) {
    let compid = e.currentTarget.dataset.compid;
    app._initialCarouselData(this, compid );
  },
  getNewsList: function(e) {
    let compid = e.currentTarget.dataset.compid;
    app.getNewsList({ compid: compid });
  },
  getCommunityList: function (e) {
    let compid = e.currentTarget.dataset.compid;
    app.initialCommunityList(compid);
  },
  getexchangeCoupon: function(e) {
    app.getexchangeCoupon(e);
  },
  turnToexchangeCouponDetail: function (e) {
    app.turnToexchangeCouponDetail(e);
  },
  exchangeCouponScrollFunc: function (e) {
    app.exchangeCouponScrollFunc(e);
  },
  vipCardTurnToPage: function (e) {
    app.vipCardTurnToPage(e);
  },
  showQRRemark: function (e) {
    app.showQRRemark(e);
  },
  tapDynamicShowAllClassify: function (e) {
    app.tapDynamicShowAllClassify(e);
  },
  dynamicSubClassifyAreaScrollEvent: function (e) {
    app.dynamicSubClassifyAreaScrollEvent(e);
  },
  slidePanelScrollEvent: function (e) {
    app.slidePanelScrollEvent(e);
  },
  unfoldSus: function(e) {
    let compId = e.currentTarget.dataset.compid;
    let tapType = e.currentTarget.dataset.taptype;
    app.newSuspension_unfoldSus(compId,tapType);
  },
  newCountTapEvent: function (e) {
    app.newCountTapEvent(e);
  },
  chengeCommunityGroup(e) {
    app.chengeCommunityGroup(e);
  },
  toCommunityGroup(e) {
    app.toCommunityGroup(e);
  },
  communityGroupScrollFunc(e) {
    app.communityGroupScrollFunc(e);
  },
  getAppECStoreConfig: function () {
    app.getAppECStoreConfig((res) => {
      this.setData({
        storeStyle: res.color_config
      })
    });
  },

  };
Page(pageData);
