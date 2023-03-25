/* 
   函数内部有一个显示原型：prototype
   Person原型对象指向顶层对象
*/

function Person() {
    
}
console.log(Person.prototype);// {}
console.log(Object.getOwnPropertyDescriptors(Person.prototype));//内部有一个constructor属性