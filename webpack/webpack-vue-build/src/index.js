import Vue from 'vue'
import App from './App'
import { add, sub } from './util'
console.log(add(1, 2));
console.log(sub(1, 2));

new Vue({
  render: h => h(App),
  components: {
    App
  }
}).$mount('#app')