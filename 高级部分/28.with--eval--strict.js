 /* 
   with语句可以形成自己的作用域 不建议使用，容易混淆
 */
var obj = {name:'why',age:'18',message:'obj message'}
function foo() {
    function bar() {
        with(obj) {
            console.log(message);
        }
    }
    bar()
}
foo()


/* 
  eval是一个特殊的函数，它可以将传入的字符串当作javaScript代码来运行
      可读性较差，（代码的可读性是高质量代码的重要原则）
      eval是一个字符串，那么有可能在执行的过程中被刻意篡改，那么可能会造成被攻击的风险;
      eval的执行必须经过JS解释器，不能被JS引擎优化;

*/
var evalString = `var message = "Hello World";console.log(message) `
eval(evalString) //Hello World

console.log(message);

/* 
  严格模式："use scrict"(书写在js文件顶部)
  严格模式对正常的JavaScript语义进行了一些限制:
  严格模式通过抛出错误来消除一些原有的静默( silent)错误;
  严格模式让JS引擎在执行代码时可以进行更多的优化(不需要对一些特殊的语法进行处理);
  严格模式禁用了在ECMAScript未来版本中可能会定义的一些语法;
     
*/

// 严格模式粒度化：在函数内开启


/* 
 严格模式限制
 1.无法意外的创建全局变量
 2.严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常
 3.严格模式下试图删除不可删除的属性
 4.严格模式不允许函数参数有相同的名称
 5.不允许0开头的八进制语法
 6.在严格模式下，不允许使用with
 7.在严格模式下，eval不再为上层引用变量
 8.严格模式下，this绑定不会默认转成对象

*/
