<template>
  <div class="hello"> 
    <input @keypress="logger" type="text" placeholder="Bot Name" v-model="name" />
    <input @keypress="logger" type="number" placeholder="Attack Value" v-model="attack" />
    <input @keypress="logger" type="number" placeholder="Health Value" v-model="health" />
    <button @click="clearInputs" >Clear</button>
    <button type="submit" @click="addBots(name, attack, health); clearInputs()">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'form',
  data() {
    return {
      name: "",
      attack: 0,
      health: 0,
      bots: this.$store.state.bots
    }
  },
  methods: {
    clearInputs() {
      this.name = "";
      this.attack = 0;
      this.health = 0;
    },
    logger(e) {
      console.log(e);
    },
    addBots(name, attack, health) {
      this.$store.commit('addBots', [{name, attack, health}])
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
