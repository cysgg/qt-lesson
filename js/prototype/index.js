// es5 面向对象
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name
},
Person.prototype.playHpjy = function () {
    console.log('今晚吃鸡，大吉大利');
}


// new + Fun() 新的对象
// 实例 第三者
let person = new Person('赵小猛')
console.log(person.name);

console.log(person.constructor == Person);