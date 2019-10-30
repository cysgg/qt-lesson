const puppeteer = require('puppeteer')
const $ = require('cheerio')
const baseUrl = 'https://www.mafengwo.cn'
const fs = require('fs')


async function run() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    // await page.setDefaultNavigationTimeout(100000);
    await page.goto(baseUrl + '/gonglve/mdd-sc-0-0-1.html#list', {
        waitUntil: 'networkidle2'
    });
    let html = await page.content()
    let wrap = $('.gl_wrap[style!="display: none;"]', html)
    console.log(wrap.length)
    let list = []
    wrap.each((i, v) => {
        let obj = {}
        let type = $(v).find('h3 a').text()
        let typeUrl = $(v).find('h3 a').attr('href')
        obj.type = type
        obj.typeUrl = typeUrl
        let li = $(v).find('ol li')
        let typeList = []
        li.each((index, item) => {
            let obj1 = {}
            let li_url = $(item).find('a').attr('href')
            let text = $(item).find('a').text().trim()
            let li_text = text.slice(0, text.indexOf('('))
            obj1.li_url = li_url
            obj1.li_text = li_text
            typeList.push(obj1)
        })
        obj.typeList = typeList
        list.push(obj)
    })
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].typeList.length; j++) {
            await getItem(list[i].typeList[j], list[i].typeList[j].li_url, page)
        }
    }
    
    // console.log(JSON.stringify(list));
    
    fs.writeFileSync('./mfwtext.js', JSON.stringify(list), { 'flag': 'a' })
}

async function getItem (obj, url, page) {
    await page.goto(baseUrl + url, {
        waitUntil: 'networkidle2'
    });
    let html = await page.content()
    console.log(url)
    let wrap = $('.gonglve_wrap', html)
    let gl_list = []
    wrap.find('.gl_list').each((i, v) => {
        let name = $(v).find('a').attr('title')
        let imgUrl = $(v).find('a img').attr('src')
        let updata_time = $(v).find('.update_time').text().trim().slice(5)
        let down_cout = $(v).find('.down_cout p').text().trim().slice(0, -2)
        gl_list.push({name, imgUrl, updata_time, down_cout})
    })
    obj.gl_list = gl_list
}

run()