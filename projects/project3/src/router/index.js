import welcomePage from "../components/welcomePage.vue";
import createProfile from "../components/createProfile.vue";
import confirmPage from "../components/confirmPage.vue";
import activationPage from "../components/activationPage.vue";
import vueRouter from "vue-router";
import Vue from "vue";

Vue.use(vueRouter);

export default new vueRouter({
  routes: [
    { path: "/welcome", component: welcomePage },
   // { path: "/createProfile/:name", component: createProfile }
   { path: "/createProfile", component: createProfile },
   {path:"/confirmPage", component:confirmPage},
   {path:"/activationPage", component:activationPage}
  ],
  mode: 'abstract'
});
