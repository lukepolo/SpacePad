import store from "./store";
import router from "./router";

require("./bootstrap");
require("./components");
require("./directives");
require("./mixins");

window.store = store;

const app = new Vue({
  store,
  router
});

window.app = app;

app.$mount("#app-layout");
