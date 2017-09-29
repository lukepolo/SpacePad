export const get = ({}, room) => {
    Vue.request().get(`/api/rooms/${room}/events`, 'rooms/events/setAll')
};