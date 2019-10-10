import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pessoas: []
  },
  mutations: {
    PESSOAS (state, payload) {
      state.pessoas = payload
    }
  },
  actions: {
    getPessoas: ({ commit }) => axios.get('http://localhost:8000/api/pessoas/')
      .then(data => commit('PESSOAS', data.data))
  }
})
