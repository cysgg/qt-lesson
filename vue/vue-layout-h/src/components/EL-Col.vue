<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 2
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  render (h) {
    let parent = this.$parent
    let jiange = parent.jiange
    console.log(jiange)
    return h(
      this.tag,
      {
        class: ['el-col', `el-col-offset-${this.offset}`, `el-col-span-${this.span}`]
      },
      this.$slots.default
    )
  }
}
</script>
<style lang="scss" scoped>
@for $i from 0 through 24 {
  .el-col-span-#{$i} {
    flex: 0 0 (1 / 24 * $i * 100) * 1%;
  }
}
@for $i from 0 through 24 {
  .el-col-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }
}
.el-col {
  background-color: #d63af5;
}
</style>