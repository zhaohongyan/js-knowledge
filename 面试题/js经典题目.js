// 知识点：作用域
// for(var i = 0; i < 4; i++){
// 	setTimeout(function(){
// 		console.log(i)
// 	}, 1000)			
// }

// 4 4 4 4

// for(var n = 0; n < 4; n++){
// 	(function(m){
// 		setTimeout(function(){
// 			console.log(m)
// 		})
// 	})(n)
// }

// 0 1 2 3 

// for(let i=0; i<4; i++){		
// 	setTimeout(function(){
// 		console.log(i)
// 	}, 1000)			
// }

// 0 1 2 3

// 清除空字符串
// var a = ' iii  ooo  '
// var b = a.replace(/\s*/g, '')
// console.log(a)
// console.log(b)

// 数组去重
// 延伸： 找出重复次数最多的
var arr = [0, 2, 3, 3, 4, 2]
var result = []

// 1.
// var obj = {}
// for(var i = 0; i < arr.length; i++){
// 	if(!obj[arr[i]]){
// 		obj[arr[i]] = 1
// 		result.push(arr[i])
// 	}
// }
// console.log(obj)

// 2.
// for (var i = 0; i < arr.length; i++) {
//   if (result.indexOf(arr[i]) < 0) {
//     result.push(arr[i])
//   }
// }

// 3.
// var result = [...new Set(arr)];
// var result = Array.from(new Set(arr));
// console.log(result)

// 字符串中出现次数最多的字符
// var str = "wwwwwwwwwwwwwhjfdjfksfh"
// var obj = {}
// for (var i = 0; i < str.length; i++) {
//   if (!obj[str[i]]) {
//     obj[str[i]] = 1
//   } else {
//     obj[str[i]]++
//   }
// }

// var max = 0;
// var index = ''
// for (var i in obj) {
//   if (obj[i] > max) {
//     max = obj[i]
//     index = i
//   }
// }

// console.log(max, index)
// console.log(obj)

// a = 10;
// (function a() { // 闭包，块级作用域
//   console.log(a);
//   var a = 100;
//   console.log(a);
// })();