const obj1 = { a: 100, b: { x: 100, y: 200 }};
const obj2 = { a: 10, b: { x: 100, y: 200 } };

const isObject = (obj) => {
  return typeof obj === 'object' && obj !== null;
}

function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型
    return obj1 === obj2;
  }
  if (obj1 === obj2) {
    return true; 
  }

  // 两个都是对象或数组，而且不相等
  const obj1keys = Object.keys(obj1);
  const obj2keys = Object.keys(obj2);
  if (obj1keys.length !== obj2keys.length) {
    return false;
  } 

  // 以obj1为基准，和obj2依次递归比较
  for (const key in obj1) {
    // 比较当前 key 的 val  —— 递归！！！
    const res = isEqual(obj1[key], obj2[key]);
    if (!res) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(obj1, obj2))