// pages/model/model.js
const app = getApp()
Page({
    data: {
        index: -1,
        modelNum: 0,
        maxModelNum: 0,
        modelName: []
    },

    onLoad: function (options) {
        this.setData({ 
            index: options.index,
            modelNum: 0,//应该为原本选择的模板编号
            maxModelNum: app.globalData.maxModelNum,
            modelName: app.globalData.modelName
        })
    },

    last: function () {
        this.data.modelNum += this.data.maxModelNum - 1
            ;
        this.setData({ modelNum: this.data.modelNum %= this.data.maxModelNum })
    },

    next: function () {
        this.data.modelNum++
        this.setData({ modelNum: this.data.modelNum %= this.data.maxModelNum })
    },

    ensure: function () {
        //确认选择模板，index为编辑的设备编号
        wx.navigateBack();
    }
})