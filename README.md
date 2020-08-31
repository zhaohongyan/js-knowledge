js零碎知识点总结 越努力越幸运

Console对象

在console.log()或console.debug()中输出时会有%d,%s等符号。
1. %s for a String value 字符类型
2. %d or %i for a Integer value 整型
3. %f for a Floating point number 浮点类型number
4. %o for an Object hyperlink 对象类型超链接
5. %c for style  样式

`console.log("Completed %d of %d items",1,10);`

console.log("同学，祝贺你喜提彩蛋~\n或许你们还在犹豫是否加入，我会坦诚的告诉你我们超酷；\n在这里大家都用无人车代步，AI音箱不仅播放还可以交互；\n人工智能是发展的核心技术，做自己让未来不只领先几步；\n在这里做自己，欢迎来到百度！\n");
console.log("%c百度2019校园招聘简历提交：http://dwz.cn/XpoFdepe （你将有机会直接获得面试资格）","color:red");


{...rest} 扩展符是**浅拷贝**

Object.assign() **浅拷贝**

mobx.toJS(message) **深拷贝**

JSON.stringify(message) **读取整个结构**

event.target event.currentTarget
- event.target指向引起触发事件的元素;
- event.currentTarget则是事件绑定的元素;
- 只有被点击的那个目标元素的event.target才会等于event.currentTarget。

AMD CMD
- AMD: 提前加载，不论是否调用模块，先解析所有模块，require速度快，有可能浪费资源
- CMD: 提前加载，在真正需要时才解析该模块
- common.js 同步，循序执行
- sea.js 按需加载，性能比AMD差

防篡改对象

一旦把对象定义为防篡改对象，就无法撤销了     
- 一级：不可扩展对象。
```javascript
  var person = { name: 'Emma' };
  Object.preventExtensions(person);
  Object.isExtensible(person);
```
- 二级：密封的对象。密封的对象不可扩展，不能删除属性和方法，属性值是可以修改的
```javascript
  var person = { name: 'Emma' };
  Object.seal(person);
  Object.isSealed(person);
```
- 最严格级别：冻结的对象。既不可扩展，也是密封的。属性值不可以修改。
```javascript
  var person = { name: 'Emma' };
  Object.freeze(person);
  Object.isExtensible(person); // false
  Object.isSealed(person); // true
  Object.isFrozen(person); // true
  
```

RAF requestAnimationFrame [code](./imooc/js/requestAnimationFrame.js)
- 要想动画流畅，更新频率要60帧/s，即16.67s更新一次视图；
- setTimeout 要手动控制频率，而RAF 浏览器会自动控制；
- 后台标签或隐藏iframe 中，RAF会暂停，而 setTimeout 继续执行； **亲自尝试，setTimeout也会暂停**

------
CSS经典面试题
1. 右边宽度自适应
2. 左边根据右边自适应高度
3. 移动端footer自适应布局

------
JS面试题

值类型和引用类型的区别？
  - 值类型 - 栈
  - 引用类型 - 堆

var let const区别
  - var是ES5语法，let const是ES6语法；var有变量提升
  - var let声明的是变量，可修改；const声明的是常量，不可修改
  - let const 有块级作用域， var没有
  - let const不会在全局声明时（在最顶部的范围）创建window 对象的属性。(**重要**)

typeof能够判断哪些类型
  - 识别所有值类型  **string number boolean symbol undefined**
  - 判断是否是引用类型（不可再细分 ） **object** (注意 typeof null === 'object')
  - 识别函数  **function**


何时使用==， 何时使用===？
  - 除了 == null 之外，其他一律用 ===
  - undefined == null  // true
  - undefined === null // false

列举强制类型转换和隐式类型转换
  - 强制： parseInt、parseFloat、toString等
  - 隐式： if、逻辑运算、 ==、 + 拼接字符串

truly 变量    !!a === true
falsely 变量  !!a === false

以下是falsely变量，其他都是truly变量
  * !!0 === false
  * !!NaN === false
  * !!'' === false
  * !!undefined === false
  * !!null === false
  * !!flase === false

数组去重
- `let a = [...new Set(arr)]`
- `Array.from(new Set(arr))`
- 传统方法

数组API

数组的pop push shift unshift 分别做什么
  - 功能是什么？
  - 返回值是什么？
  - 是否会对原数组造成影响？ 

  扩展： 数组有哪些API，是否是纯函数？[code](./imooc/js/array-splice.js)
  - 纯函数：concat map filter **slice-切片**
  - 非纯函数：pop push shift unshift forEach some every reduce **splice-剪接**

纯函数
  1. 不改变原数组（没有副作用）
  2. 返回新数组


字符串中出现次数最多的字符

手写trim 保证浏览器兼容性
```javascript
if (!String.prototypt.trim) {
  String.prototypt.trim = function () {
    return this.replace(/^\s+/, '').replace(/\s+$/, '')
  }
}
// 考察知识点: 原型 this 正则
```
------
map可以传函数进去吗？为什么会出错？怎么解决？

```javascript
["2", "3", "4"].map(parseInt)
// 等同于
["2", "3", "4"].map((item, index) => parseInt(item, index))

// parseInt(string, radix);
// 从 2 到 36，表示字符串的基数
// 返回值：一个整数或NaN
// radix 小于 2 或大于 36 ，或 第一个非空格字符不能转换为数字 返回NaN
```
自执行函数，形成闭包，块级作用域

