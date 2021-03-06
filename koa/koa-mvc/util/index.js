const mysql = require('mysql')

const pool = mysql.createPool({
  user: 'root',
  password: '123456',
  host: 'localhost',
  port: 3306,
  database: 'chat'
})

let query = (sql, val) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connect) => {
      if(err) {
        return reject(err)
      }
      console.log(sql, val, '--------');
      
      connect.query(sql, val, (err, rows) => {
        if (err) reject(err)
        else resolve(rows)
        connect.release()
      })
    })
  })
}

module.exports = {
  query
}
