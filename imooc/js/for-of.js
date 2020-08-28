// function muli(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num * num);
//     }, 1000);
//   });
// }

// const nums = [1, 2, 3];

// nums.forEach(async (item) => {
//   const res = await muli(item);
//   console.log(res);
// });

// !(async function (params) {
//   for (const i of nums) {
//     const res = await muli(i);
//     console.log(res)
//   }
// })();

// -----------------------
let obj = { a: 1, b: 2 }
let arr = [1, 2, 3]

// for...in
for (let i in arr) {
  console.log("i in arr", i)  //key
}

for (let i in obj) {
  console.log("i in obj", i)   //key
}

// for...of 遍历， 不能用于对象，因为对象本身不能被遍历
for (let i of arr) {
  console.log("i of arr", i)   //value
}

for (let index of arr.keys()) {
  console.log('keys()', index)
}

for (let value of arr.values()) {
  console.log('values()', value)
}

for (let item of arr.entries()) {
  console.log('entries()', item)
}