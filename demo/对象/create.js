/**
 * 创建对象的方式
 * ? constructor instanceof 的关系
 */

// 1 工厂模式-函数封装
// function createPerson(name, age, job) {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.jpb = job;
//   o.sayName = function() {
//     console.log("this.name:", this.name);
//   };
//   return o;
// }

// var emma = createPerson("Emma", "28", "accounter");
// emma.sayName();
// console.log(emma);

// 2 构造函数
// new操作符做了什么？
// 1) 创建一个新对象
// 2) 将构造函数的作用域赋给新对象，（因此this就指向了这个对象）
// 3) 执行构造函数中的代码（为这个新对象添加属性）
// 4) 返回新对象

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function() {
//     console.log("this.name:", this.name);
//   };
// }

// var emma = createPerson("Emma", "28", "accounter");
// emma.sayName();
// console.log(emma);

// 3 原型模式
// function Person() {}
// Person.prototype.name = "Emma";
// Person.prototype.age = 28;
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };

// var emma = new Person();
// console.log(emma.name);

// 4 组合使用构造函数模式和原型模式
// 构造函数模式用于定义实例属性，
// 原型模式用于定义方法和共享属性
// 结果，每个实例都有自己的一份实例属性的副本，但同时又共享着对方法的引用

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
// }

// Person.prototype = {
//   constructor: Person,
//   sayName: function() {
//     console.log(this.name);
//   }
// };

// var amy = new Person("amy");
// var emma = new Person("emma");
// amy.sayName();
// emma.sayName();

// 5 动态原型模式
// 注意：使用动态原型模式时，不能使用动态字面量重写原型。
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   if (typeof this.sayName != "function") {
//     Person.prototype.sayName = function() {
//       console.log(this.name);
//     };
//   }
// }

// 6 寄生构造函数模式 对比工厂模式和构造函数模式
// 返回的函数和构造函数或构造函数的原型没有任何关系；
// function Person(name, age, job) {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.jpb = job;
//   o.sayName = function() {
//     console.log("this.name:", this.name);
//   };
//   return o;
// }

// var emma = new Person("emma", 28, "accounter");
// emma.sayName();

// function SpecialArray() {
//   var values = new Array();
//   values.push.apply(values, arguments);
//   values.toPipedString = function() {
//     return this.join("|");
//   };
//   return values;
// }

// var colors = new SpecialArray("red", "pink", "yellow");
// console.log(colors.toPipedString());

// 7 稳妥构造函数模式  对比寄生构造函数
// 所谓稳妥对象，指的是没有公共属性，而且其他方法也不引用this的对象；
function Person(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.jpb = job;
  o.sayName = function() {
    console.log("name:", name);
  };
  return o;
}
