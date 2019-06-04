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
