// pages/edid/edit.js
const app = getApp()
Page({
    data: {
        deviceNum: -1,
        name: '',
        position: '',
        modelNum: 1, //模板编号
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

    },
    
    ensure: function() {
        wx.navigateBack()
    },



    editName: function (e) {
        let modelNum = this.data.modelNum
        this.data.modelInfo[modelNum].content = e.detail.value
        console.log(this.data.modelInfo[modelNum])
    },

    editPosition: function (e) {
        let modelNum = this.data.modelNum
        this.data.modelInfo[modelNum].content = e.detail.value
    },

    editDepartment: function (e) {
        let modelNum = this.data.modelNum
        this.data.modelInfo[modelNum].content = e.detail.value
    },

    editConference: function (e) {
        let modelNum = this.data.modelNum
        this.data.modelInfo[modelNum].content = e.detail.value
    }
})