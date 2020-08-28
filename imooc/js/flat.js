// 拍平
function flat(arr) {
  // 验证 arr 中是否有深层数组，
  const isDeep = arr.some(item => item instanceof Array)
  if (!isDeep) {
    return arr
  }
  // const res = Array.prototype.concat.apply([], arr);
  // const res = Array.prototype.concat.call([], ...arr);
  const res = [].concat(...arr)
  return flat(res); 
}

const res = flat([1, 2, [3, 4, [5, 6]]])

console.log(res)