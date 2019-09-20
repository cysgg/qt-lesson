<template>
  <div class="coun">
    <h2>
      {{msg}}
    </h2>
    <h3>
      {{date}}
    </h3>
    <hr/>
    <h3>{{count}}</h3>
    <button @click="add(10)">+</button>
    <button @click="sub">-</button>
    <hr/>
    <p>{{money}}</p>
    <button @click="actMakeMoney">挣钱</button>
  </div>
</template>

<script>
import store from '@/store/index.js'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'count',
  data () {
    return {
      msg: 'hello vuex'
    }
  },
  // computed: {
  //   date () {
  //     return this.$store.state.date
  //   }
  // },
  computed: {
    ...mapState(['date', 'money']),
    ...mapGetters(['count'])
  },
  // computed: mapState({
  //   date: state => state.date
  // }),
  methods: {
    ...mapMutations(['add', 'sub']),
    ...mapActions(['actMakeMoney'])
  },
  store
}
</script>

<style scoped>

</style>
