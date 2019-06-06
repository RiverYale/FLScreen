// pages/edid/edit.js
Page({
    data: {
        index: -1,
        name: '',
        position: ''
    },

    onLoad: function (options) {
        this.setData({ index: options.index })
    },

    changeModel: function(){
        wx.navigateTo({ url: '/pages/model/model?index=' + this.data.index })
    },

    editName: function(e) {
        this.data.name = e.detail.value
    },

    editPosition: function(e) {
        this.data.position = e.detail.value
    },
    
    ensure: function() {
        wx.navigateBack()
    }
})