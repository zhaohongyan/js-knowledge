// setTimeout
// 100 -> 640, add 540
// 60帧/s , 3秒 = 180帧， 每帧增加3px

let currentWidth = 100;
const maxWidth = 640;
const div = $('#div');

// function animate() {
//   currentWidth = currentWidth + 3;
//   div.css('width', currentWidth);
//   if (currentWidth < maxWidth) {
//     setTimeout(animate, 16.67);
//   }
// }
// animate();

// RAF
function animate() {
  currentWidth = currentWidth + 3;
  div.css('width', currentWidth);

  if (currentWidth < maxWidth) {
    window.requestAnimationFrame(animate)
  }
}
animate();