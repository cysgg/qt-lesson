;const superagent= require('superagent');

const split = {
    url : '',
    getHtml(htmlurl = this.url,callback){
        superagent.get(htmlurl).end((err, res) => {
            if (err) {
              console.log(`爬取失败 - ${err}`)
            } else {
                callback(res);
            }
          });
    },
    getLoopHtml(htmlurl,start,end,callback){ //htmlurl = `looparea`
        let loopnum = end-start+1;
        for(let i = 0 ; i < loopnum; i++){
            let looparea = start + i;
            superagent.get(htmlurl.replace('looparea',looparea)).end((err, res) => {
                if (err) {
                  console.log(`爬取失败 - ${err}`)
                } else {
                    callback(res,i);
                }
            });
        }
    }
}

module.exports = split;