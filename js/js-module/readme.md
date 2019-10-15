## CommonJS
- exports ===  module.exports  // true
## AMD
异步模块化的一个方案
- AMD = Asynchronous Module Definition
  代表：RequireJS
  RequireJS会先尽早地执行(依赖)模块, 相当于所有的require都被提前了。
  define 定义
  require 引入
## CMD
公共模块加载
代表作 Sea.js Auth 玉伯

共同：
都能异步加载
区别：
1. AMD 会提升所有的require
2. CMD 就会按照代码顺序

## UMD
通用模块加载
AMD + Common.js

运营活动页面 jq