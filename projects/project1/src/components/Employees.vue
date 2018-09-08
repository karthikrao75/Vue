<template>
<div id="employees">
  <ul>
    <li v-for="(employee,index) in employees" v-on:click="employee.show=!employee.show" :key="index">
      <h2>{{employee.name}}</h2>
      <h3 v-show="employee.show">{{employee.role}}</h3>
    </li>
  </ul>
  <button v-on:click="deleteEmployee">Delete Employee</button>
</div>
</template>

<script>
export default {
  // props: ['employees'],
  props:{
    employees:{
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods:{
    deleteEmployee(){
      this.employees.pop();
    }
  },
  //life cycle hooks
  beforeCreate(){
    alert("before Created");
  },
  created(){
    alert('created');
  },
  beforeMount(){
    alert('beforeMount');
  },
  mounted(){
   alert('mounted');
  },
  beforeUpdate(){
   alert('beforeUpdate');
  },
  updated(){
   alert('updated');
  }
};
</script>

<style>
#employees {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
