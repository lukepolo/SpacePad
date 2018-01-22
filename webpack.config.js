// FILE IS A DUMMY FOR IDE's

const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.join(__dirname, "resources/assets/js"),
      "@store": path.join(__dirname, "resources/assets/js/store"),
      "@views": path.join(__dirname, "resources/assets/js/views"),
      "@classes": path.join(__dirname, "resources/assets/js/classes"),
      "@components": path.join(__dirname, "resources/assets/js/components"),
      "@helpers": path.join(__dirname, "resources/assets/js/mixins/helpers")
    }
  }
};
