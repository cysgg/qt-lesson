const puppeteer = require('puppeteer')
const $ = require('cheerio')
const url = 'https://www.dongqiudi.com/'
const fs = require('fs')


async function run() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    // await page.setDefaultNavigationTimeout(100000);
    await page.goto(url, {
        waitUntil: 'networkidle2'
    });
    let html = await page.content()
    let wrap = $('.home-wrap', html)
    let List= []
    console.log(wrap.find('.match-list').length);
    
    wrap.find('.match-list').each((i, match) => {
        let date = $(match).find('.date').text().trim()
        let matchList = []
        $(match).find('.match-item').each((index, item) => {
            let time =  $(item).find('.start-min').text()
            let match_type = $(item).find('.round').text()
            let team_a_name = $(item).find('.team-a .teama-name').text()
            let team_a_img = $(item).find('.team-a img').attr('src')
            let team_b_name = $(item).find('.team-b .teamb-name').text()
            let team_b_img = $(item).find('.team-b img').attr('src')
            let score_dom = $(item).find('.vs-score-wrap .score') ||  $(item).find('.vs-score-wrap .feature')
            let score_or_VS = score_dom.text().trim() || 'VS'
            matchList.push({time, match_type, team_a_name, team_a_img, team_b_name, team_b_img, score_or_VS})
        })
        console.log(matchList);
        
        List.push({date, matchList})
    })
    // console.log(List);
    
    // console.log(JSON.stringify(List))
    fs.writeFileSync('./mfwtext.js', JSON.stringify(List), { 'flag': 'a' })
    // books.each(function(){
    //     const price = $('.price-text',this).text()
    //     mysql.add(price)
    //     console.log(price);
    // })
    // await page.waitFor(2000);
    // await page.type('#login_field', '123456')
    // await page.type('#password', '123456')
    // await page.click('input[type="submit"]')
}

run()