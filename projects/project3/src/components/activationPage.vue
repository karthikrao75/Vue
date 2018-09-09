<template>
  <div id="activationPage">
    <h1>Activation Page</h1>
    first Name:
    <label>{{user.firstName}}</label>
    email:
    <label>{{user.email}}</label>
    <br>
    <button>Activte</button>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "activationPage",
  data() {
    return {
     // user : this.$store.state.userProfile
    }
  },
  computed:{
      user(){
         return this.$store.state.userProfile
        // return this.$userProfile1
      }
  }
};
</script>
<style scoped>
</style>
