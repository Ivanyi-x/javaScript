var message = 'hello Global'

// 函数父级作用域与其定义位置有关，和其调用的位置无关  

function foo(){
    console.log(message); //hello Global  
}

function bar(){
    var message = 'hello Bar'
    foo()

}

bar()