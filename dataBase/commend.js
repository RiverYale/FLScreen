const url = require("../utils/gbk.js");
var c_draw_picture = function(name){
  return "1 " + name + " ";
}
var c_draw_font = function (x,y,size,content) {
  return "2 " + x + " " + y + " " + size + " "+url.encode(content)+" ";
}
module.exports = {
  c_draw_picture,
  c_draw_font,
}