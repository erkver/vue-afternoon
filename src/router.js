import Vue from "vue";
import Router from "vue-router";
import Home from "./Views/Home.vue";
import Collection from "./Views/Collection.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/bots",
      name: "bots",
      component: Collection,
      props: true
    }
  ]
});
