const router = require('koa-router')()
const userService = require('../controllers/mysqlConfig')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async function (ctx, next) {
  console.log('1')
  let userInfo = await userService.getAllUsers()
  console.log('打印结果', JSON.stringify(userInfo))
  ctx.body = 'this is a users/bar response'
})

module.exports = router
