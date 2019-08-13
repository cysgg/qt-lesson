// create phone Number
// (123)456-7890

/**
 * 
 * @param {Array} arr 
 */
// const createPhoneNumber = (...arr) => `(${arr.slice(0,3).join('')})${arr.slice(3,6).join('')}-${arr.slice(6).join('')}`
const createPhoneNumber = (numbers)=>{
    let format = "(xxx) xxx-xxxx"
    for(let i = 0; i< numbers.length; i++){
        format = format.replace('x',numbers[i])
    }
    return format
}

console.log(createPhoneNumber(...'1234657890'));