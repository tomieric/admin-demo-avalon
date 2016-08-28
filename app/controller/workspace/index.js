var vm = avalon.define({
  $id: 'workspace',
  channel: '我的工作台'
})
module.exports = {
  template: require('./index.html'),
  controller: avalon.controller('index', function($ctrl) {

  })
}
