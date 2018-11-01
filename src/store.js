import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bots: []
  },
  mutations: {
    addBots(state, data) {
     return (state.bots = [...state.bots, ...data]);
    }
  },
  actions: {
 
  }
});
