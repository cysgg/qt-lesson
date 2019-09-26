<template>
  <div class="main">
    <div class="gauntlet">
      <button @click="disAppear">消失</button>
    </div>
    <Content :heroes="heroes" :lostHeroId="lostHeroId"></Content>
  </div>
</template>

<script>
import { heroes } from './heroes.js'
import Content from './Content'
export default {
  name: 'main',
  components: {
    Content
  },
  data () {
    return {
      heroes,
      lostHeroId: []
    }
  },
  methods: {
    disAppear () {
      this.lostHeroId = this.heroes.slice(0)
      .sort((a,b) => 0.5 - Math.random())
      .slice(0, Math.ceil(this.heroes.length / 2))
      .map(hero => hero.id)
    }
  }
}
</script>

<style scoped>

</style>
