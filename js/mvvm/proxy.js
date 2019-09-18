var proxy = new Proxy({},{
  get (obj,prop) {
    console.log('get操作')
    return obj[prop]
  },
  set(obj,prop,value){
    console.log('set操作')
    obj[prop] = value
  }
})
proxy.time = 35
console.log(proxy.time);
