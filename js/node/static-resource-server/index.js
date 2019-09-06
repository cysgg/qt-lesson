const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req,res)=>{
    console.log(req.url);
    let regUrl = req.url
    if(/^\/static\//.test(regUrl)){
        staticServer(req,res)
        return false;
    }
    fs.readFile('./index.html','binary',(err,file)=>{
        res.write(file,'binary')
        res.end()
    })
})
.listen(3000,res=>{
    console.log('running');
    
})

function staticServer(req,res){
    const reqUrl = req.url;
    const filePath = path.join(__dirname,reqUrl)
    fs.exists(filePath,exists=>{
        if(exists){
            fs.readFile(filePath,'binary',(err,file)=>{
                res.write(file,'binary')
                res.end()
            })
        }else{
            res.writeHead(404)
            res.end()
            return false;
        }
    })
}