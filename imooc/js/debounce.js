// debounce 防抖

const input1 = document.getElementById('input1')

// input1.addEventListener('keyup', function () {
//   console.log(input1.value)
// })

// let timer = null;
// input1.addEventListener('keyup', function () {
//   if (timer) {
//     clearTimeout(timer);
//   }
//   timer = setTimeout(() => {
//     console.log(input1.value)
//     clearTimeout(timer)
//   }, 500);
// })

function debounce(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => { // 注意这里是箭头函数
      fn.apply(this, arguments)
    }, delay);
  }
}
// ----------------------------- e传给的是这个函数
input1.addEventListener('keyup', debounce(function (e) {
  console.log(e.target)
  console.log('debounce ', input1.value)
}))