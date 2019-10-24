const crypto = require('crypto')
// api 请求 携带 token
//  localStorage 独立

// sha256 === md5
let abc = 'hello world'
const sign = crypto.createHmac('sha256', 'key').update(abc).digest('base64')
console.log(sign);
