import Vue from "vue";
import App from "./App.vue";
import {store} from "./store"
import vuecookies from 'vue-cookies'

import router from "./router";

Vue.use(vuecookies)
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
