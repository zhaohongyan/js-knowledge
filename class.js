class A {
  a() {

  }
  b() {

  }
}

class B extends A {
  c() {

  }
  d() {

  }
}

const b = new B()

// 实例与原型的关系
console.log(b.__proto__ === B.prototype)

// 继承关系
console.log(B.prototype.__proto__.constructor === A)
console.log(typeof B)
console.log(A.prototype.__proto__.constructor === Object)