<template>
  <div class="seller" ref="sellerWrapper">
    <div class="seller-inner">
      <seller-rating :seller="seller"></seller-rating>
      <div class="split"></div>
      <bulletin :seller="seller"></bulletin>
      <div class="split"></div>
      <pics :pics="seller.pics"></pics>
      <div class="split"></div>
      <info :infos="seller.infos"></info>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import sellerRating from '@/components/sellerRating/sellerRating'
import bulletin from '@/components/bulletin/bulletin'
import pics from '@/components/pics/pics'
import info from '@/components/info/info'
export default {
  name: 'seller',
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    sellerRating,
    bulletin,
    pics,
    info
  },
  methods: {
    _initScroll () {
      this.sellerScroll = new BScroll(this.$refs.sellerWrapper, {
        click: true,
        scrollY: true
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
.seller
  position absolute
  top 174px
  bottom 0px
  width 100%
  overflow hidden
</style>
