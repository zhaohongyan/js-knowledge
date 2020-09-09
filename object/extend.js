// 实例 和 构造函数原型对象的关系
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var person1 = new Person('Amy', 30);
// console.log(Person.prototype.constructor === Person)
// console.log(person1.__proto__ === Person.prototype)

// 借用构造函数
function A(name) {
  this.name = name;
  this.color = ["red", "blue", "green"];
}
A.prototype.age = 1;

function B() {
  A.apply(this, ['Emma'])
  // A.call(this, "Emma");
  this.age = 28;
}

var instance = new B();
console.log(instance.name)
console.log(instance.color)