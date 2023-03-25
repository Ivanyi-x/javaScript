function foo(num1,num2) {
    // 1. 自己遍历：遍历arguments中所有的元素，放入一个新的数组中
    var newArr = []
    for (var i = 0; i < arguments.length; i++){
        newArr.push(arguments[i] * 10)
    }
    console.log(newArr);

    // 2. 拿到slice方法进行转换   
    var newArr2 = Array.prototype.slice.call(arguments)
    console.log(newArr2);
    
}

// 获取到元素且将所传参数×10
foo(10, 20, 30, 40, 50)

/*   
   Arryay中的slice实现
*/
Array.prototype.hyslice = function(start,end){
    var arr = this
    start = start || 0
    end = end || arr.length
    var newArray = []
    for(var i = start; i < end; i++){
        newArray.push(arr[i])

    }
    return newArray
}
var newArray = Array.prototype.hyslice.call(["aaa","bbb","ccc"],1,3)
console.log(newArray);