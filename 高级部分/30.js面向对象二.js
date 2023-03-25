var obj={
    name:"why",
    age:18
}

//1.禁止对象添加新的属性 preventExtensions：预防扩展
Object.preventExtensions(obj)
obj.height = 180
console.log(obj);//{ name: 'why', age: 18 }

//2.禁止对象配置/删除里面的属性 seal：密封
Object.seal(obj)

// 3.让属性不可以修改 freeze:冻结
Object.freeze(obj)

/* 
  创建多个对象
*/
// 工厂模式--一种常见的设计模式，通常会有一个工厂方法，通过该方法可以产生想要的对象
// 缺点：获取不到对象最真实的类型

function createPerson (name,age,height,address) {
    var p = {}
    p.name = name
    p.age = age
    p.height = height
    p.address = address
    p.eating = function(){
        console.log(this.name +"在吃东西");
    }
    p.running = function(){
        console.log(this.name+"在做运动")
    }
    return p
}

var p1 = createPerson("千层",2,1.11,"信阳市")
var p2 = createPerson("土豆",2,1.11,"新乡市")
var p3 = createPerson("芋圆",2,1.11,"上海市")
