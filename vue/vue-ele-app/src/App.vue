<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5d721c3f9aaed00b9c3bde5c/vue_ele_app/vue_ele_app')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  },
  components: {
    'v-header': header
  }
}
</script>

<style>

</style>
