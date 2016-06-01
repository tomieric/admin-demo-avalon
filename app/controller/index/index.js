module.exports = {
  template: require('./index.html'),
  controller: avalon.controller('index', function($ctrl) {
    require('less/common.less')
    require('./index.less')
  })
}
