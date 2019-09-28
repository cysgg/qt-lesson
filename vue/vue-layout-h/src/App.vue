<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <el-button :plain="true" @click="openVn">VNode</el-button>
    <my-elrow tag="div" :jiange="20">
      <!-- 列 -->
      <my-elCol :span="4">4</my-elCol>
      <my-elCol :span="16" :offset="1">5</my-elCol>
      <my-elCol :span="2" :offset="1">5</my-elCol>
    </my-elrow>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ELRow from './components/EL-Row'
import ELCol from './components/EL-Col'

export default {
  name: 'App',
  components: {
    HelloWorld,
    'my-elrow': ELRow,
    'my-elCol': ELCol
  },
  methods: {
    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ])
      });
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
