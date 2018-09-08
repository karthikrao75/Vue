<template>
  <div id="app">
    <form-helper msg="Welcome to Your Vue.js App">
      <!-- <h1 slot="title">{{title}}</h1>
      <p slot="text">paragraph from slot</p> -->
      <div slot="form-header">
        <h3>Title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="Name" required/>
        <input type="password" placeholder="password" required/>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    "form-helper": HelloWorld
  },
  data() {
    return {
      title: "title from the slot"
    };
  },
  methods:{
    handleSubmit(){
      
    }
  }
};
</script>

<style></style>
