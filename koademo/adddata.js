const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
// 连接数据库：[ip/域名]:[端口号(默认27017)]/[数据库(db)]
mongoose.connect('mongodb://localhost:27017/koademo')
// 定义模型
const Cat = mongoose.model('pic', { name: String })

app.use(async () => {
    // 实例化一个实体对象
    const kitty = new Cat({ name: 'Zildjian' })
    // 执行插入操作
    const res = await kitty.save()
    // 打印返回结果
    console.log(res)
})

app.listen(8000)

module.exports = app