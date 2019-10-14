const Koa = require('koa')
const student = new Koa();
const manage = new Koa();

// 中间件 request -> middleWare1 -> middleWare2 -> ... -> response
student.use(async (ctx, next) => {
  console.log(ctx.path, ctx.query)
  ctx.body = 'hello world'
  console.log('middleWare3');
  await next();
  console.log('middleWare1');
})

student.use(async (ctx, next) => {
  console.log(ctx.path, ctx.query)
  ctx.body = 'hello world'
  console.log('middleWare2');
})


student.listen(3000, () => {
  console.log('running!')
})
