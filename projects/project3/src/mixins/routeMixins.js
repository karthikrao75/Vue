import router from "../router";
export default {
  data() {
    return {
      // userProfile:{
      //     email:'',
      //     firstName:''
      // }
    };
  },
  methods: {
    handleRoute(user) {
      if (user.status === "") {
        router.push("/createProfile");
      } else if (user.status === "Registered") {
        router.push("/activationPage");
      }
    }
  }
};
            