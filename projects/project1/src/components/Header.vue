<template>
<div id="header">
    <header>
    <h1>{{companyName}}</h1>
    </header>
    <button v-on:click="changeCompanyName">Rename Company Name</button>
</div>
</template>

<script>
import {eventBus} from '../main';

export default {
  props: ["companyName"],
  data() {
    return {};
  },
  methods:{
      changeCompanyName (){
         // this.$emit('changeCompanyName',"SUN System");
         this.companyName="SUN System";
         eventBus.$emit('changeCompanyName',this.companyName);
      }
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  text-align: center;
  color: purple;
}
</style>
