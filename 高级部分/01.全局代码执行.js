var name = 'why'
console.log(num1);

var num1 = 20
var num2 = 30
var result = num1 + num2

// 1.代码在被解析的过程中，v8引擎内部会帮助我们创建一个对象:globalObject 
// 2.运行代码
//    2.1.v8为了执行代码，v8引擎内部会有一个执行上下文栈（函数调用栈）
//      2.2. 因为我们执行的是全局代码，为了全局代码能够正常的执行，需要创建 全局执行上下文



// var globalObject = {
//     String:'类',
//     Date:'类',
//     setTimeout: '函数',
//     window: 'globalObject',
//     name:'undefined',
//     num1:'undefined',
//     num2:'undefined',
//     result:'undefined'
//   }

console.log(result);

console.log(window);