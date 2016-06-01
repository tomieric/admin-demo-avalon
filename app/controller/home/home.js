/**
 * 首页
 */

// Cookie
var Cookie = require('cookie_js')

module.exports = {
  template: require('./home.html'),
  controller: avalon.controller('home', function($ctrl) {
    require('./home.less')

    $ctrl.$onEnter = function() {
      if(!Cookie.get('login')) {
        avalon.router.go('login')
      }
    }
  })
}
