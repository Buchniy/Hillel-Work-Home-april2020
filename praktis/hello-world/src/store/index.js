import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {

    async asyncSignIn(context, payload) {
      try {
        const response = await fetch('http://localhost:3005/sign-in', payload);
        const isAuth = await response.json();
console.log(isAuth, 'isAuth');
        // return data.isAuthorized || false;
      } catch(error) {
        console.log(error, 'error');
      }
    }
  },
  modules: {
  }
})
