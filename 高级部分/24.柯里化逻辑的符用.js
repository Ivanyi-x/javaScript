// 打印日志：时间、bug、内容
function log(data,type,message) {
    console.log(`[${data.getHours()}:${data.getMinutes()}][${type}]:[${message}]`);
}
log(new Date(),"DEBGU","查找轮播图的bug")
log(new Date(),"DEBGU","查找菜单的bug")
log(new Date(),"DEBGU","查找信息的bug")
log(new Date(),"DEBGU","查找购物车的bug")


// 柯里化优化(定制化)
var log = data=>type=>message=>{
    console.log(`[${data.getHours()}:${data.getMinutes()}][${type}]:[${message}]`);
}
// 每次调用只需要传入两个参数就可以获取全部信息
var nowLog = log(new Date())
nowLog("DEBGU")("查找内容的bug")
nowLog("DEBGU")("查找导航的bug")

// 更加精简
var proLog = log(new Date())("DEBGU")
proLog("查找搜索的bug")
proLog("查找细节的bug")