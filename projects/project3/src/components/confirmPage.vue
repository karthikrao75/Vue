<template>
  <div id="confirmPage">
    <h1>Confirm Page</h1>
    first Name:
    <input v-model="user.firstName">
    email:
    <input v-model="user.email">
    <br>
    <p>name:{{user.firstName}}</p>
    <p>name:{{$store.state.userProfile.firstName}}</p>
    <!-- <p>name:{{$userProfile1.firstName}}</p> -->
    <button @click="resetStore()">Reset</button>
    <button @click="navigate()">confirm</button>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "confirmPage",
  data() {
    return {
      user : this.$store.state.userProfile
    }
  },
  computed:{
      // user(){
      //   // return this.$store.state.userProfile
      //   // return this.$userProfile1
      // }
  },
  methods:{
      resetStore(){
          this.$store.commit('reset')
      },
      navigate(){
        router.push('/activationPage')
      }
  }
};
</script>
<style scoped>
</style>
