<template>
  <div class="look">
    <h1>{{ msg }}</h1>
    <div class="go-two" @click="goTwo">去Look2</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'look1页面'
    }
  },
  methods: {
    goTwo () {
      this.$router.push({ name: 'look2', params: { id: 666 } })
    }
  },
  beforeRouteEnter (to, from, next) {
    // ...
    console.log(from, to)
    next()
  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log(from, to)
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
