<template>
  <div id="app">
    <Second :Second="Second" />
    <Minute :Minute="Minute" />
    <Hour :Hour="Hour" />
    <Apm :Apm="Apm" />
    <Week :Week="Week" />
    <Day :Day="Day" />
    <Month :Month="Month" />
  </div>
</template>

<script>
// @ alias 短链接
import Second from "@/components/Second";
import Minute from "@/components/Minute";
import Hour from "@/components/Hour";
import Apm from "@/components/Apm";
import Week from "@/components/Week";
import Day from "@/components/Day";
import Month from "@/components/Month";
export default {
  name: "App",
  data() {
    return {
      Second : '',
      Minute : '',
      Hour : '',
      Apm : '',
      Week : '',
      Day : '',
      Month : ''
    }
  },
  components: {
    Second,
    Minute,
    Hour,
    Apm,
    Week,
    Day,
    Month
  },
  created() {
    this.start();
  },
  methods: {
    start() {
      // setInterval(() => {
      //   let data = new Date();
      //   this.Second = data.getSeconds()
      // }, 1000);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
