class HashRouter {
  constructor() {

    this.routers = {}
    window.addEventListener('hashchange', this.load.bind(this))
  }

  load() {
    let hash = location.hash.slice(1),
      handler;
    //container 显示相应的page内容
    // 由外界解决
    
    //仅限于对象自身的属性，而不去查找原型链的属性
    if(this.routers.hasOwnProperty(hash)){
      handler = this.routers[hash];
    }else{
      handler = this.routers['404'];
    }
    try{
      handler.apply(this);
    }catch(err){
      console.error(err);
      (this.routers['error'] || function () {}).call(this,err)
    }
    
  }

  register(hash, callback = function () {}) {
    this.routers[hash] = callback
  }

  registerNotFound(callback = function(){}){
    this.routers['404'] = callback
  }

  registerError(callback = function(){}){
    this.routers['error'] = callback
  }
}
