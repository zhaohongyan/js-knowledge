var http = require('http');

var server = http.createServer();

var qs = require('querystring');



server.on('request', function (req, res) {

  var postData = '';



  // 数据块接收中

  req.addListener('data', function (chunk) {

    postData += chunk;

  });



  // 数据接收完毕

  req.addListener('end', function () {

    postData = qs.parse(postData);



    // 跨域后台设置

    res.writeHead(200, {

      'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie

      'Access-Control-Allow-Origin': 'http://www.domain1.com',    // 允许访问的域（协议+域名+端口）

      'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'   // HttpOnly:脚本无法读取cookie

    });



    res.write(JSON.stringify(postData));

    res.end();

  });

});



server.listen('8080');

console.log('Server is running at port 8080...');