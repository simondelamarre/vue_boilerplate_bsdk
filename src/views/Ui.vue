<template>
  <PageContent msg="BSDK UI">
    <div class="row">
      <div class="col p-r">
        <h2>Components</h2>
        <div>
          BSDK provide you somes butttons and other account module component
          that simplify the users authentication.<br />
          Thats not an oligation also the authentication process of APIM is
          enabled on this boilerplate. Note that you can use you own
          authentification strategy with APIM APIs consumption from BSDK but
          somes APIs require a valid user and their endpoints will breaked with
          a 401 without APIM auth.
        </div>
        <h3>Instanciate an acount module</h3>
        <div>
          Has you can see on the top right header corner, the accountModule of
          BSDK is pretty usefull, it offer a one click authentication with a
          basic template that you are enabled to customize by overlloading a
          stylesheet. You can find a sample accountModule instance on the
          right...
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="accountCode"
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
        <h3>Connect button</h3>
        <div>
          Another connect module is the basic authentication button, the concept
          is the same as the accountModule but with a basic button as display
          like the example below...<br />
          In this example, the user will receive a 4 digit cheatcode that he can
          copy past on a second form. This method allow you to connect native
          apps and other extensions like chrome extension easily.<br /><br />
          Has you can see the global user state in BSDK context updates the
          accountModule and the button to simplify their usages.
        </div>
        <br />
        <div id="connectButtonSample"></div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="buttonCode"
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
        <h2>Connect with NO-UI</h2>
        <div>
          Obviously you can connect without BSDK UI. If you don't want to embed
          BUI stylesheet or create your own process...<br />
          In this example boilerplate BSDK is integrated as an Object WINDOW so
          you have access to the BSDK API and other setups gates, endpoints from
          window.APIM...
        </div>
        <p>
          Note that by using the API and without BSDK UI, you are note able to
          use cheatCode mode also for chrome extension the uses of BUI is the
          only way to connect.<br />
          By calling api.login() the user will receive an email to connect or
          create an account.
        </p>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="connectApiCall"
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
        <h2>Sign out / logout with NO-UI</h2>
        <div>
          To disconnect an User, thats the only same way...<br />
          Just no params are required due to the BSDK tokens logic...
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="signoutApiCall"
            line-numbers
            lang="javascript"
            :insertSpaces="true"
          >
          </prism-editor>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <h2 class="centered">BSDK.UI Stylesheet helpers</h2>

    <br />
    <br />
    <br />

    <div class="row">
      <div class="col p-r">
        <h2>.BUI class and stylesheet</h2>
        <div>
          BUI provide you an XXS stylesheet framework, this is a list of the
          components that you are able to use in your interface...
        </div>
        <br />
        <div id="connectButtonSample"></div>
      </div>
      <div class="col"><br /><br /></div>
    </div>

    <div class="row">
      <div class="col p-r">
        <h3>Stylesheet icons</h3>
        <div>This is a list of the stylesheet icons thats emebeded in .BUI</div>
        <div class="BUI" id="iconsList">
          <div class="bicon notif"></div>
          <div class="bicon pix"></div>
          <div class="bicon ham"></div>
          <div class="bicon heart"></div>
          <div class="bicon lock"></div>
          <div class="bicon account"></div>
          <div class="bicon pencil"></div>
          <div class="bicon eye"></div>
          <div class="bicon mail"></div>
          <div class="bicon key"></div>
          <div class="bicon cloud"></div>
          <div class="bicon cloud up"></div>
          <div class="bicon cloud down"></div>
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="iconsCode"
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
        <h3>.BUI colors system</h3>
        <div>
          by adding .BUI class you have access to primary, dan, warn, succ
          colors system and also by adding .dark the text content will be white.
        </div>
        <br />
        <div class="BUI" id="IconsColorDarkSource">
          <div class="dark" style="background: black">
            <div class="bicon lock"></div>
          </div>
          <div class="dark primary">
            <div class="bicon lock"></div>
          </div>
          <div class="dark dan">
            <div class="bicon lock"></div>
          </div>
          <div class="dark warn">
            <div class="bicon lock"></div>
          </div>
          <div class="dark succ">
            <div class="bicon lock"></div>
          </div>
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="colorsCode"
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
        <h3>.BUI loaders</h3>
        <div>
          Until to create a loader for basic apps... there is a nice one in .BUI
        </div>
        <br />
        <div class="BUI">
          <div class="brow">
            <div class="bloader ma-2"></div>
            <div class="bloader dark ma-2"></div>
            <div class="bloader sm ma-2"></div>
            <div class="bloader sm dark ma-2"></div>
          </div>
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="loadersCode"
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
        <h3>.BUI Alerts</h3>
        <div>Alerts design system and colors</div>
        <br />
        <div class="BUI" id="alertsSources">
          <div class="brow">
            <div class="bcol pa-2">
              <div class="alert">
                <div class="content">
                  <div class="bloader sm"></div>
                  <div class="message">alert loader</div>
                </div>
              </div>
            </div>
            <div class="bcol pa-2">
              <div class="alert dark">
                <div class="content">
                  <div class="bloader dark sm"></div>
                  <div class="message">alert loader dark</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="BUI" id="alertsTypesSources">
          <div class="brow">
            <div class="bcol pa-2">
              <div class="alert info">
                <div class="content">
                  <div class="message">alert info</div>
                </div>
              </div>

              <div class="alert succ">
                <div class="content">
                  <div class="message">alert success</div>
                </div>
              </div>

              <div class="alert warn">
                <div class="content">
                  <div class="message">alert warning</div>
                </div>
              </div>

              <div class="alert dan">
                <div class="content">
                  <div class="message">
                    alert error<br />
                    multiline
                  </div>
                </div>
              </div>
            </div>
            <div class="bcol pa-2">
              <div class="alert info dark">
                <div class="content">
                  <div class="message">alert info dark</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="alertsCode"
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
        <h3>.BUI Switch Input</h3>
        <div>Need an easy switch ?</div>
        <br />
        <div class="BUI" id="checkSwitch">
          <div class="switch">
            <input type="checkbox" id="switch" name="switch" />
            <span class="slider round"></span>
            <label for="switch">Switch label</label>
          </div>
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="switchCode"
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
        <h3>.BUI inputs Material</h3>
        <div>
          Also .BUI embed a basic input class dedicated to modern browsers
        </div>
        <br />
        <div class="BUI" id="">
          <form id="BUI_CONNECT" class="elevated" onSubmit="submitConnect">
            <div class="group">
              <input
                type="email"
                class="outlined"
                id="email"
                name="Email"
                placeholder=""
                required
                autocomplete="user-email"
              />
              <label>Email</label>
            </div>
            <div class="group">
              <input
                type="password"
                class="outlined"
                id="password"
                name="Password"
                placeholder=""
                required
                autocomplete="current-password"
              />
              <span class="bar"></span>
              <label>Password</label>
            </div>
            <div class="group">
              <input
                type="text"
                class="outlined"
                id="test"
                name="Text"
                placeholder=""
              />
              <label>Text</label>
            </div>
          </form>
        </div>
      </div>
      <div class="col">
        <br /><br />
        <div class="codeWindow">
          <prism-editor
            class="dark-editor"
            :highlight="highlighter"
            v-model="inputCode"
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

