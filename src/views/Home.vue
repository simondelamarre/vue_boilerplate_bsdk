<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" height="80" />
    <img
      src="https://storage.googleapis.com/storage.bige.dev/SVG/FONT_DARK_DENSE.svg"
      height="80"
    />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
