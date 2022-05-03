const request = require('./../../models/request.js')
const User = require('./../../models/user.js')


Page({
  data: {

  },
  onLoad:function(options){
    let token = wx.getStorageSync('token');
    console.log(token,'ooop');
    if(token){
      wx.switchTab({
        url: '/pages/todo/todo'
      })
    }
  },
  startLogin:function(){
    wx.login({
      success(res) {
        if(!res.code) {
          console.log('登录失败！'+ res.errMsg)
          return;
        }
        console.info("res:", res)
        User.login(res.code).then(res => {
            // console.log(res.data);
            let token = res.data.token;
            wx.setStorageSync('token',token)
            wx.switchTab({
              url: '/pages/index'
            })
          })
      }
    })
  }
})