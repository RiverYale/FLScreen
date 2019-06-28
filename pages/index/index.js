// pages/index/index.js
//获取应用实例
const app = getApp()
const dataBase = require("../../dataBase/dataBase.js");
const url = require("../../utils/gbk.js");
Page({
    data: {
        dataArray: [
            {
                name: "样例1",
                id: "123",
                online: false,
                others:{},
            },
        ]
    },

    onLoad: function () {
        
    },

    onShow: function(){
      this.refreshData();
    },

    onPullDownRefresh: function () {
        this.refreshData();
    },

    refreshData: function() {
        var devices = dataBase.getDeviceList();
        var num = 0;
        var that = this;
        wx.showToast({
          title: '刷新中',
          icon: "loading",
        })
        devices.forEach(function (item, index) {//这时候应该更新一下看设备在不在线
            dataBase.queryState(item).then(function (res) {//里面包了一个promise
                //console.log(res);
                devices[index].online = res.data.data.online;//更新一下在线情况
                that.setData({
                    dataArray: devices
                })
                num++;
                if(num==devices.length){
                  wx.hideToast();
                  wx.showToast({
                    title: '刷新成功',
                    duration:600,
                  })
                }
            })
        })
        this.setData({
            dataArray: devices
        })
        wx.stopPullDownRefresh()
    },

    showInfo: function (e) {
          wx.navigateTo({ url: '/pages/info/info?deviceNum=' + e.currentTarget.dataset.index })
    },

    edit: function (e) {
        
        app.globalData.deviceNum = e.currentTarget.dataset.index
        wx.navigateTo({ url: '/pages/edit/edit' })
    },

    addDevice: function () {
        wx.navigateTo({ url: '/pages/add/add' })
    }
})
