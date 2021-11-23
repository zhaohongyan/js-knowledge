js 零碎知识点总结 越努力越幸运

希望你写下的每一行代码都是经过大脑思考的

别人的底子深厚得你都看不到

setTimeout setInterval

- 超时调用 setTimeout
- 间歇调用 setInterval
- 在使用 setTimeout 时，没有必要跟踪 timeId,因为每次执行代码之后，如果不再设置另一次超时调用，调用就会自行停止。
- 一般认为，使用 超时调用 来模拟 间歇调用 是一种最佳模式。
- 在开发环境下，很少使用真正的间歇调用，原因是后一个间歇调用可能会在前一个间歇调用结束之前启动。

```javascript
var timeId = setTimeout(() => {
  // 一秒后执行
  alert(11);
}, 1000);

var a = function () {
  // 不执行，除非a()
  alert(22);
};
```

Console 对象

在 console.log()或 console.debug()中输出时会有%d,%s 等符号。

1. %s for a String value 字符类型
2. %d or %i for a Integer value 整型
3. %f for a Floating point number 浮点类型 number
4. %o for an Object hyperlink 对象类型超链接
5. %c for style 样式

`console.log("Completed %d of %d items",1,10);`

console.log("同学，祝贺你喜提彩蛋~\n 或许你们还在犹豫是否加入，我会坦诚的告诉你我们超酷；\n 在这里大家都用无人车代步，AI 音箱不仅播放还可以交互；\n 人工智能是发展的核心技术，做自己让未来不只领先几步；\n 在这里做自己，欢迎来到百度！\n");
console.log("%c 百度 2019 校园招聘简历提交：http://dwz.cn/XpoFdepe （你将有机会直接获得面试资格）","color:red");

- {...rest} 扩展符是**浅拷贝**
- Object.assign() **浅拷贝**
- mobx.toJS(message) **深拷贝**

event.target event.currentTarget

- event.target 指向引起触发事件的元素; li
- event.currentTarget ; ul
- 只有被点击的那个目标元素的 event.target 才会等于 event.currentTarget。

AMD CMD

- AMD: 提前加载，不论是否调用模块，先解析所有模块，require 速度快，有可能浪费资源
- CMD: 提前加载，在真正需要时才解析该模块
- common.js 同步，循序执行
- sea.js 按需加载，性能比 AMD 差

防篡改对象

一旦把对象定义为防篡改对象，就无法撤销了

- 一级：不可扩展对象。

```javascript
var person = { name: "Emma" };
Object.preventExtensions(person);
Object.isExtensible(person);
```

- 二级：密封的对象。密封的对象不可扩展，不能删除属性和方法，属性值是可以修改的

```javascript
var person = { name: "Emma" };
Object.seal(person);
Object.isSealed(person);
```

- 最严格级别：冻结的对象。既不可扩展，也是密封的。属性值不可以修改。

```javascript
var person = { name: "Emma" };
Object.freeze(person);
Object.isExtensible(person); // false
Object.isSealed(person); // true
Object.isFrozen(person); // true
```

RAF requestAnimationFrame [code](./imooc/js/requestAnimationFrame.js)

- 要想动画流畅，更新频率要 60 帧/s，即 16.67s 更新一次视图；
- setTimeout 要手动控制频率，而 RAF 浏览器会自动控制；
- 后台标签或隐藏 iframe 中，RAF 会暂停，而 setTimeout 继续执行； **亲自尝试，setTimeout 也会暂停**

---

CSS 经典面试题

1. 右边宽度自适应
2. 左边根据右边自适应高度
3. 移动端 footer 自适应布局
4. 圣杯布局和双飞翼布局

---

JS 面试题

值类型和引用类型的区别？

- 值类型 - 栈
- 引用类型 - 堆

var let const 区别

- var 是 ES5 语法，let const 是 ES6 语法；var 有变量提升
- var let 声明的是变量，可修改；const 声明的是常量，不可修改
- let const 有块级作用域， var 没有
- let const 不会在全局声明时（在最顶部的范围）创建 window 对象的属性。(**重要**)

typeof 能够判断哪些类型

- 识别所有值类型 **string number boolean symbol undefined**
- 判断是否是引用类型（不可再细分 ） **object** (注意 typeof null === 'object')
- 识别函数 **function**

何时使用==， 何时使用===？

