<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link tag="span" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link tag="span" to="/comments">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link tag="span" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http({
      method: 'get',
      baseURL: 'seller'
    })
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin'
#app
  display flex
  flex-direction column
.split
  background-color #f3f5f7
  border-bottom 1px solid rgba(7,17,27,.1)
  border-top 1px solid rgba(7,17,27,.1)
  width 100%
  height 16px
li
  list-style none
.tab
  display flex
  justify-content space-around
  flex-direction row
  align-items center
  height 40px
  border-bottom 1px solid rgba(7,17,27,.1)
  border-1px(rgba(7,17,27,.1))
  &-item
    & > span
      display block
      font-size 14px
      color rbg(77, 85, 93)
      font-weight bold
      &.router-link-exact-active
        color rgb(240, 20, 20)
[class*=" icon-"],[class^=icon-]
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  font-family sell-icon!important
  font-style normal
  font-variant normal
  font-weight 400
  line-height 1
  speak none
  text-transform none
.star
  margin 0 12px
  align-items center
  display flex
  justify-content center
  &-item
    background-size 15px 15px
    height 15px
    margin-right 6px
    width 15px
    background-repeat no-repeat
  &-item.on
    background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTRGNkRGNzA2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTRGNkRGNzE2QjgyMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NEY2REY2RTZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NEY2REY2RjZCODIxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpQH5+oAAAHMSURBVHjaxJe/TgJBEMY5pVBrQAspiVpoAY2CxEJ7CxJDZbkJBVpowxvYQGJiI6WNIYRXIDERHsCOQKGxIIJUFKhB1283gyHk0Lu5O5zkxy7772N2Z+cOQ177uLanP4W840z2+/h2QiVLeI4pGgaHmqIRnqVwBswTGc4CBuOMF8AzCND3V70DQr557XF6TNRH9fQstjprsc1V4TiImrRHEWRxL4WzzD5HwhGQ+qU/Ba8jdqJ6G2UILIMg1UNUH7UF6epYsU/QJV6o7BCjto6fksENXRM3TP3AFWLTpF9du2O11WVwAHo+762ntYQsj864BnZAy0PRltYQsjYZXE26LnUPROt6bSGb06K6S9tecVG0Qtvb/es6DcARyLsgmtdrCTmw+jz+AufgEVwyEo2afwrBK24CKYIPhqfvNJeduaLM+704JadbFk46ON9dJ8IJB8KJ/xJme7w+8aYxbg90DEmqm1kAT6s1jrCZt31wBmLgnohRW9+O13M2tqoElAcFMPxpFXIICtRXsnpUVjxugH16oWtPHS1kG6RpbIPrsXoBWAU5sAWqlkNKyCrNyek1ikbIzl8YlQA2wBMrnoVU2e4Corcol8yGfAswAGyVaSErvYjsAAAAAElFTkSuQmCC')
  &-item.off
    background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkMwOTcxNjk2QjgzMTFFNkFFQjVFRkIyNzZERjNFOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkMwOTcxNkE2QjgzMTFFNkFFQjVFRkIyNzZERjNFOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQzA5NzE2NzZCODMxMUU2QUVCNUVGQjI3NkRGM0U4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQzA5NzE2ODZCODMxMUU2QUVCNUVGQjI3NkRGM0U4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr/SWFMAAAG/SURBVHjaxJY/S8NAGIcbGyG1hXYIJt0sLqVkc1Jc/BSuTp38NrroorOItEK3iouoCIIURQdtt1qXYlU0YKv+XnkLIVza5JK0B08vufTyvPc/ytbOXkIy5elns7zxLFNZTcgni3Mp8YykNAMWiO3d/cwkxSWgMKVJiZOg6LgvotXJSYgXgea417gsdrHlsyxSsQF0QbmO7jbiFFuSz0KJs6Aw4nkBrc4G2UDmQcqFJrhWfDRiHfJf5F/A5tx9/Y/Km8EaL5MoEgU4x4jSAJxSlE1Q46jiTuSoYX9vDse4A6rgLUYpvbsKacc9uXqgAl5ikNI7K5D2vGa1zd3eilDa4u61xy2nPqiDRgRSekcd0r7f85iWxCV4Bys+lpKo/jmEd7IbyD34kWjpgOtK71y65PpWPfZ03+J8iPE1w4iNaYnNaYhzri8NZ+qCY6br8R8NB0ZO5vNWFPE3uAa3jtl+xGfxEpgVvOM1rPgJXIBPZyHWKgXQQOsekS+7vr9ojjwEFQ8nFkV8BtqjxgwBUEAnCIDW7yoPlRl0jOngT4MrcDhO6gqgzXWobhqBpIK0mMoPwIfMdObuv+HuFzr+BBgA06Z0wbQa03AAAAAASUVORK5CYII=')
</style>
