css面试题
- 右边宽度自适应
- 左边根据右边自适应高度
- 移动端footer自适应布局


js面试题
- 数组去重
- 字符串中出现次数最多的字符
- map可以传函数进去吗？为什么会出错？怎么解决？
  `console.log(["2", "3", "4"].map(parseInt));`
  `console.log(["2", "3", "4"].map(item => parseInt(item)));`
- 自执行函数，形成闭包，块级作用域

```javascript
a = 10;
(function a() { // 闭包，块级作用域
  console.log(a);
  var a = 100;
  console.log(a);
})();
```

- 倒计时