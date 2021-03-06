<div class="container" ms-controller="root">
<div class="header">
    <div class="header-wrap">
        <div class="top-sub clearfix">
            <a href="#!/logout" class="quit frdi">退出</a>
            <a href="#!/home/profile" class="setting frdi">设置</a>
            <p class="welcome frdi">欢迎您，<span class="user">admin</span></p>
        </div>
        <div class="top-nav clearfix">
            <div class="logo fldi"><img ms-attr-src="{{ imgLogo }}"></div>
            <h1 class="title fldi">E+账户管理后台</h1>
            <ul class="nav-list frdi">
                <li ms-class="cur:curNav === 1">
                    <a href="#!/home/index"  ms-click="setNav($event, 1)">首页</a>
                </li>
                <li ms-class="cur:curNav === 2">
                    <a href="#!/home/setting"   ms-click="setNav($event, 2)">系统设置</a>
                </li>
                <li ms-class="cur:curNav === 3">
                    <a href="#!/home/operation"   ms-click="setNav($event, 3)">运营管理</a>
                </li>
                <li ms-class="cur:curNav === 4">
                    <a href="#!/home/user"   ms-click="setNav($event, 4)">用户管理</a>
                </li>
                <li ms-class="cur:curNav === 5">
                    <a href="#!/home/riskControl"   ms-click="setNav($event, 5)">风控管理</a>
                </li>
                <li ms-class="cur:curNav === 6">
                    <a href="#!/home/intermodality"   ms-click="setNav($event, 6)">清结算管理</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<!-- 左侧菜单 -->
<div class="side-nav">
    <div class="side-wrap" id="j-sidebar">
        <ul class="side-list">
            <li ms-class="cur:subNav === 1" ms-click="setSubNav($event, 1)">
                <a href="#!/home/index">
                  <div class="icon1 icon-bg"></div>
                  <div class="title">数据概览</div>
                </a>
            </li>
            <li ms-class="cur:subNav === 2" ms-click="setSubNav($event, 2)">
                <a href="#!/home/workspace">
                  <div class="icon2 icon-bg"></div>
                  <div class="title">我的工作台</div>
                </a>
            </li>
            <li ms-class="cur:subNav === 3" ms-click="setSubNav($event, 3)">
                <a href="#!/home/msgbox">
                  <div class="icon3 icon-bg"></div>
                  <div class="title">预警消息</div>
                </a>
            </li>
        </ul>
    </div>
</div>


 <!-- 三级菜单 -->
<div class="item-tab">
    <ul class="item-list clearfix" id="funmenu_0">
        <li data-text="StatisticalReport/Index" class="cur">
          <a href="#!/home/index">
            <i class="icon-bg #"></i>
            <div class="text">概述</div>
          </a>
        </li>
    </ul>
</div>

<!-- 内容 -->
<div class="content" ms-view="content">
</div>
</div>
