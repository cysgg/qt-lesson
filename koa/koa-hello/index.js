const Koa = require('koa')
const KoaBody = require('koa-body')
const path = require('path')
const app = new Koa()

app.use(KoaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200 * 1024 * 1024,
    keepExtensions: true,
    uploadDir: path.join(__dirname, '/static/images')
  }
}))

app.use(async ctx => {
  const method = ctx.method
  const path = ctx.path
  console.log(method, path);
  if (method === 'GET' && path === '/') {
    ctx.body = `
    <form action="/upload" enctype="multipart/form-data" method="post">
      <input type="file" name="avatar" id="">
      <input type="submit" value="tijao">
    </form>
    `
  } else if (method === 'POST' && path === '/upload') {
    console.log(ctx.request.files)
  }
})

app.listen(3001, () => {
  console.log('running')
})