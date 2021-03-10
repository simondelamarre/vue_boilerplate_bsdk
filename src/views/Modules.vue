<template>
  <PageContent msg="Modules">
    <div class="row">
      <div class="col">
        <div>About vuex states and modules</div>
        <h2>Familiar with modules?</h2>
        <p>
          The basic idea is to split Vuex by modules and nothing else...<br />
          If you are familiar with modules, switch on repositories to understand
          APIs call concept from vuex or outer...
        </p>
        <h3>In this boilerplate</h3>
        <p>There is tree interesting modules in this boilerplate</p>
        <ul>
          <li>The first one manage the global state of BSDK</li>
          <li>The second manage the user state</li>
          <li>The tirth distribute the state of the Example API.</li>
        </ul>
        <p>
          Considere that for each APIs you can create a model for a better
          management of your global app status and also a better readability.<br />
          Thats just an extension capacity offered by Vuex also i'll take a
          minute about that...
        </p>
      </div>
      <div class="col">
        <div class="codeWindow">
          <img
            class="padpix"
            src="../assets/vuex_modules.jpeg"
            style="max-width: 94%; height: auto"
            alt="vuex modules"
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>Basic sample</h2>
        <p>
          You can find some samples modules in /src/store/modules<br />
          I also offer you a small manager that make them easiest to use.<br />
          By using module you can import anyone in your vuew store but abviously
          that make you able to forgot new ones...
          <b>
            To understand how modules are managed in this boilerplate you can
            refer to /mmodules/index.ts </b
          ><br />
          Thats just a parser but its really usefull to get lazy and between
          this index the only modification appllied on store is the import of
          this index like the code bellow.
        </p>
      </div>
      <div class="col">
        <br />
        <br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="codeModules"
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
        <h2>The only thing to do...</h2>
        <p>
          Once you have embeded the BSDK module and Repository in any Vue
          Project, the only thing you have to do is to create an instance. In
          this Boilerplate the better place is to create an instance before the
          app was mounted to ensure that others calls respond right.<br />
          So in APP.vue you can see the single line of code below
        </p>
      </div>
      <div class="col">
        <br />
        <br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="beforeMount"
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
      codeModules: "import modules from './modules';",
      beforeMount: `async beforeMount() {
    await this.$store.dispatch("initAPIM");
  }`,
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
<style lang="scss" scoped>
.padpix {
  padding: 20px;
  background: white;
}
</style>