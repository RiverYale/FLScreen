const url = require("../utils/gbk.js");
var c_draw_picture = function(name){
  let ins = {
    type:Number,
    content:"",
  };
  ins.type = 1;
  ins.content = name;
  return ins;
}
var c_draw_font = function (x,y,size,content) {
  let ins = {
    type: Number,
    content: "",
    x:Number,
    y:Number,
    size:Number,
  };
  ins.type = 2;
  ins.content = url.encode(content);
  ins.x = x;
  ins.y = y;
  ins.size = size;
  return ins;
}
module.exports = {
  c_draw_picture,
  c_draw_font,
}