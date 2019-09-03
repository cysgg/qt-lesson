let obj = {
    a: 1,
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
}

function clone(target) {
    if (typeof target === 'object') {
        return cloneObj(target)
    }else{
        return target
    }
}

function cloneObj(target) {
    let cloneTarget = {};
    for (const key in target) {
        cloneTarget[key] = clone(target[key])
    }
    return cloneTarget
}

let obj2 = clone(obj)
console.log(obj2);