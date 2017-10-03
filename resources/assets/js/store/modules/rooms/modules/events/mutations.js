export const setAll = (state, { response }) => {
  state.events = response;
};

export const set = (state, booking) => {
    state.event = booking;
};

export const add = (state, booking) => {
    state.events.push(booking);
};

