/* 
  1.创建一个全新的对象
  2.会被执行的prototypel连接
  2.这个新对象会绑定到函数的this上
*/

// 通过一个new关键字调用一个函数时，这个this就是在调用函数时创建的对象
// this=创建出来的对象
// 其绑定过程就是new绑定
function Person(name,age){
    console.log(this);//Person
    this.name = name
    this.age = age
}

var p1 = new Person("why",18)
console.log(p1.name, p1.age,this); //"why",18,window

var p2 = new Person("look",30)
console.log(p2.name, p2.age,this);//"look",30,window