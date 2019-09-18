<template>
  <div class="child3">
    <p @click="changeData">{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'child3',
  data () {
    return {
      msg: 'click change data'
    }
  },
  created () {
    this.$bus.$on('toChild3', (p) => {
      console.log(p)
    })
    this.$on('fromChild', (e) => {
      console.log(e, '======================')
    })
  },
  beforeDestroy () {
    this.$bus.$off('toChild3')
    this.$off('fromChild')
  },
  methods: {
    changeData () {
      this.$emit('fromChild', this.msg)
    }
  }
}
</script>

<style scoped>

</style>
