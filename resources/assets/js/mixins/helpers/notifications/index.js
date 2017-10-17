export const showError = function(message, title, timeout) {
  if (timeout === undefined) {
    timeout = 5000;
  }

  Vue.$store.dispatch("notifications/add", {
    title: !_.isEmpty(title) ? title : "Error!!",
    text: message,
    class: "error",
    timeout: timeout
  });
};
export const showSuccess = function(message, title, timeout) {
  if (timeout === undefined) {
    timeout = 5000;
  }

  Vue.$store.dispatch("notifications/add", {
    title: !_.isEmpty(title) ? title : "Success!!",
    text: message,
    class: "success",
    timeout: timeout
  });
};
