function fn1(a, b, c) {
  console.log(this);
  console.log(a, b, c);
  return "this is fn1";
}

// const fn2 = fn1.bind({x: 100}, 10, 20, 30)
// const result = fn2();
// console.log(result);

Function.prototype.bind1 = function () {
  const args = Array.prototype.slice.apply(arguments);
  const t = args.shift();
  const self = this;
  return function () {
    return self.apply(t, args);
  };
};

const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30);
const result = fn2();
console.log(result);
