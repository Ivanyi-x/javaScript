var obj1 = {}
var obj2 = new Object()
/* 
   1.在内存中创建一个对象：var moni = {}
   2.this的赋值： this = moni
   3.将Person函数的显示模型prototype赋值给前面创建出来的对象的隐式原型：moni.__prototype = Person.prototype 
*/

function Person() {

}

var p = new Person()

var obj = {
    name:"hahha",
    age:18
}

// Object.prototype
console.log(obj.__proto__);
console.log(Object.prototype);
console.log(obj.__proto__ === Object.prototype);  

// 打印出Object.prototype内容
console.log(Object.getOwnPropertyDescriptors(Object.prototype));

 
















