
var API = require('api')
var date = new Date();
date = avalon.filters.date(date, 'yyyy-MM-dd');

// 完全搞不懂1.4之前的写法
//var uiDataPlane = require('dataPanel/dataPanel');

var indexCtrl = avalon.define({
  $id: 'indexCtrl',
  isExpandFilter: false,
  expandText: '收起',
  date: date,
  channels: [],
  channelList: [],
  totals: [],
  reFetch: false,
  panels: [
    {
      title: '当前资产本金',
      theme: 3,
      currency: 3678003.89,
      rate: -15.23
    },
    {
      title: '当前资产本金',
      theme: 3,
      currency: 3678003.89,
      rate: -15.23
    }
  ],
  expandFilter: function(e) {
    e.preventDefault();
    var originalText = e.target.innerHTML;
    indexCtrl.isExpandFilter = !indexCtrl.isExpandFilter;
    e.target.innerHTML = indexCtrl.expandText;
    indexCtrl.expandText = originalText;
  },
  filterData: function($event) {
    $event.preventDefault();
    //indexCtrl.reFetch = true;
    indexCtrl.initPage();
  },
  initPage: function() {
    var chanels = indexCtrl.channels.$model;
    var query = {date: date, channels: chanels};

    // 获取数据概要
    API('homeTotal', query).then(function(data) {
      indexCtrl.totals = data.data;
    })
  }
});

module.exports = {
  template: require('./index.html'),
  controller: avalon.controller('index', function($ctrl) {
    require('./index.less')

    // 获取渠道列表
    API('channelList').then(function(data) {
      indexCtrl.channelList = data.data;
    });

    indexCtrl.initPage();
  })
}
