<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus">
@font-face
  font-family 'iconfont'  /* project id 1362329 */
  src url('//at.alicdn.com/t/font_1362329_zfv2xvqbpu.eot')
  src url('//at.alicdn.com/t/font_1362329_zfv2xvqbpu.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1362329_zfv2xvqbpu.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1362329_zfv2xvqbpu.woff') format('woff'),
  url('//at.alicdn.com/t/font_1362329_zfv2xvqbpu.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1362329_zfv2xvqbpu.svg#iconfont') format('svg')
.iconfont
    font-family "iconfont" !important
    font-size 16px
    font-style normal
    -webkit-font-smoothing antialiased
    -webkit-text-stroke-width 0.2px
    -moz-osx-font-smoothing grayscale
</style>
