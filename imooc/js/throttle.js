const div1 = document.getElementById('div1')

// div1.addEventListener('drag', function (e) {
//   console.log(e.offsetX, e.offsetY)
// })

// let timer = null;
// div1.addEventListener('drag', function (e) {
//   if (timer) {
//     return 
//   }
//   timer = setTimeout(() => {
//     console.log(e.offsetX, e.offsetY)

//     // 清空定时器
//     timer = null
//   }, 100);
// })

function throttle(fn, delay = 100) {
  let timer = null;
  return function () {
    if (timer) {
      return 
    }
    timer = setTimeout(() => {  // 注意这里是箭头函数
      fn.apply(this, arguments)
      timer = null;
    }, delay);
  }
}

div1.addEventListener('drag', throttle(function(e) {
  console.log(e.offsetX, e.offsetY)
}, 200))
