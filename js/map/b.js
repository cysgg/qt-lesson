let dog1 = {name: 'snickers'}
let dog2 = {name: 'Sunny'}
let dog3 = {name: 'snickers'}

const strong = new Map() //强映射
const weak = new WeakMap() //弱映射

// key Object
strong.set(dog1,'Snickers is the Best!')
weak.set(dog2,'Snickers is the Best!')

for([key, value] of strong){
  console.log(key, value);
}

console.log(weak.get(dog2));
dog1 = null //垃圾回收 对象
dog2 = null 
for([key, value] of strong){
  console.log(key, value);
}
console.log(weak.get(dog2));
console.log(strong.entries() );