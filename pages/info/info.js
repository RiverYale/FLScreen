// pages/info/info.js
Page({
    data: {
        index: -1
    },

    onLoad: function (options) {
        this.setData({ index: options.index })
    }
})