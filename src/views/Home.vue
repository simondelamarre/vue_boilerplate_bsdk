<template>
  <PageContent msg="APIM vue typescript boilerPlate">
    <div class="row">
      <div class="col">
        <p>
          This is a basic vuejs progressive web app writted in typescript and
          from a basic vue-cli default setup without resources and any
          stylesheet framework thatt allow you to work and use your favorite one
          or to work from scratch for small signle page webapps...<br />
          You can find this boilerPlate source code on a public GitHub
          repository her:<br />
          <a
            href="https://github.com/simondelamarre/vue_boilerplate_bsdk"
            target="_blank"
          >
            https://github.com/simondelamarre/vue_boilerplate_bsdk
          </a>
        </p>
        <h2>BSDK</h2>
        <p>
          The first object of this boilerplate is to expose how to use bige SDK
          and the authorized third-parrty apis from https://apim.bige.dev. So to
          get started and understand the concept of BSDK visit
          <router-link to="/bsdk">/bsdk</router-link><br />
          Note that BSDK is not only dedicated to VueJS developpers, thats just
          a prouf of concept interrgrrated in a modern Vuejs app.
        </p>
        <h2>Ui</h2>
        <p>
          To make it work, BSDK purpose an XXS user interface, you can try and
          learn about this small framework on this boillerplate by visiting
          <router-link to="/ui">/ui</router-link><br />
        </p>
        <h2>Modules</h2>
        <p>
          To make it readable, this boileerplate vuex has been splitted by
          modules because i think thats a nice and user friendly project
          organization.
          <router-link to="/modules">/modules</router-link><br />
        </p>
        <h2>Repositories</h2>
        <p>
          Any calls and API logic from bsdk to apim is described in some
          reposiroties that permit to request resources from any
          mixins/view/components and obviously by using vuex store state of
          modules.
          <router-link to="/repositories">/repositories</router-link><br />
        </p>
        <h2>Dependencies</h2>
        <p>
          This VueJS app example also use somes Dependencies such as :<br />
          - bigesdk<br />
          - vue-prism-editor<br />
          Vue prism is only dedicated to expose some codes and make no sens on
          any projects...
        </p>
      </div>
      <div class="col centered">
        <img src="../assets/logo.png" width="200" height="200" />
      </div>
    </div>
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
