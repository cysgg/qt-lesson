// curry 函数, 返回一个新函数， 逐渐的消化， 返回一个新的函数

function curry(fn, len = fn.length) {
    return _curry.call(this,fn,len)
    
}

function _curry(fn,len,...args) {
    return function (...params) {
        let _args = [...args,...params]
        if(_args.length >= len){
            return fn.apply(this,_args)
        }
        return _curry.call(this,fn,len,..._args)
    }
}

let _fn = curry(function (a, b, c) {
    return a + b + c
})
console.log(_fn(1)(2)(3));

module.exports = curry;