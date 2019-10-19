const koaRouter = require('koa-router')
const registerController = require('../controller/register')
const router = new koaRouter()

router.post('/login', async (ctx) => {

})
router.get('/register', registerController)

module.exports =  router