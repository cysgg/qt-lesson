import program from 'commander'
import install from './install' // es6 的模块化方案


program.command('install').description('install template')
.alias('i').action(() => {
  install()
})
console.log('program');

program.parse(process.argv)