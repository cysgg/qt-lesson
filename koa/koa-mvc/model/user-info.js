// 注册
const { query } = require('../util/index.js')
const md5 = require('md5')
const insertData = val => {
  console.log(val)
  // 数据库
  let sql = 'insert into user_info(name, password) value (?, ?)'
  // 哈希算法
  // 输出固定的 不可逆 同样的输入 同样的输出
  // 
  return query(sql, [val.name, md5(val.password)])
}

module.exports = {
  insertData
}