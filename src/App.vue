<template>
  <div id="app">
    <div class="stickyHeader">
      <Header></Header>
      <TabBar
        name="AppTab"
        :items="tabItems"
        :callback="setTab"
        @setTabIndex="setTab"
      ></TabBar>
    </div>
    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./components/UI/Header";
import TabBar from "./components/UI/TabBar";
import Footer from "./components/UI/Footer";
export default {
  data() {
    return {
      tabItems: [
        { name: "Home", url: "/" },
        /* { name: "About", url: "/about" }, */
        { name: "BIGE SDK", url: "/bsdk" },
        { name: "BSDK User Interface", url: "/ui" },
        { name: "Modules", url: "/modules" },
        { name: "Repositories", url: "/repositories" },
        { name: "Test Example Module", url: "/example" },
      ],
      currentTab: 0,
      transitionName: "",
    };
  },
  watch: {
    $route(to) {
      const findIndex = this.tabItems.findIndex((e) => e.url === to.path);
      this.transitionName =
        findIndex > this.currentTab ? "slide-right" : "slide-left";
    },
  },
  components: { Header, TabBar, Footer },
  async beforeMount() {
    await this.$store.dispatch("initAPIM");
  },
  methods: {
    setTab(e) {
      this.currentTab = parseInt(e);
    },
  },
};
</script>
<style lang="scss">
@import "../node_modules/bigesdk/dist/css/BUI.css";
@import "./styles/index.scss";
</style>
