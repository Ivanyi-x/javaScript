//  显式绑定call/apply/bind
 
 function foo(){
    console.log("函数被调用了",this);
 }

 foo()//直接调用，可以调用成功this指向window

//  直接调用与通过call/apply调用的不同在于this的绑定不同
// foo直接调用指向全局对象(winow)
// call/apply调用指定this的绑定对象

foo.apply()      //this指向obj
foo.call()      //this指向obj
foo.apply("aaa")      //this指向aaa


// 1.call/apply在执行函数时，可以明确的绑定this,这个绑定规则为显示绑定
// 2.call/apply的区别
function sum(num1,num2,num3){
   console.log(num1+num2+num3,this);

}
sum.call("call",10,20,30)     //所传参数直接书写
sum.apply("apply",[10,20,30])    //所传参数需以数组的格式书写
   
// 默认绑定和显示绑定冲突时：显示绑定优先级高

function bar(){
   console.log(this);
}
//  bind
// 一个函数总是显示的绑定到一个对象上
var newBar = bar.bind("aaa")
newBar()//this指向"aaa" 



 