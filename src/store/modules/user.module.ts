/**
 * Example Module
 * This is a store module example that allow you to divide and access state from name...
 * You can use  repository factory to load somes of repo or directly invoque repos like in the example below
 * import Repository from "../../repositories/RepositoryFactory";
 **/

// import store from "../index";
import ExampleRepository from "../../repositories/Example.repository";

export default {
  state: {
    user: null,
    isLogged: false
  },
  mutations: {
    user: (state: { user: any }, res: any) => {
      state.user = res
    },
  },
  actions: {
    async login({
      commit
    }: any, user: any) {
      return commit('user', user);
    },
    async logout({
      commit
    }: any) {
      return commit('user', null);
    },
  },
}