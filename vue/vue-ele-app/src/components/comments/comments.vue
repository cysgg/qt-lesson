<template>
  <div class="commments-content">
    <ratings></ratings>
    <div class="split"></div>
    <div class="rating-select"></div>
    <comment-wrap></comment-wrap>
  </div>
</template>

<script>
import ratings from '@/components/ratings/ratings'
import commentWrap from '@/components/commentWrap/commentWrap'
export default {
  name: 'comments',
  components: {
    'ratings': ratings,
    'comment-wrap': commentWrap
  }
}
</script>

<style lang="stylus" scoped>
.split
  background-color #f3f5f7
  border-bottom 1px solid rgba(7,17,27,.1)
  border-top 1px solid rgba(7,17,27,.1)
  width 100%
  height 16px
</style>
