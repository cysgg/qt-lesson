;const request= require('request');
const Split = {
    downloadFile(url,filepath,ipdefaults = ''){
        let r = request.defaults(ipdefaults?{'proxy': ipdefaults}:{});
        r
            .get(url)
            .on('error', function(err) {
                console.log('err')
            })
            .pipe(fs.createWriteStream(filepath))
    },
    gethtml(url,ipdefaults){
        let r = request.defaults(ipdefaults?{'proxy': ipdefaults}:{});
       
        return new Promise((resolve,reject)=>{
            r
                .get(url)
                .on('error', function(err) {
                    reject(err)
                })
                .on('body', function(data) {
                    resolve(data)
                })
        })
    }
}

module.exports = Split;