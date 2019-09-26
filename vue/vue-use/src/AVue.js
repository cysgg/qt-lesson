import Vue from 'Vue'

function AVue ({methods}) {
  for (let key in methods) {
    this[key] = methods[key]
  }
}

// AVue.prototype.$alert = () => {
//   console.log('我是一个大坏蛋')
// }
// Object.defineProperty(Vue.prototype, '$alert', {
//   writable: true,
//   value () {
//     console.log('alert一次')
//   }
// })

export default AVue