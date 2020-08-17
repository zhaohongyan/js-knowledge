// this 函数执行时确定的
const obj = {
  name: "张三",
  sayHi: function () {
    console.log(this);
  },
  wait: function () {
    setTimeout(() => {
      // this即当前对象
      console.log(this);
    });
  },
  waitAgain: function () {
    setTimeout(function () {
      // this == window
      console.log(this);
    });
  },
};

obj.sayHi();
obj.wait();
obj.waitAgain();

class People {
  constructor(name) {
    this.name = name;
    this.age = 20;
  }
  sayHi() {
    console.log(this);
  }
}

const zhangsan = new People("张三");
zhangsan.sayHi(); // zhangsan 对象
