export const get = ({}, provider) => {
  return Vue.$request().get(
    `/api/providers/${provider}/rooms`,
    "providers/rooms/setAll"
  );
};

export const store = ({}, data) => {
  return Vue.$request(data).post(
    `/api/providers/${data.provider}/rooms`,
    "rooms/add"
  );
};
