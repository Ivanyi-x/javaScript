/* 
   判断方法的补充
*/

/* 
   1.hasOwnProperty:对象是否有某一个属于自己的属性 （不是在原型上的属性）
   2.in/for in 操作符 :判断某个属性是否在某个对象或者对象原型上面
   3.instanceof 用于检测构造函数的Prototype,是否出现在某个实例对象的原型链上
   4.isPrototypeOf 用于检测某个对象，是否出现在某个实例对象的原型链上
*/
var obj = {
    name: "why",
    age: 18
}

var info = Object.create(obj, {
    address: {
        value: "北京市",
        enumerable: true
    }
})

// 1.hasOwnProperty方法判断
console.log(info.__proto__);
console.log(info.hasOwnProperty("address")); //true

// 2.in操作符：无论在当前对象还是在原型上的返回都为true
console.log("address" in info); //true

// 3.instanceof
// 封装一个继承的工具类  
function inheritPrototype(SubType, SuperType) {
    SubType.prototype = Object.create(SuperType.prototype)
    Object.defineProperty(SubType.prototype, "constructor", {
        enumerable: false,
        configurable: true,
        weitable: true,
        value: SubType
    })
}
defineProperty(Student, Person)
var stu = new Student()
function Person() {}
function Student() {}
console.log(stu instanceof Student);//true
console.log(stu instanceof Person);//true
console.log(stu instanceof Object);//true