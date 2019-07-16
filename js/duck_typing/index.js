// console.log('鸭子模型');
const http = require('http');

http.createServer((req,res)=>{
    res.end('hh')
}).listen(3000,()=>{
    console.log('running');
    
})