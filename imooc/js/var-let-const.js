// 考察知识点：变量提升
// console.log(a)
// var a = 1;

// 等同于
// var a;
// console.log(a)
// a = 1;

// console.log(b)
// let b = 1;

// 考察知识点：函数声明和函数表达式
// 函数声明是在预执行期执行的，就是说函数声明是在浏览器准备执行代码的时候执行的。
// var res = sum(1, 2)
// console.log(res)

// // 函数声明
// function sum(x, y) {
//   return x + y
// }

// // 函数表达式
// var sum = function (x, y) {
//   return x + 2 * y
// }

// 考察知识点：块级作用域
// for (var i = 0; i < 10; i++) {
//   var j = i + 1
// }
// console.log(i, j);

// for (let i = 0; i < 10; i++) {
//   let j = i + 1
// }
// console.log(i, j);

// 考察知识点：split() 和 join() 的区别
// const str1 = '12345';
// const arr1 = str1.split('')
// console.log('arr1', arr1)

// const arr2 = [1, 2, 3, 4]
// const str2 = arr2.join();
// console.log('str2', str2)

