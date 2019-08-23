/**
 * 
 * @param {RegExp} reg 
 * @param {String} str 
 */

function checkByRegExp(reg,str) {
    return reg.test(str)
}


const curry = require('./b')

let checkCellPhone = curry(checkByRegExp)(/1[3-9]\d{9}/)

console.log(checkCellPhone('18379376564'));

console.log(checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,'123@@qq.com'));
