var script = document.createElement('script');
// script.src = "http://127.0.0.1:5500/imooc/js/jsondata.js?callback=handleResponse";
script.src = 'http://localhost:8080/api/test?a=1&b=2&callback=handleResponse'
document.body.appendChild(script);

function handleResponse(response) {
  console.log('response', response);
  console.log(`name ${response.name}, age ${response.age}`)
}

// 终于弄懂了jsonp