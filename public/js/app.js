webpackJsonp([1],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/Dashboard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Clipboard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        data: String
    },
    created: function created() {
        new Clipboard('.clipboard', {
            text: this.data
        });
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Navigation.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notifications_vue__ = __webpack_require__("./resources/assets/js/components/Notifications.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Notifications_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Notifications: __WEBPACK_IMPORTED_MODULE_0__Notifications_vue___default.a
    },
    data: function data() {
        return {
            current_version: Laravel.version
        };
    },

    computed: {
        version: function version() {
            return this.$store.state.system.version;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Notification.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['notification'],
    data: function data() {
        return {
            timer: null
        };
    },
    created: function created() {
        var timeout = this.notification.hasOwnProperty('timeout') ? this.notification.timeout : true;
        if (timeout) {
            this.timer = setTimeout(function () {
                this.close(this.notification);
            }.bind(this), this.notification.timeout);
        }
    },

    methods: {
        close: function close(notification) {
            clearTimeout(this.timer);
            this.$store.dispatch('notifications/remove', notification);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Notifications.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification_vue__ = __webpack_require__("./resources/assets/js/components/Notification.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Notification_vue__);
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Notification: __WEBPACK_IMPORTED_MODULE_0__Notification_vue___default.a
    },
    computed: {
        notifications: function notifications() {
            return this.$store.state.notifications.notifications;
        }
    },
    methods: {
        removeNotification: function removeNotification(notification) {
            this.$store.dispatch('notifications/remove', notification);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/TimeAgo.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(Vue) {//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        time: {}
    },
    mounted: function mounted() {
        var _this = this;

        this.setCurrentTime();
        setInterval(function () {
            _this.update();
        }, 60000);
    },
    data: function data() {
        return {
            currentTime: null
        };
    },

    watch: {
        time: function time() {
            this.setCurrentTime();
        }
    },
    methods: {
        update: function update() {
            Vue.set(this.currentTime, this.currentTime.add(-1, 'minute'));
        },
        setCurrentTime: function setCurrentTime() {

            var time = this.time;

            if (!moment.isMoment(time)) {
                time = this.parseDate(time);
            }

            this.currentTime = time;
        }
    },
    computed: {
        text: function text() {
            if (this.currentTime) {
                return this.currentTime.fromNow().replace('ute', '').replace('ago', '');
            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ToolTip.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        type: String,
        size: String,
        always: Boolean,
        rounded: Boolean,
        noAnimate: Boolean,
        message: {
            type: String,
            default: ''
        },
        placement: {
            type: String,
            default: 'top'
        }
    }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-118fb788\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Navigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    [
      _c("notifications"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "logo-container" },
        [
          _c("router-link", { attrs: { to: "/" } }, [
            _vm._v("\n            Space Pad\n        ")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.current_version !== _vm.version
        ? _c("section", [_vm._m(0)])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _vm._v(
        "\n            Hello, We've got a new version of SpacePad ready for you. "
      ),
      _c("a", { attrs: { href: "" } }, [_vm._v("Refresh now")]),
      _vm._v(" to make it yours.\n        ")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-118fb788", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1260c99f\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ToolTip.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    {
      class: [
        "hint--" + _vm.type,
        "hint--" + _vm.size,
        "hint--" + _vm.placement,
        {
          "hint--rounded": this.rounded,
          "hint--always": this.always,
          "hint--no-animate": this.noAnimate
        }
      ],
      attrs: { "aria-label": _vm.message }
    },
    [_vm._v("\n    " + _vm._s(_vm.type) + "\n    "), _vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1260c99f", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-44752bdf\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Notification.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _c("div", { staticClass: "notification", class: _vm.notification.class }, [
      _c(
        "button",
        {
          staticClass: "notification-close",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              _vm.close(_vm.notification)
            }
          }
        },
        [_c("span", [_vm._v("×")])]
      ),
      _vm._v(" "),
      _vm.notification.title
        ? _c("h4", { staticClass: "notification-heading" }, [
            _vm._v(_vm._s(_vm.notification.title))
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", {
        staticClass: "notification-text",
        domProps: { innerHTML: _vm._s(_vm.notification.text) }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44752bdf", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47c9a4d2\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Clipboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass: "btn btn-small clipboard",
      attrs: { "data-clipboard-text": _vm.data }
    },
    [_c("span", { staticClass: "icon-clipboard" })]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47c9a4d2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4ddbf124\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Notifications.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "notifications" },
    _vm._l(_vm.notifications, function(notification, index) {
      return _c("notification", {
        key: index,
        attrs: { notification: notification }
      })
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ddbf124", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6868dc38\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/TimeAgo.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [_vm._v(" " + _vm._s(_vm.text) + " ")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6868dc38", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8c01e17e\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n    here we are\n")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8c01e17e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-926b3cdc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/PageNotFound.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n    Sorry you must have the wrong url\n")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-926b3cdc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-router v2.7.0
  * (c) 2017 Evan You
  * @license MIT
  */


/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var pathToRegexpOptions = route.pathToRegexpOptions || {};

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = index(path, [], pathToRegexpOptions);
  if (true) {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
        offset = normalizeOffset(offset);
        position = getElementPosition(el, offset);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (resolvedDef.__esModule && resolvedDef.default) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      var current = this$1.current;
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  window.location.replace((base + "#" + path));
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.7.0';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

module.exports = VueRouter;


/***/ }),

/***/ "./resources/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__("./resources/assets/js/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__("./resources/assets/js/router/index.js");



__webpack_require__("./resources/assets/js/bootstrap.js");
__webpack_require__("./resources/assets/js/components/index.js");
__webpack_require__("./resources/assets/js/directives/index.js");
__webpack_require__("./resources/assets/js/mixins/index.js");

window.store = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */];

var app = new Vue({
  store: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */],
  router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */]
});

window.app = app;

app.$mount("#app-layout");
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./resources/assets/js/app/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/Dashboard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8c01e17e\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/Dashboard.vue")
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/app/Dashboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dashboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8c01e17e", Component.options)
  } else {
    hotAPI.reload("data-v-8c01e17e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/app/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dashboard_vue__ = __webpack_require__("./resources/assets/js/app/Dashboard.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dashboard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Dashboard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PageNotFound_vue__ = __webpack_require__("./resources/assets/js/components/PageNotFound.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PageNotFound_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_PageNotFound_vue__);



/* harmony default export */ __webpack_exports__["a"] = ([{ path: "/", name: "dashboard", component: __WEBPACK_IMPORTED_MODULE_0__Dashboard_vue__["Dashboard"] }, { path: "*", component: __WEBPACK_IMPORTED_MODULE_1__components_PageNotFound_vue___default.a }]);

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nprogress__ = __webpack_require__("./node_modules/nprogress/nprogress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_laravel_echo__ = __webpack_require__("./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_laravel_echo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_laravel_echo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js__ = __webpack_require__("./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pusher_js__);
/*
 |--------------------------------------------------------------------------
 | Global Variables
 |--------------------------------------------------------------------------
 |
 */

window.laroute = __webpack_require__("./resources/assets/js/laroute.js");
window.moment = __webpack_require__("./node_modules/moment-timezone/index.js");
__webpack_require__("./node_modules/moment-precise-range-plugin/moment-precise-range.js");
moment.tz.setDefault("UTC");

/*
 |--------------------------------------------------------------------------
 | Axios Setup
 |--------------------------------------------------------------------------
 |
 */



window.axios = __webpack_require__("./node_modules/axios/index.js");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.common["X-CSRF-TOKEN"] = window.Laravel.csrfToken;

axios.interceptors.request.use(function (config) {
  __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.configure({
    easing: "ease",
    speed: 500,
    showSpinner: false
  });
  __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.start();
  __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.inc(0.3);
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  __WEBPACK_IMPORTED_MODULE_0_nprogress___default.a.done();
  return response;
}, function (error) {
  return Promise.reject(error);
});

/*
 |--------------------------------------------------------------------------
 | Laravel Echo Setup
 |--------------------------------------------------------------------------
 |
 */




__WEBPACK_IMPORTED_MODULE_2_pusher_js___default.a.log = function (msg) {
  // console.log(msg);
};

window.Echo = new __WEBPACK_IMPORTED_MODULE_1_laravel_echo___default.a({
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

/***/ }),

/***/ "./resources/assets/js/classes/Errors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
  /**
     * Create a new Errors instance.
     */
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     */


  _createClass(Errors, [{
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }

    /**
       * Determine if we have any errors.
       */

  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }

    /**
       * Retrieve the error message for a field.
       *
       * @param {string} field
       */

  }, {
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }

    /**
       * Record the new errors.
       *
       * @param {object} errors
       */

  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }

    /**
       * Clear one or all error fields.
       *
       * @param {string|null} field
       */

  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        delete this.errors[field];

        return;
      }

      this.errors = {};
    }
  }]);

  return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ "./resources/assets/js/classes/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Request__ = __webpack_require__("./resources/assets/js/classes/Request.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Form = function (_Request) {
  _inherits(Form, _Request);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: "reset",

    /**
       * Reset the form fields.
       */
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = this.originalData[field];
      }

      this.errors.clear();
    }
  }, {
    key: "empty",
    value: function empty() {
      for (var field in this.emptyData) {
        this[field] = this.emptyData[field];
      }

      this.errors.clear();
    }

    /**
       * Handle a successful form submission.
       *
       * @param {object} data
       */

  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      if (this.resetData) {
        this.reset();
      }
      this.errors.clear();
    }
  }, {
    key: "diff",
    value: function diff() {
      var _this2 = this;

      return _.reduce(this.data(), function (result, value, key) {
        return _.isEqual(value, _this2.originalData[key]) ? result : result.concat(key);
      }, []);
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_0__Request__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Form);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/lodash/lodash.js")))

/***/ }),

/***/ "./resources/assets/js/classes/Request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__("./resources/assets/js/classes/Errors.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Request = function () {
  /**
     * Create a new Form instance.
     *
     * @param {object, FormData} data
     * @param {boolean} reset
     */
  function Request(data, reset) {
    _classCallCheck(this, Request);

    this.resetData = reset || false;

    if (data && !_.isObject(data)) {
      this["value"] = data;
    } else {
      this.emptyData = data;
      this.originalData = data;
    }

    if (data instanceof FormData) {
      this.formData = data;
    } else {
      for (var field in data) {
        this[field] = data[field];
      }
    }

    this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
  }

  /**
     * Fetch all relevant data for the form.
     */


  _createClass(Request, [{
    key: "data",
    value: function data() {
      if (this.formData) {
        return this.formData;
      }

      var data = Object.assign({}, this);

      delete data.errors;
      delete data.resetData;
      delete data.emptyData;
      delete data.originalData;

      return data;
    }

    /**
       * Send a GET request to the given URL.
       *
       * @param {string} url
       * @param {string|array} mutations
       * @param {array} config
       */

  }, {
    key: "get",
    value: function get(url, mutations, config) {
      for (var value in config) {
        this[value] = config[value];
      }

      return this.submit("get", this.dataQueryString() ? url + "?" + this.dataQueryString() : url, mutations);
    }

    /**
       * Send a POST request to the given URL.
       *
       * @param {string} url
       * @param {string|array} mutations
       * @param {array} config
       */

  }, {
    key: "post",
    value: function post(url, mutations, config) {
      return this.submit("post", url, mutations, config);
    }

    /**
       * Send a PUT request to the given URL.
       *
       * @param {string} url
       * @param {string|array} mutations
       * @param {array} config
       */

  }, {
    key: "put",
    value: function put(url, mutations, config) {
      return this.submit("put", url, mutations, config);
    }

    /**
       * Send a PATCH request to the given URL.
       *
       * @param {string} url
       * @param {string|array} mutations
       * @param {array} config
       */

  }, {
    key: "patch",
    value: function patch(url, mutations, config) {
      return this.submit("patch", url, mutations, config);
    }

    /**
       * Send a DELETE request to the given URL.
       *
       * @param {string} url
       * @param {string|array} mutations
       * @param {array} config
       */

  }, {
    key: "delete",
    value: function _delete(url, mutations, config) {
      return this.submit("delete", url, mutations, config);
    }

    /**
       * Submit the form.
       *
       * @param {string} requestType
       * @param {string} url
       * @param {string|array} mutations
       * @param {array} config
       */

  }, {
    key: "submit",
    value: function submit(requestType, url, mutations, config) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var data = _this.formData ? _this.formData : _this.data();

        axios[requestType](url, data, config).then(function (response) {

          _this.onSuccess();

          if (_.isString(mutations)) {
            mutations = [mutations];
          }

          if (mutations && mutations.length) {
            _.each(mutations, function (mutation) {
              app.$store.commit(mutation, {
                response: response.data,
                requestData: _this.data()
              });
            });
          }

          if (!_this.resetData) {
            _this.setOriginalData();
          }

          resolve(response.data);
        }).catch(function (error) {
          if (error.response) {
            app.handleApiError(error.response);
            _this.onFail(error.response.data);
            reject(error.response.data);
          } else {
            console.error(error);
            reject(error.response);
          }
        });
      });
    }

    /**
       * Handle a successful form submission.
       */

  }, {
    key: "onSuccess",
    value: function onSuccess() {
      this.errors.clear();
    }

    /**
       * Handle a failed form submission.
       *
       * @param {object} errors
       */

  }, {
    key: "onFail",
    value: function onFail(errors) {
      this.errors.record(errors);
    }

    /**
       * Sets the current data to the original data
       */

  }, {
    key: "setOriginalData",
    value: function setOriginalData() {
      this.originalData = this.data();
    }

    /**
       * Generates a query string for the data given
       */

  }, {
    key: "dataQueryString",
    value: function dataQueryString() {
      var str = [];
      var data = this.data();
      for (var datum in data) {
        if (data.hasOwnProperty(datum)) {
          str.push(encodeURIComponent(datum) + "=" + encodeURIComponent(data[datum]));
        }
      }return str.join("&");
    }
  }]);

  return Request;
}();

/* harmony default export */ __webpack_exports__["a"] = (Request);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/lodash/lodash.js")))

/***/ }),

