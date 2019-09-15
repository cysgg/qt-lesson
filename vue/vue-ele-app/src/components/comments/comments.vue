<template>
  <div class="commments-content" ref="comWrapper">
    <div class="comments-inner">
      <ratings :seller="seller"></ratings>
      <div class="split"></div>
      <div class="rating-select">
        <div class="comment-type">
          <span class="block positive" :class="{'active' : commentTypeIndex==0}" data-index="0" @click.stop.prevent="getIndex">
            全部
            <span class="count" v-show="satisfiedLen && unSatisfiedLen">{{satisfiedLen + unSatisfiedLen}}</span>
          </span>
          <span class="block positive" :class="{'active' : commentTypeIndex==1}" data-index="1" @click.stop.prevent="getIndex">
            满意
            <span class="count" v-show="satisfiedLen">{{satisfiedLen}}</span>
          </span>
          <span class="block negative" :class="{'active' : commentTypeIndex==2}" data-index="2" @click.stop.prevent="getIndex">
            不满意
            <span class="count" v-show="unSatisfiedLen">{{unSatisfiedLen}}</span>
          </span>
        </div>
        <div class="switch" :class="{'on': isShowContent}" @click.stop="changeShow">
          <span class="icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <comment-wrap v-if="fliterComs" :ratings="fliterComs"></comment-wrap>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ratings from '@/components/ratings/ratings'
import commentWrap from '@/components/commentWrap/commentWrap'
export default {
  name: 'comments',
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    'ratings': ratings,
    'comment-wrap': commentWrap
  },
  data () {
    return {
      commentTypeIndex: 0,
      isShowContent: true,
      ratings: []
    }
  },
  computed: {
    fliterComs () {
      return this.ratings.filter((item, index) => {
        return this.checkType(this.commentTypeIndex, item.rateType) && (this.isShowContent ? item.text : true)
      })
    },
    satisfiedLen () {
      return this.ratings.filter((item, index) => {
        return this.checkType(1, item.rateType)
      }).length
    },
    unSatisfiedLen () {
      return this.ratings.filter((item, index) => {
        return this.checkType(2, item.rateType)
      }).length
    }
  },
  methods: {
    checkType (index, type) {
      if (index === 0) {
        return true
      } else {
        return (index - 1) === type
      }
    },
    getIndex (e) {
      this.commentTypeIndex = Number(e.currentTarget.dataset.index)
    },
    changeShow () {
      this.isShowContent = !this.isShowContent
    },
    _initScroll () {
      this.comScroll = new BScroll(this.$refs.comWrapper, {
        click: true,
        scrollY: true
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  created () {
    this.$http({
      method: 'get',
      baseURL: 'ratings'
    }).then(res => {
      this.ratings = res.data.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.commments-content
  position absolute
  top 174px
  bottom 0px
  width 100%
  overflow hidden
.rating-select
  .comment-type
    margin 0 18px
    padding 18px 0
    position relative
    &:after
      width 200%
      position absolute
      display block
      content ''
      border-bottom 1px solid rgba(7,17,27,.1)
      bottom 0
      transform-origin 0 bottom
      left 0
      transform scale(.5)
    .block
      border-radius 1px
      color #666666
      display inline-block
      font-size 12px
      line-height 16px
      margin-right 8px
      padding 8px 12px
      &.active
        color #ffffff
      &.positive
        background-color rgba(0,160,220,.2)
        &.active
          background-color #00a0dc
      &.negative
        background-color #ccc
        &.active
          background-color #666666
      .count
        margin-left 2px
  .switch
    display flex
    padding 12px 18px
    color #999
    line-height 24px
    align-items center
    border-bottom 1px solid rgba(7,17,27,.1)
    &.on
      .icon-check_circle
        color #00b43c
    .icon-check_circle
      font-size 24px
      margin-right 4px
    .text
      font-size 12px
</style>
