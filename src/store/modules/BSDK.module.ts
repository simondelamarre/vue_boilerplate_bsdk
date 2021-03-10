/**
 * Example Module
 * This is a store module example that allow you to divide and access state from name...
 * You can use  repository factory to load somes of repo or directly invoque repos like in the example below
 * import Repository from "../../repositories/RepositoryFactory";
 **/

import { Module } from "vuex";
import BsdkRepository from "../../repositories/BsdkReposittory";

const BSDK: Module<any, any> = {
  state: {
    APIM: null,
    message: null
  },
  mutations: {
    APIM: (state: { APIM: any }, res: any) => {
      state.APIM = res
    },
    message: (state: { message: any }, res: any) => {
      state.message = res
    }
  },
  actions: {
    async initAPIM({ commit }: any) {
      const APIM = await BsdkRepository.getInstance();
      return commit('APIM', APIM);
    }
  },
}
export default BSDK;