- 除了 == null 之外，其他一律用 ===
- undefined == null // true
- undefined === null // false

列举强制类型转换和隐式类型转换

- 强制： parseInt、parseFloat、toString 等
- 隐式： if、逻辑运算、 ==、 + 拼接字符串

truly 变量 !!a === true
falsely 变量 !!a === false

以下是 falsely 变量，其他都是 truly 变量

- !!0 === false
- !!NaN === false
- !!'' === false
- !!undefined === false
- !!null === false
- !!flase === false

数组去重

- `let a = [...new Set(arr)]`
- `Array.from(new Set(arr))`
- 传统方法

数组 API

数组的 pop push shift unshift 分别做什么

- 功能是什么？
- 返回值是什么？
- 是否会对原数组造成影响？

扩展： 数组有哪些 API，是否是纯函数？[code](./imooc/js/array-splice.js)

- 纯函数：concat map filter **slice-切片**
- 非纯函数：pop push shift unshift forEach some every reduce **splice-剪接**

纯函数

1. 不改变原数组（没有副作用）
2. 返回新数组

字符串中出现次数最多的字符

手写 trim 保证浏览器兼容性

```javascript
if (!String.prototypt.trim) {
  String.prototypt.trim = function () {
    return this.replace(/^\s+/, "").replace(/\s+$/, "");
  };
}
// 考察知识点: 原型 this 正则
```

---

map 可以传函数进去吗？为什么会出错？怎么解决？

```javascript
["2", "3", "4"].map(parseInt)[
  // 等同于
  ("2", "3", "4")
].map((item, index) => parseInt(item, index));

// parseInt(string, radix);
// 从 2 到 36，表示字符串的基数
// 返回值：一个整数或NaN
// radix 小于 2 或大于 36 ，或 第一个非空格字符不能转换为数字 返回NaN
```

自执行函数，形成闭包，块级作用域

```javascript
a = 10;
(function a() {
  // 闭包，块级作用域
  console.log(a);
  var a = 100;
  console.log(a);
})();
```

---

手写倒计时

for...of for...in [code](./imooc/js/for-of.js)

手写深度比较， lodash.isEqual [code](./imooc/js/isEqual.js)

