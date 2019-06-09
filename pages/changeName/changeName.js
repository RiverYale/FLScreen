// pages/changeName/changeName.js
const app=getApp();
const dataBase = require("../../dataBase/dataBase.js");
Page({
    data: {
        deviceNum: -1,
        name: ''
    },
    
    onLoad: function (options) {
      //console.log(options);
      this.setData({ 
          deviceNum: options.deviceNum,
          name: ''//原来的名字
      })
    },

    editName: function(e) {
        this.setData({ name: e.detail.value })
    },

    ensure: function() {
        //修改设备名字
        dataBase.changeName(this.data.deviceNum,this.data.name);
        wx.navigateBack();
    }
})