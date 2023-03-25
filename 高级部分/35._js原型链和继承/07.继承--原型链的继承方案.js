/* 
  父类：公共属性和方法
*/
function Person() {
    this.name = "why",
    this.friends = []
}
//在函数内增加公用方法可以放到原型里面
Person.prototype.eating = function () {
    console.log(this.name + 'eating');
    
}


/* 
  子类：特有的属性和方法  
*/
function Student() {
    this.sno = 111
    
}
// 子类继承父类 
// Student.prototype = new Person() 
var p = new Person()
Student.prototype = p

Student.prototype.studying = function() {
    console.log(this.name + "studing");
    
} 
var stu = new Student()
console.log(stu.name); 
stu.eating()



/* 
   原型链实现继承的弊端：
*/
//  1.打印stu对象，继承的属性看不到
console.log(stu.name);

//  2.创建出两个对象
var stu1 = new Student()
var stu2 = new Student()

// 直接修改对象上的属性，是给本对象添加了一个新的属性
stu1.name = "千层"
console.log(stu2.name);//why

// 获取引用，修改引用中的值,会相互影响
stu.friends.push("hahha")

console.log(stu1.friends);//[ 'hahha' ]
console.log(stu2.friends);//[ 'hahha' ]

// 3.在前面实现类的过程中都没有传递参数
var stu3 = new Student("chuanna",111)

