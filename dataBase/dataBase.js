var getNewDevice = function(id,APIKey){//获取新的设备(服务器端)
  
}
var queryAPIKey = function(id){//用id获取本地存储的APIKey

}
var addNewDevice = function(device){//添加设备进文件保存(本地端)
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
var alreadyExist = function(device){
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
  return data;
}
var assignOrder = function(order,id){//下发命令

}
module.exports = {
  getDeviceList,
  queryState,
  addNewDevice,
  alreadyExist,
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