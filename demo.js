// for(var i = 0; i < 5; ++i) {
//   setTimeout(function() {
//     console.log(i)
//   }, 0);
//   console.log(i);
// }

// 考察的知识点是：函数参数
// 通过值传递参数
// 在函数中调用的参数是函数的隐式参数。
// JavaScript 隐式参数通过值来传递：函数仅仅只是获取值。
// 如果函数修改参数的值，不会修改显式参数的初始值（在函数外定义）。
// 隐式参数的改变在函数外是不可见的。

// 通过对象传递参数
// 在JavaScript中，可以引用对象的值。
// 因此我们在函数内部修改对象的属性就会修改其初始的值。
// 修改对象属性可作用于函数外部（全局变量）。
// 修改对象属性在函数外是可见的。
const a = { b: 3}
function foo(obj) {
  obj.b = 5

  return obj
}
const aa = foo(a);
console.log(a.b) // 5
console.log(aa.b); // 5

// 考察知识点：原型 继承
function Ofo() {}
function Bick() {
	this.name = 'mybick'
}
var myBick = new Ofo()

Ofo.prototype = new Bick()

var youbick = new Bick()

console.log(myBick.name)

console.log(youbick.name)

