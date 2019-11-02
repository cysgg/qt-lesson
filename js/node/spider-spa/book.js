const puppeteer = require('puppeteer')
const $ = require('cheerio')
const baseUrl = 'https://www.mafengwo.cn/hotel/'
const fs = require('fs')


async function run() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    // await page.setDefaultNavigationTimeout(100000);
    await page.goto(baseUrl, {
        waitUntil: 'networkidle2'
    });
    let html = await page.content()
    let content = $('.tab-fav', html)
    let ul = content.find('._j_tab_content ul')
    let aList = content.find('.favList a')
    let list = []
    aList.each((i, v) => {
        let text = $(v).text().trim()
        list.push({tabName: text})
    })
    ul.each((i, v) => {
        let li = $(v).find('li')
        let arr = []
        li.each((index, li) => {
            let imgUrl = $(li).find('img').attr('src') || $(li).find('img').attr('data-src')
            let name = $(li).find('.info p[class!="eng"]').text().trim()
            let eng = $(li).find('.info p.eng').text().trim()
            let score = $(li).find('.fraction').text().trim()
            arr.push({imgUrl, name, eng, score})
        })
        list[i].imgList = arr
    })
    console.log(JSON.stringify(list))
    fs.writeFileSync('./mfwtext.js', JSON.stringify(list), { 'flag': 'a' })
}
run()