import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    height: 0,
    width: window.innerWidth
  },
  getters: {
    getWidth(state) {
      return state.width;
    },
    getHeight(state) {
      return state.height;
    },
  },
  mutations: {
    setHeight(state, n) {
      state.height = n;
    },
    setWidth(state, n) {
      state.width = n;
    },
  }
})
