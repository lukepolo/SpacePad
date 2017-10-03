export const setAll = (state, { response }) => {
  state.events = response;
};

export const set = (state, booking) => {
    state.event = booking;
};

