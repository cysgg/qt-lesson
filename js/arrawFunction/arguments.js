// function bar(a,a){

// }

// bar(1,2)

// const bar_arrow = function(a,b){
//     let arr = [...arguments]
//     console.log(arr);
//     return 123
// }
// console.log(bar_arrow(3,4));
Array.prototype.reverseJoin = function(){
    return this.reverse().join('')
}
let arr = [1,2,3,4]
let arr2 = [3,5,6,7]
console.log(arr.reverseJoin());
console.log(arr2.reverseJoin());

