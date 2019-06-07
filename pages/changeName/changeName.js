// pages/changeName/changeName.js
const app=getApp()
Page({
    data: {
        deviceNum: -1,
        name: ''
    },
    
    onLoad: function (options) {
        this.setData({ 
            deviceNum: app.globalData.deviceNum,
            name: ''//原来的名字
        })
    },

    editName: function(e) {
        this.setData({ name: e.detail.value })
    },

    ensure: function() {
        //修改设备名字
        wx.navigateBack()
    }
})