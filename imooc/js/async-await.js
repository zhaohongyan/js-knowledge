// async function async1() {
//   console.log('async1 start')  // 2 重要
//   await async2()
//   // await后面的，都可以看做是callback里的内容，即异步
//   // 类似于eventloop setTimeout(cb1)
//   // 类似于 setTimeout(() => { console.log('async1 end') })
//   // 类似于promise.resolve().then(() => { console.log('async1 end') })
//   console.log('async1 end') // 5
// }

// 第一题-------------------------
// async function async2() {
//   console.log('async2') // 3 重要
// }

// console.log('script start') // 1
// async1()
// console.log('script end') // 4

// script start, async1 start, async2, script end, async1 end,

// 第二题-------------------------
// async function fn1() {
//   return 1;
// }
// (async function () {
//   const a = fn1();
//   const b = await fn1();
//   console.log(a);
//   console.log(b)
// })()

// 第三题-------------------------
// (async function () {
//   console.log("start");
//   const a = await 1;
//   console.log("a", a);

//   const b = await Promise.resolve(2);
//   console.log("b", b);

//   const c = await Promise.reject(3);
//   console.log("c", c);

//   console.log("end");
// })();

// 第四题-全对 有收获------------------------
async function async1() {
  console.log("async1 start"); // 2
  await async2();

  // await后面的都是回调内容 - 微任务
  console.log("async1 end"); // 6
}

async function async2() {
  console.log("async2"); // 3
}

console.log("script start"); // 1

// 宏任务
setTimeout(() => {
  console.log("settimeout1"); // 8
}, 0);

// 宏任务
setTimeout(() => { 
  console.log("settimeout2"); // 9
}, 1000);

async1();

// 初始化promise 时， 传入的函数会立即执行
new Promise(function (resolve) {
  console.log("promise1"); // 4
  resolve();
}).then(function () {
  // then 微任务
  console.log("promise2"); // 7
});

console.log("script end"); // 5
// 同步代码执行完毕（call stack 清空）
// 执行微任务
// 尝试DOM渲染
// 触发event loop, 执行宏任务
