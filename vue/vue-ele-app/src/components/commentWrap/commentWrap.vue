<template>
  <div class="rating-warpper">
    <ul>
      <li class="rating-item" v-for="(item,index) in ratings" :key="index">
        <div class="avatar">
          <img :src="item.avatar" width="28" height="28" alt="">
        </div>
        <div class="content">
          <h1 class="name">{{item.username}}</h1>
          <div class="star-wrapper">
            <div class="star star-24">
              <span class="star-item" :class="index < item.score ? 'on' : 'off'" v-for="(star,index) in Array.from({length:5})" :key="index"></span>
            </div>
            <span class="delivery" v-show="item.deliveryTime">{{item.deliveryTime}}</span>
          </div>
          <p class="text">{{item.text}}</p>
          <div class="recommend" v-if="item.recommend.length > 0">
            <span class="icon-thumb_up"></span>
            <span class="item" v-for="(recom,index) in item.recommend" :key="index">{{recom}}</span>
          </div>
          <div class="time">{{item.rateTime | datefmt('YYYY-MM-DD HH:mm')}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'commentWrap',
  props: {
    ratings: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
li
  list-style none
.rating-warpper
  padding 0 18px
  .rating-item
    display flex
    padding 18px 0
    position relative
    .avatar
      width 28px
      margin-right 12px
      img
        border-radius 50%
        height auto
    .content
      flex 1
      position relative
      .name
        color #333
        font-size 10px
        line-height 12px
        margin-bottom 4px
      .star-wrapper
        align-items center
        display flex
        margin-bottom 6px
        .star
          margin 0
          margin-right 6px
          .star-item
            height 10px
            width 10px
            background-size 10px 10px
            margin-right 3px
        .delivery
          color #999
          font-size 10px
      .text
        color #333
        font-size 12px
        line-height 18px
        margin-bottom 8px
      .recommend
        display flex
        flex-wrap wrap
        align-items center
        line-height 16px
        .icon-thumb_up,
        .item
          font-size 10px
          margin 0 8px 4px 0
        .icon-thumb_up
          color #00a0dc
        .item
          background-color #fff
          border 1px solid rgba(7,17,27,.1)
          color #999
          padding 0 6px
          border-radius 1px
      .time
        color #999
        font-size 12px
        position absolute
        line-height 12px
        right 0
        top 0
</style>
