<template>
  <div class="hello"> 
    <div :key="i" v-for="(bot, i) in bots">
      <p>Bot name: {{bot.name}}</p>
      <p>Attack points: {{bot.attack}}</p>
      <p>Health: {{bot.health}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bots',
  data() {
    return {
      bots: this.$store.state.bots
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>