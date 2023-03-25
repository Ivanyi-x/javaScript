/* 
  规则优先级
*/
// 1.默认绑定优先级最低
// 2.显式绑定高于隐式绑定 
var obj ={
    name:"obj",
    // get方法的缩写:
    foo:function(){
        console.log(this);//"abc"
    }, 
    // get foo(){
    //     console.log(this);
    // },


}
obj.foo.call('abc')
obj.foo.apply('abc')


// 3.bind优先级高于隐式绑定
function foo(){
  console.log(this);//{"aaa"}
}
var obj = {
  name:"obj",
  foo:foo.bind("aaa")
}
obj.foo()

// 4.new绑定优先级高于隐式绑定
var obj={
    name:"obj",
    foo:function(){
        console.log(this);
    }
}
// 隐式绑定优先级高于new绑定时输出结果：obj
// new绑定优先级高于隐式绑定时输出结果：foo()
var p = new obj.foo() //foo