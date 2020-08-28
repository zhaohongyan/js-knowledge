// 做错过好几次了

//闭包
// function User() {
//   function initname() {
//     console.log(this);
//     this.name = "张三";
//   }
//   initname();
// }

// var a = new User();
// console.log(a.name);
// console.log(window.name);

//===========================================================

// function F1() {
//   this.name = "f1";
// }

// function F2() {
//   this.name = "f2";
//   return {};
// }

// console.log(new F1().name); 
// console.log(F1().name);     
// console.log(new F2().name); 
// console.log(F2().name); 

//=============================================================

// function Foo() {
//   getName = function() {
//     alert(1);
//     return this;
//   };
// }
// Foo.getName = function() {
//   alert(2);
// };

// Foo.prototype.getName = function() {
//   alert(3);
// };

// // 函数表达式
// var getName = function() {
//   alert(4);
// };

// // 函数声明
// function getName() {
//   alert(5);
// }

// Foo.getName(); 
// getName();
// Foo().getName();  
// new Foo().getName();  