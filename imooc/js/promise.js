// + then 正常返回 resolved， 里面有报错则返回rejected
// + catch 正常返回 resolved， 里面有报错则返回rejected
// + resolved 触发后续 then  回调
// + rejected 触发后续 catch 回调

// Promise.resolve().then(() => {
//   console.log(1)
// }).catch(() => {
//   console.log(2)
// }).then(() => {
//   console.log(3)
// })

// 1 3

// Promise.resolve().then(() => {
//   console.log(1)
//   throw new Error('error1')
// }).catch(() => {
//   console.log(2)
// }).then(() => {
//   console.log(3)
// })

// 1 2 3

// Promise.resolve().then(() => {
//   console.log(1)
//   throw new Error('error1')
// }).catch(() => {
//   console.log(2)
// }).catch(() => {
//   console.log(3)
// })

// 1 2
