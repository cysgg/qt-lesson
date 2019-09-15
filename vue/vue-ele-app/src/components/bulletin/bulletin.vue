<template>
  <div class="bullein">
    <h1 class="title">公告与活动</h1>
    <div class="content-wrapper">
      <p class="content">{{seller.bulletin}}</p>
    </div>
    <ul class="supports">
      <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
        <span class="support-ico" :class="supportType[index]"></span>
        <span class="text">{{item.description}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'bulletin',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      supportType: {
        '0': 'decrease',
        '1': 'discount',
        '2': 'special',
        '3': 'invoice',
        '4': 'guarantee'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin';
.bullein
  padding 18px 18px 0
  white-space normal
  .title
    color #333
    font-size 14px
    line-height 14px
    margin-bottom 8px
  .content-wrapper
    position relative
    padding 0 12px 16px
    &:after
      content ""
      display block
      position absolute
      bottom 0
      left 0
      transform-origin 0 bottom
      border-bottom 1px solid rgba(7,17,27,.1)
      width 200%
      transform scale(.5)
    .content
      color #f01414
      font-size 12px
      line-height 24px
  .supports
    .support-item
      display flex
      align-items center
      padding 16px 12px
      position relative
      &:after
        content ""
        display block
        position absolute
        bottom 0
        left 0
        transform-origin 0 bottom
        border-bottom 1px solid rgba(7,17,27,.1)
        width 200%
        transform scale(.5)
      .support-ico
        display inline-block
        vertical-align top
        width 16px
        height 16px
        margin-right 6px
        background-size 16px 16px
        background-repeat no-repeat
        &.decrease
          bg-image('./bulletin/decrease_1')
        &.discount
          bg-image('./bulletin/discount_1')
        &.guarantee
          bg-image('./bulletin/guarantee_1')
        &.invoice
          bg-image('./bulletin/invoice_1')
        &.special
          bg-image('./bulletin/special_1')
      .text
        color #333
        line-height 16px
        font-size 12px
</style>
