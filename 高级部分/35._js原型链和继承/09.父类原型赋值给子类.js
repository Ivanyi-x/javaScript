 /* 
  此方法由社区提供而非官方文档
*/
/* 
  父类：公共属性和方法
*/
function Person(name,age,friends) {
    // this = stu
    this.name = name,
    this.age = age,
    this.friends = friends
}
//在函数内增加公用方法可以放到原型里面
Person.prototype.eating = function () {
    console.log(this.name + 'eating');
    
}

/* 
  子类：特有的属性和方法  
*/
function Student(name,age,friends,sno) {
    // 通过call方法指定this，传入参数
    Person.call(this,name,age,friends)
    /* 
      相当于call函数的实现
      this.name = name,
      this.age = age,
      this.friends = friends
    */
    this.sno = 111
    
}
// 直接将父类的原型赋值给子类，作为子类的原型（这个做法并不提倡，因为如果其他子类指向父类时原先的子类添加的内容其他子类也可以访问到）
// 1.会增大父类原型内存 2.子类可以访问其他子类不具备隐私性 
Student.prototype = Person.prototype


Student.prototype.studying = function() {
    console.log(this.name + "studing");
    
} 

var stu = new Student("why",18,["ooo"],555)
console.log(stu); //Person { name: 'why', age: 18, friends: [ 'ooo' ], sno: 111 }
// stu.eating()

// 构造函数继承也有弊端
// 1.Person函数至少被调用了两次
// 2.原型对象会多出很多属性，这些属性其实是没有必要存在的