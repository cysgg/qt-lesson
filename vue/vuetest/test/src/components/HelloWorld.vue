<template>
  <div class="hello">
    <input type="submit" ref="sub" value="&#xe6cc;" class="iconfont">
    <span class="iconfont">&#xe6cc;</span>
    <div ref="div"></div>
    <i-input></i-input>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.$refs.sub.outerHTML = `<input type="submit" class="iconfont" value="&#xe6cc;">`
    console.log(this.$refs.sub.value)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
