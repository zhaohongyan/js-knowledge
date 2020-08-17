let obj1 = {
  name: "xxx",
  age: 30,
  arr: [1, 2, 3, 4],
  address: {
    city: "beijing",
  },
};

let obj2 = cloneDeep(obj1);
obj2.address.city = "shanghai";
obj2.arr[0] = 9;
console.log(obj1.address.city);
console.log(obj1.arr[0]);
/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
function cloneDeep(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (let key in obj) {
    // 保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用 ！！！
      result[key] = cloneDeep(obj[key]);
    }
  }

  return result;
}
