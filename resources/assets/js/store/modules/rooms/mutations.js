export const set = (state, { response }) => {
  Vue.set(state, "room", response);
};

export const setAll = (state, { response }) => {
  Vue.set(state, "rooms", response);
};

export const add = (state, { response }) => {
  state.rooms.push(response);
};
