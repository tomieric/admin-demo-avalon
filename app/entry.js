
var $ = require('jquery');
var Api = require('api')
//require("mmStateDemand");
// domReady 执行 avalon 初始化
require('domReady')(function() {
  // 全局配置参数
  avalon.define({
    $id: 'App',
    ver: '1.0'
  });
  // 配置路由控制
  require('./route.js')
  // 初始化 avalon 应用
  avalon.scan()
})
