!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.Ald=e()}(this,function(){function n(n,e){var t=(65535&n)+(65535&e);return(n>>16)+(e>>16)+(t>>16)<<16|65535&t}function e(n,e){return n<<e|n>>>32-e}function t(t,r,o,a,i,s){return n(e(n(n(r,t),n(a,s)),i),o)}function r(n,e,r,o,a,i,s){return t(e&r|~e&o,n,e,a,i,s)}function o(n,e,r,o,a,i,s){return t(e&o|r&~o,n,e,a,i,s)}function a(n,e,r,o,a,i,s){return t(e^r^o,n,e,a,i,s)}function i(n,e,r,o,a,i,s){return t(r^(e|~o),n,e,a,i,s)}function s(e){for(var t=1732584193,s=-271733879,u=-1732584194,c=271733878,f=0;f<e.length;f+=16){var p=t,l=s,h=u,d=c;t=r(t,s,u,c,e[f+0],7,-680876936),c=r(c,t,s,u,e[f+1],12,-389564586),u=r(u,c,t,s,e[f+2],17,606105819),s=r(s,u,c,t,e[f+3],22,-1044525330),t=r(t,s,u,c,e[f+4],7,-176418897),c=r(c,t,s,u,e[f+5],12,1200080426),u=r(u,c,t,s,e[f+6],17,-1473231341),s=r(s,u,c,t,e[f+7],22,-45705983),t=r(t,s,u,c,e[f+8],7,1770035416),c=r(c,t,s,u,e[f+9],12,-1958414417),u=r(u,c,t,s,e[f+10],17,-42063),s=r(s,u,c,t,e[f+11],22,-1990404162),t=r(t,s,u,c,e[f+12],7,1804603682),c=r(c,t,s,u,e[f+13],12,-40341101),u=r(u,c,t,s,e[f+14],17,-1502002290),s=r(s,u,c,t,e[f+15],22,1236535329),t=o(t,s,u,c,e[f+1],5,-165796510),c=o(c,t,s,u,e[f+6],9,-1069501632),u=o(u,c,t,s,e[f+11],14,643717713),s=o(s,u,c,t,e[f+0],20,-373897302),t=o(t,s,u,c,e[f+5],5,-701558691),c=o(c,t,s,u,e[f+10],9,38016083),u=o(u,c,t,s,e[f+15],14,-660478335),s=o(s,u,c,t,e[f+4],20,-405537848),t=o(t,s,u,c,e[f+9],5,568446438),c=o(c,t,s,u,e[f+14],9,-1019803690),u=o(u,c,t,s,e[f+3],14,-187363961),s=o(s,u,c,t,e[f+8],20,1163531501),t=o(t,s,u,c,e[f+13],5,-1444681467),c=o(c,t,s,u,e[f+2],9,-51403784),u=o(u,c,t,s,e[f+7],14,1735328473),s=o(s,u,c,t,e[f+12],20,-1926607734),t=a(t,s,u,c,e[f+5],4,-378558),c=a(c,t,s,u,e[f+8],11,-2022574463),u=a(u,c,t,s,e[f+11],16,1839030562),s=a(s,u,c,t,e[f+14],23,-35309556),t=a(t,s,u,c,e[f+1],4,-1530992060),c=a(c,t,s,u,e[f+4],11,1272893353),u=a(u,c,t,s,e[f+7],16,-155497632),s=a(s,u,c,t,e[f+10],23,-1094730640),t=a(t,s,u,c,e[f+13],4,681279174),c=a(c,t,s,u,e[f+0],11,-358537222),u=a(u,c,t,s,e[f+3],16,-722521979),s=a(s,u,c,t,e[f+6],23,76029189),t=a(t,s,u,c,e[f+9],4,-640364487),c=a(c,t,s,u,e[f+12],11,-421815835),u=a(u,c,t,s,e[f+15],16,530742520),s=a(s,u,c,t,e[f+2],23,-995338651),t=i(t,s,u,c,e[f+0],6,-198630844),c=i(c,t,s,u,e[f+7],10,1126891415),u=i(u,c,t,s,e[f+14],15,-1416354905),s=i(s,u,c,t,e[f+5],21,-57434055),t=i(t,s,u,c,e[f+12],6,1700485571),c=i(c,t,s,u,e[f+3],10,-1894986606),u=i(u,c,t,s,e[f+10],15,-1051523),s=i(s,u,c,t,e[f+1],21,-2054922799),t=i(t,s,u,c,e[f+8],6,1873313359),c=i(c,t,s,u,e[f+15],10,-30611744),u=i(u,c,t,s,e[f+6],15,-1560198380),s=i(s,u,c,t,e[f+13],21,1309151649),t=i(t,s,u,c,e[f+4],6,-145523070),c=i(c,t,s,u,e[f+11],10,-1120210379),u=i(u,c,t,s,e[f+2],15,718787259),s=i(s,u,c,t,e[f+9],21,-343485551),t=n(t,p),s=n(s,l),u=n(u,h),c=n(c,d)}return[t,s,u,c]}function u(n){for(var e="0123456789abcdef",t="",r=0;r<4*n.length;r++)t+=e.charAt(15&n[r>>2]>>r%4*8+4)+e.charAt(15&n[r>>2]>>r%4*8);return t}function c(n){for(var e=1+(n.length+8>>6),t=Array(16*e),r=0;r<16*e;r++)t[r]=0;for(var r=0;r<n.length;r++)t[r>>2]|=(255&n.charCodeAt(r))<<r%4*8;return t[r>>2]|=128<<r%4*8,t[16*e-2]=8*n.length,t}function f(n){return u(s(c(n)))}function p(){return""+Date.now()+Math.floor(1e7*Math.random())}function l(n){en=!0;var e=g(n.path),t={};for(var r in F.query)"ald_share_src"===r&&(t[r]=F.query[r]);var o="";if(o=n.path.indexOf("?")==-1?n.path+"?":n.path.substr(0,n.path.indexOf("?"))+"?",""!==e)for(var r in e)t[r]=e[r];t.ald_share_src?t.ald_share_src.indexOf(Z)==-1&&t.ald_share_src.length<200&&(t.ald_share_src=t.ald_share_src+","+Z):t.ald_share_src=Z;for(var a in t)a.indexOf("ald")==-1&&(o+=a+"="+t[a]+"&");return n.path=o+"ald_share_src="+t.ald_share_src,n}
  function h(n){
    console.log('[dsp fn h]')
    an++,n.at=W,n.et=Date.now(),n.uu=q(),n.v=$,n.ak=j.app_key.replace(/(^\s*)|(\s*$)/g,""),n.wsr=F,n.ifo=nn,n.rq_c=an,n.ls=V;let e=Date.now()+n.ak+n.uu;n.reqid=f(e),n.op=z,n.user_info=n.user_info?n.user_info:cn?cn.userInfo:"",
    wx.request({
      url:G+"/api/v3/app",
      data:n,
      header:{AldStat:"xmad",se:B||"",op:z||"",img:on},
      method:"POST",
      success:function(n){n.statusCode},
      fail:function(){}
    })
  }
  function d(n){
    console.log('[dsp fn d]')
    z?(h(n),k()):setTimeout(function(){z&&(h(n),k())},300)
  }
  function w(){var n={};for(var e in un)n[e]=un[e];return n}
  function v(n){var e={};for(var t in n)"rawData"!=t&&"errMsg"!=t&&(e[t]=n[t]);return e}
  function g(n){if(n.indexOf("?")==-1)return"";var e={};return n.split("?")[1].split("&").forEach(function(n){var t=n.split("=")[1];e[n.split("=")[0]]=t}),e}
  function _(n){for(var e="",t=0;t<n.length;t++)n[t].length>e.length&&(e=n[t]);return e}
  function y(n,e,t){
    console.log('[dsp fn y]')
    t.ev=n,t.life=e,t.ec=fn,t.st=Date.now(),t.dr=Date.now()-N,X&&(t.qr=X,t.sr=X),Q&&(t.usr=Q),d(t)
  }
  function S(n){fn++}function x(){function n(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return n()+n()+n()+n()+n()+n()+n()+n()}
  function q(){var n="";try{n=wx.getStorageSync("ald_dsp_uuid")}catch(e){n="uuid_getstoragesync_error"}if(n)nn=!1;else{n=x();try{wx.setStorageSync("ald_dsp_uuid",n),nn=!0}catch(n){wx.setStorageSync("ald_dsp_uuid","uuid_getstoragesync_error")}}return n}
  function k(){
    console.warn("heartbeat",z),pn=""==z?"0":"1",
    wx.request({
      url:`${G}/api/v3/health?appkey=${j.app_key}&op=${pn}`,
      method:"GET",
      success:function(){}
    })
  }
  function m(n){
    console.log('[dsp fn m]')
    un.pk=n.query.pakey?n.query.pakey:n.query.scene,un.sa=n.referrerInfo?n.referrerInfo.appId:n.query.appid?n.query.appid:"",K="pa"===n.query.bside;var e,t=w();e=n.scene!=J,J=n.scene,an=0,F=n,Q=n.query.ald_share_src,X=n.query.aldsrc||"",Y=n.query.ald_share_src,N=Date.now(),sn||(nn=!1),sn=!1,en||(0!==R&&Date.now()-R>3e4?W=p():e&&(W=p())),0!==R&&Date.now()-R<3e4&&(tn=!0),n.query.ald_share_src&&"1044"==n.scene&&n.shareTicket?wx.getShareInfo({shareTicket:n.shareTicket,success:function(n){rn=n}}):n.query.ald_share_src,""===cn?wx.getSetting({withCredentials:!0,success:function(n){n.authSetting["scope.userInfo"]?
    wx.getUserInfo({
      withCredentials:!0,
      success:function(n){
        cn=n,t.user_info=v(n).userInfo,on=_(n.userInfo.avatarUrl.split("/")),y("app","show",t)
      },
      fail: function(){
        console.log('[dsp] getUserInfo1 fail')
      }
    }):y("app","show",t)}
    }):(t.user_info=v(cn).userInfo,on=_(cn.userInfo.avatarUrl.split("/")),y("app","show",t))}function A(n){K="pa"===n.query.bside,V=p(),F=n}function I(){k();var n=w();R=Date.now(),""===cn?wx.getSetting({success:function(e){e.authSetting["scope.userInfo"]?
    wx.getUserInfo({
      withCredentials:!0,
      success:function(e){
        cn=e,on=_(e.userInfo.avatarUrl.split("/")),n.user_info=v(e).userInfo,y("app","hide",n)
      },
      fail: function(){
        console.log('[dsp] getUserInfo2 fail')
      }}):y("app","hide",n)}}):(on=_(cn.userInfo.avatarUrl.split("/")),n.user_info=v(cn).userInfo,y("app","hide",n))}
    function M(n){dn=n}
    function D(){ln=C?this.$mp.page.route:this.route,tn=!1}
    function b(){hn=ln}function H(){hn=ln}
    function U(n){
      console.log('[dsp fn U]')
      var e={};for(var t in n)"onLaunch"!==t&&"onShow"!==t&&"onHide"!==t&&"onError"!==t&&(e[t]=n[t]);
      return e.onLaunch=function(e){A.call(this,e),"function"==typeof n.onLaunch&&n.onLaunch.call(this,e)},e.onShow=function(e){
        m.call(this,e),n.onShow&&"function"==typeof n.onShow&&n.onShow.call(this,e)},e.onHide=function(){I.call(this),n.onHide&&"function"==typeof n.onHide&&n.onHide.call(this)},e.onError=function(e){S.call(this,e),n.onError&&"function"==typeof n.onError&&n.onError.call(this,e)},e}function L(n){var e={};for(var t in n)"onLoad"!==t&&"onShow"!==t&&"onHide"!==t&&"onUnload"!==t&&"onShareAppMessage"!==t&&(e[t]=n[t]);return e.onLoad=function(e){M.call(this,e),"function"==typeof n.onLoad&&n.onLoad.call(this,e)},e.onShow=function(e){D.call(this),"function"==typeof n.onShow&&n.onShow.call(this,e)},e.onHide=function(e){b.call(this),"function"==typeof n.onHide&&n.onHide.call(this,e)},e.onUnload=function(e){H.call(this),"function"==typeof n.onUnload&&n.onUnload.call(this,e)},n.onShareAppMessage&&"function"==typeof n.onShareAppMessage&&(e.onShareAppMessage=function(e){var t=n.onShareAppMessage.call(this,e);return void 0===t?(t={},t.path=this.route):void 0===t.path&&(t.path=this.route),l.call(this,t)}),e}function O(n){return App(U(n))}function E(n){return Page(L(n))}function T(n){return C=!0,U(n)}
    function P(n){return L(n)}
    const j=require("./dsp_sdk_config");
    var C=!1,$="1.0.1";const G="https://log.xmadx.net";
    j.app_key&&32===j.app_key.length||console.warn("小盟提示：配置错误，请在dsp_sdk.js中正确配置您的app_key。");
    var K=!1,N=0,R=0,V="",W="",z=(Date.now(),""),B="",F="",J="",Q="",X="",Y="",Z=q(),nn="",en=!1,tn=!1,rn="",on="",an=0,sn=!0,un={},cn="",fn=0,pn="",ln="",hn="",dn="";
    console.log("[dsp z 1]", z);
    try{
      var wn=wx.getSystemInfoSync();
      un.br=wn.brand,un.pm=wn.model,un.pr=wn.pixelRatio,un.ww=wn.windowWidth,un.wh=wn.windowHeight,un.lang=wn.language,un.wv=wn.version,un.wvv=wn.platform,un.wsdk=wn.SDKVersion,un.sv=wn.system
    } catch(n){}
    wx.getNetworkType({
      success(n){
        un.nt=n.networkType
      }
    }),
    wx.dsp
      ? "Object"===Object.prototype.toString.call(wx.dsp).slice(8,-1)&&0===Object.keys(wx.dsp).length&&"ald_dsp"===wx.dsp.name||console.error("wx.dsp已被占用，请联系小盟广告技术人员")
      : (
        wx.dsp={},wx.dsp.name="ald_dsp"),
        wx.dsp.setOpenid=function(n){
          if("string"!=typeof n)return void console.error("openid格式错误");
          if(28!==n.length)return void console.error("openid位数错误");
          z=n;
          var e=w();e.st=Date.now(),e.tp="openid",e.ev="event",e.ct="openid"
        },
        k();
        var vn=function(n,e,t){var r=n[e];n[e]=function(n){r&&r.call(this,n),t.call(this,n)}};return j.plugin?{App:O,Page:E,MpvueApp:T,MpvuePage:P}:function(){!function(){var n=App,e=Page;App=function(e){vn(e,"onLaunch",A),vn(e,"onShow",m),vn(e,"onHide",I),vn(e,"onError",S),n(e)},Page=function(n){var t=n.onShareAppMessage;vn(n,"onLoad",M),vn(n,"onUnload",H),vn(n,"onShow",D),vn(n,"onHide",b),void 0!==t&&null!==t&&(n.onShareAppMessage=function(n){if(void 0!==t){var e=t.call(this,n);return void 0===e?(e={},e.path=this.route):void 0===e.path&&(e.path=this.route),l(e)}}),e(n)}}()}()});