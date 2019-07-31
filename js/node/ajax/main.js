const http = require('http');
const fs = require('fs');
const index = fs.createReadStream('./index.html')

const app = http.createServer((req,res)=>{
    if(req.url == '/'){
        index.pipe(res)
    }
    else if(req.url == '/userinfo'){
        const info = {
            "name" : "张鹏华",
            "desc" : "大丑逼"
        }
        res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf8'
        })
        res.end(JSON.stringify(info))
    }
    else{
        res.end('hello world')
    }
})

app.listen(3000,()=>{
    console.log('running');
    
})