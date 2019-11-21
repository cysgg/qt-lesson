const puppeteer = require('puppeteer')
const $ = require('cheerio')
const baseUrl = 'https://www.mafengwo.cn/i/16884268.html'
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
    await page.content()
    await page.waitFor(2000);
    await page.evaluate(() => window.scrollTo(0,172111));
    await page.waitFor(10000)
    let html = await page.content()
    let content = $('#note-reply-bottomReplyApi', html)
    let items = content.find('.mfw-cmt')
    let list = []
    items.each((i ,v) => {
        let userImg = $(v).find('.mcmt-info .mcmt-photo img').attr('src')
        let userNameAndAddr = $(v).find('.mcmt-info .mcmt-user a.name').text()
        let userLevel = $(v).find('.mcmt-info .mcmt-user a.level').text()
        let quote =  $(v).find('.mcmt-con-wrap .mcmt-con .mcmt-quote p img').attr('src')
        let content = $(v).find('.mcmt-con-wrap .mcmt-con .mcmt-word p').attr('data-content')
        let signComment = $(v).find('.mcmt-con-wrap .mcmt-tag img') && $(v).find('.mcmt-con-wrap .mcmt-tag img').attr('src')
        let time =  $(v).find('.mcmt-bot .time').text()
        list.push({userImg, userNameAndAddr, userLevel, quote, content, signComment, time})
    })
    console.log(1 + '' + list.length)
    // browser.close()
    fs.writeFileSync('./mfwtext.js', JSON.stringify(list), { 'flag': 'a' })
}
run()