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

// 另一个区别是for..in可以操作任何对象；它提供了查看对象属性的一种方法。 但是 for..of关注于迭代对象的值。
// 内置对象Map和Set已经实现了Symbol.iterator方法，让我们可以访问它们保存的值。
// https://www.tslang.cn/docs/handbook/iterators-and-generators.html
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
  console.log(pet); // "species"
}

for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}