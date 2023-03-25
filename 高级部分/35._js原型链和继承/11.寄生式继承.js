/* 
  寄生式工厂继承的实现
  原型式继承+工厂函数一起进行了一个实现
*/

var personObj={
    running: function () {
        console.log("running");
    }
}
// var student = Object.create(personobj)
// 工厂函数
function createStudent(name) {
    var stu = Object.create(personObj)
    stu.name = name
    stu.studying = function() {
        console.log("studying");
    }  
    return stu  
}

var stuObj = createStudent("why")
var stuObj1 = createStudent("kobe")
var stuObj2 = createStudent("james")