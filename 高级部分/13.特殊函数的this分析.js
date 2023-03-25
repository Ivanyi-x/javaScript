/* 
  定时器函数
*/
// 其内部函数指向看如何调用，一般都是独立调用
// setTimeout(function(){
//     console.log(this); //window
// },2000)



 /* 
    监听点击 
 */
const boxDiv = document.querySelector('.box');
boxDiv.onclick = function() {    
    console.log(this); // <div class="box"></div>
    // 相当于隐式绑定
    // boxDiv.onlick()
}
boxDiv.addEventListener('click',function(){
    console.log(this);//<div class="box"></div>
})

/* 
  数组：forEach/map/fillter/find
       可以将this指向当作第二个参数传递
*/
var eat = ["cake","milk","yoghurt"]
eat.forEach(function(item){
    console.log(item,this);//this指向window
})

// 进行指向固定
var eat = ["cake","milk","yoghurt"]
// forEach函数中可将this指向当作第二个参数传递
eat.forEach(function(item){
    console.log(item,this);//this指向"abc"
},"abc")


