<template>
  <div id="welcome">
    <h1>Welcome to MyApp</h1>
    <button v-on:click="navigate()">Click ME to route</button>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: 'welcome',
  data () {
    return {
      
    }
  },
  methods:{
    navigate(){
     // router.push({path:'/createProfile/karthik'})
      router.push({path:'/createProfile',query:{name:'karthik'}})
    }
  }
}
</script>
<style scoped>

</style>
