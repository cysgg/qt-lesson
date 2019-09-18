<template>
  <div class="coun">
    <h2>
      {{msg}}
    </h2>
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('sub')">-</button>
  </div>
</template>

<script>
import store from '@/store/index.js'
export default {
  name: 'count',
  data () {
    return {
      msg: 'hello vuex'
    }
  },
  store
}
</script>

<style scoped>

</style>
