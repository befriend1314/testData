const Koa = require('koa')
const config = require('./config')
const ModelDb = require('./db')
const Router = require('koa-router');
const cors = require('koa-cors')
const app =  new Koa()
const router = new Router()


// app.use(async (ctx) => {
//     let data = await ModelDb.query()
//     ctx.body = data
    
// })

// 提供一个/getJson接口
router.get('/getJson', async ctx => {
    // 后端允许cors跨域请求
    // await cors();
    // 返回给前端的数据
    let data = await ModelDb.query()
    ctx.body = data

});
app.use(cors())


// 将koa和两个中间件连起来
app.use(router.routes()).use(router.allowedMethods());


app.listen(config.port)