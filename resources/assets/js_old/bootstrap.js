/*
 |--------------------------------------------------------------------------
 | Global Variables
 |--------------------------------------------------------------------------
 |
 */
window.moment = require("moment-timezone");
require("moment-precise-range-plugin");
moment.tz.setDefault("UTC");

/*
 |--------------------------------------------------------------------------
 | Axios Setup
 |--------------------------------------------------------------------------
 |
 */

import NProgress from "nprogress";

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.common["X-CSRF-TOKEN"] = window.Laravel.csrfToken;

axios.interceptors.request.use(
  config => {
    NProgress.configure({
      easing: "ease",
      speed: 500,
      showSpinner: false
    });
    NProgress.start();
    NProgress.inc(0.3);
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    NProgress.done();
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

/*
 |--------------------------------------------------------------------------
 | Laravel Echo Setup
 |--------------------------------------------------------------------------
 |
 */

import Echo from "laravel-echo";
import Pusher from "pusher-js";

Pusher.log = msg => {
  // console.log(msg);
};

window.Echo = new Echo({
  cluster: "us2",
  broadcaster: "pusher",
  key: Laravel.pusherKey
});

/*
 |--------------------------------------------------------------------------
 | Sentry + Raven Setup
 |--------------------------------------------------------------------------
 |
 */
// import Raven from 'raven-js';
// import RavenVue from 'raven-js/plugins/vue';
//
// if(Laravel.env !== 'local') {
//     Raven
//         .config('https://50124e89d68945bb8f787666f0482807@sentry.codepier.io/4')
//         .addPlugin(RavenVue, Vue)
//         .install();
// }

// Font awesome PRO
require("@/../vendor/fontawesome-5.0.0-rc3/js/packs/brands");
require("@/../vendor/fontawesome-5.0.0-rc3/js/packs/light");
require("@/../vendor/fontawesome-5.0.0-rc3/js/fontawesome");
