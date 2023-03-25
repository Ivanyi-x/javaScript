/*  
    对象的原型(隐式原型)
    JavaScript当中每个对象都有一个特殊的内置属性[prototype]]，这个特殊的对象可以指向另外一个对象。
*/
var obj = {name:"why"}
var info = {}
//早期的ECMA是没有规范如何去查看[[prototype]]

// 给对象中提供了一个属性，可以让我们去查看一下这个原型对象（由浏览器提供）
// __oroto__
console.log(obj.__proto__);
console.log(info.__proto__);

var obj = {name:"why",__proto__:{}}

// ES5之后提供Object.getPrototypeOf
console.log(Object.getPrototypeOf(obj));


/* 
  原型的作用：
      当我们从一个对象中获取某一个属性，它会触发[[get]]操作
         1.在当前对象中去查找对应的属性,如果找到就直接使用
         2.如果没有找到,那么会沿着它的原型去查找-[[prototype]]
*/
// 将想要的数据放到原型里面而不是直接放入对象内是为了实现继承
obj.__proto__.age = 18
console.log(obj.age);//18
