<template>
  <PageContent msg="Repositories">
    <div class="row">
      <div class="col">
        <h2>Why repositories?</h2>
        <p>
          The only objective of repositories is to split any logic from
          others.<br />
          Any application logic like an API call need to be accessible by
          anywhere, obviously by your Vuex Store and also by any views,
          components or others mixins.<br />
          Thats the reason why this Boilerplate have a logic of repos...
        </p>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col">
        <h2>No blabla</h2>
        <p>
          You can find a basic API endpoints repoository in
          /repositories/Example.repository.ts with GET, POST, PUT, PATCH and
          DELETE logic from BSDK and APIM Exemple API.
        </p>
        <h3>No relation</h3>
        <p>
          Obviously ther is no rellation between APIM, BSDK and the logic of
          repository, thats just a suggest about product structure of VUEJS app
          and you are able to organize yours differently. Also thats a nice
          starter i think...
        </p>
      </div>
      <div class="col">
        <br />
        <br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="basicRepo"
            line-numbers
            lang="javascript"
            :insertSpaces="true"
          >
          </prism-editor>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h2>About models</h2>
        <p>
          Once you have a nice organization and project structure perhaps you
          are felt in love with models and relations between types and your
          repositories...
        </p>
        <h3>I've made a dataModel example</h3>
        <p>
          You can find a data model in /src/models/exampleModel.ts Obviously
          there is noo obligation
        </p>
      </div>
      <div class="col">
        <br />
        <br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="basicRepo"
            line-numbers
            lang="javascript"
            :insertSpaces="true"
          >
          </prism-editor>
        </div>
      </div>
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

import PageContent from "@/components/PageContent.vue";
export default {
  data() {
    return {
      basicRepo: `export default {
  get(params: any) {
    const message = 'GET API CALL with params';
    return { message: message, params: params };
  },
  post(params: any) {
    const message = 'POST API CALL with params';
    return { message: message, params: params };
  },
  put(params: any) {
    const message = 'PUT API CALL with params';
    return { message: message, params: params };
  },
  patch(params: any) {
    const message = 'PATCH API CALL with params';
    return { message: message, params: params };
  },
  delete(params: any) {
    const message = 'DELETE API CALL with params';
    return { message: message, params: params };
  },
};`,
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