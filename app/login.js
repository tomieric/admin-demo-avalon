// 登录
avalon.state('login', {
  url: '/login',
  views: {
    '': avalon.demandLoad(function(deferred) {
      require.ensure([], function() {
        deferred.resolve(require('login/login.js'))
      })
    }),
    'footer@': avalon.demandLoad(function(deferred) {
      require.ensure([], function() {
        deferred.resolve(require('public/footer.js'))
      })
    })
  }
})

// 退出
avalon.state('logout', {
  url: '/logout',
  views: {
    '': avalon.demandLoad(function(deferred) {
      require.ensure([], function() {
        deferred.resolve(require('login/logout.js'))
      })
    })
  }
})
