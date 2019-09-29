## Map

1. {} / Map 区别
    1. Map中的key是有序的，而添加到对象中的则不是
    2. {} key 只接受 字符串和symbol ， Map的Key可以是任意值

2. Map / WeakMap 区别
    1. WeakMap key 只接受对象
    2. weakMap key 所引用的对象 是弱引用

弱引用： 不确保引用的对象不会被垃圾回收器回收掉

## 垃圾回收机制
1. 引用计数