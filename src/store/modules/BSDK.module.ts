
/**
 * Example Module
 * This is a store module example that allow you to divide and access state from name...
 * You can use  repository factory to load somes of repo or directly invoque repos like in the example below
 * import Repository from "../../repositories/RepositoryFactory";
 **/
import { BSDK } from "bigesdk";

export default {
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
      const APIM = new BSDK.BSDK(
        process.env.VUE_APP_BSDK_KEY,
        window.document.body,
        (e: any) => {
          commit('message', e)
        },
        false
      )
      return commit('APIM', APIM)
    }
  },
}