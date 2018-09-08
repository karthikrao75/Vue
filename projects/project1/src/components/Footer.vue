<template>
<footer>
    <p>{{copyRight}} {{companyName}}</p>
</footer>
</template>

<script>
import {eventBus} from '../main';

export default {
  props: ["companyName"],
  data() {
    return {
      copyRight: "All @Copyrights 2018 received"
    };
  },
  methods: {},
  created(){
      eventBus.$on('changeCompanyName',(data)=>{
          this.companyName=data;
      })
  }
};
</script>

<style>
footer {
  background: darkslategrey;
  padding: 6px;
  text-align: center;
}
</style>
