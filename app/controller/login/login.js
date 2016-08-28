// 表单验证
var mmValidation  = require('mmValidation')
var validationVM;
// API
var API = require('api')

// cookie
var Cookie = require('cookie_js')

// 页面图片
var imgLogo = require('images/login-logo.png')
var imgBg = require('images/login-bg.jpg')
var imgCode = require('images/yzm.jpg')

// * --------
// * 控制台输出登录用户名和密码
console.group('Login:')
console.log('%cUser:%s', 'color:red;font-size:30px', 'frontui')
console.log('%cPassWord:%s', 'color:red;font-size:30px', 'www.frontpay.cn')
console.groupEnd('login:')
// -------- *//

// 显示错误
function showError(invalid, reason) {
  vmLogin.invalid = invalid;
  if(!reason) {
    vmLogin.invalidMsg = '';
  } else if(typeof reason === 'string'){
    vmLogin.invalidMsg = reason;
  } else {
    reason.element.focus();
    vmLogin.invalidMsg = reason.message;
  }
}

// avalon 视图控制器
var vmLogin = avalon.define({
  $id: "login",
  username: "",
  password: "",
  vcode: "",
  invalid: false,
  invalidMsg: '',
  submiting: false,
  imgs : {
    logo: imgLogo,
    bgImg: imgBg,
    code: imgCode
  },
  // 切换验证码
  change: function($event, url) {
    vmLogin.imgs.code = url.split('?')[0]+ '?' + (new Date().getTime())
  },
  validation: {
    validateInBlur: false,
    onInit: function(v) {
      validationVM = v;
    },
    onError: function(reasons) {
      for(var i = 0; i < 1; i++) {
        showError(!0, reasons[i])
      }
    },
    onSuccess: function() {
      showError(!1, '');
    },
    onValidateAll: function(reasons) {
      for(var i = 0; i < 1; i++) {
        showError(!0, reasons[i])
      }

      if(reasons.length === 0) {
        // 异步验证
        vmLogin.submiting = !0;
        API('login').then(function(res) {
          // 验证码不匹配
          if(vmLogin.vcode !== res.vcode) {
            showError(!0, '验证码错误')
          }
          // @todo: 暂时用明文匹配
          else if(vmLogin.username.trim() === res.username && vmLogin.password.trim() === res.password) {
            showError(!1, '')
            // cookie
            Cookie.set('login', 1, { expires: 0.2});
            avalon.router.navigate('home/index', { replace: true })

          } else {
            showError(!0, '账户名或密码错误')
          }

          vmLogin.submiting = !1;
        }, function(msg) {
            // mock地址错误
            showError(!0, '系统发生内部错误')
            console.warn(msg);
        });
      }
    }
  }
})

/**
 * 登录路由
 * @type {Object}
 */
module.exports = {
  // 视图模板
  template: require('./login.html'),
  // 控制器
  controller: avalon.controller('login', function($ctrl) {
    require('less/public.less')
    // 附加样式
    require('./login.less')

    // 路由事件配置
    $ctrl.$onEnter = function(param, rs) {
      // cookie 已经登录
      if(Cookie.get('login')) {
        avalon.router.navigate('home/index', { replace: true })
        return;
      }
      rs()
    }
  })
}
