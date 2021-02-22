// 闭包 自由变量的查找是 在函数定义的地方，向上级作用域查找，
//      而不是执行的地方
// 闭包的使用场景： 作为返回值  作为参数

// 作为返回值
// function create() {
//   const a = 100;
//   return function () {
//     console.log('a ', a); // a是定义在函数作用域内的
//   };
// }
// const result = create();
// const a = 200;
// result();

// 作为参数
// function print(fn) {
//   const b = 100;
//   fn();
// }
// const b = 200;
// function fn() {
//   console.log('b ', b); // b是定义在全局作用域内的
// }
// print(fn);

// 应用场景
// function createFunctions() {
//   var result = new Array();
//   for (var i = 0; i < 10; i++) {
//     result[i] = function (num) {
//       return function () {
//         return num;
//       }
//     }(i)
//   }
//   return result;
// }
// const result = createFunctions()
// console.log(result[0]());
// console.log(result[1]());
// console.log(result[2]());

// var a = 100;
// function foo() {
//   var a = 1; // a 是一个被 foo 创建的局部变量
//   function bar() { // bar 是一个内部函数，是一个闭包
//     console.log(a); // 使用了父函数中声明的变量
//   }
//   return bar;
// }
// const myFoo = foo();
// myFoo();

// ---------------

// var a = 'luckyStar';
// var obj = {
//   a: 'litterStar',
//   foo() {
//     console.log(this.a);
//   }
// }
// obj.foo(); // ①

// var bar = obj.foo;
// bar(); // ②

// setTimeout(obj.foo, 100); // ③


var name = 'The window';

var object = {
  name: 'my Object',
  getName: function () {
    return function () {
      return this.name;
    }
  }
}
console.log(object.getName()()); 