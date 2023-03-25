/* 
   call函数实现
   1.函数调用call()可以直接获取该函数内的数据
   2.可以为该函数绑定this指向及自动判断指定的this指向类型,传入undefined,NAN则为window
   3.call()中可以传入参数:传入第一个值为绑定指向,之后为参数
*/

Function.prototype.mycall = function(thisArgs, ...args){
  // 1.获取需要执行的函数
  // console.log(this); 
  // console.log("调用mycall");
  var fn = this

  thisArgs = thisArgs ? Object(thisArgs) : window
  thisArgs.fn = fn
  var result = thisArgs.fn(...args)
  return result



}

function foo(num1,num2){
  console.log("调用foo啊",this,num1,num2);
  
}
// foo.call()
foo.mycall(123,5,8)