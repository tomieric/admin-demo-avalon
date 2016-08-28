var $ = require('jquery')

var mocks = {
  'login': 'http://rap.taobao.org/mockjs/4074/api/login'
};

var Api = function(action) {
  var dtd = $.Deferred();
  if(!mocks[action]) return dtd.reject('can\'t find the router:'+ action);
  return $.getJSON(mocks[action]);
}


module.exports = Api
