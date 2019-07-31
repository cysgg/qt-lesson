const split = require('./split')
const save = require('./save')
const cheerio = require('cheerio')

// superagent.get().end((err, res) => {
//   if (err) {
//     console.log(`爬取失败 - ${err}`)
//   } else {
    
//   }
// });
let url = 'http://www.nitianxieshen.com/2.html'
split.Split.getHtml(url,res=>{
  savetxt(res)
})


let savetxt = (res) => {
  let $ = cheerio.load(res.text);
  txtlines = $('div.post_entry').contents();
  let textarr = [];
  [].forEach.call(txtlines,item=>{
    if(typeof item.data == 'string'){
      textarr.push(item.data.trim())
    }
  })
  save.savefile('逆天邪神2.txt',textarr)
};
