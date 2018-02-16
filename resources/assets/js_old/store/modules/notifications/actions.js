export const add = ({ commit }, notification) => {
  return commit("add", notification);
};

export const remove = ({ commit }, notification) => {
  return commit("remove", notification);
};
