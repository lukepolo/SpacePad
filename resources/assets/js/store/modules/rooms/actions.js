export const get = ({}) => {
  return Vue.$request().get(`/api/rooms`, "rooms/setAll");
};

export const show = ({}, room) => {
  return Vue.$request().get(`/api/rooms/${room}`, "rooms/set");
};

export const update = ({}, data) => {
  return Vue.$request(data.form).patch(`/api/rooms/${data.room}`, [
    "rooms/set",
    "rooms/update"
  ]);
};
