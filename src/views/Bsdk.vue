<template>
  <PageContent msg="BSDK">
    <div class="row">
      <div class="col p-r">
        <h2>Init first</h2>
        <div>
          First create an instance of BSDK, in this boilerplate BSDK is stored
          in vuex from BSDK.module so we only have too dispatch the init
          command...
        </div>
        <h3>BSDK module initAPIM</h3>
        <div>
          Actually the beta 1.0.80 of bsdk have a little quick also the
          declaration name is duplicated, it will be patched in future version.
        </div>
        <h3>Define environement var</h3>
        <div>
          Has you can see, i have implemented .env to store your private app
          token. this token authorize or reject the APIM access between the
          validity and obviously the authorized domains that are defined in your
          application setup white list.
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="instantiate"
            line-numbers
            lang="javascript"
            :insertSpaces="true"
          >
          </prism-editor>
        </div>
        <br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="initAPIM"
            line-numbers
            lang="javascript"
            :insertSpaces="true"
          >
          </prism-editor>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col p-r">
        <h2>Your Application setup</h2>
        <div>
          Once BSDK is correctly inited, you are able to get or watch your APIM
          application setup. In this setup you will find the list of third-party
          services access rights. Thats the APIs that have been authorized by
          APIM maintainers for you application. In this sample APIM has
          authorized only one API whos name is example. This is from an api
          boilerplate and you can find the example api documentation here :
          <a href="https://apim.bige.dev/gateway/api/3" target="_blank">
            example API documentation
          </a>
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="gatesSample"
            line-numbers
            lang="javascript"
            :insertSpaces="true"
          >
          </prism-editor>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col p-r">
        <h3>Gates access</h3>
        <div>
          Your application setup refer to any APIs that have authorized your
          application and BSDK simmplify the access by automatically manging any
          apiKeys and other access needs. So to call any endpoint of an api you
          are able to write something like the code opposite
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="callExample"
            line-numbers
            lang="javascript"
            :insertSpaces="true"
          >
          </prism-editor>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col p-r">
        <h3>Retrieve Endpoint Documentation</h3>
        <div>
          By using BSDK, you can retrieve any endpoint documentation directly in
          you application by calling .doc() like the example code opposite
        </div>
        <h3>Usecase</h3>
        <div>
          I love the idea that retrieve any APIs documentation directly in you
          app because that allow you to continuously be aware with updates and
          any kind of params on complexe endpoint. Has you can see in this
          example, you don't have to be proud of security then its retrieve a
          complete list of query params such as, offset, limit, skip, order,
          where and a complete list of accepted fields for the get:/example
          endpoint.<br />
          Thats due to a user friendly and clean OAS3 APIs documentation from
          this boilerplate :
          <a
            href="https://github.com/simondelamarre/bige_loopback_boilerplate"
            target="_blank"
          >
            https://github.com/simondelamarre/bige_loopback_boilerplate
          </a>
          Also when you have any question about an endpoint, you can visit the
          official documentation and APIM has also a swagger interface for
          peaople who like to use swagger.
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="docExample"
            line-numbers
            lang="javascript"
            :insertSpaces="true"
          >
          </prism-editor>
        </div>
        <br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="docResponse"
            line-numbers
            lang="javascript"
            :insertSpaces="true"
          >
          </prism-editor>
        </div>
      </div>
    </div>
    <br />
    <div>
      <h2 class="centered">Whats next ?</h2>
      <p class="centered">
        The objective of this boierplate is not to document any example
        Endpoints, but to enable and make BSDK usecase redable.<br />Also I'm
        going to sharing you a form that will explain GET;POST;PUT;DELETE<br />
        functions from APIM example APIs in an other page after models and
        repositories.
      </p>
      <p class="centered">
        To continue, I suggest that you learn about BSDK.UI...
      </p>
      <div class="BUI centered">
        <router-link to="/ui">
          <div class="button primary btripple dark">BSDK UI</div>
        </router-link>
      </div>
      <br /><br />
    </div>
  </PageContent>
</template>
<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

import PageContent from "@/components/PageContent.vue"; // @ is an alias to /src

export default {
  async beforeMount() {
    const docEx = await this.$store.state.BSDK.APIM.gates.example.endpoint[
      "get:/example"
    ].doc();
    console.log("this.docResponse ", this.docResponse);
    this.docResponse = JSON.stringify(docEx, null, 2);
  },
  data() {
    return {
      instantiate: `$store.dispatch('initAPIM');`,
      initAPIM: `const APIM = new BSDK.BSDK(
        process.env.VUE_APP_BSDK_KEY,
        window.document.body,
        (e: any) => {
          commit('message', e)
        },
        false
      )`,
      gatesSample: `{
    gates:{
      example:{
        endpoint:{
          "get:/example":{
            setup:{
              cost:0,
              gate:"example",
              method:"get",
              route:"/example"
            }
          },
          "post:/example": [...]
        }
      }
    }
  }`,
      callExample: `await $store.state.BSDK.APIM.gates.example.endpoint['get:/example'].call(
        {}, // path params
        {}, // query params
        {}, // body params
        "application/json");`,
      docExample: `await $store.state.BSDK.APIM.gates.example.endpoint['get:/example'].doc();`,
      docResponse: "",
    };
  },
  components: {
    PageContent,
    PrismEditor,
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // returns javascript
    },
    highlighterJSON(code) {
      return highlight(code, languages.js); // returns webmanifest JSON
    },
  },
};
</script>
