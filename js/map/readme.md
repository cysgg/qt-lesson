ES6新增了两种数据结构 Set
Map (映射 HashMap) WeakMap () WeakSet()
const W = new Map()
Map 对应于HashMap,这一传统数据结构。has get set 等API

可以遍历 for [key,value] of
Map WeakMap 不一样的地方
key被回收后 WeakMap 找不到了，他是一个弱引用