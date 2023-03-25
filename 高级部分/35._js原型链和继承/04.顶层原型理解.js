var obj={name:"why"}
/* 
  原型链的顶层对象就是Object的原型对象
*/
// 找到哪一层之后会停止查找呢？
// 字面量对象的原型是[Object:null prototype]{}
// [Object:null prototype]{} 就是顶层的原型
console.log(obj.__proto__);

// obj.__proto__ =>[Object:null prototype] {}  
console.log(obj.__proto__.__proto__);