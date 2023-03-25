  var obj = {
    name:"why",
    age:18
  }
  Object.defineProperty(obj,"address",{
    value:"北京市"
  })
  console.log(obj);//address属性在浏览器中可以打印出来，但依然是不可枚举的，浏览器只是起到了显示作用方便我们调试
  