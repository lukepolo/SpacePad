import { createForm } from "./form";

import { back } from "./routes";

import { now, parseDate, formatTime, humanizeDiff } from "./date-time";

import { local } from "./environment";

import { isAdmin } from "./permissions";

import { showError, showSuccess } from "./notifications";

Vue.mixin({
  methods: {
    now,
    back,
    showError,
    parseDate,
    formatTime,
    createForm,
    showSuccess,
    humanizeDiff
  },
  computed: {
    local,
    isAdmin
  }
});
