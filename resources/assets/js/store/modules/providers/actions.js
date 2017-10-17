export const get = () => {
  return Vue.$request().get("/api/providers", "providers/setAll");
};

export const destroy = ({}, provider) => {
  return Vue.$request(provider).delete(
    `api/providers/${provider}`,
    "providers/remove"
  );
};
