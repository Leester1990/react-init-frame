(function(window, factory) {
  window.util = factory(window, {}, window.$); // 直接引入的话就设为全局变量
})(window, function(global, util, $) {
  /*接口参数配置*/
  util.config = function() {
    const config = {
      apiHost: "http://127.0.0.1:8088/api/",
      imgHost: "http://127.0.0.1:8088/api/"
    }
    return config; //生产环境配置接口
  };
  /*-----end------*/
  return util;
});
