<template>
  <div class="tabbar BUI" :id="name">
    <router-link
      :class="{
        tab: true,
        selected: i == index ? true : false,
        btripple: true,
      }"
      v-for="(item, i) in items"
      :key="`tab_${i}_${item.name}`"
      :data-index="i"
      :to="item.url"
    >
      {{ item.name }}
    </router-link>
    <div class="cursor"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      target: null,
      cursor: null,
      select: null,
      tabs: null,
      index: 0,
    };
  },
  watch: {
    $route(to) {
      // react to route changes...
      this.index = this.items.findIndex((e) => e.url === to.path);
      const target = this.target.querySelector(`[data-index="${this.index}"]`);
      // target.addClass("selected");
      this.hitTab(target);
    },
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    callback: {
      type: Function,
      required: true,
    },
  },
  mounted() {
    this.target = document.getElementById(this.name);
    this.initTabs();
    /* const mytab = new tab(document.getElementById("mytab"), function (e) {
    }); */
  },
  methods: {
    initTabs() {
      this.tabs = this.target.getElementsByClassName("tab");
      const cursors = this.target.getElementsByClassName("cursor");
      this.cursor = cursors[0];
      this.setCursor();
    },
    setCursor() {
      const selector = this.target.getElementsByClassName("selected");
      this.select = selector[0];
      // const rect =  this.select.getBoundingClientRect();
      this.cursor.style.transform = `translateX(${
        this.select.offsetLeft + 15
      }px)`;
      this.cursor.style.width = `${this.select.offsetWidth - 30}px`;
      this.cursor.style.display = "block";
      Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
      this.scrollTo(this.select.offsetLeft - 40, 500);
    },
    unselect() {
      for (const tab of this.tabs) {
        tab.classList.remove("selected");
      }
    },
    hitTab(target) {
      this.unselect();
      target.classList.add("selected");
      this.setCursor();
      if (this.callback) this.callback(target.getAttribute("data-index"));
      this.$emit("setTabIndex", target.getAttribute("data-index"));
    },
    scrollTo(to, duration) {
      const start = this.target.scrollLeft;
      const change = to - start;
      let currentTime = 0;
      const increment = 20;
      const animateScroll = function () {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        this.target.scrollLeft = val;
        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      }.bind(this);
      animateScroll();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/UI/TabBar.scss";
</style>