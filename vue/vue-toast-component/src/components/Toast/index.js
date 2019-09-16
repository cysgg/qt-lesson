import Vue from 'vue'
import ToastComponent from './index.vue'

console.log(ToastComponent);
const toastConstruce = Vue.extend(ToastComponent)

function showMessage (msg,duration = 2000) {
  const instance = new toastConstruce({
    el:document.createElement('div'),
    propsData: {
      msg: msg,
      visiable: true
    }
  })
  document.body.appendChild(instance.$el);
  setTimeout(() => {
    instance.visiable = false
  },duration)
}
export default showMessage