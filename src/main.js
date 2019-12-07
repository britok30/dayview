import Vue from "vue";
import App from "./App.vue";
import VueScrollReveal from "vue-scroll-reveal";
import VueToasted from "vue-toasted";

Vue.config.productionTip = false;

Vue.use(VueScrollReveal);
Vue.use(VueToasted, {
  iconPack: "fontawesome"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
