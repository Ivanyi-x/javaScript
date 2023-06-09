var name = 'window'


var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

person1.foo1(); // person1(隐式绑定 )
person1.foo1.call(person2); //person2  (显式绑定优先级大于隐式绑定)

person1.foo2(); //window （不绑定作用域，上层作用域是全局）
person1.foo2.call(person2); //window 箭头函数，去上层作用域寻找指向

person1.foo3()(); //window 独立函数调用
person1.foo3.call(person2)(); // window 独立函数调用
person1.foo3().call(person2); //person2 person2 person2

person1.foo4()(); //person1 箭头函数不绑定this,上层作用域this是person1
person1.foo4.call(person2)();//person2 上层作用域被显示绑定了person1
person1.foo4().call(person2); //person1 上层找到person1