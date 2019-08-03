// const superagent= require('superagent');
// const split = require('./split')
const request = require('request')
const fs = require('fs')
const axios = require('axios')
const save = require('./save')
const rp = require('request-promise')

// superagent
//     .get('www.baidu.com')
//     .set("X-Forwarded-For" , "10.111.198.90")
//     .then((res,err)=>{
//         if(err){
//             console.log(err);
            
//         }else{
//             console.log(res.text);
            
//         }
//     });

// request.get('https://nodei.co/npm/request.png?downloads=true&downloadRank=true&stars=true')
// .on('error', function(err) {
//   console.log(err)
// })
// .pipe(fs.createWriteStream('doodle.png'))

// var r = request.defaults({'proxy':'http://111.231.140.109:8888'})
// r
//     .get('https://fs.xicidaili.com/images/logo.png')
//     .on('error', function(err) {
//           console.log('err')
//         })
//     .pipe(fs.createWriteStream('logo.png'))

// split
//     .gethtml('https://www.baidu.com','')
//     .then(v=>{ 
//         console.log(v);
//     })

let options = {
    uri: 'https://fs.xicidaili.com/images/logo.png'
}

rp(options)
.then(res=>{
    save.clearFileContent('logo.png')
    save.saveFile('logo.png',res)
    console.log(res.length);
    
})
.catch(err=>{
    console.log('err');
    
})

// rp('http://www.baidu.com')
// .then(data=>{
//     console.log(data);
// })


// axios({
//         methods: 'get',
//         url : 'https://fs.xicidaili.com/images/logo.png',
//         responseType : 'stream',
//         proxy: {
//             host: '127.0.0.1',
//             port: 9000,
//             auth: {
//             username: 'mikeymike',
//             password: 'rapunz3l'
//             }
//           }
//     })
//     .then(res=>{
//         console.log('success');
//         res.data.pipe(fs.createWriteStream('logo.png'))
//         // save.clearFileContent('test.txt')
//         // save.appendFileBuffer('test.txt',res.data)
//     })
//     .catch(err=>{
//         console.log('err');
        
//     })