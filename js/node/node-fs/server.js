let http = require('http') // 引入
let fs = require('fs')

let server = http.createServer()
server.on('request', (req, res) => {
  let url = req.url
  if (url === '/') {
    fs.readFile('./resource/index.html', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('你要的资源不存在， 请稍候再试！')
      } else {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(data)
      }
    })
  } else if (url === '/img') {
    fs.readFile('./resource/hy.jpg', (err, data) => {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('你要的资源不存在， 请稍候再试！')
      } else {
        res.setHeader('Content-Type', 'image/JPEG;')
        res.end(data)
      }
    })
  }
})

server.listen(3000, () => {
  console.log('running');
  
})