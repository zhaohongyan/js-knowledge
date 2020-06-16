// 冒泡排序

// 具体算法描述如下：
// <1>.比较相邻的元素。如果第一个比第二个大，就交换它们两个；
// <2>.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
// <3>.针对所有的元素重复以上的步骤，除了最后一个；
// <4>.重复步骤1~3，直到排序完成。

// JavaScript代码实现：
// function bubbleSort(arr) {
//   for (let i=0; i<arr.length; i++) {
//     if (arr[i] > arr[i+1]) {
//       let temp = arr[i+1];
//       arr[i+1] = arr[i];
//       arr[i] = temp;
//     }
//   }
//   return arr;
// }
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //相邻元素两两对比
        var temp = arr[j + 1]; //元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
var result = bubbleSort([1, 5, 3, 6, 2, 7]);

console.log(result);
