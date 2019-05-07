var Page = require('../../utils/wlad_sdk.min.js').Page;
var app      = getApp();

var pageData = {
  data: {"free_vessel1":{"type":"free-vessel","style":"margin-left:0rpx;width:750rpx;height:120.46875rpx;margin-bottom:auto;opacity:1;margin-top:0rpx;margin-right:auto;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.3s;-webkit-animation-delay:0.3s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":[{"type":"picture","style":"border-color:rgb(34, 34, 34);background-color:transparent;border-width:0rpx;margin-left:0;width:182.8125rpx;left:42.1875rpx;height:117.1875rpx;position:absolute;opacity:1;border-style:none;border-radius:0rpx;top:2.34375rpx;margin-top:0;margin-right:0;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.3s;-webkit-animation-delay:0.3s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_5c8227584184d.jpg","customFeature":{"phoneDisplayContent":"static","boxR":"5","backgroundType":false,"dataObject":false,"name":"\u56fe\u7247","boxShadow":"('#000','0','0','5')","boxX":"0","boxY":"0","phoneNumberSource":"static","boxColor":"#000","isLockWidget":false,"photoRatio":"1.60","isAuto":false},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.3,"count":1}],"hidden":false,"id":"zhichi_880227402555","compId":"data.content[0]","parentCompid":"free_vessel1"},{"type":"picture","style":"border-color:rgb(34, 34, 34);background-color:transparent;border-width:0rpx;margin-left:0;width:42.1875rpx;left:550.78125rpx;height:49.21875rpx;position:absolute;opacity:1;border-style:none;border-radius:46.875rpx;top:0rpx;margin-top:0;margin-right:0;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.3s;-webkit-animation-delay:0.3s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_5c82262b899f1.jpg","customFeature":{"phoneDisplayContent":"static","boxR":"5","backgroundType":false,"dataObject":false,"name":"\u56fe\u7247","boxShadow":"('#000','0','0','5')","boxX":"0","boxY":"0","phoneNumberSource":"static","boxColor":"#000","isLockWidget":false,"photoRatio":"1.00","isAuto":false},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.3,"count":1}],"hidden":false,"id":"zhichi_160675816017","compId":"data.content[1]","parentCompid":"free_vessel1"},{"type":"text","style":"line-height:58.59375rpx;border-color:rgb(34, 34, 34);color:rgb(102, 102, 102);background-color:rgba(0, 0, 0, 0);border-width:4.6875rpx;text-align:left;margin-left:0;width:203.90625rpx;left:241.40625rpx;height:58.59375rpx;position:absolute;opacity:1;border-style:none;top:53.90625rpx;margin-top:0;margin-right:0;font-size:25.78125rpx;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.3s;-webkit-animation-delay:0.3s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"\u70b9\u51fb\u6b64\u5904\u6dfb\u52a0\u4e3a","customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","boxStyle":false,"boxR":"5","dataObject":false,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.3,"count":1}],"hidden":false,"id":"zhichi_711104111719","compId":"data.content[2]","parentCompid":"free_vessel1","markColor":"","mode":0},{"type":"text","style":"line-height:58.59375rpx;border-color:rgb(34, 34, 34);color:rgb(245, 53, 48);background-color:rgba(0, 0, 0, 0);border-width:4.6875rpx;text-align:left;margin-left:0;width:182.8125rpx;left:417.1875rpx;height:58.59375rpx;position:absolute;opacity:1;border-style:none;top:53.90625rpx;margin-top:0;font-weight:bold;margin-right:0;font-size:28.125rpx;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.3s;-webkit-animation-delay:0.3s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"\"\u6211\u7684\u5c0f\u7a0b\u5e8f\"","customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","boxStyle":false,"boxR":"5","dataObject":false,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.3,"count":1}],"hidden":false,"id":"zhichi_627505010989","compId":"data.content[3]","parentCompid":"free_vessel1","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"name":"\u81ea\u7531\u9762\u677f","isLockWidget":false},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.3,"count":1}],"hidden":false,"id":"zhichi_656043786694","page_form":"","compId":"free_vessel1"},"breakline2":{"type":"breakline","style":"border-width:4.6875rpx;border-bottom-style:solid;margin-top:11.71875rpx;margin-left:0;margin-right:auto;width:750rpx;border-bottom-color:#f3f3f3;","content":"<div><\/div>","customFeature":{"name":"\u5206\u5272\u7ebf","isLockWidget":false},"animations":[],"hidden":false,"id":"zhichi_35779423161","page_form":"","compId":"breakline2"},"search3":{"type":"search","style":"margin-top:0rpx;margin-left:0;height:117.1875rpx;line-height:117.1875rpx;width:750rpx;background-color:rgb(207, 226, 243);animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.3s;-webkit-animation-delay:0.3s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":{"placeholder":"\u8bf7\u8f93\u5165\u60a8\u8981\u67e5\u8be2\u7684\u8d44\u8baf\u540d\u79f0"},"customFeature":{"hasQuickTags":false,"ifLocation":false,"quickTags":[],"searchObject":{"isVessel":true,"widgetIdPath":["zhichi_14681573250"],"customFeature":{"lineBackgroundColor":"rgb(255, 255, 255)","mode":0,"form":"KpCXiTKEDK","background-color":"rgb(255, 255, 255)","loadingImg":"https:\/\/cdn.jisuapp.cn\/zhichi_frontend\/static\/webapp\/images\/list-vessel\/loading1.png","isShowFinishText":false,"loadingColor":"#000","loadingText":"\u70b9\u51fb\u52a0\u8f7d","loadingNum":10,"name":"\u5217\u8868","vesselAutoheight":1,"margin":"3","loadingStyle":"text","lineBackgroundImage":"","link":"page10003","source":"6998266","id":"zhichi_266869860901","background-image":"","loadingMethod":1,"classifyType":2},"hidden":false,"name":"\u52a8\u6001\u5217\u8868","parentForm":"","animations":[],"subPageResponse":"inner-link","style":{"margin-top":"0px","opacity":1},"subFuntionResponse":"call","content":[{"isVessel":true,"widgetIdPath":["zhichi_14681573250","zhichi_773155471386"],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"name":"\u81ea\u7531\u9762\u677f","isLockWidget":false,"segment":""},"hidden":false,"name":"\u81ea\u7531\u9762\u677f","parentForm":"KpCXiTKEDK","animations":[],"subPageResponse":"inner-link","style":{"box-shadow":"","background-color":"","margin-left":"0px","width":"320px","height":"186.8px","margin-bottom":"auto","opacity":1,"margin-top":"0px","background-image":"url(https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_55e3273565c5c.png)","margin-right":"auto"},"subFuntionResponse":"call","content":[{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_946916623427"],"customFeature":{"phoneDisplayContent":"static","ifMust":false,"boxR":"5","backgroundType":false,"dataObject":false,"name":"\u56fe\u7247","boxShadow":"('#000','0','0','5')","boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"UamDXwFSRf","boxColor":"#000","isLockWidget":false,"photoRatio":"1.00","isAuto":false},"hidden":false,"name":"\u56fe\u7247","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"border-color":"rgb(34, 34, 34)","box-shadow":"","background-color":"transparent","border-width":"0px","margin-left":0,"width":"89px","left":"223px","height":"80px","position":"absolute","margin-bottom":"","opacity":"1","border-style":"none","border-radius":"0px","top":"17px","margin-top":0,"margin-right":0},"subFuntionResponse":"call","content":"https:\/\/cdn.jisuapp.cn\/static\/jisuapp_editor\/images\/zhichi-default.png","type":"picture","id":"zhichi_946916623427"},{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_404624088992"],"customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":false,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"qMbzTFAsrn","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"hidden":false,"name":"\u6587\u672c","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"line-height":"25px","text-shadow":"","border-color":"rgb(34, 34, 34)","box-shadow":"","color":"rgb(102, 102, 102)","background-color":"rgba(0, 0, 0, 0)","border-width":"2px","text-align":"left","margin-left":0,"width":"209px","left":"14px","height":"27px","position":"absolute","opacity":1,"border-style":"none","text-decoration":"","font-style":"","top":"33px","margin-top":0,"font-weight":"bold","background-image":"","margin-right":0,"font-size":"14px"},"subFuntionResponse":"call","content":"\u6807\u9898","type":"text","id":"zhichi_404624088992"},{"isInListVessel":false,"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_762132694626"],"customFeature":{"size":"30px","totalTimes":1,"isShowCustomImage":false,"voteChangePicture":"","voteInitPicture":"https:\/\/develop.zhichiwangluo.com\/static\/webapp\/images\/new-count\/eyes.png","effect":"0","segment":"","isShowImage":true,"type":"1","id":"zhichi_428318669427","isSupportCancel":"0"},"hidden":false,"name":"\u8ba1\u6570\u5668","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"color":"rgb(102, 102, 102)","margin-left":0,"width":"76px","left":"146px","height":"23px","position":"absolute","opacity":"1","text-decoration":"","font-style":"","top":"141px","margin-top":0,"font-weight":"","margin-right":0,"font-size":"10px"},"subFuntionResponse":"call","content":"\u6d4f\u89c8\u91cf","type":"new-count","id":"zhichi_762132694626"},{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_933355842980"],"customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":true,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"hidden":false,"name":"\u6587\u672c","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"line-height":"12px","text-shadow":"","border-color":"rgb(34, 34, 34)","box-shadow":"","color":"rgb(245, 53, 48)","background-color":"rgba(0, 0, 0, 0)","border-width":"2px","text-align":"left","margin-left":0,"width":"191px","left":"11px","height":"12px","position":"absolute","opacity":1,"border-style":"none","text-decoration":"","font-style":"","top":"151px","margin-top":0,"font-weight":"","background-image":"","margin-right":0,"font-size":"10px"},"subFuntionResponse":"call","content":"\u6807\u7b7e","type":"text","id":"zhichi_933355842980"}],"type":"free-vessel","id":"zhichi_773155471386","children":[{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_946916623427"],"customFeature":{"phoneDisplayContent":"static","ifMust":false,"boxR":"5","backgroundType":false,"dataObject":false,"name":"\u56fe\u7247","boxShadow":"('#000','0','0','5')","boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"UamDXwFSRf","boxColor":"#000","isLockWidget":false,"photoRatio":"1.00","isAuto":false},"hidden":false,"name":"\u56fe\u7247","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"border-color":"rgb(34, 34, 34)","box-shadow":"","background-color":"transparent","border-width":"0px","margin-left":0,"width":"89px","left":"223px","height":"80px","position":"absolute","margin-bottom":"","opacity":"1","border-style":"none","border-radius":"0px","top":"17px","margin-top":0,"margin-right":0},"subFuntionResponse":"call","content":"https:\/\/cdn.jisuapp.cn\/static\/jisuapp_editor\/images\/zhichi-default.png","type":"picture","id":"zhichi_946916623427"},{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_404624088992"],"customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":false,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"qMbzTFAsrn","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"hidden":false,"name":"\u6587\u672c","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"line-height":"25px","text-shadow":"","border-color":"rgb(34, 34, 34)","box-shadow":"","color":"rgb(102, 102, 102)","background-color":"rgba(0, 0, 0, 0)","border-width":"2px","text-align":"left","margin-left":0,"width":"209px","left":"14px","height":"27px","position":"absolute","opacity":1,"border-style":"none","text-decoration":"","font-style":"","top":"33px","margin-top":0,"font-weight":"bold","background-image":"","margin-right":0,"font-size":"14px"},"subFuntionResponse":"call","content":"\u6807\u9898","type":"text","id":"zhichi_404624088992"},{"isInListVessel":false,"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_762132694626"],"customFeature":{"size":"30px","totalTimes":1,"isShowCustomImage":false,"voteChangePicture":"","voteInitPicture":"https:\/\/develop.zhichiwangluo.com\/static\/webapp\/images\/new-count\/eyes.png","effect":"0","segment":"","isShowImage":true,"type":"1","id":"zhichi_428318669427","isSupportCancel":"0"},"hidden":false,"name":"\u8ba1\u6570\u5668","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"color":"rgb(102, 102, 102)","margin-left":0,"width":"76px","left":"146px","height":"23px","position":"absolute","opacity":"1","text-decoration":"","font-style":"","top":"141px","margin-top":0,"font-weight":"","margin-right":0,"font-size":"10px"},"subFuntionResponse":"call","content":"\u6d4f\u89c8\u91cf","type":"new-count","id":"zhichi_762132694626"},{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_933355842980"],"customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":true,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"hidden":false,"name":"\u6587\u672c","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"line-height":"12px","text-shadow":"","border-color":"rgb(34, 34, 34)","box-shadow":"","color":"rgb(245, 53, 48)","background-color":"rgba(0, 0, 0, 0)","border-width":"2px","text-align":"left","margin-left":0,"width":"191px","left":"11px","height":"12px","position":"absolute","opacity":1,"border-style":"none","text-decoration":"","font-style":"","top":"151px","margin-top":0,"font-weight":"","background-image":"","margin-right":0,"font-size":"10px"},"subFuntionResponse":"call","content":"\u6807\u7b7e","type":"text","id":"zhichi_933355842980"}]}],"type":"list-vessel","id":"zhichi_14681573250","children":[{"isVessel":true,"widgetIdPath":["zhichi_14681573250","zhichi_773155471386"],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"name":"\u81ea\u7531\u9762\u677f","isLockWidget":false,"segment":""},"hidden":false,"name":"\u81ea\u7531\u9762\u677f","parentForm":"KpCXiTKEDK","animations":[],"subPageResponse":"inner-link","style":{"box-shadow":"","background-color":"","margin-left":"0px","width":"320px","height":"186.8px","margin-bottom":"auto","opacity":1,"margin-top":"0px","background-image":"url(https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_55e3273565c5c.png)","margin-right":"auto"},"subFuntionResponse":"call","content":[{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_946916623427"],"customFeature":{"phoneDisplayContent":"static","ifMust":false,"boxR":"5","backgroundType":false,"dataObject":false,"name":"\u56fe\u7247","boxShadow":"('#000','0','0','5')","boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"UamDXwFSRf","boxColor":"#000","isLockWidget":false,"photoRatio":"1.00","isAuto":false},"hidden":false,"name":"\u56fe\u7247","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"border-color":"rgb(34, 34, 34)","box-shadow":"","background-color":"transparent","border-width":"0px","margin-left":0,"width":"89px","left":"223px","height":"80px","position":"absolute","margin-bottom":"","opacity":"1","border-style":"none","border-radius":"0px","top":"17px","margin-top":0,"margin-right":0},"subFuntionResponse":"call","content":"https:\/\/cdn.jisuapp.cn\/static\/jisuapp_editor\/images\/zhichi-default.png","type":"picture","id":"zhichi_946916623427"},{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_404624088992"],"customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":false,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"qMbzTFAsrn","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"hidden":false,"name":"\u6587\u672c","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"line-height":"25px","text-shadow":"","border-color":"rgb(34, 34, 34)","box-shadow":"","color":"rgb(102, 102, 102)","background-color":"rgba(0, 0, 0, 0)","border-width":"2px","text-align":"left","margin-left":0,"width":"209px","left":"14px","height":"27px","position":"absolute","opacity":1,"border-style":"none","text-decoration":"","font-style":"","top":"33px","margin-top":0,"font-weight":"bold","background-image":"","margin-right":0,"font-size":"14px"},"subFuntionResponse":"call","content":"\u6807\u9898","type":"text","id":"zhichi_404624088992"},{"isInListVessel":false,"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_762132694626"],"customFeature":{"size":"30px","totalTimes":1,"isShowCustomImage":false,"voteChangePicture":"","voteInitPicture":"https:\/\/develop.zhichiwangluo.com\/static\/webapp\/images\/new-count\/eyes.png","effect":"0","segment":"","isShowImage":true,"type":"1","id":"zhichi_428318669427","isSupportCancel":"0"},"hidden":false,"name":"\u8ba1\u6570\u5668","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"color":"rgb(102, 102, 102)","margin-left":0,"width":"76px","left":"146px","height":"23px","position":"absolute","opacity":"1","text-decoration":"","font-style":"","top":"141px","margin-top":0,"font-weight":"","margin-right":0,"font-size":"10px"},"subFuntionResponse":"call","content":"\u6d4f\u89c8\u91cf","type":"new-count","id":"zhichi_762132694626"},{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_933355842980"],"customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":true,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"hidden":false,"name":"\u6587\u672c","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"line-height":"12px","text-shadow":"","border-color":"rgb(34, 34, 34)","box-shadow":"","color":"rgb(245, 53, 48)","background-color":"rgba(0, 0, 0, 0)","border-width":"2px","text-align":"left","margin-left":0,"width":"191px","left":"11px","height":"12px","position":"absolute","opacity":1,"border-style":"none","text-decoration":"","font-style":"","top":"151px","margin-top":0,"font-weight":"","background-image":"","margin-right":0,"font-size":"10px"},"subFuntionResponse":"call","content":"\u6807\u7b7e","type":"text","id":"zhichi_933355842980"}],"type":"free-vessel","id":"zhichi_773155471386","children":[{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_946916623427"],"customFeature":{"phoneDisplayContent":"static","ifMust":false,"boxR":"5","backgroundType":false,"dataObject":false,"name":"\u56fe\u7247","boxShadow":"('#000','0','0','5')","boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"UamDXwFSRf","boxColor":"#000","isLockWidget":false,"photoRatio":"1.00","isAuto":false},"hidden":false,"name":"\u56fe\u7247","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"border-color":"rgb(34, 34, 34)","box-shadow":"","background-color":"transparent","border-width":"0px","margin-left":0,"width":"89px","left":"223px","height":"80px","position":"absolute","margin-bottom":"","opacity":"1","border-style":"none","border-radius":"0px","top":"17px","margin-top":0,"margin-right":0},"subFuntionResponse":"call","content":"https:\/\/cdn.jisuapp.cn\/static\/jisuapp_editor\/images\/zhichi-default.png","type":"picture","id":"zhichi_946916623427"},{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_404624088992"],"customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":false,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"qMbzTFAsrn","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"hidden":false,"name":"\u6587\u672c","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"line-height":"25px","text-shadow":"","border-color":"rgb(34, 34, 34)","box-shadow":"","color":"rgb(102, 102, 102)","background-color":"rgba(0, 0, 0, 0)","border-width":"2px","text-align":"left","margin-left":0,"width":"209px","left":"14px","height":"27px","position":"absolute","opacity":1,"border-style":"none","text-decoration":"","font-style":"","top":"33px","margin-top":0,"font-weight":"bold","background-image":"","margin-right":0,"font-size":"14px"},"subFuntionResponse":"call","content":"\u6807\u9898","type":"text","id":"zhichi_404624088992"},{"isInListVessel":false,"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_762132694626"],"customFeature":{"size":"30px","totalTimes":1,"isShowCustomImage":false,"voteChangePicture":"","voteInitPicture":"https:\/\/develop.zhichiwangluo.com\/static\/webapp\/images\/new-count\/eyes.png","effect":"0","segment":"","isShowImage":true,"type":"1","id":"zhichi_428318669427","isSupportCancel":"0"},"hidden":false,"name":"\u8ba1\u6570\u5668","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"color":"rgb(102, 102, 102)","margin-left":0,"width":"76px","left":"146px","height":"23px","position":"absolute","opacity":"1","text-decoration":"","font-style":"","top":"141px","margin-top":0,"font-weight":"","margin-right":0,"font-size":"10px"},"subFuntionResponse":"call","content":"\u6d4f\u89c8\u91cf","type":"new-count","id":"zhichi_762132694626"},{"widgetIdPath":["zhichi_14681573250","zhichi_773155471386","zhichi_933355842980"],"customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":true,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"hidden":false,"name":"\u6587\u672c","parentForm":"KpCXiTKEDK","animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.2,"count":1}],"subPageResponse":"inner-link","pattern":"free","style":{"line-height":"12px","text-shadow":"","border-color":"rgb(34, 34, 34)","box-shadow":"","color":"rgb(245, 53, 48)","background-color":"rgba(0, 0, 0, 0)","border-width":"2px","text-align":"left","margin-left":0,"width":"191px","left":"11px","height":"12px","position":"absolute","opacity":1,"border-style":"none","text-decoration":"","font-style":"","top":"151px","margin-top":0,"font-weight":"","background-image":"","margin-right":0,"font-size":"10px"},"subFuntionResponse":"call","content":"\u6807\u7b7e","type":"text","id":"zhichi_933355842980"}]}]}},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.3,"count":1}],"hidden":false,"id":"zhichi_919328740771","page_form":"","compId":"search3","parentCompid":"search3"},"breakline4":{"type":"breakline","style":"border-width:4.6875rpx;border-bottom-style:solid;margin-top:11.71875rpx;margin-left:0;margin-right:auto;width:750rpx;border-bottom-color:#f3f3f3;","content":"<div><\/div>","customFeature":{"name":"\u5206\u5272\u7ebf","isLockWidget":false},"animations":[],"hidden":false,"id":"zhichi_80863979418","page_form":"","compId":"breakline4"},"list_vessel5":{"type":"list-vessel","style":"margin-top:0rpx;opacity:1;background-color:rgb(255, 255, 255);margin-left:auto;","content":[{"type":"free-vessel","style":"margin-left:0rpx;width:750rpx;height:209.53125rpx;margin-bottom:auto;opacity:1;margin-top:0rpx;background-image:url(https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_55e3273565c5c.png);margin-right:auto;","content":[{"type":"picture","style":"border-color:rgb(34, 34, 34);background-color:transparent;border-width:0rpx;margin-left:0;width:208.59375rpx;left:522.65625rpx;height:187.5rpx;position:absolute;opacity:1;border-style:none;border-radius:0rpx;top:11.71875rpx;margin-top:0;margin-right:0;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.6s;-webkit-animation-delay:0.6s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"https:\/\/cdn.jisuapp.cn\/static\/jisuapp_editor\/images\/zhichi-default.png","customFeature":{"phoneDisplayContent":"static","ifMust":false,"boxR":"5","backgroundType":false,"dataObject":false,"name":"\u56fe\u7247","boxShadow":"('#000','0','0','5')","boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"UamDXwFSRf","boxColor":"#000","isLockWidget":false,"photoRatio":"1.00","isAuto":false},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.6,"count":1}],"hidden":false,"id":"zhichi_946916623427","compId":"data.content[0]","parentCompid":"data.content[0]"},{"type":"text","style":"line-height:58.59375rpx;border-color:rgb(34, 34, 34);color:rgb(102, 102, 102);background-color:rgba(0, 0, 0, 0);border-width:4.6875rpx;text-align:left;margin-left:0;width:489.84375rpx;left:32.8125rpx;height:63.28125rpx;position:absolute;opacity:1;border-style:none;top:11.71875rpx;margin-top:0;font-weight:bold;margin-right:0;font-size:28.125rpx;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.6s;-webkit-animation-delay:0.6s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"\u6807\u9898","customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":false,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"qMbzTFAsrn","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.6,"count":1}],"hidden":false,"id":"zhichi_404624088992","compId":"data.content[1]","parentCompid":"data.content[0]","markColor":"","mode":0},{"type":"text","style":"line-height:28.125rpx;border-color:rgb(34, 34, 34);color:rgb(245, 53, 48);background-color:rgba(0, 0, 0, 0);border-width:4.6875rpx;text-align:left;margin-left:0;width:457.03125rpx;left:35.15625rpx;height:28.125rpx;position:absolute;opacity:1;border-style:none;top:168.75rpx;margin-top:0;margin-right:0;font-size:23.4375rpx;animation-name:appear_fade_right;-webkit-animation-name:appear_fade_right;animation-duration:1s;-webkit-animation-duration:1s;animation-delay:0.6s;-webkit-animation-delay:0.6s;animation-iteration-count:1;-webkit-animation-iteration-count:1;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"\u6807\u7b7e","customFeature":{"textStyle":false,"textR":"5","phoneDisplayContent":"static","ifMust":false,"boxStyle":false,"boxR":"5","dataObject":true,"textX":"0","name":"\u6587\u672c","textY":"0","word-wrap":2,"boxX":"0","boxY":"0","phoneNumberSource":"static","segment":"nYyHOkKXxi","textColor":"rgb(0, 0, 0)","boxColor":"rgb(0, 0, 0)","isLockWidget":false,"isWordWrap":0},"animations":[{"name":"appear_fade","direction":"_right","duration":1,"delay":0.6,"count":1}],"hidden":false,"id":"zhichi_933355842980","compId":"data.content[2]","parentCompid":"data.content[0]","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"name":"\u81ea\u7531\u9762\u677f","isLockWidget":false,"segment":""},"animations":[],"hidden":false,"id":"zhichi_773155471386","parentCompid":"list_vessel5","compId":"data.content[0]"}],"customFeature":{"lineBackgroundColor":"rgb(255, 255, 255)","mode":0,"form":"KpCXiTKEDK","background-color":"rgb(255, 255, 255)","loadingImg":"https:\/\/cdn.jisuapp.cn\/zhichi_frontend\/static\/webapp\/images\/list-vessel\/loading1.png","isShowFinishText":true,"loadingColor":"#000","loadingText":"\u70b9\u51fb\u52a0\u8f7d","loadingNum":"10000","name":"\u5217\u8868","vesselAutoheight":"1","margin":"0","loadingStyle":"text","lineBackgroundImage":"","link":"page10003","source":"7443959","id":"zhichi_266869860901","background-image":"","loadingMethod":"0","classifyType":2,"pickUpArr":{"express":true,"sameJourney":true,"selfLifting":true}},"animations":[],"hidden":false,"id":"zhichi_14681573250","page_form":"","compId":"list_vessel5","list_style":"background-color:rgb(255, 255, 255);margin-left:auto;","customFeature_id":"zhichi_266869860901","is_more":1,"param":"{\"id\":\"zhichi_266869860901\",\"form\":\"KpCXiTKEDK\",\"page\":1,\"app_id\":\"nnx1022Wu9\",\"is_count\":0}","form":"KpCXiTKEDK"},"list_vessel6":{"type":"list-vessel","style":"margin-top:0rpx;opacity:1;background-color:rgb(255, 255, 255);margin-left:auto;","content":[{"type":"free-vessel","style":"width:750rpx;height:83.90625rpx;margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:0rpx;opacity:1;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:164.0625rpx;border-style:none;border-width:0rpx;height:79.6875rpx;width:86.71875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:642.1875rpx;top:2.34375rpx;animation-name:transit_swing;-webkit-animation-name:transit_swing;animation-duration:2.5s;-webkit-animation-duration:2.5s;animation-delay:0.2s;-webkit-animation-delay:0.2s;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_5c85d07b7ea84.png","customFeature":{"boxShadow":"('#000','0','0','5')","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","dataObject":false,"phoneNumberSource":"static","phoneDisplayContent":"static","isAuto":false,"photoRatio":"1.00","name":"\u56fe\u7247","backgroundType":false,"isLockWidget":false,"segment":""},"animations":[{"name":"transit_swing","direction":"","duration":2.5,"delay":0.2,"count":"infinite"}],"hidden":false,"id":"zhichi_266654191961","compId":"data.content[0]","parentCompid":"data.content[0]"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"name":"\u81ea\u7531\u9762\u677f","isLockWidget":false,"segment":""},"animations":[],"hidden":false,"id":"zhichi_22120565180","parentCompid":"list_vessel6","compId":"data.content[0]"}],"customFeature":{"background-color":"rgb(255, 255, 255)","background-image":"","form":"KpCXiTKEDK","id":"zhichi_971291415511","lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","link":"page10014","margin":"3","name":"\u5217\u8868","source":"7443969","vesselAutoheight":1,"mode":0,"loadingMethod":1,"loadingStyle":"text","loadingText":"\u70b9\u51fb\u52a0\u8f7d","loadingNum":10,"loadingImg":"https:\/\/cdn.jisuapp.cn\/zhichi_frontend\/static\/webapp\/images\/list-vessel\/loading1.png","loadingColor":"#000","isShowFinishText":false,"pickUpArr":{"express":true,"sameJourney":true,"selfLifting":true},"classifyType":2},"animations":[],"hidden":false,"id":"zhichi_238482480703","page_form":"","compId":"list_vessel6","list_style":"margin-bottom:7.03125rpx;background-color:rgb(255, 255, 255);margin-left:auto;","customFeature_id":"zhichi_971291415511","is_more":1,"param":"{\"id\":\"zhichi_971291415511\",\"form\":\"KpCXiTKEDK\",\"page\":1,\"app_id\":\"nnx1022Wu9\",\"is_count\":0}","form":"KpCXiTKEDK"},"suspension7":{"type":"suspension","style":"color:#000;background-color:rgba(0,0,0,0);opacity:1;border-radius:93.75rpx;right:11.71875rpx;font-size:28.125rpx;margin-left:auto;animation-name:appear_fade_left,transit_jump;-webkit-animation-name:appear_fade_left,transit_jump;animation-duration:1s,2s;-webkit-animation-duration:1s,2s;animation-delay:1.5s,2.7s;-webkit-animation-delay:1.5s,2.7s;animation-iteration-count:1,infinite;-webkit-animation-iteration-count:1,infinite;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;margin-left:auto;","content":[{"customFeature":{"action":"top","width":"20px","height":"20px"},"pic":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_5c778d4b6a2f1.jpg","title":"\u56de\u5230\u9876\u90e8","widgetIdPath":["zhichi_382842115739",null],"content":"","parentCompid":"suspension7","style":"","itemType":null,"itemParentType":"suspension","itemIndex":0,"eventParams":"[]","eventHandler":"scrollPageTop"},{"customFeature":{"action":"contact","width":"20px","height":"20px","index_value":"","plateId":"","firstClassifyId":"","xcx-page-url":"","xcx-appid":""},"pic":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_5c6e5e998b2ef.jpg","title":"\u5ba2\u670d","widgetIdPath":["zhichi_382842115739",null],"content":"","parentCompid":"suspension7","style":""},{"customFeature":{"action":"page-share","width":"20px","height":"20px","index_value":"","plateId":"","firstClassifyId":"","xcx-page-url":"","xcx-appid":"","pageShareImgUrl":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/album\/file_5c88baf6e7e80.png","pageShareCustomText":"\u6295\u8d44\u602a\u517d\uff0c\u8d44\u8baf\u5929\u4e0b\uff01"},"pic":"https:\/\/img.zhichiwangluo.com\/zcimgdir\/thumb\/t_15536596175c9af6e13ca49.jpg","title":"\u8f6c\u53d1\u597d\u53cb","widgetIdPath":["zhichi_382842115739",null],"content":"","parentCompid":"suspension7","style":"","itemType":null,"itemParentType":"suspension","itemIndex":2,"eventParams":"{\"pageShareImgUrl\":\"https:\\\/\\\/img.zhichiwangluo.com\\\/zcimgdir\\\/album\\\/file_5c88baf6e7e80.png\",\"pageShareCustomText\":\"\\u6295\\u8d44\\u602a\\u517d\\uff0c\\u8d44\\u8baf\\u5929\\u4e0b\\uff01\"}","eventHandler":"tapPageShareHandler"}],"customFeature":{"lineBackgroundColor":"rgba(0,0,0,0)","mode":0,"openIcon":true,"width":"60px","height":"250px","backgroundType":false,"img-size":"50px","margin":2,"openText":false,"backgroundTypeNew":false,"lineBackgroundImage":""},"animations":[{"name":"appear_fade","direction":"_left","duration":1,"delay":1.5,"count":1},{"name":"transit_jump","direction":"","duration":2,"delay":0.2,"count":"infinite"}],"hidden":false,"id":"zhichi_382842115739","page_form":"","compId":"suspension7","list_style":"margin-bottom:4.6875rpx;border-radius:93.75rpx;width:;height:;background-color:rgba(0,0,0,0);margin-left:auto;","suspension_bottom":"164.0625rpx"},"has_tabbar":1,"page_hidden":true,"page_form":"","top_nav":{"navigationBarBackgroundColor":"#fff","navigationBarTextStyle":"black","navigationBarTitleText":"\u602a\u517d\u5546\u8baf"},"dataId":"",wlad: { adData: {}, ad: { banner: ["banner_0","banner_1","banner_2","banner_3","banner_4","banner_5","banner_6","banner_7","banner_8","banner_9","banner_10","banner_11","banner_12"], insert: "insert", fixed: "fixed" } }},
    need_login: true,
      bind_phone: false,
    page_router: 'page10000',
    page_form: 'none',
      dataId: '',
      list_compids_params: [{"compid":"list_vessel5","param":{"id":"zhichi_266869860901","form":"KpCXiTKEDK","page":1,"app_id":"nnx1022Wu9","is_count":0}},{"compid":"list_vessel6","param":{"id":"zhichi_971291415511","form":"KpCXiTKEDK","page":1,"app_id":"nnx1022Wu9","is_count":0}}],
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
      searchComponentParam: [{"compid":"search3"}],
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
    app.onPageLoad(e);
    app.isNeedRewardModal();
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
    return app.onPageShareAppMessage(e, app.getIntegralLog);
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
