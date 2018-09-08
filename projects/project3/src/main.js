import Vue from "vue";
import App from "./App.vue";
import {store} from "./store"

import router from "./router";

Vue.prototype.$userProfile1={
  email:'',
  firstName:''
}

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
