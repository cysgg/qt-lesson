<template>
  <v-scroll
    ref="suggest"
    class="suggest"
    :data="result"
    :pullup="pullup"
    :beforeScroll="beforeScroll"
    @scrollEnd="searchMore"
    @beforeScroll="listScroll"
    >
    <ul class="suggest-list">
      <li
        class="suggest-item"
        v-for="(item, index) in result"
        :key="index"
        @click="selectItem(item)"
        >
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
    </ul>
    <div class="no-result-wrapper" v-show="!result.length || !hasMore">
      <span>抱歉暂无搜索结果</span>
    </div>
  </v-scroll>
</template>

<script>
import scroll from './scroll'
import { MusicSearch } from '@/api/index'
export default {
  name: 'suggest',
  components: {
    'v-scroll': scroll
  },
  data () {
    return {
      result: [],
      hasMore: true,
      pullup: true,
      beforeScroll: true
    }
  },
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  methods: {
    getDisplayName (item) {
      
    },
    refresh () {
      this.$refs.suggest.refresh()
    },
    fetchResult (page) {
      const params = {
        limit: 20,
        offset: page-1,
        keywords: this.query
      }
      MusicSearch(params).then(res => {
        if(res.code === 20) {
          this.result = [...this.result, ...res.result.songs]
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