/***/ "./resources/assets/js/components/Clipboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Clipboard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47c9a4d2\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Clipboard.vue")
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Clipboard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Clipboard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47c9a4d2", Component.options)
  } else {
    hotAPI.reload("data-v-47c9a4d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Navigation.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Navigation.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-118fb788\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Navigation.vue")
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Navigation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navigation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-118fb788", Component.options)
  } else {
    hotAPI.reload("data-v-118fb788", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Notification.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Notification.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-44752bdf\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Notification.vue")
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Notification.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Notification.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44752bdf", Component.options)
  } else {
    hotAPI.reload("data-v-44752bdf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/Notifications.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Notifications.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4ddbf124\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Notifications.vue")
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Notifications.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Notifications.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ddbf124", Component.options)
  } else {
    hotAPI.reload("data-v-4ddbf124", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/PageNotFound.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-926b3cdc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/PageNotFound.vue")
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/PageNotFound.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PageNotFound.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-926b3cdc", Component.options)
  } else {
    hotAPI.reload("data-v-926b3cdc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/TimeAgo.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/TimeAgo.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6868dc38\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/TimeAgo.vue")
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/TimeAgo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TimeAgo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6868dc38", Component.options)
  } else {
    hotAPI.reload("data-v-6868dc38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/ToolTip.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/ToolTip.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1260c99f\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/ToolTip.vue")
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ToolTip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ToolTip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1260c99f", Component.options)
  } else {
    hotAPI.reload("data-v-1260c99f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Vue) {Vue.component("TimeAgo", __webpack_require__("./resources/assets/js/components/TimeAgo.vue"));
Vue.component("Tooltip", __webpack_require__("./resources/assets/js/components/ToolTip.vue"));
Vue.component("Clipboard", __webpack_require__("./resources/assets/js/components/Clipboard.vue"));
Vue.component("Navigation", __webpack_require__("./resources/assets/js/components/Navigation.vue"));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./resources/assets/js/directives/index.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/assets/js/laroute.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

    var laroute = function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://codepier.dev',
            routes: [{ "host": null, "methods": ["GET", "HEAD"], "uri": "oauth\/authorize", "name": null, "action": "\Laravel\Passport\Http\Controllers\AuthorizationController@authorize" }, { "host": null, "methods": ["POST"], "uri": "oauth\/authorize", "name": null, "action": "\Laravel\Passport\Http\Controllers\ApproveAuthorizationController@approve" }, { "host": null, "methods": ["DELETE"], "uri": "oauth\/authorize", "name": null, "action": "\Laravel\Passport\Http\Controllers\DenyAuthorizationController@deny" }, { "host": null, "methods": ["POST"], "uri": "oauth\/token", "name": null, "action": "\Laravel\Passport\Http\Controllers\AccessTokenController@issueToken" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "oauth\/tokens", "name": null, "action": "\Laravel\Passport\Http\Controllers\AuthorizedAccessTokenController@forUser" }, { "host": null, "methods": ["DELETE"], "uri": "oauth\/tokens\/{token_id}", "name": null, "action": "\Laravel\Passport\Http\Controllers\AuthorizedAccessTokenController@destroy" }, { "host": null, "methods": ["POST"], "uri": "oauth\/token\/refresh", "name": null, "action": "\Laravel\Passport\Http\Controllers\TransientTokenController@refresh" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "oauth\/clients", "name": null, "action": "\Laravel\Passport\Http\Controllers\ClientController@forUser" }, { "host": null, "methods": ["POST"], "uri": "oauth\/clients", "name": null, "action": "\Laravel\Passport\Http\Controllers\ClientController@store" }, { "host": null, "methods": ["PUT"], "uri": "oauth\/clients\/{client_id}", "name": null, "action": "\Laravel\Passport\Http\Controllers\ClientController@update" }, { "host": null, "methods": ["DELETE"], "uri": "oauth\/clients\/{client_id}", "name": null, "action": "\Laravel\Passport\Http\Controllers\ClientController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "oauth\/scopes", "name": null, "action": "\Laravel\Passport\Http\Controllers\ScopeController@all" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "oauth\/personal-access-tokens", "name": null, "action": "\Laravel\Passport\Http\Controllers\PersonalAccessTokenController@forUser" }, { "host": null, "methods": ["POST"], "uri": "oauth\/personal-access-tokens", "name": null, "action": "\Laravel\Passport\Http\Controllers\PersonalAccessTokenController@store" }, { "host": null, "methods": ["DELETE"], "uri": "oauth\/personal-access-tokens\/{token_id}", "name": null, "action": "\Laravel\Passport\Http\Controllers\PersonalAccessTokenController@destroy" }, { "host": null, "methods": ["POST"], "uri": "broadcasting\/auth", "name": null, "action": "Illuminate\Broadcasting\BroadcastController@authenticate" }, { "host": "provision.codepier.dev", "methods": ["GET", "HEAD"], "uri": "\/", "name": null, "action": "Server\CustomServerProvisioningController@provision" }, { "host": "provision.codepier.dev", "methods": ["POST"], "uri": "start\/{provisioning_key}", "name": null, "action": "Server\CustomServerProvisioningController@start" }, { "host": "provision.codepier.dev", "methods": ["GET", "HEAD"], "uri": "keys\/{provisioning_key}\/public", "name": null, "action": "Server\CustomServerProvisioningController@returnPublicKey" }, { "host": "provision.codepier.dev", "methods": ["GET", "HEAD"], "uri": "keys\/{provisioning_key\/private}", "name": null, "action": "Server\CustomServerProvisioningController@returnPrivateKey" }, { "host": "provision.codepier.dev", "methods": ["GET", "HEAD"], "uri": "end\/{provisioning_key}", "name": null, "action": "Server\CustomServerProvisioningController@end" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/2fa", "name": "2fa.index", "action": "Auth\SecondAuthController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/2fa", "name": "2fa.store", "action": "Auth\SecondAuthController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/2fa\/{fa}", "name": "2fa.show", "action": "Auth\SecondAuthController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/2fa\/{fa}", "name": "2fa.update", "action": "Auth\SecondAuthController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/2fa\/{fa}", "name": "2fa.destroy", "action": "Auth\SecondAuthController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/me", "name": "me.index", "action": "UserUserController@index" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/user", "name": "user.index", "action": "UserUserController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/user", "name": "user.store", "action": "UserUserController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/user\/{user}", "name": "user.show", "action": "UserUserController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/user\/{user}", "name": "user.update", "action": "UserUserController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/user\/{user}", "name": "user.destroy", "action": "UserUserController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/subscription\/invoices", "name": "invoices.index", "action": "UserSubscriptionUserSubscriptionInvoiceController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/subscription\/invoices", "name": "invoices.store", "action": "UserSubscriptionUserSubscriptionInvoiceController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/subscription\/invoices\/{invoice}", "name": "invoices.show", "action": "UserSubscriptionUserSubscriptionInvoiceController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/subscription\/invoices\/{invoice}", "name": "invoices.update", "action": "UserSubscriptionUserSubscriptionInvoiceController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/subscription\/invoices\/{invoice}", "name": "invoices.destroy", "action": "UserSubscriptionUserSubscriptionInvoiceController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/subscription", "name": "subscription.index", "action": "UserSubscriptionUserSubscriptionController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/subscription", "name": "subscription.store", "action": "UserSubscriptionUserSubscriptionController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/subscription\/{subscription}", "name": "subscription.show", "action": "UserSubscriptionUserSubscriptionController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/subscription\/{subscription}", "name": "subscription.update", "action": "UserSubscriptionUserSubscriptionController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/subscription\/{subscription}", "name": "subscription.destroy", "action": "UserSubscriptionUserSubscriptionController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/subscription-card", "name": "subscription-card.index", "action": "UserSubscriptionUserSubscriptionCardController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/subscription-card", "name": "subscription-card.store", "action": "UserSubscriptionUserSubscriptionCardController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/subscription-card\/{subscription_card}", "name": "subscription-card.show", "action": "UserSubscriptionUserSubscriptionCardController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/subscription-card\/{subscription_card}", "name": "subscription-card.update", "action": "UserSubscriptionUserSubscriptionCardController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/subscription-card\/{subscription_card}", "name": "subscription-card.destroy", "action": "UserSubscriptionUserSubscriptionCardController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/team", "name": "team.index", "action": "UserTeamUserTeamController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/team", "name": "team.store", "action": "UserTeamUserTeamController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/team\/{team}", "name": "team.show", "action": "UserTeamUserTeamController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/team\/{team}", "name": "team.update", "action": "UserTeamUserTeamController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/team\/{team}", "name": "team.destroy", "action": "UserTeamUserTeamController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/team\/team\/{team}\/members", "name": "team.members.index", "action": "UserTeamUserTeamMemberController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/team\/team\/{team}\/members", "name": "team.members.store", "action": "UserTeamUserTeamMemberController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/team\/team\/{team}\/members\/{member}", "name": "team.members.show", "action": "UserTeamUserTeamMemberController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/team\/team\/{team}\/members\/{member}", "name": "team.members.update", "action": "UserTeamUserTeamMemberController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/team\/team\/{team}\/members\/{member}", "name": "team.members.destroy", "action": "UserTeamUserTeamMemberController@destroy" }, { "host": null, "methods": ["POST"], "uri": "api\/team\/switch\/{id?}", "name": "teams.switch", "action": "UserTeamUserTeamController@switchTeam" }, { "host": null, "methods": ["POST"], "uri": "api\/team\/members", "name": "teams.members.invite", "action": "UserTeamUserTeamMemberController@invite" }, { "host": null, "methods": ["POST"], "uri": "api\/team\/members\/resend\/{invite_id}", "name": "teams.members.resend_invite", "action": "UserTeamUserTeamMemberController@resendInvite" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/categories", "name": "categories.index", "action": "CategoriesController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/categories", "name": "categories.store", "action": "CategoriesController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/categories\/{category}", "name": "categories.show", "action": "CategoriesController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/categories\/{category}", "name": "categories.update", "action": "CategoriesController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/categories\/{category}", "name": "categories.destroy", "action": "CategoriesController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/buoy-apps\/buoyClasses", "name": null, "action": "BuoyAppController@getBuoyClasses" }, { "host": null, "methods": ["POST"], "uri": "api\/buoy-apps\/{buoy_app}\/update", "name": null, "action": "BuoyAppController@update" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/buoy-apps", "name": "buoy-apps.index", "action": "BuoyAppController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/buoy-apps", "name": "buoy-apps.store", "action": "BuoyAppController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/buoy-apps\/{buoy_app}", "name": "buoy-apps.show", "action": "BuoyAppController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/buoy-apps\/{buoy_app}", "name": "buoy-apps.update", "action": "BuoyAppController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/buoy-apps\/{buoy_app}", "name": "buoy-apps.destroy", "action": "BuoyAppController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/bitts", "name": "bitts.index", "action": "BittsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/bitts", "name": "bitts.store", "action": "BittsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/bitts\/{bitt}", "name": "bitts.show", "action": "BittsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/bitts\/{bitt}", "name": "bitts.update", "action": "BittsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/bitts\/{bitt}", "name": "bitts.destroy", "action": "BittsController@destroy" }, { "host": null, "methods": ["POST"], "uri": "api\/bitt\/{bitt}\/run", "name": null, "action": "BittsController@runOnServers" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/systems", "name": null, "action": "SystemsController@index" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/running-commands", "name": null, "action": "UserUserController@getRunningCommands" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/running-deployments", "name": null, "action": "UserUserController@getRunningDeployments" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/ssh-keys", "name": "ssh-keys.index", "action": "UserUserSshKeyController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/ssh-keys", "name": "ssh-keys.store", "action": "UserUserSshKeyController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/ssh-keys\/{ssh_key}", "name": "ssh-keys.show", "action": "UserUserSshKeyController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/ssh-keys\/{ssh_key}", "name": "ssh-keys.update", "action": "UserUserSshKeyController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/ssh-keys\/{ssh_key}", "name": "ssh-keys.destroy", "action": "UserUserSshKeyController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/server-providers", "name": "server-providers.index", "action": "UserProvidersUserServerProviderController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server-providers", "name": "server-providers.store", "action": "UserProvidersUserServerProviderController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/server-providers\/{server_provider}", "name": "server-providers.show", "action": "UserProvidersUserServerProviderController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/server-providers\/{server_provider}", "name": "server-providers.update", "action": "UserProvidersUserServerProviderController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/server-providers\/{server_provider}", "name": "server-providers.destroy", "action": "UserProvidersUserServerProviderController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/notification-settings", "name": "notification-settings.index", "action": "UserUserNotificationSettingsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/notification-settings", "name": "notification-settings.store", "action": "UserUserNotificationSettingsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/notification-settings\/{notification_setting}", "name": "notification-settings.show", "action": "UserUserNotificationSettingsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/notification-settings\/{notification_setting}", "name": "notification-settings.update", "action": "UserUserNotificationSettingsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/notification-settings\/{notification_setting}", "name": "notification-settings.destroy", "action": "UserUserNotificationSettingsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/repository-providers", "name": "repository-providers.index", "action": "UserProvidersUserRepositoryProviderController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/repository-providers", "name": "repository-providers.store", "action": "UserProvidersUserRepositoryProviderController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/repository-providers\/{repository_provider}", "name": "repository-providers.show", "action": "UserProvidersUserRepositoryProviderController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/repository-providers\/{repository_provider}", "name": "repository-providers.update", "action": "UserProvidersUserRepositoryProviderController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/repository-providers\/{repository_provider}", "name": "repository-providers.destroy", "action": "UserProvidersUserRepositoryProviderController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/notification-providers", "name": "notification-providers.index", "action": "UserProvidersUserNotificationProviderController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/notification-providers", "name": "notification-providers.store", "action": "UserProvidersUserNotificationProviderController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/notification-providers\/{notification_provider}", "name": "notification-providers.show", "action": "UserProvidersUserNotificationProviderController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/notification-providers\/{notification_provider}", "name": "notification-providers.update", "action": "UserProvidersUserNotificationProviderController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/notification-providers\/{notification_provider}", "name": "notification-providers.destroy", "action": "UserProvidersUserNotificationProviderController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/events", "name": "events.index", "action": "EventController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/events", "name": "events.store", "action": "EventController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/events\/{event}", "name": "events.show", "action": "EventController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/events\/{event}", "name": "events.update", "action": "EventController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/events\/{event}", "name": "events.destroy", "action": "EventController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/piles\/all", "name": null, "action": "Pile\PileController@allPiles" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/piles", "name": "piles.index", "action": "Pile\PileController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/piles", "name": "piles.store", "action": "Pile\PileController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/piles\/{pile}", "name": "piles.show", "action": "Pile\PileController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/piles\/{pile}", "name": "piles.update", "action": "Pile\PileController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/piles\/{pile}", "name": "piles.destroy", "action": "Pile\PileController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/pile\/{pile}\/sites", "name": "pile.sites.index", "action": "Pile\PileSitesController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/pile\/{pile}\/sites", "name": "pile.sites.store", "action": "Pile\PileSitesController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/pile\/{pile}\/sites\/{site}", "name": "pile.sites.show", "action": "Pile\PileSitesController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/pile\/{pile}\/sites\/{site}", "name": "pile.sites.update", "action": "Pile\PileSitesController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/pile\/{pile}\/sites\/{site}", "name": "pile.sites.destroy", "action": "Pile\PileSitesController@destroy" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/change-pile", "name": null, "action": "Pile\PileController@changePile" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers", "name": "servers.index", "action": "Server\ServerController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers", "name": "servers.store", "action": "Server\ServerController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}", "name": "servers.show", "action": "Server\ServerController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}", "name": "servers.update", "action": "Server\ServerController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}", "name": "servers.destroy", "action": "Server\ServerController@destroy" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/{server}\/find-file", "name": null, "action": "Server\ServerFileController@find" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/{server}\/reload-file\/{file}", "name": null, "action": "Server\ServerFileController@reloadFile" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/{server}\/custom", "name": null, "action": "Server\ServerController@generateCustomServerSh" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/all_servers\/buoys", "name": null, "action": "Server\ServerBuoyController@myServerBuoys" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/{server}\/file", "name": null, "action": "Server\ServerController@getFile" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/restore\/{server}", "name": null, "action": "Server\ServerController@restore" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/{server}\/file\/save", "name": null, "action": "Server\ServerController@saveFile" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/disk-space\/{server}", "name": null, "action": "Server\ServerController@getDiskSpace" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/restart-server\/{server}", "name": null, "action": "Server\ServerController@restartServer" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/restart-database\/{server}", "name": null, "action": "Server\ServerController@restartDatabases" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/restart-workers\/{server}", "name": null, "action": "Server\ServerController@restartWorkerServices" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/ssh-connection\/{server}", "name": null, "action": "Server\ServerSshKeyController@testSSHConnection" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/server\/restart-web-services\/{server}", "name": null, "action": "Server\ServerController@restartWebServices" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/file", "name": "servers.file.index", "action": "Server\ServerFileController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/file", "name": "servers.file.store", "action": "Server\ServerFileController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/file\/{file}", "name": "servers.file.show", "action": "Server\ServerFileController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/file\/{file}", "name": "servers.file.update", "action": "Server\ServerFileController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/file\/{file}", "name": "servers.file.destroy", "action": "Server\ServerFileController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/buoys", "name": "servers.buoys.index", "action": "Server\ServerBuoyController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/buoys", "name": "servers.buoys.store", "action": "Server\ServerBuoyController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/buoys\/{buoy}", "name": "servers.buoys.show", "action": "Server\ServerBuoyController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/buoys\/{buoy}", "name": "servers.buoys.update", "action": "Server\ServerBuoyController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/buoys\/{buoy}", "name": "servers.buoys.destroy", "action": "Server\ServerBuoyController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/sites", "name": "servers.sites.index", "action": "Server\ServerSiteController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/sites", "name": "servers.sites.store", "action": "Server\ServerSiteController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/sites\/{site}", "name": "servers.sites.show", "action": "Server\ServerSiteController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/sites\/{site}", "name": "servers.sites.update", "action": "Server\ServerSiteController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/sites\/{site}", "name": "servers.sites.destroy", "action": "Server\ServerSiteController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/workers", "name": "servers.workers.index", "action": "Server\ServerWorkerController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/workers", "name": "servers.workers.store", "action": "Server\ServerWorkerController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/workers\/{worker}", "name": "servers.workers.show", "action": "Server\ServerWorkerController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/workers\/{worker}", "name": "servers.workers.update", "action": "Server\ServerWorkerController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/workers\/{worker}", "name": "servers.workers.destroy", "action": "Server\ServerWorkerController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/schemas", "name": "servers.schemas.index", "action": "Server\ServerSchemaController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/schemas", "name": "servers.schemas.store", "action": "Server\ServerSchemaController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/schemas\/{schema}", "name": "servers.schemas.show", "action": "Server\ServerSchemaController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/schemas\/{schema}", "name": "servers.schemas.update", "action": "Server\ServerSchemaController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/schemas\/{schema}", "name": "servers.schemas.destroy", "action": "Server\ServerSchemaController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/daemons", "name": "servers.daemons.index", "action": "Server\ServerDaemonsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/daemons", "name": "servers.daemons.store", "action": "Server\ServerDaemonsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/daemons\/{daemon}", "name": "servers.daemons.show", "action": "Server\ServerDaemonsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/daemons\/{daemon}", "name": "servers.daemons.update", "action": "Server\ServerDaemonsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/daemons\/{daemon}", "name": "servers.daemons.destroy", "action": "Server\ServerDaemonsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/ssh-keys", "name": "servers.ssh-keys.index", "action": "Server\ServerSshKeyController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/ssh-keys", "name": "servers.ssh-keys.store", "action": "Server\ServerSshKeyController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/ssh-keys\/{ssh_key}", "name": "servers.ssh-keys.show", "action": "Server\ServerSshKeyController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/ssh-keys\/{ssh_key}", "name": "servers.ssh-keys.update", "action": "Server\ServerSshKeyController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/ssh-keys\/{ssh_key}", "name": "servers.ssh-keys.destroy", "action": "Server\ServerSshKeyController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/features", "name": "servers.features.index", "action": "Server\ServerFeatureController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/features", "name": "servers.features.store", "action": "Server\ServerFeatureController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/features\/{feature}", "name": "servers.features.show", "action": "Server\ServerFeatureController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/features\/{feature}", "name": "servers.features.update", "action": "Server\ServerFeatureController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/features\/{feature}", "name": "servers.features.destroy", "action": "Server\ServerFeatureController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/cron-jobs", "name": "servers.cron-jobs.index", "action": "Server\ServerCronJobController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/cron-jobs", "name": "servers.cron-jobs.store", "action": "Server\ServerCronJobController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/cron-jobs\/{cron_job}", "name": "servers.cron-jobs.show", "action": "Server\ServerCronJobController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/cron-jobs\/{cron_job}", "name": "servers.cron-jobs.update", "action": "Server\ServerCronJobController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/cron-jobs\/{cron_job}", "name": "servers.cron-jobs.destroy", "action": "Server\ServerCronJobController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/ssl-certificate", "name": "servers.ssl-certificate.index", "action": "Server\ServerSslController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/ssl-certificate", "name": "servers.ssl-certificate.store", "action": "Server\ServerSslController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/ssl-certificate\/{ssl_certificate}", "name": "servers.ssl-certificate.show", "action": "Server\ServerSslController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/ssl-certificate\/{ssl_certificate}", "name": "servers.ssl-certificate.update", "action": "Server\ServerSslController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/ssl-certificate\/{ssl_certificate}", "name": "servers.ssl-certificate.destroy", "action": "Server\ServerSslController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/schema-users", "name": "servers.schema-users.index", "action": "Server\ServerSchemaUserController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/schema-users", "name": "servers.schema-users.store", "action": "Server\ServerSchemaUserController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/schema-users\/{schema_user}", "name": "servers.schema-users.show", "action": "Server\ServerSchemaUserController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/schema-users\/{schema_user}", "name": "servers.schema-users.update", "action": "Server\ServerSchemaUserController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/schema-users\/{schema_user}", "name": "servers.schema-users.destroy", "action": "Server\ServerSchemaUserController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/firewall-rules", "name": "servers.firewall-rules.index", "action": "Server\ServerFirewallRuleController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/firewall-rules", "name": "servers.firewall-rules.store", "action": "Server\ServerFirewallRuleController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/firewall-rules\/{firewall_rule}", "name": "servers.firewall-rules.show", "action": "Server\ServerFirewallRuleController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/firewall-rules\/{firewall_rule}", "name": "servers.firewall-rules.update", "action": "Server\ServerFirewallRuleController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/firewall-rules\/{firewall_rule}", "name": "servers.firewall-rules.destroy", "action": "Server\ServerFirewallRuleController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/provision-steps", "name": "servers.provision-steps.index", "action": "Server\ServerProvisionStepsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/provision-steps", "name": "servers.provision-steps.store", "action": "Server\ServerProvisionStepsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/provision-steps\/{provision_step}", "name": "servers.provision-steps.show", "action": "Server\ServerProvisionStepsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/provision-steps\/{provision_step}", "name": "servers.provision-steps.update", "action": "Server\ServerProvisionStepsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/provision-steps\/{provision_step}", "name": "servers.provision-steps.destroy", "action": "Server\ServerProvisionStepsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/language-settings", "name": "servers.language-settings.index", "action": "Server\ServerLanguageSettingsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/language-settings", "name": "servers.language-settings.store", "action": "Server\ServerLanguageSettingsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/language-settings\/{language_setting}", "name": "servers.language-settings.show", "action": "Server\ServerLanguageSettingsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/language-settings\/{language_setting}", "name": "servers.language-settings.update", "action": "Server\ServerLanguageSettingsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/language-settings\/{language_setting}", "name": "servers.language-settings.destroy", "action": "Server\ServerLanguageSettingsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/environment-variables", "name": "servers.environment-variables.index", "action": "Server\ServerEnvironmentVariablesController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/servers\/{server}\/environment-variables", "name": "servers.environment-variables.store", "action": "Server\ServerEnvironmentVariablesController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/servers\/{server}\/environment-variables\/{environment_variable}", "name": "servers.environment-variables.show", "action": "Server\ServerEnvironmentVariablesController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/servers\/{server}\/environment-variables\/{environment_variable}", "name": "servers.environment-variables.update", "action": "Server\ServerEnvironmentVariablesController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/servers\/{server}\/environment-variables\/{environment_variable}", "name": "servers.environment-variables.destroy", "action": "Server\ServerEnvironmentVariablesController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/server\/{server}\/language-settings", "name": null, "action": "Server\ServerLanguageSettingsController@getLanguageSettings" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites", "name": "sites.index", "action": "Site\SiteController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites", "name": "sites.store", "action": "Site\SiteController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}", "name": "sites.show", "action": "Site\SiteController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}", "name": "sites.update", "action": "Site\SiteController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}", "name": "sites.destroy", "action": "Site\SiteController@destroy" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/site\/{site}\/rename", "name": null, "action": "Site\SiteController@rename" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/site\/{site}\/find-file", "name": null, "action": "Site\SiteFileController@find" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/site\/{site}\/workflow", "name": null, "action": "Site\SiteWorkflowController@store" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/site\/{site}\/refresh-ssh-keys", "name": null, "action": "Site\SiteController@refreshPublicKey" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/site\/{site}\/refresh-deploy-key", "name": null, "action": "Site\SiteController@refreshDeployKey" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/site\/{site}\/clear-commands", "name": null, "action": "Site\SiteServerCommandsController@destroy" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/site\/{site}\/reload-file\/{file}\/server\/{server}", "name": null, "action": "Site\SiteFileController@reloadFile" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/deploy\/{site}", "name": null, "action": "Site\SiteController@deploy" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/rollback\/{site}", "name": null, "action": "Site\SiteController@rollback" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/site\/{site}\/deployment-steps", "name": null, "action": "Site\SiteDeploymentStepsController@getDeploymentSteps" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/restart-server\/{site}", "name": null, "action": "Site\SiteController@restartServer" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/restart-database\/{site}", "name": null, "action": "Site\SiteController@restartDatabases" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/restart-workers\/{site}", "name": null, "action": "Site\SiteController@restartWorkerServices" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/restart-web-services\/{site}", "name": null, "action": "Site\SiteController@restartWebServices" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/dns", "name": "sites.dns.index", "action": "Site\SiteDnsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/dns", "name": "sites.dns.store", "action": "Site\SiteDnsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/dns\/{dn}", "name": "sites.dns.show", "action": "Site\SiteDnsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/dns\/{dn}", "name": "sites.dns.update", "action": "Site\SiteDnsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/dns\/{dn}", "name": "sites.dns.destroy", "action": "Site\SiteDnsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/file", "name": "sites.file.index", "action": "Site\SiteFileController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/file", "name": "sites.file.store", "action": "Site\SiteFileController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/file\/{file}", "name": "sites.file.show", "action": "Site\SiteFileController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/file\/{file}", "name": "sites.file.update", "action": "Site\SiteFileController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/file\/{file}", "name": "sites.file.destroy", "action": "Site\SiteFileController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/buoys", "name": "sites.buoys.index", "action": "Site\SiteBuoyController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/buoys", "name": "sites.buoys.store", "action": "Site\SiteBuoyController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/buoys\/{buoy}", "name": "sites.buoys.show", "action": "Site\SiteBuoyController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/buoys\/{buoy}", "name": "sites.buoys.update", "action": "Site\SiteBuoyController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/buoys\/{buoy}", "name": "sites.buoys.destroy", "action": "Site\SiteBuoyController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/servers", "name": "sites.servers.index", "action": "Site\SiteServerController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/servers", "name": "sites.servers.store", "action": "Site\SiteServerController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/servers\/{server}", "name": "sites.servers.show", "action": "Site\SiteServerController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/servers\/{server}", "name": "sites.servers.update", "action": "Site\SiteServerController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/servers\/{server}", "name": "sites.servers.destroy", "action": "Site\SiteServerController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/workers", "name": "sites.workers.index", "action": "Site\SiteWorkerController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/workers", "name": "sites.workers.store", "action": "Site\SiteWorkerController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/workers\/{worker}", "name": "sites.workers.show", "action": "Site\SiteWorkerController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/workers\/{worker}", "name": "sites.workers.update", "action": "Site\SiteWorkerController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/workers\/{worker}", "name": "sites.workers.destroy", "action": "Site\SiteWorkerController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/schemas", "name": "sites.schemas.index", "action": "Site\SiteSchemaController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/schemas", "name": "sites.schemas.store", "action": "Site\SiteSchemaController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/schemas\/{schema}", "name": "sites.schemas.show", "action": "Site\SiteSchemaController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/schemas\/{schema}", "name": "sites.schemas.update", "action": "Site\SiteSchemaController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/schemas\/{schema}", "name": "sites.schemas.destroy", "action": "Site\SiteSchemaController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/daemons", "name": "sites.daemons.index", "action": "Site\SiteDaemonsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/daemons", "name": "sites.daemons.store", "action": "Site\SiteDaemonsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/daemons\/{daemon}", "name": "sites.daemons.show", "action": "Site\SiteDaemonsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/daemons\/{daemon}", "name": "sites.daemons.update", "action": "Site\SiteDaemonsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/daemons\/{daemon}", "name": "sites.daemons.destroy", "action": "Site\SiteDaemonsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/ssh-keys", "name": "sites.ssh-keys.index", "action": "Site\SiteSshKeyController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/ssh-keys", "name": "sites.ssh-keys.store", "action": "Site\SiteSshKeyController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/ssh-keys\/{ssh_key}", "name": "sites.ssh-keys.show", "action": "Site\SiteSshKeyController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/ssh-keys\/{ssh_key}", "name": "sites.ssh-keys.update", "action": "Site\SiteSshKeyController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/ssh-keys\/{ssh_key}", "name": "sites.ssh-keys.destroy", "action": "Site\SiteSshKeyController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/cron-jobs", "name": "sites.cron-jobs.index", "action": "Site\SiteCronJobController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/cron-jobs", "name": "sites.cron-jobs.store", "action": "Site\SiteCronJobController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/cron-jobs\/{cron_job}", "name": "sites.cron-jobs.show", "action": "Site\SiteCronJobController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/cron-jobs\/{cron_job}", "name": "sites.cron-jobs.update", "action": "Site\SiteCronJobController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/cron-jobs\/{cron_job}", "name": "sites.cron-jobs.destroy", "action": "Site\SiteCronJobController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/ssl-certificate", "name": "sites.ssl-certificate.index", "action": "Site\SiteSslController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/ssl-certificate", "name": "sites.ssl-certificate.store", "action": "Site\SiteSslController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/ssl-certificate\/{ssl_certificate}", "name": "sites.ssl-certificate.show", "action": "Site\SiteSslController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/ssl-certificate\/{ssl_certificate}", "name": "sites.ssl-certificate.update", "action": "Site\SiteSslController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/ssl-certificate\/{ssl_certificate}", "name": "sites.ssl-certificate.destroy", "action": "Site\SiteSslController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/life-lines", "name": "sites.life-lines.index", "action": "Site\SiteLifelinesController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/life-lines", "name": "sites.life-lines.store", "action": "Site\SiteLifelinesController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/life-lines\/{life_line}", "name": "sites.life-lines.show", "action": "Site\SiteLifelinesController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/life-lines\/{life_line}", "name": "sites.life-lines.update", "action": "Site\SiteLifelinesController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/life-lines\/{life_line}", "name": "sites.life-lines.destroy", "action": "Site\SiteLifelinesController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/deployments", "name": "sites.deployments.index", "action": "Site\SiteDeploymentsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/deployments", "name": "sites.deployments.store", "action": "Site\SiteDeploymentsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/deployments\/{deployment}", "name": "sites.deployments.show", "action": "Site\SiteDeploymentsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/deployments\/{deployment}", "name": "sites.deployments.update", "action": "Site\SiteDeploymentsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/deployments\/{deployment}", "name": "sites.deployments.destroy", "action": "Site\SiteDeploymentsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/schema-users", "name": "sites.schema-users.index", "action": "Site\SiteSchemaUserController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/schema-users", "name": "sites.schema-users.store", "action": "Site\SiteSchemaUserController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/schema-users\/{schema_user}", "name": "sites.schema-users.show", "action": "Site\SiteSchemaUserController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/schema-users\/{schema_user}", "name": "sites.schema-users.update", "action": "Site\SiteSchemaUserController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/schema-users\/{schema_user}", "name": "sites.schema-users.destroy", "action": "Site\SiteSchemaUserController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/hooks", "name": "sites.hooks.index", "action": "Site\Repository\RepositoryHookController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/hooks", "name": "sites.hooks.store", "action": "Site\Repository\RepositoryHookController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/hooks\/{hook}", "name": "sites.hooks.show", "action": "Site\Repository\RepositoryHookController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/hooks\/{hook}", "name": "sites.hooks.update", "action": "Site\Repository\RepositoryHookController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/hooks\/{hook}", "name": "sites.hooks.destroy", "action": "Site\Repository\RepositoryHookController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/firewall-rules", "name": "sites.firewall-rules.index", "action": "Site\SiteFirewallRuleController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/firewall-rules", "name": "sites.firewall-rules.store", "action": "Site\SiteFirewallRuleController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/firewall-rules\/{firewall_rule}", "name": "sites.firewall-rules.show", "action": "Site\SiteFirewallRuleController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/firewall-rules\/{firewall_rule}", "name": "sites.firewall-rules.update", "action": "Site\SiteFirewallRuleController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/firewall-rules\/{firewall_rule}", "name": "sites.firewall-rules.destroy", "action": "Site\SiteFirewallRuleController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/server-features", "name": "sites.server-features.index", "action": "Site\SiteServerFeaturesController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/server-features", "name": "sites.server-features.store", "action": "Site\SiteServerFeaturesController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/server-features\/{server_type}", "name": "sites.server-features.show", "action": "Site\SiteServerFeaturesController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/server-features\/{server_type}", "name": "sites.server-features.update", "action": "Site\SiteServerFeaturesController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/server-features\/{server_type}", "name": "sites.server-features.destroy", "action": "Site\SiteServerFeaturesController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/deployment-steps", "name": "sites.deployment-steps.index", "action": "Site\SiteDeploymentStepsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/deployment-steps", "name": "sites.deployment-steps.store", "action": "Site\SiteDeploymentStepsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/deployment-steps\/{deployment_step}", "name": "sites.deployment-steps.show", "action": "Site\SiteDeploymentStepsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/deployment-steps\/{deployment_step}", "name": "sites.deployment-steps.update", "action": "Site\SiteDeploymentStepsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/deployment-steps\/{deployment_step}", "name": "sites.deployment-steps.destroy", "action": "Site\SiteDeploymentStepsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/language-settings", "name": "sites.language-settings.index", "action": "Site\SiteLanguageSettingsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/language-settings", "name": "sites.language-settings.store", "action": "Site\SiteLanguageSettingsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/language-settings\/{language_setting}", "name": "sites.language-settings.show", "action": "Site\SiteLanguageSettingsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/language-settings\/{language_setting}", "name": "sites.language-settings.update", "action": "Site\SiteLanguageSettingsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/language-settings\/{language_setting}", "name": "sites.language-settings.destroy", "action": "Site\SiteLanguageSettingsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/environment-variables", "name": "sites.environment-variables.index", "action": "Site\SiteEnvironmentVariablesController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/my\/sites\/{site}\/environment-variables", "name": "sites.environment-variables.store", "action": "Site\SiteEnvironmentVariablesController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/sites\/{site}\/environment-variables\/{environment_variable}", "name": "sites.environment-variables.show", "action": "Site\SiteEnvironmentVariablesController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/my\/sites\/{site}\/environment-variables\/{environment_variable}", "name": "sites.environment-variables.update", "action": "Site\SiteEnvironmentVariablesController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/my\/sites\/{site}\/environment-variables\/{environment_variable}", "name": "sites.environment-variables.destroy", "action": "Site\SiteEnvironmentVariablesController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/my\/site\/{site}\/language-settings", "name": null, "action": "Site\SiteLanguageSettingsController@getLanguageSettings" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/notification-settings", "name": "notification-settings.index", "action": "NotificationSettingsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/notification-settings", "name": "notification-settings.store", "action": "NotificationSettingsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/notification-settings\/{notification_setting}", "name": "notification-settings.show", "action": "NotificationSettingsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/notification-settings\/{notification_setting}", "name": "notification-settings.update", "action": "NotificationSettingsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/notification-settings\/{notification_setting}", "name": "notification-settings.destroy", "action": "NotificationSettingsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/types", "name": "types.index", "action": "Server\ServerTypesController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/server\/types", "name": "types.store", "action": "Server\ServerTypesController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/types\/{type}", "name": "types.show", "action": "Server\ServerTypesController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/server\/types\/{type}", "name": "types.update", "action": "Server\ServerTypesController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/server\/types\/{type}", "name": "types.destroy", "action": "Server\ServerTypesController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/features", "name": null, "action": "Server\ServerFeatureController@getFeatures" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/languages", "name": null, "action": "Server\ServerFeatureController@getLanguages" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/frameworks", "name": null, "action": "Server\ServerFeatureController@getFrameworks" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/site\/{site}\/editable-files", "name": null, "action": "Site\SiteFeatureController@getEditableFiles" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/{server}\/editable-files", "name": null, "action": "Server\ServerFeatureController@getEditableFiles" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/site\/{site}\/framework\/editable-files", "name": null, "action": "Site\SiteFeatureController@getEditableFrameworkFiles" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/auth\/providers\/server-providers", "name": "server-providers.index", "action": "Auth\Providers\ServerProvidersController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/auth\/providers\/server-providers", "name": "server-providers.store", "action": "Auth\Providers\ServerProvidersController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/auth\/providers\/server-providers\/{server_provider}", "name": "server-providers.show", "action": "Auth\Providers\ServerProvidersController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/auth\/providers\/server-providers\/{server_provider}", "name": "server-providers.update", "action": "Auth\Providers\ServerProvidersController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/auth\/providers\/server-providers\/{server_provider}", "name": "server-providers.destroy", "action": "Auth\Providers\ServerProvidersController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/auth\/providers\/repository-providers", "name": "repository-providers.index", "action": "Auth\Providers\RepositoryProvidersController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/auth\/providers\/repository-providers", "name": "repository-providers.store", "action": "Auth\Providers\RepositoryProvidersController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/auth\/providers\/repository-providers\/{repository_provider}", "name": "repository-providers.show", "action": "Auth\Providers\RepositoryProvidersController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/auth\/providers\/repository-providers\/{repository_provider}", "name": "repository-providers.update", "action": "Auth\Providers\RepositoryProvidersController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/auth\/providers\/repository-providers\/{repository_provider}", "name": "repository-providers.destroy", "action": "Auth\Providers\RepositoryProvidersController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/auth\/providers\/notification-providers", "name": "notification-providers.index", "action": "Auth\Providers\NotificationProvidersController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/auth\/providers\/notification-providers", "name": "notification-providers.store", "action": "Auth\Providers\NotificationProvidersController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/auth\/providers\/notification-providers\/{notification_provider}", "name": "notification-providers.show", "action": "Auth\Providers\NotificationProvidersController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/auth\/providers\/notification-providers\/{notification_provider}", "name": "notification-providers.update", "action": "Auth\Providers\NotificationProvidersController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/auth\/providers\/notification-providers\/{notification_provider}", "name": "notification-providers.destroy", "action": "Auth\Providers\NotificationProvidersController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/digitalocean\/options", "name": "options.index", "action": "Server\Providers\DigitalOcean\DigitalOceanServerOptionsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/server\/providers\/digitalocean\/options", "name": "options.store", "action": "Server\Providers\DigitalOcean\DigitalOceanServerOptionsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/digitalocean\/options\/{option}", "name": "options.show", "action": "Server\Providers\DigitalOcean\DigitalOceanServerOptionsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/server\/providers\/digitalocean\/options\/{option}", "name": "options.update", "action": "Server\Providers\DigitalOcean\DigitalOceanServerOptionsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/server\/providers\/digitalocean\/options\/{option}", "name": "options.destroy", "action": "Server\Providers\DigitalOcean\DigitalOceanServerOptionsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/digitalocean\/regions", "name": "regions.index", "action": "Server\Providers\DigitalOcean\DigitalOceanServerRegionsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/server\/providers\/digitalocean\/regions", "name": "regions.store", "action": "Server\Providers\DigitalOcean\DigitalOceanServerRegionsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/digitalocean\/regions\/{region}", "name": "regions.show", "action": "Server\Providers\DigitalOcean\DigitalOceanServerRegionsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/server\/providers\/digitalocean\/regions\/{region}", "name": "regions.update", "action": "Server\Providers\DigitalOcean\DigitalOceanServerRegionsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/server\/providers\/digitalocean\/regions\/{region}", "name": "regions.destroy", "action": "Server\Providers\DigitalOcean\DigitalOceanServerRegionsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/digitalocean\/features", "name": "features.index", "action": "Server\Providers\DigitalOcean\DigitalOceanServerFeaturesController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/server\/providers\/digitalocean\/features", "name": "features.store", "action": "Server\Providers\DigitalOcean\DigitalOceanServerFeaturesController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/digitalocean\/features\/{feature}", "name": "features.show", "action": "Server\Providers\DigitalOcean\DigitalOceanServerFeaturesController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/server\/providers\/digitalocean\/features\/{feature}", "name": "features.update", "action": "Server\Providers\DigitalOcean\DigitalOceanServerFeaturesController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/server\/providers\/digitalocean\/features\/{feature}", "name": "features.destroy", "action": "Server\Providers\DigitalOcean\DigitalOceanServerFeaturesController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/linode\/provider", "name": "provider.index", "action": "Server\Providers\Linode\LinodeController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/server\/providers\/linode\/provider", "name": "provider.store", "action": "Server\Providers\Linode\LinodeController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/linode\/provider\/{provider}", "name": "provider.show", "action": "Server\Providers\Linode\LinodeController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/server\/providers\/linode\/provider\/{provider}", "name": "provider.update", "action": "Server\Providers\Linode\LinodeController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/server\/providers\/linode\/provider\/{provider}", "name": "provider.destroy", "action": "Server\Providers\Linode\LinodeController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/linode\/options", "name": "options.index", "action": "Server\Providers\Linode\LinodeServerOptionsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/server\/providers\/linode\/options", "name": "options.store", "action": "Server\Providers\Linode\LinodeServerOptionsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/linode\/options\/{option}", "name": "options.show", "action": "Server\Providers\Linode\LinodeServerOptionsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/server\/providers\/linode\/options\/{option}", "name": "options.update", "action": "Server\Providers\Linode\LinodeServerOptionsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/server\/providers\/linode\/options\/{option}", "name": "options.destroy", "action": "Server\Providers\Linode\LinodeServerOptionsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/linode\/regions", "name": "regions.index", "action": "Server\Providers\Linode\LinodeServerRegionsController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/server\/providers\/linode\/regions", "name": "regions.store", "action": "Server\Providers\Linode\LinodeServerRegionsController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/linode\/regions\/{region}", "name": "regions.show", "action": "Server\Providers\Linode\LinodeServerRegionsController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/server\/providers\/linode\/regions\/{region}", "name": "regions.update", "action": "Server\Providers\Linode\LinodeServerRegionsController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/server\/providers\/linode\/regions\/{region}", "name": "regions.destroy", "action": "Server\Providers\Linode\LinodeServerRegionsController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/linode\/features", "name": "features.index", "action": "Server\Providers\Linode\LinodeServerFeaturesController@index" }, { "host": null, "methods": ["POST"], "uri": "api\/server\/providers\/linode\/features", "name": "features.store", "action": "Server\Providers\Linode\LinodeServerFeaturesController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "api\/server\/providers\/linode\/features\/{feature}", "name": "features.show", "action": "Server\Providers\Linode\LinodeServerFeaturesController@show" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "api\/server\/providers\/linode\/features\/{feature}", "name": "features.update", "action": "Server\Providers\Linode\LinodeServerFeaturesController@update" }, { "host": null, "methods": ["DELETE"], "uri": "api\/server\/providers\/linode\/features\/{feature}", "name": "features.destroy", "action": "Server\Providers\Linode\LinodeServerFeaturesController@destroy" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "login", "name": "login", "action": "Auth\LoginController@showLoginForm" }, { "host": null, "methods": ["POST"], "uri": "login", "name": null, "action": "Auth\LoginController@login" }, { "host": null, "methods": ["POST"], "uri": "logout", "name": "logout", "action": "Auth\LoginController@logout" }, { "host": null, "methods": ["POST"], "uri": "register", "name": null, "action": "Auth\RegisterController@register" }, { "host": null, "methods": ["POST"], "uri": "password\/email", "name": "password.email", "action": "Auth\ForgotPasswordController@sendResetLinkEmail" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "password\/reset\/{token}", "name": "password.reset", "action": "Auth\ResetPasswordController@showResetForm" }, { "host": null, "methods": ["POST"], "uri": "password\/reset", "name": null, "action": "Auth\ResetPasswordController@reset" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "provider\/{provider}\/link", "name": null, "action": "Auth\OauthController@newProvider" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "provider\/{provider}\/callback", "name": null, "action": "Auth\OauthController@getHandleProviderCallback" }, { "host": null, "methods": ["POST"], "uri": "stripe\/webhook", "name": null, "action": "\Laravel\Cashier\Http\Controllers\WebhookController@handleWebhook" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "subscription\/plans", "name": "plans.index", "action": "SubscriptionController@index" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "subscription\/plans\/create", "name": "plans.create", "action": "SubscriptionController@create" }, { "host": null, "methods": ["POST"], "uri": "subscription\/plans", "name": "plans.store", "action": "SubscriptionController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "subscription\/plans\/{plan}", "name": "plans.show", "action": "SubscriptionController@show" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "subscription\/plans\/{plan}\/edit", "name": "plans.edit", "action": "SubscriptionController@edit" }, { "host": null, "methods": ["PUT", "PATCH"], "uri": "subscription\/plans\/{plan}", "name": "plans.update", "action": "SubscriptionController@update" }, { "host": null, "methods": ["DELETE"], "uri": "subscription\/plans\/{plan}", "name": "plans.destroy", "action": "SubscriptionController@destroy" }, { "host": null, "methods": ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"], "uri": "webhook\/deploy\/{siteHashId}", "name": null, "action": "WebHookController@deploy" }, { "host": null, "methods": ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"], "uri": "webhook\/server\/{serverHashId}\/ssl\/updated", "name": null, "action": "WebHookController@serverSslCertificateUpdated" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "webhook\/{any}", "name": null, "action": "Controller@redirectToApp" }, { "host": "stats.codepier.dev", "methods": ["GET", "HEAD"], "uri": "webhook\/loads\/{serverHashId}", "name": null, "action": "WebHookController@loadMonitor" }, { "host": "stats.codepier.dev", "methods": ["GET", "HEAD"], "uri": "webhook\/memory\/{serverHashId}", "name": null, "action": "WebHookController@memoryMonitor" }, { "host": "stats.codepier.dev", "methods": ["GET", "HEAD"], "uri": "webhook\/diskusage\/{serverHashId}", "name": null, "action": "WebHookController@diskUsageMonitor" }, { "host": "stats.codepier.dev", "methods": ["GET", "HEAD"], "uri": "webhook\/{any}", "name": null, "action": "Controller@redirectToApp" }, { "host": "lifeline.codepier.dev", "methods": ["GET", "HEAD"], "uri": "{lifelineHashId}", "name": null, "action": "LifeLineController@update" }, { "host": "lifeline.codepier.dev", "methods": ["GET", "HEAD"], "uri": "{any}", "name": null, "action": "Controller@redirectToApp" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "teams\/accept\/{token}", "name": "teams.accept_invite", "action": "UserTeamUserTeamController@acceptInvite" }, { "host": "style-guide.codepier.dev", "methods": ["GET", "HEAD"], "uri": "\/", "name": null, "action": "PublicController@styleGuide" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "privacy", "name": null, "action": "PublicController@privacy" }, { "host": null, "methods": ["POST"], "uri": "subscribe", "name": null, "action": "PublicController@subscribe" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "terms-of-service", "name": null, "action": "PublicController@termsOfService" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "\/", "name": null, "action": "Controller@app" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "second-auth", "name": null, "action": "Auth\SecondAuthController@show" }, { "host": null, "methods": ["POST"], "uri": "second-auth", "name": null, "action": "Auth\SecondAuthController@store" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "slack-invite", "name": null, "action": "UserUserController@slackInvite" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "subscription\/invoices\/{invoice}", "name": null, "action": "UserSubscriptionUserSubscriptionInvoiceController@show" }, { "host": null, "methods": ["GET", "HEAD"], "uri": "{any}", "name": null, "action": "Controller@app" }],
            prefix: '',

            route: function route(name, parameters, _route) {
                _route = _route || this.getByName(name);

                if (!_route) {
                    return undefined;
                }

                return this.toRoute(_route, parameters);
            },

            url: function url(_url, parameters) {
                parameters = parameters || [];

                var uri = _url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute: function toRoute(route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)) {
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function isOtherHost(route) {
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters: function replaceNamedParameters(uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function (match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString: function getRouteQueryString(parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName: function getByName(name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction: function getByAction(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function getCorrectUrl(uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if (!this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function getLinkAttributes(attributes) {
            if (!attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function getHtmlLink(url, title, attributes) {
            title = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // laroute.action('HomeController@getIndex', [params = {}])
            action: function action(name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // laroute.route('routeName', [params = {}])
            route: function route(_route2, parameters) {
                parameters = parameters || {};

                return routes.route(_route2, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // laroute.route('url', [params = {}])
            url: function url(route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // laroute.link_to('foo/bar', [title = url], [attributes = {}])
            link_to: function link_to(url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route: function link_to_route(route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action: function link_to_action(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };
    }.call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return laroute;
        }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
        module.exports = laroute;
    } else {
        window.laroute = laroute;
    }
}).call(this);

/***/ }),

/***/ "./resources/assets/js/mixins/helpers/date-time/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return diff; });
var now = function now() {
  return moment();
};

var parseDate = function parseDate(date) {
  return moment(date);
};

var diff = function diff(date1, date2) {
  return moment(date2).preciseDiff(moment(date1));
};

/***/ }),

/***/ "./resources/assets/js/mixins/helpers/environment/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return local; });
var local = function local() {
  return Laravel.env === 'local';
};

/***/ }),

/***/ "./resources/assets/js/mixins/helpers/form/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Form__ = __webpack_require__("./resources/assets/js/classes/Form.js");
// NOTE - this will not work with PUT!!!
// https://github.com/symfony/symfony/issues/9226
var getFormData = function getFormData(form) {
  if (!$(form).is("form")) {
    form = $(form).find("form")[0];
  }
  return new FormData(form);
};



var createForm = function createForm(data, reset) {
  return new __WEBPACK_IMPORTED_MODULE_0__classes_Form__["a" /* default */](data, reset);
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/mixins/helpers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__("./resources/assets/js/mixins/helpers/form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__("./resources/assets/js/mixins/helpers/routes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_time__ = __webpack_require__("./resources/assets/js/mixins/helpers/date-time/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__("./resources/assets/js/mixins/helpers/environment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__permissions__ = __webpack_require__("./resources/assets/js/mixins/helpers/permissions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notifications__ = __webpack_require__("./resources/assets/js/mixins/helpers/notifications/index.js");












Vue.mixin({
  methods: {
    now: __WEBPACK_IMPORTED_MODULE_2__date_time__["b" /* now */],
    back: __WEBPACK_IMPORTED_MODULE_1__routes__["b" /* back */],
    diff: __WEBPACK_IMPORTED_MODULE_2__date_time__["a" /* diff */],
    action: __WEBPACK_IMPORTED_MODULE_1__routes__["a" /* action */],
    showError: __WEBPACK_IMPORTED_MODULE_5__notifications__["b" /* showError */],
    parseDate: __WEBPACK_IMPORTED_MODULE_2__date_time__["c" /* parseDate */],
    createForm: __WEBPACK_IMPORTED_MODULE_0__form__["a" /* createForm */],
    showSuccess: __WEBPACK_IMPORTED_MODULE_5__notifications__["c" /* showSuccess */],
    getFormData: __WEBPACK_IMPORTED_MODULE_0__form__["b" /* getFormData */],
    handleApiError: __WEBPACK_IMPORTED_MODULE_5__notifications__["a" /* handleApiError */]
  },
  computed: {
    local: __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* local */],
    isAdmin: __WEBPACK_IMPORTED_MODULE_4__permissions__["a" /* isAdmin */]
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./resources/assets/js/mixins/helpers/notifications/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return showSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleApiError; });
var showError = function showError(message, title, timeout) {
  if (timeout === undefined) {
    timeout = 5000;
  }

  this.$store.dispatch("notifications/add", {
    title: !_.isEmpty(title) ? title : "Error!!",
    text: message,
    class: "error",
    timeout: timeout
  });
};
var showSuccess = function showSuccess(message, title, timeout) {
  if (timeout === undefined) {
    timeout = 5000;
  }

  this.$store.dispatch("notifications/add", {
    title: !_.isEmpty(title) ? title : "Success!!",
    text: message,
    class: "success",
    timeout: timeout
  });
};

var handleApiError = function handleApiError(response) {
  var message = response;

  if (_.isObject(response)) {
    if (_.isSet(response.errors)) {
      message = response.errors;
    } else if (_.isObject(response.data)) {
      message = "";
      _.each(response.data.errors, function (error) {
        message += error + "<br>";
      });
    } else {
      message = response.data;
    }
  }

  if (_.isString(message)) {
    this.showError(message);
  } else {
    console.warn("UNABLE TO PARSE ERROR");
  }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/lodash/lodash.js")))

/***/ }),

/***/ "./resources/assets/js/mixins/helpers/permissions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAdmin; });
var isAdmin = function isAdmin() {
  // return this.$store.state.user.user.role === "admin";
};

/***/ }),

/***/ "./resources/assets/js/mixins/helpers/routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return action; });
var back = function back() {
  window.history.back();
};

var action = function action(_action, parameters) {
  // return laroute.action(action, parameters);
};

/***/ }),

/***/ "./resources/assets/js/mixins/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/mixins/helpers/index.js");

/***/ }),

/***/ "./resources/assets/js/router/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routes_js__ = __webpack_require__("./resources/assets/js/app/routes.js");



window.VueRouter = __webpack_require__("./node_modules/vue-router/dist/vue-router.common.js");

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(VueRouter);

var router = new VueRouter({
  mode: "history",
  routes: __WEBPACK_IMPORTED_MODULE_1__app_routes_js__["a" /* default */]
});

router.beforeResolve(function (to, from, next) {
  // if (!store.state.user.user.is_subscribed) {
  //   if (to.name !== "subscription") {
  //     next({
  //       name: "subscription"
  //     });
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();
  // }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),

/***/ "./resources/assets/js/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Form__ = __webpack_require__("./resources/assets/js/classes/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Errors__ = __webpack_require__("./resources/assets/js/classes/Errors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_helpers_routes__ = __webpack_require__("./resources/assets/js/mixins/helpers/routes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_Request__ = __webpack_require__("./resources/assets/js/classes/Request.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules__ = __webpack_require__("./resources/assets/js/store/modules/index.js");








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.Form = __WEBPACK_IMPORTED_MODULE_2__classes_Form__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.Errors = __WEBPACK_IMPORTED_MODULE_3__classes_Errors__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.Request = __WEBPACK_IMPORTED_MODULE_5__classes_Request__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.action = __WEBPACK_IMPORTED_MODULE_4__mixins_helpers_routes__["a" /* action */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.request = function (data) {
  return new __WEBPACK_IMPORTED_MODULE_5__classes_Request__["a" /* default */](data);
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
  modules: __WEBPACK_IMPORTED_MODULE_6__modules__["a" /* default */]
}));

/***/ }),

/***/ "./resources/assets/js/store/modules/auth/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
var logout = function logout(context, data) {
  return Vue.request(data).post(Vue.action("AuthLoginController@logout")).then(function () {
    window.location = "/";
  });
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./resources/assets/js/store/modules/auth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("./resources/assets/js/store/modules/auth/state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./resources/assets/js/store/modules/auth/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__("./resources/assets/js/store/modules/auth/mutations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mutations__);




/* harmony default export */ __webpack_exports__["a"] = ({
  state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_1__actions__,
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
  namespaced: true
});

/***/ }),

/***/ "./resources/assets/js/store/modules/auth/mutations.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/assets/js/store/modules/auth/state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ "./resources/assets/js/store/modules/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__("./resources/assets/js/store/modules/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__system__ = __webpack_require__("./resources/assets/js/store/modules/system/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__("./resources/assets/js/store/modules/notifications/index.js");




/* harmony default export */ __webpack_exports__["a"] = ({
  auth: __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* default */],
  system: __WEBPACK_IMPORTED_MODULE_1__system__["a" /* default */],
  notifications: __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* default */]
});

/***/ }),

/***/ "./resources/assets/js/store/modules/notifications/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var add = function add(_ref, notification) {
  var commit = _ref.commit;

  commit("add", notification);
};

var remove = function remove(_ref2, notification) {
  var commit = _ref2.commit;

  commit("remove", notification);
};

/***/ }),

/***/ "./resources/assets/js/store/modules/notifications/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("./resources/assets/js/store/modules/notifications/state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./resources/assets/js/store/modules/notifications/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__("./resources/assets/js/store/modules/notifications/mutations.js");




