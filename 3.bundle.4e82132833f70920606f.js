/*! v1.0 Sun Aug 28 2016 12:36:44 GMT+0800 (CST) auth by tommyshao */
webpackJsonp([3],{13:function(e,t,r){var n;!function(i,o){var a=function(){return a.get.apply(a,arguments)},s=a.utils={isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isPlainObject:function(e){return!!e&&"[object Object]"===Object.prototype.toString.call(e)},toArray:function(e){return Array.prototype.slice.call(e)},getKeys:Object.keys||function(e){var t=[],r="";for(r in e)e.hasOwnProperty(r)&&t.push(r);return t},encode:function(e){return String(e).replace(/[,;"\\=\s%]/g,function(e){return encodeURIComponent(e)})},decode:function(e){return decodeURIComponent(e)},retrieve:function(e,t){return null==e?t:e}};a.defaults={},a.expiresMultiplier=86400,a.set=function(e,t,r){if(s.isPlainObject(e))for(var n in e)e.hasOwnProperty(n)&&this.set(n,e[n],t);else{r=s.isPlainObject(r)?r:{expires:r};var a=r.expires!==o?r.expires:this.defaults.expires||"",u=typeof a;"string"===u&&""!==a?a=new Date(a):"number"===u&&(a=new Date(+new Date+1e3*this.expiresMultiplier*a)),""!==a&&"toGMTString"in a&&(a=";expires="+a.toGMTString());var c=r.path||this.defaults.path;c=c?";path="+c:"";var l=r.domain||this.defaults.domain;l=l?";domain="+l:"";var f=r.secure||this.defaults.secure?";secure":"";r.secure===!1&&(f=""),i.cookie=s.encode(e)+"="+s.encode(t)+a+c+l+f}return this},a.setDefault=function(e,t,r){if(s.isPlainObject(e)){for(var n in e)this.get(n)===o&&this.set(n,e[n],t);return a}if(this.get(e)===o)return this.set.apply(this,arguments)},a.remove=function(e){e=s.isArray(e)?e:s.toArray(arguments);for(var t=0,r=e.length;t<r;t++)this.set(e[t],"",-1);return this},a.removeSpecific=function(e,t){if(!t)return this.remove(e);e=s.isArray(e)?e:[e],t.expire=-1;for(var r=0,n=e.length;r<n;r++)this.set(e[r],"",t);return this},a.empty=function(){return this.remove(s.getKeys(this.all()))},a.get=function(e,t){var r=this.all();if(s.isArray(e)){for(var n={},i=0,o=e.length;i<o;i++){var a=e[i];n[a]=s.retrieve(r[a],t)}return n}return s.retrieve(r[e],t)},a.all=function(){if(""===i.cookie)return{};for(var e=i.cookie.split("; "),t={},r=0,n=e.length;r<n;r++){var o=e[r].split("="),a=s.decode(o.shift()),u=s.decode(o.join("="));t[a]=u}return t},a.enabled=function(){if(navigator.cookieEnabled)return!0;var e="_"===a.set("_","_").get("_");return a.remove("_"),e},n=function(){return a}.call(t,r,t,e),!(n!==o&&(e.exports=n))}("undefined"==typeof document?null:document)},35:function(e,t,r){var n=r(13);e.exports={template:"",controller:avalon.controller("logout",function(e){e.$onEnter=function(e,t){var r=n.get("login");r&&n.set("login",0,{expires:-1}),avalon.router.go("login",mmState.currentState.params),t()}})}}});