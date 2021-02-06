JS WEB API

- js 基础知识， 规定语法 (ECMA262 标准)
- js web api, 网页操作的 API (W3C 标准)
- 前者是后者的基础，两者结合才能有实际的应用

JS WEB API

- DOM - document object model
- BOM - brower object model
- 事件绑定
  - 事件绑定
    `target.addEventListener(type, listener, useCapture);`
    useCapture 默认为 false
    - 我们为一个元素绑定一个点击事件的时候，可以指定是要在捕获阶段绑定或者换在冒泡阶段绑定。
      当 addEventListener 的第三个参数为 true 的时候，代表是在捕获阶段绑定，
      当第三个参数为 false 或者为空的时候，代表在冒泡阶段绑定。
  - 事件冒泡
  - 事件代理
- ajax

  - XMLHttpRequest

    - xhr.open
      - xhr.open('get', './list.json', true)
        true-异步 false-异步
    - xhr.readyState
      - 0 - (未初始化) 还没有调用 send 方法
      - 1 - (载入) 已调用 send 方法，正在发送请求
      - 2 - (载入完成) send 方法执行完成，已经接受到全部响应内容
      - 3 - (交互) 正在解析响应内容
      - 4 - (完成) 响应内容解析完成，可以在客户端调用
    - xhr.status (httpStatus)

      - 2xx 成功处理请求 200
      - 3xx 需要重定向，浏览器直接跳转 301（永久重定向）， 302（临时重定向） 304（资源未改变，使用缓存资源）
      - 4xx 客户端请求错误 403(没有权限) 404
      - 5xx 服务器端错误 500， 502， 504（网关超时）

      ```javascript
      const xhrGET = new XMLHttpRequest();
      xhr.open("GET", "./list.json", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            alert(xhr.responseText);
          }
        }
      };
      xhr.send(null);
      ```

  - 浏览器 同源策略
    协议、域名、端口， 三者必须一致
    加载图片，css, js 可无视同源策略
    - <img src=""> // 服务器端可以做防盗链
    - <link href="" />
    - <script src=""></script>
    - img 可用于统计打点，可使用第三方统计服务
    - link script 可使用 cdn， cdn 一般都是外域
    - script 可实现 jsonp
  - 跨域

  * 所有的跨域，都必须经过 server 端允许和配合
  * 未经 server 端允许就实现跨域，说明浏览器有漏洞，危险信号

  - 跨域解决方法
    - jsonp
    - cors 服务器设置 http header

- 存储
  - cookie 缺点
    - 存储大小，最大**4kb**
    - http 请求时需要发送到服务端，增加请求数据量
    - 只能通过 document.cookie = ’‘来修改，太过简陋， 每次只能增加一个键值对
      `document.cookie = 'a=100'`, 每次都是追加，相同的键会覆盖
  - localStorage sessionStorage **存储的都是字符串**
    - HTML5 专门为前端存储设计，最大**5M**
    - API 简单易用
    - 不会随请求发送
    - 区别
      - localStorage 永久存储，除非代码或手动删除
      - sessionStorage 数据只存在于当前会话，浏览器关闭则清空

DOM

- DOM 是那种数据结构：**一棵树** 树（DOM 树）
- DOM 操作常用 API
  - DOM 节点操作
  - DOM 结构操作
    - 新增、插入节点 (appendChild)
    - 获取子元素列表(childNode)、 获取父元素 (parentNode)
    - 删除子元素 removeChild
    - attribute property 区别
      - attribute 修改 html 属性，会改变 html 结构 （耗性能）
      - property 修改对象属性，不会体现到 html 结构中 （尽量使用这个）不是具体 api
      - 两者都有可能引起 DOM 重新渲染
- DOM 性能
  - DOM 操作非常昂贵，避免频繁的 DOM 操作
  - 一次性插入多个 DOM 节点，考虑性能
    - DOM 缓存
    - DOM Frag
      `const frag = document.createDocumentFragment()`

BOM
题目：

- 如何识别浏览器类型
- 分析拆解 url 各部分
  知识点：
- navigator
- screen
- history
- location

---

http
302
配合 reponse headers 中的 location 使用

应用： 百度搜索，

