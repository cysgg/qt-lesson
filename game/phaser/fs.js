const fs = require('fs')

// I/O 找文件

fs.readFile('./index.html',(err,data)=>{
    if(!err)
        console.log(data.toString());
    
})