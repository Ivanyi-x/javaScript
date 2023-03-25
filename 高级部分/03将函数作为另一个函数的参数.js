//将函数作为另一个函数的参数

// function foo(aa){
//     aa()
// }

// function bar(){
//     console.log("bar");
// }

// foo(bar)



// 通过函数作为另一个函数的参数来进行加减乘除的运算
function calc (num1,num2,calcFun){
    console.log(calcFun(num1,num2))


}

function add(num1,num2){
    return num1 + num2
}
function sub(num1,num2){
    return num1 - num2
}
function mul(num1,num2){
    return num1 * num2
}

var n = 20
var m = 30
calc(n,m,add)
