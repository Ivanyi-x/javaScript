//第一道题
//1.
function anwer(){
    twoSum(nums, target);
    

}
function twoSum (nums, target) {
    if (twoSum.length === 1) return twoSum[0]
    if (twoSum.length === 2) {
      return [twoSum[0], twoSum[1]]
    } else {
      for (var i = 0; i < nums.length; ++i) {
        for (var j = i + 1; j < nums.length; ++j) {
          if (nums[i] + nums[j] == target) {
            return [i, j]
          }
        }
      }
    }
};
  let inputarr = [2, 7, 11, 15]
  let arr2 = twoSum(inputarr, 9)
//   //[2,7]
//   //2.第一大题 第二小题
//    var pushStack = function (array) {
//     //模拟栈
//     let stack = []
//     if (array.length >= 13) {
//       for (var i = 0; i < 13; i++) {
//         stack.unshift(array[i])
//       }
//     } else {
//       for (var i = 0; i < array.length; i++) {
//         stack.unshift(array[i])
//       }
//     }
//     //弹出栈 大于4个 弹出四个 小于四个全部弹出
//     if (stack.length > 4) {
//       for (var i = 0; i < 4; i++) {
//         stack.shift()
//       }
//     } else {
//       for (var i = 0; i < stack.length; i++) {
//         stack.shift()
//       }
//     }
//     return stack
//   }
//   //todo  将结果传递给下一步骤是如何传递的？ 这个你自己摸索下 思路就是这样子
//   //todo 下一题的时候 敲敲桌子啥的
//   var data = pushStack([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
//   // console.log(data);
//   //[9, 8, 7, 6, 5,4, 3, 2, 1]
//   // 第一大题 第三小问
//   var sort = function (arr, tag) {
//     var newArr = arr.sort((a, b) => {
//       return a - b
//     })
//     //存在情况
//     for (var i = 0; i < newArr.length; i++) {
//       if (tag === newArr[i]) {
//         return i
//       }
//     }
//     //不存在
//     newArr.push(tag)
//     var arr2 = newArr.sort((a, b) => {
//       return a - b
//     })
//     for (var i = 0; i < arr2.length; i++) {
//       if (tag === arr2[i]) {
//         return i
//       }
//     }
//   }
//   let arr = [4, 3, 2, 15]
//   console.log(sort(arr, 96));
//   //输出为4