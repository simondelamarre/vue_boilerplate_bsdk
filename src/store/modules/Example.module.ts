/**
 * Example Module
 * This is a store module example that allow you to divide and access state from name...
 * You can use  repository factory to load somes of repo or directly invoque repos like in the example below
 * import Repository from "../../repositories/RepositoryFactory";
 **/

// import store from "../index";
import { ExampleModel, ExampleQuery } from "@/models/Example.model";
import { Module } from "vuex";
import ExampleRepository from "../../repositories/Example.repository";

const Example: Module<any, any> = {
  state: {
    examples: null,
    example: null
  },
  mutations: {
    examples: (state: { examples: any }, res: any) => {
      state.examples = res
    },
    example: (state: { example: any }, res: any) => {
      state.example = res
    },
  },
  actions: {
    async getExamples({
      commit
    }: any, payload: Partial<ExampleQuery>) {
      const result = await ExampleRepository.get({}, payload, {});
      return commit('examples', result);
    },
    async countExamples({
      commit
    }: any, payload: Partial<ExampleQuery>) {
      const result = await ExampleRepository.count({}, payload, {});
      return commit('examples', result);
    },
    async postExample({
      commit
    }: any, payload: Partial<ExampleModel>) {
      const result = await ExampleRepository.post({}, {}, payload);
      this.dispatch('getExamples', {});
      return commit('example', result);
    },
    async putExample({
      commit
    }: any, payload: ExampleModel) {
      const result = await ExampleRepository.put({ id: payload.ID }, {}, { name: payload.name });
      this.dispatch('getExamples', {});
      return commit('example', result);
    },
    async patchExample({
      commit
    }: any, payload: ExampleModel) {
      const result = await ExampleRepository.patch({ id: payload.ID }, {}, { name: payload.name });
      this.dispatch('getExamples', {});
      return commit('example', result);
    },
    async deleteExample({
      commit
    }: any, payload: { ID: number }) {
      const result = await ExampleRepository.delete({ id: payload.ID }, {}, {});
      this.dispatch('getExamples', {});
      return commit('example', result);
    },
  },
}

export default Example;