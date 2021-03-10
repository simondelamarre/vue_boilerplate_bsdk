<template>
  <PageContent msg="methods:/example">
    <div>
      This is a basic test APIs calls from Example module state dispatcher.
    </div>
    <div class="row BUI">
      <div class="col pl">
        <h2>GET</h2>
        <p>
          try get:example/<br />
          $store.dispatch('getExamples', {});
        </p>
        <div class="button primary" @click="getExamples">RUN Get examples</div>
      </div>
      <div class="col">
        <h4>result from $store.state.Example.examples</h4>
        <div v-if="$store.state.Example.examples">
          {{ $store.state.Example.examples }}
        </div>
        <div class="alert info" v-else>
          <div class="content">
            <div class="message">
              Dispatch getExamples by hitting RUN button to get response
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row BUI">
      <div class="col">
        <h2>POST</h2>
        <p>
          try get:example/<br />
          $store.dispatch('postExamples', {name:"{{ name }}"});
        </p>
        <div class="">
          <form id="POST_FORM" class="elevated" onSubmit="return false;">
            <div class="group">
              <input
                type="text"
                class="outlined"
                id="name"
                name="name"
                placeholder=""
                required
                autocomplete="user-email"
                v-model="name"
              />
              <label>Name to post</label>
            </div>
          </form>
        </div>
        <div class="button primary" @click="postExamples">
          RUN Post examples
        </div>
      </div>
      <div class="col">
        <h4>result from $store.state.Example.examples</h4>
        <div v-if="$store.state.Example.example">
          {{ $store.state.Example.example }}
        </div>
        <div class="alert info" v-else>
          <div class="content">
            <div class="message">
              Dispatch getExamples by hitting RUN button to get response
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row BUI">
      <div class="col">
        <h2>PUT</h2>
        <p>
          try get:example/<br />
          $store.dispatch('postExamples', {ID:{{ ID }}, name:"{{ name }}"});
        </p>
        <div class="">
          <form id="POST_FORM" class="elevated" onSubmit="return false;">
            <div class="group">
              <input
                type="number"
                class="outlined"
                id="ID"
                name="ID"
                placeholder=""
                required
                v-model="ID"
              />
              <label>ID to update</label>
            </div>
            <div class="group">
              <input
                type="text"
                class="outlined"
                id="name"
                name="name"
                placeholder=""
                required
                v-model="name"
              />
              <label>Name to update</label>
            </div>
          </form>
        </div>
        <div class="button primary" @click="putExample">RUN PUT examples</div>
      </div>
      <div class="col">
        <h4>result from $store.state.Example.examples</h4>
        <div v-if="$store.state.Example.example">
          {{ $store.state.Example.example }}
        </div>
        <div class="alert info" v-else>
          <div class="content">
            <div class="message">
              Dispatch getExamples by hitting RUN button to get response
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row BUI">
      <div class="col">
        <h2>PATCH</h2>
        <p>
          try patch:example/<br />
          $store.dispatch('patchExample', {ID:{{ ID }}, name:"{{ name }}"});
        </p>
        <div class="">
          <form id="POST_FORM" class="elevated" onSubmit="return false;">
            <div class="group">
              <input
                type="number"
                class="outlined"
                id="ID"
                name="ID"
                placeholder=""
                required
                v-model="ID"
              />
              <label>ID to patch</label>
            </div>
            <div class="group">
              <input
                type="text"
                class="outlined"
                id="name"
                name="name"
                placeholder=""
                required
                v-model="name"
              />
              <label>Name to patch</label>
            </div>
          </form>
        </div>
        <div class="button primary" @click="patchExample">
          RUN PATCH example
        </div>
      </div>
      <div class="col">
        <h4>result from $store.state.Example.examples</h4>
        <div v-if="$store.state.Example.example">
          {{ $store.state.Example.example }}
        </div>
        <div class="alert info" v-else>
          <div class="content">
            <div class="message">
              Dispatch patchExamples by hitting RUN button to update state
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row BUI">
      <div class="col">
        <h2>DELETE</h2>
        <p>
          try delete:example/<br />
          $store.dispatch('deleteExample', {ID:{{ ID }}});
        </p>
        <div class="">
          <form id="POST_FORM" class="elevated" onSubmit="return false;">
            <div class="group">
              <input
                type="number"
                class="outlined"
                id="ID"
                name="ID"
                placeholder=""
                required
                v-model="ID"
              />
              <label>ID to delete</label>
            </div>
          </form>
        </div>
        <div class="button primary" @click="deleteExample">
          RUN DELETE example
        </div>
      </div>
      <div class="col">
        <h4>STATE OF $store.state.Example.example</h4>
        <div v-if="$store.state.Example.example">
          {{ $store.state.Example.example }}
        </div>
        <div class="alert info" v-else>
          <div class="content">
            <div class="message">
              Dispatch deleteExamples by hitting RUN button to update State
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row BUI">
      <div class="col">
        <h2>Authorization Test</h2>
        <p>
          This is an example from repoository by import.<br />
          This API request need an user credential also it will respond by 401
          without logged account...
        </p>
        <div class="button primary" @click="needUserLogged">
          RUN TEST USER LOGGED EXAMPLE API
        </div>
      </div>
      <div class="col">
        <h4>Local component Response from repository</h4>
        <p>
          If you are not logged, check your console to get the 401 unauthorized
          from APIM
        </p>
        <div v-if="logged">
          {{ logged }}
        </div>
        <div class="alert info" v-else>
          <div class="content">
            <div class="message">
              Test needUserLogged API response by hitting RUN TEST...
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageContent>
</template>
<script lang="ts">
import ExampleRepository from "../repositories/Example.repository";
import { Component, Vue } from "vue-property-decorator";
import PageContent from "@/components/PageContent.vue"; // @ is an alias to /src

@Component({
  components: {
    PageContent,
  },
  methods: {},
})
export default class Example extends Vue {
  name = "test";
  ID = 0;
  logged = null;
  getExamples(): void {
    this.$store.dispatch("getExamples", {});
  }
  postExamples(): void {
    this.$store.dispatch("postExample", { name: this.name });
  }
  putExample(): void {
    this.$store.dispatch("putExample", { ID: this.ID, name: this.name });
  }
  patchExample(): void {
    this.$store.dispatch("patchExample", { ID: this.ID, name: this.name });
  }
  deleteExample(): void {
    this.$store.dispatch("deleteExample", { ID: this.ID, name: this.name });
  }
  async needUserLogged(): Promise<void> {
    try {
      this.logged = await ExampleRepository.needUserLogged({}, {}, {});
    } catch (err) {
      console.log("catch error ", err);
      this.logged = err;
    }
  }
}
</script>
