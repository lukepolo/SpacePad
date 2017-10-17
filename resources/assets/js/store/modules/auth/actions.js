export const logout = (context, data) => {
  alert("got here");
  return Vue.$request(data)
    .post("/logout")
    .then(() => {
      window.location = "/";
    });
};

export const update = (context, data) => {
  return Vue.$request(data.form).patch(`/api/users/${data.user}`);
};
