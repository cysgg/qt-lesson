<template>
  <div class="sellerRating">
    <h1 class="title">{{seller.name}}</h1>
    <div class="desc">
      <div class="star">
        <span class="star-item" :class="index + 1 <= seller.score ? 'on' : 'off'" v-for="(item,index) in Array.from({length:5})" :key="index"></span>
      </div>
      <span class="text">({{seller.ratingCount}})</span>
      <span class="text">月售{{seller.sellCount}}单</span>
    </div>
    <ul class="remark">
      <li class="block">
        <h2>起送价</h2>
        <div class="content">
          <span class="stress">{{seller.minPrice}}</span>
          元
        </div>
      </li>
      <li class="block">
        <h2>商家配送</h2>
        <div class="content">
          <span class="stress">{{seller.deliveryPrice}}</span>
          元
        </div>
      </li>
      <li class="block">
        <h2>平均配送时间</h2>
        <div class="content">
          <span class="stress">{{seller.deliveryTime}}</span>
          分钟
        </div>
      </li>
    </ul>
    <div class="favorite">
      <span class="icon-favorite" :class="{'active': isFavorite}" @click="changeFav"></span>
      <span class="text">{{isFavorite ? '已收藏' : '收藏'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sellerRating',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      isFavorite: false
    }
  },
  methods: {
    changeFav () {
      this.isFavorite = !this.isFavorite
    }
  }
}
</script>

<style lang="stylus" scoped>
.sellerRating
  padding 18px
  position relative
  .title
    color #333
    font-size 14px
    line-height 14px
    margin-bottom 8px
  .desc
    display flex
    align-items center
    padding-bottom 18px
    position relative
    &:after
      content ""
      position absolute
      display block
      left 0
      bottom 0
      transform-origin 0 bottom
      transform scale(.5)
      width 200%
      border-bottom 1px solid rgba(7,17,27,.1)
    .star
      margin 0
      margin-right 8px
      .star-item
        background-size 15px
        height 15px
        width 15px
        margin-right 6px
    .text
      color #666
      font-size 10px
      line-height 18px
      margin-right 12px
  .remark
    display flex
    padding-top 18px
    .block
      flex 1
      border-right 1px solid #d9dde1
      text-align center
      &:last-child
        border none
      h2
        color #999
        font-size 10px
        line-height 10px
        margin-bottom 4px
      .content
        color #333
        font-size 10px
        line-height 24px
        .stress
          font-size 24px
  .favorite
    position absolute
    right 11px
    top 18px
    width 50px
    text-align center
    .icon-favorite
      color #ccc
      display block
      font-size 24px
      line-height 24px
      margin-bottom 4px
      &.active
        color #f01414
    .text
      color #666
      font-size 10px
      line-height 10%
</style>
