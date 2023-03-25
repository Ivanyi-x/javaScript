// 函数和方法的区别：
// 函数 function: 独立的function，称之为函数
function foo(){}

//方法method:当我们的一个函数属于某一个对象时，将这个函数称之为对象的方法
var obj ={
    foo:function() {}
} 
obj.foo()


// ////////////////////////////数组中的常见高阶函数///////////////////////////////////////////////////
 // 定义一个数组
var nums = [10,15,30,20,50]


//filter 过滤，true返回，false不会返回值
var newNums = nums.filter(function(item){
    return item % 2 ===  0
 }
 )
 console.log(newNums);


//map 映射，将数组内函数进行修改
var newNums = nums.map(function(item){
    return item * 10
 }
 )
 console.log(newNums);


//forEach: 迭代，没有返回值，对数组内元素进行遍历
nums.forEach(function(item){
    console.log(item);
})


// reduce:累加
// nums.reduce()   prevValue:参数，初始值与返回数的累加 
prevValue:0 , item= 10
prevValue:10 , item= 15
prevValue:25 , item= 30
prevValue:55 , item= 20
prevValue:75 , item= 50
var total = nums.reduce((prevValue,item)=>{
    return prevValue + item
},0) 
console.log(total);


// find:精准查找对象
var firend = [
    {name:"千层", age:2},
    {name:"土豆", age:1},
    {name:"芋泥", age:21},
    {name:"奶冻", age:0},
    
]
var findFriend = firend.find((item)=>{
    return item.name="千层"

}) 
console.log(findFriend);
//findIndex:精准查找其对象的索引值
var findFriend = firend.findIndex((item)=>{
    return item.name="千层"

}) 
console.log(findFriend);




