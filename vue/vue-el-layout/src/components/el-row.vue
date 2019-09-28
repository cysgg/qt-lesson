
<script>
export default {
  render (h) {
    console.log('h', h)
    let obj = h(
      'div',
      'render 函数'
    )
    console.log(obj)
    return obj 
  }
}
</script>

<style scoped>
.el-row {
  width: 100%;
}
</style>
