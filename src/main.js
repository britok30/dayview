import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollReveal from "vue-scroll-reveal";
import VueToasted from "vue-toasted";

Vue.config.productionTip = false;

Vue.use(VueScrollReveal);
Vue.use(VueToasted, {
  iconPack: "fontawesome"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
