//简单类型的拷贝是拷贝值
let a = 1;
let b = a;
b = 2;
//复杂类型的拷贝是引用式赋值
console.log(a);
let obj = {
    a : 1,
    b : function(){
        console.log('bbb')
    },
    toJSON(){
        return `{"a":1,"b":function(){console.log('bbb')}}`
    }
}

// obj2 = obj
// obj2.a = 2
// console.log(obj);
// console.log(JSON.stringify(obj));

let obj2 = JSON.parse(JSON.stringify(obj));
obj2.a = 3
console.log(obj.a);
console.log(obj2);
console.log(typeof obj2);
let obj3 = eval('('+obj2+')')
console.log(obj3);

// console.log(JSON.parse(obj2));


