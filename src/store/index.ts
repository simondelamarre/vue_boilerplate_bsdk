import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    APIM: null
  },
  actions: {
  },
  modules,
  mutations: {
    setValue(state, item) {
      // agnostic state that allow you to set any on global state
      (state as { [key: string]: any })[item.target as string] = item.value
    }
  }
})
