export const get = ({}, provider) => {
  Vue.request().get(
    `/api/providers/${provider}/rooms`,
    "providers/rooms/setAll"
  );
};

export const store = ({}, data) => {
  Vue.request(data)
    .post(`/api/providers/${data.provider}/rooms`, "rooms/add")
    .then(room => {
      app.$router.push(`/rooms/${room.id}`);
    });
};
