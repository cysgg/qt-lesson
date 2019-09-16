<template>
  <div>
    <button @click="handleToast">购买</button>
  </div>
</template>

<script>
import showMessage from '@/components/Toast/index.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      visiable: false
    }
  },
  methods: {
    handleToast () {
      showMessage('没到发售时间')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
