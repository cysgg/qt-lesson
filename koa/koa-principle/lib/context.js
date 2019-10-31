let proto = {}

function defineGetter (prop, name) { // 参数分别是代理的对象和对象上的属性
  proto.__defineGetter__(name, function () {
    return this[prop][name]
  })
}

defineGetter('request', 'url')
defineGetter('request', 'path')

module.exports = proto