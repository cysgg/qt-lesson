<template>
  <div class="info">
    <h1 class="title">商家信息</h1>
    <ul>
      <li class="info-item" v-for="(item,index) in infos" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    infos: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.info
  padding 18px 18px 0
  color #333
  .title
    font-size 14px
    line-height 14px
    padding-bottom 12px
    position relative
    &:after
      content ''
      display block
      position absolute
      left 0
      bottom 0
      width 200%
      transform-origin 0 bottom
      transform scale(.5)
      border-bottom 1px solid rgba(7,17,27,.1)
  .info-item
    font-size 12px
    line-height 16px
    padding 16px 12px
    position relative
    &:after
      content ''
      display block
      position absolute
      left 0
      bottom 0
      width 200%
      transform-origin 0 bottom
      transform scale(.5)
      border-bottom 1px solid rgba(7,17,27,.1)
</style>
