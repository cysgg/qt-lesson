import { type } from "os";

// import Vue from 'vue'
export class Store {
  constructor (options, Vue) {
    console.log(options)
    this.options = options
    this.getters = {}
    Vue.mixin({
      beforeCreate: vuexInit
    })
    forEachValue(options.getters, (getterFn, getterName)=>{
      registerGetter(this, getterName, getterFn)
    })
  }
  get state () {
    console.log('get')    
    return this.options.state
  }
  set state (val) {
    throw new Error('can not set state, please to mucation')
  }
  
}

// this.$store
function vuexInit () {
  console.log(this, this.$options)
  const options = this.$options
  if (options.store) {
    this.$store = typeof options.store === 'funciton' ? options.store() : options.store
  } else if (options.parent && options.parent.$store) {
    this.$store = options.parent.$store
  }
}

function forEachValue (obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

function registerGetter (store, getterName, getterFn) {
  Object.defineProperty(store.getters, getterName, {
    get: () => {
      return getterFn(store.state)
    }
  })
}
