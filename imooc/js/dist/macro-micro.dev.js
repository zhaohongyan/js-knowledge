"use strict";

// 主线任务
// 微任务
// 宏任务
// 1. 
console.log(1);
setTimeout(function () {
  console.log(2);
});
Promise.resolve().then(function () {
  console.log(3);
});
console.log(4); // 2.

setTimeout(function () {
  console.log(1);
}, 0);
new Promise(function (resolve) {
  console.log(2);
  resolve();
}).then(function () {
  return console.log(3);
});

function callMe() {
  console.log(4);
}

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(callMe());

        case 2:
          console.log(5);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
})();