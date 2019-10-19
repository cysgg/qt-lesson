const koa = require('koa')
const app = new koa()
const router = require('./router/index')

app.use(router.routes()).use(router.allowedMethods())

app.listen(3003, () => {
  console.log('running')
})