var Element = require('../../utils/element.js');
var util = require('../../utils/util.js');
var app = getApp();

var search = new Element({
  events: {
    searchForTopicAct: function (e) {
      this.searchForTopicAct(e);
    },
    topicSearchInputAct: function (e) {
      this.topicSearchInputAct(e);
    },
    turnToTopicUserCenter: function (e) {
      this.turnToTopicUserCenter(e);
    },
    turnToTopicNotify: function (e) {
      this.turnToTopicNotify(e);
    },
    searchList: function (e) {
      this.searchList(e);
    },
  },
  methods: {
    init: function(compid, pageInstance){
      let compData = pageInstance.data[compid];
      let searchObject = compData.customFeature.searchObject;
      if (searchObject && searchObject.type == 'topic') {
        let originalStyle = compData.style;
        let filterStyle = originalStyle.match(/(width|height|background|background\-color|margin-top|backgroundColor|marginTop)\:[^:;]+\;/g).join('');
        let topicComp = pageInstance.topicComps.find(
          topic => topic.param.id == searchObject.customFeature.id);
        if (topicComp) {
          let topicCompid = topicComp.compid;
          let isShowList = pageInstance.data[topicCompid].customFeature.isShowList;
          pageInstance.setData({
            [compid + '.searchValue']: '',
            [compid + '.style']: filterStyle,
            [compid + '.showCenter']: isShowList === false ? isShowList : true,
            [compid + '.relateTopicCompId']: topicCompid,
            [topicCompid + '.relateSearchCompId']: compid
          });
        }else {
          app.showModal({content: '搜索未找到绑定的话题列表'});
          pageInstance.setData({
            [compid + '.searchValue']: '',
            [compid + '.style']: filterStyle
          });
        }
      }
    },
    searchForTopicAct: function (e) {
      let currentTarget = e.currentTarget,
        dataset = currentTarget.dataset,
        compid = dataset.compid,
        topicCompId = dataset.topicCompid,
        search_value = e.detail.value,
        pageInstance = app.getAppCurrentPage(),
        newdata = {};

      if (topicCompId) {
        let classifyCompId = pageInstance.data[topicCompId].relateClassifyCompId;

        newdata[compid + '.searchValue'] = search_value;
        newdata[topicCompId + '.listStatus.loading'] = false;
        newdata[topicCompId + '.listStatus.isMore'] = true;
        newdata[topicCompId + '.listParam.section_id'] = '';
        newdata[topicCompId + '.listParam.category_id'] = '';

        if (classifyCompId) {
          newdata[classifyCompId + '.selectedSectionId'] = '';
          newdata[classifyCompId + '.selectedCategoryId'] = '';
        }
        newdata[topicCompId + '.listParam.search_value'] = search_value;
        newdata[topicCompId + '.listParam.page'] = -1;
        pageInstance.setData(newdata);
        var Topic = require('../topic/topic.js');
        Topic && Topic.getTopListData(pageInstance, topicCompId, function (data) {
          app.showModal({
            content: '搜索到' + data.length + '条话题'
          });
        });
      }else {
        app.showModal({content: '搜索未找到绑定的话题列表'});
      }
    },
    topicSearchInputAct: function (e) {
    },
    turnToTopicUserCenter: function (e) {
      app.turnToPage('/informationManagement/pages/communityUsercenter/communityUsercenter?detail=');
    },
    turnToTopicNotify: function (e) {
      app.turnToPage('/informationManagement/pages/communityNotify/communityNotify?detail=');
    },
    searchList: function (event, scompid, sevent) {
      let pageInstance = app.getAppCurrentPage();
      let compid       = !scompid ? event.currentTarget.dataset.compid : event;
      let compData     = pageInstance.data[compid];
      let customFeature = compData.customFeature;
      let listid       = customFeature.searchObject.customFeature.id;
      let listType     = customFeature.searchObject.type;
      let form         = customFeature.searchObject.customFeature.form;
      let keyword      = pageInstance.keywordList[compid] || '';
      let search_compid = '';
      let search_compData = {};
      let search_customFeature = {};
      let page         = '';

      if (listType == 'group-buy-list') {
        for (let index in pageInstance.groupBuyListComps) {
          let params = pageInstance.groupBuyListComps[index];
          let groupCompid = params.compid ;
          let groupCompData = pageInstance.data[groupCompid];
          if (params.param.id === listid) {
            let component_params = {
              param: {
                page: 1,
                status: groupCompData.selectNum || 0,
                search_value: keyword
              }
            }
            var GroupBuyList = require('../group-buy-list/group-buy-list.js');
            GroupBuyList && GroupBuyList.getGroupBuyList(groupCompid, component_params);
          }
        }
        return;
      }else if(listType == 'news') {
        for (let index in pageInstance.newsComps) {
          let params = pageInstance.newsComps[index];
          if (params.param.id === listid) {
            search_compid = params.compid;
            form = params.param.form;
            break;
          }
        }

        pageInstance.setData({
          [search_compid + '.pageObj']: {
            isLoading: false,
            noMore: false,
            page: 1
          },
          [search_compid + '.selectedCateId']: '',
          [search_compid + '.newslist']: []
        });

        var News = require('../news/news.js');
        News && News.getNewsList(
          {
            compid: search_compid,
            page: keyword ? -1 : 1,
            search_value: keyword
          },
          function (res) {
            if (keyword) {
              setTimeout(function () {
                app.showModal({
                  content: '搜索到'+ res.data.length +'条资讯'
                });
              },0);
            }
          }
        )

        return;
      }

      let newdata = {};

      if( scompid ){
        search_compid = scompid;
        search_compData = pageInstance.data[search_compid];
        search_customFeature = search_compData.customFeature;

        page = search_compData.curpage + 1;

        if(!search_compData.is_more && typeof sevent == 'object' && sevent.type == 'tap'){
          app.showModal({
            content: '已经加载到最后了'
          });
        }

        if (pageInstance.requesting || !search_compData.is_more) {
          return;
        }
        pageInstance.requesting = true;

      }else{

        page = 1;

        if(listType === 'list-vessel'){
          for (let index in pageInstance.list_compids_params) {
            let params = pageInstance.list_compids_params[index];
            if (params.param.id === listid) {
              search_compid = params.compid;
              let compdata = pageInstance.data[search_compid];
              form = compdata.customFeature.form;
              newdata[search_compid + '.list_data'] = [];
              break;
            }
          }
        }else if(listType === 'goods-list'){
          for (let index in pageInstance.goods_compids_params) {
            let params = pageInstance.goods_compids_params[index];
            if (params.param.id === listid) {
              search_compid = params.compid;
              let compdata = pageInstance.data[search_compid];
              form = compdata.customFeature.form;
              newdata[search_compid + '.goods_data'] = [];
              break;
            }
          }
        }else if(listType === 'franchisee-list'){
          for (let index in pageInstance.franchiseeComps) {
            let params = pageInstance.franchiseeComps[index];
            if (params.param.id === listid) {
              search_compid = params.compid;
              form = params.param.form;
              newdata[search_compid + '.franchisee_data'] = [];
              break;
            }
          }
        }else if(listType === 'video-list'){
          for (let index in pageInstance.videoListComps) {
            let params = pageInstance.videoListComps[index];
            if (params.param.id === listid) {
              search_compid = params.compid;
              form = params.param.form;
              newdata[search_compid + '.video_data'] = [];
              break;
            }
          }
        }else if (listType === 'dynamic-classify') {
          for (let index in pageInstance.dynamicClassifyGroupidsParams) {
            let dyCompid = pageInstance.dynamicClassifyGroupidsParams[index].compid,
              dyCompData = pageInstance.data[dyCompid];
            if (dyCompData.customFeature.id === listid) {
              search_compid = dyCompid;
              form = dyCompData.customFeature.form;
              newdata[search_compid + '.list_data'] = [];
              break;
            }
          }
        }

        search_compData = pageInstance.data[search_compid];
        search_customFeature = search_compData.customFeature;
      }
      newdata[search_compid + '.loading'] = true;
      newdata[search_compid + '.loadingFail'] = false;
      pageInstance.setData(newdata);


      let url = '/index.php?r=appData/search';
      let param = {
        "search":{
            "data":[{"_allkey":keyword,"form": form}],
            "app_id": app.getAppId()
          },
        no_wrap: listType === 'video-list' || listType === 'franchisee-list' ? 1 : '',
        page_size : 20,
        page: page
      };
      param.page_size = search_customFeature.loadingNum || 20;

      if(listType === 'franchisee-list'){
        let info = app.getLocationInfo();
        param.search.longitude = info.longitude;
        param.search.latitude = info.latitude;
      }

      app.sendRequest({
        url: url,
        data: param,
        hideLoading: true,
        chain: listType === 'franchisee-list' ? true : '',
        success: function (res) {
          let newdata = {};

          if(res.data.length == 0){
            setTimeout(function () {
              app.showModal({
                content: '没有找到与“'+keyword+'”相关的内容'
              });
            },0);
          }
          if (listType === "goods-list") {
            newdata[search_compid + '.goods_data'] = page == 1 ? res.data : search_compData.goods_data.concat(res.data);
          } else if (listType === 'list-vessel' || listType == 'dynamic-classify') {
            let listField = search_compData.listField;
            for (let j in res.data) {
              for (let k in res.data[j].form_data) {
                if (k == 'category') {
                  continue;
                }
                if (/region/.test(k)) {
                  continue;
                }
                if(k == 'goods_model') {
                  res.data[j].form_data.virtual_price = app.formVirtualPrice(res.data[j].form_data);
                }
                let description = res.data[j].form_data[k];
                if (listField.indexOf(k) < 0 && /<("[^"]*"|'[^']*'|[^'">])*>/.test(description)) { //没有绑定的字段的富文本置为空
                  res.data[j].form_data[k] = '';
                }else if(app.needParseRichText(description)) {
                  res.data[j].form_data['row' + k] = description;
                  res.data[j].form_data['split' + k] = description.split(';');
                  res.data[j].form_data[k] = app.getWxParseResult(description.split(';')[0]);
                }
              }
            }
            newdata[search_compid + '.list_data'] = page == 1 ? res.data : search_compData.list_data.concat(res.data);
          } else if (listType === 'franchisee-list') {
            for(let index in res.data){
              let distance = res.data[index].distance;
              res.data[index].distance = util.formatDistance(distance);
            }
            newdata[search_compid + '.franchisee_data'] = page == 1 ? res.data : search_compData.franchisee_data.concat(res.data);
          }else if(listType == 'video-list'){
            let rdata = res.data;

            for (let i = 0; i < rdata.length; i++) {
              rdata[i].video_view = app.handlingNumber(rdata[i].video_view);
            }
            newdata[search_compid + '.video_data'] = page == 1 ? rdata : search_compData.video_data.concat(rdata);

          }

          newdata[search_compid + '.is_search'] = true;
          newdata[search_compid + '.searchEle'] = compid;
          newdata[search_compid + '.is_more']   = res.is_more;
          newdata[search_compid + '.curpage']   = res.current_page;
          newdata[search_compid + '.loading'] = false;
          newdata[search_compid + '.loadingFail'] = false;

          pageInstance.setData(newdata);

        },
        fail: function (err) {
          let newdata = {};
          newdata[search_compid + '.loadingFail'] = true;
          newdata[search_compid + '.loading'] = false;
          pageInstance.setData(newdata);
        },
        complete: function () {
          setTimeout(function () {
            pageInstance.requesting = false;
          }, 300);
        }
      })
    }
  }
})


module.exports = search;