// 做错过好几次了

// https://www.cnblogs.com/chaoyuehedy/p/9110063.html
// https://www.cnblogs.com/shihaiying/p/11907081.html

// 定义函数的方法主要有4种：
// 函数声明(Function Declaration)
// 函数表达式Function Expression)
// ES6里箭头函数
// new Function构造函数



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

function Foo() {
  getName = function () {
    alert(1);
    return this;
  };
}
Foo.getName = function () {
  alert(2);
};

Foo.prototype.getName = function () {
  alert(3);
};

// 函数表达式
var getName = function () {
  alert(4);
};

// 函数声明 
function getName() {
  alert(5);
}

// Foo.getName();
// getName(); 
// Foo().getName();
// new Foo().getName();

//=============================================================
// 声明提前是函数声明和函数表达式的一个重要区别
// 在使用函数声明的函数定义方法的时候，函数调用可以放在任意位置嘛
// 函数声明是在预执行期执行的，就是说函数声明是在浏览器准备执行代码的时候执行的。
// 因为函数声明在预执行期被执行，所以到了执行期，函数声明就不再执行

// < !--函数声明 -->
// sayTruth();
// function sayTruth() {
//   alert('函数声明');
// }

// < !--函数表达式 -->
// sayTruth();  // 不会执行
// var sayTruth = function () {
//   alert('函数表达式.');
// }

