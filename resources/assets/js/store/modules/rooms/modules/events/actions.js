export const get = ({}, room) => {
    Vue.request().get(`/api/rooms/${room}/events`, 'rooms/events/setAll')
};

export const create = ({}, data) => {
    Vue.request(data).post(`/api/rooms/${data.room}/events`, 'rooms/events/add')
}