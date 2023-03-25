// 封装一个继承的工具类  
function inheritPrototype(SubType,SuperType) {
    SubType.prototype = Object.create(SuperType.prototype)
/* 
  constructor 属性返回 Object 的构造函数（用于创建实例对象）。注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串
*/
Object.defineProperty(SubType.prototype,"constructor",{
    enumerable:false,
    configurable:true,
    weitable:true,
    value:SubType
})
    
}

function Person(name,age,friends) {
    this.name = name
    this.age = age
    this.friends = friends
    
}
Person.prototype.running = function(){
    console.log("running");
}
Person.prototype.eating = function () {
    console.log("eating");
    
}


function Student(name,age,friends,sno,score) {
    Person.call(this,name,age,friends)
    this.sno = sno
    this.score = score
    
}

inheritPrototype(Student,Person)

Student.prototype.studying = function() {
    console.log("studying");
    
}
var s = new Student("why",18,["aaa"],111,100)
console.log(s);
s.studying() 
s.running()
s.eating()