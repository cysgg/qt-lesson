const userModel = require('../model/user-info')

const register = async _ => {
  console.log('注册')
  let user = _.query
  console.log(user)
  userModel.insertData(user)
  let insertRes = await userModel.insertData(user)
  console.log('插入数据库的结果', insertRes)
  _.body = insertRes
  
}
module.exports = register;