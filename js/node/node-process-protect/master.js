const cpus = require('os').cpus()
const net = require('net')
const { fork } = require('child_process')

console.log(cpus.length)

for (let i = 0; i < cpus.length; i++) {
  createWork()
}

function createWork () {
  const work = fork('./work.js')
  work.on('message', msg => {
    const { act } = msg
    if (act === 'dead') {
      createWork()
    }
  })
}