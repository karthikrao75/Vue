<template>
  <div id="createProfile">
    <h1>Create Profile</h1>
    <h2>{{message}}</h2>
    first Name:
    <input v-model="user.firstName">
    email:
    <input v-model="user.email">
    <br>
    <p>name:{{user.firstName}}</p>
    <!-- <p>name:{{$store.state.userProfile.firstName}}</p> -->
    <p>{{$userProfile1.firstName}}</p>
    <button @click="navigate()">submit</button>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "createProfile",
  computed: {
    user(){
       return this.$store.state.userProfile
      // return this.$userProfile1
    }
  },
  data() {
    return {
      message: this.$route.query.name,
      // user:  this.$store.state.userProfile
      // user: this.$userProfile1
    };
  },
  methods: {
    navigate() {
      router.push("/confirmPage");
    }
  }
};
</script>
<style scoped>
</style>
