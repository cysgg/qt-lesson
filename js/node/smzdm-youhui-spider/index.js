const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

https.get('https://www.smzdm.com/youhui/',(res)=>{
    res.setEncoding('utf-8')
    let chunks = ''
    res.on('data',(chunk)=>{
        chunks += chunk
    })
    res.on('end',()=>{
        const $ = cheerio.load(chunks,{
            decodeEntities : false
        })
        let lists = []
        $('.list.list_preferential').each((index,ele)=>{
            let tlt = $(ele).find('.itemName a').text()
            const price = $(ele).find('.red').text()
            const img = $(ele).find('.picLeft img').attr('src')
            lists.push({tlt,price,img});
            saveImg('./data',img)
        })
        saveList('./data/lists.json',lists)
        
    })
    
})

function saveImg(imgDir,imgUrl){
    https.get(imgUrl,res=>{
        res.setEncoding('binary')
        const imgName = path.basename(imgUrl)
        res.pipe(fs.createWriteStream(path.join(__dirname,imgDir,imgName)))
    })
}

function saveList(filepath,list){
    fs.writeFile(path.join(__dirname,filepath),JSON.stringify(list),{flag : 'w'},(err)=>{
        if(err)
            console.log('err');
        
    })
}