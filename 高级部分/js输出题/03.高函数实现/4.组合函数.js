function myComponse(...fn) {
    var length = fn.length
    for(var i=0;i<length;i++){
        if(typeof fn[i] !=='function'){
            throw new TypeError("需要函数类型")

        }

    }
    function compose(...args) {
        var index =0
        var result = length ? fn[index].apply(this,args):args
        while (++index < length) {
            result = fn[index].call(this,result)
        }   
        return result      
    }
    return compose 
    
}

function double(num){
    return num*2
 }
 function square(num){
    return num**2
}
var newFn = myComponse(double,square)
console.log(newFn(10));
