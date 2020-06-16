var arr = [1, 2, 3];
Object.defineProperty(arr, 'value', {
  writable: false
});

arr.push(4);

console.log(arr)