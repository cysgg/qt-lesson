## 帧
刷新 60Hz
60次 / 1000ms 16.666 ms / 一次

##
1. 主进程
2. 插件
3. GPU
4. 渲染

## 渲染
1. js
2. http
3. 定时器
4. 事件
5. 页面绘制布局

js 和 页面绘制布局是互斥的
JS 可以改变DOM

## event loop
MacroTask(宏任务) 同步代码 setTimeOut setInterval
MicroTask(微任务) Promise.then() vue.nextTick

宏任务 -> 微任务 -> 渲染 宏任务 -> 渲染 宏任务 -> 微任务 -> 渲染 宏任务 -> 微任务 -> 渲染

任务队列