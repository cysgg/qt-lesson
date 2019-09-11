<template>
  <div class="ratting">
    <div class="rating-left">
      <h1 class="score">4.2</h1>
      <div class="title">综合评分</div>
      <div class="rank">高于周边商家</div>
    </div>
    <div class="rating-right">
      <div class="score-wrapper">
        <span class="title">服务态度</span>
        <div class="star">
          <span class="star-item on"></span>
          <span class="star-item on"></span>
          <span class="star-item on"></span>
          <span class="star-item on"></span>
          <span class="star-item off"></span>
        </div>
        <span class="score">4.1</span>
      </div>
      <div class="score-wrapper">
        <span class="title">商品评分</span>
        <div class="star">
          <span class="star-item on"></span>
          <span class="star-item on"></span>
          <span class="star-item on"></span>
          <span class="star-item on"></span>
          <span class="star-item off"></span>
        </div>
        <span class="score">4.3</span>
      </div>
      <div class="delivery-wrapper">
        <span class="title">送达时间</span>
        <div class="delivery">38分钟</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
