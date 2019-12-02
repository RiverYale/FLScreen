var getNewDevice = function(id,APIKey){//获取新的设备(服务器端)
  
}
var queryAPIKey = function(id){//用id获取本地存储的APIKey

}
var addNewDevice  = function(device){//添加设备进文件保存(本地端)
  var data = wx.getStorageSync("DeviceList");
  if(data==[]) data = new Array();
  data.push(device);
  wx.setStorageSync("DeviceList", data);
}
var deleteDevice = function (id) {//删除设备(本地端)

}
var queryState = function(device){//查询某个设备状态
  //console.log(device);
  var id = device.id;
  var APIKey = device.APIKey;
  return new Promise(function(resolve,reject){
    wx.request({
      url: 'https://api.heclouds.com/devices/' + id,
      header: {
        //设置参数内容类型为json
        'content-type': 'application/json',
        'api-key': APIKey,
      },
      method: 'GET',
      success: function (res) {
        resolve(res);
      },
      fail:function(res){
        reject(res);
      }
    })
  })
}
var withZero = function(num){
  return num<10?'0'+num:num;
}
var queryDataStream = function (device) {//查询某个设备状态
  //console.log(device);
  var id = device.id;
  var APIKey = device.APIKey;
  var now = new Date();
  //https://api.heclouds.com/devices/573373405/datapoints?start=2019-12-02T00:00:00&end=2019-12-02T23:59:59&sort=DESC
  var end = now.getFullYear() + '-' + withZero(now.getMonth() + 1) + '-' + withZero(now.getDate()) + 'T' + withZero(now.getHours()) + ":" + withZero(now.getMinutes()) + ":" +withZero(now.getSeconds());
  var yes = new Date();
  yes.setTime(now.getTime() - 24 * 60 * 60 * 1000);
  var start = yes.getFullYear() + '-' + withZero(yes.getMonth() + 1) + '-' + withZero(yes.getDate()) + 'T' + withZero(yes.getHours()) + ":" + withZero(yes.getMinutes()) + ":" + withZero(yes.getSeconds());
  console.log(start);
  return new Promise(function (resolve, reject) {
    wx.request({
      url: 'https://api.heclouds.com/devices/' + id +'/datapoints?start='+start+"&end="+end+"&sort=DESC",
      header: {
        //设置参数内容类型为json
        'content-type': 'application/json',
        'api-key': APIKey,
        // "datastream_ids":"1201ce79-fb1e-4293-b2e3-8986751b5bc5"
      },
      method: 'GET',
      success: function (res) {
        resolve(res);
      },
      fail: function (res) {
        reject(res);
      }
    })
  })
}
var alreadyExist = function(device){//设备是否已经存在
  var data = wx.getStorageSync("DeviceList");
  if (data == []) return false;
  return data.some(function(item){
    return item.id==device.id;
  })
}
var getDeviceList = function () {//获取本地设备列表
  var data;
  data = wx.getStorageSync("DeviceList");
  if(data==undefined||data=={}||data==[]){
    data = new Array();
    //console.log("无存储，采用默认存储");
  }
  data.push({
    id: "528728887",
    APIKey: "Bkh=8qotxcXKZ7=alafimSQFB2Q=",
    name: "test_1",
  })
  data.push({
    id: "528810626",
    APIKey: "wBT=h5WoInLv5Kpci7ja0SSzL=o=",
    name: "test_2",
  })
  data.push({
    id: "573373405",
    APIKey: "CJJAQVwz9ykxJckLEIi3xLzqAdI=",
    name: "教室用课表测试1",
  })
  return data;
}
var changeName = function(deviceNum,newName){//给某个设备改名
  var data = wx.getStorageSync("DeviceList");
  data[deviceNum].name = newName;
  wx.setStorageSync("DeviceList", data);
}
var assignOrder = function(device,order){//下发命令
  var id = device.id; 
  var APIKey = device.APIKey;
  return new Promise(function(resolve,reject){
    wx.request({
      url: 'https://api.heclouds.com/cmds?device_id=' + id,
      data: order,
      header: {
        //设置参数内容类型为json
        'content-type': 'application/json',
        'api-key': APIKey,
      },
      method: 'POST',
      success: function (res) {
        resolve(res);
      },
      fail: function (res) {
        reject(res);
      }
    })
  })
}
module.exports = {
  getDeviceList,
  queryState,
  addNewDevice,
  alreadyExist,
  changeName,
  assignOrder,
  queryDataStream,
}

      /*
      wx.request({
        url: 'https://api.heclouds.com/cmds?device_id=528728887',
        data:{
          'msg':"haha2",
        },
        header: {
          //设置参数内容类型为json
          'content-type': 'application/json',
          'api-key': 'Bkh=8qotxcXKZ7=alafimSQFB2Q=',
        },
        method: 'POST',
        success: function (res) {
          console.log(res.data)
        }
      })
      /*
      wx.request({
        url: 'https://api.heclouds.com/devices/528728887',
        header: {
          //设置参数内容类型为json
          'content-type': 'application/json',
          'api-key':'Bkh=8qotxcXKZ7=alafimSQFB2Q=',
        },
        method: 'GET',
        success: function (res) {
          console.log(res.data)
        }
      })
      /*
      wx.request({
        url: 'http://api.heclouds.com/register_de?register_code=z7Azx6NZntNNao84',
        method:'POST',
        data:{
          "sn": "testuseonly2",
          "title": "test_2"
        },
        header: {
          //设置参数内容类型为json
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
        }
      })
      */