import { createForm, getFormData } from "./form";

import { back, action } from "./routes";

import {
  now,
  parseDate,
  formatTime,
  humanizeDiff,
  getTimeHeightStyle
} from "./date-time";

import { local } from "./environment";

import { isAdmin } from "./permissions";

import { showError, showSuccess } from "./notifications";

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
    getTimeHeightStyle
  },
  computed: {
    local,
    isAdmin
  }
});
