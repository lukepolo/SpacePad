import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";

import rooms from './modules/rooms';

export default {
  state,
  actions,
  mutations,
  namespaced: true,
    modules : {
        rooms
    }
};
