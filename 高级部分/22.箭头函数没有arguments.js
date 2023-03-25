var name = "abc"

//案例一：
/* 
  在箭头函数内打印argunments，浏览器报错
  node环境下则会打印出很多东西，因为在node环境中会将箭头函数外再包裹一层,例如：.call({},hdgu,ahs,jsdiao)
*/
var foo =()=>{
    console.log(arguments);

}
foo()  


// 案例二：
/* 
  箭头函数中没有arguments,所以会向上一层作用域中去寻找
*/
function foo(){
    var bar = () =>{
        console.log(arguments); //123
    }
    return bar
}

var fn = foo(123)
fn()

// 案例三：
/* 
  通过es6, rest参数（剩余运算符拿取）
*/
var foo = (num1, num2, ...args)=>{
    console.log(args);
}
foo(10,20,30,40,50)