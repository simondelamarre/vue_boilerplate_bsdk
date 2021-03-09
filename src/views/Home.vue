<template>
  <PageContent msg="APIM vue typescript boilerPlate">
    <div>test content</div>
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
export default class Home extends Vue {}
</script>
