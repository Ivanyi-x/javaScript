/* 
   箭头函数基础写法
*/
()=>{}

// 1.编写箭头函数
// 1.1 ():参数
// 1.2 =>:箭头
// 1.3 {}：函数执行体  
var foo = (num1,um2,num3) => {

}

// 高阶函数在使用时，也可以传入箭头函数 
var nums = [10,20,30,40,50]
nums.forEach((item,indenx)=>{
    console.log(item,indenx);
})

// 箭头函数常见简写：
// 简写一：只有一个参数的情况下，()可以省略
nums.forEach(item=>{
    console.log(item);
})


// 简写二：如果函数执行只有一行代码，那么{}也可以省略
// 它会默认将这行代码的执行结果作为返回值
nums.forEach(item => console.log(item)) 
var number = nums.filter(item => item % 2 === 0)
console.log(number);

//filter/map/reduce
var result = nums.filter(item => item % 2 === 0)
                 .map(item => item*10)
                 .reduce((preValue,item) => preValue + item)
console.log(result);
                   
//  简写三：只有一个箭头函数，一行代码，返回一个对象
var bar = ()=> ({name:"why",age:"18"}) 
