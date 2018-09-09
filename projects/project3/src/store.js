import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        userProfile:{
            email:'',
            firstName:'',
            status:''
        }
    },
    getters:{
        userProfile(state){
            return state.userProfile
        }
    },
    mutations:{
        reset(state){
            Object.keys(initialStateCopy).forEach(key => {
                state[key] = initialStateCopy[key]
              })
        }
    }// ,
   // strict: true
})

const initialStateCopy = JSON.parse(JSON.stringify(store.state))