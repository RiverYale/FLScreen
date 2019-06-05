// pages/add/add.js
const dataBase = require("../../dataBase/dataBase.js");
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
        wx.showToast({
          title: '正在验证key',
          icon:"loading",
        })
        var device = {
          id:this.data.id,
          APIKey:this.data.key,
          name:this.data.name,
        }
        if(dataBase.alreadyExist(device)){
          wx.showToast({
            title: '该设备已经存在',
            icon: "none",
            duration: 1000,
          })
          return;
        }
        dataBase.queryState(device).then(function (res) {
          console.log(res);
          wx.hideToast();
          if (res.data.errno == 3) {
            wx.showToast({
              title: '失败，key错误',
              icon: "none",
              duration: 1000,
            })
          } else if(res.statusCode==404){
            wx.showToast({
              title: '失败，id不存在',
              icon: "none",
              duration: 1000,
            })
            }else{
            
            wx.showToast({
              title: '验证成功',
              icon: "success",
              duration: 1000,
            });
            dataBase.addNewDevice(device);
            wx.navigateBack();
          }
        })
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