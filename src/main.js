import Vue from "vue";
import App from "./App.vue";
import VueScrollReveal from "vue-scroll-reveal";
import moment from "moment"


Vue.config.productionTip = false;

Vue.use(VueScrollReveal);
Vue.use(moment);

new Vue({
  render: h => h(App)
}).$mount("#app");
