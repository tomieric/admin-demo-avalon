module.exports = {
  template: require('./footer.html'),
  controller: avalon.controller('footer', function($ctrl) {
    require('./footer.less')
  })
}
