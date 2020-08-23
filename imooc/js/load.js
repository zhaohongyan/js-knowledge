const img = document.getElementById('img');
img.onload = function () {
  console.log('img loaded')
}

// window.onload = function() {
//   console.log('window loaded')
// }

// 等同于
window.addEventListener('load', function () {
  console.log('window loaded')
})

document.addEventListener('DOMContentLoaded', function() {
  console.log('dom content loaded')
})