/* 
  原型式继承函数
*/
 var obj={
    name:"why",
    age:age
}

// 原型式继承函数  最终目的：student对象的原型指向了person对象
// 方法一：
function careateObject(p) {
    var newObj = {}
    Object.setPrototypeOf(newObj,o)
    return newObj
    
}

// 方法二：
function createObject2(p) {
    function Fn() {}
    Fn.prototype = p
    var newObj = new Fn()
    return newObj 
}


// 方法三：ECMA新出的一个函数方法
var info = Object.create(obj)


var info = careateObject(obj)
console.log(info);
console.log(info.__proto__);
