// pages/edid/edit.js
const app = getApp()
Page({
    data: {
        deviceNum: -1,
        modelNum: 0, //模板编号
        modelName: [],
        modelInfo: []
    },

    onLoad: function (options) {
        this.setData({ 
            deviceNum: app.globalData.deviceNum,
            modelName: app.globalData.modelName,
            modelInfo: app.globalData.modelInfo
        })
    },

    changeModel: function(){
        wx.navigateTo({ url: '/pages/model/model' })
    },

    remove: function() {
        wx.showModal({
            title: '提示',
            content: '确定删除？',
            success(res) {
                if (res.confirm) {
                    //删除
                    wx.navigateBack()
                }
            }
        })
    },
    
    ensure: function() {
        wx.navigateBack()
    },

    editInfo: function(e) {
        let modelNum = this.data.modelNum
        let index = e.currentTarget.dataset.index
        this.data.modelInfo[modelNum][index].content = e.detail.value
        console.log(this.data.modelInfo[modelNum])
    }
})