<template>
  <div id="app">
    <SlideSearch :showSearchPage="isShowSearchPage"/>
    <ul class="main">
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  </div>
</template>

<script>
import SlideSearch from './components/SlideSearch/index.vue'

export default {
  name: 'App',
  components: {
    SlideSearch
  },
  data() {
    return {
      isShowSearchPage: false
    }
  },
  //已经转化为真实 dom
  mounted() {
    // ref
    const ul = document.querySelector('.main')
    ul.addEventListener('scroll',() => {
      if(ul.scrollTop === 0) {
        this.isShowSearchPage = false
      } else if (ul.scrollTop > 10) {
        this.isShowSearchPage = true
      }
    })
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  height: calc(100vh - 94px);
  overflow: scroll;
}

li {
  margin-top: 20px;
}
</style>
