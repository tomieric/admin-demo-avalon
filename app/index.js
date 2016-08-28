// 首页框架
avalon.state('home', {
  abstract: true,
  url: '/home',
  views: {
    '': avalon.demandLoad(function (deferred) {
      console.log('xxxxx')
      require.ensure([], function() {
        deferred.resolve(require('home/index.js'))
      })
    }),
    'footer@': avalon.demandLoad(function(deferred) {
      require.ensure([], function() {
        deferred.resolve(require('public/footer.js'))
      })
    })
  }
})

avalon.state('home.index', {
  url: '/index',
  views: {
    'content': avalon.demandLoad(function (deferred) {
      require.ensure([], function() {
        deferred.resolve(require('index/index.js'))
      })
    })
  }
})

avalon.state('home.workspace', {
  url: '/workspace',
  views: {
    'content': avalon.demandLoad(function (deferred) {
      require.ensure([], function() {
        deferred.resolve(require('workspace/index.js'))
      })
    })
  }
})

avalon.state('home.common', {
  url: '/{path}',
  onEnter: function(path) {
      var vm = avalon.define({
          $id: 'channel',
          channel: ''
        });
      vm.channel = path;
  },
  views: {
    'content': {
      template: '<div class="layer" ms-controller="channel">{{ channel }}</div>'
    }
  }
});
