const Singleton = (function () {
    //闭包
    let instance = null
    return function () {
        if(instance){
            return instance
        }
        return instance = this
    }
})()
const a = new Singleton();
const b = new Singleton();

// 实例 return 单例
console.log(a === b);
console.log(a.__proto__ === b.__proto__);
console.log(a.toString(), b.toString());
console.log(a.toString() === b.toString());
console.log(a.constructor === b.constructor);