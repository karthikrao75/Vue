<template>
  <div id="app">
    <!-- <view_header v-bind:companyName="companyName" v-on:changeCompanyName="updateCompanyName"></view_header> -->
    <view_header v-bind:companyName="companyName"></view_header>
    <view_employees v-bind:employees="employees"></view_employees>
    <!-- <hr/>
    <view_employees v-bind:employees="employees"></view_employees>
    <view_footer v-bind:companyName="companyName"></view_footer> -->
  </div>
</template>

<script>
import Employees from "./Employees.vue";
export default {
  components: {
    view_employees: Employees
  },
  data() {
    return {
      employees: [
        { name: "karthik", role: "CEO", show: false },
        { name: "Pradeep", role: "Developer", show: false },
        { name: "Madhu", role: "Tester", show: false },
        { name: "Teju", role: "Deployer", show: false },
        { name: "Mani", role: "Security Guard", show: false }
      ],
      companyName: "Sun Micro system Limited"
    };
  },
  methods: {
    // updateCompanyName(name) {
    //   this.companyName = name;
    // }
  }
};
</script>

<style>
</style>
