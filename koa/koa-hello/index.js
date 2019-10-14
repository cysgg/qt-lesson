const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  const method = ctx.method
  const path = ctx.path
})

app.listen(3001, () => {
  console.log('running')
})