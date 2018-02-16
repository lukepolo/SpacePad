export const set = (state, { response }) => {
  Vue.set(state, "room", response);
};

export const setAll = (state, { response }) => {
  Vue.set(state, "rooms", response);
};

export const add = (state, { response }) => {
  state.rooms.push(response);
};

export const update = (state, { response }) => {
  let key = _.findKey(state, "rooms", { id: response.id });
  if (key) {
    Vue.set(state.rooms, key, response);
  }
};
