import store from "./store";
import router from "./router";
import Form from "@classes/Form";
import Errors from "@classes/Errors";
import Request from "@classes/Request";
import { action } from "@helpers/routes";

Vue.config.productionTip = false;

Vue.$store = store;
Vue.$action = action;
Vue.$router = router;

Vue.$request = data => {
  return new Request(data);
};

Vue.$Form = Form;
Vue.$Errors = Errors;
Vue.$Request = Request;

require("./bootstrap");
require("./components");
require("./directives");
require("./mixins");

const app = new Vue({
  store,
  router
});

app.$mount("#app-layout");
