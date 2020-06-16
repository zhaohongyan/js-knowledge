/**
 * OO （Object Oriented） 面向对象
 * 继承
 */

// 确定原型和实例的关系
// instanceof 
// isPrototypeOf()

//  接口继承只继承方法签名
//  实现继承继承实际的方法

//  由于函数没有方法签名，所以ECMAScript只支持实现继承，而且其实现继承主要是依靠原型链来实现的

// 构造函数、原型、实例的关系：
// 每个构造函数都有一个原型对象，
// 原型对象都包含一个指向构造函数的指针
// 实例都包含一个指向原型对象的指针

// 1.原型链继承
// 思想：利用原型链,通过将一个类型的实例赋值给另一个构造函数的原型
// 问题：实例共享属性，如果是引用类型会出问题
//      不能传递参数
// function A() {
//   this.property = true
//   this.color = ["red", "blue", "green"]
// }

// A.prototype.getAValue = function() {
//   return this.property
// }

// function B() {
//   this.value = false
// }

// B.prototype = new A()
// B.prototype.getBValue = function () {
//   return this.value
// }

// var instance1 = new B()
// console.log(instance1.getAValue()) // true
// instance1.color.push('black') 
// console.log(instance1.color) // ["red", "blue", "green", 'black']

// var instance2 = new B()
// console.log(instance2.color) // ["red", "blue", "green", 'black']


// 2利用构造函数
// 思想：在子类型构造函数的内部调用超类型构造函数
// 特点：不共享父级实例属性，可以传参
// function A(name) {
//   this.name = name
//   this.color = ['red', 'blue', 'green']
// }
// A.prototype.age = 1

// function B() {
//   A.call(this, 'Emma') // 注意：call只继承了实例属性，没有继承原型属性
//   this.age = 28
// }

// var instance1 = new B()
// instance1.color.push('black')
// console.log(instance1.name) // Emma
// console.log(instance1.age) // 28
// console.log(instance1.color) //  ['red', 'blue', 'green', 'black']

// var instance2 = new B()
// instance2.color.push("white") 
// console.log(instance2.color) // ['red', 'blue', 'green', 'white']

// 3组合继承
// 思想：利用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承
// 特点：既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性
// 缺点：组合继承最大的问题就是无论什么情况下，都会调用两次超类型构造函数:一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。
// function A(name) {
//   this.name = name
//   this.color = ["red", "blue", "green"]
// }

// A.prototype.sayName = function () {
//   console.log(this.name)
// }

// function B(name, age) {
//   A.call(this, name)
//   this.age = age
// }

// B.prototype = new A()
// B.prototype.constructor = B
// B.prototype.sayAge = function () {
//   console.log(this.age)
// }

// var instance1 = new B('Emma', 28)
// instance1.color.push('white')
// console.log(instance1.color) // ['red', 'blue', 'green', 'white']
// instance1.sayAge() // 28

// var instance2 = new B("Amy", 30)
// console.log(instance2.color) // ['red', 'blue', 'green']
// instance2.sayName() // 'Amy'
// instance2.sayAge() // 30

// 4.原型式继承
// 思想：借助原型可以基于已有的对象创建新对象
// function object(o) {
//   function F(){}
//   F.prototype = o
//   return new F()
// }

// var person = {
//   name: 'Emma',
//   color: ['red', 'blue', 'green']
// }

// var instance1 = object(person)
// // 等同于 var instace1 = Object.create(person)
// instance1.name = 'Amy'
// console.log(instance1.name);
// console.log(instance1.color.push('white'));
// console.log(instance1.color);

// var instance2 = object(person)
// console.log(instance2.name);
// console.log(instance2.color);

// 5寄生式继承
// 思想：创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真的做是它做脸所有工作一样返回对象
// function createAnother(original) {
//   var clone = Object(original)
//   clone.sayHi = function () {
//     console.log('hi');
//   }
//   return clone
// }

// var person = {
//   name: 'Emma',
//   color: ['red', 'green', 'blue']
// }
// var anotherPerson = createAnother(person)
// anotherPerson.sayHi()

// 6寄生组合式继承
// 这个例子的高效率体现在它只调用了一次 SuperType 构造函数，并且因此避免了在 SubType. prototype 上面创建不必要的、多余的属性。
function inheritPrototype(B, A) {
  var prototype = object(A.prototype);
  prototype.constructor = B;
  B.prototype = prototype;
}

function A(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
A.prototype.sayName = function(){
    alert(this.name);
};
function B(name, age){
    A.call(this, name);
    this.age = age;
}
inheritPrototype(B, A);
B.prototype.sayAge = function(){
    alert(this.age)
}