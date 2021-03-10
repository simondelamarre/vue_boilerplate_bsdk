<template>
  <PageContent msg="Example">
    <div>This is a basic test formular to test our Example API from BSDK.</div>
  </PageContent>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageContent from "@/components/PageContent.vue"; // @ is an alias to /src

@Component({
  components: {
    PageContent,
  },
})
export default class Example extends Vue {}
</script>