/* harmony default export */ __webpack_exports__["a"] = ({
  state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_1__actions__,
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
  namespaced: true
});

/***/ }),

/***/ "./resources/assets/js/store/modules/notifications/mutations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
var add = function add(state, notification) {
  state.notifications.push(notification);
};

var remove = function remove(state, notification) {
  state.notifications = _.without(state.notifications, notification);
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/lodash/lodash.js")))

/***/ }),

/***/ "./resources/assets/js/store/modules/notifications/state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  notifications: []
});

/***/ }),

/***/ "./resources/assets/js/store/modules/system/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return setVersion; });
var setVersion = function setVersion(_ref, data) {
  var commit = _ref.commit;

  commit("setVersion", data.version);
};

/***/ }),

/***/ "./resources/assets/js/store/modules/system/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("./resources/assets/js/store/modules/system/state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./resources/assets/js/store/modules/system/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__("./resources/assets/js/store/modules/system/mutations.js");




/* harmony default export */ __webpack_exports__["a"] = ({
  state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_1__actions__,
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
  namespaced: true
});

/***/ }),

/***/ "./resources/assets/js/store/modules/system/mutations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVersion", function() { return setVersion; });
var setVersion = function setVersion(state, version) {
  state.version = version;
};

/***/ }),

/***/ "./resources/assets/js/store/modules/system/state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  version: Laravel.version
});

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
module.exports = __webpack_require__("./resources/assets/sass/app.scss");


