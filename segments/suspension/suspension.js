var Element = require('../../utils/element.js');
var app = getApp();

var suspension = new Element({
  events: {

  },
  methods: {
    init: function(pageInstance){
      this.suspensionBottom(pageInstance);
    },
    suspensionBottom: function(pageInstance) {
      for (let i in pageInstance.data) {
        if (/^suspension/.test(i)) {
          let suspension = pageInstance.data[i],
            newdata = {},
            margin = suspension.customFeature.margin,
            imgSize = suspension.customFeature['img-size'],
            width = suspension.customFeature.width,
            height = suspension.customFeature.height,
            bottom = suspension.suspension_bottom;
          
          if (suspension.hasInit){
            break;
          }
          newdata[i + '.hasInit'] = true;

          if (margin) {
            let b = 0;
            if (/rpx/.test(height)) {
              b = parseFloat(margin);
            } else {
              b = parseFloat(margin) * 2.34;
            }
            newdata[i + '.suspension_margin'] = b
          }
          if (imgSize) {
            let b = 0;
            if (/rpx/.test(height)) {
              b = parseFloat(imgSize);
            } else {
              b = parseFloat(imgSize) * 2.34;
            }
            newdata[i + '.suspension_imgSize'] = b
          }
          if (width) {
            let b = 0;
            if (/rpx/.test(height)) {
              b = parseFloat(width);
            } else {
              b = parseFloat(width) * 2.34;
            }
            newdata[i + '.suspension_width'] = b
          }
          if (height) {
            let b = 0;
            if (/rpx/.test(height)) {
              b = parseFloat(height);
            } else {
              b = parseFloat(height) * 2.34;
            }
            newdata[i + '.suspension_height'] = b
          }
          if (bottom) {
            let b = 0;
            if (/rpx/.test(bottom)) {
              b = parseFloat(bottom);
            } else {
              b = parseFloat(bottom) * 2.34;
            }
            if (pageInstance.data.has_tabbar == 1) {
              newdata[i + '.suspension_bottom'] = b - 56 * 2.34;
            } else {
              newdata[i + '.suspension_bottom'] = b;
            }
          } else {
            newdata[i + '.suspension_bottom'] = -1;
          }
          pageInstance.setData(newdata);
        }
      }
    }
  }
});


module.exports = suspension;