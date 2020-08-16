import Vue from 'vue'
import Vuex from 'vuex'
import {$http} from '../helpers/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthorized: false
  },
  mutations: {
    'SET_IS_AUTH'(state, payload) {
      state.isAuthorized = payload;
    }
    },
    getters: {
      'GET_IS_AUTH'({isAuthorized}) {
        return isAuthorized;
      }
    },
  actions: {

    async asyncSignIn({commit}, payload) {
      try {
        // const data = $http('http://localhost:3005/sign-in', payload);

        const respnose = await fetch('http://localhost:3005/sign-in', payload);
        const data = await respnose.json();

        // const data = await response.json();
        console.log(data, 'data');
        commit('SET_IS_AUTH', data.isAuthorized);
        // console.log(data, 'data');
        return data.isAuthorized || false;
        // return data.isAuthorized || false;
      } catch(error) {
        console.log(error, 'error');
      }
    }
  },
  modules: {
  }
})
