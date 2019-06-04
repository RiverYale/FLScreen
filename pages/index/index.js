//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        dataArray: [
            {
                name: "一号板子",
                id: "21306259",
                online: true
            },
            {
                name: "二号板子",
                id: "26316099",
                online: false
            }
        ]
    },
    
    onLoad: function () {
      /*
      wx.request({
        url: 'https://api.heclouds.com/cmds?device_id=528728887',
        data:{
          'msg':"haha2",
        },
        header: {
          //设置参数内容类型为json
          'content-type': 'application/json',
          'api-key': 'Bkh=8qotxcXKZ7=alafimSQFB2Q=',
        },
        method: 'POST',
        success: function (res) {
          console.log(res.data)
        }
      })
      /*
      wx.request({
        url: 'https://api.heclouds.com/devices/528728887',
        header: {
          //设置参数内容类型为json
          'content-type': 'application/json',
          'api-key':'Bkh=8qotxcXKZ7=alafimSQFB2Q=',
        },
        method: 'GET',
        success: function (res) {
          console.log(res.data)
        }
      })
      /*
      wx.request({
        url: 'http://api.heclouds.com/register_de?register_code=z7Azx6NZntNNao84',
        method:'POST',
        data:{
          "sn": "testuseonly2",
          "title": "test_2"
        },
        header: {
          //设置参数内容类型为json
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
        }
      })
      /*
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse){
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
      */
    },

    onPullDownRefresh: function() {
        wx.stopPullDownRefresh()
    },

    showInfo: function (e) {
        wx.navigateTo({ url: '/pages/info/info' })
    },

    edit: function (e) {
        wx.navigateTo({ url: '/pages/edit/edit' })
    },

    addDevice: function () {
        wx.navigateTo({ url: '/pages/add/add' })
    }
})
