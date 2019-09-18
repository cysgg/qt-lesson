const expression = '{{}}{}{}'
const expressionFalse = '{}{{}'


function isBalanced(exp) {
  //数组用于实现栈或队列是最便捷的
 let info = exp.split('') 
 let stack = []
 for (let i = 0; i < info.length; i++) {
   const element = info[i];
   if(el == '{') {
    stack.push('{')
   } else if(el == '}'){
     if(stack.length === 0) {
       return false
     }
    stack.pop()
   }
 }
 return stack.length === 0
}