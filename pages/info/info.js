// pages/info/info.js
const app = getApp();
const dataBase = require("../../dataBase/dataBase.js");
Page({
    data: {
        deviceNum: -1,
        dataArray: [
            {
                title: '设备名称',      //第一组是名称，方便显示
                content: '名称'
            },
            {
                title: '在线状态',
                content: "",
            },  
            {
                title: '设备id',
                content: ''
            },
            {
                title: '协议',
                content: ''
            }
        ],
        datapoints:[],
    },

    onLoad: function (options) {
        wx.showToast({
          title: '刷新中',
          icon: "loading",
        })
        this.setData({ deviceNum: options.deviceNum });
        var devices = dataBase.getDeviceList();
        var that = this;
        dataBase.queryState(devices[this.data.deviceNum]).then(function (res) {//里面包了一个promise
          res = res.data.data;
          console.log(res);
          var data = that.data.dataArray;
          data[0].content = devices[that.data.deviceNum].name;
          data[1].content = res.online?"在线":"离线";
          data[2].content = res.id;
          data[3].content = res.protocol;
          that.setData({
            dataArray:data,
          })
          wx.hideToast();
          //在线状态
          //上次连接时间  这个时间出现问题了所以改成id算了
          //协议
        })

        dataBase.queryDataStream(devices[this.data.deviceNum]).then(function (res) {//里面包了一个promise
          //console.log(res.data.data.datastreams[0].datapoints);
          var data = res.data.data.datastreams[0].datapoints;
          for(let i = 0;i<data.length;i++)
          {
            data[i].at = data[i].at.substr(0, data[i].at.indexOf('.'));
          }
          that.setData({
            datapoints:data,
          });
        })
    },
    onShow:function(){
      var devices = dataBase.getDeviceList();
      var data = this.data.dataArray;
      data[0].content = devices[this.data.deviceNum].name;
      this.setData({
        dataArray: data,
      })
    },
    upper: function(e) {
      //console.log(e)
    }, 
    lower: function(e) {
      // console.log(e)
    },
    scroll: function(e) {
      // console.log(e)
    },
    changeModel: function() {
      wx.navigateTo({ url: '/pages/changeName/changeName?deviceNum='+this.data.deviceNum })
    }
})