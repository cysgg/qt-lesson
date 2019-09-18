<template>
  <div id="app">
    <!-- <child1 :msg="msg" :appFun="appFun" v-bind="test" @addCount="countAdd"></child1>
    <child2></child2>
    <child3 @fromChild="fromChild"></child3>
    <span>{{msg1}}</span> -->
    <router-view></router-view>
  </div>
</template>

<script>
import child1 from '@/components/common/child1'
import child2 from '@/components/common/child2'
import child3 from '@/components/common/child3'
export default {
  name: 'App',
  components: {
    child1,
    child2,
    child3
  },
  data () {
    return {
      msg: '给child1的礼物',
      test: {
        a: 1,
        b: 2
      },
      count: 0,
      msg1: 'father data'
    }
  },
  created () {
    this.$on('fromChild', (e) => {
      console.log(e, '----------------')
    })
  },
  methods: {
    appFun () {
      console.log('我是app.vue里的方法')
    },
    countAdd () {
      this.count++
    },
    fromChild (e) {
      console.log(e)
      this.msg1 = e
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
