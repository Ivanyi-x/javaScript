// js语法允许函数内部再定义函数
function foo(){
    function bar(){
        console.log("bar");
       
    }

    return bar //返回函数内部定义的函数
}

var fn = foo()
//console.log(fn);
fn()//调用函数

// //////////////////////////////////////////////////////////////////////////////////////////////////

function adder(count){
    var count = 111;
    function add(num){
        return count + num
    }
    function sub(num){
        return count - num
    }

    return {add,sub}
}

var {add,sub} = adder(100)
console.log(add(8),sub(9));

// ////////////////////////////////////////////////////////////////////////////////////////////////
 




