var obj={
    name:"haha"
}

//对象里面有一个__proto__对象：隐式原型对象
console.log(obj.__proto__);



// Foo是一个函数，那么它会有一个显示原型对象：Foo.prototype
// Foo.prototype来自哪里?  创建了一个函数,Foo.prototype = {constructor:Foo}

// Foo是一个对象,那么它会有一个隐式原型对象:Foo.__proto__
// Foo.__proto__来自哪里?  new Function()   Foo.__proto__ = Function.prototype
// Function.prototype = {constructor:Function}

// 相当于var Foo = new Function()
function Foo() {
    
}
console.log(Foo.prototype === Foo.__proto__);
console.log(Foo.prototype.constructor);
console.log(Foo.__proto__.constructor);
