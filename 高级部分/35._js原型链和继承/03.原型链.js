var obj ={
    name:"why",
    age:18
}

// 进行[[ get ]]操作：
//  1.在当前对象中查找属性
//  2.如果没有找到就去原型(__protr__对象上查找) 
// 一层一层向上查找直到顶层
console.log(obj.address); 
obj.__proto__ ={

}
obj.__proto__.__proto__={

}
obj.__proto__.__proto__.__proto__={
    address:"北京市"
}