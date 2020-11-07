// 主线任务
// 微任务
// 宏任务

// 1. 
console.log(1)

setTimeout(() => {
  console.log(2)
});

Promise.resolve().then(() => {
  console.log(3)
})

console.log(4)


// 2.
setTimeout(() => {
  console.log(1);
}, 0);

new Promise((resolve) => {
  console.log(2);
  resolve();
}).then(() => console.log(3));

function callMe() {
  console.log(4);
}

(async () => {
  await callMe();
  console.log(5);
})();