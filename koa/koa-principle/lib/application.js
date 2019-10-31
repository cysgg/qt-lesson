let http = require('http')
let EventEmitter = require('events')

let context = require('./context')
let response = require('./response')
let request = require('./request')

class Koa extends EventEmitter {
  constructor () {
    super()
    this.fn
    this.context = context
    this.request =request
    this.response = response
  }
  createContext (req, res) {
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)

    ctx.req = request.req = req
    ctx.res = request.res = res

    request.ctx = response.ctx = ctx

    request.response = response
    response.request = request

    return ctx
  }
  handleRequest (req, res) { // 处理请求
    let ctx = this.createContext(req, res)
    this.fn(ctx)
    res.end(ctx.body)
  }
  use (fn) {
    this.fn = fn
  }
  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Koa