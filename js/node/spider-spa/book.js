const puppeteer = require('puppeteer')
const $ = require('cheerio')
const url = 'https://juejin.im/books'


async function run() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    // await page.setDefaultNavigationTimeout(100000);
    await page.goto(url, {
        waitUntil: 'networkidle2'
    });
    const html = await page.content()
    const books =  $('.info',html)
    books.each(function(){
        const price = $('.price-text',this).text()
        mysql.add(price)
        console.log(price);
    })
    // await page.waitFor(2000);
    // await page.type('#login_field', '123456')
    // await page.type('#password', '123456')
    // await page.click('input[type="submit"]')
}

run()