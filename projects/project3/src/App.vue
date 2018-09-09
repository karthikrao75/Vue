<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import router from "./router";
import routeMixins from "./mixins/routeMixins";

export default {
  name: "app",
  created() {
    if (window.location.hash) {
      let hash = window.location.hash.substring(1).split("=");
      let key = hash[0];
      let value = hash[1];
      if (key && key === "email" && value) {
        this.resolveRouteView(value);
      }
    }
    this.defaultViewHandler();
  },
  mixins: [routeMixins],
  methods: {
    defaultViewHandler() {
      //this.$cookies.set("userEmail", "karthik.rao@gg.cc", "180d");
      this.$cookies.remove("userEmail");
      if (!this.$cookies.get("userEmail")) {
        router.push("/welcome");
      } else {
        this.resolveRouteView(this.$cookies.get("userEmail"));
      }
    },
    resolveRouteView(email) {
      //Do backend call by passing email from cookie and set it to user profile
      this.$store.state.userProfile.status = "Registered";
      this.$store.state.userProfile.firstName = "srikanth";
      this.$store.state.userProfile.email = email;
      this.handleRoute(this.$store.state.userProfile);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
