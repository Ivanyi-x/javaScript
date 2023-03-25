function foo(){
    var a = b = 100 
    /* 
      var a = 100;
      b = 100
    
    */
}
foo()
console.log(a);//a is not defined
console.log(b);//100


// // 声明提升在函数运行之前已经被处理
// var a = 100
// function foo(){
//     console.log(a) //undegind
//     return;
//     var a = 100
// }
// foo()



// function foo(){
//     console.log(n);//undefind
//     var n = 200;
//     console.log(n);//200
// }
// var n = 100
// foo()



// // let 存在过程提升，如果全局中与块级中同时声明某个变量，打印遵循就近原则
// let a = 1
// function foo() {   
//     console.log(a);
//     let a = 2
// }
// foo()


// var n = 1
// function foo() {   
//    n=200
// }
// foo() //200 

// function foo() {   
//    n=200
// }
// foo() //200 


// function foo() {   
//    n=200
// }
// foo() //200 

// function foo() {   
//     console.log(a);
//     let a = 2
// }
// foo()//语法报错
