 /* 
   创建方式一：通过 new Object()创建
 */
var obj = new Object()
obj.name = "why"
obj.age = 18
obj.running = function() {
    console.log(this.name + '在跑步~');
}

/* 
  创建方式二：字面量形式
*/

var info = {
    name:"haha",
    age:40,
    eating:function(){
        console.log(this.name + '想吃饭');
    }
}

/* 
  对对象属性的操作
*/
var obj ={
    name:"why",
    age:18
}

// 获取属性
console.log(obj.name);

// 给属性赋值
obj.name = "haha"
console.log(obj.name);

// 删除属性
delete obj.name
console.log(obj);


/* 
  对象数据属性描述符
*/
var obj ={
    name:"why",
    age:18
}
Object.defineProperty(obj,"adress",{
    enumerable:true,
    configurable:true,
    value:"北京市",
    writable:true
})


/* 
  存取属性描述符 
  1.隐藏某—个私有属性被希望直接被外界使用和赋值
  2.如果我们希望截获某—个属性它访问和设置值的过程时,也会使用存储属性描述符    
*/
var obj ={
    name:"why",
    age:18
}
Object.defineProperty(obj,"adress",{
    enumerable:true,
    configurable:true,
    get:function(){

    },
    set:function(value){

    }

})

/* 
  定义多个属性描述符
*/
Object.defineProperties(obj,{
    name:{
        numerable:true,
        configurable:true,
        value:"why",
        writable:true
    },
    age:{
        numerable:true,
        configurable:true,
        get:function(){
            return this.age

        },
        set:function(value){
            this.age = value
    
        }
    },
})

/* 
  获取某一特性的属性描述符
*/
console.log(Object.getOwnPropertyDescriptor(obj,"name"));





 