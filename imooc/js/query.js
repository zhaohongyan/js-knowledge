// 获取当前页面url参数

// 传统方式
// function query(name) {
//   const search = location.search.substr(1);
//   // a=10&b=20&c=30
//   const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
//   const res = search.match(reg);
//   if (res) {
//     return res[2];
//   }
//   return null;
// }

// URLSearchParams
// function query(name) {
//   const p = new URLSearchParams(location.search);
//   return p.get(name)
// }

// 将url参数解析成对象
// function queryToObject() {
//   const res = {};
//   const search = location.search.substr(1);
//   const plist = search.split('&')
//   plist.forEach(paramStr => {
//     const item = paramStr.split('=');
//     const key = item[0];
//     const val = item[1];
//     res[key] = val;
//   })
//   return res;
// }

function queryToObject () {
  const res = {};
  const pList = new URLSearchParams(location.search);
  pList.forEach((val, key) => {
    res[key] = val;
  })
  return res;
}