// 测试
function add(a,b,c){
    return a + b + c
 
}


// 柯里化函数实现
function myCoriization(fn){
    function curried(...args) {
        // 判断当前传入参数个数
        // 当已经传入的参数 大于等于 需要的参数是，就执行函数
        if (args.length >= fn.length) {
            return fn.apply(this,args)
             
        }else {
            // 没有达到个数时，需要返回一个新的函数，继续来接收参数
            function curried2(...args2) {
                //接收参数后需要递归调用curried来检查函数的个数是否达到
                return curried.apply(this, args.concat(args2))
            }
            return curried2
        }
    }
    return curried
}


var coriAdd = myCoriization(add)
console.log(coriAdd(10)(20)(30));
  
