柯里化

编写一个函数 校验电话号码，邮箱

通用函数有好处 接收2个参数
可以裂变吗
checkPhone = checkByRegExp(phoneReg)
checkEmail = checkByRegExp(emailReg)

函数式编程

- 返回函数 每次只接受一个参数
- 返回的函数运行，闭包，可以得到最初参数的数量，最后的参数时，就运行完成，    否则继续返回函数

- 分函数收集参数的过程
  return function(){ 闭包 fn.len fn闭合

  }

  require module.exports es5
  模块化方案