- vuex
组件 + 共享数据
1. 共享状态

- es6 模块化机制
export default xxx
index.js Vuex { Store, }

- class get 方法
Store 是一个类 四大家族是它的属性
this.$store 对vue.prototype扩展后 所有组件都可以 调用
Vue钩子函数， beforeCreated
除了他该做的 再做一下vuex的初始化
Vue.mixin({
  beforeCreated:
})

- 让唯一的store 对象， state 是属性
beforeCreated Vue 该怎样，
再多this.$store = this Vue 单例 根组件
beforeCreated 之前的代码也要运行， Vue.mixin({
  bedoreCreated: vuexInit
})

通过源码 认识到 所有组价都可以访问$store 因为他已经为vue 单例加入了这个属性
每个组件里的this -> 本组件 -》 prototype -> vue单例

- this.$store.getters.xxxx
 跟state不一样的地方 是方法 
 会返回根据state的新值
 Object.defineProperty(this.$store.getters, getterName, {
   get () {
     数据劫持
     return getterFn(store.state)
   }
 })

 defineProperty 是定义单个属性的定义
 forEach
 register