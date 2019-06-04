//index.js
//获取应用实例
const app = getApp()
const dataBase = require("../../dataBase/dataBase.js");
Page({
    data: {
        dataArray: [
            {
                name: "样例1",
                id: "123",
                online: false
            },
        ]
    },

    onLoad: function () {
        var devices = dataBase.getDeviceList();
        var that = this;
        devices.forEach(function (item, index) {//这时候应该更新一下看设备在不在线
            dataBase.queryState(item).then(function (res) {//里面包了一个promise
                console.log(res);
                devices[index].online = res.data.online;//更新一下在线情况
                that.setData({
                    dataArray: devices
                })
            })
        })
        this.setData({
            dataArray: devices,
        })
    },

    onPullDownRefresh: function () {
        var devices = dataBase.getDeviceList();
        var that = this;
        devices.forEach(function (item, index) {//这时候应该更新一下看设备在不在线
            dataBase.queryState(item).then(function (res) {//里面包了一个promise
                console.log(res);
                devices[index].online = res.data.online;//更新一下在线情况
                that.setData({
                    dataArray: devices
                })
            })
        })
        this.setData({
            dataArray: devices,
        })
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
