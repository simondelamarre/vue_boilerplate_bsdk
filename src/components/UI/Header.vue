<template>
  <div class="header">
    <div class="logo">
      <img
        src="https://storage.googleapis.com/storage.bige.dev/SVG/FONT_DARK_DENSE.svg"
        height="50"
      />
    </div>
    <div class="actions">
      <div id="account"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    /* this.$store.state.BSDK.APIM.UI.accountModule(
      document.querySelector("#account"),
      false,
      {
        align: "pr",
        displayName: true,
        size: "sm",
        ripple: true,
      }
    ); */
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  background: white;
  color: #11003b;
  display: flex;
  .logo {
    height: 100%;
    width: auto;
    img {
      margin: 10px;
    }
  }
  .actions {
    flex: 1;
  }
}
</style>