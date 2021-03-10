import { BSDK } from "bigesdk";

export default {
  getInstance() {
    window.APIM = new BSDK.BSDK(
      process.env.VUE_APP_BSDK_KEY,
      window.document.body,
      (e: any) => {
        console.log('message', e)
      },
      false
    );
    return window.APIM;
  },
};
/**
 * To simplify the access we can declare as global or access from store.state
 */
declare global {
  interface Window { APIM: any; }
}
