const koa=require('koa')
const app =new koa();

//通过app.use注册中间件
//中间件本质上是一个函数
//context 上下文：当前请求的相关信息都在里面    
app.use((context)=>{

    //对象的解构 
    //等于const request = context.request
    const{request:req}=context;
    const{url}=req;

    if(url==='/user'){
        context.response.body='abcde';
        return 
    }

    context.body='??'
});

//开启一个http服务
//接受http请求 并做处理 处理完后响应
app.listen(3000,()=>{
    console.log("启动成功");
})

console.log('dddd')

console.log('dddd')