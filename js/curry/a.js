function sum(a,b,c){ //一次性
    return a + b + c
}

let _sum = curry(sum)
let a = _sum(1)
let b = a(2)
b(3)

function curry(fn) {
    
}