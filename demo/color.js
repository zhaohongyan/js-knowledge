// JS多种方法实现随机颜色；

var getRandomColor = function() {
  return (
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")"
  );
};

// var getRandomColor = function() {
//   var r = Math.round(Math.random() * 255),
//     g = Math.round(Math.random() * 255),
//     b = Math.round(Math.random() * 255);
//   var color = (r << 16) | (g << 8) | b;
//   return "#" + color.toString(16);
// };
var color = getRandomColor();
console.log(color);
