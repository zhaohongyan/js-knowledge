function muli(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}

const nums = [1, 2, 3];

// nums.forEach(async (item) => {
//   const res = await muli(item);
//   console.log(res);
// });

// !(async function (params) {
//   for (const i of nums) {
//     const res = await muli(i);
//     console.log(res)
//   }
// })();
