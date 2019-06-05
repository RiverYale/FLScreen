// pages/add/add.js
Page({
    data: {
        name: '',
        id: '',
        key: '',
        disabled: true
    },
    
    onLoad: function (options) {
        
    },

    add: function () {
        //传递信息，添加设备
        wx.navigateBack()
    },

    editName: function (e) {
        this.data.name = e.detail.value
        this.setData({ disabled: this.isFinish() })
    },

    editID: function (e) {
        this.data.id = e.detail.value
        this.setData({ disabled: this.isFinish() })
    },

    editKey: function (e) {
        this.data.key = e.detail.value
        this.setData({ disabled: this.isFinish() })
    },

    isFinish: function () {
        return !(this.data.name.length > 0 && this.data.id.length > 0 && this.data.key.length > 0)
    }
})