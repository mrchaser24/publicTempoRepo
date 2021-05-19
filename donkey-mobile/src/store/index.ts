import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    themeColor: localStorage.getItem('setThemeColor') ? localStorage.getItem('setThemeColor') : 'day', // default theme color `day`
    userDetails: {},
    currentIndex:0
  },
  mutations: {
    setcurrentIndex(state, index){
      state.currentIndex = index
    },
    setThemeColor(state, status) {
      localStorage.setItem('setThemeColor', status);
      state.themeColor = status;
    },
    setUserDetails(state, status) {
      state.userDetails = status;
    },
  },
  actions: {
    setcurrentIndex({ commit }, payload) {
      commit('setcurrentIndex', payload)
    },
    setThemeColor({ commit }, payload) {
      commit('setThemeColor', payload)
    },
    setUserDetails({ commit }, payload) {
      commit('setUserDetails', payload)
    },
  },
  modules: {
  }
})
