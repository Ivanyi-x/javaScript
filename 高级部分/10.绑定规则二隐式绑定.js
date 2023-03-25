/* 
   隐式绑定: object.fn()
   object对象会被js引擎绑定到fn函数中的this里面

*/

// 案例一：
function foo(){
    console.log(this);
}
 var obj = {
    name : "why",
    foo:foo
 }

 obj.foo() //obj



//  案例二：
// var obj = {
//     name:"why",
//     eating:function(){
//         console.log(this.name + '在吃东西');
//     },
//     running:function(){
//         console.log(this.name + '在跑步');
//     }
// }
// obj.eating() //obj对象  why在吃东西

// var fn = obj.eating()
// fn()  //this指向全局，但无法拿到obj内name数据数据   在吃东西



// 案例三
var obj1 ={
    name:"obj1",
    foo:function(){
        console.log(this);
    }
}

var obj2={
    name:"obj2",
    bar:obj1.foo
}
obj2.bar()//obj1