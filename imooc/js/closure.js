// 闭包 自由变量的查找是 在函数定义的地方，向上级作用域查找，
//      而不是执行的地方

// 作为返回值
function create() {
  const a = 100;
  return function () {
    console.log(a);
  };
}
const result = create();
const a = 200;
result();

// 作为参数
function print(fn) {
  const a = 100;
  fn();
}
const a = 200;
function fn() {
  console.log(a);
}
print(fn);
