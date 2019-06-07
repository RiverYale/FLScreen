// pages/info/info.js
const app = getApp()
Page({
    data: {
        deviceNum: -1,
        dataArray: [
            {
                title: '设备名称',      //第一组是名称，方便显示
                content: '名称'
            },
            {
                title: 'title1',
                content: 'content1'
            },
            {
                title: 'title2',
                content: 'content2'
            },
            {
                title: 'title3',
                content: 'content3'
            }
        ]
    },

    onLoad: function (options) {
        this.setData({ deviceNum: app.globalData.deviceNum })
    },

    changeModel: function() {
        wx.navigateTo({ url: '/pages/changeName/changeName' })
    }
})