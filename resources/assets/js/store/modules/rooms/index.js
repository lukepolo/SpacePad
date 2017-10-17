import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";

import events from "./modules/events";

export default {
  state,
  actions,
  mutations,
  namespaced: true,
  modules: {
    events
  }
};
