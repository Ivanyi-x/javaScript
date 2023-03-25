/* 
  构造函数也叫构造器，通常是我们在创建对象时会调用的函数
    构造函数也是一个普通的函数，从表现形式来说,和千千万万个普通的函数没有任何区别;
    那么如果这么一个普通的函数被使用new操作符来调用了，那么这个函数就称之为是一个构造函数
*/
//规范：构造函数的首字母一般是大写
function Person(name,age,height,address) {
    this.name = name
    this.age = age
    this.height = height
    this.address = address
    this.eating = function(){
        console.log(this.name +"在吃东西");
    }
    this.running = function(){
        console.log(this.name+"在做运动")
    }

} 

// 通过new去调用，那么这个函数就是一个构造函数
/* 
  如果一个函数被使用new操作符调用了，那么它会执行如下操作∶
  1.在内存中创建一个新的对象（空对象）;
  2.这个对象内部的[[Iprototype]]属性会被赋值为该构造函数的prototype属性;（后面详细讲）;
  3.构造函数内部的this，会指向创建出来的新对象﹔
  4.执行函数的内部代码（函数体代码）;
  5.如果构造函数没有返回非空对象，则返回创建出来的新对象﹔

*/
var p1 = new Person("千层", 2, 1.11, "信阳市")

var p2 = new Person("土豆",2,1.11,"新乡市")
console.log(p1);
console.log(p1.__proto__.constructor.name);//拿到p1具体类型

