// 前端代码
function handleResponse(response) {
  console.log('response', response);
  console.log(`name ${response.name}, age ${response.age}`)
}

var script = document.createElement('script');
script.src = "http://127.0.0.1:5500/imooc/js/jsondata.js?callback=handleResponse";
document.body.appendChild(script);

// 终于弄懂了jsonp