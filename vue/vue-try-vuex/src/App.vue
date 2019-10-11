<template>
  <div id="app">
    {{count}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  created () {
    console.log(
      '打印出this.$store.getters.getStatePlusOne',
      this.$store.getters.getStatePlusOne
    )
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
