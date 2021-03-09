<template>
  <PageContent msg="Ui">
    <div>about bige sdk UI</div>
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
export default class Ui extends Vue {}
</script>
