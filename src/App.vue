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
      ],
      currentTab: 0,
      transitionName: "",
    };
  },
  watch: {
    $route(to) {
      /* const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length; */
      const findIndex = this.tabItems.findIndex((e) => e.url === to.path);
      this.transitionName =
        findIndex > this.currentTab ? "slide-right" : "slide-left";
      console.log("this.transitionName ", this.transitionName);
    },
  },
  components: { Header, TabBar, Footer },
  beforeMount() {
    this.$store.dispatch("initAPIM");
  },
  methods: {
    setTab(e) {
      this.currentTab = parseInt(e);
      // this.$router.push({ path: this.tabItems[e].url });
    },
  },
};
</script>
<style lang="scss">
@import "../node_modules/bigesdk/dist/css/BUI.css";
@import "./styles/index.scss";
</style>
