/**
 * Example Module
 * This is a store module example that allow you to divide and access state from name...
 * You can use  repository factory to load somes of repo or directly invoque repos like in the example below
 * import Repository from "../../repositories/RepositoryFactory";
 **/

// import store from "../index";
import { ExampleModel, ExampleQuery } from "@/models/Example.datamodel";
import { Module } from "vuex";
import ExampleRepository from "../../repositories/Example.repository";

const Example: Module<any, any> = {
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
    }: any, payload: ExampleQuery) {
      const examples = await ExampleRepository.get({}, payload, {});
      return commit('examples', examples);
    },
    async countExamples({
      commit
    }: any, payload: ExampleQuery) {
      const examples = await ExampleRepository.count({}, payload, {});
      return commit('examples', examples);
    },
    async postExample({
      commit
    }: any, payload: Partial<ExampleModel>) {
      const examples = await ExampleRepository.post({}, {}, payload);
      return commit('examples', examples);
    },
    async putExample({
      commit
    }: any, payload: { ID: number, body: Partial<ExampleModel> }) {
      const examples = await ExampleRepository.put({ ID: payload.ID }, {}, payload.body);
      return commit('examples', examples);
    },
    async deleteExample({
      commit
    }: any, payload: { ID: number }) {
      const examples = await ExampleRepository.delete({ ID: payload.ID }, {}, {});
      return commit('examples', examples);
    },
  },
}
export default Example;