- callback
    回头一笑
    addEventListener(event_type,callback)
    定义时 不执行
    事件发生时，会触发回调函数 异步

-fs 文件模块
    异步是需要花时间的

- 操作系统 
    addeventListener 事件监听
    I/O操作 CPU(运算和指令集) 内存 外部存储设备 典型的慢操作
    fs.readFile(path,'utf8,callback)