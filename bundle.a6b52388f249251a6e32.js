/*! v1.0 Wed Jun 01 2016 09:55:53 GMT+0800 (CST) auth by tommyshao */
webpackJsonp([0],{0:function(n,o,e){e(2),e(3);e(4)(function(){avalon.define({$id:"App",ver:"1.0"}),e(5),avalon.scan()})},3:function(n,o,e){var t=e(2),a={login:"http://rap.taobao.org/mockjs/4074/get/data.json?action=login"},i=function(n){var o=t.Deferred();return a[n]?t.getJSON(a[n]):o.reject("can't find the router:"+n)};n.exports=i},4:function(n,o,e){var t;t=function(){"use strict";function n(n){var o;for(o=0;o<n.length;o+=1)n[o](c)}function o(){var o=u;l&&o.length&&(u=[],n(o))}function e(){l||(l=!0,r&&clearInterval(r),o())}function t(n){return l?n(c):u.push(n),t}var a,i,r,d="undefined"!=typeof window&&window.document,l=!d,c=d?document:null,u=[];if(d){if(document.addEventListener)document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1);else if(window.attachEvent){window.attachEvent("onload",e),i=document.createElement("div");try{a=null===window.frameElement}catch(v){}i.doScroll&&a&&window.external&&(r=setInterval(function(){try{i.doScroll(),e()}catch(n){}},30))}"complete"===document.readyState&&e()}return t.version="2.0.1",t.load=function(n,o,e,a){a.isBuild?e(null):t(e)},t}.call(o,e,o,n),!(void 0!==t&&(n.exports=t))},5:function(n,o,e){e(6),e(12),e(37),avalon.history.start(),avalon.router.when(["/"],"login"),avalon.router.getLastPath()&&"index.html"!=avalon.router.getLastPath()||avalon.router.go("login")},12:function(n,o,e){avalon.state("login",{url:"/login",views:{"":avalon.demandLoad(function(n){e.e(1,function(){n.resolve(e(13))})}),"footer@":avalon.demandLoad(function(n){e.e(2,function(){n.resolve(e(33))})})}})},37:function(n,o,e){avalon.state("index",{"abstract":!0,url:"/index",views:{AppView:avalon.demandLoad(function(n){e.e(3,function(){n.resolve(e(38))})})},"footer@":avalon.demandLoad(function(n){e.e(2,function(){n.resolve(e(33))})})}),avalon.state("index.home",{url:"/home",views:{home:avalon.demandLoad(function(n){e.e(4,function(){n.resolve(e(44))})})}})}});