// 首页框架
avalon.state('index', {
  abstract: true,
  url: '/index',
  views: {
    'AppView': avalon.demandLoad(function (deferred) {
      require.ensure([], function() {
        deferred.resolve(require('index/index.js'))
      })
    })
  },
    'footer@': avalon.demandLoad(function(deferred) {
      require.ensure([], function() {
        deferred.resolve(require('public/footer.js'))
      })
    })
})

avalon.state('index.home', {
  url: '/home',
  views: {
    'home': avalon.demandLoad(function (deferred) {
      require.ensure([], function() {
        deferred.resolve(require('home/home.js'))
      })
    })
  }
})
