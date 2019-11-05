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
    let content = $('.not-cont', html)
    let ul = content.find('ul')
    let li = ul.find('li')
    let list = []
    console.log(li.length)
    li.each((i, v) => {
        let region = $(v).find('h2').text().trim()
        let travelList = []
        $(v).find('a').each((index, item) => {
            let travelName = $(item).text().trim()
            travelList.push(travelName)
        })
        list.push({region, travelList})
    })
    console.log(JSON.stringify(list));
    
    fs.writeFileSync('./mfwtext.js', JSON.stringify(list), { 'flag': 'a' })
}
run()