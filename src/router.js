import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import NotFound from "./components/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "app",
      component: App
    },
    {
      path: "/404",
      component: NotFound
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
