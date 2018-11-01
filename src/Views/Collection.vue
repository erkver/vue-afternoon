<template>
  <div id="app">
    <Bots />
  </div>
</template>

<script>
import Bots from "../components/Bots.vue";

export default {
  name: 'collection',
  components: {
    Bots
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>