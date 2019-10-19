<template>
  <div id="app" class="chatapp">
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script>
import threadSection from './components/threadSection'
import messageSection from './components/messageSection'
export default {
  name: 'App',
  components: {
    threadSection,
    messageSection
  },
  mounted () {
    this.$store.dispatch('getAllMessages')
  }
}
</script>

<style>

</style>
