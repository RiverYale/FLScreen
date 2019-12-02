// pages/edid/edit.js
const app = getApp();
const dataBase = require("../../dataBase/dataBase.js");
const commend = require("../../dataBase/commend.js");
Page({
    data: {
        deviceNum: -1,
        modelNum: 0, //模板编号
        modelName: [],
        modelInfo: []
    },

    onShow: function (options) {
        this.setData({ 
            deviceNum: app.globalData.deviceNum,
            modelName: app.globalData.modelName,
            modelInfo: app.globalData.modelInfo,
            modelNum: app.globalData.modelNum,
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
      var devices = dataBase.getDeviceList();
     
      var instructions = new Array();
      instructions.push(commend.c_draw_picture(app.globalData.modelRealName[this.data.modelNum]));
      var info = app.globalData.modelInfo[this.data.modelNum];
      for (let i = 0; i < info.length; i++) {
        if (info[i].content == '') continue;
        instructions.push(commend.c_draw_font(info[i].position.x, info[i].position.y, info[i].size, info[i].content));
      }
      var order={
        instructions:Array,
      };
      order.instructions = instructions;
      //console.log(JSON.stringify(order));
      
      wx.showToast({
        title: '发送中',
        icon: "loading",
      })
      dataBase.assignOrder(devices[this.data.deviceNum], JSON.stringify(order)).then(function(res){
        console.log(res);
        if(res.data.errno==10){
          wx.hideToast();
          wx.showToast({
            title: '设备不在线，发送失败',
            icon: "none",
            duration: 1500,
          });
          return;
        }
        wx.navigateBack();
      }).catch(function(e){
        console.log(e);
      })
    },

    editInfo: function(e) {
        let modelNum = this.data.modelNum
        let index = e.currentTarget.dataset.index
        this.data.modelInfo[modelNum][index].content = e.detail.value
        console.log(this.data.modelInfo[modelNum])
    }
})