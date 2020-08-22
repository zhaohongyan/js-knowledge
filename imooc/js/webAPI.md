JS WEB API
+ js 基础知识， 规定语法 (ECMA262标准)
+ js web api, 网页操作的API (W3C标准)
+ 前者是后者的基础，两者结合才能有实际的应用

JS WEB API
+ DOM - document object model
+ BOM - brower object model 
+ 事件绑定 
  - 事件绑定 
  `target.addEventListener(type, listener, useCapture);`
   useCapture 默认为 false 
    * 我们为一个元素绑定一个点击事件的时候，可以指定是要在捕获阶段绑定或者换在冒泡阶段绑定。 
    当addEventListener的第三个参数为true的时候，代表是在捕获阶段绑定，
    当第三个参数为false或者为空的时候，代表在冒泡阶段绑定。
  - 事件冒泡
  - 事件代理
+ ajax
  - XMLHttpRequest
    - xhr.open
      * xhr.open('get', './list.json', true)
      true-异步  false-异步
    - xhr.readyState 
      * 0 - (未初始化) 还没有调用send方法
      * 1 - (载入) 已调用send方法，正在发送请求
      * 2 - (载入完成) send方法执行完成，已经接受到全部响应内容
      * 3 - (交互) 正在解析响应内容
      * 4 - (完成) 响应内容解析完成，可以在客户端调用
    - xhr.status (httpStatus)
      * 2xx 成功处理请求 200
      * 3xx 需要重定向，浏览器直接跳转 301（永久重定向）， 302（临时重定向） 304（资源未改变，使用缓存资源）
      * 4xx 客户端请求错误 403(没有权限) 404
      * 5xx 服务器端错误 500， 502， 504（网关超时）

      ```javascript
      const xhrGET = new XMLHttpRequest();
      xhr.open('GET', './list.json', true)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))
            alert(xhr.responseText)
          }
        }
      }
      xhr.send(null)
      ```

  - 浏览器 同源策略
    协议、域名、端口， 三者必须一致
    加载图片，css, js可无视同源策略
    * <img src="">  // 服务器端可以做防盗链
    * <link href="" />
    * <script src=""></script>
    * img 可用于统计打点，可使用第三方统计服务
    * link script 可使用cdn， cdn一般都是外域
    * script 可实现jsonp
  -  跨域
    * 所有的跨域，都必须经过server端允许和配合
    * 未经server端允许就实现跨域，说明浏览器有漏洞，危险信号
  - 跨域解决方法
    * jsonp
    * cors 服务器设置http header
+ 存储
  - cookie缺点
    - 存储大小，最大**4kb**
    - http请求时需要发送到服务端，增加请求数据量
    - 只能通过document.cookie = ’‘来修改，太过简陋， 每次只能增加一个键值对
    `document.cookie = 'a=100'`, 每次都是追加，相同的键会覆盖
  - localStorage sessionStorage **存储的都是字符串**
    - HTML5专门为前端存储设计，最大**5M**
    - API简单易用
    - 不会随请求发送
    - 区别
      - localStorage 永久存储，除非代码或手动删除
      - sessionStorage 数据只存在于当前会话，浏览器关闭则清空


DOM
+ DOM是那种数据结构：**一棵树** 树（DOM树）
+ DOM操作常用API
  + DOM节点操作
  + DOM结构操作
    - 新增、插入节点 (appendChild)
    - 获取子元素列表(childNode)、 获取父元素 (parentNode)
    - 删除子元素 removeChild
    - attribute  property 区别
      - attribute 修改html属性，会改变html结构  （耗性能）
      - property 修改对象属性，不会体现到html结构中 （尽量使用这个）不是具体api
      - 两者都有可能引起DOM重新渲染
+ DOM性能
  - DOM操作非常昂贵，避免频繁的DOM操作
  - 一次性插入多个DOM节点，考虑性能
    - DOM缓存
    - DOM Frag
    `const frag = document.createDocumentFragment()`

BOM
题目：
  - 如何识别浏览器类型
  - 分析拆解url各部分
知识点：
  - navigator
  - screen
  - history
  - location

-------
http
  302 
  配合reponse headers中的location 使用

  应用： 百度搜索， 
  - 先跳转百度地址（http://www.baidu.com/link?url=APGIR7llE-FDbQAMhArEx7kkvGSn2yiaxlxj8pMI0w_Vm9h-ibTIlw3PEj3kaDM5TtT8nz-8pKWvqDFLhUKmRK）
  - 再跳转具体的网址（reponse headers中的location）(Location: https://www.runoob.com/js/js-tutorial.html)

http method
- 传统的method
  get, post
- 现在的method
  - get 获取数据
  - post 新建数据
  - patch/put 更改数据   patch-补丁
  - delete 删除数据
- **Restful API**
 - 一种新的API设计方法，早已推广使用
 - 传统的API设计：把每一个url当做一个功能
 - Restful API设计：把每一个url当做一个唯一的资源
  * 尽量不使用url参数
  * 用method表示操作类型


  传统的API设计      /api/list?pageNo=1
  Restful API设计   /api/list/1

http headers
Request Headers
- Accept          浏览器可接受的数据格式
- Accept-Encoding 浏览器可接受的压缩算法，如gzip
- Accept-Language 浏览器可接受的语言，如zh-CN
- Connection: keep-alive 一次TCP连接可以重复使用
- Cookie
- Host 请求域名
- User-Agent简称UA   浏览器信息
- Content-Type      发送数据的格式 如：application/json  get请求没有， post、patch请求有
- If-None-Match     对应Response Headers 中的 Etag
- If-Modified-Since 对应Response Headers 中的 Last-Modified

Response Headers
- Content-Type       返回数据的格式 如：application/json
- Content-Length     返回数据的大小，多少字节
- Content-Encoding   返回数据的压缩算法，如gzip
- Set-Cookie         服务端通过这个修改cookie
- Cache-Control      强制缓存
- Expires            已被 Cache-Control 代替
- Etag               
- Last-Modified

缓存相关的headers
- Cache-Control       控制强制缓存的逻辑   Cache-Control:max-age=31536000 一年 （单位是秒）
  Cache-Control的值：
  + max-age
  + no-cache  不用强制缓存，交给服务端处理 
  + no-store  不用强制缓存，也不用服务端缓存（不常见）
  + private
  + public
- Expires

- Etag                资源的唯一标识 （一个字符串， 类似人类的指纹）
  - 优先使用，更准确
- If-None-Match

- Last-Modified       资源的最后修改时间
- If-Modified-Since


http缓存机制
+ 强制缓存 Cache-Control 、Expires
+ 协商缓存（对比缓存） Etag 、Last-Modified
 - 服务端缓存策略 - 告诉客户端能否使用本地缓存的资源， 一致则返回304，否则返回200和最新资源
 - 资源标识有两种 Etag  Last-Modified


不同刷新操作对缓存的影响
- 正常操作： 强制缓存有效，协商缓存有效
- 手动刷新： 强制缓存无效，协商缓存有效
- 强制刷新： 强制缓存无效，协商缓存无效

**http总结**
- http状态吗
- http method
- Restful API
- http headers
- http 缓存策略


