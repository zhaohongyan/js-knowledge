console.log('ajax')

// xhr.open true-异步 false-同步

// const xhrGET = new XMLHttpRequest();
// xhr.open('GET', './list.json', true)
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(JSON.parse(xhr.responseText))
//       alert(xhr.responseText)
//     }
//   }
// }
// xhr.send(null)

// const xhrPOST = new XMLHttpRequest();
// xhrPOST.open('POST', './login', true)
// xhrPOST.onreadystatechange = function () {
//   if (xhrPOST.readyState === 4) {
//     if (xhrPOST.status === 200) {
//       console.log(JSON.parse(xhrPOST.responseText))
//       alert(xhrPOST.responseText)
//     }
//   }
// }
// const postData = {
//   username: 'zhangsan',
//   password: 'xxx'
// }
// xhrPOST.send(JSON.stringify(postData))