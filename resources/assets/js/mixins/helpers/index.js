import { createForm, getFormData } from "./form";

import { back, action } from "./routes";

import {
  now,
  humanizeDiff,
  parseDate,
  formatTime,
  getTimeHeightStyle
} from "./date-time";

import { local } from "./environment";

import { isAdmin } from "./permissions";

import { showError, showSuccess, handleApiError } from "./notifications";

Vue.mixin({
  methods: {
    now,
    back,
    humanizeDiff,
    action,
    showError,
    parseDate,
    formatTime,
    createForm,
    showSuccess,
    getFormData,
    handleApiError,
    getTimeHeightStyle
  },
  computed: {
    local,
    isAdmin
  }
});
