<template>
  <div class="switch-img-box" id="ec-slide-box"
  :style="{width:swidth + 'px'}"
  >
    幻灯片
  </div>
</template>

<script>
export default {
  name: 'Ecslide',
  data () {
    return {
      timer: null, //定时器
    }
  },
  // props: ['time', 'autoplay']
  props: {
    time: {
      type: Number,
      default: 4000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      required
    },
    swidth: {
      type: Number
    }
  },
  computed: {
    
  },
  methods: {
    
  },
  mounted() {
    
  },
}
</script>

<style lang="stylus" scoped>
.switch-img-box
  width 100%
  height 100%
  position relative
</style>
