Function.prototype.mybind = function(thisArg, ...argArray){
    // 1.获取真实需要调用的函数
    var fn = this

    // 2.绑定this
    thisArg = (thisArg !==undefined && thisArg != null )?Object(thisArg):window
    // 3.赋值执行
    function proxyFn(...args){
        thisArg.fn = fn
        var finalArgs = [...argArray, ...args]
        var result = thisArg.fn(...finalArgs)
        delete thisArg.fn
        
        //4.返回结果
        return result

    }

    return proxyFn


}

function foo(){
    console.log("foo被执行",this);
}

function sun(num1,num2,num3,num4){
    console.log(num1,num2,num3,num4);
}