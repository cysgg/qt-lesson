const split = require('./split')
const cheerio = require('cheerio')
const save = require('./save')

save.clearFileContent('ip.txt')

list = [
    'http://www.xicidaili.com/nt/',
    'http://www.xicidaili.com/nn/',
    'http://www.xicidaili.com/wn/',
    'http://www.xicidaili.com/wt/'
]
list.forEach(item => {
    split.getHtml(item, res => {
        let $ = cheerio.load(res.text);
        $('table#ip_list tr').each((idx, ele) => {
            if(!idx) return;
            let oneip = {}
            let index = idx;
            oneip[index] = {}
            $(ele).find('td').each((idx, ele) => {
                if (idx > 0 && idx < 4) {
                    let ty = ''
                    if(idx == 1){
                        ty = 'ip'
                    }else if(idx == 2){
                        ty = 'port'
                    }else if(idx == 3){
                        ty = 'addr'
                    }
                    oneip[index][ty]=$(ele).text().trim()
                }
            })
            // save.save.appendFileBuffer('ip.txt',JSON.stringify(oneip))
            save.addFileContent('ip.txt',JSON.stringify(oneip))
        })
    })
})
