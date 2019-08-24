// 原型 原型对象 原型链 构造函数

// isPrototypeOf() 是否是原型对象
// Object.getPrototypeOf(obj) 查看原型对象
// hasOwnProperty 检查属性是否存在于对象实例中

function Person() {}
Person.prototype.name = "Emma";
Person.prototype.age = 28;
Person.prototype.sayName = function() {
  console.log(this.name);
};

var person1 = new Person();
var person2 = new Person();
console.log(Person.prototype.isPrototypeOf(person1));
console.log(Object.getPrototypeOf(person1) === Person.prototype);
