// pages/model/model.js
const app = getApp()
Page({
    data: {
        deviceNum: -1,
        modelNum: 0,
        maxModelNum: 0,
        modelName: [], 
        images: [
            '/images/model0.jpg',
            '/images/model2.jpg',
            '/images/model1.jpg',
            '/images/model0.jpg',
        ]
    },

    onLoad: function (options) {
        this.setData({ 
            deviceNum: app.globalData.deviceNum,
            modelNum: 0, //对应模型编号
            maxModelNum: app.globalData.maxModelNum,
            modelName: app.globalData.modelName
        })
    },

    changeModel: function (e) {
        this.setData({ modelNum: e.detail.current })
    },

    ensure: function () {
        //确认选择模板，index为编辑的设备编号
        app.globalData.modelNum = this.data.modelNum;
        wx.navigateBack();
    }
})