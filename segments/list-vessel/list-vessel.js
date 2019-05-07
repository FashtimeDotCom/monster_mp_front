var Element = require('../../utils/element.js');
var app = getApp();

var listVessel = new Element({
  events: {

  },
  methods: {
    init: function(compid, pageInstance){
      let compData = pageInstance.data[compid];
      let customFeature = compData.customFeature;
      let oldParam = JSON.parse(compData.param || '');
      let param = {};
      let url = '/index.php?r=AppData/getFormDataList';

      param.form = customFeature.form;
      param.is_count = oldParam.is_count || 0;
      param.page = 1;

      if(customFeature.form=='group_buy'){
        url="/index.php?r=AppGroupBuy/GetGroupBuyGoodsList";
        param.current_status = 0;
      }
      if(customFeature.source && customFeature.source !== 'none'){
        param.idx_arr = {
          idx: 'category',
          idx_value: customFeature.source
        }
      }
      param.page_size = customFeature.loadingNum || 10;

      let field = app.getListVessel(compData);
      let fieldData = {};

      param.need_column_arr = field.concat('app_id', 'id', 'is_seckill', 'mode_id', 'goods_id', 'is_group_buy','seckill_activity_id','seckill_activity_time_id','is_seckill_activity');

      fieldData[compid + '.listField'] = field;
      fieldData[compid + '.need_column_arr'] = param.need_column_arr;
      fieldData[compid + '.loading'] = true;
      fieldData[compid + '.loadingFail'] = false;
      fieldData[compid + '.list_data'] = [];
      fieldData[compid + '.is_more'] = 1;
      fieldData[compid + '.curpage'] = 0;
      pageInstance.setData(fieldData);

      app.sendRequest({
        hideLoading: true,
        url: url,
        data: param,
        method: 'post',
        chain: true,
        subshop: pageInstance.franchiseeId || '',
        success: function (res) {
          if (res.status == 0) {
            let newdata = {};

            if (param.form !== 'form') {
              for (let j in res.data) {
                if (customFeature.form == 'group_buy') {
                  res.data[j] = {
                    form_data: Object.assign({}, res.data[j])
                  }
                }
                for (let k in res.data[j].form_data) {
                  if (k == 'category') {
                    continue;
                  }
                  if(/region/.test(k)){
                    continue;
                  }
                  if(k == 'goods_model') {
                    res.data[j].form_data.virtual_price = app.formVirtualPrice(res.data[j].form_data);
                  }
                  let description = res.data[j].form_data[k];

                  if (field.indexOf(k) < 0 && /<("[^"]*"|'[^']*'|[^'">])*>/.test(description)) { //没有绑定的字段的富文本置为空
                    res.data[j].form_data[k] = '';
                  } else if (app.needParseRichText(description)) {
                    res.data[j].form_data[k] = app.getWxParseResult(description);
                  }
                }
              }
            }

            newdata[compid + '.list_data'] = res.data;
            newdata[compid + '.is_more'] = res.is_more || 0;
            newdata[compid + '.curpage'] = 1;
            newdata[compid + '.loading'] = false;
            newdata[compid + '.loadingFail'] = false;

            pageInstance.setData(newdata);
          }
        },
        fail: function(res){
          let newdata = {};
          newdata[compid + '.loadingFail'] = true;
          newdata[compid + '.loading'] = false;
          pageInstance.setData(newdata);
        }
      });
    }
  }

})


module.exports = listVessel;