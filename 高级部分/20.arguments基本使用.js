/* 
  aeguments是一个对应于 传递给函数的参数 的 类数组（array-like）对象
  无法使用forEach，map等函数

*/ 
function foo(num1,num2,num3) {
        // 类数组对象中：长得像一个数组，本事是一个对象：arguments
        console.log(arguments);

        // 三个常见的对arguments的操作
        //1.获取参数的长度
        console.log(arguments.length);

        // 2.根据索引值获取某一个参数
        console.log(arguments[2]);

        // 3.callee获取当前arguments所在的函数
        console.log(arguments.callee);
}

foo(10,20,30,40,50)