JS WEB API
+ js 基础知识， 规定语法 (ECMA262标准)
+ js web api, 网页操作的API (W3C标准)
+ 前者是后者的基础，两者结合才能有实际的应用

JS WEB API
+ DOM - document object model
+ BOM - brower object model 
+ 事件绑定
+ ajax
+ 存储

DOM题目
+ DOM是那种数据结构
+ DOM操作常用API
+ attribute  property 区别
  - attribute 修改html属性，会改变html结构  （耗性能）
  - property 修改对象属性，不会体现到html结构中 （尽量使用这个）不是具体api
  - 两者都有可能引起DOM重新渲染
+ 一次性插入多个DOM节点，考虑性能

DOM知识点
+ DOM本质  **一棵树**
+ DOM节点操作
+ DOM结构操作
  - 新增、插入节点 (appendChild)
  - 获取子元素列表(childNode)、 获取父元素 (parentNode)
  - 删除子元素 removeChild
+ DOM性能
  - DOM操作非常昂贵，避免频繁的DOM操作