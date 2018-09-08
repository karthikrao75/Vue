import Vue from "vue";
import App from "./components/App.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

Vue.component("view_header", Header);
Vue.component("view_footer", Footer);

export const eventBus = new Vue();

new Vue({
  el: "#app",
  render: h => h(App)
});
