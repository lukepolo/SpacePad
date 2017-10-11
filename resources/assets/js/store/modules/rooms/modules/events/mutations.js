export const setAll = (state, { response }) => {
    Vue.set(state, 'events', response)
};

export const set = (state, booking) => {
    Vue.set(state, 'event', booking)
};

export const add = (state, { response }) => {
    state.events.push(response);
};

export const update = (state, {response}) => {
    let bookingKey = _.findKey(state.events, { id : response.id });
    if(bookingKey) {
        Vue.set(state.events, bookingKey, response);
    }
};

