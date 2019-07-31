const fs = require('fs')
fs
    //创建可读流
    .createReadStream('./sample.txt') 
    //管道 process.stdout
    .pipe(process.stdout) //输出设备的一种 交互