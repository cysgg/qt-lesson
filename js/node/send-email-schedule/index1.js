const nodeMailer = require('nodemailer')
const fs = require('fs')
const juice = require('juice')
const ejs = require('ejs')

const transporter = nodeMailer.createTransport({
    service : 'qq',
    port:465, //smtp
    secureConnection : true,
    auth:{
        user : '279709624@qq.com',
        pass : 'rtkxmbcflxaebiai'
    }
})
const html = fs.readFileSync('./template/index.ejs','utf8');
const template = ejs.compile(html)
const afterHtml = template({
    userName : 'cysgg'
})
const afterWithInCss = juice(afterHtml)
console.log(afterWithInCss);

transporter.sendMail({
    to: ['1264691012@qq.com','279709624@qq.com'],
    html:afterWithInCss,
    from:'279709624@qq.com',
    subject:'来自陈大帅哥的邮件轰炸'
},(err,info)=>{
    if(err){
        console.log(err);
    }
    console.log(info);
})