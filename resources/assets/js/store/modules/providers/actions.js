export const get = () => {
  Vue.request().get("/api/providers", "providers/setAll");
};
