Function.prototype.myapply = function(thisArg,ArryArg){
    //获取要执行的函数
    var fn = this
    // 处理接收到的指定指向this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    // 赋值执行
    thisArg.fn = fn
    ArryArg = ArryArg || []
    var result = thisArg.fn(...ArryArg) 
    delete thisArg.fn
    
    return result
     
      
}
function foo(num1,num2){
    console.log("foo函数被调用",this,num1,num2);
    return num1+num2  

}
foo.myapply(123,[20,30])

