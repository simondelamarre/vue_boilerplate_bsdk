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
    examples: null
  },
  mutations: {
    examples: (state: { apis: any }, res: any) => {
      state.apis = res
    },
  },
  actions: {
    async getExamples({
      commit
    }: any, payload: any) {
      const examples = await ExampleRepository.get(payload);
      return commit('examples', examples);
    },
    async countExamples({
      commit
    }: any, payload: any) {
      const examples = await ExampleRepository.count(payload);
      return commit('examples', examples);
    },
    async postExample({
      commit
    }: any, payload: any) {
      const examples = await ExampleRepository.post(payload);
      return commit('examples', examples);
    },
    async putExample({
      commit
    }: any, payload: any) {
      const examples = await ExampleRepository.put(payload);
      return commit('examples', examples);
    },
    async deleteExample({
      commit
    }: any, payload: any) {
      const examples = await ExampleRepository.delete(payload);
      return commit('examples', examples);
    },
  },
}