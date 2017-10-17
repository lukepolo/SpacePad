export const get = () => {
  return Vue.$request().get("/api/providers", "providers/setAll");
};
