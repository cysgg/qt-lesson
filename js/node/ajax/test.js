const http = require('http')

const options = {
    url : 'https://www.baidu.com',
    header: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.'
      }
}

http.get(options,(res)=>{
    const chunks = [];

    res.on('data',(chunk)=>{
        chunks.push(chunk)
    })
    res.on('end',()=>{
        console.log(chunks);
        
    })
})