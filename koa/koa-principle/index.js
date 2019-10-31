// const http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('hello, world')
// })

// server.listen(3000, _ => {
//   console.log('running')
// })

// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello world'
// })

// app.listen(3000)

let Koa = require('./lib/application')

let app = new Koa()

app.use((ctx) => {
  console.log(crx.req.url);
  console.log(crx.request.req.url);
  console.log(crx.req.url);
  console.log();
  
  
  res.end('hello world')
})

app.listen(3000, () => {
  console.log('running')
})