// 一个字符
let phoneReg = /^1[3456789]\d{9}$/
let phonetest = /1[3-9][0-9]{9}/
let test = phonetest.test("我的手机号13888888888存下哈")
console.log(test);
