<template>
  <div class="pics">
    <h1 class="title">商家实景</h1>
    <div class="pic-wrapper" ref="picWrapper">
      <ul class="pic-list">
        <li class="pic-item" v-for="(item, index) in pics" :key="index">
          <img :src="item" alt="" width="120" height="90">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'pics',
  props: {
    pics: {
      type: Array
    }
  },
  methods: {
    _initScroll () {
      this.picScroll = new BScroll(this.$refs.picWrapper, {
        click: true,
        scrollX: true,
        scrollY: false
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  }
}
</script>

<style lang="stylus" scoped>
.pics
  padding 18px
  .title
    color #333
    font-size 14px
    line-height 14px
    margin-bottom 12px
  .pic-wrapper
    display flex
    position relative
    z-index 1
    overflow hidden
    white-space nowrap
    .pic-list
      .pic-item
        display inline-block
        height 90px
        width 120px
        margin-right 6px
</style>