/***/ })

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vQ2xpcGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vTmF2aWdhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL05vdGlmaWNhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL05vdGlmaWNhdGlvbnMudnVlIiwid2VicGFjazovLy9UaW1lQWdvLnZ1ZSIsIndlYnBhY2s6Ly8vVG9vbFRpcC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZT8wZDNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub29sVGlwLnZ1ZT9hZmFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlP2E1MTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWU/ODc2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWU/Y2I0NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVGltZUFnby52dWU/NzdmYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9EYXNoYm9hcmQudnVlP2YxNTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VOb3RGb3VuZC52dWU/NGMyZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuY29tbW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL0Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm91dGVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY2xhc3Nlcy9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnZU5vdEZvdW5kLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVGltZUFnby52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhcm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9kYXRlLXRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9lbnZpcm9ubWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL25vdGlmaWNhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9wZXJtaXNzaW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL2F1dGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL2F1dGgvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL25vdGlmaWNhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL25vdGlmaWNhdGlvbnMvbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc3lzdGVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJzdG9yZSIsImFwcCIsIlZ1ZSIsInJvdXRlciIsIiRtb3VudCIsInBhdGgiLCJuYW1lIiwiY29tcG9uZW50IiwibGFyb3V0ZSIsIm1vbWVudCIsInR6Iiwic2V0RGVmYXVsdCIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJOUHJvZ3Jlc3MiLCJjb25maWd1cmUiLCJlYXNpbmciLCJzcGVlZCIsInNob3dTcGlubmVyIiwic3RhcnQiLCJpbmMiLCJjb25maWciLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRvbmUiLCJQdXNoZXIiLCJsb2ciLCJFY2hvIiwiYnJvYWRjYXN0ZXIiLCJrZXkiLCJwdXNoZXJLZXkiLCJFcnJvcnMiLCJlcnJvcnMiLCJmaWVsZCIsImhhc093blByb3BlcnR5IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIkZvcm0iLCJvcmlnaW5hbERhdGEiLCJjbGVhciIsImVtcHR5RGF0YSIsImRhdGEiLCJyZXNldERhdGEiLCJyZXNldCIsIl8iLCJyZWR1Y2UiLCJyZXN1bHQiLCJ2YWx1ZSIsImlzRXF1YWwiLCJjb25jYXQiLCJSZXF1ZXN0IiwiaXNPYmplY3QiLCJGb3JtRGF0YSIsImZvcm1EYXRhIiwiYXNzaWduIiwidXJsIiwibXV0YXRpb25zIiwic3VibWl0IiwiZGF0YVF1ZXJ5U3RyaW5nIiwicmVxdWVzdFR5cGUiLCJyZXNvbHZlIiwidGhlbiIsIm9uU3VjY2VzcyIsImlzU3RyaW5nIiwiZWFjaCIsIiRzdG9yZSIsImNvbW1pdCIsIm11dGF0aW9uIiwicmVxdWVzdERhdGEiLCJzZXRPcmlnaW5hbERhdGEiLCJjYXRjaCIsImhhbmRsZUFwaUVycm9yIiwib25GYWlsIiwiY29uc29sZSIsInJlY29yZCIsInN0ciIsImRhdHVtIiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyb3V0ZXMiLCJhYnNvbHV0ZSIsInJvb3RVcmwiLCJwcmVmaXgiLCJyb3V0ZSIsInBhcmFtZXRlcnMiLCJnZXRCeU5hbWUiLCJ1bmRlZmluZWQiLCJ0b1JvdXRlIiwidXJpIiwiZ2V0Q29ycmVjdFVybCIsInJlcGxhY2VOYW1lZFBhcmFtZXRlcnMiLCJxcyIsImdldFJvdXRlUXVlcnlTdHJpbmciLCJpc090aGVySG9zdCIsImhvc3QiLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwicmVwbGFjZSIsIm1hdGNoIiwiZ2V0QnlBY3Rpb24iLCJhY3Rpb24iLCJnZXRMaW5rQXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJhdHRycyIsImdldEh0bWxMaW5rIiwidGl0bGUiLCJsaW5rX3RvIiwibGlua190b19yb3V0ZSIsImxpbmtfdG9fYWN0aW9uIiwiY2FsbCIsImRlZmluZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJub3ciLCJwYXJzZURhdGUiLCJkYXRlIiwiZGlmZiIsImRhdGUxIiwiZGF0ZTIiLCJwcmVjaXNlRGlmZiIsImxvY2FsIiwiZW52IiwiZ2V0Rm9ybURhdGEiLCJmb3JtIiwiJCIsImlzIiwiZmluZCIsImNyZWF0ZUZvcm0iLCJtaXhpbiIsIm1ldGhvZHMiLCJiYWNrIiwic2hvd0Vycm9yIiwic2hvd1N1Y2Nlc3MiLCJjb21wdXRlZCIsImlzQWRtaW4iLCJtZXNzYWdlIiwidGltZW91dCIsImRpc3BhdGNoIiwiaXNFbXB0eSIsInRleHQiLCJjbGFzcyIsImlzU2V0Iiwid2FybiIsImhpc3RvcnkiLCJWdWVSb3V0ZXIiLCJtb2RlIiwiYmVmb3JlUmVzb2x2ZSIsInRvIiwiZnJvbSIsIm5leHQiLCJWdWV4IiwiU3RvcmUiLCJtb2R1bGVzIiwibG9nb3V0IiwiY29udGV4dCIsInBvc3QiLCJzdGF0ZSIsImFjdGlvbnMiLCJuYW1lc3BhY2VkIiwiYXV0aCIsInN5c3RlbSIsIm5vdGlmaWNhdGlvbnMiLCJhZGQiLCJub3RpZmljYXRpb24iLCJyZW1vdmUiLCJ3aXRob3V0Iiwic2V0VmVyc2lvbiIsInZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT0EsK0RBRUEsSTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBOztjQUlBO0FBRkE7Z0NBR0E7O3VCQUdBO0FBRkE7QUFHQTtBQVJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1dBOztBQUVBOztBQUlBO0FBRkE7MEJBR0E7O3FDQUdBO0FBRkE7QUFHQTs7O29DQUVBOzRDQUNBO0FBRUE7QUFKQTtBQVRBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO1lBRUE7MEJBQ0E7O21CQUdBO0FBRkE7QUFHQTtnQ0FDQTtnR0FDQTtxQkFDQTtnREFDQTtnQ0FDQTs0Q0FDQTtBQUNBO0FBQ0E7Ozs0Q0FFQTs4QkFDQTt5REFDQTtBQUVBO0FBTEE7QUFmQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNE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QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxpQ0FBaUMsU0FBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFBRTtBQUNSLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFdBQVcsRUFBRTtBQUMxRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFNBQVMsRUFBRTtBQUM3RDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFNBQVMsRUFBRTtBQUMxRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNCQUFzQixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsaUNBQWlDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNLEVBQUU7QUFDdEQsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMENBQTBDLEVBQUU7QUFDbEY7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsaUJBQWlCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDMThFQTtBQUNBOztBQUVBLG1CQUFBQSxDQUFRLG9DQUFSO0FBQ0Es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U0FBVEEsTUFBUyxDQUFDUixLQUFELEVBQVFPLFlBQVIsRUFBeUI7QUFDN0NQLFFBQU1LLGFBQU4sR0FBc0J0SCxFQUFFMEgsT0FBRixDQUFVVCxNQUFNSyxhQUFoQixFQUErQkUsWUFBL0IsQ0FBdEI7QUFDRCxDQUZNLEM7Ozs7Ozs7OztBQ0pQLHlEQUFlO0FBQ2JGLGlCQUFlO0FBREYsQ0FBZixFOzs7Ozs7Ozs7O0FDQU8sSUFBTUssYUFBYSxTQUFiQSxVQUFhLE9BQWE5SCxJQUFiLEVBQXNCO0FBQUEsTUFBbkJ5QixNQUFtQixRQUFuQkEsTUFBbUI7O0FBQzlDQSxTQUFPLFlBQVAsRUFBcUJ6QixLQUFLK0gsT0FBMUI7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUNBOztBQUVBLHlEQUFlO0FBQ2JYLFNBQUEsdURBRGE7QUFFYkMsV0FBQSxzQ0FGYTtBQUdidEcsYUFBQSx3Q0FIYTtBQUlidUcsY0FBWTtBQUpDLENBQWYsRTs7Ozs7Ozs7OztBQ0pPLElBQU1RLGFBQWEsU0FBYkEsVUFBYSxDQUFDVixLQUFELEVBQVFXLE9BQVIsRUFBb0I7QUFDNUNYLFFBQU1XLE9BQU4sR0FBZ0JBLE9BQWhCO0FBQ0QsQ0FGTSxDOzs7Ozs7OztBQ0FQLHlEQUFlO0FBQ2JBLFdBQVNsSyxRQUFRa0s7QUFESixDQUFmLEU7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgaGVyZSB3ZSBhcmVcbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIERhc2hib2FyZC52dWU/MzhkOWMxYzgiLCI8dGVtcGxhdGU+XG4gICAgPGEgY2xhc3M9XCJidG4gYnRuLXNtYWxsIGNsaXBib2FyZFwiIDpkYXRhLWNsaXBib2FyZC10ZXh0PVwiZGF0YVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tY2xpcGJvYXJkXCI+PC9zcGFuPlxuICAgIDwvYT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGF0YTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICAgICAgbmV3IENsaXBib2FyZCgnLmNsaXBib2FyZCcsIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDbGlwYm9hcmQudnVlPzViMmEzYTIzIiwiPHRlbXBsYXRlPlxuICAgIDxoZWFkZXI+XG4gICAgICAgIDxub3RpZmljYXRpb25zPjwvbm90aWZpY2F0aW9ucz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ28tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgICAgU3BhY2UgUGFkXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c2VjdGlvbiB2LWlmPVwiY3VycmVudF92ZXJzaW9uICE9PSAgdmVyc2lvblwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBIZWxsbywgV2UndmUgZ290IGEgbmV3IHZlcnNpb24gb2YgU3BhY2VQYWQgcmVhZHkgZm9yIHlvdS4gPGEgaHJlZj1cIlwiPlJlZnJlc2ggbm93PC9hPiB0byBtYWtlIGl0IHlvdXJzLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2hlYWRlcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbiAgICBpbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuL05vdGlmaWNhdGlvbnMudnVlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBOb3RpZmljYXRpb25zXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50X3ZlcnNpb246IExhcmF2ZWwudmVyc2lvblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZCA6IHtcbiAgICAgICAgICAgIHZlcnNpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5zeXN0ZW0udmVyc2lvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE5hdmlnYXRpb24udnVlPzE2NjBhNDQ0IiwiPHRlbXBsYXRlPlxuICAgIDx0cmFuc2l0aW9uIG5hbWU9XCJmYWRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25cIiA6Y2xhc3M9XCJub3RpZmljYXRpb24uY2xhc3NcIj5cbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiY2xvc2Uobm90aWZpY2F0aW9uKVwiIGNsYXNzPVwibm90aWZpY2F0aW9uLWNsb3NlXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cIm5vdGlmaWNhdGlvbi1oZWFkaW5nXCIgdi1pZj1cIm5vdGlmaWNhdGlvbi50aXRsZVwiPnt7bm90aWZpY2F0aW9uLnRpdGxlfX08L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbi10ZXh0XCIgdi1odG1sPVwibm90aWZpY2F0aW9uLnRleHRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczogWydub3RpZmljYXRpb24nXSxcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpbWVyOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQgKCkge1xuICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IHRoaXMubm90aWZpY2F0aW9uLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykgPyB0aGlzLm5vdGlmaWNhdGlvbi50aW1lb3V0IDogdHJ1ZVxuICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UodGhpcy5ub3RpZmljYXRpb24pXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzLm5vdGlmaWNhdGlvbi50aW1lb3V0KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdub3RpZmljYXRpb25zL3JlbW92ZScsIG5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE5vdGlmaWNhdGlvbi52dWU/ZmQwMWIxNDgiLCI8dGVtcGxhdGUgaWQ9XCJub3RpZmljYXRpb25zXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgPG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgdi1mb3I9XCIobm90aWZpY2F0aW9uLCBpbmRleCkgaW4gbm90aWZpY2F0aW9uc1wiXG4gICAgICAgICAgICA6bm90aWZpY2F0aW9uPVwibm90aWZpY2F0aW9uXCJcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgID5cbiAgICAgICAgPC9ub3RpZmljYXRpb24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9Ob3RpZmljYXRpb24udnVlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBOb3RpZmljYXRpb25cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbnMgKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5ub3RpZmljYXRpb25zLm5vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcmVtb3ZlTm90aWZpY2F0aW9uOiBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ25vdGlmaWNhdGlvbnMvcmVtb3ZlJywgbm90aWZpY2F0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTm90aWZpY2F0aW9ucy52dWU/ZjdjNTJmNjYiLCI8dGVtcGxhdGU+XG4gICAgPHNwYW4+IHt7IHRleHQgfX0gPC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0aW1lOiB7fVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFRpbWUoKVxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgIH0sIDYwMDAwKVxuICAgICAgICB9LFxuICAgICAgICBkYXRhICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWU6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRUaW1lKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdXBkYXRlICgpIHtcbiAgICAgICAgICAgICAgICBWdWUuc2V0KHRoaXMuY3VycmVudFRpbWUsIHRoaXMuY3VycmVudFRpbWUuYWRkKC0xLCAnbWludXRlJykpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0Q3VycmVudFRpbWUgKCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLnRpbWVcblxuICAgICAgICAgICAgICAgIGlmKCFtb21lbnQuaXNNb21lbnQodGltZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZSA9IHRoaXMucGFyc2VEYXRlKHRpbWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRpbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHRleHQgKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAuZnJvbU5vdygpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgndXRlJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnYWdvJywgJycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVGltZUFnby52dWU/MzYxMGFkMjkiLCI8dGVtcGxhdGU+XG4gICAgPHNwYW5cbiAgICAgICAgOmNsYXNzPVwiW1xuICAgICAgICAnaGludC0tJyt0eXBlLFxuICAgICAgICAnaGludC0tJytzaXplLFxuICAgICAgICAnaGludC0tJytwbGFjZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICAgICdoaW50LS1yb3VuZGVkJzogdGhpcy5yb3VuZGVkLFxuICAgICAgICAgICAgJ2hpbnQtLWFsd2F5cyc6IHRoaXMuYWx3YXlzLFxuICAgICAgICAgICAgJ2hpbnQtLW5vLWFuaW1hdGUnOiB0aGlzLm5vQW5pbWF0ZVxuICAgICAgICB9XVwiXG4gICAgICAgIDphcmlhLWxhYmVsPVwibWVzc2FnZVwiXG4gICAgPlxuICAgICAgICB7eyB0eXBlIH19XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHNpemU6IFN0cmluZyxcbiAgICAgICAgICAgIGFsd2F5czogQm9vbGVhbixcbiAgICAgICAgICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgICAgICAgICBub0FuaW1hdGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhY2VtZW50OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICd0b3AnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUb29sVGlwLnZ1ZT8yMGRjODYxNyIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyB0aGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGVcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi9cbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIHZhciBmdW5jdGlvbmFsID0gb3B0aW9ucy5mdW5jdGlvbmFsXG4gICAgdmFyIGV4aXN0aW5nID0gZnVuY3Rpb25hbFxuICAgICAgPyBvcHRpb25zLnJlbmRlclxuICAgICAgOiBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgIGlmICghZnVuY3Rpb25hbCkge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiaGVhZGVyXCIsXG4gICAgW1xuICAgICAgX2MoXCJub3RpZmljYXRpb25zXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxvZ28tY29udGFpbmVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBTcGFjZSBQYWRcXG4gICAgICAgIFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmN1cnJlbnRfdmVyc2lvbiAhPT0gX3ZtLnZlcnNpb25cbiAgICAgICAgPyBfYyhcInNlY3Rpb25cIiwgW192bS5fbSgwKV0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlxcbiAgICAgICAgICAgIEhlbGxvLCBXZSd2ZSBnb3QgYSBuZXcgdmVyc2lvbiBvZiBTcGFjZVBhZCByZWFkeSBmb3IgeW91LiBcIlxuICAgICAgKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbX3ZtLl92KFwiUmVmcmVzaCBub3dcIildKSxcbiAgICAgIF92bS5fdihcIiB0byBtYWtlIGl0IHlvdXJzLlxcbiAgICAgICAgXCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTExOGZiNzg4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xMThmYjc4OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xMThmYjc4OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic3BhblwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBbXG4gICAgICAgIFwiaGludC0tXCIgKyBfdm0udHlwZSxcbiAgICAgICAgXCJoaW50LS1cIiArIF92bS5zaXplLFxuICAgICAgICBcImhpbnQtLVwiICsgX3ZtLnBsYWNlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgIFwiaGludC0tcm91bmRlZFwiOiB0aGlzLnJvdW5kZWQsXG4gICAgICAgICAgXCJoaW50LS1hbHdheXNcIjogdGhpcy5hbHdheXMsXG4gICAgICAgICAgXCJoaW50LS1uby1hbmltYXRlXCI6IHRoaXMubm9BbmltYXRlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogX3ZtLm1lc3NhZ2UgfVxuICAgIH0sXG4gICAgW192bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0udHlwZSkgKyBcIlxcbiAgICBcIiksIF92bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTI2MGM5OWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTEyNjBjOTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTEyNjBjOTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb25cIiwgY2xhc3M6IF92bS5ub3RpZmljYXRpb24uY2xhc3MgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24tY2xvc2VcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmNsb3NlKF92bS5ub3RpZmljYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubm90aWZpY2F0aW9uLnRpdGxlXG4gICAgICAgID8gX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbi1oZWFkaW5nXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubm90aWZpY2F0aW9uLnRpdGxlKSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLXRleHRcIixcbiAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLm5vdGlmaWNhdGlvbi50ZXh0KSB9XG4gICAgICB9KVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00NDc1MmJkZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDQ3NTJiZGZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00NDc1MmJkZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJhXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbWFsbCBjbGlwYm9hcmRcIixcbiAgICAgIGF0dHJzOiB7IFwiZGF0YS1jbGlwYm9hcmQtdGV4dFwiOiBfdm0uZGF0YSB9XG4gICAgfSxcbiAgICBbX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1jbGlwYm9hcmRcIiB9KV1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDdjOWE0ZDJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ3YzlhNGQyXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDdjOWE0ZDJcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2xpcGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb25zXCIgfSxcbiAgICBfdm0uX2woX3ZtLm5vdGlmaWNhdGlvbnMsIGZ1bmN0aW9uKG5vdGlmaWNhdGlvbiwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBfYyhcIm5vdGlmaWNhdGlvblwiLCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGF0dHJzOiB7IG5vdGlmaWNhdGlvbjogbm90aWZpY2F0aW9uIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGRkYmYxMjRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRkZGJmMTI0XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTRkZGJmMTI0XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnRleHQpICsgXCIgXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY4NjhkYzM4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ODY4ZGMzOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9UaW1lQWdvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi02ODY4ZGMzOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9UaW1lQWdvLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJcXG4gICAgaGVyZSB3ZSBhcmVcXG5cIildKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOGMwMWUxN2VcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LThjMDFlMTdlXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvRGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi04YzAxZTE3ZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX3ZtLl92KFwiXFxuICAgIFNvcnJ5IHlvdSBtdXN0IGhhdmUgdGhlIHdyb25nIHVybFxcblwiKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi05MjZiM2NkY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOTI2YjNjZGNcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnZU5vdEZvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi05MjZiM2NkY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICAqIHZ1ZS1yb3V0ZXIgdjIuNy4wXG4gICogKGMpIDIwMTcgRXZhbiBZb3VcbiAgKiBAbGljZW5zZSBNSVRcbiAgKi9cbid1c2Ugc3RyaWN0JztcblxuLyogICovXG5cbmZ1bmN0aW9uIGFzc2VydCAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm4gKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZGl0aW9uKSB7XG4gICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUud2FybigoXCJbdnVlLXJvdXRlcl0gXCIgKyBtZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFcnJvciAoZXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXJyKS5pbmRleE9mKCdFcnJvcicpID4gLTFcbn1cblxudmFyIFZpZXcgPSB7XG4gIG5hbWU6ICdyb3V0ZXItdmlldycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoXywgcmVmKSB7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcbiAgICB2YXIgcGFyZW50ID0gcmVmLnBhcmVudDtcbiAgICB2YXIgZGF0YSA9IHJlZi5kYXRhO1xuXG4gICAgZGF0YS5yb3V0ZXJWaWV3ID0gdHJ1ZTtcblxuICAgIC8vIGRpcmVjdGx5IHVzZSBwYXJlbnQgY29udGV4dCdzIGNyZWF0ZUVsZW1lbnQoKSBmdW5jdGlvblxuICAgIC8vIHNvIHRoYXQgY29tcG9uZW50cyByZW5kZXJlZCBieSByb3V0ZXItdmlldyBjYW4gcmVzb2x2ZSBuYW1lZCBzbG90c1xuICAgIHZhciBoID0gcGFyZW50LiRjcmVhdGVFbGVtZW50O1xuICAgIHZhciBuYW1lID0gcHJvcHMubmFtZTtcbiAgICB2YXIgcm91dGUgPSBwYXJlbnQuJHJvdXRlO1xuICAgIHZhciBjYWNoZSA9IHBhcmVudC5fcm91dGVyVmlld0NhY2hlIHx8IChwYXJlbnQuX3JvdXRlclZpZXdDYWNoZSA9IHt9KTtcblxuICAgIC8vIGRldGVybWluZSBjdXJyZW50IHZpZXcgZGVwdGgsIGFsc28gY2hlY2sgdG8gc2VlIGlmIHRoZSB0cmVlXG4gICAgLy8gaGFzIGJlZW4gdG9nZ2xlZCBpbmFjdGl2ZSBidXQga2VwdC1hbGl2ZS5cbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIHZhciBpbmFjdGl2ZSA9IGZhbHNlO1xuICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50Ll9yb3V0ZXJSb290ICE9PSBwYXJlbnQpIHtcbiAgICAgIGlmIChwYXJlbnQuJHZub2RlICYmIHBhcmVudC4kdm5vZGUuZGF0YS5yb3V0ZXJWaWV3KSB7XG4gICAgICAgIGRlcHRoKys7XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50Ll9pbmFjdGl2ZSkge1xuICAgICAgICBpbmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICB9XG4gICAgZGF0YS5yb3V0ZXJWaWV3RGVwdGggPSBkZXB0aDtcblxuICAgIC8vIHJlbmRlciBwcmV2aW91cyB2aWV3IGlmIHRoZSB0cmVlIGlzIGluYWN0aXZlIGFuZCBrZXB0LWFsaXZlXG4gICAgaWYgKGluYWN0aXZlKSB7XG4gICAgICByZXR1cm4gaChjYWNoZVtuYW1lXSwgZGF0YSwgY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWQgPSByb3V0ZS5tYXRjaGVkW2RlcHRoXTtcbiAgICAvLyByZW5kZXIgZW1wdHkgbm9kZSBpZiBubyBtYXRjaGVkIHJvdXRlXG4gICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICBjYWNoZVtuYW1lXSA9IG51bGw7XG4gICAgICByZXR1cm4gaCgpXG4gICAgfVxuXG4gICAgdmFyIGNvbXBvbmVudCA9IGNhY2hlW25hbWVdID0gbWF0Y2hlZC5jb21wb25lbnRzW25hbWVdO1xuXG4gICAgLy8gYXR0YWNoIGluc3RhbmNlIHJlZ2lzdHJhdGlvbiBob29rXG4gICAgLy8gdGhpcyB3aWxsIGJlIGNhbGxlZCBpbiB0aGUgaW5zdGFuY2UncyBpbmplY3RlZCBsaWZlY3ljbGUgaG9va3NcbiAgICBkYXRhLnJlZ2lzdGVyUm91dGVJbnN0YW5jZSA9IGZ1bmN0aW9uICh2bSwgdmFsKSB7XG4gICAgICAvLyB2YWwgY291bGQgYmUgdW5kZWZpbmVkIGZvciB1bnJlZ2lzdHJhdGlvblxuICAgICAgdmFyIGN1cnJlbnQgPSBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXTtcbiAgICAgIGlmIChcbiAgICAgICAgKHZhbCAmJiBjdXJyZW50ICE9PSB2bSkgfHxcbiAgICAgICAgKCF2YWwgJiYgY3VycmVudCA9PT0gdm0pXG4gICAgICApIHtcbiAgICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWxzbyByZWdpc2V0ZXIgaW5zdGFuY2UgaW4gcHJlcGF0Y2ggaG9va1xuICAgIC8vIGluIGNhc2UgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlIGlzIHJldXNlZCBhY3Jvc3MgZGlmZmVyZW50IHJvdXRlc1xuICAgIDsoZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSkpLnByZXBhdGNoID0gZnVuY3Rpb24gKF8sIHZub2RlKSB7XG4gICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIH07XG5cbiAgICAvLyByZXNvbHZlIHByb3BzXG4gICAgZGF0YS5wcm9wcyA9IHJlc29sdmVQcm9wcyhyb3V0ZSwgbWF0Y2hlZC5wcm9wcyAmJiBtYXRjaGVkLnByb3BzW25hbWVdKTtcblxuICAgIHJldHVybiBoKGNvbXBvbmVudCwgZGF0YSwgY2hpbGRyZW4pXG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlc29sdmVQcm9wcyAocm91dGUsIGNvbmZpZykge1xuICBzd2l0Y2ggKHR5cGVvZiBjb25maWcpIHtcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHJldHVybiBjb25maWdcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICByZXR1cm4gY29uZmlnKHJvdXRlKVxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIGNvbmZpZyA/IHJvdXRlLnBhcmFtcyA6IHVuZGVmaW5lZFxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgIFwicHJvcHMgaW4gXFxcIlwiICsgKHJvdXRlLnBhdGgpICsgXCJcXFwiIGlzIGEgXCIgKyAodHlwZW9mIGNvbmZpZykgKyBcIiwgXCIgK1xuICAgICAgICAgIFwiZXhwZWN0aW5nIGFuIG9iamVjdCwgZnVuY3Rpb24gb3IgYm9vbGVhbi5cIlxuICAgICAgICApO1xuICAgICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgZW5jb2RlUmVzZXJ2ZVJFID0gL1shJygpKl0vZztcbnZhciBlbmNvZGVSZXNlcnZlUmVwbGFjZXIgPSBmdW5jdGlvbiAoYykgeyByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTsgfTtcbnZhciBjb21tYVJFID0gLyUyQy9nO1xuXG4vLyBmaXhlZCBlbmNvZGVVUklDb21wb25lbnQgd2hpY2ggaXMgbW9yZSBjb25mb3JtYW50IHRvIFJGQzM5ODY6XG4vLyAtIGVzY2FwZXMgWyEnKCkqXVxuLy8gLSBwcmVzZXJ2ZSBjb21tYXNcbnZhciBlbmNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAucmVwbGFjZShlbmNvZGVSZXNlcnZlUkUsIGVuY29kZVJlc2VydmVSZXBsYWNlcilcbiAgLnJlcGxhY2UoY29tbWFSRSwgJywnKTsgfTtcblxudmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudDtcblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXJ5IChcbiAgcXVlcnksXG4gIGV4dHJhUXVlcnksXG4gIF9wYXJzZVF1ZXJ5XG4pIHtcbiAgaWYgKCBleHRyYVF1ZXJ5ID09PSB2b2lkIDAgKSBleHRyYVF1ZXJ5ID0ge307XG5cbiAgdmFyIHBhcnNlID0gX3BhcnNlUXVlcnkgfHwgcGFyc2VRdWVyeTtcbiAgdmFyIHBhcnNlZFF1ZXJ5O1xuICB0cnkge1xuICAgIHBhcnNlZFF1ZXJ5ID0gcGFyc2UocXVlcnkgfHwgJycpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKGZhbHNlLCBlLm1lc3NhZ2UpO1xuICAgIHBhcnNlZFF1ZXJ5ID0ge307XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIGV4dHJhUXVlcnkpIHtcbiAgICB2YXIgdmFsID0gZXh0cmFRdWVyeVtrZXldO1xuICAgIHBhcnNlZFF1ZXJ5W2tleV0gPSBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwuc2xpY2UoKSA6IHZhbDtcbiAgfVxuICByZXR1cm4gcGFyc2VkUXVlcnlcbn1cblxuZnVuY3Rpb24gcGFyc2VRdWVyeSAocXVlcnkpIHtcbiAgdmFyIHJlcyA9IHt9O1xuXG4gIHF1ZXJ5ID0gcXVlcnkudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJyk7XG5cbiAgaWYgKCFxdWVyeSkge1xuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIHF1ZXJ5LnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICB2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuICAgIHZhciBrZXkgPSBkZWNvZGUocGFydHMuc2hpZnQoKSk7XG4gICAgdmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDBcbiAgICAgID8gZGVjb2RlKHBhcnRzLmpvaW4oJz0nKSlcbiAgICAgIDogbnVsbDtcblxuICAgIGlmIChyZXNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXNba2V5XSA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzW2tleV0pKSB7XG4gICAgICByZXNba2V5XS5wdXNoKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc1trZXldID0gW3Jlc1trZXldLCB2YWxdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeSAob2JqKSB7XG4gIHZhciByZXMgPSBvYmogPyBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZW5jb2RlKGtleSlcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB2YWwuZm9yRWFjaChmdW5jdGlvbiAodmFsMikge1xuICAgICAgICBpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbDIgPT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGUoa2V5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodmFsMikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQuam9pbignJicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHZhbClcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lmxlbmd0aCA+IDA7IH0pLmpvaW4oJyYnKSA6IG51bGw7XG4gIHJldHVybiByZXMgPyAoXCI/XCIgKyByZXMpIDogJydcbn1cblxuLyogICovXG5cblxudmFyIHRyYWlsaW5nU2xhc2hSRSA9IC9cXC8/JC87XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlIChcbiAgcmVjb3JkLFxuICBsb2NhdGlvbixcbiAgcmVkaXJlY3RlZEZyb20sXG4gIHJvdXRlclxuKSB7XG4gIHZhciBzdHJpbmdpZnlRdWVyeSQkMSA9IHJvdXRlciAmJiByb3V0ZXIub3B0aW9ucy5zdHJpbmdpZnlRdWVyeTtcbiAgdmFyIHJvdXRlID0ge1xuICAgIG5hbWU6IGxvY2F0aW9uLm5hbWUgfHwgKHJlY29yZCAmJiByZWNvcmQubmFtZSksXG4gICAgbWV0YTogKHJlY29yZCAmJiByZWNvcmQubWV0YSkgfHwge30sXG4gICAgcGF0aDogbG9jYXRpb24ucGF0aCB8fCAnLycsXG4gICAgaGFzaDogbG9jYXRpb24uaGFzaCB8fCAnJyxcbiAgICBxdWVyeTogbG9jYXRpb24ucXVlcnkgfHwge30sXG4gICAgcGFyYW1zOiBsb2NhdGlvbi5wYXJhbXMgfHwge30sXG4gICAgZnVsbFBhdGg6IGdldEZ1bGxQYXRoKGxvY2F0aW9uLCBzdHJpbmdpZnlRdWVyeSQkMSksXG4gICAgbWF0Y2hlZDogcmVjb3JkID8gZm9ybWF0TWF0Y2gocmVjb3JkKSA6IFtdXG4gIH07XG4gIGlmIChyZWRpcmVjdGVkRnJvbSkge1xuICAgIHJvdXRlLnJlZGlyZWN0ZWRGcm9tID0gZ2V0RnVsbFBhdGgocmVkaXJlY3RlZEZyb20sIHN0cmluZ2lmeVF1ZXJ5JCQxKTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShyb3V0ZSlcbn1cblxuLy8gdGhlIHN0YXJ0aW5nIHJvdXRlIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5pdGlhbCBzdGF0ZVxudmFyIFNUQVJUID0gY3JlYXRlUm91dGUobnVsbCwge1xuICBwYXRoOiAnLydcbn0pO1xuXG5mdW5jdGlvbiBmb3JtYXRNYXRjaCAocmVjb3JkKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgd2hpbGUgKHJlY29yZCkge1xuICAgIHJlcy51bnNoaWZ0KHJlY29yZCk7XG4gICAgcmVjb3JkID0gcmVjb3JkLnBhcmVudDtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxQYXRoIChcbiAgcmVmLFxuICBfc3RyaW5naWZ5UXVlcnlcbikge1xuICB2YXIgcGF0aCA9IHJlZi5wYXRoO1xuICB2YXIgcXVlcnkgPSByZWYucXVlcnk7IGlmICggcXVlcnkgPT09IHZvaWQgMCApIHF1ZXJ5ID0ge307XG4gIHZhciBoYXNoID0gcmVmLmhhc2g7IGlmICggaGFzaCA9PT0gdm9pZCAwICkgaGFzaCA9ICcnO1xuXG4gIHZhciBzdHJpbmdpZnkgPSBfc3RyaW5naWZ5UXVlcnkgfHwgc3RyaW5naWZ5UXVlcnk7XG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgc3RyaW5naWZ5KHF1ZXJ5KSArIGhhc2hcbn1cblxuZnVuY3Rpb24gaXNTYW1lUm91dGUgKGEsIGIpIHtcbiAgaWYgKGIgPT09IFNUQVJUKSB7XG4gICAgcmV0dXJuIGEgPT09IGJcbiAgfSBlbHNlIGlmICghYikge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKGEucGF0aCAmJiBiLnBhdGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgPT09IGIucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KVxuICAgIClcbiAgfSBlbHNlIGlmIChhLm5hbWUgJiYgYi5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubmFtZSA9PT0gYi5uYW1lICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KSAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnBhcmFtcywgYi5wYXJhbXMpXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RXF1YWwgKGEsIGIpIHtcbiAgaWYgKCBhID09PSB2b2lkIDAgKSBhID0ge307XG4gIGlmICggYiA9PT0gdm9pZCAwICkgYiA9IHt9O1xuXG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgYVZhbCA9IGFba2V5XTtcbiAgICB2YXIgYlZhbCA9IGJba2V5XTtcbiAgICAvLyBjaGVjayBuZXN0ZWQgZXF1YWxpdHlcbiAgICBpZiAodHlwZW9mIGFWYWwgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiVmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGlzT2JqZWN0RXF1YWwoYVZhbCwgYlZhbClcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhhVmFsKSA9PT0gU3RyaW5nKGJWYWwpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlzSW5jbHVkZWRSb3V0ZSAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIHJldHVybiAoXG4gICAgY3VycmVudC5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnLycpLmluZGV4T2YoXG4gICAgICB0YXJnZXQucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJy8nKVxuICAgICkgPT09IDAgJiZcbiAgICAoIXRhcmdldC5oYXNoIHx8IGN1cnJlbnQuaGFzaCA9PT0gdGFyZ2V0Lmhhc2gpICYmXG4gICAgcXVlcnlJbmNsdWRlcyhjdXJyZW50LnF1ZXJ5LCB0YXJnZXQucXVlcnkpXG4gIClcbn1cblxuZnVuY3Rpb24gcXVlcnlJbmNsdWRlcyAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIShrZXkgaW4gY3VycmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiAgKi9cblxuLy8gd29yayBhcm91bmQgd2VpcmQgZmxvdyBidWdcbnZhciB0b1R5cGVzID0gW1N0cmluZywgT2JqZWN0XTtcbnZhciBldmVudFR5cGVzID0gW1N0cmluZywgQXJyYXldO1xuXG52YXIgTGluayA9IHtcbiAgbmFtZTogJ3JvdXRlci1saW5rJyxcbiAgcHJvcHM6IHtcbiAgICB0bzoge1xuICAgICAgdHlwZTogdG9UeXBlcyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhJ1xuICAgIH0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBleGFjdEFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXZlbnQ6IHtcbiAgICAgIHR5cGU6IGV2ZW50VHlwZXMsXG4gICAgICBkZWZhdWx0OiAnY2xpY2snXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJvdXRlciA9IHRoaXMuJHJvdXRlcjtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuJHJvdXRlO1xuICAgIHZhciByZWYgPSByb3V0ZXIucmVzb2x2ZSh0aGlzLnRvLCBjdXJyZW50LCB0aGlzLmFwcGVuZCk7XG4gICAgdmFyIGxvY2F0aW9uID0gcmVmLmxvY2F0aW9uO1xuICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZTtcbiAgICB2YXIgaHJlZiA9IHJlZi5ocmVmO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7fTtcbiAgICB2YXIgZ2xvYmFsQWN0aXZlQ2xhc3MgPSByb3V0ZXIub3B0aW9ucy5saW5rQWN0aXZlQ2xhc3M7XG4gICAgdmFyIGdsb2JhbEV4YWN0QWN0aXZlQ2xhc3MgPSByb3V0ZXIub3B0aW9ucy5saW5rRXhhY3RBY3RpdmVDbGFzcztcbiAgICAvLyBTdXBwb3J0IGdsb2JhbCBlbXB0eSBhY3RpdmUgY2xhc3NcbiAgICB2YXIgYWN0aXZlQ2xhc3NGYWxsYmFjayA9IGdsb2JhbEFjdGl2ZUNsYXNzID09IG51bGxcbiAgICAgICAgICAgID8gJ3JvdXRlci1saW5rLWFjdGl2ZSdcbiAgICAgICAgICAgIDogZ2xvYmFsQWN0aXZlQ2xhc3M7XG4gICAgdmFyIGV4YWN0QWN0aXZlQ2xhc3NGYWxsYmFjayA9IGdsb2JhbEV4YWN0QWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyAncm91dGVyLWxpbmstZXhhY3QtYWN0aXZlJ1xuICAgICAgICAgICAgOiBnbG9iYWxFeGFjdEFjdGl2ZUNsYXNzO1xuICAgIHZhciBhY3RpdmVDbGFzcyA9IHRoaXMuYWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyBhY3RpdmVDbGFzc0ZhbGxiYWNrXG4gICAgICAgICAgICA6IHRoaXMuYWN0aXZlQ2xhc3M7XG4gICAgdmFyIGV4YWN0QWN0aXZlQ2xhc3MgPSB0aGlzLmV4YWN0QWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyBleGFjdEFjdGl2ZUNsYXNzRmFsbGJhY2tcbiAgICAgICAgICAgIDogdGhpcy5leGFjdEFjdGl2ZUNsYXNzO1xuICAgIHZhciBjb21wYXJlVGFyZ2V0ID0gbG9jYXRpb24ucGF0aFxuICAgICAgPyBjcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbiwgbnVsbCwgcm91dGVyKVxuICAgICAgOiByb3V0ZTtcblxuICAgIGNsYXNzZXNbZXhhY3RBY3RpdmVDbGFzc10gPSBpc1NhbWVSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KTtcbiAgICBjbGFzc2VzW2FjdGl2ZUNsYXNzXSA9IHRoaXMuZXhhY3RcbiAgICAgID8gY2xhc3Nlc1tleGFjdEFjdGl2ZUNsYXNzXVxuICAgICAgOiBpc0luY2x1ZGVkUm91dGUoY3VycmVudCwgY29tcGFyZVRhcmdldCk7XG5cbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZ3VhcmRFdmVudChlKSkge1xuICAgICAgICBpZiAodGhpcyQxLnJlcGxhY2UpIHtcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZShsb2NhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2gobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvbiA9IHsgY2xpY2s6IGd1YXJkRXZlbnQgfTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50KSkge1xuICAgICAgdGhpcy5ldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7IG9uW2VdID0gaGFuZGxlcjsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uW3RoaXMuZXZlbnRdID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnRhZyA9PT0gJ2EnKSB7XG4gICAgICBkYXRhLm9uID0gb247XG4gICAgICBkYXRhLmF0dHJzID0geyBocmVmOiBocmVmIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IDxhPiBjaGlsZCBhbmQgYXBwbHkgbGlzdGVuZXIgYW5kIGhyZWZcbiAgICAgIHZhciBhID0gZmluZEFuY2hvcih0aGlzLiRzbG90cy5kZWZhdWx0KTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIC8vIGluIGNhc2UgdGhlIDxhPiBpcyBhIHN0YXRpYyBub2RlXG4gICAgICAgIGEuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGV4dGVuZCA9IF9WdWUudXRpbC5leHRlbmQ7XG4gICAgICAgIHZhciBhRGF0YSA9IGEuZGF0YSA9IGV4dGVuZCh7fSwgYS5kYXRhKTtcbiAgICAgICAgYURhdGEub24gPSBvbjtcbiAgICAgICAgdmFyIGFBdHRycyA9IGEuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYS5kYXRhLmF0dHJzKTtcbiAgICAgICAgYUF0dHJzLmhyZWYgPSBocmVmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG9lc24ndCBoYXZlIDxhPiBjaGlsZCwgYXBwbHkgbGlzdGVuZXIgdG8gc2VsZlxuICAgICAgICBkYXRhLm9uID0gb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGd1YXJkRXZlbnQgKGUpIHtcbiAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2l0aCBjb250cm9sIGtleXNcbiAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSkgeyByZXR1cm4gfVxuICAvLyBkb24ndCByZWRpcmVjdCB3aGVuIHByZXZlbnREZWZhdWx0IGNhbGxlZFxuICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gIGlmIChlLmJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGUuYnV0dG9uICE9PSAwKSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IGlmIGB0YXJnZXQ9XCJfYmxhbmtcImBcbiAgaWYgKGUuY3VycmVudFRhcmdldCAmJiBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICAgIGlmICgvXFxiX2JsYW5rXFxiL2kudGVzdCh0YXJnZXQpKSB7IHJldHVybiB9XG4gIH1cbiAgLy8gdGhpcyBtYXkgYmUgYSBXZWV4IGV2ZW50IHdoaWNoIGRvZXNuJ3QgaGF2ZSB0aGlzIG1ldGhvZFxuICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaW5kQW5jaG9yIChjaGlsZHJlbikge1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICB2YXIgY2hpbGQ7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICdhJykge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbiAmJiAoY2hpbGQgPSBmaW5kQW5jaG9yKGNoaWxkLmNoaWxkcmVuKSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBfVnVlO1xuXG5mdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSB7IHJldHVybiB9XG4gIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZTtcblxuICBfVnVlID0gVnVlO1xuXG4gIHZhciBpc0RlZiA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2ICE9PSB1bmRlZmluZWQ7IH07XG5cbiAgdmFyIHJlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbiAodm0sIGNhbGxWYWwpIHtcbiAgICB2YXIgaSA9IHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgICBpZiAoaXNEZWYoaSkgJiYgaXNEZWYoaSA9IGkuZGF0YSkgJiYgaXNEZWYoaSA9IGkucmVnaXN0ZXJSb3V0ZUluc3RhbmNlKSkge1xuICAgICAgaSh2bSwgY2FsbFZhbCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5taXhpbih7XG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiBiZWZvcmVDcmVhdGUgKCkge1xuICAgICAgaWYgKGlzRGVmKHRoaXMuJG9wdGlvbnMucm91dGVyKSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXJSb290ID0gdGhpcztcbiAgICAgICAgdGhpcy5fcm91dGVyID0gdGhpcy4kb3B0aW9ucy5yb3V0ZXI7XG4gICAgICAgIHRoaXMuX3JvdXRlci5pbml0KHRoaXMpO1xuICAgICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZSh0aGlzLCAnX3JvdXRlJywgdGhpcy5fcm91dGVyLmhpc3RvcnkuY3VycmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yb3V0ZXJSb290ID0gKHRoaXMuJHBhcmVudCAmJiB0aGlzLiRwYXJlbnQuX3JvdXRlclJvb3QpIHx8IHRoaXM7XG4gICAgICB9XG4gICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIHRoaXMpO1xuICAgIH0sXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiBkZXN0cm95ZWQgKCkge1xuICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlcicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7IHJldHVybiB0aGlzLl9yb3V0ZXJSb290Ll9yb3V0ZXIgfVxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7IHJldHVybiB0aGlzLl9yb3V0ZXJSb290Ll9yb3V0ZSB9XG4gIH0pO1xuXG4gIFZ1ZS5jb21wb25lbnQoJ3JvdXRlci12aWV3JywgVmlldyk7XG4gIFZ1ZS5jb21wb25lbnQoJ3JvdXRlci1saW5rJywgTGluayk7XG5cbiAgdmFyIHN0cmF0cyA9IFZ1ZS5jb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuICAvLyB1c2UgdGhlIHNhbWUgaG9vayBtZXJnaW5nIHN0cmF0ZWd5IGZvciByb3V0ZSBob29rc1xuICBzdHJhdHMuYmVmb3JlUm91dGVFbnRlciA9IHN0cmF0cy5iZWZvcmVSb3V0ZUxlYXZlID0gc3RyYXRzLmJlZm9yZVJvdXRlVXBkYXRlID0gc3RyYXRzLmNyZWF0ZWQ7XG59XG5cbi8qICAqL1xuXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlUGF0aCAoXG4gIHJlbGF0aXZlLFxuICBiYXNlLFxuICBhcHBlbmRcbikge1xuICB2YXIgZmlyc3RDaGFyID0gcmVsYXRpdmUuY2hhckF0KDApO1xuICBpZiAoZmlyc3RDaGFyID09PSAnLycpIHtcbiAgICByZXR1cm4gcmVsYXRpdmVcbiAgfVxuXG4gIGlmIChmaXJzdENoYXIgPT09ICc/JyB8fCBmaXJzdENoYXIgPT09ICcjJykge1xuICAgIHJldHVybiBiYXNlICsgcmVsYXRpdmVcbiAgfVxuXG4gIHZhciBzdGFjayA9IGJhc2Uuc3BsaXQoJy8nKTtcblxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2VnbWVudCBpZjpcbiAgLy8gLSBub3QgYXBwZW5kaW5nXG4gIC8vIC0gYXBwZW5kaW5nIHRvIHRyYWlsaW5nIHNsYXNoIChsYXN0IHNlZ21lbnQgaXMgZW1wdHkpXG4gIGlmICghYXBwZW5kIHx8ICFzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuICAgIHN0YWNrLnBvcCgpO1xuICB9XG5cbiAgLy8gcmVzb2x2ZSByZWxhdGl2ZSBwYXRoXG4gIHZhciBzZWdtZW50cyA9IHJlbGF0aXZlLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJy8nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNbaV07XG4gICAgaWYgKHNlZ21lbnQgPT09ICcuLicpIHtcbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudCAhPT0gJy4nKSB7XG4gICAgICBzdGFjay5wdXNoKHNlZ21lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuc3VyZSBsZWFkaW5nIHNsYXNoXG4gIGlmIChzdGFja1swXSAhPT0gJycpIHtcbiAgICBzdGFjay51bnNoaWZ0KCcnKTtcbiAgfVxuXG4gIHJldHVybiBzdGFjay5qb2luKCcvJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIHZhciBoYXNoID0gJyc7XG4gIHZhciBxdWVyeSA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgaGFzaCA9IHBhdGguc2xpY2UoaGFzaEluZGV4KTtcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgaWYgKHF1ZXJ5SW5kZXggPj0gMCkge1xuICAgIHF1ZXJ5ID0gcGF0aC5zbGljZShxdWVyeUluZGV4ICsgMSk7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgcXVlcnlJbmRleCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGg6IHBhdGgsXG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIGhhc2g6IGhhc2hcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhblBhdGggKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvXFwvL2csICcvJylcbn1cblxudmFyIGluZGV4JDEgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xudmFyIGluZGV4ID0gcGF0aFRvUmVnZXhwO1xudmFyIHBhcnNlXzEgPSBwYXJzZTtcbnZhciBjb21waWxlXzEgPSBjb21waWxlO1xudmFyIHRva2Vuc1RvRnVuY3Rpb25fMSA9IHRva2Vuc1RvRnVuY3Rpb247XG52YXIgdG9rZW5zVG9SZWdFeHBfMSA9IHRva2Vuc1RvUmVnRXhwO1xuXG4vKipcbiAqIFRoZSBtYWluIHBhdGggbWF0Y2hpbmcgcmVnZXhwIHV0aWxpdHkuXG4gKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFBBVEhfUkVHRVhQID0gbmV3IFJlZ0V4cChbXG4gIC8vIE1hdGNoIGVzY2FwZWQgY2hhcmFjdGVycyB0aGF0IHdvdWxkIG90aGVyd2lzZSBhcHBlYXIgaW4gZnV0dXJlIG1hdGNoZXMuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3b24ndCB0cmFuc2Zvcm0uXG4gICcoXFxcXFxcXFwuKScsXG4gIC8vIE1hdGNoIEV4cHJlc3Mtc3R5bGUgcGFyYW1ldGVycyBhbmQgdW4tbmFtZWQgcGFyYW1ldGVycyB3aXRoIGEgcHJlZml4XG4gIC8vIGFuZCBvcHRpb25hbCBzdWZmaXhlcy4gTWF0Y2hlcyBhcHBlYXIgYXM6XG4gIC8vXG4gIC8vIFwiLzp0ZXN0KFxcXFxkKyk/XCIgPT4gW1wiL1wiLCBcInRlc3RcIiwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgXCI/XCIsIHVuZGVmaW5lZF1cbiAgLy8gXCIvcm91dGUoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICAvLyBcIi8qXCIgICAgICAgICAgICA9PiBbXCIvXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIqXCJdXG4gICcoW1xcXFwvLl0pPyg/Oig/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSkoWysqP10pP3woXFxcXCopKSdcbl0uam9pbignfCcpLCAnZycpO1xuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0ciwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gW107XG4gIHZhciBrZXkgPSAwO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgcGF0aCA9ICcnO1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nO1xuICB2YXIgcmVzO1xuXG4gIHdoaWxlICgocmVzID0gUEFUSF9SRUdFWFAuZXhlYyhzdHIpKSAhPSBudWxsKSB7XG4gICAgdmFyIG0gPSByZXNbMF07XG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV07XG4gICAgdmFyIG9mZnNldCA9IHJlcy5pbmRleDtcbiAgICBwYXRoICs9IHN0ci5zbGljZShpbmRleCwgb2Zmc2V0KTtcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoO1xuXG4gICAgLy8gSWdub3JlIGFscmVhZHkgZXNjYXBlZCBzZXF1ZW5jZXMuXG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHBhdGggKz0gZXNjYXBlZFsxXTtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIG5leHQgPSBzdHJbaW5kZXhdO1xuICAgIHZhciBwcmVmaXggPSByZXNbMl07XG4gICAgdmFyIG5hbWUgPSByZXNbM107XG4gICAgdmFyIGNhcHR1cmUgPSByZXNbNF07XG4gICAgdmFyIGdyb3VwID0gcmVzWzVdO1xuICAgIHZhciBtb2RpZmllciA9IHJlc1s2XTtcbiAgICB2YXIgYXN0ZXJpc2sgPSByZXNbN107XG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKTtcbiAgICAgIHBhdGggPSAnJztcbiAgICB9XG5cbiAgICB2YXIgcGFydGlhbCA9IHByZWZpeCAhPSBudWxsICYmIG5leHQgIT0gbnVsbCAmJiBuZXh0ICE9PSBwcmVmaXg7XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJztcbiAgICB2YXIgb3B0aW9uYWwgPSBtb2RpZmllciA9PT0gJz8nIHx8IG1vZGlmaWVyID09PSAnKic7XG4gICAgdmFyIGRlbGltaXRlciA9IHJlc1syXSB8fCBkZWZhdWx0RGVsaW1pdGVyO1xuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cDtcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnJyxcbiAgICAgIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICBwYXJ0aWFsOiBwYXJ0aWFsLFxuICAgICAgYXN0ZXJpc2s6ICEhYXN0ZXJpc2ssXG4gICAgICBwYXR0ZXJuOiBwYXR0ZXJuID8gZXNjYXBlR3JvdXAocGF0dGVybikgOiAoYXN0ZXJpc2sgPyAnLionIDogJ1teJyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJ10rPycpXG4gICAgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhbnkgY2hhcmFjdGVycyBzdGlsbCByZW1haW5pbmcuXG4gIGlmIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBwYXRoICs9IHN0ci5zdWJzdHIoaW5kZXgpO1xuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFmdW5jdGlvbihPYmplY3Q9LCBPYmplY3Q9KX1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAoc3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucykpXG59XG5cbi8qKlxuICogUHJldHRpZXIgZW5jb2Rpbmcgb2YgVVJJIHBhdGggc2VnbWVudHMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvW1xcLz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGFzdGVyaXNrIHBhcmFtZXRlci4gU2ltaWxhciB0byBgcHJldHR5YCwgYnV0IGFsbG93cyBzbGFzaGVzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlQXN0ZXJpc2sgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvWz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbiAodG9rZW5zKSB7XG4gIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICB2YXIgbWF0Y2hlcyA9IG5ldyBBcnJheSh0b2tlbnMubGVuZ3RoKTtcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14oPzonICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnKSQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuICAgIHZhciBwYXRoID0gJyc7XG4gICAgdmFyIGRhdGEgPSBvYmogfHwge307XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuICAgIHZhciBlbmNvZGUgPSBvcHRpb25zLnByZXR0eSA/IGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggKz0gdG9rZW47XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXTtcbiAgICAgIHZhciBzZWdtZW50O1xuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAvLyBQcmVwZW5kIHBhcnRpYWwgc2VnbWVudCBwcmVmaXhlcy5cbiAgICAgICAgICBpZiAodG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlIGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCQxKHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgJ2AnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgYmUgZW1wdHknKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdKTtcblxuICAgICAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeShzZWdtZW50KSArICdgJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzZWdtZW50ID0gdG9rZW4uYXN0ZXJpc2sgPyBlbmNvZGVBc3Rlcmlzayh2YWx1ZSkgOiBlbmNvZGUodmFsdWUpO1xuXG4gICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgIH1cblxuICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiRcXC8oKV0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEF0dGFjaCB0aGUga2V5cyBhcyBhIHByb3BlcnR5IG9mIHRoZSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcmVcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaEtleXMgKHJlLCBrZXlzKSB7XG4gIHJlLmtleXMgPSBrZXlzO1xuICByZXR1cm4gcmVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhwYXRoLCBrZXlzKVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnRzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKTtcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSk7XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocmVnZXhwLCBrZXlzKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb1JlZ0V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gICAgICAgICAgdG9rZW5zXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19IGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdFeHAgKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWluZGV4JDEoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKTtcbiAgICBrZXlzID0gW107XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3Q7XG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2U7XG4gIHZhciByb3V0ZSA9ICcnO1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KTtcbiAgICAgIHZhciBjYXB0dXJlID0gJyg/OicgKyB0b2tlbi5wYXR0ZXJuICsgJyknO1xuXG4gICAgICBrZXlzLnB1c2godG9rZW4pO1xuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgIGlmICghdG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgIGNhcHR1cmUgPSAnKD86JyArIHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSk/JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpPyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknO1xuICAgICAgfVxuXG4gICAgICByb3V0ZSArPSBjYXB0dXJlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nKTtcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXI7XG5cbiAgLy8gSW4gbm9uLXN0cmljdCBtb2RlIHdlIGFsbG93IGEgc2xhc2ggYXQgdGhlIGVuZCBvZiBtYXRjaC4gSWYgdGhlIHBhdGggdG9cbiAgLy8gbWF0Y2ggYWxyZWFkeSBlbmRzIHdpdGggYSBzbGFzaCwgd2UgcmVtb3ZlIGl0IGZvciBjb25zaXN0ZW5jeS4gVGhlIHNsYXNoXG4gIC8vIGlzIHZhbGlkIGF0IHRoZSBlbmQgb2YgYSBwYXRoIG1hdGNoLCBub3QgaW4gdGhlIG1pZGRsZS4gVGhpcyBpcyBpbXBvcnRhbnRcbiAgLy8gaW4gbm9uLWVuZGluZyBtb2RlLCB3aGVyZSBcIi90ZXN0L1wiIHNob3VsZG4ndCBtYXRjaCBcIi90ZXN0Ly9yb3V0ZVwiLlxuICBpZiAoIXN0cmljdCkge1xuICAgIHJvdXRlID0gKGVuZHNXaXRoRGVsaW1pdGVyID8gcm91dGUuc2xpY2UoMCwgLWRlbGltaXRlci5sZW5ndGgpIDogcm91dGUpICsgJyg/OicgKyBkZWxpbWl0ZXIgKyAnKD89JCkpPyc7XG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnO1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSc7XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhuZXcgUmVnRXhwKCdeJyArIHJvdXRlLCBmbGFncyhvcHRpb25zKSksIGtleXMpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoc3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0gICAgICAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpbmRleCQxKGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucyk7XG4gICAga2V5cyA9IFtdO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSlcbiAgfVxuXG4gIGlmIChpbmRleCQxKHBhdGgpKSB7XG4gICAgcmV0dXJuIGFycmF5VG9SZWdleHAoLyoqIEB0eXBlIHshQXJyYXl9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxufVxuXG5pbmRleC5wYXJzZSA9IHBhcnNlXzE7XG5pbmRleC5jb21waWxlID0gY29tcGlsZV8xO1xuaW5kZXgudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb25fMTtcbmluZGV4LnRva2Vuc1RvUmVnRXhwID0gdG9rZW5zVG9SZWdFeHBfMTtcblxuLyogICovXG5cbnZhciByZWdleHBDb21waWxlQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBmaWxsUGFyYW1zIChcbiAgcGF0aCxcbiAgcGFyYW1zLFxuICByb3V0ZU1zZ1xuKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZpbGxlciA9XG4gICAgICByZWdleHBDb21waWxlQ2FjaGVbcGF0aF0gfHxcbiAgICAgIChyZWdleHBDb21waWxlQ2FjaGVbcGF0aF0gPSBpbmRleC5jb21waWxlKHBhdGgpKTtcbiAgICByZXR1cm4gZmlsbGVyKHBhcmFtcyB8fCB7fSwgeyBwcmV0dHk6IHRydWUgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKGZhbHNlLCAoXCJtaXNzaW5nIHBhcmFtIGZvciBcIiArIHJvdXRlTXNnICsgXCI6IFwiICsgKGUubWVzc2FnZSkpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTWFwIChcbiAgcm91dGVzLFxuICBvbGRQYXRoTGlzdCxcbiAgb2xkUGF0aE1hcCxcbiAgb2xkTmFtZU1hcFxuKSB7XG4gIC8vIHRoZSBwYXRoIGxpc3QgaXMgdXNlZCB0byBjb250cm9sIHBhdGggbWF0Y2hpbmcgcHJpb3JpdHlcbiAgdmFyIHBhdGhMaXN0ID0gb2xkUGF0aExpc3QgfHwgW107XG4gIHZhciBwYXRoTWFwID0gb2xkUGF0aE1hcCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbmFtZU1hcCA9IG9sZE5hbWVNYXAgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICByb3V0ZXMuZm9yRWFjaChmdW5jdGlvbiAocm91dGUpIHtcbiAgICBhZGRSb3V0ZVJlY29yZChwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCwgcm91dGUpO1xuICB9KTtcblxuICAvLyBlbnN1cmUgd2lsZGNhcmQgcm91dGVzIGFyZSBhbHdheXMgYXQgdGhlIGVuZFxuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdGhMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChwYXRoTGlzdFtpXSA9PT0gJyonKSB7XG4gICAgICBwYXRoTGlzdC5wdXNoKHBhdGhMaXN0LnNwbGljZShpLCAxKVswXSk7XG4gICAgICBsLS07XG4gICAgICBpLS07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoTGlzdDogcGF0aExpc3QsXG4gICAgcGF0aE1hcDogcGF0aE1hcCxcbiAgICBuYW1lTWFwOiBuYW1lTWFwXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUm91dGVSZWNvcmQgKFxuICBwYXRoTGlzdCxcbiAgcGF0aE1hcCxcbiAgbmFtZU1hcCxcbiAgcm91dGUsXG4gIHBhcmVudCxcbiAgbWF0Y2hBc1xuKSB7XG4gIHZhciBwYXRoID0gcm91dGUucGF0aDtcbiAgdmFyIG5hbWUgPSByb3V0ZS5uYW1lO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChwYXRoICE9IG51bGwsIFwiXFxcInBhdGhcXFwiIGlzIHJlcXVpcmVkIGluIGEgcm91dGUgY29uZmlndXJhdGlvbi5cIik7XG4gICAgYXNzZXJ0KFxuICAgICAgdHlwZW9mIHJvdXRlLmNvbXBvbmVudCAhPT0gJ3N0cmluZycsXG4gICAgICBcInJvdXRlIGNvbmZpZyBcXFwiY29tcG9uZW50XFxcIiBmb3IgcGF0aDogXCIgKyAoU3RyaW5nKHBhdGggfHwgbmFtZSkpICsgXCIgY2Fubm90IGJlIGEgXCIgK1xuICAgICAgXCJzdHJpbmcgaWQuIFVzZSBhbiBhY3R1YWwgY29tcG9uZW50IGluc3RlYWQuXCJcbiAgICApO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRQYXRoID0gbm9ybWFsaXplUGF0aChwYXRoLCBwYXJlbnQpO1xuICB2YXIgcGF0aFRvUmVnZXhwT3B0aW9ucyA9IHJvdXRlLnBhdGhUb1JlZ2V4cE9wdGlvbnMgfHwge307XG5cbiAgaWYgKHR5cGVvZiByb3V0ZS5jYXNlU2Vuc2l0aXZlID09PSAnYm9vbGVhbicpIHtcbiAgICBwYXRoVG9SZWdleHBPcHRpb25zLnNlbnNpdGl2ZSA9IHJvdXRlLmNhc2VTZW5zaXRpdmU7XG4gIH1cblxuICB2YXIgcmVjb3JkID0ge1xuICAgIHBhdGg6IG5vcm1hbGl6ZWRQYXRoLFxuICAgIHJlZ2V4OiBjb21waWxlUm91dGVSZWdleChub3JtYWxpemVkUGF0aCwgcGF0aFRvUmVnZXhwT3B0aW9ucyksXG4gICAgY29tcG9uZW50czogcm91dGUuY29tcG9uZW50cyB8fCB7IGRlZmF1bHQ6IHJvdXRlLmNvbXBvbmVudCB9LFxuICAgIGluc3RhbmNlczoge30sXG4gICAgbmFtZTogbmFtZSxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBtYXRjaEFzOiBtYXRjaEFzLFxuICAgIHJlZGlyZWN0OiByb3V0ZS5yZWRpcmVjdCxcbiAgICBiZWZvcmVFbnRlcjogcm91dGUuYmVmb3JlRW50ZXIsXG4gICAgbWV0YTogcm91dGUubWV0YSB8fCB7fSxcbiAgICBwcm9wczogcm91dGUucHJvcHMgPT0gbnVsbFxuICAgICAgPyB7fVxuICAgICAgOiByb3V0ZS5jb21wb25lbnRzXG4gICAgICAgID8gcm91dGUucHJvcHNcbiAgICAgICAgOiB7IGRlZmF1bHQ6IHJvdXRlLnByb3BzIH1cbiAgfTtcblxuICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICAvLyBXYXJuIGlmIHJvdXRlIGlzIG5hbWVkLCBkb2VzIG5vdCByZWRpcmVjdCBhbmQgaGFzIGEgZGVmYXVsdCBjaGlsZCByb3V0ZS5cbiAgICAvLyBJZiB1c2VycyBuYXZpZ2F0ZSB0byB0aGlzIHJvdXRlIGJ5IG5hbWUsIHRoZSBkZWZhdWx0IGNoaWxkIHdpbGxcbiAgICAvLyBub3QgYmUgcmVuZGVyZWQgKEdIIElzc3VlICM2MjkpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChyb3V0ZS5uYW1lICYmICFyb3V0ZS5yZWRpcmVjdCAmJiByb3V0ZS5jaGlsZHJlbi5zb21lKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gL15cXC8/JC8udGVzdChjaGlsZC5wYXRoKTsgfSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICBcIk5hbWVkIFJvdXRlICdcIiArIChyb3V0ZS5uYW1lKSArIFwiJyBoYXMgYSBkZWZhdWx0IGNoaWxkIHJvdXRlLiBcIiArXG4gICAgICAgICAgXCJXaGVuIG5hdmlnYXRpbmcgdG8gdGhpcyBuYW1lZCByb3V0ZSAoOnRvPVxcXCJ7bmFtZTogJ1wiICsgKHJvdXRlLm5hbWUpICsgXCInXFxcIiksIFwiICtcbiAgICAgICAgICBcInRoZSBkZWZhdWx0IGNoaWxkIHJvdXRlIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBSZW1vdmUgdGhlIG5hbWUgZnJvbSBcIiArXG4gICAgICAgICAgXCJ0aGlzIHJvdXRlIGFuZCB1c2UgdGhlIG5hbWUgb2YgdGhlIGRlZmF1bHQgY2hpbGQgcm91dGUgZm9yIG5hbWVkIFwiICtcbiAgICAgICAgICBcImxpbmtzIGluc3RlYWQuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcm91dGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBjaGlsZE1hdGNoQXMgPSBtYXRjaEFzXG4gICAgICAgID8gY2xlYW5QYXRoKChtYXRjaEFzICsgXCIvXCIgKyAoY2hpbGQucGF0aCkpKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhMaXN0LCBwYXRoTWFwLCBuYW1lTWFwLCBjaGlsZCwgcmVjb3JkLCBjaGlsZE1hdGNoQXMpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJvdXRlLmFsaWFzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgYWxpYXNlcyA9IEFycmF5LmlzQXJyYXkocm91dGUuYWxpYXMpXG4gICAgICA/IHJvdXRlLmFsaWFzXG4gICAgICA6IFtyb3V0ZS5hbGlhc107XG5cbiAgICBhbGlhc2VzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICB2YXIgYWxpYXNSb3V0ZSA9IHtcbiAgICAgICAgcGF0aDogYWxpYXMsXG4gICAgICAgIGNoaWxkcmVuOiByb3V0ZS5jaGlsZHJlblxuICAgICAgfTtcbiAgICAgIGFkZFJvdXRlUmVjb3JkKFxuICAgICAgICBwYXRoTGlzdCxcbiAgICAgICAgcGF0aE1hcCxcbiAgICAgICAgbmFtZU1hcCxcbiAgICAgICAgYWxpYXNSb3V0ZSxcbiAgICAgICAgcGFyZW50LFxuICAgICAgICByZWNvcmQucGF0aCB8fCAnLycgLy8gbWF0Y2hBc1xuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghcGF0aE1hcFtyZWNvcmQucGF0aF0pIHtcbiAgICBwYXRoTGlzdC5wdXNoKHJlY29yZC5wYXRoKTtcbiAgICBwYXRoTWFwW3JlY29yZC5wYXRoXSA9IHJlY29yZDtcbiAgfVxuXG4gIGlmIChuYW1lKSB7XG4gICAgaWYgKCFuYW1lTWFwW25hbWVdKSB7XG4gICAgICBuYW1lTWFwW25hbWVdID0gcmVjb3JkO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhbWF0Y2hBcykge1xuICAgICAgd2FybihcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIFwiRHVwbGljYXRlIG5hbWVkIHJvdXRlcyBkZWZpbml0aW9uOiBcIiArXG4gICAgICAgIFwieyBuYW1lOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLCBwYXRoOiBcXFwiXCIgKyAocmVjb3JkLnBhdGgpICsgXCJcXFwiIH1cIlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGlsZVJvdXRlUmVnZXggKHBhdGgsIHBhdGhUb1JlZ2V4cE9wdGlvbnMpIHtcbiAgdmFyIHJlZ2V4ID0gaW5kZXgocGF0aCwgW10sIHBhdGhUb1JlZ2V4cE9wdGlvbnMpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBrZXlzID0ge307XG4gICAgcmVnZXgua2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHdhcm4oIWtleXNba2V5Lm5hbWVdLCAoXCJEdXBsaWNhdGUgcGFyYW0ga2V5cyBpbiByb3V0ZSB3aXRoIHBhdGg6IFxcXCJcIiArIHBhdGggKyBcIlxcXCJcIikpO1xuICAgICAga2V5c1trZXkubmFtZV0gPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiByZWdleFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXRoIChwYXRoLCBwYXJlbnQpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgaWYgKHBhdGhbMF0gPT09ICcvJykgeyByZXR1cm4gcGF0aCB9XG4gIGlmIChwYXJlbnQgPT0gbnVsbCkgeyByZXR1cm4gcGF0aCB9XG4gIHJldHVybiBjbGVhblBhdGgoKChwYXJlbnQucGF0aCkgKyBcIi9cIiArIHBhdGgpKVxufVxuXG4vKiAgKi9cblxuXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhdGlvbiAoXG4gIHJhdyxcbiAgY3VycmVudCxcbiAgYXBwZW5kLFxuICByb3V0ZXJcbikge1xuICB2YXIgbmV4dCA9IHR5cGVvZiByYXcgPT09ICdzdHJpbmcnID8geyBwYXRoOiByYXcgfSA6IHJhdztcbiAgLy8gbmFtZWQgdGFyZ2V0XG4gIGlmIChuZXh0Lm5hbWUgfHwgbmV4dC5fbm9ybWFsaXplZCkge1xuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICAvLyByZWxhdGl2ZSBwYXJhbXNcbiAgaWYgKCFuZXh0LnBhdGggJiYgbmV4dC5wYXJhbXMgJiYgY3VycmVudCkge1xuICAgIG5leHQgPSBhc3NpZ24oe30sIG5leHQpO1xuICAgIG5leHQuX25vcm1hbGl6ZWQgPSB0cnVlO1xuICAgIHZhciBwYXJhbXMgPSBhc3NpZ24oYXNzaWduKHt9LCBjdXJyZW50LnBhcmFtcyksIG5leHQucGFyYW1zKTtcbiAgICBpZiAoY3VycmVudC5uYW1lKSB7XG4gICAgICBuZXh0Lm5hbWUgPSBjdXJyZW50Lm5hbWU7XG4gICAgICBuZXh0LnBhcmFtcyA9IHBhcmFtcztcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQubWF0Y2hlZC5sZW5ndGgpIHtcbiAgICAgIHZhciByYXdQYXRoID0gY3VycmVudC5tYXRjaGVkW2N1cnJlbnQubWF0Y2hlZC5sZW5ndGggLSAxXS5wYXRoO1xuICAgICAgbmV4dC5wYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInBhdGggXCIgKyAoY3VycmVudC5wYXRoKSkpO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybihmYWxzZSwgXCJyZWxhdGl2ZSBwYXJhbXMgbmF2aWdhdGlvbiByZXF1aXJlcyBhIGN1cnJlbnQgcm91dGUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgdmFyIHBhcnNlZFBhdGggPSBwYXJzZVBhdGgobmV4dC5wYXRoIHx8ICcnKTtcbiAgdmFyIGJhc2VQYXRoID0gKGN1cnJlbnQgJiYgY3VycmVudC5wYXRoKSB8fCAnLyc7XG4gIHZhciBwYXRoID0gcGFyc2VkUGF0aC5wYXRoXG4gICAgPyByZXNvbHZlUGF0aChwYXJzZWRQYXRoLnBhdGgsIGJhc2VQYXRoLCBhcHBlbmQgfHwgbmV4dC5hcHBlbmQpXG4gICAgOiBiYXNlUGF0aDtcblxuICB2YXIgcXVlcnkgPSByZXNvbHZlUXVlcnkoXG4gICAgcGFyc2VkUGF0aC5xdWVyeSxcbiAgICBuZXh0LnF1ZXJ5LFxuICAgIHJvdXRlciAmJiByb3V0ZXIub3B0aW9ucy5wYXJzZVF1ZXJ5XG4gICk7XG5cbiAgdmFyIGhhc2ggPSBuZXh0Lmhhc2ggfHwgcGFyc2VkUGF0aC5oYXNoO1xuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSB7XG4gICAgaGFzaCA9IFwiI1wiICsgaGFzaDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbiAoYSwgYikge1xuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGFba2V5XSA9IGJba2V5XTtcbiAgfVxuICByZXR1cm4gYVxufVxuXG4vKiAgKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVNYXRjaGVyIChcbiAgcm91dGVzLFxuICByb3V0ZXJcbikge1xuICB2YXIgcmVmID0gY3JlYXRlUm91dGVNYXAocm91dGVzKTtcbiAgdmFyIHBhdGhMaXN0ID0gcmVmLnBhdGhMaXN0O1xuICB2YXIgcGF0aE1hcCA9IHJlZi5wYXRoTWFwO1xuICB2YXIgbmFtZU1hcCA9IHJlZi5uYW1lTWFwO1xuXG4gIGZ1bmN0aW9uIGFkZFJvdXRlcyAocm91dGVzKSB7XG4gICAgY3JlYXRlUm91dGVNYXAocm91dGVzLCBwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaCAoXG4gICAgcmF3LFxuICAgIGN1cnJlbnRSb3V0ZSxcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVMb2NhdGlvbihyYXcsIGN1cnJlbnRSb3V0ZSwgZmFsc2UsIHJvdXRlcik7XG4gICAgdmFyIG5hbWUgPSBsb2NhdGlvbi5uYW1lO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHZhciByZWNvcmQgPSBuYW1lTWFwW25hbWVdO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybihyZWNvcmQsIChcIlJvdXRlIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGRvZXMgbm90IGV4aXN0XCIpKTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVjb3JkKSB7IHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pIH1cbiAgICAgIHZhciBwYXJhbU5hbWVzID0gcmVjb3JkLnJlZ2V4LmtleXNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAha2V5Lm9wdGlvbmFsOyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleS5uYW1lOyB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbi5wYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFJvdXRlICYmIHR5cGVvZiBjdXJyZW50Um91dGUucGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudFJvdXRlLnBhcmFtcykge1xuICAgICAgICAgIGlmICghKGtleSBpbiBsb2NhdGlvbi5wYXJhbXMpICYmIHBhcmFtTmFtZXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnBhcmFtc1trZXldID0gY3VycmVudFJvdXRlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhdGggPSBmaWxsUGFyYW1zKHJlY29yZC5wYXRoLCBsb2NhdGlvbi5wYXJhbXMsIChcIm5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCJcIikpO1xuICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aCkge1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0ge307XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXRoID0gcGF0aExpc3RbaV07XG4gICAgICAgIHZhciByZWNvcmQkMSA9IHBhdGhNYXBbcGF0aF07XG4gICAgICAgIGlmIChtYXRjaFJvdXRlKHJlY29yZCQxLnJlZ2V4LCBsb2NhdGlvbi5wYXRoLCBsb2NhdGlvbi5wYXJhbXMpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShyZWNvcmQkMSwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vIG1hdGNoXG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0IChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb25cbiAgKSB7XG4gICAgdmFyIG9yaWdpbmFsUmVkaXJlY3QgPSByZWNvcmQucmVkaXJlY3Q7XG4gICAgdmFyIHJlZGlyZWN0ID0gdHlwZW9mIG9yaWdpbmFsUmVkaXJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcmlnaW5hbFJlZGlyZWN0KGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIG51bGwsIHJvdXRlcikpXG4gICAgICAgIDogb3JpZ2luYWxSZWRpcmVjdDtcblxuICAgIGlmICh0eXBlb2YgcmVkaXJlY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWRpcmVjdCA9IHsgcGF0aDogcmVkaXJlY3QgfTtcbiAgICB9XG5cbiAgICBpZiAoIXJlZGlyZWN0IHx8IHR5cGVvZiByZWRpcmVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG5cbiAgICB2YXIgcmUgPSByZWRpcmVjdDtcbiAgICB2YXIgbmFtZSA9IHJlLm5hbWU7XG4gICAgdmFyIHBhdGggPSByZS5wYXRoO1xuICAgIHZhciBxdWVyeSA9IGxvY2F0aW9uLnF1ZXJ5O1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgcGFyYW1zID0gbG9jYXRpb24ucGFyYW1zO1xuICAgIHF1ZXJ5ID0gcmUuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgPyByZS5xdWVyeSA6IHF1ZXJ5O1xuICAgIGhhc2ggPSByZS5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpID8gcmUuaGFzaCA6IGhhc2g7XG4gICAgcGFyYW1zID0gcmUuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpID8gcmUucGFyYW1zIDogcGFyYW1zO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIC8vIHJlc29sdmVkIG5hbWVkIGRpcmVjdFxuICAgICAgdmFyIHRhcmdldFJlY29yZCA9IG5hbWVNYXBbbmFtZV07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhc3NlcnQodGFyZ2V0UmVjb3JkLCAoXCJyZWRpcmVjdCBmYWlsZWQ6IG5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgbm90IGZvdW5kLlwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgIC8vIDEuIHJlc29sdmUgcmVsYXRpdmUgcmVkaXJlY3RcbiAgICAgIHZhciByYXdQYXRoID0gcmVzb2x2ZVJlY29yZFBhdGgocGF0aCwgcmVjb3JkKTtcbiAgICAgIC8vIDIuIHJlc29sdmUgcGFyYW1zXG4gICAgICB2YXIgcmVzb2x2ZWRQYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInJlZGlyZWN0IHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyByYXdQYXRoICsgXCJcXFwiXCIpKTtcbiAgICAgIC8vIDMuIHJlbWF0Y2ggd2l0aCBleGlzdGluZyBxdWVyeSBhbmQgaGFzaFxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIHBhdGg6IHJlc29sdmVkUGF0aCxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoXG4gICAgICB9LCB1bmRlZmluZWQsIGxvY2F0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKGZhbHNlLCAoXCJpbnZhbGlkIHJlZGlyZWN0IG9wdGlvbjogXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVkaXJlY3QpKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhbGlhcyAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIG1hdGNoQXNcbiAgKSB7XG4gICAgdmFyIGFsaWFzZWRQYXRoID0gZmlsbFBhcmFtcyhtYXRjaEFzLCBsb2NhdGlvbi5wYXJhbXMsIChcImFsaWFzZWQgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIG1hdGNoQXMgKyBcIlxcXCJcIikpO1xuICAgIHZhciBhbGlhc2VkTWF0Y2ggPSBtYXRjaCh7XG4gICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgIHBhdGg6IGFsaWFzZWRQYXRoXG4gICAgfSk7XG4gICAgaWYgKGFsaWFzZWRNYXRjaCkge1xuICAgICAgdmFyIG1hdGNoZWQgPSBhbGlhc2VkTWF0Y2gubWF0Y2hlZDtcbiAgICAgIHZhciBhbGlhc2VkUmVjb3JkID0gbWF0Y2hlZFttYXRjaGVkLmxlbmd0aCAtIDFdO1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0gYWxpYXNlZE1hdGNoLnBhcmFtcztcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUoYWxpYXNlZFJlY29yZCwgbG9jYXRpb24pXG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlUm91dGUgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICBpZiAocmVjb3JkICYmIHJlY29yZC5yZWRpcmVjdCkge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KHJlY29yZCwgcmVkaXJlY3RlZEZyb20gfHwgbG9jYXRpb24pXG4gICAgfVxuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLm1hdGNoQXMpIHtcbiAgICAgIHJldHVybiBhbGlhcyhyZWNvcmQsIGxvY2F0aW9uLCByZWNvcmQubWF0Y2hBcylcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tLCByb3V0ZXIpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hdGNoOiBtYXRjaCxcbiAgICBhZGRSb3V0ZXM6IGFkZFJvdXRlc1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGUgKFxuICByZWdleCxcbiAgcGF0aCxcbiAgcGFyYW1zXG4pIHtcbiAgdmFyIG0gPSBwYXRoLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAoIW0pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAxLCBsZW4gPSBtLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIGtleSA9IHJlZ2V4LmtleXNbaSAtIDFdO1xuICAgIHZhciB2YWwgPSB0eXBlb2YgbVtpXSA9PT0gJ3N0cmluZycgPyBkZWNvZGVVUklDb21wb25lbnQobVtpXSkgOiBtW2ldO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcmFtc1trZXkubmFtZV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVJlY29yZFBhdGggKHBhdGgsIHJlY29yZCkge1xuICByZXR1cm4gcmVzb2x2ZVBhdGgocGF0aCwgcmVjb3JkLnBhcmVudCA/IHJlY29yZC5wYXJlbnQucGF0aCA6ICcvJywgdHJ1ZSlcbn1cblxuLyogICovXG5cblxudmFyIHBvc2l0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBzZXR1cFNjcm9sbCAoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKCk7XG4gICAgaWYgKGUuc3RhdGUgJiYgZS5zdGF0ZS5rZXkpIHtcbiAgICAgIHNldFN0YXRlS2V5KGUuc3RhdGUua2V5KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTY3JvbGwgKFxuICByb3V0ZXIsXG4gIHRvLFxuICBmcm9tLFxuICBpc1BvcFxuKSB7XG4gIGlmICghcm91dGVyLmFwcCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJlaGF2aW9yID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3I7XG4gIGlmICghYmVoYXZpb3IpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiZWhhdmlvciA9PT0gJ2Z1bmN0aW9uJywgXCJzY3JvbGxCZWhhdmlvciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICAvLyB3YWl0IHVudGlsIHJlLXJlbmRlciBmaW5pc2hlcyBiZWZvcmUgc2Nyb2xsaW5nXG4gIHJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIHZhciBzaG91bGRTY3JvbGwgPSBiZWhhdmlvcih0bywgZnJvbSwgaXNQb3AgPyBwb3NpdGlvbiA6IG51bGwpO1xuICAgIGlmICghc2hvdWxkU2Nyb2xsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGlzT2JqZWN0ID0gdHlwZW9mIHNob3VsZFNjcm9sbCA9PT0gJ29iamVjdCc7XG4gICAgaWYgKGlzT2JqZWN0ICYmIHR5cGVvZiBzaG91bGRTY3JvbGwuc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNob3VsZFNjcm9sbC5zZWxlY3Rvcik7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IHNob3VsZFNjcm9sbC5vZmZzZXQgJiYgdHlwZW9mIHNob3VsZFNjcm9sbC5vZmZzZXQgPT09ICdvYmplY3QnID8gc2hvdWxkU2Nyb2xsLm9mZnNldCA6IHt9O1xuICAgICAgICBvZmZzZXQgPSBub3JtYWxpemVPZmZzZXQob2Zmc2V0KTtcbiAgICAgICAgcG9zaXRpb24gPSBnZXRFbGVtZW50UG9zaXRpb24oZWwsIG9mZnNldCk7XG4gICAgICB9IGVsc2UgaWYgKGlzVmFsaWRQb3NpdGlvbihzaG91bGRTY3JvbGwpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbm9ybWFsaXplUG9zaXRpb24oc2hvdWxkU2Nyb2xsKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0ICYmIGlzVmFsaWRQb3NpdGlvbihzaG91bGRTY3JvbGwpKSB7XG4gICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbCk7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2F2ZVNjcm9sbFBvc2l0aW9uICgpIHtcbiAgdmFyIGtleSA9IGdldFN0YXRlS2V5KCk7XG4gIGlmIChrZXkpIHtcbiAgICBwb3NpdGlvblN0b3JlW2tleV0gPSB7XG4gICAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBvc2l0aW9uICgpIHtcbiAgdmFyIGtleSA9IGdldFN0YXRlS2V5KCk7XG4gIGlmIChrZXkpIHtcbiAgICByZXR1cm4gcG9zaXRpb25TdG9yZVtrZXldXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFBvc2l0aW9uIChlbCwgb2Zmc2V0KSB7XG4gIHZhciBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIGRvY1JlY3QgPSBkb2NFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHg6IGVsUmVjdC5sZWZ0IC0gZG9jUmVjdC5sZWZ0IC0gb2Zmc2V0LngsXG4gICAgeTogZWxSZWN0LnRvcCAtIGRvY1JlY3QudG9wIC0gb2Zmc2V0LnlcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4gaXNOdW1iZXIob2JqLngpIHx8IGlzTnVtYmVyKG9iai55KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQb3NpdGlvbiAob2JqKSB7XG4gIHJldHVybiB7XG4gICAgeDogaXNOdW1iZXIob2JqLngpID8gb2JqLnggOiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogaXNOdW1iZXIob2JqLnkpID8gb2JqLnkgOiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPZmZzZXQgKG9iaikge1xuICByZXR1cm4ge1xuICAgIHg6IGlzTnVtYmVyKG9iai54KSA/IG9iai54IDogMCxcbiAgICB5OiBpc051bWJlcihvYmoueSkgPyBvYmoueSA6IDBcbiAgfVxufVxuXG5mdW5jdGlvbiBpc051bWJlciAodikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInXG59XG5cbi8qICAqL1xuXG52YXIgc3VwcG9ydHNQdXNoU3RhdGUgPSBpbkJyb3dzZXIgJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKFxuICAgICh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJlxuICAgIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiZcbiAgICB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiZcbiAgICB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5XG59KSgpO1xuXG4vLyB1c2UgVXNlciBUaW1pbmcgYXBpIChpZiBwcmVzZW50KSBmb3IgbW9yZSBhY2N1cmF0ZSBrZXkgcHJlY2lzaW9uXG52YXIgVGltZSA9IGluQnJvd3NlciAmJiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vd1xuICA/IHdpbmRvdy5wZXJmb3JtYW5jZVxuICA6IERhdGU7XG5cbnZhciBfa2V5ID0gZ2VuS2V5KCk7XG5cbmZ1bmN0aW9uIGdlbktleSAoKSB7XG4gIHJldHVybiBUaW1lLm5vdygpLnRvRml4ZWQoMylcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdGVLZXkgKCkge1xuICByZXR1cm4gX2tleVxufVxuXG5mdW5jdGlvbiBzZXRTdGF0ZUtleSAoa2V5KSB7XG4gIF9rZXkgPSBrZXk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdGF0ZSAodXJsLCByZXBsYWNlKSB7XG4gIHNhdmVTY3JvbGxQb3NpdGlvbigpO1xuICAvLyB0cnkuLi5jYXRjaCB0aGUgcHVzaFN0YXRlIGNhbGwgdG8gZ2V0IGFyb3VuZCBTYWZhcmlcbiAgLy8gRE9NIEV4Y2VwdGlvbiAxOCB3aGVyZSBpdCBsaW1pdHMgdG8gMTAwIHB1c2hTdGF0ZSBjYWxsc1xuICB2YXIgaGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB0cnkge1xuICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGtleTogX2tleSB9LCAnJywgdXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2tleSA9IGdlbktleSgpO1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgd2luZG93LmxvY2F0aW9uW3JlcGxhY2UgPyAncmVwbGFjZScgOiAnYXNzaWduJ10odXJsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlU3RhdGUgKHVybCkge1xuICBwdXNoU3RhdGUodXJsLCB0cnVlKTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJ1blF1ZXVlIChxdWV1ZSwgZm4sIGNiKSB7XG4gIHZhciBzdGVwID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgY2IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHF1ZXVlW2luZGV4XSkge1xuICAgICAgICBmbihxdWV1ZVtpbmRleF0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdGVwKGluZGV4ICsgMSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RlcChpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc3RlcCgwKTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVBc3luY0NvbXBvbmVudHMgKG1hdGNoZWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgbmV4dCkge1xuICAgIHZhciBoYXNBc3luYyA9IGZhbHNlO1xuICAgIHZhciBwZW5kaW5nID0gMDtcbiAgICB2YXIgZXJyb3IgPSBudWxsO1xuXG4gICAgZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgICAgLy8gaWYgaXQncyBhIGZ1bmN0aW9uIGFuZCBkb2Vzbid0IGhhdmUgY2lkIGF0dGFjaGVkLFxuICAgICAgLy8gYXNzdW1lIGl0J3MgYW4gYXN5bmMgY29tcG9uZW50IHJlc29sdmUgZnVuY3Rpb24uXG4gICAgICAvLyB3ZSBhcmUgbm90IHVzaW5nIFZ1ZSdzIGRlZmF1bHQgYXN5bmMgcmVzb2x2aW5nIG1lY2hhbmlzbSBiZWNhdXNlXG4gICAgICAvLyB3ZSB3YW50IHRvIGhhbHQgdGhlIG5hdmlnYXRpb24gdW50aWwgdGhlIGluY29taW5nIGNvbXBvbmVudCBoYXMgYmVlblxuICAgICAgLy8gcmVzb2x2ZWQuXG4gICAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWYuY2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaGFzQXN5bmMgPSB0cnVlO1xuICAgICAgICBwZW5kaW5nKys7XG5cbiAgICAgICAgdmFyIHJlc29sdmUgPSBvbmNlKGZ1bmN0aW9uIChyZXNvbHZlZERlZikge1xuICAgICAgICAgIGlmIChyZXNvbHZlZERlZi5fX2VzTW9kdWxlICYmIHJlc29sdmVkRGVmLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkRGVmID0gcmVzb2x2ZWREZWYuZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc2F2ZSByZXNvbHZlZCBvbiBhc3luYyBmYWN0b3J5IGluIGNhc2UgaXQncyB1c2VkIGVsc2V3aGVyZVxuICAgICAgICAgIGRlZi5yZXNvbHZlZCA9IHR5cGVvZiByZXNvbHZlZERlZiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyByZXNvbHZlZERlZlxuICAgICAgICAgICAgOiBfVnVlLmV4dGVuZChyZXNvbHZlZERlZik7XG4gICAgICAgICAgbWF0Y2guY29tcG9uZW50c1trZXldID0gcmVzb2x2ZWREZWY7XG4gICAgICAgICAgcGVuZGluZy0tO1xuICAgICAgICAgIGlmIChwZW5kaW5nIDw9IDApIHtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICB2YXIgbXNnID0gXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQgXCIgKyBrZXkgKyBcIjogXCIgKyByZWFzb247XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKGZhbHNlLCBtc2cpO1xuICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yID0gaXNFcnJvcihyZWFzb24pXG4gICAgICAgICAgICAgID8gcmVhc29uXG4gICAgICAgICAgICAgIDogbmV3IEVycm9yKG1zZyk7XG4gICAgICAgICAgICBuZXh0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gZGVmKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5ldyBzeW50YXggaW4gVnVlIDIuM1xuICAgICAgICAgICAgdmFyIGNvbXAgPSByZXMuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKGNvbXAgJiYgdHlwZW9mIGNvbXAudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb21wLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaGFzQXN5bmMpIHsgbmV4dCgpOyB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmxhdE1hcENvbXBvbmVudHMgKFxuICBtYXRjaGVkLFxuICBmblxuKSB7XG4gIHJldHVybiBmbGF0dGVuKG1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKFxuICAgICAgbS5jb21wb25lbnRzW2tleV0sXG4gICAgICBtLmluc3RhbmNlc1trZXldLFxuICAgICAgbSwga2V5XG4gICAgKTsgfSlcbiAgfSkpXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4gKGFycikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKVxufVxuXG4vLyBpbiBXZWJwYWNrIDIsIHJlcXVpcmUuZW5zdXJlIG5vdyBhbHNvIHJldHVybnMgYSBQcm9taXNlXG4vLyBzbyB0aGUgcmVzb2x2ZS9yZWplY3QgZnVuY3Rpb25zIG1heSBnZXQgY2FsbGVkIGFuIGV4dHJhIHRpbWVcbi8vIGlmIHRoZSB1c2VyIHVzZXMgYW4gYXJyb3cgZnVuY3Rpb24gc2hvcnRoYW5kIHRoYXQgaGFwcGVucyB0b1xuLy8gcmV0dXJuIHRoYXQgUHJvbWlzZS5cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICBpZiAoY2FsbGVkKSB7IHJldHVybiB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncylcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIEhpc3RvcnkgPSBmdW5jdGlvbiBIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIHRoaXMuYmFzZSA9IG5vcm1hbGl6ZUJhc2UoYmFzZSk7XG4gIC8vIHN0YXJ0IHdpdGggYSByb3V0ZSBvYmplY3QgdGhhdCBzdGFuZHMgZm9yIFwibm93aGVyZVwiXG4gIHRoaXMuY3VycmVudCA9IFNUQVJUO1xuICB0aGlzLnBlbmRpbmcgPSBudWxsO1xuICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gIHRoaXMucmVhZHlDYnMgPSBbXTtcbiAgdGhpcy5yZWFkeUVycm9yQ2JzID0gW107XG4gIHRoaXMuZXJyb3JDYnMgPSBbXTtcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbiAoY2IpIHtcbiAgdGhpcy5jYiA9IGNiO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUub25SZWFkeSA9IGZ1bmN0aW9uIG9uUmVhZHkgKGNiLCBlcnJvckNiKSB7XG4gIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgY2IoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5Q2JzLnB1c2goY2IpO1xuICAgIGlmIChlcnJvckNiKSB7XG4gICAgICB0aGlzLnJlYWR5RXJyb3JDYnMucHVzaChlcnJvckNiKTtcbiAgICB9XG4gIH1cbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiBvbkVycm9yIChlcnJvckNiKSB7XG4gIHRoaXMuZXJyb3JDYnMucHVzaChlcnJvckNiKTtcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLnRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIHRyYW5zaXRpb25UbyAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgcm91dGUgPSB0aGlzLnJvdXRlci5tYXRjaChsb2NhdGlvbiwgdGhpcy5jdXJyZW50KTtcbiAgdGhpcy5jb25maXJtVHJhbnNpdGlvbihyb3V0ZSwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS51cGRhdGVSb3V0ZShyb3V0ZSk7XG4gICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB0aGlzJDEuZW5zdXJlVVJMKCk7XG5cbiAgICAvLyBmaXJlIHJlYWR5IGNicyBvbmNlXG4gICAgaWYgKCF0aGlzJDEucmVhZHkpIHtcbiAgICAgIHRoaXMkMS5yZWFkeSA9IHRydWU7XG4gICAgICB0aGlzJDEucmVhZHlDYnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgY2Iocm91dGUpOyB9KTtcbiAgICB9XG4gIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAob25BYm9ydCkge1xuICAgICAgb25BYm9ydChlcnIpO1xuICAgIH1cbiAgICBpZiAoZXJyICYmICF0aGlzJDEucmVhZHkpIHtcbiAgICAgIHRoaXMkMS5yZWFkeSA9IHRydWU7XG4gICAgICB0aGlzJDEucmVhZHlFcnJvckNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyBjYihlcnIpOyB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUuY29uZmlybVRyYW5zaXRpb24gPSBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvbiAocm91dGUsIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudDtcbiAgdmFyIGFib3J0ID0gZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChpc0Vycm9yKGVycikpIHtcbiAgICAgIGlmICh0aGlzJDEuZXJyb3JDYnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMkMS5lcnJvckNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyBjYihlcnIpOyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oZmFsc2UsICd1bmNhdWdodCBlcnJvciBkdXJpbmcgcm91dGUgbmF2aWdhdGlvbjonKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICBvbkFib3J0ICYmIG9uQWJvcnQoZXJyKTtcbiAgfTtcbiAgaWYgKFxuICAgIGlzU2FtZVJvdXRlKHJvdXRlLCBjdXJyZW50KSAmJlxuICAgIC8vIGluIHRoZSBjYXNlIHRoZSByb3V0ZSBtYXAgaGFzIGJlZW4gZHluYW1pY2FsbHkgYXBwZW5kZWQgdG9cbiAgICByb3V0ZS5tYXRjaGVkLmxlbmd0aCA9PT0gY3VycmVudC5tYXRjaGVkLmxlbmd0aFxuICApIHtcbiAgICB0aGlzLmVuc3VyZVVSTCgpO1xuICAgIHJldHVybiBhYm9ydCgpXG4gIH1cblxuICB2YXIgcmVmID0gcmVzb2x2ZVF1ZXVlKHRoaXMuY3VycmVudC5tYXRjaGVkLCByb3V0ZS5tYXRjaGVkKTtcbiAgICB2YXIgdXBkYXRlZCA9IHJlZi51cGRhdGVkO1xuICAgIHZhciBkZWFjdGl2YXRlZCA9IHJlZi5kZWFjdGl2YXRlZDtcbiAgICB2YXIgYWN0aXZhdGVkID0gcmVmLmFjdGl2YXRlZDtcblxuICB2YXIgcXVldWUgPSBbXS5jb25jYXQoXG4gICAgLy8gaW4tY29tcG9uZW50IGxlYXZlIGd1YXJkc1xuICAgIGV4dHJhY3RMZWF2ZUd1YXJkcyhkZWFjdGl2YXRlZCksXG4gICAgLy8gZ2xvYmFsIGJlZm9yZSBob29rc1xuICAgIHRoaXMucm91dGVyLmJlZm9yZUhvb2tzLFxuICAgIC8vIGluLWNvbXBvbmVudCB1cGRhdGUgaG9va3NcbiAgICBleHRyYWN0VXBkYXRlSG9va3ModXBkYXRlZCksXG4gICAgLy8gaW4tY29uZmlnIGVudGVyIGd1YXJkc1xuICAgIGFjdGl2YXRlZC5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uYmVmb3JlRW50ZXI7IH0pLFxuICAgIC8vIGFzeW5jIGNvbXBvbmVudHNcbiAgICByZXNvbHZlQXN5bmNDb21wb25lbnRzKGFjdGl2YXRlZClcbiAgKTtcblxuICB0aGlzLnBlbmRpbmcgPSByb3V0ZTtcbiAgdmFyIGl0ZXJhdG9yID0gZnVuY3Rpb24gKGhvb2ssIG5leHQpIHtcbiAgICBpZiAodGhpcyQxLnBlbmRpbmcgIT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gYWJvcnQoKVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgaG9vayhyb3V0ZSwgY3VycmVudCwgZnVuY3Rpb24gKHRvKSB7XG4gICAgICAgIGlmICh0byA9PT0gZmFsc2UgfHwgaXNFcnJvcih0bykpIHtcbiAgICAgICAgICAvLyBuZXh0KGZhbHNlKSAtPiBhYm9ydCBuYXZpZ2F0aW9uLCBlbnN1cmUgY3VycmVudCBVUkxcbiAgICAgICAgICB0aGlzJDEuZW5zdXJlVVJMKHRydWUpO1xuICAgICAgICAgIGFib3J0KHRvKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0eXBlb2YgdG8gPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgKHR5cGVvZiB0byA9PT0gJ29iamVjdCcgJiYgKFxuICAgICAgICAgICAgdHlwZW9mIHRvLnBhdGggPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgdG8ubmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICApKVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBuZXh0KCcvJykgb3IgbmV4dCh7IHBhdGg6ICcvJyB9KSAtPiByZWRpcmVjdFxuICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0byA9PT0gJ29iamVjdCcgJiYgdG8ucmVwbGFjZSkge1xuICAgICAgICAgICAgdGhpcyQxLnJlcGxhY2UodG8pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzJDEucHVzaCh0byk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbmZpcm0gdHJhbnNpdGlvbiBhbmQgcGFzcyBvbiB0aGUgdmFsdWVcbiAgICAgICAgICBuZXh0KHRvKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYWJvcnQoZSk7XG4gICAgfVxuICB9O1xuXG4gIHJ1blF1ZXVlKHF1ZXVlLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3N0RW50ZXJDYnMgPSBbXTtcbiAgICB2YXIgaXNWYWxpZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMkMS5jdXJyZW50ID09PSByb3V0ZTsgfTtcbiAgICAvLyB3YWl0IHVudGlsIGFzeW5jIGNvbXBvbmVudHMgYXJlIHJlc29sdmVkIGJlZm9yZVxuICAgIC8vIGV4dHJhY3RpbmcgaW4tY29tcG9uZW50IGVudGVyIGd1YXJkc1xuICAgIHZhciBlbnRlckd1YXJkcyA9IGV4dHJhY3RFbnRlckd1YXJkcyhhY3RpdmF0ZWQsIHBvc3RFbnRlckNicywgaXNWYWxpZCk7XG4gICAgdmFyIHF1ZXVlID0gZW50ZXJHdWFyZHMuY29uY2F0KHRoaXMkMS5yb3V0ZXIucmVzb2x2ZUhvb2tzKTtcbiAgICBydW5RdWV1ZShxdWV1ZSwgaXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzJDEucGVuZGluZyAhPT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGFib3J0KClcbiAgICAgIH1cbiAgICAgIHRoaXMkMS5wZW5kaW5nID0gbnVsbDtcbiAgICAgIG9uQ29tcGxldGUocm91dGUpO1xuICAgICAgaWYgKHRoaXMkMS5yb3V0ZXIuYXBwKSB7XG4gICAgICAgIHRoaXMkMS5yb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcG9zdEVudGVyQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IGNiKCk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS51cGRhdGVSb3V0ZSA9IGZ1bmN0aW9uIHVwZGF0ZVJvdXRlIChyb3V0ZSkge1xuICB2YXIgcHJldiA9IHRoaXMuY3VycmVudDtcbiAgdGhpcy5jdXJyZW50ID0gcm91dGU7XG4gIHRoaXMuY2IgJiYgdGhpcy5jYihyb3V0ZSk7XG4gIHRoaXMucm91dGVyLmFmdGVySG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgIGhvb2sgJiYgaG9vayhyb3V0ZSwgcHJldik7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQmFzZSAoYmFzZSkge1xuICBpZiAoIWJhc2UpIHtcbiAgICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgICAvLyByZXNwZWN0IDxiYXNlPiB0YWdcbiAgICAgIHZhciBiYXNlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJyk7XG4gICAgICBiYXNlID0gKGJhc2VFbCAmJiBiYXNlRWwuZ2V0QXR0cmlidXRlKCdocmVmJykpIHx8ICcvJztcbiAgICAgIC8vIHN0cmlwIGZ1bGwgVVJMIG9yaWdpblxuICAgICAgYmFzZSA9IGJhc2UucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC9bXlxcL10rLywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gJy8nO1xuICAgIH1cbiAgfVxuICAvLyBtYWtlIHN1cmUgdGhlcmUncyB0aGUgc3RhcnRpbmcgc2xhc2hcbiAgaWYgKGJhc2UuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICBiYXNlID0gJy8nICsgYmFzZTtcbiAgfVxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2hcbiAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXFwvJC8sICcnKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUXVldWUgKFxuICBjdXJyZW50LFxuICBuZXh0XG4pIHtcbiAgdmFyIGk7XG4gIHZhciBtYXggPSBNYXRoLm1heChjdXJyZW50Lmxlbmd0aCwgbmV4dC5sZW5ndGgpO1xuICBmb3IgKGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICBpZiAoY3VycmVudFtpXSAhPT0gbmV4dFtpXSkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVkOiBuZXh0LnNsaWNlKDAsIGkpLFxuICAgIGFjdGl2YXRlZDogbmV4dC5zbGljZShpKSxcbiAgICBkZWFjdGl2YXRlZDogY3VycmVudC5zbGljZShpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RHdWFyZHMgKFxuICByZWNvcmRzLFxuICBuYW1lLFxuICBiaW5kLFxuICByZXZlcnNlXG4pIHtcbiAgdmFyIGd1YXJkcyA9IGZsYXRNYXBDb21wb25lbnRzKHJlY29yZHMsIGZ1bmN0aW9uIChkZWYsIGluc3RhbmNlLCBtYXRjaCwga2V5KSB7XG4gICAgdmFyIGd1YXJkID0gZXh0cmFjdEd1YXJkKGRlZiwgbmFtZSk7XG4gICAgaWYgKGd1YXJkKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShndWFyZClcbiAgICAgICAgPyBndWFyZC5tYXAoZnVuY3Rpb24gKGd1YXJkKSB7IHJldHVybiBiaW5kKGd1YXJkLCBpbnN0YW5jZSwgbWF0Y2gsIGtleSk7IH0pXG4gICAgICAgIDogYmluZChndWFyZCwgaW5zdGFuY2UsIG1hdGNoLCBrZXkpXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZsYXR0ZW4ocmV2ZXJzZSA/IGd1YXJkcy5yZXZlcnNlKCkgOiBndWFyZHMpXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RHdWFyZCAoXG4gIGRlZixcbiAga2V5XG4pIHtcbiAgaWYgKHR5cGVvZiBkZWYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBleHRlbmQgbm93IHNvIHRoYXQgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZC5cbiAgICBkZWYgPSBfVnVlLmV4dGVuZChkZWYpO1xuICB9XG4gIHJldHVybiBkZWYub3B0aW9uc1trZXldXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RMZWF2ZUd1YXJkcyAoZGVhY3RpdmF0ZWQpIHtcbiAgcmV0dXJuIGV4dHJhY3RHdWFyZHMoZGVhY3RpdmF0ZWQsICdiZWZvcmVSb3V0ZUxlYXZlJywgYmluZEd1YXJkLCB0cnVlKVxufVxuXG5mdW5jdGlvbiBleHRyYWN0VXBkYXRlSG9va3MgKHVwZGF0ZWQpIHtcbiAgcmV0dXJuIGV4dHJhY3RHdWFyZHModXBkYXRlZCwgJ2JlZm9yZVJvdXRlVXBkYXRlJywgYmluZEd1YXJkKVxufVxuXG5mdW5jdGlvbiBiaW5kR3VhcmQgKGd1YXJkLCBpbnN0YW5jZSkge1xuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYm91bmRSb3V0ZUd1YXJkICgpIHtcbiAgICAgIHJldHVybiBndWFyZC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0RW50ZXJHdWFyZHMgKFxuICBhY3RpdmF0ZWQsXG4gIGNicyxcbiAgaXNWYWxpZFxuKSB7XG4gIHJldHVybiBleHRyYWN0R3VhcmRzKGFjdGl2YXRlZCwgJ2JlZm9yZVJvdXRlRW50ZXInLCBmdW5jdGlvbiAoZ3VhcmQsIF8sIG1hdGNoLCBrZXkpIHtcbiAgICByZXR1cm4gYmluZEVudGVyR3VhcmQoZ3VhcmQsIG1hdGNoLCBrZXksIGNicywgaXNWYWxpZClcbiAgfSlcbn1cblxuZnVuY3Rpb24gYmluZEVudGVyR3VhcmQgKFxuICBndWFyZCxcbiAgbWF0Y2gsXG4gIGtleSxcbiAgY2JzLFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlRW50ZXJHdWFyZCAodG8sIGZyb20sIG5leHQpIHtcbiAgICByZXR1cm4gZ3VhcmQodG8sIGZyb20sIGZ1bmN0aW9uIChjYikge1xuICAgICAgbmV4dChjYik7XG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNicy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyAjNzUwXG4gICAgICAgICAgLy8gaWYgYSByb3V0ZXItdmlldyBpcyB3cmFwcGVkIHdpdGggYW4gb3V0LWluIHRyYW5zaXRpb24sXG4gICAgICAgICAgLy8gdGhlIGluc3RhbmNlIG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgYXQgdGhpcyB0aW1lLlxuICAgICAgICAgIC8vIHdlIHdpbGwgbmVlZCB0byBwb2xsIGZvciByZWdpc3RyYXRpb24gdW50aWwgY3VycmVudCByb3V0ZVxuICAgICAgICAgIC8vIGlzIG5vIGxvbmdlciB2YWxpZC5cbiAgICAgICAgICBwb2xsKGNiLCBtYXRjaC5pbnN0YW5jZXMsIGtleSwgaXNWYWxpZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gcG9sbCAoXG4gIGNiLCAvLyBzb21laG93IGZsb3cgY2Fubm90IGluZmVyIHRoaXMgaXMgYSBmdW5jdGlvblxuICBpbnN0YW5jZXMsXG4gIGtleSxcbiAgaXNWYWxpZFxuKSB7XG4gIGlmIChpbnN0YW5jZXNba2V5XSkge1xuICAgIGNiKGluc3RhbmNlc1trZXldKTtcbiAgfSBlbHNlIGlmIChpc1ZhbGlkKCkpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBvbGwoY2IsIGluc3RhbmNlcywga2V5LCBpc1ZhbGlkKTtcbiAgICB9LCAxNik7XG4gIH1cbn1cblxuLyogICovXG5cblxudmFyIEhUTUw1SGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSQkMSkge1xuICBmdW5jdGlvbiBIVE1MNUhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgSGlzdG9yeSQkMS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSk7XG5cbiAgICB2YXIgZXhwZWN0U2Nyb2xsID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3I7XG5cbiAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICBzZXR1cFNjcm9sbCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMkMS5jdXJyZW50O1xuICAgICAgdGhpcyQxLnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbih0aGlzJDEuYmFzZSksIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICAgICAgaGFuZGxlU2Nyb2xsKHJvdXRlciwgcm91dGUsIGN1cnJlbnQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICggSGlzdG9yeSQkMSApIEhUTUw1SGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5JCQxO1xuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSQkMSAmJiBIaXN0b3J5JCQxLnByb3RvdHlwZSApO1xuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSFRNTDVIaXN0b3J5O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICAgIHdpbmRvdy5oaXN0b3J5LmdvKG4pO1xuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgZnJvbVJvdXRlID0gcmVmLmN1cnJlbnQ7XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcHVzaFN0YXRlKGNsZWFuUGF0aCh0aGlzJDEuYmFzZSArIHJvdXRlLmZ1bGxQYXRoKSk7XG4gICAgICBoYW5kbGVTY3JvbGwodGhpcyQxLnJvdXRlciwgcm91dGUsIGZyb21Sb3V0ZSwgZmFsc2UpO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB9LCBvbkFib3J0KTtcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGZyb21Sb3V0ZSA9IHJlZi5jdXJyZW50O1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpO1xuICAgICAgaGFuZGxlU2Nyb2xsKHRoaXMkMS5yb3V0ZXIsIHJvdXRlLCBmcm9tUm91dGUsIGZhbHNlKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKHB1c2gpIHtcbiAgICBpZiAoZ2V0TG9jYXRpb24odGhpcy5iYXNlKSAhPT0gdGhpcy5jdXJyZW50LmZ1bGxQYXRoKSB7XG4gICAgICB2YXIgY3VycmVudCA9IGNsZWFuUGF0aCh0aGlzLmJhc2UgKyB0aGlzLmN1cnJlbnQuZnVsbFBhdGgpO1xuICAgICAgcHVzaCA/IHB1c2hTdGF0ZShjdXJyZW50KSA6IHJlcGxhY2VTdGF0ZShjdXJyZW50KTtcbiAgICB9XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5nZXRDdXJyZW50TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24gKCkge1xuICAgIHJldHVybiBnZXRMb2NhdGlvbih0aGlzLmJhc2UpXG4gIH07XG5cbiAgcmV0dXJuIEhUTUw1SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbiAoYmFzZSkge1xuICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgaWYgKGJhc2UgJiYgcGF0aC5pbmRleE9mKGJhc2UpID09PSAwKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZS5sZW5ndGgpO1xuICB9XG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoXG59XG5cbi8qICAqL1xuXG5cbnZhciBIYXNoSGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSQkMSkge1xuICBmdW5jdGlvbiBIYXNoSGlzdG9yeSAocm91dGVyLCBiYXNlLCBmYWxsYmFjaykge1xuICAgIEhpc3RvcnkkJDEuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpO1xuICAgIC8vIGNoZWNrIGhpc3RvcnkgZmFsbGJhY2sgZGVlcGxpbmtpbmdcbiAgICBpZiAoZmFsbGJhY2sgJiYgY2hlY2tGYWxsYmFjayh0aGlzLmJhc2UpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZW5zdXJlU2xhc2goKTtcbiAgfVxuXG4gIGlmICggSGlzdG9yeSQkMSApIEhhc2hIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3RvcnkkJDE7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkkJDEgJiYgSGlzdG9yeSQkMS5wcm90b3R5cGUgKTtcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSGFzaEhpc3Rvcnk7XG5cbiAgLy8gdGhpcyBpcyBkZWxheWVkIHVudGlsIHRoZSBhcHAgbW91bnRzXG4gIC8vIHRvIGF2b2lkIHRoZSBoYXNoY2hhbmdlIGxpc3RlbmVyIGJlaW5nIGZpcmVkIHRvbyBlYXJseVxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuc2V0dXBMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXR1cExpc3RlbmVycyAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghZW5zdXJlU2xhc2goKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMkMS50cmFuc2l0aW9uVG8oZ2V0SGFzaCgpLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgcmVwbGFjZUhhc2gocm91dGUuZnVsbFBhdGgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hIYXNoKHJvdXRlLmZ1bGxQYXRoKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQuZnVsbFBhdGg7XG4gICAgaWYgKGdldEhhc2goKSAhPT0gY3VycmVudCkge1xuICAgICAgcHVzaCA/IHB1c2hIYXNoKGN1cnJlbnQpIDogcmVwbGFjZUhhc2goY3VycmVudCk7XG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nZXRDdXJyZW50TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24gKCkge1xuICAgIHJldHVybiBnZXRIYXNoKClcbiAgfTtcblxuICByZXR1cm4gSGFzaEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gY2hlY2tGYWxsYmFjayAoYmFzZSkge1xuICB2YXIgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihiYXNlKTtcbiAgaWYgKCEvXlxcLyMvLnRlc3QobG9jYXRpb24pKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgICBjbGVhblBhdGgoYmFzZSArICcvIycgKyBsb2NhdGlvbilcbiAgICApO1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gZW5zdXJlU2xhc2ggKCkge1xuICB2YXIgcGF0aCA9IGdldEhhc2goKTtcbiAgaWYgKHBhdGguY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJlcGxhY2VIYXNoKCcvJyArIHBhdGgpO1xuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCAoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgdmFyIGluZGV4ID0gaHJlZi5pbmRleE9mKCcjJyk7XG4gIHJldHVybiBpbmRleCA9PT0gLTEgPyAnJyA6IGhyZWYuc2xpY2UoaW5kZXggKyAxKVxufVxuXG5mdW5jdGlvbiBwdXNoSGFzaCAocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoIChwYXRoKSB7XG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHZhciBpID0gaHJlZi5pbmRleE9mKCcjJyk7XG4gIHZhciBiYXNlID0gaSA+PSAwID8gaHJlZi5zbGljZSgwLCBpKSA6IGhyZWY7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKChiYXNlICsgXCIjXCIgKyBwYXRoKSk7XG59XG5cbi8qICAqL1xuXG5cbnZhciBBYnN0cmFjdEhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkkJDEpIHtcbiAgZnVuY3Rpb24gQWJzdHJhY3RIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgICBIaXN0b3J5JCQxLmNhbGwodGhpcywgcm91dGVyLCBiYXNlKTtcbiAgICB0aGlzLnN0YWNrID0gW107XG4gICAgdGhpcy5pbmRleCA9IC0xO1xuICB9XG5cbiAgaWYgKCBIaXN0b3J5JCQxICkgQWJzdHJhY3RIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3RvcnkkJDE7XG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5JCQxICYmIEhpc3RvcnkkJDEucHJvdG90eXBlICk7XG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYnN0cmFjdEhpc3Rvcnk7XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHRoaXMkMS5zdGFjayA9IHRoaXMkMS5zdGFjay5zbGljZSgwLCB0aGlzJDEuaW5kZXggKyAxKS5jb25jYXQocm91dGUpO1xuICAgICAgdGhpcyQxLmluZGV4Kys7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4KS5jb25jYXQocm91dGUpO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB9LCBvbkFib3J0KTtcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciB0YXJnZXRJbmRleCA9IHRoaXMuaW5kZXggKyBuO1xuICAgIGlmICh0YXJnZXRJbmRleCA8IDAgfHwgdGFyZ2V0SW5kZXggPj0gdGhpcy5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgcm91dGUgPSB0aGlzLnN0YWNrW3RhcmdldEluZGV4XTtcbiAgICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEuaW5kZXggPSB0YXJnZXRJbmRleDtcbiAgICAgIHRoaXMkMS51cGRhdGVSb3V0ZShyb3V0ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5nZXRDdXJyZW50TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24gKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBjdXJyZW50ID8gY3VycmVudC5mdWxsUGF0aCA6ICcvJ1xuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMICgpIHtcbiAgICAvLyBub29wXG4gIH07XG5cbiAgcmV0dXJuIEFic3RyYWN0SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG4vKiAgKi9cblxudmFyIFZ1ZVJvdXRlciA9IGZ1bmN0aW9uIFZ1ZVJvdXRlciAob3B0aW9ucykge1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICB0aGlzLmFwcCA9IG51bGw7XG4gIHRoaXMuYXBwcyA9IFtdO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLmJlZm9yZUhvb2tzID0gW107XG4gIHRoaXMucmVzb2x2ZUhvb2tzID0gW107XG4gIHRoaXMuYWZ0ZXJIb29rcyA9IFtdO1xuICB0aGlzLm1hdGNoZXIgPSBjcmVhdGVNYXRjaGVyKG9wdGlvbnMucm91dGVzIHx8IFtdLCB0aGlzKTtcblxuICB2YXIgbW9kZSA9IG9wdGlvbnMubW9kZSB8fCAnaGFzaCc7XG4gIHRoaXMuZmFsbGJhY2sgPSBtb2RlID09PSAnaGlzdG9yeScgJiYgIXN1cHBvcnRzUHVzaFN0YXRlICYmIG9wdGlvbnMuZmFsbGJhY2sgIT09IGZhbHNlO1xuICBpZiAodGhpcy5mYWxsYmFjaykge1xuICAgIG1vZGUgPSAnaGFzaCc7XG4gIH1cbiAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICBtb2RlID0gJ2Fic3RyYWN0JztcbiAgfVxuICB0aGlzLm1vZGUgPSBtb2RlO1xuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgJ2hpc3RvcnknOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhUTUw1SGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UpO1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdoYXNoJzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIYXNoSGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UsIHRoaXMuZmFsbGJhY2spO1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdhYnN0cmFjdCc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgQWJzdHJhY3RIaXN0b3J5KHRoaXMsIG9wdGlvbnMuYmFzZSk7XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhc3NlcnQoZmFsc2UsIChcImludmFsaWQgbW9kZTogXCIgKyBtb2RlKSk7XG4gICAgICB9XG4gIH1cbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGN1cnJlbnRSb3V0ZToge30gfTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uIG1hdGNoIChcbiAgcmF3LFxuICBjdXJyZW50LFxuICByZWRpcmVjdGVkRnJvbVxuKSB7XG4gIHJldHVybiB0aGlzLm1hdGNoZXIubWF0Y2gocmF3LCBjdXJyZW50LCByZWRpcmVjdGVkRnJvbSlcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5jdXJyZW50Um91dGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oaXN0b3J5ICYmIHRoaXMuaGlzdG9yeS5jdXJyZW50XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0IChhcHAgLyogVnVlIGNvbXBvbmVudCBpbnN0YW5jZSAqLykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0KFxuICAgIGluc3RhbGwuaW5zdGFsbGVkLFxuICAgIFwibm90IGluc3RhbGxlZC4gTWFrZSBzdXJlIHRvIGNhbGwgYFZ1ZS51c2UoVnVlUm91dGVyKWAgXCIgK1xuICAgIFwiYmVmb3JlIGNyZWF0aW5nIHJvb3QgaW5zdGFuY2UuXCJcbiAgKTtcblxuICB0aGlzLmFwcHMucHVzaChhcHApO1xuXG4gIC8vIG1haW4gYXBwIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gIGlmICh0aGlzLmFwcCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgdmFyIGhpc3RvcnkgPSB0aGlzLmhpc3Rvcnk7XG5cbiAgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIVE1MNUhpc3RvcnkpIHtcbiAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhoaXN0b3J5LmdldEN1cnJlbnRMb2NhdGlvbigpKTtcbiAgfSBlbHNlIGlmIChoaXN0b3J5IGluc3RhbmNlb2YgSGFzaEhpc3RvcnkpIHtcbiAgICB2YXIgc2V0dXBIYXNoTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBoaXN0b3J5LnNldHVwTGlzdGVuZXJzKCk7XG4gICAgfTtcbiAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhcbiAgICAgIGhpc3RvcnkuZ2V0Q3VycmVudExvY2F0aW9uKCksXG4gICAgICBzZXR1cEhhc2hMaXN0ZW5lcixcbiAgICAgIHNldHVwSGFzaExpc3RlbmVyXG4gICAgKTtcbiAgfVxuXG4gIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHRoaXMkMS5hcHBzLmZvckVhY2goZnVuY3Rpb24gKGFwcCkge1xuICAgICAgYXBwLl9yb3V0ZSA9IHJvdXRlO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmVmb3JlRWFjaCA9IGZ1bmN0aW9uIGJlZm9yZUVhY2ggKGZuKSB7XG4gIHJldHVybiByZWdpc3Rlckhvb2sodGhpcy5iZWZvcmVIb29rcywgZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJlZm9yZVJlc29sdmUgPSBmdW5jdGlvbiBiZWZvcmVSZXNvbHZlIChmbikge1xuICByZXR1cm4gcmVnaXN0ZXJIb29rKHRoaXMucmVzb2x2ZUhvb2tzLCBmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYWZ0ZXJFYWNoID0gZnVuY3Rpb24gYWZ0ZXJFYWNoIChmbikge1xuICByZXR1cm4gcmVnaXN0ZXJIb29rKHRoaXMuYWZ0ZXJIb29rcywgZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLm9uUmVhZHkgPSBmdW5jdGlvbiBvblJlYWR5IChjYiwgZXJyb3JDYikge1xuICB0aGlzLmhpc3Rvcnkub25SZWFkeShjYiwgZXJyb3JDYik7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiBvbkVycm9yIChlcnJvckNiKSB7XG4gIHRoaXMuaGlzdG9yeS5vbkVycm9yKGVycm9yQ2IpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgdGhpcy5oaXN0b3J5LnB1c2gobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgdGhpcy5oaXN0b3J5LnJlcGxhY2UobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gIHRoaXMuaGlzdG9yeS5nbyhuKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmFjayA9IGZ1bmN0aW9uIGJhY2sgKCkge1xuICB0aGlzLmdvKC0xKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZm9yd2FyZCA9IGZ1bmN0aW9uIGZvcndhcmQgKCkge1xuICB0aGlzLmdvKDEpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5nZXRNYXRjaGVkQ29tcG9uZW50cyA9IGZ1bmN0aW9uIGdldE1hdGNoZWRDb21wb25lbnRzICh0bykge1xuICB2YXIgcm91dGUgPSB0b1xuICAgID8gdG8ubWF0Y2hlZFxuICAgICAgPyB0b1xuICAgICAgOiB0aGlzLnJlc29sdmUodG8pLnJvdXRlXG4gICAgOiB0aGlzLmN1cnJlbnRSb3V0ZTtcbiAgaWYgKCFyb3V0ZSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIHJldHVybiBbXS5jb25jYXQuYXBwbHkoW10sIHJvdXRlLm1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBtLmNvbXBvbmVudHNba2V5XVxuICAgIH0pXG4gIH0pKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSAoXG4gIHRvLFxuICBjdXJyZW50LFxuICBhcHBlbmRcbikge1xuICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVMb2NhdGlvbihcbiAgICB0byxcbiAgICBjdXJyZW50IHx8IHRoaXMuaGlzdG9yeS5jdXJyZW50LFxuICAgIGFwcGVuZCxcbiAgICB0aGlzXG4gICk7XG4gIHZhciByb3V0ZSA9IHRoaXMubWF0Y2gobG9jYXRpb24sIGN1cnJlbnQpO1xuICB2YXIgZnVsbFBhdGggPSByb3V0ZS5yZWRpcmVjdGVkRnJvbSB8fCByb3V0ZS5mdWxsUGF0aDtcbiAgdmFyIGJhc2UgPSB0aGlzLmhpc3RvcnkuYmFzZTtcbiAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGJhc2UsIGZ1bGxQYXRoLCB0aGlzLm1vZGUpO1xuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICByb3V0ZTogcm91dGUsXG4gICAgaHJlZjogaHJlZixcbiAgICAvLyBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIG5vcm1hbGl6ZWRUbzogbG9jYXRpb24sXG4gICAgcmVzb2x2ZWQ6IHJvdXRlXG4gIH1cbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYWRkUm91dGVzID0gZnVuY3Rpb24gYWRkUm91dGVzIChyb3V0ZXMpIHtcbiAgdGhpcy5tYXRjaGVyLmFkZFJvdXRlcyhyb3V0ZXMpO1xuICBpZiAodGhpcy5oaXN0b3J5LmN1cnJlbnQgIT09IFNUQVJUKSB7XG4gICAgdGhpcy5oaXN0b3J5LnRyYW5zaXRpb25Ubyh0aGlzLmhpc3RvcnkuZ2V0Q3VycmVudExvY2F0aW9uKCkpO1xuICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVnVlUm91dGVyLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVySG9vayAobGlzdCwgZm4pIHtcbiAgbGlzdC5wdXNoKGZuKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9IGxpc3QuaW5kZXhPZihmbik7XG4gICAgaWYgKGkgPiAtMSkgeyBsaXN0LnNwbGljZShpLCAxKTsgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhyZWYgKGJhc2UsIGZ1bGxQYXRoLCBtb2RlKSB7XG4gIHZhciBwYXRoID0gbW9kZSA9PT0gJ2hhc2gnID8gJyMnICsgZnVsbFBhdGggOiBmdWxsUGF0aDtcbiAgcmV0dXJuIGJhc2UgPyBjbGVhblBhdGgoYmFzZSArICcvJyArIHBhdGgpIDogcGF0aFxufVxuXG5WdWVSb3V0ZXIuaW5zdGFsbCA9IGluc3RhbGw7XG5WdWVSb3V0ZXIudmVyc2lvbiA9ICcyLjcuMCc7XG5cbmlmIChpbkJyb3dzZXIgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlLnVzZShWdWVSb3V0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZ1ZVJvdXRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuY29tbW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi9yb3V0ZXJcIjtcblxucmVxdWlyZShcIi4vYm9vdHN0cmFwXCIpO1xucmVxdWlyZShcIi4vY29tcG9uZW50c1wiKTtcbnJlcXVpcmUoXCIuL2RpcmVjdGl2ZXNcIik7XG5yZXF1aXJlKFwiLi9taXhpbnNcIik7XG5cbndpbmRvdy5zdG9yZSA9IHN0b3JlO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJvdXRlclxufSk7XG5cbndpbmRvdy5hcHAgPSBhcHA7XG5cbmFwcC4kbW91bnQoXCIjYXBwLWxheW91dFwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04YzAxZTE3ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvRGFzaGJvYXJkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gRGFzaGJvYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04YzAxZTE3ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LThjMDFlMTdlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHsgRGFzaGJvYXJkIH0gZnJvbSBcIi4vRGFzaGJvYXJkLnZ1ZVwiO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgeyBwYXRoOiBcIi9cIiwgbmFtZTogXCJkYXNoYm9hcmRcIiwgY29tcG9uZW50OiBEYXNoYm9hcmQgfSxcbiAgeyBwYXRoOiBcIipcIiwgY29tcG9uZW50OiBQYWdlTm90Rm91bmQgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3JvdXRlcy5qcyIsIi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBHbG9iYWwgVmFyaWFibGVzXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfFxuICovXG5cbndpbmRvdy5sYXJvdXRlID0gcmVxdWlyZShcIi4vbGFyb3V0ZVwiKTtcbndpbmRvdy5tb21lbnQgPSByZXF1aXJlKFwibW9tZW50LXRpbWV6b25lXCIpO1xucmVxdWlyZShcIm1vbWVudC1wcmVjaXNlLXJhbmdlLXBsdWdpblwiKTtcbm1vbWVudC50ei5zZXREZWZhdWx0KFwiVVRDXCIpO1xuXG4vKlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHwgQXhpb3MgU2V0dXBcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gKi9cblxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQ1NSRi1UT0tFTlwiXSA9IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbjtcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICBjb25maWcgPT4ge1xuICAgIE5Qcm9ncmVzcy5jb25maWd1cmUoe1xuICAgICAgZWFzaW5nOiBcImVhc2VcIixcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBzaG93U3Bpbm5lcjogZmFsc2VcbiAgICB9KTtcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICBOUHJvZ3Jlc3MuaW5jKDAuMyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSxcbiAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4pO1xuXG5heGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICByZXNwb25zZSA9PiB7XG4gICAgTlByb2dyZXNzLmRvbmUoKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sXG4gIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuKTtcblxuLypcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8IExhcmF2ZWwgRWNobyBTZXR1cFxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHxcbiAqL1xuXG5pbXBvcnQgRWNobyBmcm9tIFwibGFyYXZlbC1lY2hvXCI7XG5pbXBvcnQgUHVzaGVyIGZyb20gXCJwdXNoZXItanNcIjtcblxuUHVzaGVyLmxvZyA9IG1zZyA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKG1zZyk7XG59O1xuXG53aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbiAgYnJvYWRjYXN0ZXI6IFwicHVzaGVyXCIsXG4gIGtleTogTGFyYXZlbC5wdXNoZXJLZXlcbn0pO1xuXG4vKlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHwgU2VudHJ5ICsgUmF2ZW4gU2V0dXBcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gKi9cbi8vIGltcG9ydCBSYXZlbiBmcm9tICdyYXZlbi1qcyc7XG4vLyBpbXBvcnQgUmF2ZW5WdWUgZnJvbSAncmF2ZW4tanMvcGx1Z2lucy92dWUnO1xuLy9cbi8vIGlmKExhcmF2ZWwuZW52ICE9PSAnbG9jYWwnKSB7XG4vLyAgICAgUmF2ZW5cbi8vICAgICAgICAgLmNvbmZpZygnaHR0cHM6Ly81MDEyNGU4OWQ2ODk0NWJiOGY3ODc2NjZmMDQ4MjgwN0BzZW50cnkuY29kZXBpZXIuaW8vNCcpXG4vLyAgICAgICAgIC5hZGRQbHVnaW4oUmF2ZW5WdWUsIFZ1ZSlcbi8vICAgICAgICAgLmluc3RhbGwoKTtcbi8vIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwiY2xhc3MgRXJyb3JzIHtcbiAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEVycm9ycyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIERldGVybWluZSBpZiBhbiBlcnJvcnMgZXhpc3RzIGZvciB0aGUgZ2l2ZW4gZmllbGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcbiAgICAgKi9cbiAgaGFzKGZpZWxkKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIERldGVybWluZSBpZiB3ZSBoYXZlIGFueSBlcnJvcnMuXG4gICAgICovXG4gIGFueSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICAgKiBSZXRyaWV2ZSB0aGUgZXJyb3IgbWVzc2FnZSBmb3IgYSBmaWVsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgICAqL1xuICBnZXQoZmllbGQpIHtcbiAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgICAqIFJlY29yZCB0aGUgbmV3IGVycm9ycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcbiAgICAgKi9cbiAgcmVjb3JkKGVycm9ycykge1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICB9XG5cbiAgLyoqXG4gICAgICogQ2xlYXIgb25lIG9yIGFsbCBlcnJvciBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBmaWVsZFxuICAgICAqL1xuICBjbGVhcihmaWVsZCkge1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL0Vycm9ycy5qcyIsImltcG9ydCBSZXF1ZXN0IGZyb20gXCIuL1JlcXVlc3RcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlcXVlc3Qge1xuICAvKipcbiAgICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAgICovXG4gIHJlc2V0KCkge1xuICAgIGZvciAoY29uc3QgZmllbGQgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gdGhpcy5vcmlnaW5hbERhdGFbZmllbGRdO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICBlbXB0eSgpIHtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIGluIHRoaXMuZW1wdHlEYXRhKSB7XG4gICAgICB0aGlzW2ZpZWxkXSA9IHRoaXMuZW1wdHlEYXRhW2ZpZWxkXTtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAgICogSGFuZGxlIGEgc3VjY2Vzc2Z1bCBmb3JtIHN1Ym1pc3Npb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgIGlmICh0aGlzLnJlc2V0RGF0YSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgZGlmZigpIHtcbiAgICByZXR1cm4gXy5yZWR1Y2UoXG4gICAgICB0aGlzLmRhdGEoKSxcbiAgICAgIChyZXN1bHQsIHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIF8uaXNFcXVhbCh2YWx1ZSwgdGhpcy5vcmlnaW5hbERhdGFba2V5XSlcbiAgICAgICAgICA/IHJlc3VsdFxuICAgICAgICAgIDogcmVzdWx0LmNvbmNhdChrZXkpO1xuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL0Zvcm0uanMiLCJpbXBvcnQgRXJyb3JzIGZyb20gXCIuL0Vycm9yc1wiO1xuXG5jbGFzcyBSZXF1ZXN0IHtcbiAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEZvcm0gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdCwgRm9ybURhdGF9IGRhdGFcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc2V0XG4gICAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGEsIHJlc2V0KSB7XG4gICAgdGhpcy5yZXNldERhdGEgPSByZXNldCB8fCBmYWxzZTtcblxuICAgIGlmIChkYXRhICYmICFfLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICB0aGlzW1widmFsdWVcIl0gPSBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtcHR5RGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgZmllbGQgaW4gZGF0YSkge1xuICAgICAgICB0aGlzW2ZpZWxkXSA9IGRhdGFbZmllbGRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9ycygpO1xuICB9XG5cbiAgLyoqXG4gICAgICogRmV0Y2ggYWxsIHJlbGV2YW50IGRhdGEgZm9yIHRoZSBmb3JtLlxuICAgICAqL1xuICBkYXRhKCkge1xuICAgIGlmICh0aGlzLmZvcm1EYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtRGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcyk7XG5cbiAgICBkZWxldGUgZGF0YS5lcnJvcnM7XG4gICAgZGVsZXRlIGRhdGEucmVzZXREYXRhO1xuICAgIGRlbGV0ZSBkYXRhLmVtcHR5RGF0YTtcbiAgICBkZWxldGUgZGF0YS5vcmlnaW5hbERhdGE7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNlbmQgYSBHRVQgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBtdXRhdGlvbnNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjb25maWdcbiAgICAgKi9cbiAgZ2V0KHVybCwgbXV0YXRpb25zLCBjb25maWcpIHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIGluIGNvbmZpZykge1xuICAgICAgdGhpc1t2YWx1ZV0gPSBjb25maWdbdmFsdWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcbiAgICAgIFwiZ2V0XCIsXG4gICAgICB0aGlzLmRhdGFRdWVyeVN0cmluZygpID8gdXJsICsgXCI/XCIgKyB0aGlzLmRhdGFRdWVyeVN0cmluZygpIDogdXJsLFxuICAgICAgbXV0YXRpb25zXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNlbmQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gbXV0YXRpb25zXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnXG4gICAgICovXG4gIHBvc3QodXJsLCBtdXRhdGlvbnMsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInBvc3RcIiwgdXJsLCBtdXRhdGlvbnMsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICAgKiBTZW5kIGEgUFVUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gbXV0YXRpb25zXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnXG4gICAgICovXG4gIHB1dCh1cmwsIG11dGF0aW9ucywgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicHV0XCIsIHVybCwgbXV0YXRpb25zLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2VuZCBhIFBBVENIIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gbXV0YXRpb25zXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnXG4gICAgICovXG4gIHBhdGNoKHVybCwgbXV0YXRpb25zLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwYXRjaFwiLCB1cmwsIG11dGF0aW9ucywgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNlbmQgYSBERUxFVEUgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBtdXRhdGlvbnNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjb25maWdcbiAgICAgKi9cbiAgZGVsZXRlKHVybCwgbXV0YXRpb25zLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJkZWxldGVcIiwgdXJsLCBtdXRhdGlvbnMsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZvcm0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IG11dGF0aW9uc1xuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNvbmZpZ1xuICAgICAqL1xuICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCwgbXV0YXRpb25zLCBjb25maWcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZm9ybURhdGEgPyB0aGlzLmZvcm1EYXRhIDogdGhpcy5kYXRhKCk7XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIFtyZXF1ZXN0VHlwZV0odXJsLCBkYXRhLCBjb25maWcpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3MoKTtcblxuICAgICAgICAgICAgaWYgKF8uaXNTdHJpbmcobXV0YXRpb25zKSkge1xuICAgICAgICAgICAgICBtdXRhdGlvbnMgPSBbbXV0YXRpb25zXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG11dGF0aW9ucyAmJiBtdXRhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIF8uZWFjaChtdXRhdGlvbnMsIG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBhcHAuJHN0b3JlLmNvbW1pdChtdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YTogdGhpcy5kYXRhKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5yZXNldERhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE9yaWdpbmFsRGF0YSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGFwcC5oYW5kbGVBcGlFcnJvcihlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLm9uRmFpbChlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICAgKiBIYW5kbGUgYSBzdWNjZXNzZnVsIGZvcm0gc3VibWlzc2lvbi5cbiAgICAgKi9cbiAgb25TdWNjZXNzKCkge1xuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICAgKiBIYW5kbGUgYSBmYWlsZWQgZm9ybSBzdWJtaXNzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgICAqL1xuICBvbkZhaWwoZXJyb3JzKSB7XG4gICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IGRhdGEgdG8gdGhlIG9yaWdpbmFsIGRhdGFcbiAgICAgKi9cbiAgc2V0T3JpZ2luYWxEYXRhKCkge1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gdGhpcy5kYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBxdWVyeSBzdHJpbmcgZm9yIHRoZSBkYXRhIGdpdmVuXG4gICAgICovXG4gIGRhdGFRdWVyeVN0cmluZygpIHtcbiAgICBsZXQgc3RyID0gW107XG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBmb3IgKGxldCBkYXR1bSBpbiBkYXRhKVxuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoZGF0dW0pKSB7XG4gICAgICAgIHN0ci5wdXNoKFxuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChkYXR1bSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2RhdHVtXSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICByZXR1cm4gc3RyLmpvaW4oXCImXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NsYXNzZXMvUmVxdWVzdC5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ2xpcGJvYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDdjOWE0ZDJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpcGJvYXJkLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DbGlwYm9hcmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDbGlwYm9hcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ3YzlhNGQyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDdjOWE0ZDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DbGlwYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DbGlwYm9hcmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTmF2aWdhdGlvbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTExOGZiNzg4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL05hdmlnYXRpb24udnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBOYXZpZ2F0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMThmYjc4OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTExOGZiNzg4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2aWdhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQ3NTJiZGZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBOb3RpZmljYXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ0NzUyYmRmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDQ3NTJiZGZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTm90aWZpY2F0aW9ucy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRkZGJmMTI0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL05vdGlmaWNhdGlvbnMudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBOb3RpZmljYXRpb25zLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00ZGRiZjEyNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRkZGJmMTI0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gbnVsbFxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTI2YjNjZGNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUGFnZU5vdEZvdW5kLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBQYWdlTm90Rm91bmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTkyNmIzY2RjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOTI2YjNjZGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGltZUFnby52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY4NjhkYzM4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1RpbWVBZ28udnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBUaW1lQWdvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ODY4ZGMzOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY4NjhkYzM4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVGltZUFnby52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVG9vbFRpcC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTEyNjBjOTlmXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Rvb2xUaXAudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBUb29sVGlwLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMjYwYzk5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTEyNjBjOTlmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9vbFRpcC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlZ1ZS5jb21wb25lbnQoXCJUaW1lQWdvXCIsIHJlcXVpcmUoXCIuL1RpbWVBZ28udnVlXCIpKTtcblZ1ZS5jb21wb25lbnQoXCJUb29sdGlwXCIsIHJlcXVpcmUoXCIuL1Rvb2xUaXAudnVlXCIpKTtcblZ1ZS5jb21wb25lbnQoXCJDbGlwYm9hcmRcIiwgcmVxdWlyZShcIi4vQ2xpcGJvYXJkLnZ1ZVwiKSk7XG5WdWUuY29tcG9uZW50KFwiTmF2aWdhdGlvblwiLCByZXF1aXJlKFwiLi9OYXZpZ2F0aW9uLnZ1ZVwiKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCIoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGxhcm91dGUgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciByb3V0ZXMgPSB7XG5cbiAgICAgICAgICAgIGFic29sdXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHJvb3RVcmw6ICdodHRwOi8vY29kZXBpZXIuZGV2JyxcbiAgICAgICAgICAgIHJvdXRlcyA6IFt7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvYXV0aG9yaXplXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXEF1dGhvcml6YXRpb25Db250cm9sbGVyQGF1dGhvcml6ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJvYXV0aFxcL2F1dGhvcml6ZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxBcHByb3ZlQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJAYXBwcm92ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvYXV0aG9yaXplXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXERlbnlBdXRob3JpemF0aW9uQ29udHJvbGxlckBkZW55XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvdG9rZW5cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQWNjZXNzVG9rZW5Db250cm9sbGVyQGlzc3VlVG9rZW5cIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJvYXV0aFxcL3Rva2Vuc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxBdXRob3JpemVkQWNjZXNzVG9rZW5Db250cm9sbGVyQGZvclVzZXJcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJvYXV0aFxcL3Rva2Vuc1xcL3t0b2tlbl9pZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQXV0aG9yaXplZEFjY2Vzc1Rva2VuQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvdG9rZW5cXC9yZWZyZXNoXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXFRyYW5zaWVudFRva2VuQ29udHJvbGxlckByZWZyZXNoXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwib2F1dGhcXC9jbGllbnRzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXENsaWVudENvbnRyb2xsZXJAZm9yVXNlclwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJvYXV0aFxcL2NsaWVudHNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQ2xpZW50Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvY2xpZW50c1xcL3tjbGllbnRfaWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXENsaWVudENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwib2F1dGhcXC9jbGllbnRzXFwve2NsaWVudF9pZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQ2xpZW50Q29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwib2F1dGhcXC9zY29wZXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcU2NvcGVDb250cm9sbGVyQGFsbFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvcGVyc29uYWwtYWNjZXNzLXRva2Vuc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxQZXJzb25hbEFjY2Vzc1Rva2VuQ29udHJvbGxlckBmb3JVc2VyXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvcGVyc29uYWwtYWNjZXNzLXRva2Vuc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxQZXJzb25hbEFjY2Vzc1Rva2VuQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvcGVyc29uYWwtYWNjZXNzLXRva2Vuc1xcL3t0b2tlbl9pZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcUGVyc29uYWxBY2Nlc3NUb2tlbkNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJicm9hZGNhc3RpbmdcXC9hdXRoXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiSWxsdW1pbmF0ZVxcQnJvYWRjYXN0aW5nXFxCcm9hZGNhc3RDb250cm9sbGVyQGF1dGhlbnRpY2F0ZVwifSx7XCJob3N0XCI6XCJwcm92aXNpb24uY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJcXC9cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXEN1c3RvbVNlcnZlclByb3Zpc2lvbmluZ0NvbnRyb2xsZXJAcHJvdmlzaW9uXCJ9LHtcImhvc3RcIjpcInByb3Zpc2lvbi5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJzdGFydFxcL3twcm92aXNpb25pbmdfa2V5fVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcQ3VzdG9tU2VydmVyUHJvdmlzaW9uaW5nQ29udHJvbGxlckBzdGFydFwifSx7XCJob3N0XCI6XCJwcm92aXNpb24uY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJrZXlzXFwve3Byb3Zpc2lvbmluZ19rZXl9XFwvcHVibGljXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxDdXN0b21TZXJ2ZXJQcm92aXNpb25pbmdDb250cm9sbGVyQHJldHVyblB1YmxpY0tleVwifSx7XCJob3N0XCI6XCJwcm92aXNpb24uY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJrZXlzXFwve3Byb3Zpc2lvbmluZ19rZXlcXC9wcml2YXRlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcQ3VzdG9tU2VydmVyUHJvdmlzaW9uaW5nQ29udHJvbGxlckByZXR1cm5Qcml2YXRlS2V5XCJ9LHtcImhvc3RcIjpcInByb3Zpc2lvbi5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImVuZFxcL3twcm92aXNpb25pbmdfa2V5fVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcQ3VzdG9tU2VydmVyUHJvdmlzaW9uaW5nQ29udHJvbGxlckBlbmRcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC8yZmFcIixcIm5hbWVcIjpcIjJmYS5pbmRleFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC8yZmFcIixcIm5hbWVcIjpcIjJmYS5zdG9yZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcLzJmYVxcL3tmYX1cIixcIm5hbWVcIjpcIjJmYS5zaG93XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFNlY29uZEF1dGhDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvMmZhXFwve2ZhfVwiLFwibmFtZVwiOlwiMmZhLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC8yZmFcXC97ZmF9XCIsXCJuYW1lXCI6XCIyZmEuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbWVcIixcIm5hbWVcIjpcIm1lLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvdXNlclwiLFwibmFtZVwiOlwidXNlci5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC91c2VyXCIsXCJuYW1lXCI6XCJ1c2VyLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvdXNlclxcL3t1c2VyfVwiLFwibmFtZVwiOlwidXNlci5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvdXNlclxcL3t1c2VyfVwiLFwibmFtZVwiOlwidXNlci51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcVXNlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvdXNlclxcL3t1c2VyfVwiLFwibmFtZVwiOlwidXNlci5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL2ludm9pY2VzXCIsXCJuYW1lXCI6XCJpbnZvaWNlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25JbnZvaWNlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL2ludm9pY2VzXCIsXCJuYW1lXCI6XCJpbnZvaWNlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25JbnZvaWNlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXFwvaW52b2ljZXNcXC97aW52b2ljZX1cIixcIm5hbWVcIjpcImludm9pY2VzLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uSW52b2ljZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL2ludm9pY2VzXFwve2ludm9pY2V9XCIsXCJuYW1lXCI6XCJpbnZvaWNlcy51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uSW52b2ljZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cXC9pbnZvaWNlc1xcL3tpbnZvaWNlfVwiLFwibmFtZVwiOlwiaW52b2ljZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25JbnZvaWNlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25Db250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24uc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXFwve3N1YnNjcmlwdGlvbn1cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL3tzdWJzY3JpcHRpb259XCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24udXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cXC97c3Vic2NyaXB0aW9ufVwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb24tY2FyZFwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLWNhcmQuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ2FyZENvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb24tY2FyZFwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLWNhcmQuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ2FyZENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvbi1jYXJkXFwve3N1YnNjcmlwdGlvbl9jYXJkfVwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLWNhcmQuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25DYXJkQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uLWNhcmRcXC97c3Vic2NyaXB0aW9uX2NhcmR9XCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24tY2FyZC51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ2FyZENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb24tY2FyZFxcL3tzdWJzY3JpcHRpb25fY2FyZH1cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi1jYXJkLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ2FyZENvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cIixcIm5hbWVcIjpcInRlYW0uaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cIixcIm5hbWVcIjpcInRlYW0uc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3t0ZWFtfVwiLFwibmFtZVwiOlwidGVhbS5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC97dGVhbX1cIixcIm5hbWVcIjpcInRlYW0udXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwve3RlYW19XCIsXCJuYW1lXCI6XCJ0ZWFtLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwvdGVhbVxcL3t0ZWFtfVxcL21lbWJlcnNcIixcIm5hbWVcIjpcInRlYW0ubWVtYmVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbU1lbWJlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3RlYW1cXC97dGVhbX1cXC9tZW1iZXJzXCIsXCJuYW1lXCI6XCJ0ZWFtLm1lbWJlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1NZW1iZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3RlYW1cXC97dGVhbX1cXC9tZW1iZXJzXFwve21lbWJlcn1cIixcIm5hbWVcIjpcInRlYW0ubWVtYmVycy5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC90ZWFtXFwve3RlYW19XFwvbWVtYmVyc1xcL3ttZW1iZXJ9XCIsXCJuYW1lXCI6XCJ0ZWFtLm1lbWJlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwvdGVhbVxcL3t0ZWFtfVxcL21lbWJlcnNcXC97bWVtYmVyfVwiLFwibmFtZVwiOlwidGVhbS5tZW1iZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1NZW1iZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3N3aXRjaFxcL3tpZD99XCIsXCJuYW1lXCI6XCJ0ZWFtcy5zd2l0Y2hcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQHN3aXRjaFRlYW1cIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL21lbWJlcnNcIixcIm5hbWVcIjpcInRlYW1zLm1lbWJlcnMuaW52aXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckBpbnZpdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL21lbWJlcnNcXC9yZXNlbmRcXC97aW52aXRlX2lkfVwiLFwibmFtZVwiOlwidGVhbXMubWVtYmVycy5yZXNlbmRfaW52aXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckByZXNlbmRJbnZpdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9jYXRlZ29yaWVzXCIsXCJuYW1lXCI6XCJjYXRlZ29yaWVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkNhdGVnb3JpZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2NhdGVnb3JpZXNcIixcIm5hbWVcIjpcImNhdGVnb3JpZXMuc3RvcmVcIixcImFjdGlvblwiOlwiQ2F0ZWdvcmllc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9jYXRlZ29yaWVzXFwve2NhdGVnb3J5fVwiLFwibmFtZVwiOlwiY2F0ZWdvcmllcy5zaG93XCIsXCJhY3Rpb25cIjpcIkNhdGVnb3JpZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvY2F0ZWdvcmllc1xcL3tjYXRlZ29yeX1cIixcIm5hbWVcIjpcImNhdGVnb3JpZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkNhdGVnb3JpZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL2NhdGVnb3JpZXNcXC97Y2F0ZWdvcnl9XCIsXCJuYW1lXCI6XCJjYXRlZ29yaWVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiQ2F0ZWdvcmllc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1xcL2J1b3lDbGFzc2VzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQnVveUFwcENvbnRyb2xsZXJAZ2V0QnVveUNsYXNzZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYnVveS1hcHBzXFwve2J1b3lfYXBwfVxcL3VwZGF0ZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1wiLFwibmFtZVwiOlwiYnVveS1hcHBzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1wiLFwibmFtZVwiOlwiYnVveS1hcHBzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYnVveS1hcHBzXFwve2J1b3lfYXBwfVwiLFwibmFtZVwiOlwiYnVveS1hcHBzLnNob3dcIixcImFjdGlvblwiOlwiQnVveUFwcENvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9idW95LWFwcHNcXC97YnVveV9hcHB9XCIsXCJuYW1lXCI6XCJidW95LWFwcHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1xcL3tidW95X2FwcH1cIixcIm5hbWVcIjpcImJ1b3ktYXBwcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0c1wiLFwibmFtZVwiOlwiYml0dHMuaW5kZXhcIixcImFjdGlvblwiOlwiQml0dHNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2JpdHRzXCIsXCJuYW1lXCI6XCJiaXR0cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJCaXR0c0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0c1xcL3tiaXR0fVwiLFwibmFtZVwiOlwiYml0dHMuc2hvd1wiLFwiYWN0aW9uXCI6XCJCaXR0c0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0c1xcL3tiaXR0fVwiLFwibmFtZVwiOlwiYml0dHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkJpdHRzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0c1xcL3tiaXR0fVwiLFwibmFtZVwiOlwiYml0dHMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJCaXR0c0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0XFwve2JpdHR9XFwvcnVuXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQml0dHNDb250cm9sbGVyQHJ1bk9uU2VydmVyc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3N5c3RlbXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTeXN0ZW1zQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcnVubmluZy1jb21tYW5kc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQGdldFJ1bm5pbmdDb21tYW5kc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcnVubmluZy1kZXBsb3ltZW50c1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQGdldFJ1bm5pbmdEZXBsb3ltZW50c1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3NoLWtleXNcIixcIm5hbWVcIjpcInNzaC1rZXlzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJTc2hLZXlDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3NoLWtleXNcIixcIm5hbWVcIjpcInNzaC1rZXlzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJTc2hLZXlDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic3NoLWtleXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyU3NoS2V5Q29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNzaC1rZXlzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyU3NoS2V5Q29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzc2gta2V5cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJTc2hLZXlDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlci1wcm92aWRlcnNcIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyU2VydmVyUHJvdmlkZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJTZXJ2ZXJQcm92aWRlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlci1wcm92aWRlcnNcXC97c2VydmVyX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclNlcnZlclByb3ZpZGVyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyLXByb3ZpZGVyc1xcL3tzZXJ2ZXJfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJTZXJ2ZXJQcm92aWRlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXItcHJvdmlkZXJzXFwve3NlcnZlcl9wcm92aWRlcn1cIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJTZXJ2ZXJQcm92aWRlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3MuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcVXNlck5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcVXNlck5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclJlcG9zaXRvcnlQcm92aWRlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1wiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyUmVwb3NpdG9yeVByb3ZpZGVyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcXC97cmVwb3NpdG9yeV9wcm92aWRlcn1cIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyUmVwb3NpdG9yeVByb3ZpZGVyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcXC97cmVwb3NpdG9yeV9wcm92aWRlcn1cIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJSZXBvc2l0b3J5UHJvdmlkZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcXC97cmVwb3NpdG9yeV9wcm92aWRlcn1cIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyUmVwb3NpdG9yeVByb3ZpZGVyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlck5vdGlmaWNhdGlvblByb3ZpZGVyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyTm90aWZpY2F0aW9uUHJvdmlkZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXFwve25vdGlmaWNhdGlvbl9wcm92aWRlcn1cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJOb3RpZmljYXRpb25Qcm92aWRlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcXC97bm90aWZpY2F0aW9uX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyTm90aWZpY2F0aW9uUHJvdmlkZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1xcL3tub3RpZmljYXRpb25fcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyTm90aWZpY2F0aW9uUHJvdmlkZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2V2ZW50c1wiLFwibmFtZVwiOlwiZXZlbnRzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkV2ZW50Q29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2V2ZW50c1wiLFwibmFtZVwiOlwiZXZlbnRzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIkV2ZW50Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvZXZlbnRzXFwve2V2ZW50fVwiLFwibmFtZVwiOlwiZXZlbnRzLnNob3dcIixcImFjdGlvblwiOlwiRXZlbnRDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ldmVudHNcXC97ZXZlbnR9XCIsXCJuYW1lXCI6XCJldmVudHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkV2ZW50Q29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2V2ZW50c1xcL3tldmVudH1cIixcIm5hbWVcIjpcImV2ZW50cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIkV2ZW50Q29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlc1xcL2FsbFwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVDb250cm9sbGVyQGFsbFBpbGVzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlc1wiLFwibmFtZVwiOlwicGlsZXMuaW5kZXhcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlc1wiLFwibmFtZVwiOlwicGlsZXMuc3RvcmVcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVzXFwve3BpbGV9XCIsXCJuYW1lXCI6XCJwaWxlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlc1xcL3twaWxlfVwiLFwibmFtZVwiOlwicGlsZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZXNcXC97cGlsZX1cIixcIm5hbWVcIjpcInBpbGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZVxcL3twaWxlfVxcL3NpdGVzXCIsXCJuYW1lXCI6XCJwaWxlLnNpdGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVTaXRlc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlXFwve3BpbGV9XFwvc2l0ZXNcIixcIm5hbWVcIjpcInBpbGUuc2l0ZXMuc3RvcmVcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZVNpdGVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZVxcL3twaWxlfVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJwaWxlLnNpdGVzLnNob3dcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZVNpdGVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZVxcL3twaWxlfVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJwaWxlLnNpdGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlU2l0ZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZVxcL3twaWxlfVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJwaWxlLnNpdGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZVNpdGVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvY2hhbmdlLXBpbGVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlQ29udHJvbGxlckBjaGFuZ2VQaWxlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcIixcIm5hbWVcIjpcInNlcnZlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVwiLFwibmFtZVwiOlwic2VydmVycy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL2ZpbmQtZmlsZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAZmluZFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XFwvcmVsb2FkLWZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpbGVDb250cm9sbGVyQHJlbG9hZEZpbGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL2N1c3RvbVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckBnZW5lcmF0ZUN1c3RvbVNlcnZlclNoXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9hbGxfc2VydmVyc1xcL2J1b3lzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJCdW95Q29udHJvbGxlckBteVNlcnZlckJ1b3lzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwve3NlcnZlcn1cXC9maWxlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQGdldEZpbGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9yZXN0b3JlXFwve3NlcnZlcn1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAcmVzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XFwvZmlsZVxcL3NhdmVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAc2F2ZUZpbGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9kaXNrLXNwYWNlXFwve3NlcnZlcn1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAZ2V0RGlza1NwYWNlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwvcmVzdGFydC1zZXJ2ZXJcXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckByZXN0YXJ0U2VydmVyXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwvcmVzdGFydC1kYXRhYmFzZVxcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHJlc3RhcnREYXRhYmFzZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9yZXN0YXJ0LXdvcmtlcnNcXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckByZXN0YXJ0V29ya2VyU2VydmljZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9zc2gtY29ubmVjdGlvblxcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2hLZXlDb250cm9sbGVyQHRlc3RTU0hDb25uZWN0aW9uXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwvcmVzdGFydC13ZWItc2VydmljZXNcXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckByZXN0YXJ0V2ViU2VydmljZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpbGVcIixcIm5hbWVcIjpcInNlcnZlcnMuZmlsZS5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpbGVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlsZVwiLFwibmFtZVwiOlwic2VydmVycy5maWxlLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmlsZS5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmlsZS51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaWxlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmlsZS5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvYnVveXNcIixcIm5hbWVcIjpcInNlcnZlcnMuYnVveXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJCdW95Q29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2J1b3lzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmJ1b3lzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQnVveUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2J1b3lzXFwve2J1b3l9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmJ1b3lzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJCdW95Q29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvYnVveXNcXC97YnVveX1cIixcIm5hbWVcIjpcInNlcnZlcnMuYnVveXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQnVveUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9idW95c1xcL3tidW95fVwiLFwibmFtZVwiOlwic2VydmVycy5idW95cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQnVveUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2l0ZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuc2l0ZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTaXRlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NpdGVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNpdGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2l0ZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNpdGVzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTaXRlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2l0ZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2l0ZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwic2VydmVycy5zaXRlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2l0ZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvd29ya2Vyc1wiLFwibmFtZVwiOlwic2VydmVycy53b3JrZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyV29ya2VyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3dvcmtlcnNcIixcIm5hbWVcIjpcInNlcnZlcnMud29ya2Vycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlcldvcmtlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3dvcmtlcnNcXC97d29ya2VyfVwiLFwibmFtZVwiOlwic2VydmVycy53b3JrZXJzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJXb3JrZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC93b3JrZXJzXFwve3dvcmtlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMud29ya2Vycy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJXb3JrZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvd29ya2Vyc1xcL3t3b3JrZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLndvcmtlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlcldvcmtlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hc1wiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWFzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYXNcIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYXNcXC97c2NoZW1hfVwiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWFzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWFzXFwve3NjaGVtYX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hc1xcL3tzY2hlbWF9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZGFlbW9uc1wiLFwibmFtZVwiOlwic2VydmVycy5kYWVtb25zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRGFlbW9uc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9kYWVtb25zXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmRhZW1vbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJEYWVtb25zQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZGFlbW9uc1xcL3tkYWVtb259XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmRhZW1vbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckRhZW1vbnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9kYWVtb25zXFwve2RhZW1vbn1cIixcIm5hbWVcIjpcInNlcnZlcnMuZGFlbW9ucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJEYWVtb25zQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2RhZW1vbnNcXC97ZGFlbW9ufVwiLFwibmFtZVwiOlwic2VydmVycy5kYWVtb25zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJEYWVtb25zQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2gta2V5c1wiLFwibmFtZVwiOlwic2VydmVycy5zc2gta2V5cy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzaEtleUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2gta2V5c1wiLFwibmFtZVwiOlwic2VydmVycy5zc2gta2V5cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzaEtleUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzaC1rZXlzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2hLZXlDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic2VydmVycy5zc2gta2V5cy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2hLZXlDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc3NoLWtleXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzaEtleUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmVhdHVyZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuZmVhdHVyZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZlYXR1cmVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZlYXR1cmVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZlYXR1cmVzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmVhdHVyZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9mZWF0dXJlc1xcL3tmZWF0dXJlfVwiLFwibmFtZVwiOlwic2VydmVycy5mZWF0dXJlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvY3Jvbi1qb2JzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmNyb24tam9icy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNyb25Kb2JDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvY3Jvbi1qb2JzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmNyb24tam9icy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNyb25Kb2JDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9jcm9uLWpvYnNcXC97Y3Jvbl9qb2J9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmNyb24tam9icy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ3JvbkpvYkNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Nyb24tam9ic1xcL3tjcm9uX2pvYn1cIixcIm5hbWVcIjpcInNlcnZlcnMuY3Jvbi1qb2JzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNyb25Kb2JDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvY3Jvbi1qb2JzXFwve2Nyb25fam9ifVwiLFwibmFtZVwiOlwic2VydmVycy5jcm9uLWpvYnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNyb25Kb2JDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzbC1jZXJ0aWZpY2F0ZVwiLFwibmFtZVwiOlwic2VydmVycy5zc2wtY2VydGlmaWNhdGUuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2xDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NsLWNlcnRpZmljYXRlXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzbC1jZXJ0aWZpY2F0ZS5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzbENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzbC1jZXJ0aWZpY2F0ZVxcL3tzc2xfY2VydGlmaWNhdGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzbC1jZXJ0aWZpY2F0ZS5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NsQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NsLWNlcnRpZmljYXRlXFwve3NzbF9jZXJ0aWZpY2F0ZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc3NsLWNlcnRpZmljYXRlLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzbENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2wtY2VydGlmaWNhdGVcXC97c3NsX2NlcnRpZmljYXRlfVwiLFwibmFtZVwiOlwic2VydmVycy5zc2wtY2VydGlmaWNhdGUuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzbENvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hLXVzZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYS11c2Vycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYVVzZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hLXVzZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYS11c2Vycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYVVzZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWEtdXNlcnNcXC97c2NoZW1hX3VzZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYS11c2Vycy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hVXNlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYS11c2Vyc1xcL3tzY2hlbWFfdXNlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hLXVzZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYVVzZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hLXVzZXJzXFwve3NjaGVtYV91c2VyfVwiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWEtdXNlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYVVzZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpcmV3YWxsLXJ1bGVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpcmV3YWxsLXJ1bGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlyZXdhbGxSdWxlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpcmV3YWxsLXJ1bGVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpcmV3YWxsLXJ1bGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlyZXdhbGxSdWxlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlyZXdhbGwtcnVsZXNcXC97ZmlyZXdhbGxfcnVsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmlyZXdhbGwtcnVsZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpcmV3YWxsLXJ1bGVzXFwve2ZpcmV3YWxsX3J1bGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpcmV3YWxsLXJ1bGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maXJld2FsbC1ydWxlc1xcL3tmaXJld2FsbF9ydWxlfVwiLFwibmFtZVwiOlwic2VydmVycy5maXJld2FsbC1ydWxlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlyZXdhbGxSdWxlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9wcm92aXNpb24tc3RlcHNcIixcIm5hbWVcIjpcInNlcnZlcnMucHJvdmlzaW9uLXN0ZXBzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyUHJvdmlzaW9uU3RlcHNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvcHJvdmlzaW9uLXN0ZXBzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnByb3Zpc2lvbi1zdGVwcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclByb3Zpc2lvblN0ZXBzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvcHJvdmlzaW9uLXN0ZXBzXFwve3Byb3Zpc2lvbl9zdGVwfVwiLFwibmFtZVwiOlwic2VydmVycy5wcm92aXNpb24tc3RlcHMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclByb3Zpc2lvblN0ZXBzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvcHJvdmlzaW9uLXN0ZXBzXFwve3Byb3Zpc2lvbl9zdGVwfVwiLFwibmFtZVwiOlwic2VydmVycy5wcm92aXNpb24tc3RlcHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyUHJvdmlzaW9uU3RlcHNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvcHJvdmlzaW9uLXN0ZXBzXFwve3Byb3Zpc2lvbl9zdGVwfVwiLFwibmFtZVwiOlwic2VydmVycy5wcm92aXNpb24tc3RlcHMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclByb3Zpc2lvblN0ZXBzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9sYW5ndWFnZS1zZXR0aW5nc1wiLFwibmFtZVwiOlwic2VydmVycy5sYW5ndWFnZS1zZXR0aW5ncy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcIixcIm5hbWVcIjpcInNlcnZlcnMubGFuZ3VhZ2Utc2V0dGluZ3Muc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcXC97bGFuZ3VhZ2Vfc2V0dGluZ31cIixcIm5hbWVcIjpcInNlcnZlcnMubGFuZ3VhZ2Utc2V0dGluZ3Muc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9sYW5ndWFnZS1zZXR0aW5nc1xcL3tsYW5ndWFnZV9zZXR0aW5nfVwiLFwibmFtZVwiOlwic2VydmVycy5sYW5ndWFnZS1zZXR0aW5ncy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2xhbmd1YWdlLXNldHRpbmdzXFwve2xhbmd1YWdlX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmxhbmd1YWdlLXNldHRpbmdzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuZW52aXJvbm1lbnQtdmFyaWFibGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmVudmlyb25tZW50LXZhcmlhYmxlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXFwve2Vudmlyb25tZW50X3ZhcmlhYmxlfVwiLFwibmFtZVwiOlwic2VydmVycy5lbnZpcm9ubWVudC12YXJpYWJsZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXFwve2Vudmlyb25tZW50X3ZhcmlhYmxlfVwiLFwibmFtZVwiOlwic2VydmVycy5lbnZpcm9ubWVudC12YXJpYWJsZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXFwve2Vudmlyb25tZW50X3ZhcmlhYmxlfVwiLFwibmFtZVwiOlwic2VydmVycy5lbnZpcm9ubWVudC12YXJpYWJsZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL2xhbmd1YWdlLXNldHRpbmdzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBnZXRMYW5ndWFnZVNldHRpbmdzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1wiLFwibmFtZVwiOlwic2l0ZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1wiLFwibmFtZVwiOlwic2l0ZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwic2l0ZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInNpdGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9yZW5hbWVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZW5hbWVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvZmluZC1maWxlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQGZpbmRcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvd29ya2Zsb3dcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlV29ya2Zsb3dDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL3JlZnJlc2gtc3NoLWtleXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZWZyZXNoUHVibGljS2V5XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL3JlZnJlc2gtZGVwbG95LWtleVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHJlZnJlc2hEZXBsb3lLZXlcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9jbGVhci1jb21tYW5kc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJDb21tYW5kc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9yZWxvYWQtZmlsZVxcL3tmaWxlfVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQHJlbG9hZEZpbGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9kZXBsb3lcXC97c2l0ZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckBkZXBsb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yb2xsYmFja1xcL3tzaXRlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHJvbGxiYWNrXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvZGVwbG95bWVudC1zdGVwc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50U3RlcHNDb250cm9sbGVyQGdldERlcGxveW1lbnRTdGVwc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3Jlc3RhcnQtc2VydmVyXFwve3NpdGV9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAcmVzdGFydFNlcnZlclwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3Jlc3RhcnQtZGF0YWJhc2VcXC97c2l0ZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZXN0YXJ0RGF0YWJhc2VzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVzdGFydC13b3JrZXJzXFwve3NpdGV9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAcmVzdGFydFdvcmtlclNlcnZpY2VzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVzdGFydC13ZWItc2VydmljZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZXN0YXJ0V2ViU2VydmljZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZG5zXCIsXCJuYW1lXCI6XCJzaXRlcy5kbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURuc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Ruc1wiLFwibmFtZVwiOlwic2l0ZXMuZG5zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEbnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Ruc1xcL3tkbn1cIixcIm5hbWVcIjpcInNpdGVzLmRucy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEbnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Ruc1xcL3tkbn1cIixcIm5hbWVcIjpcInNpdGVzLmRucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURuc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Ruc1xcL3tkbn1cIixcIm5hbWVcIjpcInNpdGVzLmRucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEbnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlsZVwiLFwibmFtZVwiOlwic2l0ZXMuZmlsZS5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlsZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpbGVcIixcIm5hbWVcIjpcInNpdGVzLmZpbGUuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpcInNpdGVzLmZpbGUuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlsZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlsZVxcL3tmaWxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZmlsZS51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maWxlXFwve2ZpbGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5maWxlLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvYnVveXNcIixcIm5hbWVcIjpcInNpdGVzLmJ1b3lzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVCdW95Q29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvYnVveXNcIixcIm5hbWVcIjpcInNpdGVzLmJ1b3lzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVCdW95Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9idW95c1xcL3tidW95fVwiLFwibmFtZVwiOlwic2l0ZXMuYnVveXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQnVveUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvYnVveXNcXC97YnVveX1cIixcIm5hbWVcIjpcInNpdGVzLmJ1b3lzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQnVveUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2J1b3lzXFwve2J1b3l9XCIsXCJuYW1lXCI6XCJzaXRlcy5idW95cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVCdW95Q29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlcnNcIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlcnNcIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXJzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC93b3JrZXJzXCIsXCJuYW1lXCI6XCJzaXRlcy53b3JrZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVXb3JrZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC93b3JrZXJzXCIsXCJuYW1lXCI6XCJzaXRlcy53b3JrZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVXb3JrZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3dvcmtlcnNcXC97d29ya2VyfVwiLFwibmFtZVwiOlwic2l0ZXMud29ya2Vycy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVXb3JrZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3dvcmtlcnNcXC97d29ya2VyfVwiLFwibmFtZVwiOlwic2l0ZXMud29ya2Vycy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVdvcmtlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3dvcmtlcnNcXC97d29ya2VyfVwiLFwibmFtZVwiOlwic2l0ZXMud29ya2Vycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVXb3JrZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hc1wiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hc1wiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWFzXFwve3NjaGVtYX1cIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWFzXFwve3NjaGVtYX1cIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWFzXFwve3NjaGVtYX1cIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RhZW1vbnNcIixcIm5hbWVcIjpcInNpdGVzLmRhZW1vbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURhZW1vbnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kYWVtb25zXCIsXCJuYW1lXCI6XCJzaXRlcy5kYWVtb25zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEYWVtb25zQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kYWVtb25zXFwve2RhZW1vbn1cIixcIm5hbWVcIjpcInNpdGVzLmRhZW1vbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGFlbW9uc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGFlbW9uc1xcL3tkYWVtb259XCIsXCJuYW1lXCI6XCJzaXRlcy5kYWVtb25zLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGFlbW9uc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RhZW1vbnNcXC97ZGFlbW9ufVwiLFwibmFtZVwiOlwic2l0ZXMuZGFlbW9ucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEYWVtb25zQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzaC1rZXlzXCIsXCJuYW1lXCI6XCJzaXRlcy5zc2gta2V5cy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NoS2V5Q29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NoLWtleXNcIixcIm5hbWVcIjpcInNpdGVzLnNzaC1rZXlzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2hLZXlDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzaXRlcy5zc2gta2V5cy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2hLZXlDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzaXRlcy5zc2gta2V5cy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzaEtleUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzaXRlcy5zc2gta2V5cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2hLZXlDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvY3Jvbi1qb2JzXCIsXCJuYW1lXCI6XCJzaXRlcy5jcm9uLWpvYnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNyb25Kb2JDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9jcm9uLWpvYnNcIixcIm5hbWVcIjpcInNpdGVzLmNyb24tam9icy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ3JvbkpvYkNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvY3Jvbi1qb2JzXFwve2Nyb25fam9ifVwiLFwibmFtZVwiOlwic2l0ZXMuY3Jvbi1qb2JzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNyb25Kb2JDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Nyb24tam9ic1xcL3tjcm9uX2pvYn1cIixcIm5hbWVcIjpcInNpdGVzLmNyb24tam9icy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNyb25Kb2JDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9jcm9uLWpvYnNcXC97Y3Jvbl9qb2J9XCIsXCJuYW1lXCI6XCJzaXRlcy5jcm9uLWpvYnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ3JvbkpvYkNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2wtY2VydGlmaWNhdGVcIixcIm5hbWVcIjpcInNpdGVzLnNzbC1jZXJ0aWZpY2F0ZS5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NsQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NsLWNlcnRpZmljYXRlXCIsXCJuYW1lXCI6XCJzaXRlcy5zc2wtY2VydGlmaWNhdGUuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzbENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NsLWNlcnRpZmljYXRlXFwve3NzbF9jZXJ0aWZpY2F0ZX1cIixcIm5hbWVcIjpcInNpdGVzLnNzbC1jZXJ0aWZpY2F0ZS5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2xDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzbC1jZXJ0aWZpY2F0ZVxcL3tzc2xfY2VydGlmaWNhdGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5zc2wtY2VydGlmaWNhdGUudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2xDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2wtY2VydGlmaWNhdGVcXC97c3NsX2NlcnRpZmljYXRlfVwiLFwibmFtZVwiOlwic2l0ZXMuc3NsLWNlcnRpZmljYXRlLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzbENvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9saWZlLWxpbmVzXCIsXCJuYW1lXCI6XCJzaXRlcy5saWZlLWxpbmVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMaWZlbGluZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9saWZlLWxpbmVzXCIsXCJuYW1lXCI6XCJzaXRlcy5saWZlLWxpbmVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMaWZlbGluZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xpZmUtbGluZXNcXC97bGlmZV9saW5lfVwiLFwibmFtZVwiOlwic2l0ZXMubGlmZS1saW5lcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMaWZlbGluZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xpZmUtbGluZXNcXC97bGlmZV9saW5lfVwiLFwibmFtZVwiOlwic2l0ZXMubGlmZS1saW5lcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxpZmVsaW5lc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xpZmUtbGluZXNcXC97bGlmZV9saW5lfVwiLFwibmFtZVwiOlwic2l0ZXMubGlmZS1saW5lcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMaWZlbGluZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudHNcIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnRzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50c0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnRzXCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudHNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnRzXFwve2RlcGxveW1lbnR9XCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50cy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50c0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudHNcXC97ZGVwbG95bWVudH1cIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnRzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudHNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50c1xcL3tkZXBsb3ltZW50fVwiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudHMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudHNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hLXVzZXJzXCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWEtdXNlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYVVzZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWEtdXNlcnNcIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYS11c2Vycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hVXNlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hLXVzZXJzXFwve3NjaGVtYV91c2VyfVwiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hLXVzZXJzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYVVzZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYS11c2Vyc1xcL3tzY2hlbWFfdXNlcn1cIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYS11c2Vycy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYVVzZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWEtdXNlcnNcXC97c2NoZW1hX3VzZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWEtdXNlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hVXNlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9ob29rc1wiLFwibmFtZVwiOlwic2l0ZXMuaG9va3MuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcUmVwb3NpdG9yeVxcUmVwb3NpdG9yeUhvb2tDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9ob29rc1wiLFwibmFtZVwiOlwic2l0ZXMuaG9va3Muc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcUmVwb3NpdG9yeVxcUmVwb3NpdG9yeUhvb2tDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2hvb2tzXFwve2hvb2t9XCIsXCJuYW1lXCI6XCJzaXRlcy5ob29rcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFJlcG9zaXRvcnlcXFJlcG9zaXRvcnlIb29rQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9ob29rc1xcL3tob29rfVwiLFwibmFtZVwiOlwic2l0ZXMuaG9va3MudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFJlcG9zaXRvcnlcXFJlcG9zaXRvcnlIb29rQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvaG9va3NcXC97aG9va31cIixcIm5hbWVcIjpcInNpdGVzLmhvb2tzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcUmVwb3NpdG9yeVxcUmVwb3NpdG9yeUhvb2tDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlyZXdhbGwtcnVsZXNcIixcIm5hbWVcIjpcInNpdGVzLmZpcmV3YWxsLXJ1bGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaXJld2FsbFJ1bGVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maXJld2FsbC1ydWxlc1wiLFwibmFtZVwiOlwic2l0ZXMuZmlyZXdhbGwtcnVsZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlyZXdhbGwtcnVsZXNcXC97ZmlyZXdhbGxfcnVsZX1cIixcIm5hbWVcIjpcInNpdGVzLmZpcmV3YWxsLXJ1bGVzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlyZXdhbGwtcnVsZXNcXC97ZmlyZXdhbGxfcnVsZX1cIixcIm5hbWVcIjpcInNpdGVzLmZpcmV3YWxsLXJ1bGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlyZXdhbGxSdWxlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlyZXdhbGwtcnVsZXNcXC97ZmlyZXdhbGxfcnVsZX1cIixcIm5hbWVcIjpcInNpdGVzLmZpcmV3YWxsLXJ1bGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXItZmVhdHVyZXNcIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlci1mZWF0dXJlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXItZmVhdHVyZXNcIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlci1mZWF0dXJlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlci1mZWF0dXJlc1xcL3tzZXJ2ZXJfdHlwZX1cIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlci1mZWF0dXJlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyLWZlYXR1cmVzXFwve3NlcnZlcl90eXBlfVwiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVyLWZlYXR1cmVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXItZmVhdHVyZXNcXC97c2VydmVyX3R5cGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXItZmVhdHVyZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudC1zdGVwc1wiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudC1zdGVwcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudFN0ZXBzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudC1zdGVwc1wiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudC1zdGVwcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudFN0ZXBzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50LXN0ZXBzXFwve2RlcGxveW1lbnRfc3RlcH1cIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnQtc3RlcHMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudFN0ZXBzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50LXN0ZXBzXFwve2RlcGxveW1lbnRfc3RlcH1cIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnQtc3RlcHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50U3RlcHNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50LXN0ZXBzXFwve2RlcGxveW1lbnRfc3RlcH1cIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnQtc3RlcHMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudFN0ZXBzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xhbmd1YWdlLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJzaXRlcy5sYW5ndWFnZS1zZXR0aW5ncy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xhbmd1YWdlLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJzaXRlcy5sYW5ndWFnZS1zZXR0aW5ncy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcXC97bGFuZ3VhZ2Vfc2V0dGluZ31cIixcIm5hbWVcIjpcInNpdGVzLmxhbmd1YWdlLXNldHRpbmdzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xhbmd1YWdlLXNldHRpbmdzXFwve2xhbmd1YWdlX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJzaXRlcy5sYW5ndWFnZS1zZXR0aW5ncy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9sYW5ndWFnZS1zZXR0aW5nc1xcL3tsYW5ndWFnZV9zZXR0aW5nfVwiLFwibmFtZVwiOlwic2l0ZXMubGFuZ3VhZ2Utc2V0dGluZ3MuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcIixcIm5hbWVcIjpcInNpdGVzLmVudmlyb25tZW50LXZhcmlhYmxlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcIixcIm5hbWVcIjpcInNpdGVzLmVudmlyb25tZW50LXZhcmlhYmxlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1xcL3tlbnZpcm9ubWVudF92YXJpYWJsZX1cIixcIm5hbWVcIjpcInNpdGVzLmVudmlyb25tZW50LXZhcmlhYmxlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXFwve2Vudmlyb25tZW50X3ZhcmlhYmxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZW52aXJvbm1lbnQtdmFyaWFibGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcXC97ZW52aXJvbm1lbnRfdmFyaWFibGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5lbnZpcm9ubWVudC12YXJpYWJsZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9sYW5ndWFnZS1zZXR0aW5nc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBnZXRMYW5ndWFnZVNldHRpbmdzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3MuaW5kZXhcIixcImFjdGlvblwiOlwiTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIk5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5zaG93XCIsXCJhY3Rpb25cIjpcIk5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy51cGRhdGVcIixcImFjdGlvblwiOlwiTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIk5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvdHlwZXNcIixcIm5hbWVcIjpcInR5cGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyVHlwZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3R5cGVzXCIsXCJuYW1lXCI6XCJ0eXBlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclR5cGVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3R5cGVzXFwve3R5cGV9XCIsXCJuYW1lXCI6XCJ0eXBlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyVHlwZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvdHlwZXNcXC97dHlwZX1cIixcIm5hbWVcIjpcInR5cGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclR5cGVzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC90eXBlc1xcL3t0eXBlfVwiLFwibmFtZVwiOlwidHlwZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclR5cGVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvZmVhdHVyZXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZlYXR1cmVDb250cm9sbGVyQGdldEZlYXR1cmVzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvbGFuZ3VhZ2VzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBnZXRMYW5ndWFnZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9mcmFtZXdvcmtzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBnZXRGcmFtZXdvcmtzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2l0ZVxcL3tzaXRlfVxcL2VkaXRhYmxlLWZpbGVzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZlYXR1cmVDb250cm9sbGVyQGdldEVkaXRhYmxlRmlsZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL2VkaXRhYmxlLWZpbGVzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBnZXRFZGl0YWJsZUZpbGVzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2l0ZVxcL3tzaXRlfVxcL2ZyYW1ld29ya1xcL2VkaXRhYmxlLWZpbGVzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZlYXR1cmVDb250cm9sbGVyQGdldEVkaXRhYmxlRnJhbWV3b3JrRmlsZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvc2VydmVyLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFNlcnZlclByb3ZpZGVyc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3NlcnZlci1wcm92aWRlcnNcIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxTZXJ2ZXJQcm92aWRlcnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3NlcnZlci1wcm92aWRlcnNcXC97c2VydmVyX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5zaG93XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcU2VydmVyUHJvdmlkZXJzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9zZXJ2ZXItcHJvdmlkZXJzXFwve3NlcnZlcl9wcm92aWRlcn1cIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcU2VydmVyUHJvdmlkZXJzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvc2VydmVyLXByb3ZpZGVyc1xcL3tzZXJ2ZXJfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxTZXJ2ZXJQcm92aWRlcnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcUmVwb3NpdG9yeVByb3ZpZGVyc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3JlcG9zaXRvcnktcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFJlcG9zaXRvcnlQcm92aWRlcnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3JlcG9zaXRvcnktcHJvdmlkZXJzXFwve3JlcG9zaXRvcnlfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy5zaG93XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcUmVwb3NpdG9yeVByb3ZpZGVyc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcXC97cmVwb3NpdG9yeV9wcm92aWRlcn1cIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFJlcG9zaXRvcnlQcm92aWRlcnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1xcL3tyZXBvc2l0b3J5X3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFJlcG9zaXRvcnlQcm92aWRlcnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXE5vdGlmaWNhdGlvblByb3ZpZGVyc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxOb3RpZmljYXRpb25Qcm92aWRlcnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcXC97bm90aWZpY2F0aW9uX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy5zaG93XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcTm90aWZpY2F0aW9uUHJvdmlkZXJzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXFwve25vdGlmaWNhdGlvbl9wcm92aWRlcn1cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcTm90aWZpY2F0aW9uUHJvdmlkZXJzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1xcL3tub3RpZmljYXRpb25fcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxOb3RpZmljYXRpb25Qcm92aWRlcnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9vcHRpb25zXCIsXCJuYW1lXCI6XCJvcHRpb25zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlck9wdGlvbnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL29wdGlvbnNcIixcIm5hbWVcIjpcIm9wdGlvbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9vcHRpb25zXFwve29wdGlvbn1cIixcIm5hbWVcIjpcIm9wdGlvbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJPcHRpb25zQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL29wdGlvbnNcXC97b3B0aW9ufVwiLFwibmFtZVwiOlwib3B0aW9ucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvb3B0aW9uc1xcL3tvcHRpb259XCIsXCJuYW1lXCI6XCJvcHRpb25zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL3JlZ2lvbnNcIixcIm5hbWVcIjpcInJlZ2lvbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvcmVnaW9uc1wiLFwibmFtZVwiOlwicmVnaW9ucy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL3JlZ2lvbnNcXC97cmVnaW9ufVwiLFwibmFtZVwiOlwicmVnaW9ucy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlclJlZ2lvbnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvcmVnaW9uc1xcL3tyZWdpb259XCIsXCJuYW1lXCI6XCJyZWdpb25zLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJSZWdpb25zQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9yZWdpb25zXFwve3JlZ2lvbn1cIixcIm5hbWVcIjpcInJlZ2lvbnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvZmVhdHVyZXNcIixcIm5hbWVcIjpcImZlYXR1cmVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9mZWF0dXJlc1wiLFwibmFtZVwiOlwiZmVhdHVyZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcImZlYXR1cmVzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcImZlYXR1cmVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcImZlYXR1cmVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9wcm92aWRlclwiLFwibmFtZVwiOlwicHJvdmlkZXIuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9wcm92aWRlclwiLFwibmFtZVwiOlwicHJvdmlkZXIuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3Byb3ZpZGVyXFwve3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicHJvdmlkZXIuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcHJvdmlkZXJcXC97cHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJwcm92aWRlci51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9wcm92aWRlclxcL3twcm92aWRlcn1cIixcIm5hbWVcIjpcInByb3ZpZGVyLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvb3B0aW9uc1wiLFwibmFtZVwiOlwib3B0aW9ucy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJPcHRpb25zQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9vcHRpb25zXCIsXCJuYW1lXCI6XCJvcHRpb25zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlck9wdGlvbnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvb3B0aW9uc1xcL3tvcHRpb259XCIsXCJuYW1lXCI6XCJvcHRpb25zLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9vcHRpb25zXFwve29wdGlvbn1cIixcIm5hbWVcIjpcIm9wdGlvbnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlck9wdGlvbnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL29wdGlvbnNcXC97b3B0aW9ufVwiLFwibmFtZVwiOlwib3B0aW9ucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlck9wdGlvbnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9yZWdpb25zXCIsXCJuYW1lXCI6XCJyZWdpb25zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlclJlZ2lvbnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3JlZ2lvbnNcIixcIm5hbWVcIjpcInJlZ2lvbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9yZWdpb25zXFwve3JlZ2lvbn1cIixcIm5hbWVcIjpcInJlZ2lvbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3JlZ2lvbnNcXC97cmVnaW9ufVwiLFwibmFtZVwiOlwicmVnaW9ucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcmVnaW9uc1xcL3tyZWdpb259XCIsXCJuYW1lXCI6XCJyZWdpb25zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL2ZlYXR1cmVzXCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvZmVhdHVyZXNcIixcIm5hbWVcIjpcImZlYXR1cmVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJmZWF0dXJlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwibG9naW5cIixcIm5hbWVcIjpcImxvZ2luXCIsXCJhY3Rpb25cIjpcIkF1dGhcXExvZ2luQ29udHJvbGxlckBzaG93TG9naW5Gb3JtXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImxvZ2luXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQXV0aFxcTG9naW5Db250cm9sbGVyQGxvZ2luXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImxvZ291dFwiLFwibmFtZVwiOlwibG9nb3V0XCIsXCJhY3Rpb25cIjpcIkF1dGhcXExvZ2luQ29udHJvbGxlckBsb2dvdXRcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwicmVnaXN0ZXJcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxSZWdpc3RlckNvbnRyb2xsZXJAcmVnaXN0ZXJcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwicGFzc3dvcmRcXC9lbWFpbFwiLFwibmFtZVwiOlwicGFzc3dvcmQuZW1haWxcIixcImFjdGlvblwiOlwiQXV0aFxcRm9yZ290UGFzc3dvcmRDb250cm9sbGVyQHNlbmRSZXNldExpbmtFbWFpbFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInBhc3N3b3JkXFwvcmVzZXRcXC97dG9rZW59XCIsXCJuYW1lXCI6XCJwYXNzd29yZC5yZXNldFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxSZXNldFBhc3N3b3JkQ29udHJvbGxlckBzaG93UmVzZXRGb3JtXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInBhc3N3b3JkXFwvcmVzZXRcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxSZXNldFBhc3N3b3JkQ29udHJvbGxlckByZXNldFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInByb3ZpZGVyXFwve3Byb3ZpZGVyfVxcL2xpbmtcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxPYXV0aENvbnRyb2xsZXJAbmV3UHJvdmlkZXJcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJwcm92aWRlclxcL3twcm92aWRlcn1cXC9jYWxsYmFja1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkF1dGhcXE9hdXRoQ29udHJvbGxlckBnZXRIYW5kbGVQcm92aWRlckNhbGxiYWNrXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInN0cmlwZVxcL3dlYmhvb2tcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXENhc2hpZXJcXEh0dHBcXENvbnRyb2xsZXJzXFxXZWJob29rQ29udHJvbGxlckBoYW5kbGVXZWJob29rXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcIixcIm5hbWVcIjpcInBsYW5zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJzdWJzY3JpcHRpb25cXC9wbGFuc1xcL2NyZWF0ZVwiLFwibmFtZVwiOlwicGxhbnMuY3JlYXRlXCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAY3JlYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInN1YnNjcmlwdGlvblxcL3BsYW5zXCIsXCJuYW1lXCI6XCJwbGFucy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTdWJzY3JpcHRpb25Db250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcXC97cGxhbn1cIixcIm5hbWVcIjpcInBsYW5zLnNob3dcIixcImFjdGlvblwiOlwiU3Vic2NyaXB0aW9uQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcXC97cGxhbn1cXC9lZGl0XCIsXCJuYW1lXCI6XCJwbGFucy5lZGl0XCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAZWRpdFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJzdWJzY3JpcHRpb25cXC9wbGFuc1xcL3twbGFufVwiLFwibmFtZVwiOlwicGxhbnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcXC97cGxhbn1cIixcIm5hbWVcIjpcInBsYW5zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU3Vic2NyaXB0aW9uQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiLFwiUE9TVFwiLFwiUFVUXCIsXCJQQVRDSFwiLFwiREVMRVRFXCJdLFwidXJpXCI6XCJ3ZWJob29rXFwvZGVwbG95XFwve3NpdGVIYXNoSWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiV2ViSG9va0NvbnRyb2xsZXJAZGVwbG95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiLFwiUE9TVFwiLFwiUFVUXCIsXCJQQVRDSFwiLFwiREVMRVRFXCJdLFwidXJpXCI6XCJ3ZWJob29rXFwvc2VydmVyXFwve3NlcnZlckhhc2hJZH1cXC9zc2xcXC91cGRhdGVkXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiV2ViSG9va0NvbnRyb2xsZXJAc2VydmVyU3NsQ2VydGlmaWNhdGVVcGRhdGVkXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwid2ViaG9va1xcL3thbnl9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQ29udHJvbGxlckByZWRpcmVjdFRvQXBwXCJ9LHtcImhvc3RcIjpcInN0YXRzLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwid2ViaG9va1xcL2xvYWRzXFwve3NlcnZlckhhc2hJZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJXZWJIb29rQ29udHJvbGxlckBsb2FkTW9uaXRvclwifSx7XCJob3N0XCI6XCJzdGF0cy5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIndlYmhvb2tcXC9tZW1vcnlcXC97c2VydmVySGFzaElkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIldlYkhvb2tDb250cm9sbGVyQG1lbW9yeU1vbml0b3JcIn0se1wiaG9zdFwiOlwic3RhdHMuY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ3ZWJob29rXFwvZGlza3VzYWdlXFwve3NlcnZlckhhc2hJZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJXZWJIb29rQ29udHJvbGxlckBkaXNrVXNhZ2VNb25pdG9yXCJ9LHtcImhvc3RcIjpcInN0YXRzLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwid2ViaG9va1xcL3thbnl9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQ29udHJvbGxlckByZWRpcmVjdFRvQXBwXCJ9LHtcImhvc3RcIjpcImxpZmVsaW5lLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwie2xpZmVsaW5lSGFzaElkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkxpZmVMaW5lQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOlwibGlmZWxpbmUuY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ7YW55fVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkNvbnRyb2xsZXJAcmVkaXJlY3RUb0FwcFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInRlYW1zXFwvYWNjZXB0XFwve3Rva2VufVwiLFwibmFtZVwiOlwidGVhbXMuYWNjZXB0X2ludml0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbUNvbnRyb2xsZXJAYWNjZXB0SW52aXRlXCJ9LHtcImhvc3RcIjpcInN0eWxlLWd1aWRlLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiXFwvXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiUHVibGljQ29udHJvbGxlckBzdHlsZUd1aWRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwicHJpdmFjeVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlB1YmxpY0NvbnRyb2xsZXJAcHJpdmFjeVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJzdWJzY3JpYmVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJQdWJsaWNDb250cm9sbGVyQHN1YnNjcmliZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInRlcm1zLW9mLXNlcnZpY2VcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJQdWJsaWNDb250cm9sbGVyQHRlcm1zT2ZTZXJ2aWNlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiXFwvXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQ29udHJvbGxlckBhcHBcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJzZWNvbmQtYXV0aFwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkF1dGhcXFNlY29uZEF1dGhDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwic2Vjb25kLWF1dGhcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInNsYWNrLWludml0ZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQHNsYWNrSW52aXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvaW52b2ljZXNcXC97aW52b2ljZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25JbnZvaWNlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwie2FueX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJDb250cm9sbGVyQGFwcFwifV0sXG4gICAgICAgICAgICBwcmVmaXg6ICcnLFxuXG4gICAgICAgICAgICByb3V0ZSA6IGZ1bmN0aW9uIChuYW1lLCBwYXJhbWV0ZXJzLCByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGUgfHwgdGhpcy5nZXRCeU5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoICEgcm91dGUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Sb3V0ZShyb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cmw6IGZ1bmN0aW9uICh1cmwsIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycyB8fCBbXTtcblxuICAgICAgICAgICAgICAgIHZhciB1cmkgPSB1cmwgKyAnLycgKyBwYXJhbWV0ZXJzLmpvaW4oJy8nKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvcnJlY3RVcmwodXJpKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRvUm91dGUgOiBmdW5jdGlvbiAocm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXJpID0gdGhpcy5yZXBsYWNlTmFtZWRQYXJhbWV0ZXJzKHJvdXRlLnVyaSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgdmFyIHFzICA9IHRoaXMuZ2V0Um91dGVRdWVyeVN0cmluZyhwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFic29sdXRlICYmIHRoaXMuaXNPdGhlckhvc3Qocm91dGUpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiLy9cIiArIHJvdXRlLmhvc3QgKyBcIi9cIiArIHVyaSArIHFzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvcnJlY3RVcmwodXJpICsgcXMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNPdGhlckhvc3Q6IGZ1bmN0aW9uIChyb3V0ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlLmhvc3QgJiYgcm91dGUuaG9zdCAhPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXBsYWNlTmFtZWRQYXJhbWV0ZXJzIDogZnVuY3Rpb24gKHVyaSwgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXHsoLio/KVxcPz9cXH0vZywgZnVuY3Rpb24obWF0Y2gsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJhbWV0ZXJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyYW1ldGVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdHJpcCBvdXQgYW55IG9wdGlvbmFsIHBhcmFtZXRlcnMgdGhhdCB3ZXJlIG5vdCBnaXZlblxuICAgICAgICAgICAgICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXC9cXHsuKj9cXD9cXH0vZywgJycpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVyaTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldFJvdXRlUXVlcnlTdHJpbmcgOiBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIHZhciBxcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHFzLnB1c2goa2V5ICsgJz0nICsgcGFyYW1ldGVyc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChxcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJz8nICsgcXMuam9pbignJicpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0QnlOYW1lIDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5yb3V0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm91dGVzLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpcy5yb3V0ZXNba2V5XS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEJ5QWN0aW9uIDogZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMucm91dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHRoaXMucm91dGVzW2tleV0uYWN0aW9uID09PSBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0Q29ycmVjdFVybDogZnVuY3Rpb24gKHVyaSkge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLnByZWZpeCArICcvJyArIHVyaS5yZXBsYWNlKC9eXFwvPy8sICcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggISB0aGlzLmFic29sdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdFVybC5yZXBsYWNlKCcvXFwvPyQvJywgJycpICsgdXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBnZXRMaW5rQXR0cmlidXRlcyA9IGZ1bmN0aW9uKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICggISBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXR0cnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKGtleSArICc9XCInICsgYXR0cmlidXRlc1trZXldICsgJ1wiJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0cnMuam9pbignICcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBnZXRIdG1sTGluayA9IGZ1bmN0aW9uICh1cmwsIHRpdGxlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICB0aXRsZSAgICAgID0gdGl0bGUgfHwgdXJsO1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IGdldExpbmtBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gJzxhIGhyZWY9XCInICsgdXJsICsgJ1wiICcgKyBhdHRyaWJ1dGVzICsgJz4nICsgdGl0bGUgKyAnPC9hPic7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgdXJsIGZvciBhIGdpdmVuIGNvbnRyb2xsZXIgYWN0aW9uLlxuICAgICAgICAgICAgLy8gbGFyb3V0ZS5hY3Rpb24oJ0hvbWVDb250cm9sbGVyQGdldEluZGV4JywgW3BhcmFtcyA9IHt9XSlcbiAgICAgICAgICAgIGFjdGlvbiA6IGZ1bmN0aW9uIChuYW1lLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMgfHwge307XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVzLnJvdXRlKG5hbWUsIHBhcmFtZXRlcnMsIHJvdXRlcy5nZXRCeUFjdGlvbihuYW1lKSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIHVybCBmb3IgYSBnaXZlbiBuYW1lZCByb3V0ZS5cbiAgICAgICAgICAgIC8vIGxhcm91dGUucm91dGUoJ3JvdXRlTmFtZScsIFtwYXJhbXMgPSB7fV0pXG4gICAgICAgICAgICByb3V0ZSA6IGZ1bmN0aW9uIChyb3V0ZSwgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlcy5yb3V0ZShyb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIGZ1bGx5IHF1YWxpZmllZCBVUkwgdG8gdGhlIGdpdmVuIHBhdGguXG4gICAgICAgICAgICAvLyBsYXJvdXRlLnJvdXRlKCd1cmwnLCBbcGFyYW1zID0ge31dKVxuICAgICAgICAgICAgdXJsIDogZnVuY3Rpb24gKHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMgfHwge307XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVzLnVybChyb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIGh0bWwgbGluayB0byB0aGUgZ2l2ZW4gdXJsLlxuICAgICAgICAgICAgLy8gbGFyb3V0ZS5saW5rX3RvKCdmb28vYmFyJywgW3RpdGxlID0gdXJsXSwgW2F0dHJpYnV0ZXMgPSB7fV0pXG4gICAgICAgICAgICBsaW5rX3RvIDogZnVuY3Rpb24gKHVybCwgdGl0bGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLnVybCh1cmwpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEh0bWxMaW5rKHVybCwgdGl0bGUsIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBodG1sIGxpbmsgdG8gdGhlIGdpdmVuIHJvdXRlLlxuICAgICAgICAgICAgLy8gbGFyb3V0ZS5saW5rX3RvX3JvdXRlKCdyb3V0ZS5uYW1lJywgW3RpdGxlPXVybF0sIFtwYXJhbWV0ZXJzID0ge31dLCBbYXR0cmlidXRlcyA9IHt9XSlcbiAgICAgICAgICAgIGxpbmtfdG9fcm91dGUgOiBmdW5jdGlvbiAocm91dGUsIHRpdGxlLCBwYXJhbWV0ZXJzLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMucm91dGUocm91dGUsIHBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEh0bWxMaW5rKHVybCwgdGl0bGUsIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBodG1sIGxpbmsgdG8gdGhlIGdpdmVuIGNvbnRyb2xsZXIgYWN0aW9uLlxuICAgICAgICAgICAgLy8gbGFyb3V0ZS5saW5rX3RvX2FjdGlvbignSG9tZUNvbnRyb2xsZXJAZ2V0SW5kZXgnLCBbdGl0bGU9dXJsXSwgW3BhcmFtZXRlcnMgPSB7fV0sIFthdHRyaWJ1dGVzID0ge31dKVxuICAgICAgICAgICAgbGlua190b19hY3Rpb24gOiBmdW5jdGlvbihhY3Rpb24sIHRpdGxlLCBwYXJhbWV0ZXJzLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuYWN0aW9uKGFjdGlvbiwgcGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SHRtbExpbmsodXJsLCB0aXRsZSwgYXR0cmlidXRlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgIH0pLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2UgdGhlIGNsYXNzIGVpdGhlciB2aWEgQU1ELCBDb21tb25KUyBvciB0aGUgZ2xvYmFsIG9iamVjdFxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXJvdXRlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGxhcm91dGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cubGFyb3V0ZSA9IGxhcm91dGU7XG4gICAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhcm91dGUuanMiLCJleHBvcnQgY29uc3Qgbm93ID0gKCkgPT4ge1xuICByZXR1cm4gbW9tZW50KCk7XG59O1xuXG5leHBvcnQgY29uc3QgcGFyc2VEYXRlID0gZGF0ZSA9PiB7XG4gIHJldHVybiBtb21lbnQoZGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGlmZiA9IChkYXRlMSwgZGF0ZTIpID0+IHtcbiAgcmV0dXJuIG1vbWVudChkYXRlMikucHJlY2lzZURpZmYobW9tZW50KGRhdGUxKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9kYXRlLXRpbWUvaW5kZXguanMiLCJleHBvcnQgY29uc3QgbG9jYWwgPSAoKSA9PiB7XG4gIHJldHVybiBMYXJhdmVsLmVudiA9PT0gJ2xvY2FsJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL2Vudmlyb25tZW50L2luZGV4LmpzIiwiLy8gTk9URSAtIHRoaXMgd2lsbCBub3Qgd29yayB3aXRoIFBVVCEhIVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N5bWZvbnkvc3ltZm9ueS9pc3N1ZXMvOTIyNlxuZXhwb3J0IGNvbnN0IGdldEZvcm1EYXRhID0gZnVuY3Rpb24oZm9ybSkge1xuICBpZiAoISQoZm9ybSkuaXMoXCJmb3JtXCIpKSB7XG4gICAgZm9ybSA9ICQoZm9ybSkuZmluZChcImZvcm1cIilbMF07XG4gIH1cbiAgcmV0dXJuIG5ldyBGb3JtRGF0YShmb3JtKTtcbn07XG5cbmltcG9ydCBGb3JtIGZyb20gXCIuLi8uLi8uLi9jbGFzc2VzL0Zvcm1cIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvcm0gPSAoZGF0YSwgcmVzZXQpID0+IHtcbiAgcmV0dXJuIG5ldyBGb3JtKGRhdGEsIHJlc2V0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL2Zvcm0vaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVGb3JtLCBnZXRGb3JtRGF0YSB9IGZyb20gXCIuL2Zvcm1cIjtcblxuaW1wb3J0IHsgYmFjaywgYWN0aW9uIH0gZnJvbSBcIi4vcm91dGVzXCI7XG5cbmltcG9ydCB7IG5vdywgZGlmZiwgcGFyc2VEYXRlIH0gZnJvbSBcIi4vZGF0ZS10aW1lXCI7XG5cbmltcG9ydCB7IGxvY2FsIH0gZnJvbSBcIi4vZW52aXJvbm1lbnRcIjtcblxuaW1wb3J0IHsgaXNBZG1pbiB9IGZyb20gXCIuL3Blcm1pc3Npb25zXCI7XG5cbmltcG9ydCB7IHNob3dFcnJvciwgc2hvd1N1Y2Nlc3MsIGhhbmRsZUFwaUVycm9yIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuXG5WdWUubWl4aW4oe1xuICBtZXRob2RzOiB7XG4gICAgbm93LFxuICAgIGJhY2ssXG4gICAgZGlmZixcbiAgICBhY3Rpb24sXG4gICAgc2hvd0Vycm9yLFxuICAgIHBhcnNlRGF0ZSxcbiAgICBjcmVhdGVGb3JtLFxuICAgIHNob3dTdWNjZXNzLFxuICAgIGdldEZvcm1EYXRhLFxuICAgIGhhbmRsZUFwaUVycm9yLFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxvY2FsLFxuICAgIGlzQWRtaW4sXG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBzaG93RXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlLCB0aXRsZSwgdGltZW91dCkge1xuICBpZiAodGltZW91dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGltZW91dCA9IDUwMDA7XG4gIH1cblxuICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcIm5vdGlmaWNhdGlvbnMvYWRkXCIsIHtcbiAgICB0aXRsZTogIV8uaXNFbXB0eSh0aXRsZSkgPyB0aXRsZSA6IFwiRXJyb3IhIVwiLFxuICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgY2xhc3M6IFwiZXJyb3JcIixcbiAgICB0aW1lb3V0OiB0aW1lb3V0XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBzaG93U3VjY2VzcyA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHRpdGxlLCB0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aW1lb3V0ID0gNTAwMDtcbiAgfVxuXG4gIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwibm90aWZpY2F0aW9ucy9hZGRcIiwge1xuICAgIHRpdGxlOiAhXy5pc0VtcHR5KHRpdGxlKSA/IHRpdGxlIDogXCJTdWNjZXNzISFcIixcbiAgICB0ZXh0OiBtZXNzYWdlLFxuICAgIGNsYXNzOiBcInN1Y2Nlc3NcIixcbiAgICB0aW1lb3V0OiB0aW1lb3V0XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFwaUVycm9yID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgbGV0IG1lc3NhZ2UgPSByZXNwb25zZTtcblxuICBpZiAoXy5pc09iamVjdChyZXNwb25zZSkpIHtcbiAgICBpZiAoXy5pc1NldChyZXNwb25zZS5lcnJvcnMpKSB7XG4gICAgICBtZXNzYWdlID0gcmVzcG9uc2UuZXJyb3JzO1xuICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdChyZXNwb25zZS5kYXRhKSkge1xuICAgICAgbWVzc2FnZSA9IFwiXCI7XG4gICAgICBfLmVhY2gocmVzcG9uc2UuZGF0YS5lcnJvcnMsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gZXJyb3IgKyBcIjxicj5cIjtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlID0gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG4gIH1cblxuICBpZiAoXy5pc1N0cmluZyhtZXNzYWdlKSkge1xuICAgIHRoaXMuc2hvd0Vycm9yKG1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybihcIlVOQUJMRSBUTyBQQVJTRSBFUlJPUlwiKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvbm90aWZpY2F0aW9ucy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBpc0FkbWluID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIucm9sZSA9PT0gXCJhZG1pblwiO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL3Blcm1pc3Npb25zL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGJhY2sgPSAoKSA9PiB7XG4gIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSAoYWN0aW9uLCBwYXJhbWV0ZXJzKSA9PiB7XG4gIC8vIHJldHVybiBsYXJvdXRlLmFjdGlvbihhY3Rpb24sIHBhcmFtZXRlcnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvcm91dGVzL2luZGV4LmpzIiwicmVxdWlyZShcIi4vaGVscGVyc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2luZGV4LmpzIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHJvdXRlcyB9IGZyb20gXCIuLi9hcHAvcm91dGVzLmpzXCI7XG5cbndpbmRvdy5WdWVSb3V0ZXIgPSByZXF1aXJlKFwidnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuY29tbW9uXCIpO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICBtb2RlOiBcImhpc3RvcnlcIixcbiAgcm91dGVzOiByb3V0ZXNcbn0pO1xuXG5yb3V0ZXIuYmVmb3JlUmVzb2x2ZSgodG8sIGZyb20sIG5leHQpID0+IHtcbiAgLy8gaWYgKCFzdG9yZS5zdGF0ZS51c2VyLnVzZXIuaXNfc3Vic2NyaWJlZCkge1xuICAvLyAgIGlmICh0by5uYW1lICE9PSBcInN1YnNjcmlwdGlvblwiKSB7XG4gIC8vICAgICBuZXh0KHtcbiAgLy8gICAgICAgbmFtZTogXCJzdWJzY3JpcHRpb25cIlxuICAvLyAgICAgfSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIG5leHQoKTtcbiAgLy8gICB9XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgbmV4dCgpO1xuICAvLyB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb3V0ZXIvaW5kZXguanMiLCJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBWdWV4IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi8uLi9jbGFzc2VzL0Zvcm1cIjtcbmltcG9ydCBFcnJvcnMgZnJvbSBcIi4vLi4vY2xhc3Nlcy9FcnJvcnNcIjtcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCIuLi9taXhpbnMvaGVscGVycy9yb3V0ZXNcIjtcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLy4uL2NsYXNzZXMvUmVxdWVzdFwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBtb2R1bGVzIH0gZnJvbSBcIi4vbW9kdWxlc1wiO1xuXG5WdWUudXNlKFZ1ZXgpO1xuVnVlLkZvcm0gPSBGb3JtO1xuVnVlLkVycm9ycyA9IEVycm9ycztcblZ1ZS5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuVnVlLmFjdGlvbiA9IGFjdGlvbjtcblxuVnVlLnJlcXVlc3QgPSBkYXRhID0+IHtcbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KGRhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBtb2R1bGVzOiBtb2R1bGVzXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvaW5kZXguanMiLCJleHBvcnQgY29uc3QgbG9nb3V0ID0gKGNvbnRleHQsIGRhdGEpID0+IHtcbiAgcmV0dXJuIFZ1ZS5yZXF1ZXN0KGRhdGEpXG4gICAgLnBvc3QoVnVlLmFjdGlvbihcIkF1dGhMb2dpbkNvbnRyb2xsZXJAbG9nb3V0XCIpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL1wiO1xuICAgIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvYXV0aC9hY3Rpb25zLmpzIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tIFwiLi9tdXRhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL2F1dGgvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL3N0YXRlLmpzIiwiaW1wb3J0IGF1dGggZnJvbSBcIi4vYXV0aFwiO1xuaW1wb3J0IHN5c3RlbSBmcm9tIFwiLi9zeXN0ZW1cIjtcbmltcG9ydCBub3RpZmljYXRpb25zIGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhdXRoLFxuICBzeXN0ZW0sXG4gIG5vdGlmaWNhdGlvbnMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGFkZCA9ICh7IGNvbW1pdCB9LCBub3RpZmljYXRpb24pID0+IHtcbiAgY29tbWl0KFwiYWRkXCIsIG5vdGlmaWNhdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKHsgY29tbWl0IH0sIG5vdGlmaWNhdGlvbikgPT4ge1xuICBjb21taXQoXCJyZW1vdmVcIiwgbm90aWZpY2F0aW9uKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9hY3Rpb25zLmpzIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tIFwiLi9tdXRhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL25vdGlmaWNhdGlvbnMvaW5kZXguanMiLCJleHBvcnQgY29uc3QgYWRkID0gKHN0YXRlLCBub3RpZmljYXRpb24pID0+IHtcbiAgc3RhdGUubm90aWZpY2F0aW9ucy5wdXNoKG5vdGlmaWNhdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKHN0YXRlLCBub3RpZmljYXRpb24pID0+IHtcbiAgc3RhdGUubm90aWZpY2F0aW9ucyA9IF8ud2l0aG91dChzdGF0ZS5ub3RpZmljYXRpb25zLCBub3RpZmljYXRpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL211dGF0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm90aWZpY2F0aW9uczogW11cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9zdGF0ZS5qcyIsImV4cG9ydCBjb25zdCBzZXRWZXJzaW9uID0gKHsgY29tbWl0IH0sIGRhdGEpID0+IHtcbiAgY29tbWl0KFwic2V0VmVyc2lvblwiLCBkYXRhLnZlcnNpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vYWN0aW9ucy5qcyIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSBcIi4vbXV0YXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIGFjdGlvbnMsXG4gIG11dGF0aW9ucyxcbiAgbmFtZXNwYWNlZDogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vaW5kZXguanMiLCJleHBvcnQgY29uc3Qgc2V0VmVyc2lvbiA9IChzdGF0ZSwgdmVyc2lvbikgPT4ge1xuICBzdGF0ZS52ZXJzaW9uID0gdmVyc2lvbjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc3lzdGVtL211dGF0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdmVyc2lvbjogTGFyYXZlbC52ZXJzaW9uXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3N5c3RlbS9zdGF0ZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=