// 函数绑定规则
// (独立函数调用)独立调用时，this指向全局（window）

// 案例一：
function foo(){
    console.log(this)//window
}
foo()


// 案例二:其函数在被调用时都是独立的函数
function one(){
    console.log(this);
}
function two(){
    console.log(this);
    one()
}
function three(){
    console.log(this);
    two()
}
three()

// 案例三：
var obj = {
    name :"why",
    foo:function(){
        console.log(this);
    }
}

// obj.foo()
var bar = obj.foo
bar() //window   