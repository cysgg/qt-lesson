<template>
  <div class="ratting">
    <div class="rating-left">
      <h1 class="score">{{seller.score}}</h1>
      <div class="title">综合评分</div>
      <div class="rank">高于周边商家</div>
    </div>
    <div class="rating-right">
      <div class="score-wrapper">
        <span class="title">服务态度</span>
        <div class="star">
          <span class="star-item" :class="index + 1 <= seller.foodScore ? 'on' : 'off'" v-for="(item,index) in Array.from({length:5})" :key="index"></span>
        </div>
        <span class="score">{{seller.serviceScore}}</span>
      </div>
      <div class="score-wrapper">
        <span class="title">商品评分</span>
        <div class="star">
          <span class="star-item" :class="index + 1 <= seller.serviceScore ? 'on' : 'off'" v-for="(item,index) in Array.from({length:5})" :key="index"></span>
        </div>
        <span class="score">{{seller.foodScore}}</span>
      </div>
      <div class="delivery-wrapper">
        <span class="title">送达时间</span>
        <div class="delivery">{{seller.deliveryTime}}分钟</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ratings',
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
.ratting
  display flex
  flex-direction row
  padding 18px 0
  .rating-left
    padding 6px 0
    text-align center
    width 137px
    flex 0 0 137px
    border-right 1px solid #d9dde1
    -webkit-box-flex 0
    .score
      color #fc9153
      font-size 24px
      line-height 28px
      margin-bottom 6px
    .title
      color #333333
      font-size 12px
      line-height 12px
      margin-bottom 8px
    .rank
      color #999999
      font-size 10px
      line-height 10px
  .rating-right
    flex 1
    padding 6px 0 6px 24px
    .score-wrapper
      align-items center
      display flex
      margin-bottom 8px
      .title
        color #333333
        font-size 12px
        line-height 18px
      .score
        font-size 12px
        line-height 18px
        color #fc9153
    .delivery-wrapper
      display flex
      align-items center
      .title
        color #333333
        font-size 12px
        line-height 18px
      .delivery
        font-size 12px
        margin-left 12px
        color #999999
</style>
