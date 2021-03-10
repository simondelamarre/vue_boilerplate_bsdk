import Vue from 'vue'
import Vuex from 'vuex'
// import modules from './modules';
import BSDK from "./modules/BSDK.module";
import Example from "./modules/Example.module";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  actions: {
  },
  modules: { BSDK, Example },
  mutations: {
    setValue(state, item) {
      // agnostic state that allow you to set any on global state
      (state as { [key: string]: any })[item.target as string] = item.value
    }
  }
})
