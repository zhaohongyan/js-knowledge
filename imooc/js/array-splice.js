/**
 * splice 剪接 非纯函数, 会改变原数组
 * @params (start:number, deleteCount:number, ...items:number[])
 * @return (number[]) 剪切的值
 */

// splice() ：该方法向或者从数组中添加或者删除项目，返回被删除的项目。
// splice（index, howmany, item1,...itemX）

// slice(start,end) 纯函数

//  let arr = [1, 2, 3, 4, 5];

//  let arr1 = arr.slice()
//  let arr2 = arr.slice(2)
//  let arr3 = arr.slice(2, 4)
//  let arr4 = arr.slice(-2)

// const spliceRes = arr.splice(0, 2, 5, 6);