<template>
  <PageContent msg="BSDK">
    <div>about bige SDK</div>
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
export default class BSDK extends Vue {}
</script>
