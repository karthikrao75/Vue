Vue.component("greeting", {
  template: "<p>My Name is {{name}}</p>",
  data: function() {
    return {
      name: "karthik"
    };
  }
});

new Vue({
  el: "#VueApp4",
  data: {
    FavFood: "your favorate food is : "
  },
  methods: {
    readrefs: function() {
      this.FavFood = this.FavFood+this.$refs.input.value;
    }
  }
});