- 先跳转百度地址（http://www.baidu.com/link?url=APGIR7llE-FDbQAMhArEx7kkvGSn2yiaxlxj8pMI0w_Vm9h-ibTIlw3PEj3kaDM5TtT8nz-8pKWvqDFLhUKmRK）
- 再跳转具体的网址（reponse headers 中的 location）(Location: https://www.runoob.com/js/js-tutorial.html)

http method

- 传统的 method
  get, post
- 现在的 method
  - get 获取数据
  - post 新建数据
  - patch/put 更改数据 patch-补丁
  - delete 删除数据
- **Restful API**
- 一种新的 API 设计方法，早已推广使用
- 传统的 API 设计：把每一个 url 当做一个功能
- Restful API 设计：把每一个 url 当做一个唯一的资源

* 尽量不使用 url 参数
* 用 method 表示操作类型

传统的 API 设计 /api/list?pageNo=1
Restful API 设计 /api/list/1

http headers
Request Headers

- Accept 浏览器可接受的数据格式
- Accept-Encoding 浏览器可接受的压缩算法，如 gzip
- Accept-Language 浏览器可接受的语言，如 zh-CN
- Connection: keep-alive 一次 TCP 连接可以重复使用
- Cookie
- Host 请求域名
- User-Agent 简称 UA 浏览器信息
- Content-Type 发送数据的格式 如：application/json get 请求没有， post、patch 请求有
- If-None-Match 对应 Response Headers 中的 Etag
- If-Modified-Since 对应 Response Headers 中的 Last-Modified

Response Headers

- Content-Type 返回数据的格式 如：application/json
- Content-Length 返回数据的大小，多少字节
- Content-Encoding 返回数据的压缩算法，如 gzip
- Set-Cookie 服务端通过这个修改 cookie
- Cache-Control 强制缓存
- Expires 已被 Cache-Control 代替
- Etag
- Last-Modified

缓存相关的 headers

- Cache-Control 控制强制缓存的逻辑 Cache-Control:max-age=31536000 一年 （单位是秒）
  Cache-Control 的值：
  - max-age
  - no-cache 不用强制缓存，交给服务端处理
  - no-store 不用强制缓存，也不用服务端缓存（不常见）
  - private
  - public
- Expires

- Etag 资源的唯一标识 （一个字符串， 类似人类的指纹）

  - 优先使用，更准确

- Last-Modified 资源的最后修改时间

http 缓存机制

- 强制缓存 Cache-Control 、Expires
- 协商缓存（对比缓存） Etag 、Last-Modified

* 服务端缓存策略 - 告诉客户端能否使用本地缓存的资源， 一致则返回 304，否则返回 200 和最新资源
* 资源标识有两种 Etag Last-Modified

不同刷新操作对缓存的影响

- 正常操作： 强制缓存有效，协商缓存有效
- 手动刷新： 强制缓存无效，协商缓存有效
- 强制刷新： 强制缓存无效，协商缓存无效

**http 总结**

- http 状态码
- http method
- Restful API
- http headers
- http 缓存策略

http 状态码

1\*\* 请求已被接受，需要继续处理。

- 100 Continue
- 101 Switching Protocols
- 102 Processing

2\*\* 代表请求已成功被服务器接收、理解、并接受

- 200 OK
- 201 Created
- 202 Accepted

3\*\* 代表需要客户端采取进一步的操作才能完成请求

- 300 Multiple Choices
- 301 Moved Permanently 请求的网页已永久移动到新位置
- 302 Move Temporarily 请求临时从不同的 url 相应请求
- 303 See Other 对应当前请求的相应可以在另一个 url 被找到，而且客户端应采用 get 请求
- 304 Not Modified 自上次请求过，请求的网页未修改过
- 305 Use Proxy 被请求的资源必须通过指定的代理才能被访问

4\*\* 代表了客户端看起来可能发生了错误，妨碍了服务器的处理

- 400 Bad Request
- 401 Unauthorized
- 402 Payment Required
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed
- 406 Not Acceptable
- 407 Proxy Authentication Required
- 408 Request Timeout

5** 6** 代表了服务器在处理请求的过程中有错误或者异常状态发生

- 500 Internal Server Error
- 501 Not Implemented
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout

600 源站没有返回响应头部，只返回实体内容
