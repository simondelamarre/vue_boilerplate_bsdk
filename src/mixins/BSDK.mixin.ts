/* export default {
  data() {
    return {
      BSDKsetup: null,
      APIM: null
    }
  },
  mounted: function () {
    this.APIM = new window.BSDK(
      process.env.VUE_APP_BSDK_KEY,
      window.document.body,
      null,
      false
    );
    this.APIM.setup.watch(async (val) => {
      this.BSDKsetup = val;
    });
  },
  beforeDestroy: function () { },
  methods: {
  }
} */