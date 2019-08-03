const fs = require('fs')
const path = require('path')

const Save = {
    saveFile(filepath, text) {
        fs.writeFile(path.join(__dirname, filepath), text, err => {
            if (err) {
                console.log('写入文件失败');

            } else {
                console.log('写入文件成功');
            }
        })
    },
    addFileContent(filepath, text) {
        fs.writeFile(path.join(__dirname, filepath), text, {
            'flag': 'a+'
        }, err => {
            if (err) {
                console.log('写入文件失败');

            } else {
                console.log('写入文件成功');
            }
        })
    },
    appendFileBuffer(filepath, text) {
        fs.appendFile(filepath, text, err => {
            if (err) {
                console.log('写入文件失败');

            } else {
                console.log('写入文件成功');
            }
        })
    },
    clearFileContent(filePath){
        fs.writeFile(path.join(__dirname, filePath),'',{'flag': 'w+'},err=>{
            if (err) 
                console.log('清空失败');
            else
                console.log('清空完成');
        })
    }
}

module.exports = Save