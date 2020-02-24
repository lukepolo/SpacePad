export const get = ({}, room) => {
  return Vue.$request().get(`/api/rooms/${room}/events`, "rooms/events/setAll");
};

export const create = ({}, data) => {
  return Vue.$request(data).post(
    `/api/rooms/${data.room}/events`,
    "rooms/events/add"
  );
};

export const update = ({}, data) => {
  return Vue.$request(data).put(
    `/api/rooms/${data.room}/events/${data.event}`,
    "rooms/events/update"
  );
};
