/* 
  通过原型和构造函数相结合进行创建
  一般情况下，对象内不写箭头函数
*/


function Person(name,age,hahahha,address) {
    this.name = name
    this.age = age,
    this.hahahha = hahahha,
    this.address = address
}

// 将函数放到原型链中调取时不用再创建新的函数占用内存
Person.prototype.eating = function(){
    console.log(this.name +"在吃东西");
}
Person.prototype.running = function(){
    console.log(this.name+"在做运动")
}

var p1 = new Person("why", 18, 1.88, "北京市")
var p2 = new Person("千层", 8, 1.55, "北京市")
p1.eating()
p2.eating()