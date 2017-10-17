export const get = ({}) => {
  return Vue.$request().get(`/api/rooms`, "rooms/setAll");
};

export const show = ({}, room) => {
  return Vue.$request().get(`/api/rooms/${room}`, "rooms/set");
};
