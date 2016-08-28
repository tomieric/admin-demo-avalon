// 依赖 mmStateDemand
require('mmStateDemand')

// 路由login 模块
require('./login')

// 路由主页 index模块
require('./index')

// 启动路由历史记录管理
avalon.history.start()

// 根目录配置为统一访问 /index/home
avalon.router.when(['/'], 'login')

// 最后一次访问为空或者直接访问应用首页
if(!avalon.router.getLastPath() || avalon.router.getLastPath() == 'index.html') {
  // 统一首次访问路径
  avalon.router.go('login')
}
