var mysql = require('mysql')
var config = require('./defaultConfig')

var pooll = mysql.createPool({
    host: config.datebase.HOST,
    user: config.datebase.USERNAME,
    password: config.datebase.PASSWORD,
    database: config.datebase.DATABASE,
    port: config.datebase.PORT
  })

  // 通通以李连杰数据库的方法
  let allServies = {
    query: function (sql, values) {
      return new Promise((resolve, reject) => {
        pooll.getConnection(function (err, connection) {
          if (err) {
            return reject(err)
          } else {
            connection.query(sql, values, (err, rows) => {
              if (err) {
                return reject(err)
              }
              resolve(rows)
              connection.release() //释放连接池
            })
          }
        })
      })
    }
  }

  let getAllUsers = function () {
    let _sql = `select * from users`
    return allServies.query(_sql)
  }

  module.exports = {
    getAllUsers
  }