import PageContent from "@/components/PageContent.vue"; // @ is an alias to /src

export default {
  data() {
    return {
      connectApiCall: `await APIM.api.login({
  email:"user.email@domain.com", 
  cheatCode:false
})`,
      signoutApiCall: `APIM.api.logout()`,
      accountCode: `this.$store.state.BSDK.APIM.UI.accountModule(
      document.querySelector("#account"),
      false,
      {
        align: "pr",
        displayName: true,
        size: "sm",
        ripple: true,
      }
    );`,
      buttonCode: `this.APIM.UI.connectButton(
      document.querySelector('#connect'), // target dom element for UI
      true, // UI form BSDK || false for basic redirection
      { // buttonDataset :: options button
        rounded: false,
        loginLabel: "Login",
        logoutLabel: "Logout",
        dark: true,
        text: false,
        outlined: false,
        ripple: true
      },
      { // loginDataset :: (more details type)
        cheatCode: true // cheatcode send 4 digit number validation code
      }
    );`,
      iconsCode: `<div class="BUI" id="iconsList">
      <div class="bicon notif"></div>
      <div class="bicon pix"></div>
      <div class="bicon ham"></div>
      <div class="bicon heart"></div>
      <div class="bicon lock"></div>
      <div class="bicon account"></div>
      <div class="bicon pencil"></div>
      <div class="bicon eye"></div>
      <div class="bicon mail"></div>
      <div class="bicon key"></div>
      <div class="bicon cloud"></div>
      <div class="bicon cloud up"></div>
      <div class="bicon cloud down"></div>
    </div>`,
      colorsCode: `<div class="BUI" id="IconsColorDarkSource">
      <div class="dark" style="background: black">
        <div class="bicon lock"></div>
      </div>
      <div class="dark primary">
        <div class="bicon lock"></div>
      </div>
      <div class="dark dan">
        <div class="bicon lock"></div>
      </div>
      <div class="dark warn">
        <div class="bicon lock"></div>
      </div>
      <div class="dark succ">
        <div class="bicon lock"></div>
      </div>
    </div>`,
      loadersCode: `<div class="brow">
    <div class="bloader ma-2"></div>
    <div class="bloader dark ma-2"></div>
    <div class="bloader sm ma-2"></div>
    <div class="bloader sm dark ma-2"></div>
  </div>`,
      alertsCode: `<div class="BUI" id="alertsSources">
    <div class="brow">
      <div class="bcol pa-2">
        <div class="alert">
          <div class="content">
            <div class="bloader sm"></div>
            <div class="message">alert loader</div>
          </div>
        </div>
      </div>
      <div class="bcol pa-2">
        <div class="alert dark">
          <div class="content">
            <div class="bloader dark sm"></div>
            <div class="message">alert loader dark</div>
          </div>
        </div>
      </div>
    </div>
    <div class="brow">
      <div class="bcol pa-2">
        <div class="alert info">
          <div class="content">
            <div class="message">alert info</div>
          </div>
        </div>

        <div class="alert succ">
          <div class="content">
            <div class="message">alert success</div>
          </div>
        </div>

        <div class="alert warn">
          <div class="content">
            <div class="message">alert warning</div>
          </div>
        </div>

        <div class="alert dan">
          <div class="content">
            <div class="message">
              alert error<br />
              multiline
            </div>
          </div>
        </div>
      </div>
      <div class="bcol pa-2">
        <div class="alert info dark">
          <div class="content">
            <div class="message">alert info dark</div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
      switchCode: `<div class="BUI" id="checkSwitch">
    <div class="switch">
      <input type="checkbox" id="switch" name="switch">
      <span class="slider round"></span>
      <label for="switch">Switch label</label>
    </div>
  </div>`,
      inputCode: `<div class="BUI" id="">
          <div class="FORM">
            <form id="BUI_CONNECT" class="elevated" onSubmit="submitConnect">
              <div class="group">
                <input
                  type="email"
                  class="outlined"
                  id="email"
                  name="Email"
                  placeholder=""
                  required
                  autocomplete="user-email"
                />
                <label>Email</label>
              </div>
              <div class="group">
                <input
                  type="password"
                  class="outlined}"
                  id="password"
                  name="Password"
                  placeholder=""
                  required
                  autocomplete="current-password"
                />
                <span class="bar"></span>
                <label>Password</label>
              </div>
            </form>
          </div>
        </div>`,
    };
  },
  components: {
    PageContent,
    PrismEditor,
  },
  mounted() {
    this.$store.state.BSDK.APIM.UI.connectButton(
      document.querySelector("#connectButtonSample"), // target dom element for UI
      false, // UI form BSDK || false for basic redirection
      {
        // buttonDataset :: options button
        rounded: false,
        loginLabel: "Login",
        logoutLabel: "Logout",
        dark: true,
        text: false,
        outlined: false,
        ripple: true,
      },
      {
        // loginDataset :: (more details type)
        cheatCode: true, // cheatcode send 4 digit number validation code
      }
    );
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
<style lang="scss" >
</style>
