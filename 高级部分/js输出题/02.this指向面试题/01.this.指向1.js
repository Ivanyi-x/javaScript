var name = "window";
 var Person = {
    name:"person",
    sayName:function(){
        console.log(this.name);
    }
 };

 function sayName(){
    var aaa = person.sayName;
    aaa(); //window
    person.sayName();//person
    (person.sayName)();//person
    (b=person.sayName)();//window：赋值表达式(独立函数调用)  间接函数引用
 }

 sayName();