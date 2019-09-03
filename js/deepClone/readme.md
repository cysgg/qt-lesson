- 为什么所有公司都靠这道题
    内部有性能优化的快点
- 性能优化
    1. Chrome 自带的性能优化工具
    console.warn console.error()
    console.time('for-in') console.timeEnd('for-in') 
    顺序执行 瞬间执行
    2. for-in 性能不太好 用 for 代替吧 while 最快
- 浅拷贝 返回的对象 并不是独立的新的对象
    跟直观理解有差异
- 深拷贝 JSON.parse(JSON.stringify(obj))
    JSON.parse(JSON.stringify(obj))
    会返回一个对象 复杂的 function(){}
    解决大部分问题

- 递归
    大的问题 ，由多个 类似的问题构成，并且有一个退出条件
    clone 多层JSON嵌套 由内到外的一层层解决