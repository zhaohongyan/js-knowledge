
http状态码

1** 请求已被接受，需要继续处理。
- 100 Continue
- 101 Switching Protocols
- 102 Processing

2** 代表请求已成功被服务器接收、理解、并接受
- 200 OK
- 201 Created
- 202 Accepted

3** 代表需要客户端采取进一步的操作才能完成请求
- 300 Multiple Choices
- 301 Moved Permanently 请求的网页已永久移动到新位置
- 302 Move Temporarily 请求临时从不同的url相应请求
- 303 See Other 对应当前请求的相应可以在另一个url被找到，而且客户端应采用get请求
- 304 Not Modified 自上次请求过，请求的网页未修改过
- 305 Use Proxy 被请求的资源必须通过指定的代理才能被访问

4** 代表了客户端看起来可能发生了错误，妨碍了服务器的处理
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


