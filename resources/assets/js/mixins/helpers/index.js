import { createForm, getFormData } from "./form";

import { back, action } from "./routes";

import { now, diff, parseDate } from "./date-time";

import { local } from "./environment";

import { isAdmin } from "./permissions";

import { showError, showSuccess, handleApiError } from "./notifications";

Vue.mixin({
  methods: {
    now,
    back,
    diff,
    action,
    showError,
    parseDate,
    createForm,
    showSuccess,
    getFormData,
    handleApiError,
  },
  computed: {
    local,
    isAdmin,
  }
});
