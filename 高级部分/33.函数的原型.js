  /* 
     函数内的原型称之为显式原型
       将函数内的原型赋值为对象的隐式原型
       在这个过程中我们可以修改函数的显示原型
  
  */
  
  
  
  function foo() {
    
  }
//   1.constructor属性
//foo.prototype这个对象中有一个constructor属性   
//prototype.constructor :构造函数本身
  console.log(foo.prototype);
  console.log(Object.getOwnPropertyDescriptors(foo.prototype));
  Object.defineProperty(foo.prototype,"constructor",{
    enumerable:true,    //可枚举
    configurable:true,  //配置
    writable:true,      //写
    value:"hahahha"     //值
  })
  console.log(foo.prototype);

//   2.添加自己的属性
foo.prototype.name = "why"
foo.prototype.age = 18
var f1 = new foo()
console.log(f1.name,f1.age);


//3.直接修改整个prototype对象
foo.prototype={
    name:"why",
    age:18,
    height:1.88
}
var f1 = new foo()
console.log(f1.name,f1.age);

// 真实开发中我们可以通过Object.definProperty方式添加constructor
Object.defineProperty(foo.prototype,"constructor",{
    enumerable:false,
    configurable:true,
    writable:true,
    value:foo
})
    