<template>
  <div id="app">
    <router-link to="/">View Form</router-link>
    <router-link to="/bots">View Bots</router-link>
    <router-view />
  </div>
</template>

<script>
import Home from './Views/Home.vue'
import Collection from './Views/Collection.vue'

export default {
  name: 'app',
  components: {
    Home,
    Collection
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