```javascript
a = 10;
(function a() { // 闭包，块级作用域
  console.log(a);
  var a = 100;
  console.log(a);
})();
```
------
手写倒计时

for...of for...in [code](./imooc/js/for-of.js)

手写深度比较， lodash.isEqual [code](./imooc/js/isEqual.js)

正则表达式 [30分种入门](https://deerchao.cn/tutorials/regex/regex.htm#greedyandlazy)
- + 一次或多次
- * 0次或多次
- ? 0次或1次
- | 两项之间的一个

字符串字母开头，后面字母数字下划线，长度6-30
`const reg = /^[a-zA-Z]\w{5,29}$/`

如何通过js实现继承
  - class继承 （推荐）
  - prototype继承

如何捕获js异常
  - try...catch
  - window.onerror = function(message, source, lineNum, colNum, error) {...}

什么是json?
- json是一种数据格式，本质是一段字符串
- json格式和js对象格式结构一致，对js语言更友好
- window.JSON是一个全局对象： JSON.stringify  JSON.parse

解释 JSONP (JSON with padding)原理，为什么它不是真正的Ajax? [code](./imooc/js/jsonp.js)
- JSONP 由两部分组成：回调函数 和 数据
- 回调函数 是当响应到来时 应该在页面中调用的函数。回调函数的名字一般是在请求中指定的。
- 数据就是 传入回调函数中的 JSON 数据。

获取当前页面url参数 [code](./imooc/js/query.js)
- 传统方式 location.search  ?a=10&b=20&c=30
- 新API   new URLSearchParams(location.search) （有兼容问题）

将url参数解析成对象 [code](./imooc/js/query.js)

手写 flatten 数组，考虑多级  （flatten拍平）[code](./imooc/js/flat.js)

函数声明和函数表达式的区别？
- 函数声明： `function fn() {...}`
- 函数表达式： `const fn = function () {...}`
- 函数声明会在代码执行前预加载，而函数表达式不会（类似于变量提升）

new Object() 和 Object.create() 的区别
- {} 等同于 new Object(), 原型是 Object.prototype
- Object.create(null) 没有原型
- Object.create({...}) 可指定原型

    
关于 this 场景题
[code1](./imooc/js/this.js)
[code2](./imooc/js/this2.js)

性能优化
```javascript
// 对DOM查询进行缓存
const length = document.querySelectorAll('p').length;
for (let i = 0; i < length ; i++>) {
  ...
}

// 频繁DOM操作，合并到一起插入DOM结构
const frag = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const p = document.createElement('p');
  p.innerHTML = '插入的节点' + i + '<br />'
  frag.appendChild(p);
}
document.body.appendChild(frag)
```

作用域 变量
```javascript
// 考察知识点 作用域和变量
let a = 100
function test() {
  alert(a)
  a = 10
  alert(a)
}
test()
alert(a)
```

防抖节流

------
小题

`/678/ == /678/`

`/678/ === /678/`

`const a = 40 % 7; typeof a`

`0.1 === 0.5 - 0.4;`

`0.2 === 0.5 - 0.3`

------
不常考知识点：

- 自定义属性data-* 的值，只能是字符串，不是字符串也会转化成字符串

------
我没用过的知识点

Set 构造函数

- Set类似于数组，但是成员的值都是唯一的，没用重复的值
- Set本身是一个构造函数，用来生成Set数据结构
- 不会添加重复的值
- 向 Set 加入值时，不会发生类型转换
- 可接受数组作为参数

实例的属性和方法
- Set.prototype.constructor
- Set.prototype.size
- add(value)
- delete(value)
- has(value)
- clear()

遍历方法
- keys()
- values()
- entries()
- forEach()
- map()
- filter()

很容易实现并集，交集，差集
- 并集 `let union = new Set([...a, ...b])`
- 交集 `let intersect = new Set([...a].filer(x => b.has(x)))`
- 差集 `let intersect = new Set([...a].filer(x => !b.has(x)))`

WeakSet 构造函数

与Set类似，也是不重复的值的集合

区别
- WeakSet成员只能是对象，不能是其他类型的值
- WeakSet的对象都是弱引用。即垃圾机制不考虑 对该对象的引用

属性和方法
- WeakSet.prototype.add(value)
- WeakSet.prototype.delete(value)
- WeakSet.prototype.has(value)

- 没有size属性，没有方法遍历其成员
- 用处： 存储DOM节点，而不用担心这些节点从文档移除时会引发内存泄漏

Map

- 类似于对象，也是键值对的集合，但是键的范围不限于字符串
- 对同一个键赋值两次，后一次的值会覆盖前一次的值
- 读取一个未知的键，返回undefined **注意：只有对同一个对象的引用，才视为同一个键**

属性和方法
- size
- set(key, value)
- get(key)
- has(o)
- delete(o)
- clear()

遍历方法
- keys()
- values()
- entries()
- forEach()

WeakMap

WeakMap与Map结构基本类似，唯一的区别是它只接受对象作为键名（null除外），不接受其他类型的值作为键名，而且键名所指向的对象不计入垃圾回收机制。

专用场合就是，他的键所对应的对象可能会在将来消失，有助于防止内存泄漏。

方法
- get
- set
- has
- delete

与Map区别
- 没有遍历操作，没有size
- 无法清空，没有clear()






