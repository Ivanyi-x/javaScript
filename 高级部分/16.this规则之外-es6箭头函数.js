// 箭头函数
// 不绑定this，从外层作用域寻找
// var name = "why"
// var foo = () =>{
//     console.log(this);
//  }
 
// foo(); // window
// var obj = {foo:foo}
// obj.foo() // window
// foo.call("abc") // window


// 应用场景
var obj ={
    data: [],
    getData:function(){
        // 发送网络请求并将结果放到上面的data属性中
        // 不使用箭头函数的解决方案:
        var _this = this
        setTimeout(function(){
          
            var result = ["abc","hgj","opi"]
            _this.data = result
        },2000)

        // 使用箭头函数之后
        setTimeout(()=>{
            // 因为箭头函数不绑定this,所以this直接去上层作用域查找
            var result = ["abc","hgj","opi"]
            this.data = result
        },2000) 
    }
}
obj.getData()
// console.log(obj.data);
// console.log(obj.data);
// console.log(函数内部_thisthis);
// console.log("函数内部_this："+_this);
 