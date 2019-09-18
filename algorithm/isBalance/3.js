const expression = '{{}}{}{}'
const expressionFalse = '{}{{}'

const isBalanced = (str) => {
  
  const map = new Map([
    ["{","}"],
    ["[","]"],
    ["(",")"]
  ])
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let node = str[i];
    if (map.has(node)) {
      stack.push(node)
    } else if ([...map.values()].includes(node)) {
      if(map.get(stack[stack.length - 1]) !== node){
        return false
      }
      stack.pop()
    }
  }
  return stack.length === 0
}
console.log(isBalanced(expressionFalse))

