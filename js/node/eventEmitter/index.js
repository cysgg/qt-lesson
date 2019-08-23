const Event = require('events')
const request = require('request')
const inquirer = require('inquirer')
const fs = require('fs')
const ev = new Event()

ev.on('choose',function(songs,keywords){
    inquirer.prompt([{
        type: 'list',
        name : 'song',
        message : `共${songs.length}首，回车选择`,
        choices : songs.map((s,i)=>{
            return `${i}:${s.name}`
        })
    }]).then(choice=>{
        const {song} = choice
        const index = parseInt(song.split(':')[0])
        const selected = songs[index]
        console.log(selected);
        const {id} = selected
        request({
            url : `http://neteasecloudmusicapi.zhaoboy.com/song/url?id=${id}`,
            json:true
        },(err,res,body)=>{
            console.log(body);
            const {url} = body.data[0]
            if(!url){
                console.log('没有找到该歌曲');
                return
                
            }else{
                console.log(url);
                request(url).pipe(fs.createWriteStream(`${decodeURIComponent(keywords)}.mp3`))
            }
        })
    })
})

ev.on('search', keywards => {
    let wardsUrl = encodeURIComponent(keywards)
    request({
        url: 'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + wardsUrl,
        json: true
    }, (err, res, body) => {
        if(body.result && body.result.songs){
            ev.emit('choose',body.result.songs,wardsUrl)
        }else{
            console.log(`没有${wardsUrl}的信息`);
            
        }
        body.result.songs.forEach(item=>{
            console.log(item.name)
        })
    })
})

function main() {
    const argv = process.argv.slice(2)
    console.log(argv);
    ev.emit('search', argv[0])
}
main()