正则表达式 [30 分种入门](https://deerchao.cn/tutorials/regex/regex.htm#greedyandlazy)

- - 一次或多次
- - 0 次或多次
- ? 0 次或 1 次
- | 两项之间的一个

字符串字母开头，后面字母数字下划线，长度 6-30
`const reg = /^[a-zA-Z]\w{5,29}$/`

如何通过 js 实现继承

- class 继承 （推荐）
- prototype 继承

如何捕获 js 异常

- try...catch
- window.onerror = function(message, source, lineNum, colNum, error) {...}

什么是 json?

- json 是一种数据格式，本质是一段字符串
- json 格式和 js 对象格式结构一致，对 js 语言更友好
- window.JSON 是一个全局对象： JSON.stringify JSON.parse

解释 JSONP (JSON with padding)原理，为什么它不是真正的 Ajax? [code](./imooc/js/jsonp.js)

- JSONP 由两部分组成：回调函数 和 数据
- 回调函数 是当响应到来时 应该在页面中调用的函数。回调函数的名字一般是在请求中指定的。
- 数据就是 传入回调函数中的 JSON 数据。

获取当前页面 url 参数 [code](./imooc/js/query.js)

- 传统方式 location.search ?a=10&b=20&c=30
- 新 API new URLSearchParams(location.search) （有兼容问题）

将 url 参数解析成对象 [code](./imooc/js/query.js)

手写 flatten 数组，考虑多级 （flatten 拍平）[code](./imooc/js/flat.js)

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
let a = 100;
function test() {
  alert(a);
  a = 10;
  alert(a);
}
test();
alert(a);
```

防抖节流

- 防抖 debounce [code](./imooc/js/debounce.js)
- 节流 throttle [code](./imooc/js/throttle.js)

---

小题

```javascript

/678/ == /678/

/678/ === /678/

const a = 40 % 7; typeof a

0.1 === 0.5 - 0.4;

0.2 === 0.5 - 0.3

1 + null          // 1
1 + undefined     // NaN

Number(null)      // 0
Number(undefined) // NaN

typeof null === 'object';              // true
Object.prototype.toString.call(null);  // [object Null]
null instanceof Object;                // false

// ++i i++

// ++ i 是先加后赋值；i ++ 是先赋值后加；++i和i++都是分两步完成的。

```

---

Set 构造函数

- Set 类似于数组，但是成员的值都是唯一的，没用重复的值
- Set 本身是一个构造函数，用来生成 Set 数据结构
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

与 Set 类似，也是不重复的值的集合

区别

- WeakSet 成员只能是对象，不能是其他类型的值
- WeakSet 的对象都是弱引用。即垃圾机制不考虑 对该对象的引用

属性和方法

- WeakSet.prototype.add(value)
- WeakSet.prototype.delete(value)
- WeakSet.prototype.has(value)

- 没有 size 属性，没有方法遍历其成员
- 用处： 存储 DOM 节点，而不用担心这些节点从文档移除时会引发内存泄漏

Map

- 类似于对象，也是键值对的集合，但是键的范围不限于字符串
- 对同一个键赋值两次，后一次的值会覆盖前一次的值
- 读取一个未知的键，返回 undefined **注意：只有对同一个对象的引用，才视为同一个键**

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

WeakMap 与 Map 结构基本类似，唯一的区别是它只接受对象作为键名（null 除外），不接受其他类型的值作为键名，而且键名所指向的对象不计入垃圾回收机制。

专用场合就是，他的键所对应的对象可能会在将来消失，有助于防止内存泄漏。

方法

- get
- set
- has
- delete

与 Map 区别

- 没有遍历操作，没有 size
- 无法清空，没有 clear()

Proxy Object.defineProperty 区别

- Object.defineProperty 只能监听到属性的读写
- Proxy 除读写外，还可以监听到属性的删除，方法的调用等

下面是 Proxy 支持的拦截操作一览，一共 13 种。

- get(target, propKey, receiver)：拦截对象属性的读取，比如 proxy.foo 和 proxy['foo']。
- set(target, propKey, value, receiver)：拦截对象属性的设置，比如 proxy.foo = v 或 proxy['foo'] = v，返回一个布尔值。
- has(target, propKey)：拦截 propKey in proxy 的操作，返回一个布尔值。
- deleteProperty(target, propKey)：拦截 delete proxy[propKey]的操作，返回一个布尔值。
- ownKeys(target)：拦截 Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in 循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而 Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
- getOwnPropertyDescriptor(target, propKey)：拦截 Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
- defineProperty(target, propKey, propDesc)：拦截 Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
- preventExtensions(target)：拦截 Object.preventExtensions(proxy)，返回一个布尔值。
- getPrototypeOf(target)：拦截 Object.getPrototypeOf(proxy)，返回一个对象。
- isExtensible(target)：拦截 Object.isExtensible(proxy)，返回一个布尔值。
- setPrototypeOf(target, proto)：拦截 Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如 proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
- construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如 new proxy(...args)。

Reflect

Reflect 对象一共有 13 个静态方法。

- Reflect.apply(target, thisArg, args)
- Reflect.construct(target, args)
- Reflect.get(target, name, receiver)
- Reflect.set(target, name, value, receiver)
- Reflect.defineProperty(target, name, desc)
- Reflect.deleteProperty(target, name)
- Reflect.has(target, name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target, name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target, prototype)

解析 get 参数

```js
const q = {};
location.serach.replace(/([^?&=])=([^&+])/g, (_, k, v) => (q[k] = v));
console.log(q);
```

### 跨域，你真的会吗？

https://mp.weixin.qq.com/s/fDlyrRTv6zp-PQ1iRkTpBQ

- jsonp
  缺点： 只能实现 get 请求
- iframe + document.domain
  此方案仅限主域相同，子域不同的跨域应用场景。
  实现原理：两个页面都通过 js 强制设置 document.domain 为基础主域，就实现了同域。
- iframe + location.hash
- iframe + window.name
- iframe + postMessage
- 跨域资源共享（CORS）
- nginx
- WebSocket 协议跨域

- [深入理解 js 执行上下文](https://mp.weixin.qq.com/s/F60V4nxUKVllde_RTtm9pg)
- [深入理解 js 作用域](https://mp.weixin.qq.com/s/fYZciVqatoJAKlm6tKHSyw)
- [一文理解 this、call、apply、bind](https://mp.weixin.qq.com/s/3sm7wugUZ0GUavQsbQnEeg)

算法

数据结构
