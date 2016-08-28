// cookie
var Cookie = require('cookie_js')
/**
 * 登录路由
 * @type {Object}
 */
module.exports = {
  // 视图模板
  template: '',
  // 控制器
  controller: avalon.controller('logout', function($ctrl) {
    // 路由事件配置
    $ctrl.$onEnter = function(param, rs) {
      var isLogin = Cookie.get('login');
      if(isLogin) {
        Cookie.set('login', 0, { expires: -1});
      }
      avalon.router.go('login', mmState.currentState.params)
      rs()
    }
  })
}
