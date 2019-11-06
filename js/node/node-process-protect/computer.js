const http = require('http');
const { fork } = require('child_process')

const httpServer = http.createServer((req, res) => {
  if (req.url === '/computer') {
    const childComputer = fork('./fock-computer.js')
    childComputer.send('open')
    childComputer.on('message', sum => {
      res.end(sum)
    })
    console.log(1)
  } else {
    res.end('ok')
  }
})
httpServer.listen(3333, () => {
  console.log('server is running 3333');
})
