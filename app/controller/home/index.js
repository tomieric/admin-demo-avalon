/**
 * 首页
 */

// Cookie
var Cookie = require('cookie_js')

var imgLogo = require('images/logo.png');
var imgLoading = require('images/loading.gif');

var rootApp = avalon.define({
  $id: 'root',
  channel: '',
  imgLogo: imgLogo,
  imgLoading: imgLoading,
  // 当前一级导航高亮
  curNav: 1,
  // 当前子导航高亮
  subNav: 1,
  // 设置子导航高亮
  setSubNav: function(e, i) {
    rootApp.subNav = i;
    rootApp.curNav = 1;
    e.stopPropagation();
  },
  // 设置导航高亮
  setNav: function(e, i) {
    e.stopPropagation();

    rootApp.curNav = i;
    rootApp.subNav = 1;
  }
});


module.exports = {
  template: require('./index.html'),
  controller: avalon.controller('root', function($ctrl) {
    require('less/public.less')
    require('./home.less')

    $ctrl.$onEnter = function(route) {
      if(!Cookie.get('login')) {
        avalon.router.go('login', mmState.currentState.params)
      }
    }
  })
}
