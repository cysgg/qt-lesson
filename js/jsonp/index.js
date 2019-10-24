const http = require('http');

http.createServer((req, res) => {
  let url = require('url').parse(req.url)
  console.log(url)
 if (url.pathname = '/api/books') {
    const methodName = url.query.split('=')[1]
    let list = [ { book: 'book2'} ];
    res.end(`${methodName}(${JSON.stringify(list)})`);
  }
})
.listen(3002, () => {
  console.log('server is running http://localhost:3002');
})
