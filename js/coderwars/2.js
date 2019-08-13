//140 likes
// 喜欢的人 [] "no one likes this"
// ['peter'] "peter likes this"
// ['Jacob','Alex'] "Jacob And Alex like this"
// ['Max','John',"Mark"] "Max John And Mark like this"
// ['Alex','Jacob',"Mark","Max"] "Alex  Jacob  And 2 other like this"


const likes = (arr) => {
    const templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} likes this',
        '{name} {name} and {name} likes this',
        '{name} {name} and {len} other likes this',
    ]
    let idx = Math.min(arr.length,4) 
    let template = templates[idx]
    template = template.replace(/{name}|{len}/g,function(val){
        return val == '{name}' ? arr.shift() : arr.length
    })
    return template
//     let str = ''
//     switch(arr.length){
//         case 0: 
//             str = "no one"    
//             break;
//         case 1: 
//             str = arr[0] 
//             break;
//         case 2: 
//             str = arr[0] + " and " + arr[1]
//             break;
//         case 3: 
//             str = arr[0] + ' ' + arr[1] + " and " + arr[2]
//             break;
//         default : 
//             str = arr[0] + ' ' + arr[1] + " and " + (arr.length-2) + " other";
//     }
//     return str + " like this"
}

let arr = ['Alex','Jacob',"Mark","Max","lll"]
console.log(likes(arr));
