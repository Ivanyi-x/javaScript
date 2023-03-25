/* 
   call函数实现
   1.函数调用call()可以直接获取该函数内的数据
   2.可以为该函数绑定this指向及自动判断指定的this指向类型,传入undefined,NAN则为window
   3.call()中可以传入参数:传入第一个值为绑定指向,之后为参数
*/

Function.prototype.mycall = function(thisArg, ...args){
    // 1.获取需要被执行的函数
    var fn = this

    // 2.对thisArg转成对象类型（防止他传入的是非对象类型）,若传入数据无值,则指向window
    thisArg = thisArg ? Object(thisArg): window

    // 3.调用需要被执行的函数
    thisArg.fn = fn
    var result = thisArg.fn(...args)
    delete thisArg.fn
    
    // 4.将最终结果返回
    return result
}

function foo(){
    console.log("foo函数被执行", this);
}

foo()
foo.call("abc")
foo.mycall("abc")