/* 
  柯里化优点：将上一层代码的逻辑进行复用
  将add()函数转化为sum()函数的过程就是柯里化
  
*/
function add(a,b,c){
    return a+b+c

}
var result = add(10,20,30)
console.log(result);

function sum(a){
    return function(b){
        return function(c){
            return a+b+c

        }
    }
}
var result1 = sum(10)(20)(30)
console.log(result1);

// 简化柯里化代码
var sum2 = a => b => c=> a + b + c 
console.log(sum2(10)(20)(30));

/* 
  为什么需要柯里化？
    1.在函数编程中，希望一个函数处理的问题尽可能单一，而不是将一大堆的处理过程交给一个函数

*/

/* 柯里化逻辑的复用 */
function makeAdder(count) {
    return function(num){
        return count+num
    }
    
}
// var result = makeAdder(5)(10)
// console.log(result);
var adder5 = makeAdder(5)
adder5(10)
