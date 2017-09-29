export const set = (state, { response }) => {
    state.room = response;
};

export const setAll = (state, { response }) => {
  state.rooms = response;
};

export const add = (state, { response }) => {
    state.rooms.push(response);
};
