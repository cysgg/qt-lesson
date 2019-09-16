<template>
  <div id="chilid1" @click="appFun">
    {{msg}}
    {{a}}
    {{b}}
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    msg: {
      type: String
    },
    appFun: {
      type: Function
    },
    a: {
      type: Number
    },
    b: {
      type: Number
    }
  }
}
</script>

<style scoped>
</style>
