<template>
  <div>
    <p @click="emit">emit</p>
    <button @click="send">send value to child3</button>
  </div>
</template>

<script>
export default {
  name: 'child2',
  data () {
    return {
      msg: 'nvzhuren'
    }
  },
  created () {
    this.$on('wash_clothse', (...arg) => {
      console.log(...arg)
    })
  },
  methods: {
    emit () {
      this.$emit('wash_clothse', 'zph', 'xyf')
    },
    send () {
      this.$bus.$emit('toChild3', 'hello child3')
    }
  }
}
</script>

<style scoped>

</style>
