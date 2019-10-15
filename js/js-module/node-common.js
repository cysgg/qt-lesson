console.log(exports === module.exports);
let counter = 3
let obj = {
  name: 'David'
}
function changeValue () {
  counter++
  obj.name = 'Tom'
}
exports = {
  counter
}

exports.counter = counter