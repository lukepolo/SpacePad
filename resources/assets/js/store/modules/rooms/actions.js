export const get = ({}) => {
    Vue.request().get(`/api/rooms`, 'rooms/setAll')
};

export const show = ({}, room) => {
    Vue.request().get(`/api/rooms/${room}`, 'rooms/set')
};