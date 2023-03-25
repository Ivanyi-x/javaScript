// 闭包引用的AO对象属性销毁
function foo(){
    var name = "hahah"
    var age = "15" //在其变量没有被使用的情况下，js引擎为优化内存环境（腾出更多空间）而自动销毁其变量
    function bar(){
        debugger
        console.log(name);

    }
    return bar
}
foo()()