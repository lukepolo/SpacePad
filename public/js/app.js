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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    created: function created() {
        this.$store.dispatch('rooms/get');
        this.$store.dispatch('providers/get');
    },

    computed: {
        rooms: function rooms() {
            return this.$store.state.rooms.rooms;
        },
        providers: function providers() {
            return this.$store.state.providers.providers;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/Rooms.vue":
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
    created: function created() {
        this.$store.dispatch('providers/rooms/get', this.$route.params.provider);
    },

    methods: {
        createRoom: function createRoom(room) {
            this.$store.dispatch('providers/rooms/store', {
                name: room.name,
                room: room.room,
                provider: this.$route.params.provider
            });
        }
    },
    computed: {
        rooms: function rooms() {
            return this.$store.state.providers.rooms.rooms;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/Room.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Calendar_vue__ = __webpack_require__("./resources/assets/js/app/room/components/Calendar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Calendar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_RoomStatus_vue__ = __webpack_require__("./resources/assets/js/app/room/components/RoomStatus.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_RoomStatus_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_RoomStatus_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_BookingAttendees_vue__ = __webpack_require__("./resources/assets/js/app/room/components/BookingAttendees.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_BookingAttendees_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_BookingAttendees_vue__);
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
    components: {
        Calendar: __WEBPACK_IMPORTED_MODULE_0__components_Calendar_vue___default.a,
        RoomStatus: __WEBPACK_IMPORTED_MODULE_1__components_RoomStatus_vue___default.a,
        BookingAttendees: __WEBPACK_IMPORTED_MODULE_2__components_BookingAttendees_vue___default.a
    },
    created: function created() {
        this.$store.dispatch('rooms/show', this.$route.params.room);
        this.$store.dispatch('rooms/events/get', this.$route.params.room);
    },

    computed: {
        room: function room() {
            return this.$store.state.rooms.room;
        },
        currentDate: function currentDate() {
            return moment().format('ll');
        },
        selectedBooking: function selectedBooking() {
            return this.$store.state.rooms.events.event;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/components/BookingAttendees.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
   props: ['booking']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/components/Calendar.vue":
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    created: function created() {
        var _this = this;

        var hour = 0;
        while (hour < 24) {
            this.hours.push({
                'display': moment(hour, 'H').format('h A'),
                'events': []
            });
            hour++;
        }
        setInterval(function () {
            _this.getCurrentTimeStyles();
        }, 1000);
        this.getCurrentTimeStyles();
    },
    mounted: function mounted() {
        this.scrollToCurrentTime();
    },
    data: function data() {
        return {
            hours: [],
            currentTime: null,
            currentTimeStyle: null,
            currentTimeScrollInterval: null
        };
    },

    methods: {
        selectBooking: function selectBooking(booking) {
            this.$store.commit('rooms/events/set', booking);
        },
        setScrollTimeout: function setScrollTimeout() {
            var _this2 = this;

            clearTimeout(this.currentTimeScrollInterval);
            this.currentTimeScrollInterval = setInterval(function () {
                _this2.scrollToCurrentTime();
            }, 15 * 1000);
        },
        getOffset: function getOffset(el) {
            var rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        },
        scrollToCurrentTime: function scrollToCurrentTime() {
            // https://github.com/vuejs/vue-router/issues/173
            // this will animate it
            var calendar = this.$refs.calendar;
            calendar.scrollTop = 0;
            var calendarOffsets = this.getOffset(calendar);
            var currentTimeOffsets = this.getOffset(this.$refs['current-time-container']);
            calendar.scrollTop = currentTimeOffsets.top - calendarOffsets.top - 100;
        },
        getCurrentTimeStyles: function getCurrentTimeStyles() {
            var now = this.now();
            var startEM = (now.format('HH') * 60 + parseInt(now.format('mm'))) * 6 / 60;
            this.currentTime = now.format('h:mm A');
            this.currentTimeStyle = 'top:' + startEM + 'em;';
        }
    },
    computed: {
        bookings: function bookings() {
            return this.$store.state.rooms.events.events;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/components/RoomStatus.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {//
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
    computed: {
        bookings: function bookings() {
            return this.$store.state.rooms.events.events;
        },
        currentBooking: function currentBooking() {
            var _this = this;

            return _.find(this.bookings, function (booking) {
                return _this.parseDate(booking.start_date).isBefore(_this.now()) && _this.parseDate(booking.end_date).isAfter(_this.now());
            });
        },
        nextBooking: function nextBooking() {
            var _this2 = this;

            return _.find(this.bookings, function (booking) {
                return _this2.parseDate(booking.start_date).isAfter(_this2.now());
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/lodash/lodash.js")))

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02f8bda8\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/room/components/BookingAttendees.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.booking
    ? _c(
        "div",
        [
          _vm._l(_vm.booking.attendees, function(attendee) {
            return [
              _c("div", [
                _vm._v(
                  "\n            {status} - " +
                    _vm._s(attendee.name) +
                    "\n        "
                )
              ])
            ]
          })
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-02f8bda8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-04f104fc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/room/Room.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.room
    ? _c("div", { attrs: { id: "room" } }, [
        _c("div", { attrs: { id: "room-content" } }, [
          _c("nav", { staticClass: "room-header level" }, [
            _c("div", { staticClass: "level-left" }, [
              _c("h2", [_vm._v(_vm._s(_vm.room.name))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "level-right" }, [
              _c("h2", [_vm._v(_vm._s(_vm.currentDate))])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "columns room-details" }, [
            _c(
              "div",
              { staticClass: "column calendar-wrapper" },
              [_c("room-status"), _vm._v(" "), _c("calendar")],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "column tabs" }, [
              _c(
                "div",
                { staticClass: "tab-content" },
                [
                  _vm._v(
                    "\n                    Display Room Details Here :\n                    Seats, technologies, connectors\n                    "
                  ),
                  _c("booking-attendees", {
                    attrs: { booking: _vm.selectedBooking }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "room-footer" }, [
      _c("div", { staticClass: "level" }, [
        _c("div", { staticClass: "level-left" }, [
          _c("div", { staticClass: "level-item" }, [
            _vm._v(
              "\n                        Release / (Check In / Start Early)\n                    "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "level-right" }, [
          _c("p", { staticClass: "level-item" }, [
            _vm._v(
              "\n                        Find Another space\n                    "
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-04f104fc", module.exports)
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1d037346\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/room/components/Calendar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "calendar",
      staticClass: "calendar",
      on: { scroll: _vm.setScrollTimeout }
    },
    [
      _vm._l(_vm.hours, function(hour) {
        return _c("div", { staticClass: "hour-container" }, [
          _c("div", { staticClass: "hour" }, [_vm._v(_vm._s(hour.display))])
        ])
      }),
      _vm._v(" "),
      _vm._l(_vm.bookings, function(booking) {
        return [
          _c(
            "div",
            {
              staticClass: "booking",
              style: _vm.getTimeHeightStyle(
                booking.start_date,
                booking.end_date
              ),
              on: {
                click: function($event) {
                  _vm.selectBooking(booking)
                }
              }
            },
            [
              _c("div", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.formatTime(booking.start_date)) +
                    " - " +
                    _vm._s(_vm.formatTime(booking.end_date)) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "\n                " +
                    _vm._s(booking.subject) +
                    "\n            "
                )
              ])
            ]
          )
        ]
      }),
      _vm._v(" "),
      _c(
        "span",
        {
          ref: "current-time-container",
          staticClass: "current-time-container",
          style: _vm.currentTimeStyle
        },
        [
          _c("span", { staticClass: "current-time" }, [
            _vm._v(_vm._s(_vm.currentTime))
          ])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1d037346", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3cab4025\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/Rooms.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h3", [_vm._v("Available Rooms")]),
      _vm._v(" "),
      _vm._l(_vm.rooms, function(room) {
        return [
          _c(
            "div",
            {
              on: {
                click: function($event) {
                  _vm.createRoom(room)
                }
              }
            },
            [_vm._v("\n            " + _vm._s(room.name) + "\n        ")]
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3cab4025", module.exports)
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5289b935\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/room/components/RoomStatus.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "booking-status" },
    [
      _vm.currentBooking
        ? [
            _c("h1", [
              _vm._v(
                "Booked until " +
                  _vm._s(_vm.formatTime(_vm.currentBooking.end_date))
              )
            ])
          ]
        : _vm.nextBooking
          ? [
              _c("h1", [
                _vm._v(
                  "Booked in " +
                    _vm._s(
                      _vm.humanizeDiff(
                        _vm.now(),
                        _vm.parseDate(_vm.nextBooking.start_date)
                      )
                    ) +
                    " "
                )
              ])
            ]
          : [_c("h1", [_vm._v("Free")])]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5289b935", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-582ed759\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppSpace.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("navigation"), _vm._v(" "), _c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-582ed759", module.exports)
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
  return _c(
    "div",
    [
      _vm._v("\n    Lets connect your first provider\n\n    "),
      _c("a", { attrs: { href: "/provider/office365/link" } }, [
        _vm._v("Office 365")
      ]),
      _vm._v(" "),
      _c("a", { attrs: { href: "/provider/gsuite/link" } }, [_vm._v("GSuite")]),
      _vm._v(" "),
      _c("h3", [_vm._v("Connected Accounts")]),
      _vm._v(" "),
      _vm._l(_vm.providers, function(provider) {
        return [
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  name: "provider_rooms",
                  params: { provider: provider.id }
                }
              }
            },
            [
              _vm._v(
                "\n            " +
                  _vm._s(provider.email) +
                  " [" +
                  _vm._s(provider.provider) +
                  "]\n        "
              )
            ]
          )
        ]
      }),
      _vm._v(" "),
      _c("h3", [_vm._v("Rooms")]),
      _vm._v(" "),
      _vm._l(_vm.rooms, function(room) {
        return [
          _c(
            "div",
            [
              _c(
                "router-link",
                { attrs: { to: { name: "room", params: { room: room.id } } } },
                [
                  _vm._v(
                    "\n                " + _vm._s(room.name) + "\n            "
                  )
                ]
              )
            ],
            1
          )
        ]
      })
    ],
    2
  )
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

Vue.config.productionTip = false;

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

/***/ "./resources/assets/js/app/Rooms.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/Rooms.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3cab4025\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/Rooms.vue")
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
Component.options.__file = "resources/assets/js/app/Rooms.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Rooms.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cab4025", Component.options)
  } else {
    hotAPI.reload("data-v-3cab4025", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/app/room/Room.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/Room.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-04f104fc\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/room/Room.vue")
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
Component.options.__file = "resources/assets/js/app/room/Room.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Room.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04f104fc", Component.options)
  } else {
    hotAPI.reload("data-v-04f104fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/app/room/components/BookingAttendees.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/components/BookingAttendees.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-02f8bda8\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/room/components/BookingAttendees.vue")
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
Component.options.__file = "resources/assets/js/app/room/components/BookingAttendees.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BookingAttendees.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02f8bda8", Component.options)
  } else {
    hotAPI.reload("data-v-02f8bda8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/app/room/components/Calendar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/components/Calendar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1d037346\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/room/components/Calendar.vue")
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
Component.options.__file = "resources/assets/js/app/room/components/Calendar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Calendar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d037346", Component.options)
  } else {
    hotAPI.reload("data-v-1d037346", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/app/room/components/RoomStatus.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/components/RoomStatus.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5289b935\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/room/components/RoomStatus.vue")
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
Component.options.__file = "resources/assets/js/app/room/components/RoomStatus.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] RoomStatus.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5289b935", Component.options)
  } else {
    hotAPI.reload("data-v-5289b935", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rooms_vue__ = __webpack_require__("./resources/assets/js/app/Rooms.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rooms_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Rooms_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_Room_vue__ = __webpack_require__("./resources/assets/js/app/room/Room.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room_Room_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__room_Room_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dashboard_vue__ = __webpack_require__("./resources/assets/js/app/Dashboard.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dashboard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Dashboard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppSpace_vue__ = __webpack_require__("./resources/assets/js/components/AppSpace.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_AppSpace_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_AppSpace_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PageNotFound_vue__ = __webpack_require__("./resources/assets/js/components/PageNotFound.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PageNotFound_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_PageNotFound_vue__);






/* harmony default export */ __webpack_exports__["a"] = ([{
  path: "/",
  component: __WEBPACK_IMPORTED_MODULE_3__components_AppSpace_vue___default.a,
  children: [{ path: "/", component: __WEBPACK_IMPORTED_MODULE_2__Dashboard_vue___default.a, name: "dashboard" }, { path: "/provider/:provider/rooms", name: "provider_rooms", component: __WEBPACK_IMPORTED_MODULE_0__Rooms_vue___default.a }]
}, { path: "/rooms/:room", name: "room", component: __WEBPACK_IMPORTED_MODULE_1__room_Room_vue___default.a }, { path: "*", component: __WEBPACK_IMPORTED_MODULE_4__components_PageNotFound_vue___default.a }]);

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
  cluster: 'us2',
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

/***/ "./resources/assets/js/components/AppSpace.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-582ed759\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/AppSpace.vue")
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
Component.options.__file = "resources/assets/js/components/AppSpace.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AppSpace.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-582ed759", Component.options)
  } else {
    hotAPI.reload("data-v-582ed759", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return humanizeDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTimeHeightStyle; });
var now = function now() {
  return moment().tz(moment.tz.guess());
};

var parseDate = function parseDate(date) {
  return moment(date).tz(moment.tz.guess());
};

var humanizeDiff = function humanizeDiff(date1, date2) {
  return moment.duration(moment(date2).diff(moment(date1), 'minutes'), "minutes").humanize();
};

var formatTime = function formatTime(date) {
  return parseDate(date).format('h:mm A');
};

var getTimeHeightStyle = function getTimeHeightStyle(startDate, endDate) {

  var startDateParsed = parseDate(startDate);
  var startEM = (startDateParsed.format('HH') * 60 + parseInt(startDateParsed.format('mm'))) * 6 / 60;

  var endDateParsed = parseDate(endDate);
  var endEm = (endDateParsed.format('HH') * 60 + parseInt(endDateParsed.format('mm'))) * 6 / 60 - startEM;

  return 'top:' + startEM + 'em; height:' + endEm + 'em;';
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
    now: __WEBPACK_IMPORTED_MODULE_2__date_time__["d" /* now */],
    back: __WEBPACK_IMPORTED_MODULE_1__routes__["b" /* back */],
    humanizeDiff: __WEBPACK_IMPORTED_MODULE_2__date_time__["c" /* humanizeDiff */],
    action: __WEBPACK_IMPORTED_MODULE_1__routes__["a" /* action */],
    showError: __WEBPACK_IMPORTED_MODULE_5__notifications__["b" /* showError */],
    parseDate: __WEBPACK_IMPORTED_MODULE_2__date_time__["e" /* parseDate */],
    formatTime: __WEBPACK_IMPORTED_MODULE_2__date_time__["a" /* formatTime */],
    createForm: __WEBPACK_IMPORTED_MODULE_0__form__["a" /* createForm */],
    showSuccess: __WEBPACK_IMPORTED_MODULE_5__notifications__["c" /* showSuccess */],
    getFormData: __WEBPACK_IMPORTED_MODULE_0__form__["b" /* getFormData */],
    handleApiError: __WEBPACK_IMPORTED_MODULE_5__notifications__["a" /* handleApiError */],
    getTimeHeightStyle: __WEBPACK_IMPORTED_MODULE_2__date_time__["b" /* getTimeHeightStyle */]
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

// router.beforeResolve((to, from, next) => {
//   // if (!store.state.user.user.is_subscribed) {
//   //   if (to.name !== "subscription") {
//   //     next({
//   //       name: "subscription"
//   //     });
//   //   } else {
//   //     next();
//   //   }
//   // } else {
//   //   next();
//   // }
// });

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rooms__ = __webpack_require__("./resources/assets/js/store/modules/rooms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__system__ = __webpack_require__("./resources/assets/js/store/modules/system/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__("./resources/assets/js/store/modules/providers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications__ = __webpack_require__("./resources/assets/js/store/modules/notifications/index.js");






/* harmony default export */ __webpack_exports__["a"] = ({
  auth: __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* default */],
  rooms: __WEBPACK_IMPORTED_MODULE_1__rooms__["a" /* default */],
  system: __WEBPACK_IMPORTED_MODULE_2__system__["a" /* default */],
  providers: __WEBPACK_IMPORTED_MODULE_3__providers__["a" /* default */],
  notifications: __WEBPACK_IMPORTED_MODULE_4__notifications__["a" /* default */]
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

/***/ "./resources/assets/js/store/modules/providers/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
var get = function get() {
    Vue.request().get('/api/providers', 'providers/setAll');
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./resources/assets/js/store/modules/providers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("./resources/assets/js/store/modules/providers/state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./resources/assets/js/store/modules/providers/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__("./resources/assets/js/store/modules/providers/mutations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_rooms__ = __webpack_require__("./resources/assets/js/store/modules/providers/modules/rooms/index.js");






/* harmony default export */ __webpack_exports__["a"] = ({
    state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
    actions: __WEBPACK_IMPORTED_MODULE_1__actions__,
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
    namespaced: true,
    modules: {
        rooms: __WEBPACK_IMPORTED_MODULE_3__modules_rooms__["a" /* default */]
    }
});

/***/ }),

/***/ "./resources/assets/js/store/modules/providers/modules/rooms/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get(_ref, provider) {
    _objectDestructuringEmpty(_ref);

    Vue.request().get('/api/providers/' + provider + '/rooms', 'providers/rooms/setAll');
};

var store = function store(_ref2, data) {
    _objectDestructuringEmpty(_ref2);

    Vue.request(data).post('/api/providers/' + data.provider + '/rooms', 'rooms/add').then(function (room) {
        app.$router.push('/rooms/' + room.id);
    });
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./resources/assets/js/store/modules/providers/modules/rooms/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("./resources/assets/js/store/modules/providers/modules/rooms/state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./resources/assets/js/store/modules/providers/modules/rooms/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__("./resources/assets/js/store/modules/providers/modules/rooms/mutations.js");




/* harmony default export */ __webpack_exports__["a"] = ({
  state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_1__actions__,
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
  namespaced: true
});

/***/ }),

/***/ "./resources/assets/js/store/modules/providers/modules/rooms/mutations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
var setAll = function setAll(state, _ref) {
  var response = _ref.response;

  state.rooms = response;
};

/***/ }),

/***/ "./resources/assets/js/store/modules/providers/modules/rooms/state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  rooms: []
});

/***/ }),

/***/ "./resources/assets/js/store/modules/providers/mutations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
var setAll = function setAll(state, _ref) {
  var response = _ref.response;

  state.providers = response;
};

/***/ }),

/***/ "./resources/assets/js/store/modules/providers/state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  providers: []
});

/***/ }),

/***/ "./resources/assets/js/store/modules/rooms/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get(_ref) {
    _objectDestructuringEmpty(_ref);

    Vue.request().get('/api/rooms', 'rooms/setAll');
};

var show = function show(_ref2, room) {
    _objectDestructuringEmpty(_ref2);

    Vue.request().get('/api/rooms/' + room, 'rooms/set');
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./resources/assets/js/store/modules/rooms/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("./resources/assets/js/store/modules/rooms/state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./resources/assets/js/store/modules/rooms/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__("./resources/assets/js/store/modules/rooms/mutations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_events__ = __webpack_require__("./resources/assets/js/store/modules/rooms/modules/events/index.js");






/* harmony default export */ __webpack_exports__["a"] = ({
  state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_1__actions__,
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
  namespaced: true,
  modules: {
    events: __WEBPACK_IMPORTED_MODULE_3__modules_events__["a" /* default */]
  }
});

/***/ }),

/***/ "./resources/assets/js/store/modules/rooms/modules/events/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get(_ref, room) {
    _objectDestructuringEmpty(_ref);

    Vue.request().get('/api/rooms/' + room + '/events', 'rooms/events/setAll');
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./resources/assets/js/store/modules/rooms/modules/events/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__("./resources/assets/js/store/modules/rooms/modules/events/state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./resources/assets/js/store/modules/rooms/modules/events/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__("./resources/assets/js/store/modules/rooms/modules/events/mutations.js");




/* harmony default export */ __webpack_exports__["a"] = ({
  state: __WEBPACK_IMPORTED_MODULE_0__state__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_1__actions__,
  mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__,
  namespaced: true
});

/***/ }),

/***/ "./resources/assets/js/store/modules/rooms/modules/events/mutations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
var setAll = function setAll(state, _ref) {
  var response = _ref.response;

  state.events = response;
};

var set = function set(state, booking) {
  state.event = booking;
};

/***/ }),

/***/ "./resources/assets/js/store/modules/rooms/modules/events/state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  events: [],
  event: null
});

/***/ }),

/***/ "./resources/assets/js/store/modules/rooms/mutations.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
var set = function set(state, _ref) {
    var response = _ref.response;

    state.room = response;
};

var setAll = function setAll(state, _ref2) {
    var response = _ref2.response;

    state.rooms = response;
};

var add = function add(state, _ref3) {
    var response = _ref3.response;

    state.rooms.push(response);
};

/***/ }),

/***/ "./resources/assets/js/store/modules/rooms/state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  room: null,
  rooms: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vUm9vbXMudnVlIiwid2VicGFjazovLy9Sb29tLnZ1ZSIsIndlYnBhY2s6Ly8vQm9va2luZ0F0dGVuZGVlcy52dWUiLCJ3ZWJwYWNrOi8vL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly8vUm9vbVN0YXR1cy52dWUiLCJ3ZWJwYWNrOi8vL0NsaXBib2FyZC52dWUiLCJ3ZWJwYWNrOi8vL05hdmlnYXRpb24udnVlIiwid2VicGFjazovLy9Ob3RpZmljYXRpb24udnVlIiwid2VicGFjazovLy9Ob3RpZmljYXRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vVGltZUFnby52dWUiLCJ3ZWJwYWNrOi8vL1Rvb2xUaXAudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWU/ZmIyMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlP2Y2N2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlPzBkM2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlP2FmYWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZT8wMjU1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1Jvb21zLnZ1ZT9mNTQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlP2E1MTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWU/ODc2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWU/Y2I0NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvUm9vbVN0YXR1cy52dWU/N2M2ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlP2MzM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlPzc3ZmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvRGFzaGJvYXJkLnZ1ZT9mMTUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlPzRjMmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9EYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1Jvb21zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nQXR0ZW5kZWVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQ2FsZW5kYXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Sb29tU3RhdHVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL0Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NsYXNzZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NsYXNzZXMvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DbGlwYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VOb3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub29sVGlwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXJvdXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvZGF0ZS10aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvZW52aXJvbm1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9ub3RpZmljYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvcGVybWlzc2lvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvYXV0aC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tb2R1bGVzL3Jvb21zL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tb2R1bGVzL2V2ZW50cy9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc3lzdGVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJzdG9yZSIsIlZ1ZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJhcHAiLCJyb3V0ZXIiLCIkbW91bnQiLCJwYXRoIiwiY29tcG9uZW50IiwiY2hpbGRyZW4iLCJuYW1lIiwibGFyb3V0ZSIsIm1vbWVudCIsInR6Iiwic2V0RGVmYXVsdCIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJOUHJvZ3Jlc3MiLCJjb25maWd1cmUiLCJlYXNpbmciLCJzcGVlZCIsInNob3dTcGlubmVyIiwic3RhcnQiLCJpbmMiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRvbmUiLCJQdXNoZXIiLCJsb2ciLCJFY2hvIiwiY2x1c3RlciIsImJyb2FkY2FzdGVyIiwia2V5IiwicHVzaGVyS2V5IiwiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJGb3JtIiwib3JpZ2luYWxEYXRhIiwiY2xlYXIiLCJlbXB0eURhdGEiLCJkYXRhIiwicmVzZXREYXRhIiwicmVzZXQiLCJfIiwicmVkdWNlIiwicmVzdWx0IiwidmFsdWUiLCJpc0VxdWFsIiwiY29uY2F0IiwiUmVxdWVzdCIsImlzT2JqZWN0IiwiRm9ybURhdGEiLCJmb3JtRGF0YSIsImFzc2lnbiIsInVybCIsIm11dGF0aW9ucyIsInN1Ym1pdCIsImRhdGFRdWVyeVN0cmluZyIsInJlcXVlc3RUeXBlIiwicmVzb2x2ZSIsInRoZW4iLCJvblN1Y2Nlc3MiLCJpc1N0cmluZyIsImVhY2giLCIkc3RvcmUiLCJjb21taXQiLCJtdXRhdGlvbiIsInJlcXVlc3REYXRhIiwic2V0T3JpZ2luYWxEYXRhIiwiY2F0Y2giLCJoYW5kbGVBcGlFcnJvciIsIm9uRmFpbCIsImNvbnNvbGUiLCJyZWNvcmQiLCJzdHIiLCJkYXR1bSIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicm91dGVzIiwiYWJzb2x1dGUiLCJyb290VXJsIiwicHJlZml4Iiwicm91dGUiLCJwYXJhbWV0ZXJzIiwiZ2V0QnlOYW1lIiwidW5kZWZpbmVkIiwidG9Sb3V0ZSIsInVyaSIsImdldENvcnJlY3RVcmwiLCJyZXBsYWNlTmFtZWRQYXJhbWV0ZXJzIiwicXMiLCJnZXRSb3V0ZVF1ZXJ5U3RyaW5nIiwiaXNPdGhlckhvc3QiLCJob3N0IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInJlcGxhY2UiLCJtYXRjaCIsImdldEJ5QWN0aW9uIiwiYWN0aW9uIiwiZ2V0TGlua0F0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJnZXRIdG1sTGluayIsInRpdGxlIiwibGlua190byIsImxpbmtfdG9fcm91dGUiLCJsaW5rX3RvX2FjdGlvbiIsImNhbGwiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwibm93IiwiZ3Vlc3MiLCJwYXJzZURhdGUiLCJkYXRlIiwiaHVtYW5pemVEaWZmIiwiZGF0ZTEiLCJkYXRlMiIsImR1cmF0aW9uIiwiZGlmZiIsImh1bWFuaXplIiwiZm9ybWF0VGltZSIsImZvcm1hdCIsImdldFRpbWVIZWlnaHRTdHlsZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzdGFydERhdGVQYXJzZWQiLCJzdGFydEVNIiwicGFyc2VJbnQiLCJlbmREYXRlUGFyc2VkIiwiZW5kRW0iLCJsb2NhbCIsImVudiIsImdldEZvcm1EYXRhIiwiZm9ybSIsIiQiLCJpcyIsImZpbmQiLCJjcmVhdGVGb3JtIiwibWl4aW4iLCJtZXRob2RzIiwiYmFjayIsInNob3dFcnJvciIsInNob3dTdWNjZXNzIiwiY29tcHV0ZWQiLCJpc0FkbWluIiwibWVzc2FnZSIsInRpbWVvdXQiLCJkaXNwYXRjaCIsImlzRW1wdHkiLCJ0ZXh0IiwiY2xhc3MiLCJpc1NldCIsIndhcm4iLCJoaXN0b3J5IiwiVnVlUm91dGVyIiwibW9kZSIsIlZ1ZXgiLCJTdG9yZSIsIm1vZHVsZXMiLCJsb2dvdXQiLCJjb250ZXh0IiwicG9zdCIsInN0YXRlIiwiYWN0aW9ucyIsIm5hbWVzcGFjZWQiLCJhdXRoIiwicm9vbXMiLCJzeXN0ZW0iLCJwcm92aWRlcnMiLCJub3RpZmljYXRpb25zIiwiYWRkIiwibm90aWZpY2F0aW9uIiwicmVtb3ZlIiwid2l0aG91dCIsImdldCIsInByb3ZpZGVyIiwicm9vbSIsIiRyb3V0ZXIiLCJpZCIsInNldEFsbCIsInNob3ciLCJldmVudHMiLCJzZXQiLCJib29raW5nIiwiZXZlbnQiLCJzZXRWZXJzaW9uIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtnQ0FFQTs2QkFDQTs2QkFDQTtBQUNBOzs7Z0NBRUE7MkNBQ0E7QUFDQTt3Q0FDQTsrQ0FDQTtBQUVBO0FBUEE7QUFMQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7Z0NBRUE7dUVBQ0E7QUFDQTs7OzhDQUVBOzsyQkFFQTsyQkFDQTs2Q0FFQTtBQUpBO0FBTUE7QUFSQTs7Z0NBVUE7cURBQ0E7QUFFQTtBQUpBO0FBYkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzBDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUVBO0FBSkE7Z0NBS0E7OERBQ0E7b0VBQ0E7QUFDQTs7OzhCQUVBOzJDQUNBO0FBQ0E7NENBQ0E7bUNBQ0E7QUFDQTtvREFDQTtrREFDQTtBQUVBO0FBVkE7QUFWQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtXQUVBO0FBREEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VBOztBQUVBOzttQkFDQTswQkFDQTs7b0RBRUE7MEJBRUE7QUFIQTtBQUlBO0FBQ0E7Z0NBQ0E7a0JBQ0E7V0FDQTthQUNBO0FBQ0E7Z0NBQ0E7YUFDQTtBQUNBOzBCQUNBOzttQkFFQTt5QkFDQTs4QkFDQTt1Q0FFQTtBQUxBO0FBTUE7Ozt1REFFQTttREFDQTtBQUNBOztBQUNBOzs4QkFDQTtxRUFDQTt1QkFDQTtv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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDZCQUE2QjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwwQ0FBMEMsMkNBQTJDO0FBQ3JGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHlCQUF5Qjs7QUFFekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxRQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsaUNBQWlDLFNBQVM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QyxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxNQUFNLEVBQUU7QUFDUixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxXQUFXLEVBQUU7QUFDMUQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxTQUFTLEVBQUU7QUFDN0Q7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxTQUFTLEVBQUU7QUFDMUQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQkFBc0IsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGlDQUFpQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTSxFQUFFO0FBQ3RELFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDBDQUEwQyxFQUFFO0FBQ2xGO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLGlCQUFpQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzE4RUE7QUFDQTs7QUFFQSxtQkFBQUEsQ0FBUSxvQ0FBUjtBQUNBLG1CQUFBQSxDQUFRLDJDQUFSO0FBQ0EsbUJBQUFBLENBQVEsMkNBQVI7QUFDQSxtQkFBQUEsQ0FBUSx1Q0FBUjs7QUFFQUMsT0FBT0MsS0FBUCxHQUFlLHVEQUFmOztBQUVBQyxJQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUEsSUFBTUMsTUFBTSxJQUFJSCxHQUFKLENBQVE7QUFDbEJELFNBQUEsdURBRGtCO0FBRWxCSyxVQUFBLHdEQUFBQTtBQUZrQixDQUFSLENBQVo7O0FBS0FOLE9BQU9LLEdBQVAsR0FBYUEsR0FBYjs7QUFFQUEsSUFBSUUsTUFBSixDQUFXLGFBQVgsRTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0EscVRBQXdLO0FBQ3hLO0FBQ0EsOFBBQWtKO0FBQ2xKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQSxpVEFBd0s7QUFDeEs7QUFDQSwwUEFBa0o7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBLHFUQUF3SztBQUN4SztBQUNBLDhQQUFxSjtBQUNySjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0EsNFVBQXdLO0FBQ3hLO0FBQ0EscVJBQXdKO0FBQ3hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQSxvVUFBd0s7QUFDeEs7QUFDQSw2UUFBd0o7QUFDeEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBLHNVQUF3SztBQUN4SztBQUNBLCtRQUF3SjtBQUN4SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzt5REFHZSxDQUNiO0FBQ0VDLFFBQU0sR0FEUjtBQUVFQyxhQUFXLGdFQUZiO0FBR0VDLFlBQVcsQ0FDUCxFQUFFRixNQUFNLEdBQVIsRUFBYUMsV0FBVyxzREFBeEIsRUFBbUNFLE1BQU0sV0FBekMsRUFETyxFQUVQLEVBQUVILE1BQU0sMkJBQVIsRUFBcUNHLE1BQU0sZ0JBQTNDLEVBQTZERixXQUFXLGtEQUF4RSxFQUZPO0FBSGIsQ0FEYSxFQVNiLEVBQUVELE1BQU0sY0FBUixFQUF3QkcsTUFBTSxNQUE5QixFQUFzQ0YsV0FBVyxzREFBakQsRUFUYSxFQVViLEVBQUVELE1BQU0sR0FBUixFQUFhQyxXQUFXLG9FQUF4QixFQVZhLENBQWYsRTs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTs7Ozs7OztBQU9BVCxPQUFPWSxPQUFQLEdBQWlCLG1CQUFBYixDQUFRLGtDQUFSLENBQWpCO0FBQ0FDLE9BQU9hLE1BQVAsR0FBZ0IsbUJBQUFkLENBQVEseUNBQVIsQ0FBaEI7QUFDQSxtQkFBQUEsQ0FBUSxvRUFBUjtBQUNBYyxPQUFPQyxFQUFQLENBQVVDLFVBQVYsQ0FBcUIsS0FBckI7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQWYsT0FBT2dCLEtBQVAsR0FBZSxtQkFBQWpCLENBQVEsK0JBQVIsQ0FBZjs7QUFFQUMsT0FBT2dCLEtBQVAsQ0FBYUMsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEJDLE1BQTlCLENBQXFDLGtCQUFyQyxJQUEyRCxnQkFBM0Q7QUFDQW5CLE9BQU9nQixLQUFQLENBQWFDLFFBQWIsQ0FBc0JDLE9BQXRCLENBQThCQyxNQUE5QixDQUFxQyxjQUFyQyxJQUF1RG5CLE9BQU9vQixPQUFQLENBQWVDLFNBQXRFOztBQUVBTCxNQUFNTSxZQUFOLENBQW1CQyxPQUFuQixDQUEyQkMsR0FBM0IsQ0FDRSxrQkFBVTtBQUNSQyxFQUFBLGlEQUFBQSxDQUFVQyxTQUFWLENBQW9CO0FBQ2xCQyxZQUFRLE1BRFU7QUFFbEJDLFdBQU8sR0FGVztBQUdsQkMsaUJBQWE7QUFISyxHQUFwQjtBQUtBSixFQUFBLGlEQUFBQSxDQUFVSyxLQUFWO0FBQ0FMLEVBQUEsaURBQUFBLENBQVVNLEdBQVYsQ0FBYyxHQUFkO0FBQ0EsU0FBTzVCLE1BQVA7QUFDRCxDQVZILEVBV0UsVUFBUzZCLEtBQVQsRUFBZ0I7QUFDZCxTQUFPQyxRQUFRQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELENBYkg7O0FBZ0JBaEIsTUFBTU0sWUFBTixDQUFtQmEsUUFBbkIsQ0FBNEJYLEdBQTVCLENBQ0Usb0JBQVk7QUFDVkMsRUFBQSxpREFBQUEsQ0FBVVcsSUFBVjtBQUNBLFNBQU9ELFFBQVA7QUFDRCxDQUpILEVBS0UsVUFBU0gsS0FBVCxFQUFnQjtBQUNkLFNBQU9DLFFBQVFDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0QsQ0FQSDs7QUFVQTs7Ozs7OztBQU9BO0FBQ0E7O0FBRUEsaURBQUFLLENBQU9DLEdBQVAsR0FBYSxlQUFPO0FBQ2xCO0FBQ0QsQ0FGRDs7QUFJQXRDLE9BQU91QyxJQUFQLEdBQWMsSUFBSSxvREFBSixDQUFTO0FBQ3JCQyxXQUFTLEtBRFk7QUFFckJDLGVBQWEsUUFGUTtBQUdyQkMsT0FBS3RCLFFBQVF1QjtBQUhRLENBQVQsQ0FBZDs7QUFNQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7OztJQ3RGTUMsTTtBQUNKOzs7QUFHQSxvQkFBYztBQUFBOztBQUNaLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozt3QkFLSUMsSyxFQUFPO0FBQ1QsYUFBTyxLQUFLRCxNQUFMLENBQVlFLGNBQVosQ0FBMkJELEtBQTNCLENBQVA7QUFDRDs7QUFFRDs7Ozs7OzBCQUdNO0FBQ0osYUFBT0UsT0FBT0MsSUFBUCxDQUFZLEtBQUtKLE1BQWpCLEVBQXlCSyxNQUF6QixHQUFrQyxDQUF6QztBQUNEOztBQUVEOzs7Ozs7Ozt3QkFLSUosSyxFQUFPO0FBQ1QsVUFBSSxLQUFLRCxNQUFMLENBQVlDLEtBQVosQ0FBSixFQUF3QjtBQUN0QixlQUFPLEtBQUtELE1BQUwsQ0FBWUMsS0FBWixFQUFtQixDQUFuQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7MkJBS09ELE0sRUFBUTtBQUNiLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOztBQUVEOzs7Ozs7OzswQkFLTUMsSyxFQUFPO0FBQ1gsVUFBSUEsS0FBSixFQUFXO0FBQ1QsZUFBTyxLQUFLRCxNQUFMLENBQVlDLEtBQVosQ0FBUDs7QUFFQTtBQUNEOztBQUVELFdBQUtELE1BQUwsR0FBYyxFQUFkO0FBQ0Q7Ozs7OztBQUdILHlEQUFlRCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBOztJQUVNTyxJOzs7Ozs7Ozs7Ozs7QUFDSjs7OzRCQUdRO0FBQ04sV0FBSyxJQUFNTCxLQUFYLElBQW9CLEtBQUtNLFlBQXpCLEVBQXVDO0FBQ3JDLGFBQUtOLEtBQUwsSUFBYyxLQUFLTSxZQUFMLENBQWtCTixLQUFsQixDQUFkO0FBQ0Q7O0FBRUQsV0FBS0QsTUFBTCxDQUFZUSxLQUFaO0FBQ0Q7Ozs0QkFFTztBQUNOLFdBQUssSUFBTVAsS0FBWCxJQUFvQixLQUFLUSxTQUF6QixFQUFvQztBQUNsQyxhQUFLUixLQUFMLElBQWMsS0FBS1EsU0FBTCxDQUFlUixLQUFmLENBQWQ7QUFDRDs7QUFFRCxXQUFLRCxNQUFMLENBQVlRLEtBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7OEJBS1VFLEksRUFBTTtBQUNkLFVBQUksS0FBS0MsU0FBVCxFQUFvQjtBQUNsQixhQUFLQyxLQUFMO0FBQ0Q7QUFDRCxXQUFLWixNQUFMLENBQVlRLEtBQVo7QUFDRDs7OzJCQUVNO0FBQUE7O0FBQ0wsYUFBT0ssRUFBRUMsTUFBRixDQUNMLEtBQUtKLElBQUwsRUFESyxFQUVMLFVBQUNLLE1BQUQsRUFBU0MsS0FBVCxFQUFnQm5CLEdBQWhCLEVBQXdCO0FBQ3RCLGVBQU9nQixFQUFFSSxPQUFGLENBQVVELEtBQVYsRUFBaUIsT0FBS1QsWUFBTCxDQUFrQlYsR0FBbEIsQ0FBakIsSUFDSGtCLE1BREcsR0FFSEEsT0FBT0csTUFBUCxDQUFjckIsR0FBZCxDQUZKO0FBR0QsT0FOSSxFQU9MLEVBUEssQ0FBUDtBQVNEOzs7O0VBMUNnQix5RDs7QUE2Q25CLHlEQUFlUyxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDL0NBOztJQUVNYSxPO0FBQ0o7Ozs7OztBQU1BLG1CQUFZVCxJQUFaLEVBQWtCRSxLQUFsQixFQUF5QjtBQUFBOztBQUN2QixTQUFLRCxTQUFMLEdBQWlCQyxTQUFTLEtBQTFCOztBQUVBLFFBQUlGLFFBQVEsQ0FBQ0csRUFBRU8sUUFBRixDQUFXVixJQUFYLENBQWIsRUFBK0I7QUFDN0IsV0FBSyxPQUFMLElBQWdCQSxJQUFoQjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUtELFNBQUwsR0FBaUJDLElBQWpCO0FBQ0EsV0FBS0gsWUFBTCxHQUFvQkcsSUFBcEI7QUFDRDs7QUFFRCxRQUFJQSxnQkFBZ0JXLFFBQXBCLEVBQThCO0FBQzVCLFdBQUtDLFFBQUwsR0FBZ0JaLElBQWhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBSyxJQUFNVCxLQUFYLElBQW9CUyxJQUFwQixFQUEwQjtBQUN4QixhQUFLVCxLQUFMLElBQWNTLEtBQUtULEtBQUwsQ0FBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBS0QsTUFBTCxHQUFjLElBQUksd0RBQUosRUFBZDtBQUNEOztBQUVEOzs7Ozs7OzJCQUdPO0FBQ0wsVUFBSSxLQUFLc0IsUUFBVCxFQUFtQjtBQUNqQixlQUFPLEtBQUtBLFFBQVo7QUFDRDs7QUFFRCxVQUFNWixPQUFPUCxPQUFPb0IsTUFBUCxDQUFjLEVBQWQsRUFBa0IsSUFBbEIsQ0FBYjs7QUFFQSxhQUFPYixLQUFLVixNQUFaO0FBQ0EsYUFBT1UsS0FBS0MsU0FBWjtBQUNBLGFBQU9ELEtBQUtELFNBQVo7QUFDQSxhQUFPQyxLQUFLSCxZQUFaOztBQUVBLGFBQU9HLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozt3QkFPSWMsRyxFQUFLQyxTLEVBQVduRSxNLEVBQVE7QUFDMUIsV0FBSyxJQUFNMEQsS0FBWCxJQUFvQjFELE1BQXBCLEVBQTRCO0FBQzFCLGFBQUswRCxLQUFMLElBQWMxRCxPQUFPMEQsS0FBUCxDQUFkO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLVSxNQUFMLENBQ0wsS0FESyxFQUVMLEtBQUtDLGVBQUwsS0FBeUJILE1BQU0sR0FBTixHQUFZLEtBQUtHLGVBQUwsRUFBckMsR0FBOERILEdBRnpELEVBR0xDLFNBSEssQ0FBUDtBQUtEOztBQUVEOzs7Ozs7Ozs7O3lCQU9LRCxHLEVBQUtDLFMsRUFBV25FLE0sRUFBUTtBQUMzQixhQUFPLEtBQUtvRSxNQUFMLENBQVksTUFBWixFQUFvQkYsR0FBcEIsRUFBeUJDLFNBQXpCLEVBQW9DbkUsTUFBcEMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7O3dCQU9Ja0UsRyxFQUFLQyxTLEVBQVduRSxNLEVBQVE7QUFDMUIsYUFBTyxLQUFLb0UsTUFBTCxDQUFZLEtBQVosRUFBbUJGLEdBQW5CLEVBQXdCQyxTQUF4QixFQUFtQ25FLE1BQW5DLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OzswQkFPTWtFLEcsRUFBS0MsUyxFQUFXbkUsTSxFQUFRO0FBQzVCLGFBQU8sS0FBS29FLE1BQUwsQ0FBWSxPQUFaLEVBQXFCRixHQUFyQixFQUEwQkMsU0FBMUIsRUFBcUNuRSxNQUFyQyxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7NEJBT09rRSxHLEVBQUtDLFMsRUFBV25FLE0sRUFBUTtBQUM3QixhQUFPLEtBQUtvRSxNQUFMLENBQVksUUFBWixFQUFzQkYsR0FBdEIsRUFBMkJDLFNBQTNCLEVBQXNDbkUsTUFBdEMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OzsyQkFRT3NFLFcsRUFBYUosRyxFQUFLQyxTLEVBQVduRSxNLEVBQVE7QUFBQTs7QUFDMUMsYUFBTyxJQUFJOEIsT0FBSixDQUFZLFVBQUN5QyxPQUFELEVBQVV4QyxNQUFWLEVBQXFCO0FBQ3RDLFlBQU1xQixPQUFPLE1BQUtZLFFBQUwsR0FBZ0IsTUFBS0EsUUFBckIsR0FBZ0MsTUFBS1osSUFBTCxFQUE3Qzs7QUFFQXZDLGNBQ0d5RCxXQURILEVBQ2dCSixHQURoQixFQUNxQmQsSUFEckIsRUFDMkJwRCxNQUQzQixFQUVHd0UsSUFGSCxDQUVRLG9CQUFZOztBQUVkLGdCQUFLQyxTQUFMOztBQUVBLGNBQUlsQixFQUFFbUIsUUFBRixDQUFXUCxTQUFYLENBQUosRUFBMkI7QUFDekJBLHdCQUFZLENBQUNBLFNBQUQsQ0FBWjtBQUNEOztBQUVELGNBQUlBLGFBQWFBLFVBQVVwQixNQUEzQixFQUFtQztBQUNqQ1EsY0FBRW9CLElBQUYsQ0FBT1IsU0FBUCxFQUFrQixvQkFBWTtBQUM1QmpFLGtCQUFJMEUsTUFBSixDQUFXQyxNQUFYLENBQWtCQyxRQUFsQixFQUE0QjtBQUMxQjlDLDBCQUFVQSxTQUFTb0IsSUFETztBQUUxQjJCLDZCQUFhLE1BQUszQixJQUFMO0FBRmEsZUFBNUI7QUFJRCxhQUxEO0FBTUQ7O0FBRUQsY0FBSSxDQUFDLE1BQUtDLFNBQVYsRUFBcUI7QUFDakIsa0JBQUsyQixlQUFMO0FBQ0g7O0FBRUhULGtCQUFRdkMsU0FBU29CLElBQWpCO0FBQ0QsU0F4QkgsRUF5Qkc2QixLQXpCSCxDQXlCUyxpQkFBUztBQUNkLGNBQUlwRCxNQUFNRyxRQUFWLEVBQW9CO0FBQ2xCOUIsZ0JBQUlnRixjQUFKLENBQW1CckQsTUFBTUcsUUFBekI7QUFDQSxrQkFBS21ELE1BQUwsQ0FBWXRELE1BQU1HLFFBQU4sQ0FBZW9CLElBQTNCO0FBQ0FyQixtQkFBT0YsTUFBTUcsUUFBTixDQUFlb0IsSUFBdEI7QUFDRCxXQUpELE1BSU87QUFDTGdDLG9CQUFRdkQsS0FBUixDQUFjQSxLQUFkO0FBQ0FFLG1CQUFPRixNQUFNRyxRQUFiO0FBQ0Q7QUFDRixTQWxDSDtBQW1DRCxPQXRDTSxDQUFQO0FBdUNEOztBQUVEOzs7Ozs7Z0NBR1k7QUFDVixXQUFLVSxNQUFMLENBQVlRLEtBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7MkJBS09SLE0sRUFBUTtBQUNiLFdBQUtBLE1BQUwsQ0FBWTJDLE1BQVosQ0FBbUIzQyxNQUFuQjtBQUNEOztBQUVEOzs7Ozs7c0NBR2tCO0FBQ2hCLFdBQUtPLFlBQUwsR0FBb0IsS0FBS0csSUFBTCxFQUFwQjtBQUNEOztBQUVEOzs7Ozs7c0NBR2tCO0FBQ2hCLFVBQUlrQyxNQUFNLEVBQVY7QUFDQSxVQUFJbEMsT0FBTyxLQUFLQSxJQUFMLEVBQVg7QUFDQSxXQUFLLElBQUltQyxLQUFULElBQWtCbkMsSUFBbEI7QUFDRSxZQUFJQSxLQUFLUixjQUFMLENBQW9CMkMsS0FBcEIsQ0FBSixFQUFnQztBQUM5QkQsY0FBSUUsSUFBSixDQUNFQyxtQkFBbUJGLEtBQW5CLElBQTRCLEdBQTVCLEdBQWtDRSxtQkFBbUJyQyxLQUFLbUMsS0FBTCxDQUFuQixDQURwQztBQUdEO0FBTEgsT0FNQSxPQUFPRCxJQUFJSSxJQUFKLENBQVMsR0FBVCxDQUFQO0FBQ0Q7Ozs7OztBQUdILHlEQUFlN0IsT0FBZixFOzs7Ozs7OztBQ3hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb1FBQWtKO0FBQ2xKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQSw0VEFBd0s7QUFDeEs7QUFDQSxxUUFBa0o7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBLDZUQUF3SztBQUN4SztBQUNBLHNRQUFrSjtBQUNsSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0EsK1RBQXdLO0FBQ3hLO0FBQ0Esd1FBQWtKO0FBQ2xKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQSxnVUFBd0s7QUFDeEs7QUFDQSx5UUFBa0o7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3UUFBa0o7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzREFBc0QsSUFBSTtBQUN6SSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBLDBUQUF3SztBQUN4SztBQUNBLG1RQUFrSjtBQUNsSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHNEQUFzRCxJQUFJO0FBQ3pJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0EsMFRBQXdLO0FBQ3hLO0FBQ0EsbVFBQWtKO0FBQ2xKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0Usc0RBQXNELElBQUk7QUFDekksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3ZDQSwyQ0FBQTlELElBQUlPLFNBQUosQ0FBYyxTQUFkLEVBQXlCLG1CQUFBVixDQUFRLDhDQUFSLENBQXpCO0FBQ0FHLElBQUlPLFNBQUosQ0FBYyxTQUFkLEVBQXlCLG1CQUFBVixDQUFRLDhDQUFSLENBQXpCO0FBQ0FHLElBQUlPLFNBQUosQ0FBYyxXQUFkLEVBQTJCLG1CQUFBVixDQUFRLGdEQUFSLENBQTNCO0FBQ0FHLElBQUlPLFNBQUosQ0FBYyxZQUFkLEVBQTRCLG1CQUFBVixDQUFRLGlEQUFSLENBQTVCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsQ0FBQyxZQUFZOztBQUVULFFBQUlhLFVBQVcsWUFBWTs7QUFFdkIsWUFBSWtGLFNBQVM7O0FBRVRDLHNCQUFVLEtBRkQ7QUFHVEMscUJBQVMscUJBSEE7QUFJVEYsb0JBQVMsQ0FBQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGtCQUE1QyxFQUErRCxRQUFPLElBQXRFLEVBQTJFLFVBQVMsc0VBQXBGLEVBQUQsRUFBNkosRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLGtCQUF0QyxFQUF5RCxRQUFPLElBQWhFLEVBQXFFLFVBQVMsMkVBQTlFLEVBQTdKLEVBQXdULEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxrQkFBeEMsRUFBMkQsUUFBTyxJQUFsRSxFQUF1RSxVQUFTLHFFQUFoRixFQUF4VCxFQUErYyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sY0FBdEMsRUFBcUQsUUFBTyxJQUE1RCxFQUFpRSxVQUFTLHFFQUExRSxFQUEvYyxFQUFnbUIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxlQUE1QyxFQUE0RCxRQUFPLElBQW5FLEVBQXdFLFVBQVMsNEVBQWpGLEVBQWhtQixFQUErdkIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLDJCQUF4QyxFQUFvRSxRQUFPLElBQTNFLEVBQWdGLFVBQVMsNEVBQXpGLEVBQS92QixFQUFzNkIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLHVCQUF0QyxFQUE4RCxRQUFPLElBQXJFLEVBQTBFLFVBQVMscUVBQW5GLEVBQXQ2QixFQUFna0MsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxnQkFBNUMsRUFBNkQsUUFBTyxJQUFwRSxFQUF5RSxVQUFTLDZEQUFsRixFQUFoa0MsRUFBaXRDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxnQkFBdEMsRUFBdUQsUUFBTyxJQUE5RCxFQUFtRSxVQUFTLDJEQUE1RSxFQUFqdEMsRUFBMDFDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsQ0FBdkIsRUFBK0IsT0FBTSw2QkFBckMsRUFBbUUsUUFBTyxJQUExRSxFQUErRSxVQUFTLDREQUF4RixFQUExMUMsRUFBZy9DLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSw2QkFBeEMsRUFBc0UsUUFBTyxJQUE3RSxFQUFrRixVQUFTLDZEQUEzRixFQUFoL0MsRUFBMG9ELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sZUFBNUMsRUFBNEQsUUFBTyxJQUFuRSxFQUF3RSxVQUFTLHdEQUFqRixFQUExb0QsRUFBcXhELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sK0JBQTVDLEVBQTRFLFFBQU8sSUFBbkYsRUFBd0YsVUFBUywwRUFBakcsRUFBcnhELEVBQWs4RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sK0JBQXRDLEVBQXNFLFFBQU8sSUFBN0UsRUFBa0YsVUFBUyx3RUFBM0YsRUFBbDhELEVBQXVtRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sMkNBQXhDLEVBQW9GLFFBQU8sSUFBM0YsRUFBZ0csVUFBUywwRUFBekcsRUFBdm1FLEVBQTR4RSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sb0JBQXRDLEVBQTJELFFBQU8sSUFBbEUsRUFBdUUsVUFBUywwREFBaEYsRUFBNXhFLEVBQXc2RSxFQUFDLFFBQU8sd0JBQVIsRUFBaUMsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQTNDLEVBQTBELE9BQU0sSUFBaEUsRUFBcUUsUUFBTyxJQUE1RSxFQUFpRixVQUFTLHFEQUExRixFQUF4NkUsRUFBeWpGLEVBQUMsUUFBTyx3QkFBUixFQUFpQyxXQUFVLENBQUMsTUFBRCxDQUEzQyxFQUFvRCxPQUFNLDJCQUExRCxFQUFzRixRQUFPLElBQTdGLEVBQWtHLFVBQVMsaURBQTNHLEVBQXpqRixFQUF1dEYsRUFBQyxRQUFPLHdCQUFSLEVBQWlDLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUEzQyxFQUEwRCxPQUFNLGtDQUFoRSxFQUFtRyxRQUFPLElBQTFHLEVBQStHLFVBQVMsMkRBQXhILEVBQXZ0RixFQUE0NEYsRUFBQyxRQUFPLHdCQUFSLEVBQWlDLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUEzQyxFQUEwRCxPQUFNLG1DQUFoRSxFQUFvRyxRQUFPLElBQTNHLEVBQWdILFVBQVMsNERBQXpILEVBQTU0RixFQUFta0csRUFBQyxRQUFPLHdCQUFSLEVBQWlDLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUEzQyxFQUEwRCxPQUFNLHlCQUFoRSxFQUEwRixRQUFPLElBQWpHLEVBQXNHLFVBQVMsK0NBQS9HLEVBQW5rRyxFQUFtdUcsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxVQUE1QyxFQUF1RCxRQUFPLFdBQTlELEVBQTBFLFVBQVMsaUNBQW5GLEVBQW51RyxFQUF5MUcsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLFVBQXRDLEVBQWlELFFBQU8sV0FBeEQsRUFBb0UsVUFBUyxpQ0FBN0UsRUFBejFHLEVBQXk4RyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGdCQUE1QyxFQUE2RCxRQUFPLFVBQXBFLEVBQStFLFVBQVMsZ0NBQXhGLEVBQXo4RyxFQUFta0gsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxnQkFBN0MsRUFBOEQsUUFBTyxZQUFyRSxFQUFrRixVQUFTLGtDQUEzRixFQUFua0gsRUFBa3NILEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxnQkFBeEMsRUFBeUQsUUFBTyxhQUFoRSxFQUE4RSxVQUFTLG1DQUF2RixFQUFsc0gsRUFBOHpILEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sU0FBNUMsRUFBc0QsUUFBTyxVQUE3RCxFQUF3RSxVQUFTLDBCQUFqRixFQUE5ekgsRUFBNDZILEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sV0FBNUMsRUFBd0QsUUFBTyxZQUEvRCxFQUE0RSxVQUFTLDBCQUFyRixFQUE1NkgsRUFBOGhJLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxXQUF0QyxFQUFrRCxRQUFPLFlBQXpELEVBQXNFLFVBQVMsMEJBQS9FLEVBQTloSSxFQUEwb0ksRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxtQkFBNUMsRUFBZ0UsUUFBTyxXQUF2RSxFQUFtRixVQUFTLHlCQUE1RixFQUExb0ksRUFBa3dJLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0sbUJBQTdDLEVBQWlFLFFBQU8sYUFBeEUsRUFBc0YsVUFBUywyQkFBL0YsRUFBbHdJLEVBQSszSSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sbUJBQXhDLEVBQTRELFFBQU8sY0FBbkUsRUFBa0YsVUFBUyw0QkFBM0YsRUFBLzNJLEVBQXkvSSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGlDQUE1QyxFQUE4RSxRQUFPLGdCQUFyRixFQUFzRyxVQUFTLHlEQUEvRyxFQUF6L0ksRUFBcXFKLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxpQ0FBdEMsRUFBd0UsUUFBTyxnQkFBL0UsRUFBZ0csVUFBUyx5REFBekcsRUFBcnFKLEVBQTIwSixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDRDQUE1QyxFQUF5RixRQUFPLGVBQWhHLEVBQWdILFVBQVMsd0RBQXpILEVBQTMwSixFQUFnZ0ssRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSw0Q0FBN0MsRUFBMEYsUUFBTyxpQkFBakcsRUFBbUgsVUFBUywwREFBNUgsRUFBaGdLLEVBQTBySyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sNENBQXhDLEVBQXFGLFFBQU8sa0JBQTVGLEVBQStHLFVBQVMsMkRBQXhILEVBQTFySyxFQUFpM0ssRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSx1QkFBNUMsRUFBb0UsUUFBTyxvQkFBM0UsRUFBZ0csVUFBUyxrREFBekcsRUFBajNLLEVBQWdoTCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sdUJBQXRDLEVBQThELFFBQU8sb0JBQXJFLEVBQTBGLFVBQVMsa0RBQW5HLEVBQWhoTCxFQUF5cUwsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSx1Q0FBNUMsRUFBb0YsUUFBTyxtQkFBM0YsRUFBK0csVUFBUyxpREFBeEgsRUFBenFMLEVBQXMxTCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQUF2QixFQUF1QyxPQUFNLHVDQUE3QyxFQUFxRixRQUFPLHFCQUE1RixFQUFrSCxVQUFTLG1EQUEzSCxFQUF0MUwsRUFBd2dNLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSx1Q0FBeEMsRUFBZ0YsUUFBTyxzQkFBdkYsRUFBOEcsVUFBUyxvREFBdkgsRUFBeGdNLEVBQXVyTSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDRCQUE1QyxFQUF5RSxRQUFPLHlCQUFoRixFQUEwRyxVQUFTLHNEQUFuSCxFQUF2ck0sRUFBbzJNLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSw0QkFBdEMsRUFBbUUsUUFBTyx5QkFBMUUsRUFBb0csVUFBUyxzREFBN0csRUFBcDJNLEVBQTJnTixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGlEQUE1QyxFQUE4RixRQUFPLHdCQUFyRyxFQUE4SCxVQUFTLHFEQUF2SSxFQUEzZ04sRUFBMnNOLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0saURBQTdDLEVBQStGLFFBQU8sMEJBQXRHLEVBQWlJLFVBQVMsdURBQTFJLEVBQTNzTixFQUFnNU4sRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLGlEQUF4QyxFQUEwRixRQUFPLDJCQUFqRyxFQUE2SCxVQUFTLHdEQUF0SSxFQUFoNU4sRUFBa2xPLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sV0FBNUMsRUFBd0QsUUFBTyxZQUEvRCxFQUE0RSxVQUFTLGtDQUFyRixFQUFsbE8sRUFBNnNPLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxXQUF0QyxFQUFrRCxRQUFPLFlBQXpELEVBQXNFLFVBQVMsa0NBQS9FLEVBQTdzTyxFQUFrME8sRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxtQkFBNUMsRUFBZ0UsUUFBTyxXQUF2RSxFQUFtRixVQUFTLGlDQUE1RixFQUFsME8sRUFBbThPLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0sbUJBQTdDLEVBQWlFLFFBQU8sYUFBeEUsRUFBc0YsVUFBUyxtQ0FBL0YsRUFBbjhPLEVBQXlrUCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sbUJBQXhDLEVBQTRELFFBQU8sY0FBbkUsRUFBa0YsVUFBUyxvQ0FBM0YsRUFBemtQLEVBQTRzUCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGtDQUE1QyxFQUErRSxRQUFPLG9CQUF0RixFQUEyRyxVQUFTLHdDQUFwSCxFQUE1c1AsRUFBNDJQLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxrQ0FBdEMsRUFBeUUsUUFBTyxvQkFBaEYsRUFBcUcsVUFBUyx3Q0FBOUcsRUFBNTJQLEVBQXNnUSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDRDQUE1QyxFQUF5RixRQUFPLG1CQUFoRyxFQUFvSCxVQUFTLHVDQUE3SCxFQUF0Z1EsRUFBOHFRLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0sNENBQTdDLEVBQTBGLFFBQU8scUJBQWpHLEVBQXVILFVBQVMseUNBQWhJLEVBQTlxUSxFQUEyMVEsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLDRDQUF4QyxFQUFxRixRQUFPLHNCQUE1RixFQUFtSCxVQUFTLDBDQUE1SCxFQUEzMVEsRUFBcWdSLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSwwQkFBdEMsRUFBaUUsUUFBTyxjQUF4RSxFQUF1RixVQUFTLHVDQUFoRyxFQUFyZ1IsRUFBZ3BSLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxvQkFBdEMsRUFBMkQsUUFBTyxzQkFBbEUsRUFBeUYsVUFBUyx5Q0FBbEcsRUFBaHBSLEVBQSt4UixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0seUNBQXRDLEVBQWdGLFFBQU8sNkJBQXZGLEVBQXFILFVBQVMsK0NBQTlILEVBQS94UixFQUFnOVIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxpQkFBNUMsRUFBOEQsUUFBTyxrQkFBckUsRUFBd0YsVUFBUyw0QkFBakcsRUFBaDlSLEVBQStrUyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0saUJBQXRDLEVBQXdELFFBQU8sa0JBQS9ELEVBQWtGLFVBQVMsNEJBQTNGLEVBQS9rUyxFQUF3c1MsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSw2QkFBNUMsRUFBMEUsUUFBTyxpQkFBakYsRUFBbUcsVUFBUywyQkFBNUcsRUFBeHNTLEVBQWkxUyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQUF2QixFQUF1QyxPQUFNLDZCQUE3QyxFQUEyRSxRQUFPLG1CQUFsRixFQUFzRyxVQUFTLDZCQUEvRyxFQUFqMVMsRUFBKzlTLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSw2QkFBeEMsRUFBc0UsUUFBTyxvQkFBN0UsRUFBa0csVUFBUyw4QkFBM0csRUFBLzlTLEVBQTBtVCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDZCQUE1QyxFQUEwRSxRQUFPLElBQWpGLEVBQXNGLFVBQVMsa0NBQS9GLEVBQTFtVCxFQUE2dVQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLG9DQUF0QyxFQUEyRSxRQUFPLElBQWxGLEVBQXVGLFVBQVMsMEJBQWhHLEVBQTd1VCxFQUF5MlQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxnQkFBNUMsRUFBNkQsUUFBTyxpQkFBcEUsRUFBc0YsVUFBUyx5QkFBL0YsRUFBejJULEVBQW0rVCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sZ0JBQXRDLEVBQXVELFFBQU8saUJBQTlELEVBQWdGLFVBQVMseUJBQXpGLEVBQW4rVCxFQUF1bFUsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSw0QkFBNUMsRUFBeUUsUUFBTyxnQkFBaEYsRUFBaUcsVUFBUyx3QkFBMUcsRUFBdmxVLEVBQTJ0VSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQUF2QixFQUF1QyxPQUFNLDRCQUE3QyxFQUEwRSxRQUFPLGtCQUFqRixFQUFvRyxVQUFTLDBCQUE3RyxFQUEzdFUsRUFBbzJVLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSw0QkFBeEMsRUFBcUUsUUFBTyxtQkFBNUUsRUFBZ0csVUFBUywyQkFBekcsRUFBcDJVLEVBQTArVSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLFlBQTVDLEVBQXlELFFBQU8sYUFBaEUsRUFBOEUsVUFBUyx1QkFBdkYsRUFBMStVLEVBQTBsVixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sWUFBdEMsRUFBbUQsUUFBTyxhQUExRCxFQUF3RSxVQUFTLHVCQUFqRixFQUExbFYsRUFBb3NWLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sb0JBQTVDLEVBQWlFLFFBQU8sWUFBeEUsRUFBcUYsVUFBUyxzQkFBOUYsRUFBcHNWLEVBQTB6VixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQUF2QixFQUF1QyxPQUFNLG9CQUE3QyxFQUFrRSxRQUFPLGNBQXpFLEVBQXdGLFVBQVMsd0JBQWpHLEVBQTF6VixFQUFxN1YsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLG9CQUF4QyxFQUE2RCxRQUFPLGVBQXBFLEVBQW9GLFVBQVMseUJBQTdGLEVBQXI3VixFQUE2aVcsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLHdCQUF0QyxFQUErRCxRQUFPLElBQXRFLEVBQTJFLFVBQVMsOEJBQXBGLEVBQTdpVyxFQUFpcVcsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxjQUE1QyxFQUEyRCxRQUFPLElBQWxFLEVBQXVFLFVBQVMseUJBQWhGLEVBQWpxVyxFQUE0d1csRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSwyQkFBNUMsRUFBd0UsUUFBTyxJQUEvRSxFQUFvRixVQUFTLHVDQUE3RixFQUE1d1csRUFBbTVXLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sOEJBQTVDLEVBQTJFLFFBQU8sSUFBbEYsRUFBdUYsVUFBUywwQ0FBaEcsRUFBbjVXLEVBQWdpWCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG1CQUE1QyxFQUFnRSxRQUFPLGdCQUF2RSxFQUF3RixVQUFTLGdDQUFqRyxFQUFoaVgsRUFBb3FYLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxtQkFBdEMsRUFBMEQsUUFBTyxnQkFBakUsRUFBa0YsVUFBUyxnQ0FBM0YsRUFBcHFYLEVBQWt5WCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDhCQUE1QyxFQUEyRSxRQUFPLGVBQWxGLEVBQWtHLFVBQVMsK0JBQTNHLEVBQWx5WCxFQUErNlgsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSw4QkFBN0MsRUFBNEUsUUFBTyxpQkFBbkYsRUFBcUcsVUFBUyxpQ0FBOUcsRUFBLzZYLEVBQWlrWSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sOEJBQXhDLEVBQXVFLFFBQU8sa0JBQTlFLEVBQWlHLFVBQVMsa0NBQTFHLEVBQWprWSxFQUFndFksRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSwyQkFBNUMsRUFBd0UsUUFBTyx3QkFBL0UsRUFBd0csVUFBUyxpREFBakgsRUFBaHRZLEVBQXMzWSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sMkJBQXRDLEVBQWtFLFFBQU8sd0JBQXpFLEVBQWtHLFVBQVMsaURBQTNHLEVBQXQzWSxFQUFzaFosRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSw4Q0FBNUMsRUFBMkYsUUFBTyx1QkFBbEcsRUFBMEgsVUFBUyxnREFBbkksRUFBdGhaLEVBQTZzWixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQUF2QixFQUF1QyxPQUFNLDhDQUE3QyxFQUE0RixRQUFPLHlCQUFuRyxFQUE2SCxVQUFTLGtEQUF0SSxFQUE3c1osRUFBeTRaLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSw4Q0FBeEMsRUFBdUYsUUFBTywwQkFBOUYsRUFBeUgsVUFBUyxtREFBbEksRUFBejRaLEVBQWtrYSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGdDQUE1QyxFQUE2RSxRQUFPLDZCQUFwRixFQUFrSCxVQUFTLDhDQUEzSCxFQUFsa2EsRUFBOHVhLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxnQ0FBdEMsRUFBdUUsUUFBTyw2QkFBOUUsRUFBNEcsVUFBUyw4Q0FBckgsRUFBOXVhLEVBQW81YSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHdEQUE1QyxFQUFxRyxRQUFPLDRCQUE1RyxFQUF5SSxVQUFTLDZDQUFsSixFQUFwNWEsRUFBc2xiLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0sd0RBQTdDLEVBQXNHLFFBQU8sOEJBQTdHLEVBQTRJLFVBQVMsK0NBQXJKLEVBQXRsYixFQUE2eGIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLHdEQUF4QyxFQUFpRyxRQUFPLCtCQUF4RyxFQUF3SSxVQUFTLGdEQUFqSixFQUE3eGIsRUFBaStiLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sK0JBQTVDLEVBQTRFLFFBQU8sNEJBQW5GLEVBQWdILFVBQVMscURBQXpILEVBQWorYixFQUFtcGMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLCtCQUF0QyxFQUFzRSxRQUFPLDRCQUE3RSxFQUEwRyxVQUFTLHFEQUFuSCxFQUFucGMsRUFBK3pjLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sc0RBQTVDLEVBQW1HLFFBQU8sMkJBQTFHLEVBQXNJLFVBQVMsb0RBQS9JLEVBQS96YyxFQUFzZ2QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxzREFBN0MsRUFBb0csUUFBTyw2QkFBM0csRUFBeUksVUFBUyxzREFBbEosRUFBdGdkLEVBQWt0ZCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sc0RBQXhDLEVBQStGLFFBQU8sOEJBQXRHLEVBQXFJLFVBQVMsdURBQTlJLEVBQWx0ZCxFQUEyNWQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxpQ0FBNUMsRUFBOEUsUUFBTyw4QkFBckYsRUFBb0gsVUFBUyx1REFBN0gsRUFBMzVkLEVBQW1sZSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0saUNBQXRDLEVBQXdFLFFBQU8sOEJBQS9FLEVBQThHLFVBQVMsdURBQXZILEVBQW5sZSxFQUFxd2UsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSwwREFBNUMsRUFBdUcsUUFBTyw2QkFBOUcsRUFBNEksVUFBUyxzREFBckosRUFBcndlLEVBQW85ZSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQUF2QixFQUF1QyxPQUFNLDBEQUE3QyxFQUF3RyxRQUFPLCtCQUEvRyxFQUErSSxVQUFTLHdEQUF4SixFQUFwOWUsRUFBd3FmLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwwREFBeEMsRUFBbUcsUUFBTyxnQ0FBMUcsRUFBMkksVUFBUyx5REFBcEosRUFBeHFmLEVBQXkzZixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGlCQUE1QyxFQUE4RCxRQUFPLGNBQXJFLEVBQW9GLFVBQVMsdUJBQTdGLEVBQXozZixFQUErK2YsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLGlCQUF0QyxFQUF3RCxRQUFPLGNBQS9ELEVBQThFLFVBQVMsdUJBQXZGLEVBQS8rZixFQUErbGdCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sMEJBQTVDLEVBQXVFLFFBQU8sYUFBOUUsRUFBNEYsVUFBUyxzQkFBckcsRUFBL2xnQixFQUE0dGdCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0sMEJBQTdDLEVBQXdFLFFBQU8sZUFBL0UsRUFBK0YsVUFBUyx3QkFBeEcsRUFBNXRnQixFQUE4MWdCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwwQkFBeEMsRUFBbUUsUUFBTyxnQkFBMUUsRUFBMkYsVUFBUyx5QkFBcEcsRUFBOTFnQixFQUE2OWdCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0scUJBQTVDLEVBQWtFLFFBQU8sSUFBekUsRUFBOEUsVUFBUyw4QkFBdkYsRUFBNzlnQixFQUFvbGhCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sZ0JBQTVDLEVBQTZELFFBQU8sYUFBcEUsRUFBa0YsVUFBUywyQkFBM0YsRUFBcGxoQixFQUE0c2hCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxnQkFBdEMsRUFBdUQsUUFBTyxhQUE5RCxFQUE0RSxVQUFTLDJCQUFyRixFQUE1c2hCLEVBQTh6aEIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSx3QkFBNUMsRUFBcUUsUUFBTyxZQUE1RSxFQUF5RixVQUFTLDBCQUFsRyxFQUE5emhCLEVBQTQ3aEIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSx3QkFBN0MsRUFBc0UsUUFBTyxjQUE3RSxFQUE0RixVQUFTLDRCQUFyRyxFQUE1N2hCLEVBQStqaUIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLHdCQUF4QyxFQUFpRSxRQUFPLGVBQXhFLEVBQXdGLFVBQVMsNkJBQWpHLEVBQS9qaUIsRUFBK3JpQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDhCQUE1QyxFQUEyRSxRQUFPLGtCQUFsRixFQUFxRyxVQUFTLGdDQUE5RyxFQUEvcmlCLEVBQSswaUIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLDhCQUF0QyxFQUFxRSxRQUFPLGtCQUE1RSxFQUErRixVQUFTLGdDQUF4RyxFQUEvMGlCLEVBQXk5aUIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxzQ0FBNUMsRUFBbUYsUUFBTyxpQkFBMUYsRUFBNEcsVUFBUywrQkFBckgsRUFBejlpQixFQUErbWpCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0sc0NBQTdDLEVBQW9GLFFBQU8sbUJBQTNGLEVBQStHLFVBQVMsaUNBQXhILEVBQS9takIsRUFBMHdqQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sc0NBQXhDLEVBQStFLFFBQU8sb0JBQXRGLEVBQTJHLFVBQVMsa0NBQXBILEVBQTF3akIsRUFBazZqQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sc0JBQXRDLEVBQTZELFFBQU8sSUFBcEUsRUFBeUUsVUFBUyxnQ0FBbEYsRUFBbDZqQixFQUFzaGtCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sa0JBQTVDLEVBQStELFFBQU8sZUFBdEUsRUFBc0YsVUFBUywrQkFBL0YsRUFBdGhrQixFQUFzcGtCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxrQkFBdEMsRUFBeUQsUUFBTyxlQUFoRSxFQUFnRixVQUFTLCtCQUF6RixFQUF0cGtCLEVBQWd4a0IsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSw0QkFBNUMsRUFBeUUsUUFBTyxjQUFoRixFQUErRixVQUFTLDhCQUF4RyxFQUFoeGtCLEVBQXc1a0IsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSw0QkFBN0MsRUFBMEUsUUFBTyxnQkFBakYsRUFBa0csVUFBUyxnQ0FBM0csRUFBeDVrQixFQUFxaWxCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSw0QkFBeEMsRUFBcUUsUUFBTyxpQkFBNUUsRUFBOEYsVUFBUyxpQ0FBdkcsRUFBcmlsQixFQUErcWxCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxzQ0FBdEMsRUFBNkUsUUFBTyxJQUFwRixFQUF5RixVQUFTLGtDQUFsRyxFQUEvcWxCLEVBQXF6bEIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLGdEQUF0QyxFQUF1RixRQUFPLElBQTlGLEVBQW1HLFVBQVMsd0NBQTVHLEVBQXJ6bEIsRUFBMjhsQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sbUNBQXRDLEVBQTBFLFFBQU8sSUFBakYsRUFBc0YsVUFBUyxnREFBL0YsRUFBMzhsQixFQUE0bG1CLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sNkJBQTVDLEVBQTBFLFFBQU8sSUFBakYsRUFBc0YsVUFBUywyQ0FBL0YsRUFBNWxtQixFQUF3dW1CLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxpQ0FBdEMsRUFBd0UsUUFBTyxJQUEvRSxFQUFvRixVQUFTLGlDQUE3RixFQUF4dW1CLEVBQXcybUIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLG9DQUF0QyxFQUEyRSxRQUFPLElBQWxGLEVBQXVGLFVBQVMsaUNBQWhHLEVBQXgybUIsRUFBMittQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sdUNBQXRDLEVBQThFLFFBQU8sSUFBckYsRUFBMEYsVUFBUyxrQ0FBbkcsRUFBMyttQixFQUFrbm5CLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSx1Q0FBdEMsRUFBOEUsUUFBTyxJQUFyRixFQUEwRixVQUFTLHNDQUFuRyxFQUFsbm5CLEVBQTZ2bkIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLDJDQUF0QyxFQUFrRixRQUFPLElBQXpGLEVBQThGLFVBQVMsdUNBQXZHLEVBQTd2bkIsRUFBNjRuQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sNkNBQXRDLEVBQW9GLFFBQU8sSUFBM0YsRUFBZ0csVUFBUywwQ0FBekcsRUFBNzRuQixFQUFraW9CLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSw0Q0FBdEMsRUFBbUYsUUFBTyxJQUExRixFQUErRixVQUFTLCtDQUF4RyxFQUFsaW9CLEVBQTJyb0IsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLDJDQUF0QyxFQUFrRixRQUFPLElBQXpGLEVBQThGLFVBQVMsaURBQXZHLEVBQTNyb0IsRUFBcTFvQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0saURBQXRDLEVBQXdGLFFBQU8sSUFBL0YsRUFBb0csVUFBUyw0Q0FBN0csRUFBcjFvQixFQUFnL29CLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sa0NBQTVDLEVBQStFLFFBQU8sb0JBQXRGLEVBQTJHLFVBQVMsbUNBQXBILEVBQWgvb0IsRUFBeW9wQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sa0NBQXRDLEVBQXlFLFFBQU8sb0JBQWhGLEVBQXFHLFVBQVMsbUNBQTlHLEVBQXpvcEIsRUFBNHhwQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDBDQUE1QyxFQUF1RixRQUFPLG1CQUE5RixFQUFrSCxVQUFTLGtDQUEzSCxFQUE1eHBCLEVBQTI3cEIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwwQ0FBN0MsRUFBd0YsUUFBTyxxQkFBL0YsRUFBcUgsVUFBUyxvQ0FBOUgsRUFBMzdwQixFQUErbHFCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwwQ0FBeEMsRUFBbUYsUUFBTyxzQkFBMUYsRUFBaUgsVUFBUyxxQ0FBMUgsRUFBL2xxQixFQUFnd3FCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sbUNBQTVDLEVBQWdGLFFBQU8scUJBQXZGLEVBQTZHLFVBQVMsbUNBQXRILEVBQWh3cUIsRUFBMjVxQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sbUNBQXRDLEVBQTBFLFFBQU8scUJBQWpGLEVBQXVHLFVBQVMsbUNBQWhILEVBQTM1cUIsRUFBZ2pyQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDJDQUE1QyxFQUF3RixRQUFPLG9CQUEvRixFQUFvSCxVQUFTLGtDQUE3SCxFQUFoanJCLEVBQWl0ckIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwyQ0FBN0MsRUFBeUYsUUFBTyxzQkFBaEcsRUFBdUgsVUFBUyxvQ0FBaEksRUFBanRyQixFQUF1M3JCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwyQ0FBeEMsRUFBb0YsUUFBTyx1QkFBM0YsRUFBbUgsVUFBUyxxQ0FBNUgsRUFBdjNyQixFQUEwaHNCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sbUNBQTVDLEVBQWdGLFFBQU8scUJBQXZGLEVBQTZHLFVBQVMsbUNBQXRILEVBQTFoc0IsRUFBcXJzQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sbUNBQXRDLEVBQTBFLFFBQU8scUJBQWpGLEVBQXVHLFVBQVMsbUNBQWhILEVBQXJyc0IsRUFBMDBzQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDJDQUE1QyxFQUF3RixRQUFPLG9CQUEvRixFQUFvSCxVQUFTLGtDQUE3SCxFQUExMHNCLEVBQTIrc0IsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwyQ0FBN0MsRUFBeUYsUUFBTyxzQkFBaEcsRUFBdUgsVUFBUyxvQ0FBaEksRUFBMytzQixFQUFpcHRCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwyQ0FBeEMsRUFBb0YsUUFBTyx1QkFBM0YsRUFBbUgsVUFBUyxxQ0FBNUgsRUFBanB0QixFQUFvenRCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0scUNBQTVDLEVBQWtGLFFBQU8sdUJBQXpGLEVBQWlILFVBQVMscUNBQTFILEVBQXB6dEIsRUFBcTl0QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0scUNBQXRDLEVBQTRFLFFBQU8sdUJBQW5GLEVBQTJHLFVBQVMscUNBQXBILEVBQXI5dEIsRUFBZ251QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLCtDQUE1QyxFQUE0RixRQUFPLHNCQUFuRyxFQUEwSCxVQUFTLG9DQUFuSSxFQUFobnVCLEVBQXl4dUIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwrQ0FBN0MsRUFBNkYsUUFBTyx3QkFBcEcsRUFBNkgsVUFBUyxzQ0FBdEksRUFBenh1QixFQUF1OHVCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwrQ0FBeEMsRUFBd0YsUUFBTyx5QkFBL0YsRUFBeUgsVUFBUyx1Q0FBbEksRUFBdjh1QixFQUFrbnZCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0scUNBQTVDLEVBQWtGLFFBQU8sdUJBQXpGLEVBQWlILFVBQVMscUNBQTFILEVBQWxudkIsRUFBbXh2QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0scUNBQXRDLEVBQTRFLFFBQU8sdUJBQW5GLEVBQTJHLFVBQVMscUNBQXBILEVBQW54dkIsRUFBODZ2QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLCtDQUE1QyxFQUE0RixRQUFPLHNCQUFuRyxFQUEwSCxVQUFTLG9DQUFuSSxFQUE5NnZCLEVBQXVsd0IsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwrQ0FBN0MsRUFBNkYsUUFBTyx3QkFBcEcsRUFBNkgsVUFBUyxzQ0FBdEksRUFBdmx3QixFQUFxd3dCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwrQ0FBeEMsRUFBd0YsUUFBTyx5QkFBL0YsRUFBeUgsVUFBUyx1Q0FBbEksRUFBcnd3QixFQUFnN3dCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0scUNBQTVDLEVBQWtGLFFBQU8sdUJBQXpGLEVBQWlILFVBQVMsc0NBQTFILEVBQWg3d0IsRUFBa2x4QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0scUNBQXRDLEVBQTRFLFFBQU8sdUJBQW5GLEVBQTJHLFVBQVMsc0NBQXBILEVBQWxseEIsRUFBOHV4QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLCtDQUE1QyxFQUE0RixRQUFPLHNCQUFuRyxFQUEwSCxVQUFTLHFDQUFuSSxFQUE5dXhCLEVBQXc1eEIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwrQ0FBN0MsRUFBNkYsUUFBTyx3QkFBcEcsRUFBNkgsVUFBUyx1Q0FBdEksRUFBeDV4QixFQUF1a3lCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwrQ0FBeEMsRUFBd0YsUUFBTyx5QkFBL0YsRUFBeUgsVUFBUyx3Q0FBbEksRUFBdmt5QixFQUFtdnlCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sc0NBQTVDLEVBQW1GLFFBQU8sd0JBQTFGLEVBQW1ILFVBQVMscUNBQTVILEVBQW52eUIsRUFBczV5QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sc0NBQXRDLEVBQTZFLFFBQU8sd0JBQXBGLEVBQTZHLFVBQVMscUNBQXRILEVBQXQ1eUIsRUFBbWp6QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGlEQUE1QyxFQUE4RixRQUFPLHVCQUFyRyxFQUE2SCxVQUFTLG9DQUF0SSxFQUFuanpCLEVBQSt0ekIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxpREFBN0MsRUFBK0YsUUFBTyx5QkFBdEcsRUFBZ0ksVUFBUyxzQ0FBekksRUFBL3R6QixFQUFnNXpCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxpREFBeEMsRUFBMEYsUUFBTywwQkFBakcsRUFBNEgsVUFBUyx1Q0FBckksRUFBaDV6QixFQUE4ajBCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sc0NBQTVDLEVBQW1GLFFBQU8sd0JBQTFGLEVBQW1ILFVBQVMsc0NBQTVILEVBQTlqMEIsRUFBa3UwQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sc0NBQXRDLEVBQTZFLFFBQU8sd0JBQXBGLEVBQTZHLFVBQVMsc0NBQXRILEVBQWx1MEIsRUFBZzQwQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGlEQUE1QyxFQUE4RixRQUFPLHVCQUFyRyxFQUE2SCxVQUFTLHFDQUF0SSxFQUFoNDBCLEVBQTZpMUIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxpREFBN0MsRUFBK0YsUUFBTyx5QkFBdEcsRUFBZ0ksVUFBUyx1Q0FBekksRUFBN2kxQixFQUErdDFCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxpREFBeEMsRUFBMEYsUUFBTywwQkFBakcsRUFBNEgsVUFBUyx3Q0FBckksRUFBL3QxQixFQUE4NDFCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sdUNBQTVDLEVBQW9GLFFBQU8seUJBQTNGLEVBQXFILFVBQVMsc0NBQTlILEVBQTk0MUIsRUFBb2oyQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sdUNBQXRDLEVBQThFLFFBQU8seUJBQXJGLEVBQStHLFVBQVMsc0NBQXhILEVBQXBqMkIsRUFBb3QyQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG1EQUE1QyxFQUFnRyxRQUFPLHdCQUF2RyxFQUFnSSxVQUFTLHFDQUF6SSxFQUFwdDJCLEVBQW80MkIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxtREFBN0MsRUFBaUcsUUFBTywwQkFBeEcsRUFBbUksVUFBUyx1Q0FBNUksRUFBcDQyQixFQUF5ajNCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxtREFBeEMsRUFBNEYsUUFBTywyQkFBbkcsRUFBK0gsVUFBUyx3Q0FBeEksRUFBemozQixFQUEydTNCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sNkNBQTVDLEVBQTBGLFFBQU8sK0JBQWpHLEVBQWlJLFVBQVMsa0NBQTFJLEVBQTN1M0IsRUFBeTUzQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sNkNBQXRDLEVBQW9GLFFBQU8sK0JBQTNGLEVBQTJILFVBQVMsa0NBQXBJLEVBQXo1M0IsRUFBaWs0QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGdFQUE1QyxFQUE2RyxRQUFPLDhCQUFwSCxFQUFtSixVQUFTLGlDQUE1SixFQUFqazRCLEVBQWd3NEIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxnRUFBN0MsRUFBOEcsUUFBTyxnQ0FBckgsRUFBc0osVUFBUyxtQ0FBL0osRUFBaHc0QixFQUFvODRCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxnRUFBeEMsRUFBeUcsUUFBTyxpQ0FBaEgsRUFBa0osVUFBUyxvQ0FBM0osRUFBcDg0QixFQUFxbzVCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sMENBQTVDLEVBQXVGLFFBQU8sNEJBQTlGLEVBQTJILFVBQVMseUNBQXBJLEVBQXJvNUIsRUFBb3o1QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sMENBQXRDLEVBQWlGLFFBQU8sNEJBQXhGLEVBQXFILFVBQVMseUNBQTlILEVBQXB6NUIsRUFBNjk1QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHlEQUE1QyxFQUFzRyxRQUFPLDJCQUE3RyxFQUF5SSxVQUFTLHdDQUFsSixFQUE3OTVCLEVBQXlwNkIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSx5REFBN0MsRUFBdUcsUUFBTyw2QkFBOUcsRUFBNEksVUFBUywwQ0FBckosRUFBenA2QixFQUEwMTZCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSx5REFBeEMsRUFBa0csUUFBTyw4QkFBekcsRUFBd0ksVUFBUywyQ0FBakosRUFBMTE2QixFQUF3aDdCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sNENBQTVDLEVBQXlGLFFBQU8sOEJBQWhHLEVBQStILFVBQVMsMkNBQXhJLEVBQXhoN0IsRUFBNnM3QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sNENBQXRDLEVBQW1GLFFBQU8sOEJBQTFGLEVBQXlILFVBQVMsMkNBQWxJLEVBQTdzN0IsRUFBNDM3QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDZEQUE1QyxFQUEwRyxRQUFPLDZCQUFqSCxFQUErSSxVQUFTLDBDQUF4SixFQUE1MzdCLEVBQWdrOEIsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSw2REFBN0MsRUFBMkcsUUFBTywrQkFBbEgsRUFBa0osVUFBUyw0Q0FBM0osRUFBaGs4QixFQUF5dzhCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSw2REFBeEMsRUFBc0csUUFBTyxnQ0FBN0csRUFBOEksVUFBUyw2Q0FBdkosRUFBenc4QixFQUErODhCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sNkNBQTVDLEVBQTBGLFFBQU8sK0JBQWpHLEVBQWlJLFVBQVMsNkNBQTFJLEVBQS84OEIsRUFBd285QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sNkNBQXRDLEVBQW9GLFFBQU8sK0JBQTNGLEVBQTJILFVBQVMsNkNBQXBJLEVBQXhvOUIsRUFBMno5QixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLCtEQUE1QyxFQUE0RyxRQUFPLDhCQUFuSCxFQUFrSixVQUFTLDRDQUEzSixFQUEzejlCLEVBQW9nK0IsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwrREFBN0MsRUFBNkcsUUFBTyxnQ0FBcEgsRUFBcUosVUFBUyw4Q0FBOUosRUFBcGcrQixFQUFrdCtCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwrREFBeEMsRUFBd0csUUFBTyxpQ0FBL0csRUFBaUosVUFBUywrQ0FBMUosRUFBbHQrQixFQUE2NStCLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sK0NBQTVDLEVBQTRGLFFBQU8saUNBQW5HLEVBQXFJLFVBQVMsK0NBQTlJLEVBQTc1K0IsRUFBNGwvQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sK0NBQXRDLEVBQXNGLFFBQU8saUNBQTdGLEVBQStILFVBQVMsK0NBQXhJLEVBQTVsL0IsRUFBcXgvQixFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG1FQUE1QyxFQUFnSCxRQUFPLGdDQUF2SCxFQUF3SixVQUFTLDhDQUFqSyxFQUFyeC9CLEVBQXMrL0IsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxtRUFBN0MsRUFBaUgsUUFBTyxrQ0FBeEgsRUFBMkosVUFBUyxnREFBcEssRUFBdCsvQixFQUE0cmdDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxtRUFBeEMsRUFBNEcsUUFBTyxtQ0FBbkgsRUFBdUosVUFBUyxpREFBaEssRUFBNXJnQyxFQUErNGdDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sbURBQTVDLEVBQWdHLFFBQU8scUNBQXZHLEVBQTZJLFVBQVMsbURBQXRKLEVBQS80Z0MsRUFBMGxoQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sbURBQXRDLEVBQTBGLFFBQU8scUNBQWpHLEVBQXVJLFVBQVMsbURBQWhKLEVBQTFsaEMsRUFBK3hoQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDJFQUE1QyxFQUF3SCxRQUFPLG9DQUEvSCxFQUFvSyxVQUFTLGtEQUE3SyxFQUEveGhDLEVBQWdnaUMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwyRUFBN0MsRUFBeUgsUUFBTyxzQ0FBaEksRUFBdUssVUFBUyxvREFBaEwsRUFBaGdpQyxFQUFzdWlDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwyRUFBeEMsRUFBb0gsUUFBTyx1Q0FBM0gsRUFBbUssVUFBUyxxREFBNUssRUFBdHVpQyxFQUF5OGlDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sOENBQTVDLEVBQTJGLFFBQU8sSUFBbEcsRUFBdUcsVUFBUyw2REFBaEgsRUFBejhpQyxFQUF3bmpDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sZ0JBQTVDLEVBQTZELFFBQU8sYUFBcEUsRUFBa0YsVUFBUywyQkFBM0YsRUFBeG5qQyxFQUFndmpDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxnQkFBdEMsRUFBdUQsUUFBTyxhQUE5RCxFQUE0RSxVQUFTLDJCQUFyRixFQUFodmpDLEVBQWsyakMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSx3QkFBNUMsRUFBcUUsUUFBTyxZQUE1RSxFQUF5RixVQUFTLDBCQUFsRyxFQUFsMmpDLEVBQWcrakMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSx3QkFBN0MsRUFBc0UsUUFBTyxjQUE3RSxFQUE0RixVQUFTLDRCQUFyRyxFQUFoK2pDLEVBQW1ta0MsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLHdCQUF4QyxFQUFpRSxRQUFPLGVBQXhFLEVBQXdGLFVBQVMsNkJBQWpHLEVBQW5ta0MsRUFBbXVrQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sK0JBQXRDLEVBQXNFLFFBQU8sSUFBN0UsRUFBa0YsVUFBUyw0QkFBM0YsRUFBbnVrQyxFQUE0MWtDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxrQ0FBdEMsRUFBeUUsUUFBTyxJQUFoRixFQUFxRixVQUFTLDhCQUE5RixFQUE1MWtDLEVBQTA5a0MsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLGlDQUF0QyxFQUF3RSxRQUFPLElBQS9FLEVBQW9GLFVBQVMsbUNBQTdGLEVBQTE5a0MsRUFBNGxsQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0seUNBQXRDLEVBQWdGLFFBQU8sSUFBdkYsRUFBNEYsVUFBUyxzQ0FBckcsRUFBNWxsQyxFQUF5dWxDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSwyQ0FBdEMsRUFBa0YsUUFBTyxJQUF6RixFQUE4RixVQUFTLHNDQUF2RyxFQUF6dWxDLEVBQXczbEMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLHVDQUF4QyxFQUFnRixRQUFPLElBQXZGLEVBQTRGLFVBQVMsMkNBQXJHLEVBQXgzbEMsRUFBMGdtQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sOERBQXRDLEVBQXFHLFFBQU8sSUFBNUcsRUFBaUgsVUFBUyxvQ0FBMUgsRUFBMWdtQyxFQUEwcW1DLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSx5QkFBdEMsRUFBZ0UsUUFBTyxJQUF2RSxFQUE0RSxVQUFTLDRCQUFyRixFQUExcW1DLEVBQTZ4bUMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLDJCQUF0QyxFQUFrRSxRQUFPLElBQXpFLEVBQThFLFVBQVMsOEJBQXZGLEVBQTd4bUMsRUFBbzVtQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHlDQUE1QyxFQUFzRixRQUFPLElBQTdGLEVBQWtHLFVBQVMsdURBQTNHLEVBQXA1bUMsRUFBd2puQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0saUNBQXRDLEVBQXdFLFFBQU8sSUFBL0UsRUFBb0YsVUFBUyxtQ0FBN0YsRUFBeGpuQyxFQUEwcm5DLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxtQ0FBdEMsRUFBMEUsUUFBTyxJQUFqRixFQUFzRixVQUFTLHNDQUEvRixFQUExcm5DLEVBQWkwbkMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLGtDQUF0QyxFQUF5RSxRQUFPLElBQWhGLEVBQXFGLFVBQVMsMkNBQTlGLEVBQWowbkMsRUFBNDhuQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sdUNBQXRDLEVBQThFLFFBQU8sSUFBckYsRUFBMEYsVUFBUyx3Q0FBbkcsRUFBNThuQyxFQUF5bG9DLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sNkJBQTVDLEVBQTBFLFFBQU8saUJBQWpGLEVBQW1HLFVBQVMsOEJBQTVHLEVBQXpsb0MsRUFBcXVvQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sNkJBQXRDLEVBQW9FLFFBQU8saUJBQTNFLEVBQTZGLFVBQVMsOEJBQXRHLEVBQXJ1b0MsRUFBMjJvQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG1DQUE1QyxFQUFnRixRQUFPLGdCQUF2RixFQUF3RyxVQUFTLDZCQUFqSCxFQUEzMm9DLEVBQTIvb0MsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxtQ0FBN0MsRUFBaUYsUUFBTyxrQkFBeEYsRUFBMkcsVUFBUywrQkFBcEgsRUFBMy9vQyxFQUFncHBDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxtQ0FBeEMsRUFBNEUsUUFBTyxtQkFBbkYsRUFBdUcsVUFBUyxnQ0FBaEgsRUFBaHBwQyxFQUFreXBDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sOEJBQTVDLEVBQTJFLFFBQU8sa0JBQWxGLEVBQXFHLFVBQVMsK0JBQTlHLEVBQWx5cEMsRUFBaTdwQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sOEJBQXRDLEVBQXFFLFFBQU8sa0JBQTVFLEVBQStGLFVBQVMsK0JBQXhHLEVBQWo3cEMsRUFBMGpxQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHNDQUE1QyxFQUFtRixRQUFPLGlCQUExRixFQUE0RyxVQUFTLDhCQUFySCxFQUExanFDLEVBQStzcUMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxzQ0FBN0MsRUFBb0YsUUFBTyxtQkFBM0YsRUFBK0csVUFBUyxnQ0FBeEgsRUFBL3NxQyxFQUF5MnFDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxzQ0FBeEMsRUFBK0UsUUFBTyxvQkFBdEYsRUFBMkcsVUFBUyxpQ0FBcEgsRUFBejJxQyxFQUFnZ3JDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sK0JBQTVDLEVBQTRFLFFBQU8sbUJBQW5GLEVBQXVHLFVBQVMsK0JBQWhILEVBQWhnckMsRUFBaXByQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sK0JBQXRDLEVBQXNFLFFBQU8sbUJBQTdFLEVBQWlHLFVBQVMsK0JBQTFHLEVBQWpwckMsRUFBNHhyQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHVDQUE1QyxFQUFvRixRQUFPLGtCQUEzRixFQUE4RyxVQUFTLDhCQUF2SCxFQUE1eHJDLEVBQW03ckMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSx1Q0FBN0MsRUFBcUYsUUFBTyxvQkFBNUYsRUFBaUgsVUFBUyxnQ0FBMUgsRUFBbjdyQyxFQUEra3NDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSx1Q0FBeEMsRUFBZ0YsUUFBTyxxQkFBdkYsRUFBNkcsVUFBUyxpQ0FBdEgsRUFBL2tzQyxFQUF3dXNDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0saUNBQTVDLEVBQThFLFFBQU8scUJBQXJGLEVBQTJHLFVBQVMsaUNBQXBILEVBQXh1c0MsRUFBKzNzQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0saUNBQXRDLEVBQXdFLFFBQU8scUJBQS9FLEVBQXFHLFVBQVMsaUNBQTlHLEVBQS8zc0MsRUFBZ2h0QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDJDQUE1QyxFQUF3RixRQUFPLG9CQUEvRixFQUFvSCxVQUFTLGdDQUE3SCxFQUFoaHRDLEVBQStxdEMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwyQ0FBN0MsRUFBeUYsUUFBTyxzQkFBaEcsRUFBdUgsVUFBUyxrQ0FBaEksRUFBL3F0QyxFQUFtMXRDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwyQ0FBeEMsRUFBb0YsUUFBTyx1QkFBM0YsRUFBbUgsVUFBUyxtQ0FBNUgsRUFBbjF0QyxFQUFvL3RDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0saUNBQTVDLEVBQThFLFFBQU8scUJBQXJGLEVBQTJHLFVBQVMsaUNBQXBILEVBQXAvdEMsRUFBMm91QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0saUNBQXRDLEVBQXdFLFFBQU8scUJBQS9FLEVBQXFHLFVBQVMsaUNBQTlHLEVBQTNvdUMsRUFBNHh1QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDJDQUE1QyxFQUF3RixRQUFPLG9CQUEvRixFQUFvSCxVQUFTLGdDQUE3SCxFQUE1eHVDLEVBQTI3dUMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwyQ0FBN0MsRUFBeUYsUUFBTyxzQkFBaEcsRUFBdUgsVUFBUyxrQ0FBaEksRUFBMzd1QyxFQUErbHZDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwyQ0FBeEMsRUFBb0YsUUFBTyx1QkFBM0YsRUFBbUgsVUFBUyxtQ0FBNUgsRUFBL2x2QyxFQUFnd3ZDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0saUNBQTVDLEVBQThFLFFBQU8scUJBQXJGLEVBQTJHLFVBQVMsaUNBQXBILEVBQWh3dkMsRUFBdTV2QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0saUNBQXRDLEVBQXdFLFFBQU8scUJBQS9FLEVBQXFHLFVBQVMsaUNBQTlHLEVBQXY1dkMsRUFBd2l3QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDJDQUE1QyxFQUF3RixRQUFPLG9CQUEvRixFQUFvSCxVQUFTLGdDQUE3SCxFQUF4aXdDLEVBQXVzd0MsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwyQ0FBN0MsRUFBeUYsUUFBTyxzQkFBaEcsRUFBdUgsVUFBUyxrQ0FBaEksRUFBdnN3QyxFQUEyMndDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwyQ0FBeEMsRUFBb0YsUUFBTyx1QkFBM0YsRUFBbUgsVUFBUyxtQ0FBNUgsRUFBMzJ3QyxFQUE0Z3hDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0saUNBQTVDLEVBQThFLFFBQU8scUJBQXJGLEVBQTJHLFVBQVMsa0NBQXBILEVBQTVneEMsRUFBb3F4QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0saUNBQXRDLEVBQXdFLFFBQU8scUJBQS9FLEVBQXFHLFVBQVMsa0NBQTlHLEVBQXBxeEMsRUFBc3p4QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDJDQUE1QyxFQUF3RixRQUFPLG9CQUEvRixFQUFvSCxVQUFTLGlDQUE3SCxFQUF0enhDLEVBQXM5eEMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwyQ0FBN0MsRUFBeUYsUUFBTyxzQkFBaEcsRUFBdUgsVUFBUyxtQ0FBaEksRUFBdDl4QyxFQUEybnlDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwyQ0FBeEMsRUFBb0YsUUFBTyx1QkFBM0YsRUFBbUgsVUFBUyxvQ0FBNUgsRUFBM255QyxFQUE2eHlDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sa0NBQTVDLEVBQStFLFFBQU8sc0JBQXRGLEVBQTZHLFVBQVMsaUNBQXRILEVBQTd4eUMsRUFBczd5QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sa0NBQXRDLEVBQXlFLFFBQU8sc0JBQWhGLEVBQXVHLFVBQVMsaUNBQWhILEVBQXQ3eUMsRUFBeWt6QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDZDQUE1QyxFQUEwRixRQUFPLHFCQUFqRyxFQUF1SCxVQUFTLGdDQUFoSSxFQUF6a3pDLEVBQTJ1ekMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSw2Q0FBN0MsRUFBMkYsUUFBTyx1QkFBbEcsRUFBMEgsVUFBUyxrQ0FBbkksRUFBM3V6QyxFQUFrNXpDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSw2Q0FBeEMsRUFBc0YsUUFBTyx3QkFBN0YsRUFBc0gsVUFBUyxtQ0FBL0gsRUFBbDV6QyxFQUFzajBDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sbUNBQTVDLEVBQWdGLFFBQU8sdUJBQXZGLEVBQStHLFVBQVMsa0NBQXhILEVBQXRqMEMsRUFBa3QwQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sbUNBQXRDLEVBQTBFLFFBQU8sdUJBQWpGLEVBQXlHLFVBQVMsa0NBQWxILEVBQWx0MEMsRUFBdzIwQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLCtDQUE1QyxFQUE0RixRQUFPLHNCQUFuRyxFQUEwSCxVQUFTLGlDQUFuSSxFQUF4MjBDLEVBQThnMUMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwrQ0FBN0MsRUFBNkYsUUFBTyx3QkFBcEcsRUFBNkgsVUFBUyxtQ0FBdEksRUFBOWcxQyxFQUF5cjFDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwrQ0FBeEMsRUFBd0YsUUFBTyx5QkFBL0YsRUFBeUgsVUFBUyxvQ0FBbEksRUFBenIxQyxFQUFpMjFDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0seUNBQTVDLEVBQXNGLFFBQU8sNkJBQTdGLEVBQTJILFVBQVMsOEJBQXBJLEVBQWoyMUMsRUFBcWcyQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0seUNBQXRDLEVBQWdGLFFBQU8sNkJBQXZGLEVBQXFILFVBQVMsOEJBQTlILEVBQXJnMkMsRUFBbXEyQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDREQUE1QyxFQUF5RyxRQUFPLDRCQUFoSCxFQUE2SSxVQUFTLDZCQUF0SixFQUFucTJDLEVBQXcxMkMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSw0REFBN0MsRUFBMEcsUUFBTyw4QkFBakgsRUFBZ0osVUFBUywrQkFBekosRUFBeDEyQyxFQUFraDNDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSw0REFBeEMsRUFBcUcsUUFBTywrQkFBNUcsRUFBNEksVUFBUyxnQ0FBckosRUFBbGgzQyxFQUF5czNDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sb0NBQTVDLEVBQWlGLFFBQU8sd0JBQXhGLEVBQWlILFVBQVMsb0NBQTFILEVBQXpzM0MsRUFBeTIzQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sb0NBQXRDLEVBQTJFLFFBQU8sd0JBQWxGLEVBQTJHLFVBQVMsb0NBQXBILEVBQXoyM0MsRUFBbWc0QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGlEQUE1QyxFQUE4RixRQUFPLHVCQUFyRyxFQUE2SCxVQUFTLG1DQUF0SSxFQUFuZzRDLEVBQThxNEMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxpREFBN0MsRUFBK0YsUUFBTyx5QkFBdEcsRUFBZ0ksVUFBUyxxQ0FBekksRUFBOXE0QyxFQUE4MTRDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxpREFBeEMsRUFBMEYsUUFBTywwQkFBakcsRUFBNEgsVUFBUyxzQ0FBckksRUFBOTE0QyxFQUEyZzVDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0scUNBQTVDLEVBQWtGLFFBQU8seUJBQXpGLEVBQW1ILFVBQVMsc0NBQTVILEVBQTNnNUMsRUFBK3E1QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0scUNBQXRDLEVBQTRFLFFBQU8seUJBQW5GLEVBQTZHLFVBQVMsc0NBQXRILEVBQS9xNUMsRUFBNjA1QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG1EQUE1QyxFQUFnRyxRQUFPLHdCQUF2RyxFQUFnSSxVQUFTLHFDQUF6SSxFQUE3MDVDLEVBQTYvNUMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxtREFBN0MsRUFBaUcsUUFBTywwQkFBeEcsRUFBbUksVUFBUyx1Q0FBNUksRUFBNy81QyxFQUFrcjZDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxtREFBeEMsRUFBNEYsUUFBTywyQkFBbkcsRUFBK0gsVUFBUyx3Q0FBeEksRUFBbHI2QyxFQUFvMjZDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sc0NBQTVDLEVBQW1GLFFBQU8sMEJBQTFGLEVBQXFILFVBQVMscUNBQTlILEVBQXAyNkMsRUFBeWc3QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sc0NBQXRDLEVBQTZFLFFBQU8sMEJBQXBGLEVBQStHLFVBQVMscUNBQXhILEVBQXpnN0MsRUFBd3E3QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHFEQUE1QyxFQUFrRyxRQUFPLHlCQUF6RyxFQUFtSSxVQUFTLG9DQUE1SSxFQUF4cTdDLEVBQTAxN0MsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxxREFBN0MsRUFBbUcsUUFBTywyQkFBMUcsRUFBc0ksVUFBUyxzQ0FBL0ksRUFBMTE3QyxFQUFpaDhDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxxREFBeEMsRUFBOEYsUUFBTyw0QkFBckcsRUFBa0ksVUFBUyx1Q0FBM0ksRUFBamg4QyxFQUFxczhDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sK0JBQTVDLEVBQTRFLFFBQU8sbUJBQW5GLEVBQXVHLFVBQVMsZ0RBQWhILEVBQXJzOEMsRUFBdTI4QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sK0JBQXRDLEVBQXNFLFFBQU8sbUJBQTdFLEVBQWlHLFVBQVMsZ0RBQTFHLEVBQXYyOEMsRUFBbWc5QyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHVDQUE1QyxFQUFvRixRQUFPLGtCQUEzRixFQUE4RyxVQUFTLCtDQUF2SCxFQUFuZzlDLEVBQTJxOUMsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSx1Q0FBN0MsRUFBcUYsUUFBTyxvQkFBNUYsRUFBaUgsVUFBUyxpREFBMUgsRUFBM3E5QyxFQUF3MTlDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSx1Q0FBeEMsRUFBZ0YsUUFBTyxxQkFBdkYsRUFBNkcsVUFBUyxrREFBdEgsRUFBeDE5QyxFQUFrZytDLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sd0NBQTVDLEVBQXFGLFFBQU8sNEJBQTVGLEVBQXlILFVBQVMsdUNBQWxJLEVBQWxnK0MsRUFBNnErQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sd0NBQXRDLEVBQStFLFFBQU8sNEJBQXRGLEVBQW1ILFVBQVMsdUNBQTVILEVBQTdxK0MsRUFBazErQyxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHlEQUE1QyxFQUFzRyxRQUFPLDJCQUE3RyxFQUF5SSxVQUFTLHNDQUFsSixFQUFsMStDLEVBQTRnL0MsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSx5REFBN0MsRUFBdUcsUUFBTyw2QkFBOUcsRUFBNEksVUFBUyx3Q0FBckosRUFBNWcvQyxFQUEycy9DLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSx5REFBeEMsRUFBa0csUUFBTyw4QkFBekcsRUFBd0ksVUFBUyx5Q0FBakosRUFBM3MvQyxFQUF1NC9DLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0seUNBQTVDLEVBQXNGLFFBQU8sNkJBQTdGLEVBQTJILFVBQVMseUNBQXBJLEVBQXY0L0MsRUFBc2pnRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0seUNBQXRDLEVBQWdGLFFBQU8sNkJBQXZGLEVBQXFILFVBQVMseUNBQTlILEVBQXRqZ0QsRUFBK3RnRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHdEQUE1QyxFQUFxRyxRQUFPLDRCQUE1RyxFQUF5SSxVQUFTLHdDQUFsSixFQUEvdGdELEVBQTI1Z0QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSx3REFBN0MsRUFBc0csUUFBTyw4QkFBN0csRUFBNEksVUFBUywwQ0FBckosRUFBMzVnRCxFQUE0bGhELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSx3REFBeEMsRUFBaUcsUUFBTywrQkFBeEcsRUFBd0ksVUFBUywyQ0FBakosRUFBNWxoRCxFQUEweGhELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sMENBQTVDLEVBQXVGLFFBQU8sOEJBQTlGLEVBQTZILFVBQVMsMENBQXRJLEVBQTF4aEQsRUFBNDhoRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sMENBQXRDLEVBQWlGLFFBQU8sOEJBQXhGLEVBQXVILFVBQVMsMENBQWhJLEVBQTU4aEQsRUFBd25pRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDZEQUE1QyxFQUEwRyxRQUFPLDZCQUFqSCxFQUErSSxVQUFTLHlDQUF4SixFQUF4bmlELEVBQTJ6aUQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSw2REFBN0MsRUFBMkcsUUFBTywrQkFBbEgsRUFBa0osVUFBUywyQ0FBM0osRUFBM3ppRCxFQUFtZ2pELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSw2REFBeEMsRUFBc0csUUFBTyxnQ0FBN0csRUFBOEksVUFBUyw0Q0FBdkosRUFBbmdqRCxFQUF3c2pELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sMkNBQTVDLEVBQXdGLFFBQU8sK0JBQS9GLEVBQStILFVBQVMsMkNBQXhJLEVBQXhzakQsRUFBNjNqRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sMkNBQXRDLEVBQWtGLFFBQU8sK0JBQXpGLEVBQXlILFVBQVMsMkNBQWxJLEVBQTczakQsRUFBNGlrRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLCtEQUE1QyxFQUE0RyxRQUFPLDhCQUFuSCxFQUFrSixVQUFTLDBDQUEzSixFQUE1aWtELEVBQW12a0QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwrREFBN0MsRUFBNkcsUUFBTyxnQ0FBcEgsRUFBcUosVUFBUyw0Q0FBOUosRUFBbnZrRCxFQUErN2tELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwrREFBeEMsRUFBd0csUUFBTyxpQ0FBL0csRUFBaUosVUFBUyw2Q0FBMUosRUFBLzdrRCxFQUF3b2xELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sK0NBQTVDLEVBQTRGLFFBQU8sbUNBQW5HLEVBQXVJLFVBQVMsK0NBQWhKLEVBQXhvbEQsRUFBeTBsRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sK0NBQXRDLEVBQXNGLFFBQU8sbUNBQTdGLEVBQWlJLFVBQVMsK0NBQTFJLEVBQXowbEQsRUFBb2dtRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHVFQUE1QyxFQUFvSCxRQUFPLGtDQUEzSCxFQUE4SixVQUFTLDhDQUF2SyxFQUFwZ21ELEVBQTJ0bUQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSx1RUFBN0MsRUFBcUgsUUFBTyxvQ0FBNUgsRUFBaUssVUFBUyxnREFBMUssRUFBM3RtRCxFQUF1N21ELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSx1RUFBeEMsRUFBZ0gsUUFBTyxxQ0FBdkgsRUFBNkosVUFBUyxpREFBdEssRUFBdjdtRCxFQUFncG5ELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sMENBQTVDLEVBQXVGLFFBQU8sSUFBOUYsRUFBbUcsVUFBUyx5REFBNUcsRUFBaHBuRCxFQUF1em5ELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sNEJBQTVDLEVBQXlFLFFBQU8sNkJBQWhGLEVBQThHLFVBQVMsc0NBQXZILEVBQXZ6bkQsRUFBczluRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sNEJBQXRDLEVBQW1FLFFBQU8sNkJBQTFFLEVBQXdHLFVBQVMsc0NBQWpILEVBQXQ5bkQsRUFBK21vRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG9EQUE1QyxFQUFpRyxRQUFPLDRCQUF4RyxFQUFxSSxVQUFTLHFDQUE5SSxFQUEvbW9ELEVBQW95b0QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSxvREFBN0MsRUFBa0csUUFBTyw4QkFBekcsRUFBd0ksVUFBUyx1Q0FBakosRUFBcHlvRCxFQUE4OW9ELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSxvREFBeEMsRUFBNkYsUUFBTywrQkFBcEcsRUFBb0ksVUFBUyx3Q0FBN0ksRUFBOTlvRCxFQUFxcHBELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sb0JBQTVDLEVBQWlFLFFBQU8sYUFBeEUsRUFBc0YsVUFBUyxvQ0FBL0YsRUFBcnBwRCxFQUEweHBELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxvQkFBdEMsRUFBMkQsUUFBTyxhQUFsRSxFQUFnRixVQUFTLG9DQUF6RixFQUExeHBELEVBQXk1cEQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSw0QkFBNUMsRUFBeUUsUUFBTyxZQUFoRixFQUE2RixVQUFTLG1DQUF0RyxFQUF6NXBELEVBQW9pcUQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSw0QkFBN0MsRUFBMEUsUUFBTyxjQUFqRixFQUFnRyxVQUFTLHFDQUF6RyxFQUFwaXFELEVBQW9ycUQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLDRCQUF4QyxFQUFxRSxRQUFPLGVBQTVFLEVBQTRGLFVBQVMsc0NBQXJHLEVBQXBycUQsRUFBaTBxRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHVCQUE1QyxFQUFvRSxRQUFPLElBQTNFLEVBQWdGLFVBQVMsNENBQXpGLEVBQWowcUQsRUFBdzhxRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHdCQUE1QyxFQUFxRSxRQUFPLElBQTVFLEVBQWlGLFVBQVMsNkNBQTFGLEVBQXg4cUQsRUFBaWxyRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHlCQUE1QyxFQUFzRSxRQUFPLElBQTdFLEVBQWtGLFVBQVMsOENBQTNGLEVBQWpsckQsRUFBNHRyRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG1DQUE1QyxFQUFnRixRQUFPLElBQXZGLEVBQTRGLFVBQVMsNkNBQXJHLEVBQTV0ckQsRUFBZzNyRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHVDQUE1QyxFQUFvRixRQUFPLElBQTNGLEVBQWdHLFVBQVMsaURBQXpHLEVBQWgzckQsRUFBNGdzRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDhDQUE1QyxFQUEyRixRQUFPLElBQWxHLEVBQXVHLFVBQVMsc0RBQWhILEVBQTVnc0QsRUFBb3JzRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHdDQUE1QyxFQUFxRixRQUFPLHdCQUE1RixFQUFxSCxVQUFTLGdEQUE5SCxFQUFwcnNELEVBQW8yc0QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLHdDQUF0QyxFQUErRSxRQUFPLHdCQUF0RixFQUErRyxVQUFTLGdEQUF4SCxFQUFwMnNELEVBQThndEQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSwyREFBNUMsRUFBd0csUUFBTyx1QkFBL0csRUFBdUksVUFBUywrQ0FBaEosRUFBOWd0RCxFQUErc3RELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0sMkRBQTdDLEVBQXlHLFFBQU8seUJBQWhILEVBQTBJLFVBQVMsaURBQW5KLEVBQS9zdEQsRUFBcTV0RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sMkRBQXhDLEVBQW9HLFFBQU8sMEJBQTNHLEVBQXNJLFVBQVMsa0RBQS9JLEVBQXI1dEQsRUFBd2x1RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDRDQUE1QyxFQUF5RixRQUFPLDRCQUFoRyxFQUE2SCxVQUFTLG9EQUF0SSxFQUF4bHVELEVBQW94dUQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLDRDQUF0QyxFQUFtRixRQUFPLDRCQUExRixFQUF1SCxVQUFTLG9EQUFoSSxFQUFweHVELEVBQTA4dUQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxtRUFBNUMsRUFBZ0gsUUFBTywyQkFBdkgsRUFBbUosVUFBUyxtREFBNUosRUFBMTh1RCxFQUEycHZELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0sbUVBQTdDLEVBQWlILFFBQU8sNkJBQXhILEVBQXNKLFVBQVMscURBQS9KLEVBQTNwdkQsRUFBaTN2RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sbUVBQXhDLEVBQTRHLFFBQU8sOEJBQW5ILEVBQWtKLFVBQVMsc0RBQTNKLEVBQWozdkQsRUFBb2t3RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDhDQUE1QyxFQUEyRixRQUFPLDhCQUFsRyxFQUFpSSxVQUFTLHNEQUExSSxFQUFwa3dELEVBQXN3d0QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLDhDQUF0QyxFQUFxRixRQUFPLDhCQUE1RixFQUEySCxVQUFTLHNEQUFwSSxFQUF0d3dELEVBQWs4d0QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSx1RUFBNUMsRUFBb0gsUUFBTyw2QkFBM0gsRUFBeUosVUFBUyxxREFBbEssRUFBbDh3RCxFQUEycHhELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0sdUVBQTdDLEVBQXFILFFBQU8sK0JBQTVILEVBQTRKLFVBQVMsdURBQXJLLEVBQTNweEQsRUFBeTN4RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sdUVBQXhDLEVBQWdILFFBQU8sZ0NBQXZILEVBQXdKLFVBQVMsd0RBQWpLLEVBQXozeEQsRUFBb2x5RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLCtDQUE1QyxFQUE0RixRQUFPLGVBQW5HLEVBQW1ILFVBQVMseUVBQTVILEVBQXBseUQsRUFBMnh5RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sK0NBQXRDLEVBQXNGLFFBQU8sZUFBN0YsRUFBNkcsVUFBUyx5RUFBdEgsRUFBM3h5RCxFQUE0OXlELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0seURBQTVDLEVBQXNHLFFBQU8sY0FBN0csRUFBNEgsVUFBUyx3RUFBckksRUFBNTl5RCxFQUEycXpELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0seURBQTdDLEVBQXVHLFFBQU8sZ0JBQTlHLEVBQStILFVBQVMsMEVBQXhJLEVBQTNxekQsRUFBKzN6RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0seURBQXhDLEVBQWtHLFFBQU8saUJBQXpHLEVBQTJILFVBQVMsMkVBQXBJLEVBQS8zekQsRUFBZ2wwRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLCtDQUE1QyxFQUE0RixRQUFPLGVBQW5HLEVBQW1ILFVBQVMseUVBQTVILEVBQWhsMEQsRUFBdXgwRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sK0NBQXRDLEVBQXNGLFFBQU8sZUFBN0YsRUFBNkcsVUFBUyx5RUFBdEgsRUFBdngwRCxFQUF3OTBELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0seURBQTVDLEVBQXNHLFFBQU8sY0FBN0csRUFBNEgsVUFBUyx3RUFBckksRUFBeDkwRCxFQUF1cTFELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0seURBQTdDLEVBQXVHLFFBQU8sZ0JBQTlHLEVBQStILFVBQVMsMEVBQXhJLEVBQXZxMUQsRUFBMjMxRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0seURBQXhDLEVBQWtHLFFBQU8saUJBQXpHLEVBQTJILFVBQVMsMkVBQXBJLEVBQTMzMUQsRUFBNGsyRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLGdEQUE1QyxFQUE2RixRQUFPLGdCQUFwRyxFQUFxSCxVQUFTLDBFQUE5SCxFQUE1azJELEVBQXN4MkQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLGdEQUF0QyxFQUF1RixRQUFPLGdCQUE5RixFQUErRyxVQUFTLDBFQUF4SCxFQUF0eDJELEVBQTA5MkQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSwyREFBNUMsRUFBd0csUUFBTyxlQUEvRyxFQUErSCxVQUFTLHlFQUF4SSxFQUExOTJELEVBQTZxM0QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE9BQVAsQ0FBdkIsRUFBdUMsT0FBTSwyREFBN0MsRUFBeUcsUUFBTyxpQkFBaEgsRUFBa0ksVUFBUywyRUFBM0ksRUFBN3EzRCxFQUFxNDNELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLFFBQUQsQ0FBdkIsRUFBa0MsT0FBTSwyREFBeEMsRUFBb0csUUFBTyxrQkFBM0csRUFBOEgsVUFBUyw0RUFBdkksRUFBcjQzRCxFQUEwbDRELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sMENBQTVDLEVBQXVGLFFBQU8sZ0JBQTlGLEVBQStHLFVBQVMsZ0RBQXhILEVBQTFsNEQsRUFBb3c0RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sMENBQXRDLEVBQWlGLFFBQU8sZ0JBQXhGLEVBQXlHLFVBQVMsZ0RBQWxILEVBQXB3NEQsRUFBdzY0RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHNEQUE1QyxFQUFtRyxRQUFPLGVBQTFHLEVBQTBILFVBQVMsK0NBQW5JLEVBQXg2NEQsRUFBNGw1RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQUF2QixFQUF1QyxPQUFNLHNEQUE3QyxFQUFvRyxRQUFPLGlCQUEzRyxFQUE2SCxVQUFTLGlEQUF0SSxFQUE1bDVELEVBQXF4NUQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLHNEQUF4QyxFQUErRixRQUFPLGtCQUF0RyxFQUF5SCxVQUFTLGtEQUFsSSxFQUFyeDVELEVBQTI4NUQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSx5Q0FBNUMsRUFBc0YsUUFBTyxlQUE3RixFQUE2RyxVQUFTLDZEQUF0SCxFQUEzODVELEVBQWdvNkQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLHlDQUF0QyxFQUFnRixRQUFPLGVBQXZGLEVBQXVHLFVBQVMsNkRBQWhILEVBQWhvNkQsRUFBK3k2RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG1EQUE1QyxFQUFnRyxRQUFPLGNBQXZHLEVBQXNILFVBQVMsNERBQS9ILEVBQS95NkQsRUFBNCs2RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQUF2QixFQUF1QyxPQUFNLG1EQUE3QyxFQUFpRyxRQUFPLGdCQUF4RyxFQUF5SCxVQUFTLDhEQUFsSSxFQUE1KzZELEVBQThxN0QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLG1EQUF4QyxFQUE0RixRQUFPLGlCQUFuRyxFQUFxSCxVQUFTLCtEQUE5SCxFQUE5cTdELEVBQTYyN0QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSx5Q0FBNUMsRUFBc0YsUUFBTyxlQUE3RixFQUE2RyxVQUFTLDZEQUF0SCxFQUE3MjdELEVBQWtpOEQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLHlDQUF0QyxFQUFnRixRQUFPLGVBQXZGLEVBQXVHLFVBQVMsNkRBQWhILEVBQWxpOEQsRUFBaXQ4RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG1EQUE1QyxFQUFnRyxRQUFPLGNBQXZHLEVBQXNILFVBQVMsNERBQS9ILEVBQWp0OEQsRUFBODQ4RCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQUF2QixFQUF1QyxPQUFNLG1EQUE3QyxFQUFpRyxRQUFPLGdCQUF4RyxFQUF5SCxVQUFTLDhEQUFsSSxFQUE5NDhELEVBQWdsOUQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsUUFBRCxDQUF2QixFQUFrQyxPQUFNLG1EQUF4QyxFQUE0RixRQUFPLGlCQUFuRyxFQUFxSCxVQUFTLCtEQUE5SCxFQUFobDlELEVBQSt3OUQsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSwwQ0FBNUMsRUFBdUYsUUFBTyxnQkFBOUYsRUFBK0csVUFBUyw4REFBeEgsRUFBL3c5RCxFQUF1ODlELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSwwQ0FBdEMsRUFBaUYsUUFBTyxnQkFBeEYsRUFBeUcsVUFBUyw4REFBbEgsRUFBdjg5RCxFQUF5bitELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0scURBQTVDLEVBQWtHLFFBQU8sZUFBekcsRUFBeUgsVUFBUyw2REFBbEksRUFBem4rRCxFQUEweitELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxPQUFQLENBQXZCLEVBQXVDLE9BQU0scURBQTdDLEVBQW1HLFFBQU8saUJBQTFHLEVBQTRILFVBQVMsK0RBQXJJLEVBQTF6K0QsRUFBZ2cvRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0scURBQXhDLEVBQThGLFFBQU8sa0JBQXJHLEVBQXdILFVBQVMsZ0VBQWpJLEVBQWhnL0QsRUFBbXMvRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLE9BQTVDLEVBQW9ELFFBQU8sT0FBM0QsRUFBbUUsVUFBUyxvQ0FBNUUsRUFBbnMvRCxFQUFxei9ELEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxPQUF0QyxFQUE4QyxRQUFPLElBQXJELEVBQTBELFVBQVMsNEJBQW5FLEVBQXJ6L0QsRUFBczUvRCxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sUUFBdEMsRUFBK0MsUUFBTyxRQUF0RCxFQUErRCxVQUFTLDZCQUF4RSxFQUF0NS9ELEVBQTYvL0QsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLFVBQXRDLEVBQWlELFFBQU8sSUFBeEQsRUFBNkQsVUFBUyxrQ0FBdEUsRUFBNy8vRCxFQUF1bWdFLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxpQkFBdEMsRUFBd0QsUUFBTyxnQkFBL0QsRUFBZ0YsVUFBUyxrREFBekYsRUFBdm1nRSxFQUFvdmdFLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sMEJBQTVDLEVBQXVFLFFBQU8sZ0JBQTlFLEVBQStGLFVBQVMsNENBQXhHLEVBQXB2Z0UsRUFBMDRnRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0saUJBQXRDLEVBQXdELFFBQU8sSUFBL0QsRUFBb0UsVUFBUyxvQ0FBN0UsRUFBMTRnRSxFQUE2L2dFLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sNEJBQTVDLEVBQXlFLFFBQU8sSUFBaEYsRUFBcUYsVUFBUyxrQ0FBOUYsRUFBNy9nRSxFQUErbmhFLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sZ0NBQTVDLEVBQTZFLFFBQU8sSUFBcEYsRUFBeUYsVUFBUyxnREFBbEcsRUFBL25oRSxFQUFteGhFLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLE1BQUQsQ0FBdkIsRUFBZ0MsT0FBTSxpQkFBdEMsRUFBd0QsUUFBTyxJQUEvRCxFQUFvRSxVQUFTLG1FQUE3RSxFQUFueGhFLEVBQXE2aEUsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxxQkFBNUMsRUFBa0UsUUFBTyxhQUF6RSxFQUF1RixVQUFTLDhCQUFoRyxFQUFyNmhFLEVBQXFpaUUsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSw2QkFBNUMsRUFBMEUsUUFBTyxjQUFqRixFQUFnRyxVQUFTLCtCQUF6RyxFQUFyaWlFLEVBQStxaUUsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLHFCQUF0QyxFQUE0RCxRQUFPLGFBQW5FLEVBQWlGLFVBQVMsOEJBQTFGLEVBQS9xaUUsRUFBeXlpRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLDZCQUE1QyxFQUEwRSxRQUFPLFlBQWpGLEVBQThGLFVBQVMsNkJBQXZHLEVBQXp5aUUsRUFBKzZpRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG1DQUE1QyxFQUFnRixRQUFPLFlBQXZGLEVBQW9HLFVBQVMsNkJBQTdHLEVBQS82aUUsRUFBMmpqRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sT0FBUCxDQUF2QixFQUF1QyxPQUFNLDZCQUE3QyxFQUEyRSxRQUFPLGNBQWxGLEVBQWlHLFVBQVMsK0JBQTFHLEVBQTNqakUsRUFBc3NqRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxRQUFELENBQXZCLEVBQWtDLE9BQU0sNkJBQXhDLEVBQXNFLFFBQU8sZUFBN0UsRUFBNkYsVUFBUyxnQ0FBdEcsRUFBdHNqRSxFQUE4MGpFLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLEVBQWMsTUFBZCxFQUFxQixLQUFyQixFQUEyQixPQUEzQixFQUFtQyxRQUFuQyxDQUF2QixFQUFvRSxPQUFNLCtCQUExRSxFQUEwRyxRQUFPLElBQWpILEVBQXNILFVBQVMsMEJBQS9ILEVBQTkwakUsRUFBeStqRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxFQUFjLE1BQWQsRUFBcUIsS0FBckIsRUFBMkIsT0FBM0IsRUFBbUMsUUFBbkMsQ0FBdkIsRUFBb0UsT0FBTSwrQ0FBMUUsRUFBMEgsUUFBTyxJQUFqSSxFQUFzSSxVQUFTLCtDQUEvSSxFQUF6K2pFLEVBQXlxa0UsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxnQkFBNUMsRUFBNkQsUUFBTyxJQUFwRSxFQUF5RSxVQUFTLDBCQUFsRixFQUF6cWtFLEVBQXV4a0UsRUFBQyxRQUFPLG9CQUFSLEVBQTZCLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QyxFQUFzRCxPQUFNLGdDQUE1RCxFQUE2RixRQUFPLElBQXBHLEVBQXlHLFVBQVMsK0JBQWxILEVBQXZ4a0UsRUFBMDZrRSxFQUFDLFFBQU8sb0JBQVIsRUFBNkIsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZDLEVBQXNELE9BQU0saUNBQTVELEVBQThGLFFBQU8sSUFBckcsRUFBMEcsVUFBUyxpQ0FBbkgsRUFBMTZrRSxFQUFna2xFLEVBQUMsUUFBTyxvQkFBUixFQUE2QixXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkMsRUFBc0QsT0FBTSxvQ0FBNUQsRUFBaUcsUUFBTyxJQUF4RyxFQUE2RyxVQUFTLG9DQUF0SCxFQUFoa2xFLEVBQTR0bEUsRUFBQyxRQUFPLG9CQUFSLEVBQTZCLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QyxFQUFzRCxPQUFNLGdCQUE1RCxFQUE2RSxRQUFPLElBQXBGLEVBQXlGLFVBQVMsMEJBQWxHLEVBQTV0bEUsRUFBMDFsRSxFQUFDLFFBQU8sdUJBQVIsRUFBZ0MsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQTFDLEVBQXlELE9BQU0sa0JBQS9ELEVBQWtGLFFBQU8sSUFBekYsRUFBOEYsVUFBUywyQkFBdkcsRUFBMTFsRSxFQUE4OWxFLEVBQUMsUUFBTyx1QkFBUixFQUFnQyxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBMUMsRUFBeUQsT0FBTSxPQUEvRCxFQUF1RSxRQUFPLElBQTlFLEVBQW1GLFVBQVMsMEJBQTVGLEVBQTk5bEUsRUFBc2xtRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLHdCQUE1QyxFQUFxRSxRQUFPLHFCQUE1RSxFQUFrRyxVQUFTLHlDQUEzRyxFQUF0bG1FLEVBQTh1bUUsRUFBQyxRQUFPLDBCQUFSLEVBQW1DLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUE3QyxFQUE0RCxPQUFNLElBQWxFLEVBQXVFLFFBQU8sSUFBOUUsRUFBbUYsVUFBUyw2QkFBNUYsRUFBOXVtRSxFQUF5Mm1FLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sU0FBNUMsRUFBc0QsUUFBTyxJQUE3RCxFQUFrRSxVQUFTLDBCQUEzRSxFQUF6Mm1FLEVBQWc5bUUsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsTUFBRCxDQUF2QixFQUFnQyxPQUFNLFdBQXRDLEVBQWtELFFBQU8sSUFBekQsRUFBOEQsVUFBUyw0QkFBdkUsRUFBaDltRSxFQUFxam5FLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sa0JBQTVDLEVBQStELFFBQU8sSUFBdEUsRUFBMkUsVUFBUyxpQ0FBcEYsRUFBcmpuRSxFQUE0cW5FLEVBQUMsUUFBTyxJQUFSLEVBQWEsV0FBVSxDQUFDLEtBQUQsRUFBTyxNQUFQLENBQXZCLEVBQXNDLE9BQU0sSUFBNUMsRUFBaUQsUUFBTyxJQUF4RCxFQUE2RCxVQUFTLGdCQUF0RSxFQUE1cW5FLEVBQW93bkUsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxhQUE1QyxFQUEwRCxRQUFPLElBQWpFLEVBQXNFLFVBQVMsZ0NBQS9FLEVBQXB3bkUsRUFBcTNuRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxNQUFELENBQXZCLEVBQWdDLE9BQU0sYUFBdEMsRUFBb0QsUUFBTyxJQUEzRCxFQUFnRSxVQUFTLGlDQUF6RSxFQUFyM25FLEVBQWkrbkUsRUFBQyxRQUFPLElBQVIsRUFBYSxXQUFVLENBQUMsS0FBRCxFQUFPLE1BQVAsQ0FBdkIsRUFBc0MsT0FBTSxjQUE1QyxFQUEyRCxRQUFPLElBQWxFLEVBQXVFLFVBQVMsZ0NBQWhGLEVBQWorbkUsRUFBb2xvRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLG1DQUE1QyxFQUFnRixRQUFPLElBQXZGLEVBQTRGLFVBQVMsd0RBQXJHLEVBQXBsb0UsRUFBcXZvRSxFQUFDLFFBQU8sSUFBUixFQUFhLFdBQVUsQ0FBQyxLQUFELEVBQU8sTUFBUCxDQUF2QixFQUFzQyxPQUFNLE9BQTVDLEVBQW9ELFFBQU8sSUFBM0QsRUFBZ0UsVUFBUyxnQkFBekUsRUFBcnZvRSxDQUpBO0FBS1RHLG9CQUFRLEVBTEM7O0FBT1RDLG1CQUFRLGVBQVV2RixJQUFWLEVBQWdCd0YsVUFBaEIsRUFBNEJELE1BQTVCLEVBQW1DO0FBQ3ZDQSx5QkFBUUEsVUFBUyxLQUFLRSxTQUFMLENBQWV6RixJQUFmLENBQWpCOztBQUVBLG9CQUFLLENBQUV1RixNQUFQLEVBQWU7QUFDWCwyQkFBT0csU0FBUDtBQUNIOztBQUVELHVCQUFPLEtBQUtDLE9BQUwsQ0FBYUosTUFBYixFQUFvQkMsVUFBcEIsQ0FBUDtBQUNILGFBZlE7O0FBaUJUOUIsaUJBQUssYUFBVUEsSUFBVixFQUFlOEIsVUFBZixFQUEyQjtBQUM1QkEsNkJBQWFBLGNBQWMsRUFBM0I7O0FBRUEsb0JBQUlJLE1BQU1sQyxPQUFNLEdBQU4sR0FBWThCLFdBQVdOLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBdEI7O0FBRUEsdUJBQU8sS0FBS1csYUFBTCxDQUFtQkQsR0FBbkIsQ0FBUDtBQUNILGFBdkJROztBQXlCVEQscUJBQVUsaUJBQVVKLEtBQVYsRUFBaUJDLFVBQWpCLEVBQTZCO0FBQ25DLG9CQUFJSSxNQUFNLEtBQUtFLHNCQUFMLENBQTRCUCxNQUFNSyxHQUFsQyxFQUF1Q0osVUFBdkMsQ0FBVjtBQUNBLG9CQUFJTyxLQUFNLEtBQUtDLG1CQUFMLENBQXlCUixVQUF6QixDQUFWOztBQUVBLG9CQUFJLEtBQUtKLFFBQUwsSUFBaUIsS0FBS2EsV0FBTCxDQUFpQlYsS0FBakIsQ0FBckIsRUFBNkM7QUFDekMsMkJBQU8sT0FBT0EsTUFBTVcsSUFBYixHQUFvQixHQUFwQixHQUEwQk4sR0FBMUIsR0FBZ0NHLEVBQXZDO0FBQ0g7O0FBRUQsdUJBQU8sS0FBS0YsYUFBTCxDQUFtQkQsTUFBTUcsRUFBekIsQ0FBUDtBQUNILGFBbENROztBQW9DVEUseUJBQWEscUJBQVVWLEtBQVYsRUFBZ0I7QUFDekIsdUJBQU9BLE1BQU1XLElBQU4sSUFBY1gsTUFBTVcsSUFBTixJQUFjN0csT0FBTzhHLFFBQVAsQ0FBZ0JDLFFBQW5EO0FBQ0gsYUF0Q1E7O0FBd0NUTixvQ0FBeUIsZ0NBQVVGLEdBQVYsRUFBZUosVUFBZixFQUEyQjtBQUNoREksc0JBQU1BLElBQUlTLE9BQUosQ0FBWSxlQUFaLEVBQTZCLFVBQVNDLEtBQVQsRUFBZ0J2RSxHQUFoQixFQUFxQjtBQUNwRCx3QkFBSXlELFdBQVdwRCxjQUFYLENBQTBCTCxHQUExQixDQUFKLEVBQW9DO0FBQ2hDLDRCQUFJbUIsUUFBUXNDLFdBQVd6RCxHQUFYLENBQVo7QUFDQSwrQkFBT3lELFdBQVd6RCxHQUFYLENBQVA7QUFDQSwrQkFBT21CLEtBQVA7QUFDSCxxQkFKRCxNQUlPO0FBQ0gsK0JBQU9vRCxLQUFQO0FBQ0g7QUFDSixpQkFSSyxDQUFOOztBQVVBO0FBQ0FWLHNCQUFNQSxJQUFJUyxPQUFKLENBQVksY0FBWixFQUE0QixFQUE1QixDQUFOOztBQUVBLHVCQUFPVCxHQUFQO0FBQ0gsYUF2RFE7O0FBeURUSSxpQ0FBc0IsNkJBQVVSLFVBQVYsRUFBc0I7QUFDeEMsb0JBQUlPLEtBQUssRUFBVDtBQUNBLHFCQUFLLElBQUloRSxHQUFULElBQWdCeUQsVUFBaEIsRUFBNEI7QUFDeEIsd0JBQUlBLFdBQVdwRCxjQUFYLENBQTBCTCxHQUExQixDQUFKLEVBQW9DO0FBQ2hDZ0UsMkJBQUdmLElBQUgsQ0FBUWpELE1BQU0sR0FBTixHQUFZeUQsV0FBV3pELEdBQVgsQ0FBcEI7QUFDSDtBQUNKOztBQUVELG9CQUFJZ0UsR0FBR3hELE1BQUgsR0FBWSxDQUFoQixFQUFtQjtBQUNmLDJCQUFPLEVBQVA7QUFDSDs7QUFFRCx1QkFBTyxNQUFNd0QsR0FBR2IsSUFBSCxDQUFRLEdBQVIsQ0FBYjtBQUNILGFBdEVROztBQXdFVE8sdUJBQVksbUJBQVV6RixJQUFWLEVBQWdCO0FBQ3hCLHFCQUFLLElBQUkrQixHQUFULElBQWdCLEtBQUtvRCxNQUFyQixFQUE2QjtBQUN6Qix3QkFBSSxLQUFLQSxNQUFMLENBQVkvQyxjQUFaLENBQTJCTCxHQUEzQixLQUFtQyxLQUFLb0QsTUFBTCxDQUFZcEQsR0FBWixFQUFpQi9CLElBQWpCLEtBQTBCQSxJQUFqRSxFQUF1RTtBQUNuRSwrQkFBTyxLQUFLbUYsTUFBTCxDQUFZcEQsR0FBWixDQUFQO0FBQ0g7QUFDSjtBQUNKLGFBOUVROztBQWdGVHdFLHlCQUFjLHFCQUFTQyxNQUFULEVBQWlCO0FBQzNCLHFCQUFLLElBQUl6RSxHQUFULElBQWdCLEtBQUtvRCxNQUFyQixFQUE2QjtBQUN6Qix3QkFBSSxLQUFLQSxNQUFMLENBQVkvQyxjQUFaLENBQTJCTCxHQUEzQixLQUFtQyxLQUFLb0QsTUFBTCxDQUFZcEQsR0FBWixFQUFpQnlFLE1BQWpCLEtBQTRCQSxNQUFuRSxFQUEyRTtBQUN2RSwrQkFBTyxLQUFLckIsTUFBTCxDQUFZcEQsR0FBWixDQUFQO0FBQ0g7QUFDSjtBQUNKLGFBdEZROztBQXdGVDhELDJCQUFlLHVCQUFVRCxHQUFWLEVBQWU7QUFDMUIsb0JBQUlsQyxNQUFNLEtBQUs0QixNQUFMLEdBQWMsR0FBZCxHQUFvQk0sSUFBSVMsT0FBSixDQUFZLE1BQVosRUFBb0IsRUFBcEIsQ0FBOUI7O0FBRUEsb0JBQUssQ0FBRSxLQUFLakIsUUFBWixFQUFzQjtBQUNsQiwyQkFBTzFCLEdBQVA7QUFDSDs7QUFFRCx1QkFBTyxLQUFLMkIsT0FBTCxDQUFhZ0IsT0FBYixDQUFxQixRQUFyQixFQUErQixFQUEvQixJQUFxQzNDLEdBQTVDO0FBQ0g7QUFoR1EsU0FBYjs7QUFtR0EsWUFBSStDLG9CQUFvQixTQUFwQkEsaUJBQW9CLENBQVNDLFVBQVQsRUFBcUI7QUFDekMsZ0JBQUssQ0FBRUEsVUFBUCxFQUFtQjtBQUNmLHVCQUFPLEVBQVA7QUFDSDs7QUFFRCxnQkFBSUMsUUFBUSxFQUFaO0FBQ0EsaUJBQUssSUFBSTVFLEdBQVQsSUFBZ0IyRSxVQUFoQixFQUE0QjtBQUN4QixvQkFBSUEsV0FBV3RFLGNBQVgsQ0FBMEJMLEdBQTFCLENBQUosRUFBb0M7QUFDaEM0RSwwQkFBTTNCLElBQU4sQ0FBV2pELE1BQU0sSUFBTixHQUFhMkUsV0FBVzNFLEdBQVgsQ0FBYixHQUErQixHQUExQztBQUNIO0FBQ0o7O0FBRUQsbUJBQU80RSxNQUFNekIsSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUNILFNBYkQ7O0FBZUEsWUFBSTBCLGNBQWMsU0FBZEEsV0FBYyxDQUFVbEQsR0FBVixFQUFlbUQsS0FBZixFQUFzQkgsVUFBdEIsRUFBa0M7QUFDaERHLG9CQUFhQSxTQUFTbkQsR0FBdEI7QUFDQWdELHlCQUFhRCxrQkFBa0JDLFVBQWxCLENBQWI7O0FBRUEsbUJBQU8sY0FBY2hELEdBQWQsR0FBb0IsSUFBcEIsR0FBMkJnRCxVQUEzQixHQUF3QyxHQUF4QyxHQUE4Q0csS0FBOUMsR0FBc0QsTUFBN0Q7QUFDSCxTQUxEOztBQU9BLGVBQU87QUFDSDtBQUNBO0FBQ0FMLG9CQUFTLGdCQUFVeEcsSUFBVixFQUFnQndGLFVBQWhCLEVBQTRCO0FBQ2pDQSw2QkFBYUEsY0FBYyxFQUEzQjs7QUFFQSx1QkFBT0wsT0FBT0ksS0FBUCxDQUFhdkYsSUFBYixFQUFtQndGLFVBQW5CLEVBQStCTCxPQUFPb0IsV0FBUCxDQUFtQnZHLElBQW5CLENBQS9CLENBQVA7QUFDSCxhQVBFOztBQVNIO0FBQ0E7QUFDQXVGLG1CQUFRLGVBQVVBLE9BQVYsRUFBaUJDLFVBQWpCLEVBQTZCO0FBQ2pDQSw2QkFBYUEsY0FBYyxFQUEzQjs7QUFFQSx1QkFBT0wsT0FBT0ksS0FBUCxDQUFhQSxPQUFiLEVBQW9CQyxVQUFwQixDQUFQO0FBQ0gsYUFmRTs7QUFpQkg7QUFDQTtBQUNBOUIsaUJBQU0sYUFBVTZCLEtBQVYsRUFBaUJDLFVBQWpCLEVBQTZCO0FBQy9CQSw2QkFBYUEsY0FBYyxFQUEzQjs7QUFFQSx1QkFBT0wsT0FBT3pCLEdBQVAsQ0FBVzZCLEtBQVgsRUFBa0JDLFVBQWxCLENBQVA7QUFDSCxhQXZCRTs7QUF5Qkg7QUFDQTtBQUNBc0IscUJBQVUsaUJBQVVwRCxHQUFWLEVBQWVtRCxLQUFmLEVBQXNCSCxVQUF0QixFQUFrQztBQUN4Q2hELHNCQUFNLEtBQUtBLEdBQUwsQ0FBU0EsR0FBVCxDQUFOOztBQUVBLHVCQUFPa0QsWUFBWWxELEdBQVosRUFBaUJtRCxLQUFqQixFQUF3QkgsVUFBeEIsQ0FBUDtBQUNILGFBL0JFOztBQWlDSDtBQUNBO0FBQ0FLLDJCQUFnQix1QkFBVXhCLEtBQVYsRUFBaUJzQixLQUFqQixFQUF3QnJCLFVBQXhCLEVBQW9Da0IsVUFBcEMsRUFBZ0Q7QUFDNUQsb0JBQUloRCxNQUFNLEtBQUs2QixLQUFMLENBQVdBLEtBQVgsRUFBa0JDLFVBQWxCLENBQVY7O0FBRUEsdUJBQU9vQixZQUFZbEQsR0FBWixFQUFpQm1ELEtBQWpCLEVBQXdCSCxVQUF4QixDQUFQO0FBQ0gsYUF2Q0U7O0FBeUNIO0FBQ0E7QUFDQU0sNEJBQWlCLHdCQUFTUixNQUFULEVBQWlCSyxLQUFqQixFQUF3QnJCLFVBQXhCLEVBQW9Da0IsVUFBcEMsRUFBZ0Q7QUFDN0Qsb0JBQUloRCxNQUFNLEtBQUs4QyxNQUFMLENBQVlBLE1BQVosRUFBb0JoQixVQUFwQixDQUFWOztBQUVBLHVCQUFPb0IsWUFBWWxELEdBQVosRUFBaUJtRCxLQUFqQixFQUF3QkgsVUFBeEIsQ0FBUDtBQUNIOztBQS9DRSxTQUFQO0FBbURILEtBOUthLENBOEtYTyxJQTlLVyxDQThLTixJQTlLTSxDQUFkOztBQWdMQTs7O0FBR0EsUUFBSSxJQUFKLEVBQWdEO0FBQzVDQyxRQUFBLGtDQUFPLFlBQVk7QUFDZixtQkFBT2pILE9BQVA7QUFDSCxTQUZEO0FBQUE7QUFHSCxLQUpELE1BS0ssSUFBSSxRQUFPa0gsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUFsQixJQUE4QkEsT0FBT0MsT0FBekMsRUFBaUQ7QUFDbERELGVBQU9DLE9BQVAsR0FBaUJuSCxPQUFqQjtBQUNILEtBRkksTUFHQTtBQUNEWixlQUFPWSxPQUFQLEdBQWlCQSxPQUFqQjtBQUNIO0FBRUosQ0FqTUQsRUFpTUdnSCxJQWpNSCxDQWlNUSxJQWpNUixFOzs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTUksTUFBTSxTQUFOQSxHQUFNLEdBQU07QUFDdkIsU0FBT25ILFNBQVNDLEVBQVQsQ0FBWUQsT0FBT0MsRUFBUCxDQUFVbUgsS0FBVixFQUFaLENBQVA7QUFDRCxDQUZNOztBQUlBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxPQUFRO0FBQy9CLFNBQU9ySCxPQUFPc0gsSUFBUCxFQUFhckgsRUFBYixDQUFnQkQsT0FBT0MsRUFBUCxDQUFVbUgsS0FBVixFQUFoQixDQUFQO0FBQ0QsQ0FGTTs7QUFJQSxJQUFNRyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQzVDLFNBQU96SCxPQUFPMEgsUUFBUCxDQUFnQjFILE9BQU95SCxLQUFQLEVBQWNFLElBQWQsQ0FBbUIzSCxPQUFPd0gsS0FBUCxDQUFuQixFQUFrQyxTQUFsQyxDQUFoQixFQUE4RCxTQUE5RCxFQUF5RUksUUFBekUsRUFBUDtBQUNELENBRk07O0FBSUEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQUNQLElBQUQsRUFBVTtBQUNsQyxTQUFPRCxVQUFVQyxJQUFWLEVBQWdCUSxNQUFoQixDQUF1QixRQUF2QixDQUFQO0FBQ0QsQ0FGTTs7QUFJQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxTQUFELEVBQVlDLE9BQVosRUFBd0I7O0FBRXRELE1BQUlDLGtCQUFrQmIsVUFBVVcsU0FBVixDQUF0QjtBQUNBLE1BQUlHLFVBQVcsQ0FBR0QsZ0JBQWdCSixNQUFoQixDQUF1QixJQUF2QixJQUErQixFQUFoQyxHQUFzQ00sU0FBU0YsZ0JBQWdCSixNQUFoQixDQUF1QixJQUF2QixDQUFULENBQXhDLElBQW1GLENBQXBGLEdBQXlGLEVBQXZHOztBQUVBLE1BQUlPLGdCQUFnQmhCLFVBQVVZLE9BQVYsQ0FBcEI7QUFDQSxNQUFJSyxRQUFVLENBQUdELGNBQWNQLE1BQWQsQ0FBcUIsSUFBckIsSUFBNkIsRUFBOUIsR0FBb0NNLFNBQVNDLGNBQWNQLE1BQWQsQ0FBcUIsSUFBckIsQ0FBVCxDQUF0QyxJQUErRSxDQUFoRixHQUFxRixFQUF0RixHQUE0RkssT0FBeEc7O0FBRUEsa0JBQWNBLE9BQWQsbUJBQW9DRyxLQUFwQztBQUNILENBVE0sQzs7Ozs7Ozs7O0FDaEJBLElBQU1DLFFBQVEsU0FBUkEsS0FBUSxHQUFNO0FBQ3pCLFNBQU9oSSxRQUFRaUksR0FBUixLQUFnQixPQUF2QjtBQUNELENBRk0sQzs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFDQTtBQUNPLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFTQyxJQUFULEVBQWU7QUFDeEMsTUFBSSxDQUFDQyxFQUFFRCxJQUFGLEVBQVFFLEVBQVIsQ0FBVyxNQUFYLENBQUwsRUFBeUI7QUFDdkJGLFdBQU9DLEVBQUVELElBQUYsRUFBUUcsSUFBUixDQUFhLE1BQWIsRUFBcUIsQ0FBckIsQ0FBUDtBQUNEO0FBQ0QsU0FBTyxJQUFJeEYsUUFBSixDQUFhcUYsSUFBYixDQUFQO0FBQ0QsQ0FMTTs7QUFPUDs7QUFFTyxJQUFNSSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ3BHLElBQUQsRUFBT0UsS0FBUCxFQUFpQjtBQUN6QyxTQUFPLElBQUksOERBQUosQ0FBU0YsSUFBVCxFQUFlRSxLQUFmLENBQVA7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYUDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQXZELElBQUkwSixLQUFKLENBQVU7QUFDUkMsV0FBUztBQUNQN0IsU0FBQSx1REFETztBQUVQOEIsVUFBQSxxREFGTztBQUdQMUIsa0JBQUEsZ0VBSE87QUFJUGpCLFlBQUEsdURBSk87QUFLUDRDLGVBQUEsaUVBTE87QUFNUDdCLGVBQUEsNkRBTk87QUFPUFEsZ0JBQUEsOERBUE87QUFRUGlCLGdCQUFBLHlEQVJPO0FBU1BLLGlCQUFBLG1FQVRPO0FBVVBWLGlCQUFBLDBEQVZPO0FBV1BqRSxvQkFBQSxzRUFYTztBQVlQdUQsd0JBQUEsc0VBQUFBO0FBWk8sR0FERDtBQWVScUIsWUFBVTtBQUNSYixXQUFBLDJEQURRO0FBRVJjLGFBQUEsNkRBQUFBO0FBRlE7QUFmRixDQUFWLEU7Ozs7Ozs7Ozs7OztBQ1pPLElBQU1ILFlBQVksU0FBWkEsU0FBWSxDQUFTSSxPQUFULEVBQWtCM0MsS0FBbEIsRUFBeUI0QyxPQUF6QixFQUFrQztBQUN6RCxNQUFJQSxZQUFZL0QsU0FBaEIsRUFBMkI7QUFDekIrRCxjQUFVLElBQVY7QUFDRDs7QUFFRCxPQUFLckYsTUFBTCxDQUFZc0YsUUFBWixDQUFxQixtQkFBckIsRUFBMEM7QUFDeEM3QyxXQUFPLENBQUM5RCxFQUFFNEcsT0FBRixDQUFVOUMsS0FBVixDQUFELEdBQW9CQSxLQUFwQixHQUE0QixTQURLO0FBRXhDK0MsVUFBTUosT0FGa0M7QUFHeENLLFdBQU8sT0FIaUM7QUFJeENKLGFBQVNBO0FBSitCLEdBQTFDO0FBTUQsQ0FYTTtBQVlBLElBQU1KLGNBQWMsU0FBZEEsV0FBYyxDQUFTRyxPQUFULEVBQWtCM0MsS0FBbEIsRUFBeUI0QyxPQUF6QixFQUFrQztBQUMzRCxNQUFJQSxZQUFZL0QsU0FBaEIsRUFBMkI7QUFDekIrRCxjQUFVLElBQVY7QUFDRDs7QUFFRCxPQUFLckYsTUFBTCxDQUFZc0YsUUFBWixDQUFxQixtQkFBckIsRUFBMEM7QUFDeEM3QyxXQUFPLENBQUM5RCxFQUFFNEcsT0FBRixDQUFVOUMsS0FBVixDQUFELEdBQW9CQSxLQUFwQixHQUE0QixXQURLO0FBRXhDK0MsVUFBTUosT0FGa0M7QUFHeENLLFdBQU8sU0FIaUM7QUFJeENKLGFBQVNBO0FBSitCLEdBQTFDO0FBTUQsQ0FYTTs7QUFhQSxJQUFNL0UsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFTbEQsUUFBVCxFQUFtQjtBQUMvQyxNQUFJZ0ksVUFBVWhJLFFBQWQ7O0FBRUEsTUFBSXVCLEVBQUVPLFFBQUYsQ0FBVzlCLFFBQVgsQ0FBSixFQUEwQjtBQUN4QixRQUFJdUIsRUFBRStHLEtBQUYsQ0FBUXRJLFNBQVNVLE1BQWpCLENBQUosRUFBOEI7QUFDNUJzSCxnQkFBVWhJLFNBQVNVLE1BQW5CO0FBQ0QsS0FGRCxNQUVPLElBQUlhLEVBQUVPLFFBQUYsQ0FBVzlCLFNBQVNvQixJQUFwQixDQUFKLEVBQStCO0FBQ3BDNEcsZ0JBQVUsRUFBVjtBQUNBekcsUUFBRW9CLElBQUYsQ0FBTzNDLFNBQVNvQixJQUFULENBQWNWLE1BQXJCLEVBQTZCLFVBQVNiLEtBQVQsRUFBZ0I7QUFDM0NtSSxtQkFBV25JLFFBQVEsTUFBbkI7QUFDRCxPQUZEO0FBR0QsS0FMTSxNQUtBO0FBQ0xtSSxnQkFBVWhJLFNBQVNvQixJQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSUcsRUFBRW1CLFFBQUYsQ0FBV3NGLE9BQVgsQ0FBSixFQUF5QjtBQUN2QixTQUFLSixTQUFMLENBQWVJLE9BQWY7QUFDRCxHQUZELE1BRU87QUFDTDVFLFlBQVFtRixJQUFSLENBQWEsdUJBQWI7QUFDRDtBQUNGLENBckJNLEM7Ozs7Ozs7Ozs7QUN6QkEsSUFBTVIsVUFBVSxTQUFWQSxPQUFVLEdBQVc7QUFDaEM7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7QUNBQSxJQUFNSixPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUN4QjlKLFNBQU8ySyxPQUFQLENBQWViLElBQWY7QUFDRCxDQUZNOztBQUlBLElBQU0zQyxTQUFTLGdCQUFDQSxPQUFELEVBQVNoQixVQUFULEVBQXdCO0FBQzVDO0FBQ0QsQ0FGTSxDOzs7Ozs7O0FDSlAsbUJBQUFwRyxDQUFRLCtDQUFSLEU7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQUMsT0FBTzRLLFNBQVAsR0FBbUIsbUJBQUE3SyxDQUFRLHFEQUFSLENBQW5COztBQUVBLDJDQUFBRyxDQUFJc0IsR0FBSixDQUFRb0osU0FBUjs7QUFFQSxJQUFNdEssU0FBUyxJQUFJc0ssU0FBSixDQUFjO0FBQzNCQyxRQUFNLFNBRHFCO0FBRTNCL0UsVUFBUSwrREFBQUE7QUFGbUIsQ0FBZCxDQUFmOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUFleEYsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUFBSixDQUFJc0IsR0FBSixDQUFRLDZDQUFSO0FBQ0EsMkNBQUF0QixDQUFJaUQsSUFBSixHQUFXLDhEQUFYO0FBQ0EsMkNBQUFqRCxDQUFJMEMsTUFBSixHQUFhLGdFQUFiO0FBQ0EsMkNBQUExQyxDQUFJOEQsT0FBSixHQUFjLGlFQUFkOztBQUVBLDJDQUFBOUQsQ0FBSWlILE1BQUosR0FBYSxzRUFBYjs7QUFFQSwyQ0FBQWpILENBQUlxQixPQUFKLEdBQWMsZ0JBQVE7QUFDcEIsU0FBTyxJQUFJLGlFQUFKLENBQVlnQyxJQUFaLENBQVA7QUFDRCxDQUZEOztBQUlBLHlEQUFlLElBQUksNkNBQUF1SCxDQUFLQyxLQUFULENBQWU7QUFDNUJDLFdBQVMseURBQUFBO0FBRG1CLENBQWYsQ0FBZixFOzs7Ozs7Ozs7O0FDbkJPLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxPQUFELEVBQVUzSCxJQUFWLEVBQW1CO0FBQ3ZDLFNBQU9yRCxJQUFJcUIsT0FBSixDQUFZZ0MsSUFBWixFQUNKNEgsSUFESSxDQUNDakwsSUFBSWlILE1BQUosQ0FBVyw0QkFBWCxDQURELEVBRUp4QyxJQUZJLENBRUMsWUFBTTtBQUNWM0UsV0FBTzhHLFFBQVAsR0FBa0IsR0FBbEI7QUFDRCxHQUpJLENBQVA7QUFLRCxDQU5NLEM7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBQ0E7O0FBRUEseURBQWU7QUFDYnNFLFNBQUEsdURBRGE7QUFFYkMsV0FBQSxzQ0FGYTtBQUdiL0csYUFBQSx3Q0FIYTtBQUliZ0gsY0FBWTtBQUpDLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDSkEseURBQWUsRUFBZixFOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7eURBRWU7QUFDYkMsUUFBQSxzREFEYTtBQUViQyxTQUFBLHVEQUZhO0FBR2JDLFVBQUEsd0RBSGE7QUFJYkMsYUFBQSwyREFKYTtBQUtiQyxpQkFBQSwrREFBQUE7QUFMYSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDTk8sSUFBTUMsTUFBTSxTQUFOQSxHQUFNLE9BQWFDLFlBQWIsRUFBOEI7QUFBQSxNQUEzQjdHLE1BQTJCLFFBQTNCQSxNQUEyQjs7QUFDL0NBLFNBQU8sS0FBUCxFQUFjNkcsWUFBZDtBQUNELENBRk07O0FBSUEsSUFBTUMsU0FBUyxTQUFUQSxNQUFTLFFBQWFELFlBQWIsRUFBOEI7QUFBQSxNQUEzQjdHLE1BQTJCLFNBQTNCQSxNQUEyQjs7QUFDbERBLFNBQU8sUUFBUCxFQUFpQjZHLFlBQWpCO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7OztBQ0pQO0FBQ0E7QUFDQTs7QUFFQSx5REFBZTtBQUNiVCxTQUFBLHVEQURhO0FBRWJDLFdBQUEsc0NBRmE7QUFHYi9HLGFBQUEsd0NBSGE7QUFJYmdILGNBQVk7QUFKQyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDSk8sSUFBTU0sTUFBTSxTQUFOQSxHQUFNLENBQUNSLEtBQUQsRUFBUVMsWUFBUixFQUF5QjtBQUMxQ1QsUUFBTU8sYUFBTixDQUFvQmhHLElBQXBCLENBQXlCa0csWUFBekI7QUFDRCxDQUZNOztBQUlBLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDVixLQUFELEVBQVFTLFlBQVIsRUFBeUI7QUFDN0NULFFBQU1PLGFBQU4sR0FBc0JqSSxFQUFFcUksT0FBRixDQUFVWCxNQUFNTyxhQUFoQixFQUErQkUsWUFBL0IsQ0FBdEI7QUFDRCxDQUZNLEM7Ozs7Ozs7OztBQ0pQLHlEQUFlO0FBQ2JGLGlCQUFlO0FBREYsQ0FBZixFOzs7Ozs7Ozs7O0FDQU8sSUFBTUssTUFBTSxTQUFOQSxHQUFNLEdBQU07QUFDckI5TCxRQUFJcUIsT0FBSixHQUFjeUssR0FBZCxDQUFrQixnQkFBbEIsRUFBb0Msa0JBQXBDO0FBQ0gsQ0FGTSxDOzs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUNBOztBQUVBOzt5REFFZTtBQUNiWixXQUFBLHVEQURhO0FBRWJDLGFBQUEsc0NBRmE7QUFHYi9HLGVBQUEsd0NBSGE7QUFJYmdILGdCQUFZLElBSkM7QUFLWE4sYUFBVTtBQUNOUSxlQUFBLCtEQUFBQTtBQURNO0FBTEMsQ0FBZixFOzs7Ozs7Ozs7Ozs7O0FDTk8sSUFBTVEsTUFBTSxTQUFOQSxHQUFNLE9BQUtDLFFBQUwsRUFBa0I7QUFBQTs7QUFDakMvTCxRQUFJcUIsT0FBSixHQUFjeUssR0FBZCxxQkFBb0NDLFFBQXBDLGFBQXNELHdCQUF0RDtBQUNILENBRk07O0FBSUEsSUFBTWhNLFFBQVEsU0FBUkEsS0FBUSxRQUFLc0QsSUFBTCxFQUFjO0FBQUE7O0FBQy9CckQsUUFBSXFCLE9BQUosQ0FBWWdDLElBQVosRUFBa0I0SCxJQUFsQixxQkFBeUM1SCxLQUFLMEksUUFBOUMsYUFBZ0UsV0FBaEUsRUFBNkV0SCxJQUE3RSxDQUFrRixVQUFDdUgsSUFBRCxFQUFVO0FBQ3hGN0wsWUFBSThMLE9BQUosQ0FBWXhHLElBQVosYUFBMkJ1RyxLQUFLRSxFQUFoQztBQUNILEtBRkQ7QUFHSCxDQUpNLEM7Ozs7Ozs7Ozs7OztBQ0pQO0FBQ0E7QUFDQTs7QUFFQSx5REFBZTtBQUNiaEIsU0FBQSx1REFEYTtBQUViQyxXQUFBLHNDQUZhO0FBR2IvRyxhQUFBLHdDQUhhO0FBSWJnSCxjQUFZO0FBSkMsQ0FBZixFOzs7Ozs7Ozs7O0FDSk8sSUFBTWUsU0FBUyxTQUFUQSxNQUFTLENBQUNqQixLQUFELFFBQXlCO0FBQUEsTUFBZmpKLFFBQWUsUUFBZkEsUUFBZTs7QUFDN0NpSixRQUFNSSxLQUFOLEdBQWNySixRQUFkO0FBQ0QsQ0FGTSxDOzs7Ozs7OztBQ0FQLHlEQUFlO0FBQ2JxSixTQUFPO0FBRE0sQ0FBZixFOzs7Ozs7Ozs7O0FDQU8sSUFBTWEsU0FBUyxTQUFUQSxNQUFTLENBQUNqQixLQUFELFFBQXlCO0FBQUEsTUFBZmpKLFFBQWUsUUFBZkEsUUFBZTs7QUFDN0NpSixRQUFNTSxTQUFOLEdBQWtCdkosUUFBbEI7QUFDRCxDQUZNLEM7Ozs7Ozs7O0FDQVAseURBQWU7QUFDYnVKLGFBQVc7QUFERSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNTSxNQUFNLFNBQU5BLEdBQU0sT0FBUTtBQUFBOztBQUN2QjlMLFFBQUlxQixPQUFKLEdBQWN5SyxHQUFkLGVBQWdDLGNBQWhDO0FBQ0gsQ0FGTTs7QUFJQSxJQUFNTSxPQUFPLFNBQVBBLElBQU8sUUFBS0osSUFBTCxFQUFjO0FBQUE7O0FBQzlCaE0sUUFBSXFCLE9BQUosR0FBY3lLLEdBQWQsaUJBQWdDRSxJQUFoQyxFQUF3QyxXQUF4QztBQUNILENBRk0sQzs7Ozs7Ozs7Ozs7OztBQ0pQO0FBQ0E7QUFDQTs7QUFFQTs7eURBRWU7QUFDYmQsU0FBQSx1REFEYTtBQUViQyxXQUFBLHNDQUZhO0FBR2IvRyxhQUFBLHdDQUhhO0FBSWJnSCxjQUFZLElBSkM7QUFLYk4sV0FBVTtBQUNOdUIsWUFBQSxnRUFBQUE7QUFETTtBQUxHLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDTk8sSUFBTVAsTUFBTSxTQUFOQSxHQUFNLE9BQUtFLElBQUwsRUFBYztBQUFBOztBQUM3QmhNLFFBQUlxQixPQUFKLEdBQWN5SyxHQUFkLGlCQUFnQ0UsSUFBaEMsY0FBK0MscUJBQS9DO0FBQ0gsQ0FGTSxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBQ0E7O0FBRUEseURBQWU7QUFDYmQsU0FBQSx1REFEYTtBQUViQyxXQUFBLHNDQUZhO0FBR2IvRyxhQUFBLHdDQUhhO0FBSWJnSCxjQUFZO0FBSkMsQ0FBZixFOzs7Ozs7Ozs7OztBQ0pPLElBQU1lLFNBQVMsU0FBVEEsTUFBUyxDQUFDakIsS0FBRCxRQUF5QjtBQUFBLE1BQWZqSixRQUFlLFFBQWZBLFFBQWU7O0FBQzdDaUosUUFBTW1CLE1BQU4sR0FBZXBLLFFBQWY7QUFDRCxDQUZNOztBQUlBLElBQU1xSyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ3BCLEtBQUQsRUFBUXFCLE9BQVIsRUFBb0I7QUFDbkNyQixRQUFNc0IsS0FBTixHQUFjRCxPQUFkO0FBQ0gsQ0FGTSxDOzs7Ozs7OztBQ0pQLHlEQUFlO0FBQ2JGLFVBQVEsRUFESztBQUViRyxTQUFRO0FBRkssQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNBTyxJQUFNRixNQUFNLFNBQU5BLEdBQU0sQ0FBQ3BCLEtBQUQsUUFBeUI7QUFBQSxRQUFmakosUUFBZSxRQUFmQSxRQUFlOztBQUN4Q2lKLFVBQU1jLElBQU4sR0FBYS9KLFFBQWI7QUFDSCxDQUZNOztBQUlBLElBQU1rSyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ2pCLEtBQUQsU0FBeUI7QUFBQSxRQUFmakosUUFBZSxTQUFmQSxRQUFlOztBQUM3Q2lKLFVBQU1JLEtBQU4sR0FBY3JKLFFBQWQ7QUFDRCxDQUZNOztBQUlBLElBQU15SixNQUFNLFNBQU5BLEdBQU0sQ0FBQ1IsS0FBRCxTQUF5QjtBQUFBLFFBQWZqSixRQUFlLFNBQWZBLFFBQWU7O0FBQ3hDaUosVUFBTUksS0FBTixDQUFZN0YsSUFBWixDQUFpQnhELFFBQWpCO0FBQ0gsQ0FGTSxDOzs7Ozs7OztBQ1JQLHlEQUFlO0FBQ2IrSixRQUFNLElBRE87QUFFYlYsU0FBUTtBQUZLLENBQWYsRTs7Ozs7Ozs7OztBQ0FPLElBQU1tQixhQUFhLFNBQWJBLFVBQWEsT0FBYXBKLElBQWIsRUFBc0I7QUFBQSxNQUFuQnlCLE1BQW1CLFFBQW5CQSxNQUFtQjs7QUFDOUNBLFNBQU8sWUFBUCxFQUFxQnpCLEtBQUtxSixPQUExQjtBQUNELENBRk0sQzs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBQ0E7O0FBRUEseURBQWU7QUFDYnhCLFNBQUEsdURBRGE7QUFFYkMsV0FBQSxzQ0FGYTtBQUdiL0csYUFBQSx3Q0FIYTtBQUliZ0gsY0FBWTtBQUpDLENBQWYsRTs7Ozs7Ozs7OztBQ0pPLElBQU1xQixhQUFhLFNBQWJBLFVBQWEsQ0FBQ3ZCLEtBQUQsRUFBUXdCLE9BQVIsRUFBb0I7QUFDNUN4QixRQUFNd0IsT0FBTixHQUFnQkEsT0FBaEI7QUFDRCxDQUZNLEM7Ozs7Ozs7O0FDQVAseURBQWU7QUFDYkEsV0FBU3hMLFFBQVF3TDtBQURKLENBQWYsRTs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICBMZXRzIGNvbm5lY3QgeW91ciBmaXJzdCBwcm92aWRlclxuXG4gICAgICAgIDxhIGhyZWY9XCIvcHJvdmlkZXIvb2ZmaWNlMzY1L2xpbmtcIj5PZmZpY2UgMzY1PC9hPlxuICAgICAgICA8YSBocmVmPVwiL3Byb3ZpZGVyL2dzdWl0ZS9saW5rXCI+R1N1aXRlPC9hPlxuXG4gICAgICAgIDxoMz5Db25uZWN0ZWQgQWNjb3VudHM8L2gzPlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJwcm92aWRlciBpbiBwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAncHJvdmlkZXJfcm9vbXMnLCBwYXJhbXMgOiB7IHByb3ZpZGVyIDogcHJvdmlkZXIuaWQgfX1cIj5cbiAgICAgICAgICAgICAgICB7eyBwcm92aWRlci5lbWFpbCB9fSBbe3sgcHJvdmlkZXIucHJvdmlkZXIgfX1dXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxoMz5Sb29tczwvaDM+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInJvb20gaW4gcm9vbXNcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdyb29tJywgcGFyYW1zIDogeyByb29tIDogcm9vbS5pZCB9fVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyByb29tLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3Jvb21zL2dldCcpXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncHJvdmlkZXJzL2dldCcpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkIDoge1xuICAgICAgICAgICAgcm9vbXMoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5yb29tcy5yb29tcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm92aWRlcnMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnByb3ZpZGVycy5wcm92aWRlcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBEYXNoYm9hcmQudnVlP2Q2MTNhN2ZhIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5BdmFpbGFibGUgUm9vbXM8L2gzPlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJyb29tIGluIHJvb21zXCI+XG4gICAgICAgICAgICA8ZGl2IEBjbGljaz1cImNyZWF0ZVJvb20ocm9vbSlcIj5cbiAgICAgICAgICAgICAgICB7eyByb29tLm5hbWUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncHJvdmlkZXJzL3Jvb21zL2dldCcsIHRoaXMuJHJvdXRlLnBhcmFtcy5wcm92aWRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHMgOiB7XG4gICAgICAgICAgICBjcmVhdGVSb29tKHJvb20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncHJvdmlkZXJzL3Jvb21zL3N0b3JlJywge1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogcm9vbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICByb29tIDogcm9vbS5yb29tLFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA6IHRoaXMuJHJvdXRlLnBhcmFtcy5wcm92aWRlclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkIDoge1xuICAgICAgICAgICAgcm9vbXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnByb3ZpZGVycy5yb29tcy5yb29tcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSb29tcy52dWU/ZjEwNTdiOWEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBpZD1cInJvb21cIiB2LWlmPVwicm9vbVwiPlxuICAgICAgICA8ZGl2IGlkPVwicm9vbS1jb250ZW50XCI+XG5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJyb29tLWhlYWRlciBsZXZlbFwiPlxuICAgICAgICAgICAgICAgIDwhLS0gTGVmdCBzaWRlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57eyByb29tLm5hbWUgfX08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gUmlnaHQgc2lkZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7IGN1cnJlbnREYXRlIH19PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8IS0tY29udGVudCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIHJvb20tZGV0YWlsc1wiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYWxlbmRhci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxyb29tLXN0YXR1cz48L3Jvb20tc3RhdHVzPlxuICAgICAgICAgICAgICAgICAgICA8Y2FsZW5kYXI+PC9jYWxlbmRhcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3BsYXkgUm9vbSBEZXRhaWxzIEhlcmUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VhdHMsIHRlY2hub2xvZ2llcywgY29ubmVjdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgPGJvb2tpbmctYXR0ZW5kZWVzIDpib29raW5nPVwic2VsZWN0ZWRCb29raW5nXCI+PC9ib29raW5nLWF0dGVuZGVlcz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm9vbS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBMZWZ0IHNpZGUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbGVhc2UgLyAoQ2hlY2sgSW4gLyBTdGFydCBFYXJseSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFJpZ2h0IHNpZGUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZXZlbC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmluZCBBbm90aGVyIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZSc7XG4gICAgaW1wb3J0IFJvb21TdGF0dXMgZnJvbSAnLi9jb21wb25lbnRzL1Jvb21TdGF0dXMudnVlJztcbiAgICBpbXBvcnQgQm9va2luZ0F0dGVuZGVlcyBmcm9tICcuL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWUnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzIDoge1xuICAgICAgICAgICAgQ2FsZW5kYXIsXG4gICAgICAgICAgICBSb29tU3RhdHVzLFxuICAgICAgICAgICAgQm9va2luZ0F0dGVuZGVlcyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdyb29tcy9zaG93JywgdGhpcy4kcm91dGUucGFyYW1zLnJvb20pO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3Jvb21zL2V2ZW50cy9nZXQnLCB0aGlzLiRyb3V0ZS5wYXJhbXMucm9vbSlcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHJvb20oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnJvb21zLnJvb207XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VycmVudERhdGUoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtb21lbnQoKS5mb3JtYXQoJ2xsJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RlZEJvb2tpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnJvb21zLmV2ZW50cy5ldmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSb29tLnZ1ZT80Zjk2YjlhZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJib29raW5nXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImF0dGVuZGVlIGluIGJvb2tpbmcuYXR0ZW5kZWVzXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtzdGF0dXN9IC0ge3sgYXR0ZW5kZWUubmFtZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICBwcm9wcyA6IFsnYm9va2luZyddXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEJvb2tpbmdBdHRlbmRlZXMudnVlPzdlMTVmMDAzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiIHJlZj1cImNhbGVuZGFyXCIgQHNjcm9sbD1cInNldFNjcm9sbFRpbWVvdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvdXItY29udGFpbmVyXCIgdi1mb3I9XCJob3VyIGluIGhvdXJzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaG91clwiPnt7IGhvdXIuZGlzcGxheSB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiYm9va2luZyBpbiBib29raW5nc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb2tpbmdcIiA6c3R5bGU9XCJnZXRUaW1lSGVpZ2h0U3R5bGUoYm9va2luZy5zdGFydF9kYXRlLCBib29raW5nLmVuZF9kYXRlKVwiIEBjbGljaz1cInNlbGVjdEJvb2tpbmcoYm9va2luZylcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7eyBmb3JtYXRUaW1lKGJvb2tpbmcuc3RhcnRfZGF0ZSkgfX0gLSB7eyBmb3JtYXRUaW1lKGJvb2tpbmcuZW5kX2RhdGUpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3sgYm9va2luZy5zdWJqZWN0IH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHNwYW4gOnN0eWxlPVwiY3VycmVudFRpbWVTdHlsZVwiIGNsYXNzPVwiY3VycmVudC10aW1lLWNvbnRhaW5lclwiIHJlZj1cImN1cnJlbnQtdGltZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VycmVudC10aW1lXCI+e3sgY3VycmVudFRpbWUgfX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgbGV0IGhvdXIgPSAwO1xuICAgICAgICAgICAgd2hpbGUoaG91ciA8IDI0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3Vycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknIDogbW9tZW50KGhvdXIsICdIJykuZm9ybWF0KCdoIEEnKSxcbiAgICAgICAgICAgICAgICAgICAgJ2V2ZW50cycgOiBbXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGhvdXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRUaW1lU3R5bGVzKCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFRpbWVTdHlsZXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgdGhpcy5zY3JvbGxUb0N1cnJlbnRUaW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhvdXJzIDogW10sXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWUgOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lU3R5bGUgOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lU2Nyb2xsSW50ZXJ2YWwgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHMgOiB7XG4gICAgICAgICAgICBzZWxlY3RCb29raW5nKGJvb2tpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3Jvb21zL2V2ZW50cy9zZXQnLCBib29raW5nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldFNjcm9sbFRpbWVvdXQoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY3VycmVudFRpbWVTY3JvbGxJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZVNjcm9sbEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvQ3VycmVudFRpbWUoKTtcbiAgICAgICAgICAgICAgICB9LCAoMTUgKiAxMDAwKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T2Zmc2V0KGVsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCwgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsVG9DdXJyZW50VGltZSgpIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlLXJvdXRlci9pc3N1ZXMvMTczXG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIGFuaW1hdGUgaXRcbiAgICAgICAgICAgICAgICBsZXQgY2FsZW5kYXIgPSB0aGlzLiRyZWZzLmNhbGVuZGFyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgY2FsZW5kYXJPZmZzZXRzID0gdGhpcy5nZXRPZmZzZXQoY2FsZW5kYXIpXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUaW1lT2Zmc2V0cyA9IHRoaXMuZ2V0T2Zmc2V0KHRoaXMuJHJlZnNbJ2N1cnJlbnQtdGltZS1jb250YWluZXInXSk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXIuc2Nyb2xsVG9wID0gKGN1cnJlbnRUaW1lT2Zmc2V0cy50b3AgLSBjYWxlbmRhck9mZnNldHMudG9wKSAtIDEwMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDdXJyZW50VGltZVN0eWxlcygpIHtcbiAgICAgICAgICAgICAgICBsZXQgbm93ID0gdGhpcy5ub3coKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRFTSA9ICgoKChub3cuZm9ybWF0KCdISCcpICogNjApICsgcGFyc2VJbnQobm93LmZvcm1hdCgnbW0nKSkpKSAqIDYpIC8gNjA7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IG5vdy5mb3JtYXQoJ2g6bW0gQScpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWVTdHlsZSA9ICBgdG9wOiR7c3RhcnRFTSB9ZW07YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQgOiB7XG4gICAgICAgICAgICBib29raW5ncygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucm9vbXMuZXZlbnRzLmV2ZW50cztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDYWxlbmRhci52dWU/OWYxZjI3NTgiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJvb2tpbmctc3RhdHVzXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY3VycmVudEJvb2tpbmdcIj5cbiAgICAgICAgICAgIDxoMT5Cb29rZWQgdW50aWwge3sgZm9ybWF0VGltZShjdXJyZW50Qm9va2luZy5lbmRfZGF0ZSkgfX08L2gxPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwibmV4dEJvb2tpbmdcIj5cbiAgICAgICAgICAgIDxoMT5Cb29rZWQgaW4ge3sgaHVtYW5pemVEaWZmKG5vdygpLCBwYXJzZURhdGUobmV4dEJvb2tpbmcuc3RhcnRfZGF0ZSkpIH19IDwvaDE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICA8aDE+RnJlZTwvaDE+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcHV0ZWQgOiB7XG4gICAgICAgICAgICBib29raW5ncygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucm9vbXMuZXZlbnRzLmV2ZW50cztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXJyZW50Qm9va2luZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maW5kKHRoaXMuYm9va2luZ3MsIChib29raW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRGF0ZShib29raW5nLnN0YXJ0X2RhdGUpLmlzQmVmb3JlKHRoaXMubm93KCkpICYmIHRoaXMucGFyc2VEYXRlKGJvb2tpbmcuZW5kX2RhdGUpLmlzQWZ0ZXIodGhpcy5ub3coKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXh0Qm9va2luZygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5maW5kKHRoaXMuYm9va2luZ3MsIChib29raW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlRGF0ZShib29raW5nLnN0YXJ0X2RhdGUpLmlzQWZ0ZXIodGhpcy5ub3coKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSb29tU3RhdHVzLnZ1ZT8zZGE1OTM4OCIsIjx0ZW1wbGF0ZT5cbiAgICA8YSBjbGFzcz1cImJ0biBidG4tc21hbGwgY2xpcGJvYXJkXCIgOmRhdGEtY2xpcGJvYXJkLXRleHQ9XCJkYXRhXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jbGlwYm9hcmRcIj48L3NwYW4+XG4gICAgPC9hPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCAoKSB7XG4gICAgICAgICAgICBuZXcgQ2xpcGJvYXJkKCcuY2xpcGJvYXJkJywge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENsaXBib2FyZC52dWU/NWIyYTNhMjMiLCI8dGVtcGxhdGU+XG4gICAgPGhlYWRlcj5cbiAgICAgICAgPG5vdGlmaWNhdGlvbnM+PC9ub3RpZmljYXRpb25zPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICBTcGFjZSBQYWRcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzZWN0aW9uIHYtaWY9XCJjdXJyZW50X3ZlcnNpb24gIT09ICB2ZXJzaW9uXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEhlbGxvLCBXZSd2ZSBnb3QgYSBuZXcgdmVyc2lvbiBvZiBTcGFjZVBhZCByZWFkeSBmb3IgeW91LiA8YSBocmVmPVwiXCI+UmVmcmVzaCBub3c8L2E+IHRvIG1ha2UgaXQgeW91cnMuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvaGVhZGVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICAgIGltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vTm90aWZpY2F0aW9ucy52dWUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfdmVyc2lvbjogTGFyYXZlbC52ZXJzaW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkIDoge1xuICAgICAgICAgICAgdmVyc2lvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnN5c3RlbS52ZXJzaW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTmF2aWdhdGlvbi52dWU/MTY2MGE0NDQiLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvblwiIDpjbGFzcz1cIm5vdGlmaWNhdGlvbi5jbGFzc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjbG9zZShub3RpZmljYXRpb24pXCIgY2xhc3M9XCJub3RpZmljYXRpb24tY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwibm90aWZpY2F0aW9uLWhlYWRpbmdcIiB2LWlmPVwibm90aWZpY2F0aW9uLnRpdGxlXCI+e3tub3RpZmljYXRpb24udGl0bGV9fTwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uLXRleHRcIiB2LWh0bWw9XCJub3RpZmljYXRpb24udGV4dFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbJ25vdGlmaWNhdGlvbiddLFxuICAgICAgICBkYXRhICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGltZXI6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCAoKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5ub3RpZmljYXRpb24uaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSA/IHRoaXMubm90aWZpY2F0aW9uLnRpbWVvdXQgOiB0cnVlXG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSh0aGlzLm5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMubm90aWZpY2F0aW9uLnRpbWVvdXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ25vdGlmaWNhdGlvbnMvcmVtb3ZlJywgbm90aWZpY2F0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTm90aWZpY2F0aW9uLnZ1ZT9mZDAxYjE0OCIsIjx0ZW1wbGF0ZSBpZD1cIm5vdGlmaWNhdGlvbnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uc1wiPlxuICAgICAgICA8bm90aWZpY2F0aW9uXG4gICAgICAgICAgICB2LWZvcj1cIihub3RpZmljYXRpb24sIGluZGV4KSBpbiBub3RpZmljYXRpb25zXCJcbiAgICAgICAgICAgIDpub3RpZmljYXRpb249XCJub3RpZmljYXRpb25cIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgPlxuICAgICAgICA8L25vdGlmaWNhdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbi52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9ucyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLm5vdGlmaWNhdGlvbnMubm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICByZW1vdmVOb3RpZmljYXRpb246IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbm90aWZpY2F0aW9ucy9yZW1vdmUnLCBub3RpZmljYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBOb3RpZmljYXRpb25zLnZ1ZT9mN2M1MmY2NiIsIjx0ZW1wbGF0ZT5cbiAgICA8c3Bhbj4ge3sgdGV4dCB9fSA8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRpbWU6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQgKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50VGltZSgpXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgfSwgNjAwMDApXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFRpbWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGRhdGUgKCkge1xuICAgICAgICAgICAgICAgIFZ1ZS5zZXQodGhpcy5jdXJyZW50VGltZSwgdGhpcy5jdXJyZW50VGltZS5hZGQoLTEsICdtaW51dGUnKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRDdXJyZW50VGltZSAoKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IHRoaXMudGltZVxuXG4gICAgICAgICAgICAgICAgaWYoIW1vbWVudC5pc01vbWVudCh0aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5wYXJzZURhdGUodGltZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGltZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdGV4dCAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9tTm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd1dGUnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdhZ28nLCAnJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUaW1lQWdvLnZ1ZT8zNjEwYWQyOSIsIjx0ZW1wbGF0ZT5cbiAgICA8c3BhblxuICAgICAgICA6Y2xhc3M9XCJbXG4gICAgICAgICdoaW50LS0nK3R5cGUsXG4gICAgICAgICdoaW50LS0nK3NpemUsXG4gICAgICAgICdoaW50LS0nK3BsYWNlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgICAgJ2hpbnQtLXJvdW5kZWQnOiB0aGlzLnJvdW5kZWQsXG4gICAgICAgICAgICAnaGludC0tYWx3YXlzJzogdGhpcy5hbHdheXMsXG4gICAgICAgICAgICAnaGludC0tbm8tYW5pbWF0ZSc6IHRoaXMubm9BbmltYXRlXG4gICAgICAgIH1dXCJcbiAgICAgICAgOmFyaWEtbGFiZWw9XCJtZXNzYWdlXCJcbiAgICA+XG4gICAgICAgIHt7IHR5cGUgfX1cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICAgICAgYWx3YXlzOiBCb29sZWFuLFxuICAgICAgICAgICAgcm91bmRlZDogQm9vbGVhbixcbiAgICAgICAgICAgIG5vQW5pbWF0ZTogQm9vbGVhbixcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ3RvcCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFRvb2xUaXAudnVlPzIwZGM4NjE3IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIHRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmJvb2tpbmdcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5ib29raW5nLmF0dGVuZGVlcywgZnVuY3Rpb24oYXR0ZW5kZWUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIHtzdGF0dXN9IC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoYXR0ZW5kZWUubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTAyZjhiZGE4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wMmY4YmRhOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nQXR0ZW5kZWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wMmY4YmRhOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nQXR0ZW5kZWVzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5yb29tXG4gICAgPyBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInJvb21cIiB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJyb29tLWNvbnRlbnRcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvb20taGVhZGVyIGxldmVsXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5yb29tLm5hbWUpKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50RGF0ZSkpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgcm9vbS1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGNhbGVuZGFyLXdyYXBwZXJcIiB9LFxuICAgICAgICAgICAgICBbX2MoXCJyb29tLXN0YXR1c1wiKSwgX3ZtLl92KFwiIFwiKSwgX2MoXCJjYWxlbmRhclwiKV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gdGFic1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBEaXNwbGF5IFJvb20gRGV0YWlscyBIZXJlIDpcXG4gICAgICAgICAgICAgICAgICAgIFNlYXRzLCB0ZWNobm9sb2dpZXMsIGNvbm5lY3RvcnNcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJib29raW5nLWF0dGVuZGVlc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJvb2tpbmc6IF92bS5zZWxlY3RlZEJvb2tpbmcgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvb20tZm9vdGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1sZWZ0XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWxlYXNlIC8gKENoZWNrIEluIC8gU3RhcnQgRWFybHkpXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgRmluZCBBbm90aGVyIHNwYWNlXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wNGYxMDRmY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDRmMTA0ZmNcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTA0ZjEwNGZjXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9Sb29tLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiaGVhZGVyXCIsXG4gICAgW1xuICAgICAgX2MoXCJub3RpZmljYXRpb25zXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxvZ28tY29udGFpbmVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBTcGFjZSBQYWRcXG4gICAgICAgIFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmN1cnJlbnRfdmVyc2lvbiAhPT0gX3ZtLnZlcnNpb25cbiAgICAgICAgPyBfYyhcInNlY3Rpb25cIiwgW192bS5fbSgwKV0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlxcbiAgICAgICAgICAgIEhlbGxvLCBXZSd2ZSBnb3QgYSBuZXcgdmVyc2lvbiBvZiBTcGFjZVBhZCByZWFkeSBmb3IgeW91LiBcIlxuICAgICAgKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbX3ZtLl92KFwiUmVmcmVzaCBub3dcIildKSxcbiAgICAgIF92bS5fdihcIiB0byBtYWtlIGl0IHlvdXJzLlxcbiAgICAgICAgXCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTExOGZiNzg4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xMThmYjc4OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xMThmYjc4OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic3BhblwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBbXG4gICAgICAgIFwiaGludC0tXCIgKyBfdm0udHlwZSxcbiAgICAgICAgXCJoaW50LS1cIiArIF92bS5zaXplLFxuICAgICAgICBcImhpbnQtLVwiICsgX3ZtLnBsYWNlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgIFwiaGludC0tcm91bmRlZFwiOiB0aGlzLnJvdW5kZWQsXG4gICAgICAgICAgXCJoaW50LS1hbHdheXNcIjogdGhpcy5hbHdheXMsXG4gICAgICAgICAgXCJoaW50LS1uby1hbmltYXRlXCI6IHRoaXMubm9BbmltYXRlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogX3ZtLm1lc3NhZ2UgfVxuICAgIH0sXG4gICAgW192bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0udHlwZSkgKyBcIlxcbiAgICBcIiksIF92bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTI2MGM5OWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTEyNjBjOTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTEyNjBjOTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICByZWY6IFwiY2FsZW5kYXJcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNhbGVuZGFyXCIsXG4gICAgICBvbjogeyBzY3JvbGw6IF92bS5zZXRTY3JvbGxUaW1lb3V0IH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5fbChfdm0uaG91cnMsIGZ1bmN0aW9uKGhvdXIpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaG91ci1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJob3VyXCIgfSwgW192bS5fdihfdm0uX3MoaG91ci5kaXNwbGF5KSldKVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5ib29raW5ncywgZnVuY3Rpb24oYm9va2luZykge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9va2luZ1wiLFxuICAgICAgICAgICAgICBzdHlsZTogX3ZtLmdldFRpbWVIZWlnaHRTdHlsZShcbiAgICAgICAgICAgICAgICBib29raW5nLnN0YXJ0X2RhdGUsXG4gICAgICAgICAgICAgICAgYm9va2luZy5lbmRfZGF0ZVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RCb29raW5nKGJvb2tpbmcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm1hdFRpbWUoYm9va2luZy5zdGFydF9kYXRlKSkgK1xuICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtYXRUaW1lKGJvb2tpbmcuZW5kX2RhdGUpKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoYm9va2luZy5zdWJqZWN0KSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiY3VycmVudC10aW1lLWNvbnRhaW5lclwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1cnJlbnQtdGltZS1jb250YWluZXJcIixcbiAgICAgICAgICBzdHlsZTogX3ZtLmN1cnJlbnRUaW1lU3R5bGVcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImN1cnJlbnQtdGltZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmN1cnJlbnRUaW1lKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFkMDM3MzQ2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xZDAzNzM0NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9DYWxlbmRhci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMWQwMzczNDZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQ2FsZW5kYXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJBdmFpbGFibGUgUm9vbXNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnJvb21zLCBmdW5jdGlvbihyb29tKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5jcmVhdGVSb29tKHJvb20pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKHJvb20ubmFtZSkgKyBcIlxcbiAgICAgICAgXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtM2NhYjQwMjVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNjYWI0MDI1XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUm9vbXMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTNjYWI0MDI1XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUm9vbXMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb25cIiwgY2xhc3M6IF92bS5ub3RpZmljYXRpb24uY2xhc3MgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24tY2xvc2VcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmNsb3NlKF92bS5ub3RpZmljYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubm90aWZpY2F0aW9uLnRpdGxlXG4gICAgICAgID8gX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbi1oZWFkaW5nXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubm90aWZpY2F0aW9uLnRpdGxlKSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLXRleHRcIixcbiAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLm5vdGlmaWNhdGlvbi50ZXh0KSB9XG4gICAgICB9KVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00NDc1MmJkZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDQ3NTJiZGZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00NDc1MmJkZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJhXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbWFsbCBjbGlwYm9hcmRcIixcbiAgICAgIGF0dHJzOiB7IFwiZGF0YS1jbGlwYm9hcmQtdGV4dFwiOiBfdm0uZGF0YSB9XG4gICAgfSxcbiAgICBbX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1jbGlwYm9hcmRcIiB9KV1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDdjOWE0ZDJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ3YzlhNGQyXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDdjOWE0ZDJcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2xpcGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb25zXCIgfSxcbiAgICBfdm0uX2woX3ZtLm5vdGlmaWNhdGlvbnMsIGZ1bmN0aW9uKG5vdGlmaWNhdGlvbiwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBfYyhcIm5vdGlmaWNhdGlvblwiLCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGF0dHJzOiB7IG5vdGlmaWNhdGlvbjogbm90aWZpY2F0aW9uIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGRkYmYxMjRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRkZGJmMTI0XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTRkZGJmMTI0XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImJvb2tpbmctc3RhdHVzXCIgfSxcbiAgICBbXG4gICAgICBfdm0uY3VycmVudEJvb2tpbmdcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcImgxXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiQm9va2VkIHVudGlsIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybWF0VGltZShfdm0uY3VycmVudEJvb2tpbmcuZW5kX2RhdGUpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBfdm0ubmV4dEJvb2tpbmdcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJCb29rZWQgaW4gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmh1bWFuaXplRGlmZihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wYXJzZURhdGUoX3ZtLm5leHRCb29raW5nLnN0YXJ0X2RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgXCIgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBbX2MoXCJoMVwiLCBbX3ZtLl92KFwiRnJlZVwiKV0pXVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01Mjg5YjkzNVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTI4OWI5MzVcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvUm9vbVN0YXR1cy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNTI4OWI5MzVcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvUm9vbVN0YXR1cy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX2MoXCJuYXZpZ2F0aW9uXCIpLCBfdm0uX3YoXCIgXCIpLCBfYyhcInJvdXRlci12aWV3XCIpXSwgMSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTU4MmVkNzU5XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ODJlZDc1OVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9BcHBTcGFjZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNTgyZWQ3NTlcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnRleHQpICsgXCIgXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY4NjhkYzM4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ODY4ZGMzOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9UaW1lQWdvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi02ODY4ZGMzOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9UaW1lQWdvLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLl92KFwiXFxuICAgIExldHMgY29ubmVjdCB5b3VyIGZpcnN0IHByb3ZpZGVyXFxuXFxuICAgIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiL3Byb3ZpZGVyL29mZmljZTM2NS9saW5rXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIk9mZmljZSAzNjVcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiL3Byb3ZpZGVyL2dzdWl0ZS9saW5rXCIgfSB9LCBbX3ZtLl92KFwiR1N1aXRlXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQ29ubmVjdGVkIEFjY291bnRzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5wcm92aWRlcnMsIGZ1bmN0aW9uKHByb3ZpZGVyKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicHJvdmlkZXJfcm9vbXNcIixcbiAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBwcm92aWRlcjogcHJvdmlkZXIuaWQgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3ZpZGVyLmVtYWlsKSArXG4gICAgICAgICAgICAgICAgICBcIiBbXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb3ZpZGVyLnByb3ZpZGVyKSArXG4gICAgICAgICAgICAgICAgICBcIl1cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIlJvb21zXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5yb29tcywgZnVuY3Rpb24ocm9vbSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJyb29tXCIsIHBhcmFtczogeyByb29tOiByb29tLmlkIH0gfSB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhyb29tLm5hbWUpICsgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LThjMDFlMTdlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04YzAxZTE3ZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtOGMwMWUxN2VcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW192bS5fdihcIlxcbiAgICBTb3JyeSB5b3UgbXVzdCBoYXZlIHRoZSB3cm9uZyB1cmxcXG5cIildKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOTI2YjNjZGNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTkyNmIzY2RjXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VOb3RGb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtOTI2YjNjZGNcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnZU5vdEZvdW5kLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKipcbiAgKiB2dWUtcm91dGVyIHYyLjcuMFxuICAqIChjKSAyMDE3IEV2YW4gWW91XG4gICogQGxpY2Vuc2UgTUlUXG4gICovXG4ndXNlIHN0cmljdCc7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcigoXCJbdnVlLXJvdXRlcl0gXCIgKyBtZXNzYWdlKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB3YXJuIChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmRpdGlvbikge1xuICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4oKFwiW3Z1ZS1yb3V0ZXJdIFwiICsgbWVzc2FnZSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3IgKGVycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVycikuaW5kZXhPZignRXJyb3InKSA+IC0xXG59XG5cbnZhciBWaWV3ID0ge1xuICBuYW1lOiAncm91dGVyLXZpZXcnLFxuICBmdW5jdGlvbmFsOiB0cnVlLFxuICBwcm9wczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKF8sIHJlZikge1xuICAgIHZhciBwcm9wcyA9IHJlZi5wcm9wcztcbiAgICB2YXIgY2hpbGRyZW4gPSByZWYuY2hpbGRyZW47XG4gICAgdmFyIHBhcmVudCA9IHJlZi5wYXJlbnQ7XG4gICAgdmFyIGRhdGEgPSByZWYuZGF0YTtcblxuICAgIGRhdGEucm91dGVyVmlldyA9IHRydWU7XG5cbiAgICAvLyBkaXJlY3RseSB1c2UgcGFyZW50IGNvbnRleHQncyBjcmVhdGVFbGVtZW50KCkgZnVuY3Rpb25cbiAgICAvLyBzbyB0aGF0IGNvbXBvbmVudHMgcmVuZGVyZWQgYnkgcm91dGVyLXZpZXcgY2FuIHJlc29sdmUgbmFtZWQgc2xvdHNcbiAgICB2YXIgaCA9IHBhcmVudC4kY3JlYXRlRWxlbWVudDtcbiAgICB2YXIgbmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdmFyIHJvdXRlID0gcGFyZW50LiRyb3V0ZTtcbiAgICB2YXIgY2FjaGUgPSBwYXJlbnQuX3JvdXRlclZpZXdDYWNoZSB8fCAocGFyZW50Ll9yb3V0ZXJWaWV3Q2FjaGUgPSB7fSk7XG5cbiAgICAvLyBkZXRlcm1pbmUgY3VycmVudCB2aWV3IGRlcHRoLCBhbHNvIGNoZWNrIHRvIHNlZSBpZiB0aGUgdHJlZVxuICAgIC8vIGhhcyBiZWVuIHRvZ2dsZWQgaW5hY3RpdmUgYnV0IGtlcHQtYWxpdmUuXG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICB2YXIgaW5hY3RpdmUgPSBmYWxzZTtcbiAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC5fcm91dGVyUm9vdCAhPT0gcGFyZW50KSB7XG4gICAgICBpZiAocGFyZW50LiR2bm9kZSAmJiBwYXJlbnQuJHZub2RlLmRhdGEucm91dGVyVmlldykge1xuICAgICAgICBkZXB0aCsrO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmVudC5faW5hY3RpdmUpIHtcbiAgICAgICAgaW5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG4gICAgfVxuICAgIGRhdGEucm91dGVyVmlld0RlcHRoID0gZGVwdGg7XG5cbiAgICAvLyByZW5kZXIgcHJldmlvdXMgdmlldyBpZiB0aGUgdHJlZSBpcyBpbmFjdGl2ZSBhbmQga2VwdC1hbGl2ZVxuICAgIGlmIChpbmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIGgoY2FjaGVbbmFtZV0sIGRhdGEsIGNoaWxkcmVuKVxuICAgIH1cblxuICAgIHZhciBtYXRjaGVkID0gcm91dGUubWF0Y2hlZFtkZXB0aF07XG4gICAgLy8gcmVuZGVyIGVtcHR5IG5vZGUgaWYgbm8gbWF0Y2hlZCByb3V0ZVxuICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgY2FjaGVbbmFtZV0gPSBudWxsO1xuICAgICAgcmV0dXJuIGgoKVxuICAgIH1cblxuICAgIHZhciBjb21wb25lbnQgPSBjYWNoZVtuYW1lXSA9IG1hdGNoZWQuY29tcG9uZW50c1tuYW1lXTtcblxuICAgIC8vIGF0dGFjaCBpbnN0YW5jZSByZWdpc3RyYXRpb24gaG9va1xuICAgIC8vIHRoaXMgd2lsbCBiZSBjYWxsZWQgaW4gdGhlIGluc3RhbmNlJ3MgaW5qZWN0ZWQgbGlmZWN5Y2xlIGhvb2tzXG4gICAgZGF0YS5yZWdpc3RlclJvdXRlSW5zdGFuY2UgPSBmdW5jdGlvbiAodm0sIHZhbCkge1xuICAgICAgLy8gdmFsIGNvdWxkIGJlIHVuZGVmaW5lZCBmb3IgdW5yZWdpc3RyYXRpb25cbiAgICAgIHZhciBjdXJyZW50ID0gbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV07XG4gICAgICBpZiAoXG4gICAgICAgICh2YWwgJiYgY3VycmVudCAhPT0gdm0pIHx8XG4gICAgICAgICghdmFsICYmIGN1cnJlbnQgPT09IHZtKVxuICAgICAgKSB7XG4gICAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFsc28gcmVnaXNldGVyIGluc3RhbmNlIGluIHByZXBhdGNoIGhvb2tcbiAgICAvLyBpbiBjYXNlIHRoZSBzYW1lIGNvbXBvbmVudCBpbnN0YW5jZSBpcyByZXVzZWQgYWNyb3NzIGRpZmZlcmVudCByb3V0ZXNcbiAgICA7KGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pKS5wcmVwYXRjaCA9IGZ1bmN0aW9uIChfLCB2bm9kZSkge1xuICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICB9O1xuXG4gICAgLy8gcmVzb2x2ZSBwcm9wc1xuICAgIGRhdGEucHJvcHMgPSByZXNvbHZlUHJvcHMocm91dGUsIG1hdGNoZWQucHJvcHMgJiYgbWF0Y2hlZC5wcm9wc1tuYW1lXSk7XG5cbiAgICByZXR1cm4gaChjb21wb25lbnQsIGRhdGEsIGNoaWxkcmVuKVxuICB9XG59O1xuXG5mdW5jdGlvbiByZXNvbHZlUHJvcHMgKHJvdXRlLCBjb25maWcpIHtcbiAgc3dpdGNoICh0eXBlb2YgY29uZmlnKSB7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVyblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICByZXR1cm4gY29uZmlnXG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgcmV0dXJuIGNvbmZpZyhyb3V0ZSlcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiBjb25maWcgPyByb3V0ZS5wYXJhbXMgOiB1bmRlZmluZWRcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICBcInByb3BzIGluIFxcXCJcIiArIChyb3V0ZS5wYXRoKSArIFwiXFxcIiBpcyBhIFwiICsgKHR5cGVvZiBjb25maWcpICsgXCIsIFwiICtcbiAgICAgICAgICBcImV4cGVjdGluZyBhbiBvYmplY3QsIGZ1bmN0aW9uIG9yIGJvb2xlYW4uXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIGVuY29kZVJlc2VydmVSRSA9IC9bIScoKSpdL2c7XG52YXIgZW5jb2RlUmVzZXJ2ZVJlcGxhY2VyID0gZnVuY3Rpb24gKGMpIHsgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNik7IH07XG52YXIgY29tbWFSRSA9IC8lMkMvZztcblxuLy8gZml4ZWQgZW5jb2RlVVJJQ29tcG9uZW50IHdoaWNoIGlzIG1vcmUgY29uZm9ybWFudCB0byBSRkMzOTg2OlxuLy8gLSBlc2NhcGVzIFshJygpKl1cbi8vIC0gcHJlc2VydmUgY29tbWFzXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgLnJlcGxhY2UoZW5jb2RlUmVzZXJ2ZVJFLCBlbmNvZGVSZXNlcnZlUmVwbGFjZXIpXG4gIC5yZXBsYWNlKGNvbW1hUkUsICcsJyk7IH07XG5cbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWVyeSAoXG4gIHF1ZXJ5LFxuICBleHRyYVF1ZXJ5LFxuICBfcGFyc2VRdWVyeVxuKSB7XG4gIGlmICggZXh0cmFRdWVyeSA9PT0gdm9pZCAwICkgZXh0cmFRdWVyeSA9IHt9O1xuXG4gIHZhciBwYXJzZSA9IF9wYXJzZVF1ZXJ5IHx8IHBhcnNlUXVlcnk7XG4gIHZhciBwYXJzZWRRdWVyeTtcbiAgdHJ5IHtcbiAgICBwYXJzZWRRdWVyeSA9IHBhcnNlKHF1ZXJ5IHx8ICcnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihmYWxzZSwgZS5tZXNzYWdlKTtcbiAgICBwYXJzZWRRdWVyeSA9IHt9O1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBleHRyYVF1ZXJ5KSB7XG4gICAgdmFyIHZhbCA9IGV4dHJhUXVlcnlba2V5XTtcbiAgICBwYXJzZWRRdWVyeVtrZXldID0gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsLnNsaWNlKCkgOiB2YWw7XG4gIH1cbiAgcmV0dXJuIHBhcnNlZFF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHBhcnNlUXVlcnkgKHF1ZXJ5KSB7XG4gIHZhciByZXMgPSB7fTtcblxuICBxdWVyeSA9IHF1ZXJ5LnRyaW0oKS5yZXBsYWNlKC9eKFxcP3wjfCYpLywgJycpO1xuXG4gIGlmICghcXVlcnkpIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICBxdWVyeS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgdmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcbiAgICB2YXIga2V5ID0gZGVjb2RlKHBhcnRzLnNoaWZ0KCkpO1xuICAgIHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwXG4gICAgICA/IGRlY29kZShwYXJ0cy5qb2luKCc9JykpXG4gICAgICA6IG51bGw7XG5cbiAgICBpZiAocmVzW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzW2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc1trZXldKSkge1xuICAgICAgcmVzW2tleV0ucHVzaCh2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNba2V5XSA9IFtyZXNba2V5XSwgdmFsXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5UXVlcnkgKG9iaikge1xuICB2YXIgcmVzID0gb2JqID8gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVuY29kZShrZXkpXG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgdmFsLmZvckVhY2goZnVuY3Rpb24gKHZhbDIpIHtcbiAgICAgICAgaWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwyID09PSBudWxsKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHZhbDIpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKVxuICAgIH1cblxuICAgIHJldHVybiBlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2YWwpXG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5sZW5ndGggPiAwOyB9KS5qb2luKCcmJykgOiBudWxsO1xuICByZXR1cm4gcmVzID8gKFwiP1wiICsgcmVzKSA6ICcnXG59XG5cbi8qICAqL1xuXG5cbnZhciB0cmFpbGluZ1NsYXNoUkUgPSAvXFwvPyQvO1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZSAoXG4gIHJlY29yZCxcbiAgbG9jYXRpb24sXG4gIHJlZGlyZWN0ZWRGcm9tLFxuICByb3V0ZXJcbikge1xuICB2YXIgc3RyaW5naWZ5UXVlcnkkJDEgPSByb3V0ZXIgJiYgcm91dGVyLm9wdGlvbnMuc3RyaW5naWZ5UXVlcnk7XG4gIHZhciByb3V0ZSA9IHtcbiAgICBuYW1lOiBsb2NhdGlvbi5uYW1lIHx8IChyZWNvcmQgJiYgcmVjb3JkLm5hbWUpLFxuICAgIG1ldGE6IChyZWNvcmQgJiYgcmVjb3JkLm1ldGEpIHx8IHt9LFxuICAgIHBhdGg6IGxvY2F0aW9uLnBhdGggfHwgJy8nLFxuICAgIGhhc2g6IGxvY2F0aW9uLmhhc2ggfHwgJycsXG4gICAgcXVlcnk6IGxvY2F0aW9uLnF1ZXJ5IHx8IHt9LFxuICAgIHBhcmFtczogbG9jYXRpb24ucGFyYW1zIHx8IHt9LFxuICAgIGZ1bGxQYXRoOiBnZXRGdWxsUGF0aChsb2NhdGlvbiwgc3RyaW5naWZ5UXVlcnkkJDEpLFxuICAgIG1hdGNoZWQ6IHJlY29yZCA/IGZvcm1hdE1hdGNoKHJlY29yZCkgOiBbXVxuICB9O1xuICBpZiAocmVkaXJlY3RlZEZyb20pIHtcbiAgICByb3V0ZS5yZWRpcmVjdGVkRnJvbSA9IGdldEZ1bGxQYXRoKHJlZGlyZWN0ZWRGcm9tLCBzdHJpbmdpZnlRdWVyeSQkMSk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUocm91dGUpXG59XG5cbi8vIHRoZSBzdGFydGluZyByb3V0ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGluaXRpYWwgc3RhdGVcbnZhciBTVEFSVCA9IGNyZWF0ZVJvdXRlKG51bGwsIHtcbiAgcGF0aDogJy8nXG59KTtcblxuZnVuY3Rpb24gZm9ybWF0TWF0Y2ggKHJlY29yZCkge1xuICB2YXIgcmVzID0gW107XG4gIHdoaWxlIChyZWNvcmQpIHtcbiAgICByZXMudW5zaGlmdChyZWNvcmQpO1xuICAgIHJlY29yZCA9IHJlY29yZC5wYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnZXRGdWxsUGF0aCAoXG4gIHJlZixcbiAgX3N0cmluZ2lmeVF1ZXJ5XG4pIHtcbiAgdmFyIHBhdGggPSByZWYucGF0aDtcbiAgdmFyIHF1ZXJ5ID0gcmVmLnF1ZXJ5OyBpZiAoIHF1ZXJ5ID09PSB2b2lkIDAgKSBxdWVyeSA9IHt9O1xuICB2YXIgaGFzaCA9IHJlZi5oYXNoOyBpZiAoIGhhc2ggPT09IHZvaWQgMCApIGhhc2ggPSAnJztcblxuICB2YXIgc3RyaW5naWZ5ID0gX3N0cmluZ2lmeVF1ZXJ5IHx8IHN0cmluZ2lmeVF1ZXJ5O1xuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHN0cmluZ2lmeShxdWVyeSkgKyBoYXNoXG59XG5cbmZ1bmN0aW9uIGlzU2FtZVJvdXRlIChhLCBiKSB7XG4gIGlmIChiID09PSBTVEFSVCkge1xuICAgIHJldHVybiBhID09PSBiXG4gIH0gZWxzZSBpZiAoIWIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmIChhLnBhdGggJiYgYi5wYXRoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpID09PSBiLnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcnKSAmJlxuICAgICAgYS5oYXNoID09PSBiLmhhc2ggJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5xdWVyeSwgYi5xdWVyeSlcbiAgICApXG4gIH0gZWxzZSBpZiAoYS5uYW1lICYmIGIubmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICBhLm5hbWUgPT09IGIubmFtZSAmJlxuICAgICAgYS5oYXNoID09PSBiLmhhc2ggJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5xdWVyeSwgYi5xdWVyeSkgJiZcbiAgICAgIGlzT2JqZWN0RXF1YWwoYS5wYXJhbXMsIGIucGFyYW1zKVxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBpc09iamVjdEVxdWFsIChhLCBiKSB7XG4gIGlmICggYSA9PT0gdm9pZCAwICkgYSA9IHt9O1xuICBpZiAoIGIgPT09IHZvaWQgMCApIGIgPSB7fTtcblxuICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgdmFyIGJLZXlzID0gT2JqZWN0LmtleXMoYik7XG4gIGlmIChhS2V5cy5sZW5ndGggIT09IGJLZXlzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiBhS2V5cy5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGFWYWwgPSBhW2tleV07XG4gICAgdmFyIGJWYWwgPSBiW2tleV07XG4gICAgLy8gY2hlY2sgbmVzdGVkIGVxdWFsaXR5XG4gICAgaWYgKHR5cGVvZiBhVmFsID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYlZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBpc09iamVjdEVxdWFsKGFWYWwsIGJWYWwpXG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcoYVZhbCkgPT09IFN0cmluZyhiVmFsKVxuICB9KVxufVxuXG5mdW5jdGlvbiBpc0luY2x1ZGVkUm91dGUgKGN1cnJlbnQsIHRhcmdldCkge1xuICByZXR1cm4gKFxuICAgIGN1cnJlbnQucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJy8nKS5pbmRleE9mKFxuICAgICAgdGFyZ2V0LnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcvJylcbiAgICApID09PSAwICYmXG4gICAgKCF0YXJnZXQuaGFzaCB8fCBjdXJyZW50Lmhhc2ggPT09IHRhcmdldC5oYXNoKSAmJlxuICAgIHF1ZXJ5SW5jbHVkZXMoY3VycmVudC5xdWVyeSwgdGFyZ2V0LnF1ZXJ5KVxuICApXG59XG5cbmZ1bmN0aW9uIHF1ZXJ5SW5jbHVkZXMgKGN1cnJlbnQsIHRhcmdldCkge1xuICBmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgaWYgKCEoa2V5IGluIGN1cnJlbnQpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuLyogICovXG5cbi8vIHdvcmsgYXJvdW5kIHdlaXJkIGZsb3cgYnVnXG52YXIgdG9UeXBlcyA9IFtTdHJpbmcsIE9iamVjdF07XG52YXIgZXZlbnRUeXBlcyA9IFtTdHJpbmcsIEFycmF5XTtcblxudmFyIExpbmsgPSB7XG4gIG5hbWU6ICdyb3V0ZXItbGluaycsXG4gIHByb3BzOiB7XG4gICAgdG86IHtcbiAgICAgIHR5cGU6IHRvVHlwZXMsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYSdcbiAgICB9LFxuICAgIGV4YWN0OiBCb29sZWFuLFxuICAgIGFwcGVuZDogQm9vbGVhbixcbiAgICByZXBsYWNlOiBCb29sZWFuLFxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXhhY3RBY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV2ZW50OiB7XG4gICAgICB0eXBlOiBldmVudFR5cGVzLFxuICAgICAgZGVmYXVsdDogJ2NsaWNrJ1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIgKGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciByb3V0ZXIgPSB0aGlzLiRyb3V0ZXI7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLiRyb3V0ZTtcbiAgICB2YXIgcmVmID0gcm91dGVyLnJlc29sdmUodGhpcy50bywgY3VycmVudCwgdGhpcy5hcHBlbmQpO1xuICAgIHZhciBsb2NhdGlvbiA9IHJlZi5sb2NhdGlvbjtcbiAgICB2YXIgcm91dGUgPSByZWYucm91dGU7XG4gICAgdmFyIGhyZWYgPSByZWYuaHJlZjtcblxuICAgIHZhciBjbGFzc2VzID0ge307XG4gICAgdmFyIGdsb2JhbEFjdGl2ZUNsYXNzID0gcm91dGVyLm9wdGlvbnMubGlua0FjdGl2ZUNsYXNzO1xuICAgIHZhciBnbG9iYWxFeGFjdEFjdGl2ZUNsYXNzID0gcm91dGVyLm9wdGlvbnMubGlua0V4YWN0QWN0aXZlQ2xhc3M7XG4gICAgLy8gU3VwcG9ydCBnbG9iYWwgZW1wdHkgYWN0aXZlIGNsYXNzXG4gICAgdmFyIGFjdGl2ZUNsYXNzRmFsbGJhY2sgPSBnbG9iYWxBY3RpdmVDbGFzcyA9PSBudWxsXG4gICAgICAgICAgICA/ICdyb3V0ZXItbGluay1hY3RpdmUnXG4gICAgICAgICAgICA6IGdsb2JhbEFjdGl2ZUNsYXNzO1xuICAgIHZhciBleGFjdEFjdGl2ZUNsYXNzRmFsbGJhY2sgPSBnbG9iYWxFeGFjdEFjdGl2ZUNsYXNzID09IG51bGxcbiAgICAgICAgICAgID8gJ3JvdXRlci1saW5rLWV4YWN0LWFjdGl2ZSdcbiAgICAgICAgICAgIDogZ2xvYmFsRXhhY3RBY3RpdmVDbGFzcztcbiAgICB2YXIgYWN0aXZlQ2xhc3MgPSB0aGlzLmFjdGl2ZUNsYXNzID09IG51bGxcbiAgICAgICAgICAgID8gYWN0aXZlQ2xhc3NGYWxsYmFja1xuICAgICAgICAgICAgOiB0aGlzLmFjdGl2ZUNsYXNzO1xuICAgIHZhciBleGFjdEFjdGl2ZUNsYXNzID0gdGhpcy5leGFjdEFjdGl2ZUNsYXNzID09IG51bGxcbiAgICAgICAgICAgID8gZXhhY3RBY3RpdmVDbGFzc0ZhbGxiYWNrXG4gICAgICAgICAgICA6IHRoaXMuZXhhY3RBY3RpdmVDbGFzcztcbiAgICB2YXIgY29tcGFyZVRhcmdldCA9IGxvY2F0aW9uLnBhdGhcbiAgICAgID8gY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24sIG51bGwsIHJvdXRlcilcbiAgICAgIDogcm91dGU7XG5cbiAgICBjbGFzc2VzW2V4YWN0QWN0aXZlQ2xhc3NdID0gaXNTYW1lUm91dGUoY3VycmVudCwgY29tcGFyZVRhcmdldCk7XG4gICAgY2xhc3Nlc1thY3RpdmVDbGFzc10gPSB0aGlzLmV4YWN0XG4gICAgICA/IGNsYXNzZXNbZXhhY3RBY3RpdmVDbGFzc11cbiAgICAgIDogaXNJbmNsdWRlZFJvdXRlKGN1cnJlbnQsIGNvbXBhcmVUYXJnZXQpO1xuXG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGd1YXJkRXZlbnQoZSkpIHtcbiAgICAgICAgaWYgKHRoaXMkMS5yZXBsYWNlKSB7XG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UobG9jYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlci5wdXNoKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgb24gPSB7IGNsaWNrOiBndWFyZEV2ZW50IH07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5ldmVudCkpIHtcbiAgICAgIHRoaXMuZXZlbnQuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyBvbltlXSA9IGhhbmRsZXI7IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblt0aGlzLmV2ZW50XSA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBjbGFzczogY2xhc3Nlc1xuICAgIH07XG5cbiAgICBpZiAodGhpcy50YWcgPT09ICdhJykge1xuICAgICAgZGF0YS5vbiA9IG9uO1xuICAgICAgZGF0YS5hdHRycyA9IHsgaHJlZjogaHJlZiB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmaW5kIHRoZSBmaXJzdCA8YT4gY2hpbGQgYW5kIGFwcGx5IGxpc3RlbmVyIGFuZCBocmVmXG4gICAgICB2YXIgYSA9IGZpbmRBbmNob3IodGhpcy4kc2xvdHMuZGVmYXVsdCk7XG4gICAgICBpZiAoYSkge1xuICAgICAgICAvLyBpbiBjYXNlIHRoZSA8YT4gaXMgYSBzdGF0aWMgbm9kZVxuICAgICAgICBhLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgIHZhciBleHRlbmQgPSBfVnVlLnV0aWwuZXh0ZW5kO1xuICAgICAgICB2YXIgYURhdGEgPSBhLmRhdGEgPSBleHRlbmQoe30sIGEuZGF0YSk7XG4gICAgICAgIGFEYXRhLm9uID0gb247XG4gICAgICAgIHZhciBhQXR0cnMgPSBhLmRhdGEuYXR0cnMgPSBleHRlbmQoe30sIGEuZGF0YS5hdHRycyk7XG4gICAgICAgIGFBdHRycy5ocmVmID0gaHJlZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGRvZXNuJ3QgaGF2ZSA8YT4gY2hpbGQsIGFwcGx5IGxpc3RlbmVyIHRvIHNlbGZcbiAgICAgICAgZGF0YS5vbiA9IG9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoKHRoaXMudGFnLCBkYXRhLCB0aGlzLiRzbG90cy5kZWZhdWx0KVxuICB9XG59O1xuXG5mdW5jdGlvbiBndWFyZEV2ZW50IChlKSB7XG4gIC8vIGRvbid0IHJlZGlyZWN0IHdpdGggY29udHJvbCBrZXlzXG4gIGlmIChlLm1ldGFLZXkgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkpIHsgcmV0dXJuIH1cbiAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2hlbiBwcmV2ZW50RGVmYXVsdCBjYWxsZWRcbiAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkgeyByZXR1cm4gfVxuICAvLyBkb24ndCByZWRpcmVjdCBvbiByaWdodCBjbGlja1xuICBpZiAoZS5idXR0b24gIT09IHVuZGVmaW5lZCAmJiBlLmJ1dHRvbiAhPT0gMCkgeyByZXR1cm4gfVxuICAvLyBkb24ndCByZWRpcmVjdCBpZiBgdGFyZ2V0PVwiX2JsYW5rXCJgXG4gIGlmIChlLmN1cnJlbnRUYXJnZXQgJiYgZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSkge1xuICAgIHZhciB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd0YXJnZXQnKTtcbiAgICBpZiAoL1xcYl9ibGFua1xcYi9pLnRlc3QodGFyZ2V0KSkgeyByZXR1cm4gfVxuICB9XG4gIC8vIHRoaXMgbWF5IGJlIGEgV2VleCBldmVudCB3aGljaCBkb2Vzbid0IGhhdmUgdGhpcyBtZXRob2RcbiAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZmluZEFuY2hvciAoY2hpbGRyZW4pIHtcbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgdmFyIGNoaWxkO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2hpbGQudGFnID09PSAnYScpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQuY2hpbGRyZW4gJiYgKGNoaWxkID0gZmluZEFuY2hvcihjaGlsZC5jaGlsZHJlbikpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgX1Z1ZTtcblxuZnVuY3Rpb24gaW5zdGFsbCAoVnVlKSB7XG4gIGlmIChpbnN0YWxsLmluc3RhbGxlZCkgeyByZXR1cm4gfVxuICBpbnN0YWxsLmluc3RhbGxlZCA9IHRydWU7XG5cbiAgX1Z1ZSA9IFZ1ZTtcblxuICB2YXIgaXNEZWYgPSBmdW5jdGlvbiAodikgeyByZXR1cm4gdiAhPT0gdW5kZWZpbmVkOyB9O1xuXG4gIHZhciByZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24gKHZtLCBjYWxsVmFsKSB7XG4gICAgdmFyIGkgPSB2bS4kb3B0aW9ucy5fcGFyZW50Vm5vZGU7XG4gICAgaWYgKGlzRGVmKGkpICYmIGlzRGVmKGkgPSBpLmRhdGEpICYmIGlzRGVmKGkgPSBpLnJlZ2lzdGVyUm91dGVJbnN0YW5jZSkpIHtcbiAgICAgIGkodm0sIGNhbGxWYWwpO1xuICAgIH1cbiAgfTtcblxuICBWdWUubWl4aW4oe1xuICAgIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAgIGlmIChpc0RlZih0aGlzLiRvcHRpb25zLnJvdXRlcikpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyUm9vdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3JvdXRlciA9IHRoaXMuJG9wdGlvbnMucm91dGVyO1xuICAgICAgICB0aGlzLl9yb3V0ZXIuaW5pdCh0aGlzKTtcbiAgICAgICAgVnVlLnV0aWwuZGVmaW5lUmVhY3RpdmUodGhpcywgJ19yb3V0ZScsIHRoaXMuX3JvdXRlci5oaXN0b3J5LmN1cnJlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcm91dGVyUm9vdCA9ICh0aGlzLiRwYXJlbnQgJiYgdGhpcy4kcGFyZW50Ll9yb3V0ZXJSb290KSB8fCB0aGlzO1xuICAgICAgfVxuICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCB0aGlzKTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkICgpIHtcbiAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZXInLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkgeyByZXR1cm4gdGhpcy5fcm91dGVyUm9vdC5fcm91dGVyIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcm91dGUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkgeyByZXR1cm4gdGhpcy5fcm91dGVyUm9vdC5fcm91dGUgfVxuICB9KTtcblxuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItdmlldycsIFZpZXcpO1xuICBWdWUuY29tcG9uZW50KCdyb3V0ZXItbGluaycsIExpbmspO1xuXG4gIHZhciBzdHJhdHMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcbiAgLy8gdXNlIHRoZSBzYW1lIGhvb2sgbWVyZ2luZyBzdHJhdGVneSBmb3Igcm91dGUgaG9va3NcbiAgc3RyYXRzLmJlZm9yZVJvdXRlRW50ZXIgPSBzdHJhdHMuYmVmb3JlUm91dGVMZWF2ZSA9IHN0cmF0cy5iZWZvcmVSb3V0ZVVwZGF0ZSA9IHN0cmF0cy5jcmVhdGVkO1xufVxuXG4vKiAgKi9cblxudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGggKFxuICByZWxhdGl2ZSxcbiAgYmFzZSxcbiAgYXBwZW5kXG4pIHtcbiAgdmFyIGZpcnN0Q2hhciA9IHJlbGF0aXZlLmNoYXJBdCgwKTtcbiAgaWYgKGZpcnN0Q2hhciA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHJlbGF0aXZlXG4gIH1cblxuICBpZiAoZmlyc3RDaGFyID09PSAnPycgfHwgZmlyc3RDaGFyID09PSAnIycpIHtcbiAgICByZXR1cm4gYmFzZSArIHJlbGF0aXZlXG4gIH1cblxuICB2YXIgc3RhY2sgPSBiYXNlLnNwbGl0KCcvJyk7XG5cbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNlZ21lbnQgaWY6XG4gIC8vIC0gbm90IGFwcGVuZGluZ1xuICAvLyAtIGFwcGVuZGluZyB0byB0cmFpbGluZyBzbGFzaCAobGFzdCBzZWdtZW50IGlzIGVtcHR5KVxuICBpZiAoIWFwcGVuZCB8fCAhc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0pIHtcbiAgICBzdGFjay5wb3AoKTtcbiAgfVxuXG4gIC8vIHJlc29sdmUgcmVsYXRpdmUgcGF0aFxuICB2YXIgc2VnbWVudHMgPSByZWxhdGl2ZS5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2ldO1xuICAgIGlmIChzZWdtZW50ID09PSAnLi4nKSB7XG4gICAgICBzdGFjay5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnQgIT09ICcuJykge1xuICAgICAgc3RhY2sucHVzaChzZWdtZW50KTtcbiAgICB9XG4gIH1cblxuICAvLyBlbnN1cmUgbGVhZGluZyBzbGFzaFxuICBpZiAoc3RhY2tbMF0gIT09ICcnKSB7XG4gICAgc3RhY2sudW5zaGlmdCgnJyk7XG4gIH1cblxuICByZXR1cm4gc3RhY2suam9pbignLycpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICB2YXIgaGFzaCA9ICcnO1xuICB2YXIgcXVlcnkgPSAnJztcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgIGhhc2ggPSBwYXRoLnNsaWNlKGhhc2hJbmRleCk7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gIGlmIChxdWVyeUluZGV4ID49IDApIHtcbiAgICBxdWVyeSA9IHBhdGguc2xpY2UocXVlcnlJbmRleCArIDEpO1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIHF1ZXJ5SW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBwYXRoLFxuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBoYXNoOiBoYXNoXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5QYXRoIChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpXG59XG5cbnZhciBpbmRleCQxID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYHBhdGhUb1JlZ2V4cGAuXG4gKi9cbnZhciBpbmRleCA9IHBhdGhUb1JlZ2V4cDtcbnZhciBwYXJzZV8xID0gcGFyc2U7XG52YXIgY29tcGlsZV8xID0gY29tcGlsZTtcbnZhciB0b2tlbnNUb0Z1bmN0aW9uXzEgPSB0b2tlbnNUb0Z1bmN0aW9uO1xudmFyIHRva2Vuc1RvUmVnRXhwXzEgPSB0b2tlbnNUb1JlZ0V4cDtcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIi86dGVzdChcXFxcZCspP1wiID0+IFtcIi9cIiwgXCJ0ZXN0XCIsIFwiXFxkK1wiLCB1bmRlZmluZWQsIFwiP1wiLCB1bmRlZmluZWRdXG4gIC8vIFwiL3JvdXRlKFxcXFxkKylcIiAgPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAgLy8gXCIvKlwiICAgICAgICAgICAgPT4gW1wiL1wiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiKlwiXVxuICAnKFtcXFxcLy5dKT8oPzooPzpcXFxcOihcXFxcdyspKD86XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSk/fFxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpKFsrKj9dKT98KFxcXFwqKSknXG5dLmpvaW4oJ3wnKSwgJ2cnKTtcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IFtdO1xuICB2YXIga2V5ID0gMDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIHBhdGggPSAnJztcbiAgdmFyIGRlZmF1bHREZWxpbWl0ZXIgPSBvcHRpb25zICYmIG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJztcbiAgdmFyIHJlcztcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdO1xuICAgIHZhciBlc2NhcGVkID0gcmVzWzFdO1xuICAgIHZhciBvZmZzZXQgPSByZXMuaW5kZXg7XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldCk7XG4gICAgaW5kZXggPSBvZmZzZXQgKyBtLmxlbmd0aDtcblxuICAgIC8vIElnbm9yZSBhbHJlYWR5IGVzY2FwZWQgc2VxdWVuY2VzLlxuICAgIGlmIChlc2NhcGVkKSB7XG4gICAgICBwYXRoICs9IGVzY2FwZWRbMV07XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBuZXh0ID0gc3RyW2luZGV4XTtcbiAgICB2YXIgcHJlZml4ID0gcmVzWzJdO1xuICAgIHZhciBuYW1lID0gcmVzWzNdO1xuICAgIHZhciBjYXB0dXJlID0gcmVzWzRdO1xuICAgIHZhciBncm91cCA9IHJlc1s1XTtcbiAgICB2YXIgbW9kaWZpZXIgPSByZXNbNl07XG4gICAgdmFyIGFzdGVyaXNrID0gcmVzWzddO1xuXG4gICAgLy8gUHVzaCB0aGUgY3VycmVudCBwYXRoIG9udG8gdGhlIHRva2Vucy5cbiAgICBpZiAocGF0aCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0aCk7XG4gICAgICBwYXRoID0gJyc7XG4gICAgfVxuXG4gICAgdmFyIHBhcnRpYWwgPSBwcmVmaXggIT0gbnVsbCAmJiBuZXh0ICE9IG51bGwgJiYgbmV4dCAhPT0gcHJlZml4O1xuICAgIHZhciByZXBlYXQgPSBtb2RpZmllciA9PT0gJysnIHx8IG1vZGlmaWVyID09PSAnKic7XG4gICAgdmFyIG9wdGlvbmFsID0gbW9kaWZpZXIgPT09ICc/JyB8fCBtb2RpZmllciA9PT0gJyonO1xuICAgIHZhciBkZWxpbWl0ZXIgPSByZXNbMl0gfHwgZGVmYXVsdERlbGltaXRlcjtcbiAgICB2YXIgcGF0dGVybiA9IGNhcHR1cmUgfHwgZ3JvdXA7XG5cbiAgICB0b2tlbnMucHVzaCh7XG4gICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgcHJlZml4OiBwcmVmaXggfHwgJycsXG4gICAgICBkZWxpbWl0ZXI6IGRlbGltaXRlcixcbiAgICAgIG9wdGlvbmFsOiBvcHRpb25hbCxcbiAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgcGFydGlhbDogcGFydGlhbCxcbiAgICAgIGFzdGVyaXNrOiAhIWFzdGVyaXNrLFxuICAgICAgcGF0dGVybjogcGF0dGVybiA/IGVzY2FwZUdyb3VwKHBhdHRlcm4pIDogKGFzdGVyaXNrID8gJy4qJyA6ICdbXicgKyBlc2NhcGVTdHJpbmcoZGVsaW1pdGVyKSArICddKz8nKVxuICAgIH0pO1xuICB9XG5cbiAgLy8gTWF0Y2ggYW55IGNoYXJhY3RlcnMgc3RpbGwgcmVtYWluaW5nLlxuICBpZiAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgcGF0aCArPSBzdHIuc3Vic3RyKGluZGV4KTtcbiAgfVxuXG4gIC8vIElmIHRoZSBwYXRoIGV4aXN0cywgcHVzaCBpdCBvbnRvIHRoZSBlbmQuXG4gIGlmIChwYXRoKSB7XG4gICAgdG9rZW5zLnB1c2gocGF0aCk7XG4gIH1cblxuICByZXR1cm4gdG9rZW5zXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshZnVuY3Rpb24oT2JqZWN0PSwgT2JqZWN0PSl9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpKVxufVxuXG4vKipcbiAqIFByZXR0aWVyIGVuY29kaW5nIG9mIFVSSSBwYXRoIHNlZ21lbnRzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1tcXC8/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRW5jb2RlIHRoZSBhc3RlcmlzayBwYXJhbWV0ZXIuIFNpbWlsYXIgdG8gYHByZXR0eWAsIGJ1dCBhbGxvd3Mgc2xhc2hlcy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZUFzdGVyaXNrIChzdHIpIHtcbiAgcmV0dXJuIGVuY29kZVVSSShzdHIpLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gIH0pXG59XG5cbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24gKHRva2Vucykge1xuICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgdmFyIG1hdGNoZXMgPSBuZXcgQXJyYXkodG9rZW5zLmxlbmd0aCk7XG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIG9wdHMpIHtcbiAgICB2YXIgcGF0aCA9ICcnO1xuICAgIHZhciBkYXRhID0gb2JqIHx8IHt9O1xuICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fTtcbiAgICB2YXIgZW5jb2RlID0gb3B0aW9ucy5wcmV0dHkgPyBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgOiBlbmNvZGVVUklDb21wb25lbnQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoICs9IHRva2VuO1xuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZSA9IGRhdGFbdG9rZW4ubmFtZV07XG4gICAgICB2YXIgc2VnbWVudDtcblxuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgLy8gUHJlcGVuZCBwYXJ0aWFsIHNlZ21lbnQgcHJlZml4ZXMuXG4gICAgICAgICAgaWYgKHRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBiZSBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXgkMSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKSArICdgJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IGJlIGVtcHR5JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSk7XG5cbiAgICAgICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkoc2VnbWVudCkgKyAnYCcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aCArPSAoaiA9PT0gMCA/IHRva2VuLnByZWZpeCA6IHRva2VuLmRlbGltaXRlcikgKyBzZWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc2VnbWVudCA9IHRva2VuLmFzdGVyaXNrID8gZW5jb2RlQXN0ZXJpc2sodmFsdWUpIDogZW5jb2RlKHZhbHVlKTtcblxuICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgXCInICsgc2VnbWVudCArICdcIicpXG4gICAgICB9XG5cbiAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFxuICB9XG59XG5cbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcgKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18XFwvXFxcXF0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEVzY2FwZSB0aGUgY2FwdHVyaW5nIGdyb3VwIGJ5IGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGdyb3VwXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUdyb3VwIChncm91cCkge1xuICByZXR1cm4gZ3JvdXAucmVwbGFjZSgvKFs9ITokXFwvKCldKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGhlIGtleXMgYXMgYSBwcm9wZXJ0eSBvZiB0aGUgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHJlXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhdHRhY2hLZXlzIChyZSwga2V5cykge1xuICByZS5rZXlzID0ga2V5cztcbiAgcmV0dXJuIHJlXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuXG4gIGlmIChncm91cHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgbmFtZTogaSxcbiAgICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICAgIG9wdGlvbmFsOiBmYWxzZSxcbiAgICAgICAgcmVwZWF0OiBmYWxzZSxcbiAgICAgICAgcGFydGlhbDogZmFsc2UsXG4gICAgICAgIGFzdGVyaXNrOiBmYWxzZSxcbiAgICAgICAgcGF0dGVybjogbnVsbFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocGF0aCwga2V5cylcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHZhciBwYXJ0cyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRzLnB1c2gocGF0aFRvUmVnZXhwKHBhdGhbaV0sIGtleXMsIG9wdGlvbnMpLnNvdXJjZSk7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cCgnKD86JyArIHBhcnRzLmpvaW4oJ3wnKSArICcpJywgZmxhZ3Mob3B0aW9ucykpO1xuXG4gIHJldHVybiBhdHRhY2hLZXlzKHJlZ2V4cCwga2V5cylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcGFyYW0gIHshT2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICByZXR1cm4gdG9rZW5zVG9SZWdFeHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpXG59XG5cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqXG4gKiBAcGFyYW0gIHshQXJyYXl9ICAgICAgICAgIHRva2Vuc1xuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnRXhwICh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpbmRleCQxKGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucyk7XG4gICAga2V5cyA9IFtdO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0O1xuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlO1xuICB2YXIgcm91dGUgPSAnJztcblxuICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKHRva2VuLnByZWZpeCk7XG4gICAgICB2YXIgY2FwdHVyZSA9ICcoPzonICsgdG9rZW4ucGF0dGVybiArICcpJztcblxuICAgICAga2V5cy5wdXNoKHRva2VuKTtcblxuICAgICAgaWYgKHRva2VuLnJlcGVhdCkge1xuICAgICAgICBjYXB0dXJlICs9ICcoPzonICsgcHJlZml4ICsgY2FwdHVyZSArICcpKic7XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICBpZiAoIXRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICBjYXB0dXJlID0gJyg/OicgKyBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJykpPyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKT8nO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpJztcbiAgICAgIH1cblxuICAgICAgcm91dGUgKz0gY2FwdHVyZTtcbiAgICB9XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJyk7XG4gIHZhciBlbmRzV2l0aERlbGltaXRlciA9IHJvdXRlLnNsaWNlKC1kZWxpbWl0ZXIubGVuZ3RoKSA9PT0gZGVsaW1pdGVyO1xuXG4gIC8vIEluIG5vbi1zdHJpY3QgbW9kZSB3ZSBhbGxvdyBhIHNsYXNoIGF0IHRoZSBlbmQgb2YgbWF0Y2guIElmIHRoZSBwYXRoIHRvXG4gIC8vIG1hdGNoIGFscmVhZHkgZW5kcyB3aXRoIGEgc2xhc2gsIHdlIHJlbW92ZSBpdCBmb3IgY29uc2lzdGVuY3kuIFRoZSBzbGFzaFxuICAvLyBpcyB2YWxpZCBhdCB0aGUgZW5kIG9mIGEgcGF0aCBtYXRjaCwgbm90IGluIHRoZSBtaWRkbGUuIFRoaXMgaXMgaW1wb3J0YW50XG4gIC8vIGluIG5vbi1lbmRpbmcgbW9kZSwgd2hlcmUgXCIvdGVzdC9cIiBzaG91bGRuJ3QgbWF0Y2ggXCIvdGVzdC8vcm91dGVcIi5cbiAgaWYgKCFzdHJpY3QpIHtcbiAgICByb3V0ZSA9IChlbmRzV2l0aERlbGltaXRlciA/IHJvdXRlLnNsaWNlKDAsIC1kZWxpbWl0ZXIubGVuZ3RoKSA6IHJvdXRlKSArICcoPzonICsgZGVsaW1pdGVyICsgJyg/PSQpKT8nO1xuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIHJvdXRlICs9ICckJztcbiAgfSBlbHNlIHtcbiAgICAvLyBJbiBub24tZW5kaW5nIG1vZGUsIHdlIG5lZWQgdGhlIGNhcHR1cmluZyBncm91cHMgdG8gbWF0Y2ggYXMgbXVjaCBhc1xuICAgIC8vIHBvc3NpYmxlIGJ5IHVzaW5nIGEgcG9zaXRpdmUgbG9va2FoZWFkIHRvIHRoZSBlbmQgb3IgbmV4dCBwYXRoIHNlZ21lbnQuXG4gICAgcm91dGUgKz0gc3RyaWN0ICYmIGVuZHNXaXRoRGVsaW1pdGVyID8gJycgOiAnKD89JyArIGRlbGltaXRlciArICd8JCknO1xuICB9XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMobmV3IFJlZ0V4cCgnXicgKyByb3V0ZSwgZmxhZ3Mob3B0aW9ucykpLCBrZXlzKVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKlxuICogQHBhcmFtICB7KHN0cmluZ3xSZWdFeHB8QXJyYXkpfSBwYXRoXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19ICAgICAgIGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaW5kZXgkMShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpO1xuICAgIGtleXMgPSBbXTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cykpXG4gIH1cblxuICBpZiAoaW5kZXgkMShwYXRoKSkge1xuICAgIHJldHVybiBhcnJheVRvUmVnZXhwKC8qKiBAdHlwZSB7IUFycmF5fSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG4gIH1cblxuICByZXR1cm4gc3RyaW5nVG9SZWdleHAoLyoqIEB0eXBlIHtzdHJpbmd9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbn1cblxuaW5kZXgucGFyc2UgPSBwYXJzZV8xO1xuaW5kZXguY29tcGlsZSA9IGNvbXBpbGVfMTtcbmluZGV4LnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uXzE7XG5pbmRleC50b2tlbnNUb1JlZ0V4cCA9IHRva2Vuc1RvUmVnRXhwXzE7XG5cbi8qICAqL1xuXG52YXIgcmVnZXhwQ29tcGlsZUNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuZnVuY3Rpb24gZmlsbFBhcmFtcyAoXG4gIHBhdGgsXG4gIHBhcmFtcyxcbiAgcm91dGVNc2dcbikge1xuICB0cnkge1xuICAgIHZhciBmaWxsZXIgPVxuICAgICAgcmVnZXhwQ29tcGlsZUNhY2hlW3BhdGhdIHx8XG4gICAgICAocmVnZXhwQ29tcGlsZUNhY2hlW3BhdGhdID0gaW5kZXguY29tcGlsZShwYXRoKSk7XG4gICAgcmV0dXJuIGZpbGxlcihwYXJhbXMgfHwge30sIHsgcHJldHR5OiB0cnVlIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybihmYWxzZSwgKFwibWlzc2luZyBwYXJhbSBmb3IgXCIgKyByb3V0ZU1zZyArIFwiOiBcIiArIChlLm1lc3NhZ2UpKSk7XG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZU1hcCAoXG4gIHJvdXRlcyxcbiAgb2xkUGF0aExpc3QsXG4gIG9sZFBhdGhNYXAsXG4gIG9sZE5hbWVNYXBcbikge1xuICAvLyB0aGUgcGF0aCBsaXN0IGlzIHVzZWQgdG8gY29udHJvbCBwYXRoIG1hdGNoaW5nIHByaW9yaXR5XG4gIHZhciBwYXRoTGlzdCA9IG9sZFBhdGhMaXN0IHx8IFtdO1xuICB2YXIgcGF0aE1hcCA9IG9sZFBhdGhNYXAgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIG5hbWVNYXAgPSBvbGROYW1lTWFwIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgcm91dGVzLmZvckVhY2goZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgYWRkUm91dGVSZWNvcmQocGF0aExpc3QsIHBhdGhNYXAsIG5hbWVNYXAsIHJvdXRlKTtcbiAgfSk7XG5cbiAgLy8gZW5zdXJlIHdpbGRjYXJkIHJvdXRlcyBhcmUgYWx3YXlzIGF0IHRoZSBlbmRcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXRoTGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAocGF0aExpc3RbaV0gPT09ICcqJykge1xuICAgICAgcGF0aExpc3QucHVzaChwYXRoTGlzdC5zcGxpY2UoaSwgMSlbMF0pO1xuICAgICAgbC0tO1xuICAgICAgaS0tO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aExpc3Q6IHBhdGhMaXN0LFxuICAgIHBhdGhNYXA6IHBhdGhNYXAsXG4gICAgbmFtZU1hcDogbmFtZU1hcFxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFJvdXRlUmVjb3JkIChcbiAgcGF0aExpc3QsXG4gIHBhdGhNYXAsXG4gIG5hbWVNYXAsXG4gIHJvdXRlLFxuICBwYXJlbnQsXG4gIG1hdGNoQXNcbikge1xuICB2YXIgcGF0aCA9IHJvdXRlLnBhdGg7XG4gIHZhciBuYW1lID0gcm91dGUubmFtZTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQocGF0aCAhPSBudWxsLCBcIlxcXCJwYXRoXFxcIiBpcyByZXF1aXJlZCBpbiBhIHJvdXRlIGNvbmZpZ3VyYXRpb24uXCIpO1xuICAgIGFzc2VydChcbiAgICAgIHR5cGVvZiByb3V0ZS5jb21wb25lbnQgIT09ICdzdHJpbmcnLFxuICAgICAgXCJyb3V0ZSBjb25maWcgXFxcImNvbXBvbmVudFxcXCIgZm9yIHBhdGg6IFwiICsgKFN0cmluZyhwYXRoIHx8IG5hbWUpKSArIFwiIGNhbm5vdCBiZSBhIFwiICtcbiAgICAgIFwic3RyaW5nIGlkLiBVc2UgYW4gYWN0dWFsIGNvbXBvbmVudCBpbnN0ZWFkLlwiXG4gICAgKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVkUGF0aCA9IG5vcm1hbGl6ZVBhdGgocGF0aCwgcGFyZW50KTtcbiAgdmFyIHBhdGhUb1JlZ2V4cE9wdGlvbnMgPSByb3V0ZS5wYXRoVG9SZWdleHBPcHRpb25zIHx8IHt9O1xuXG4gIGlmICh0eXBlb2Ygcm91dGUuY2FzZVNlbnNpdGl2ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcGF0aFRvUmVnZXhwT3B0aW9ucy5zZW5zaXRpdmUgPSByb3V0ZS5jYXNlU2Vuc2l0aXZlO1xuICB9XG5cbiAgdmFyIHJlY29yZCA9IHtcbiAgICBwYXRoOiBub3JtYWxpemVkUGF0aCxcbiAgICByZWdleDogY29tcGlsZVJvdXRlUmVnZXgobm9ybWFsaXplZFBhdGgsIHBhdGhUb1JlZ2V4cE9wdGlvbnMpLFxuICAgIGNvbXBvbmVudHM6IHJvdXRlLmNvbXBvbmVudHMgfHwgeyBkZWZhdWx0OiByb3V0ZS5jb21wb25lbnQgfSxcbiAgICBpbnN0YW5jZXM6IHt9LFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcGFyZW50OiBwYXJlbnQsXG4gICAgbWF0Y2hBczogbWF0Y2hBcyxcbiAgICByZWRpcmVjdDogcm91dGUucmVkaXJlY3QsXG4gICAgYmVmb3JlRW50ZXI6IHJvdXRlLmJlZm9yZUVudGVyLFxuICAgIG1ldGE6IHJvdXRlLm1ldGEgfHwge30sXG4gICAgcHJvcHM6IHJvdXRlLnByb3BzID09IG51bGxcbiAgICAgID8ge31cbiAgICAgIDogcm91dGUuY29tcG9uZW50c1xuICAgICAgICA/IHJvdXRlLnByb3BzXG4gICAgICAgIDogeyBkZWZhdWx0OiByb3V0ZS5wcm9wcyB9XG4gIH07XG5cbiAgaWYgKHJvdXRlLmNoaWxkcmVuKSB7XG4gICAgLy8gV2FybiBpZiByb3V0ZSBpcyBuYW1lZCwgZG9lcyBub3QgcmVkaXJlY3QgYW5kIGhhcyBhIGRlZmF1bHQgY2hpbGQgcm91dGUuXG4gICAgLy8gSWYgdXNlcnMgbmF2aWdhdGUgdG8gdGhpcyByb3V0ZSBieSBuYW1lLCB0aGUgZGVmYXVsdCBjaGlsZCB3aWxsXG4gICAgLy8gbm90IGJlIHJlbmRlcmVkIChHSCBJc3N1ZSAjNjI5KVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocm91dGUubmFtZSAmJiAhcm91dGUucmVkaXJlY3QgJiYgcm91dGUuY2hpbGRyZW4uc29tZShmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIC9eXFwvPyQvLnRlc3QoY2hpbGQucGF0aCk7IH0pKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgXCJOYW1lZCBSb3V0ZSAnXCIgKyAocm91dGUubmFtZSkgKyBcIicgaGFzIGEgZGVmYXVsdCBjaGlsZCByb3V0ZS4gXCIgK1xuICAgICAgICAgIFwiV2hlbiBuYXZpZ2F0aW5nIHRvIHRoaXMgbmFtZWQgcm91dGUgKDp0bz1cXFwie25hbWU6ICdcIiArIChyb3V0ZS5uYW1lKSArIFwiJ1xcXCIpLCBcIiArXG4gICAgICAgICAgXCJ0aGUgZGVmYXVsdCBjaGlsZCByb3V0ZSB3aWxsIG5vdCBiZSByZW5kZXJlZC4gUmVtb3ZlIHRoZSBuYW1lIGZyb20gXCIgK1xuICAgICAgICAgIFwidGhpcyByb3V0ZSBhbmQgdXNlIHRoZSBuYW1lIG9mIHRoZSBkZWZhdWx0IGNoaWxkIHJvdXRlIGZvciBuYW1lZCBcIiArXG4gICAgICAgICAgXCJsaW5rcyBpbnN0ZWFkLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJvdXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICB2YXIgY2hpbGRNYXRjaEFzID0gbWF0Y2hBc1xuICAgICAgICA/IGNsZWFuUGF0aCgobWF0Y2hBcyArIFwiL1wiICsgKGNoaWxkLnBhdGgpKSlcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICBhZGRSb3V0ZVJlY29yZChwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCwgY2hpbGQsIHJlY29yZCwgY2hpbGRNYXRjaEFzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyb3V0ZS5hbGlhcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGFsaWFzZXMgPSBBcnJheS5pc0FycmF5KHJvdXRlLmFsaWFzKVxuICAgICAgPyByb3V0ZS5hbGlhc1xuICAgICAgOiBbcm91dGUuYWxpYXNdO1xuXG4gICAgYWxpYXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgdmFyIGFsaWFzUm91dGUgPSB7XG4gICAgICAgIHBhdGg6IGFsaWFzLFxuICAgICAgICBjaGlsZHJlbjogcm91dGUuY2hpbGRyZW5cbiAgICAgIH07XG4gICAgICBhZGRSb3V0ZVJlY29yZChcbiAgICAgICAgcGF0aExpc3QsXG4gICAgICAgIHBhdGhNYXAsXG4gICAgICAgIG5hbWVNYXAsXG4gICAgICAgIGFsaWFzUm91dGUsXG4gICAgICAgIHBhcmVudCxcbiAgICAgICAgcmVjb3JkLnBhdGggfHwgJy8nIC8vIG1hdGNoQXNcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIXBhdGhNYXBbcmVjb3JkLnBhdGhdKSB7XG4gICAgcGF0aExpc3QucHVzaChyZWNvcmQucGF0aCk7XG4gICAgcGF0aE1hcFtyZWNvcmQucGF0aF0gPSByZWNvcmQ7XG4gIH1cblxuICBpZiAobmFtZSkge1xuICAgIGlmICghbmFtZU1hcFtuYW1lXSkge1xuICAgICAgbmFtZU1hcFtuYW1lXSA9IHJlY29yZDtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIW1hdGNoQXMpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBcIkR1cGxpY2F0ZSBuYW1lZCByb3V0ZXMgZGVmaW5pdGlvbjogXCIgK1xuICAgICAgICBcInsgbmFtZTogXFxcIlwiICsgbmFtZSArIFwiXFxcIiwgcGF0aDogXFxcIlwiICsgKHJlY29yZC5wYXRoKSArIFwiXFxcIiB9XCJcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVSb3V0ZVJlZ2V4IChwYXRoLCBwYXRoVG9SZWdleHBPcHRpb25zKSB7XG4gIHZhciByZWdleCA9IGluZGV4KHBhdGgsIFtdLCBwYXRoVG9SZWdleHBPcHRpb25zKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIga2V5cyA9IHt9O1xuICAgIHJlZ2V4LmtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB3YXJuKCFrZXlzW2tleS5uYW1lXSwgKFwiRHVwbGljYXRlIHBhcmFtIGtleXMgaW4gcm91dGUgd2l0aCBwYXRoOiBcXFwiXCIgKyBwYXRoICsgXCJcXFwiXCIpKTtcbiAgICAgIGtleXNba2V5Lm5hbWVdID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVnZXhcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGF0aCAocGF0aCwgcGFyZW50KSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gIGlmIChwYXRoWzBdID09PSAnLycpIHsgcmV0dXJuIHBhdGggfVxuICBpZiAocGFyZW50ID09IG51bGwpIHsgcmV0dXJuIHBhdGggfVxuICByZXR1cm4gY2xlYW5QYXRoKCgocGFyZW50LnBhdGgpICsgXCIvXCIgKyBwYXRoKSlcbn1cblxuLyogICovXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYXRpb24gKFxuICByYXcsXG4gIGN1cnJlbnQsXG4gIGFwcGVuZCxcbiAgcm91dGVyXG4pIHtcbiAgdmFyIG5leHQgPSB0eXBlb2YgcmF3ID09PSAnc3RyaW5nJyA/IHsgcGF0aDogcmF3IH0gOiByYXc7XG4gIC8vIG5hbWVkIHRhcmdldFxuICBpZiAobmV4dC5uYW1lIHx8IG5leHQuX25vcm1hbGl6ZWQpIHtcbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgLy8gcmVsYXRpdmUgcGFyYW1zXG4gIGlmICghbmV4dC5wYXRoICYmIG5leHQucGFyYW1zICYmIGN1cnJlbnQpIHtcbiAgICBuZXh0ID0gYXNzaWduKHt9LCBuZXh0KTtcbiAgICBuZXh0Ll9ub3JtYWxpemVkID0gdHJ1ZTtcbiAgICB2YXIgcGFyYW1zID0gYXNzaWduKGFzc2lnbih7fSwgY3VycmVudC5wYXJhbXMpLCBuZXh0LnBhcmFtcyk7XG4gICAgaWYgKGN1cnJlbnQubmFtZSkge1xuICAgICAgbmV4dC5uYW1lID0gY3VycmVudC5uYW1lO1xuICAgICAgbmV4dC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50Lm1hdGNoZWQubGVuZ3RoKSB7XG4gICAgICB2YXIgcmF3UGF0aCA9IGN1cnJlbnQubWF0Y2hlZFtjdXJyZW50Lm1hdGNoZWQubGVuZ3RoIC0gMV0ucGF0aDtcbiAgICAgIG5leHQucGF0aCA9IGZpbGxQYXJhbXMocmF3UGF0aCwgcGFyYW1zLCAoXCJwYXRoIFwiICsgKGN1cnJlbnQucGF0aCkpKTtcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oZmFsc2UsIFwicmVsYXRpdmUgcGFyYW1zIG5hdmlnYXRpb24gcmVxdWlyZXMgYSBjdXJyZW50IHJvdXRlLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHRcbiAgfVxuXG4gIHZhciBwYXJzZWRQYXRoID0gcGFyc2VQYXRoKG5leHQucGF0aCB8fCAnJyk7XG4gIHZhciBiYXNlUGF0aCA9IChjdXJyZW50ICYmIGN1cnJlbnQucGF0aCkgfHwgJy8nO1xuICB2YXIgcGF0aCA9IHBhcnNlZFBhdGgucGF0aFxuICAgID8gcmVzb2x2ZVBhdGgocGFyc2VkUGF0aC5wYXRoLCBiYXNlUGF0aCwgYXBwZW5kIHx8IG5leHQuYXBwZW5kKVxuICAgIDogYmFzZVBhdGg7XG5cbiAgdmFyIHF1ZXJ5ID0gcmVzb2x2ZVF1ZXJ5KFxuICAgIHBhcnNlZFBhdGgucXVlcnksXG4gICAgbmV4dC5xdWVyeSxcbiAgICByb3V0ZXIgJiYgcm91dGVyLm9wdGlvbnMucGFyc2VRdWVyeVxuICApO1xuXG4gIHZhciBoYXNoID0gbmV4dC5oYXNoIHx8IHBhcnNlZFBhdGguaGFzaDtcbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09ICcjJykge1xuICAgIGhhc2ggPSBcIiNcIiArIGhhc2g7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgIHBhdGg6IHBhdGgsXG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIGhhc2g6IGhhc2hcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ24gKGEsIGIpIHtcbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBhW2tleV0gPSBiW2tleV07XG4gIH1cbiAgcmV0dXJuIGFcbn1cblxuLyogICovXG5cblxuZnVuY3Rpb24gY3JlYXRlTWF0Y2hlciAoXG4gIHJvdXRlcyxcbiAgcm91dGVyXG4pIHtcbiAgdmFyIHJlZiA9IGNyZWF0ZVJvdXRlTWFwKHJvdXRlcyk7XG4gIHZhciBwYXRoTGlzdCA9IHJlZi5wYXRoTGlzdDtcbiAgdmFyIHBhdGhNYXAgPSByZWYucGF0aE1hcDtcbiAgdmFyIG5hbWVNYXAgPSByZWYubmFtZU1hcDtcblxuICBmdW5jdGlvbiBhZGRSb3V0ZXMgKHJvdXRlcykge1xuICAgIGNyZWF0ZVJvdXRlTWFwKHJvdXRlcywgcGF0aExpc3QsIHBhdGhNYXAsIG5hbWVNYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2ggKFxuICAgIHJhdyxcbiAgICBjdXJyZW50Um91dGUsXG4gICAgcmVkaXJlY3RlZEZyb21cbiAgKSB7XG4gICAgdmFyIGxvY2F0aW9uID0gbm9ybWFsaXplTG9jYXRpb24ocmF3LCBjdXJyZW50Um91dGUsIGZhbHNlLCByb3V0ZXIpO1xuICAgIHZhciBuYW1lID0gbG9jYXRpb24ubmFtZTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICB2YXIgcmVjb3JkID0gbmFtZU1hcFtuYW1lXTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4ocmVjb3JkLCAoXCJSb3V0ZSB3aXRoIG5hbWUgJ1wiICsgbmFtZSArIFwiJyBkb2VzIG5vdCBleGlzdFwiKSk7XG4gICAgICB9XG4gICAgICBpZiAoIXJlY29yZCkgeyByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKSB9XG4gICAgICB2YXIgcGFyYW1OYW1lcyA9IHJlY29yZC5yZWdleC5rZXlzXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gIWtleS5vcHRpb25hbDsgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkubmFtZTsgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgbG9jYXRpb24ucGFyYW1zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBsb2NhdGlvbi5wYXJhbXMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRSb3V0ZSAmJiB0eXBlb2YgY3VycmVudFJvdXRlLnBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGN1cnJlbnRSb3V0ZS5wYXJhbXMpIHtcbiAgICAgICAgICBpZiAoIShrZXkgaW4gbG9jYXRpb24ucGFyYW1zKSAmJiBwYXJhbU5hbWVzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5wYXJhbXNba2V5XSA9IGN1cnJlbnRSb3V0ZS5wYXJhbXNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZCkge1xuICAgICAgICBsb2NhdGlvbi5wYXRoID0gZmlsbFBhcmFtcyhyZWNvcmQucGF0aCwgbG9jYXRpb24ucGFyYW1zLCAoXCJuYW1lZCByb3V0ZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXCIpKTtcbiAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSlcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnBhdGgpIHtcbiAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGF0aCA9IHBhdGhMaXN0W2ldO1xuICAgICAgICB2YXIgcmVjb3JkJDEgPSBwYXRoTWFwW3BhdGhdO1xuICAgICAgICBpZiAobWF0Y2hSb3V0ZShyZWNvcmQkMS5yZWdleCwgbG9jYXRpb24ucGF0aCwgbG9jYXRpb24ucGFyYW1zKSkge1xuICAgICAgICAgIHJldHVybiBfY3JlYXRlUm91dGUocmVjb3JkJDEsIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBubyBtYXRjaFxuICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiByZWRpcmVjdCAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uXG4gICkge1xuICAgIHZhciBvcmlnaW5hbFJlZGlyZWN0ID0gcmVjb3JkLnJlZGlyZWN0O1xuICAgIHZhciByZWRpcmVjdCA9IHR5cGVvZiBvcmlnaW5hbFJlZGlyZWN0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3JpZ2luYWxSZWRpcmVjdChjcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uLCBudWxsLCByb3V0ZXIpKVxuICAgICAgICA6IG9yaWdpbmFsUmVkaXJlY3Q7XG5cbiAgICBpZiAodHlwZW9mIHJlZGlyZWN0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVkaXJlY3QgPSB7IHBhdGg6IHJlZGlyZWN0IH07XG4gICAgfVxuXG4gICAgaWYgKCFyZWRpcmVjdCB8fCB0eXBlb2YgcmVkaXJlY3QgIT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIGZhbHNlLCAoXCJpbnZhbGlkIHJlZGlyZWN0IG9wdGlvbjogXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVkaXJlY3QpKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gICAgfVxuXG4gICAgdmFyIHJlID0gcmVkaXJlY3Q7XG4gICAgdmFyIG5hbWUgPSByZS5uYW1lO1xuICAgIHZhciBwYXRoID0gcmUucGF0aDtcbiAgICB2YXIgcXVlcnkgPSBsb2NhdGlvbi5xdWVyeTtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHBhcmFtcyA9IGxvY2F0aW9uLnBhcmFtcztcbiAgICBxdWVyeSA9IHJlLmhhc093blByb3BlcnR5KCdxdWVyeScpID8gcmUucXVlcnkgOiBxdWVyeTtcbiAgICBoYXNoID0gcmUuaGFzT3duUHJvcGVydHkoJ2hhc2gnKSA/IHJlLmhhc2ggOiBoYXNoO1xuICAgIHBhcmFtcyA9IHJlLmhhc093blByb3BlcnR5KCdwYXJhbXMnKSA/IHJlLnBhcmFtcyA6IHBhcmFtcztcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICAvLyByZXNvbHZlZCBuYW1lZCBkaXJlY3RcbiAgICAgIHZhciB0YXJnZXRSZWNvcmQgPSBuYW1lTWFwW25hbWVdO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYXNzZXJ0KHRhcmdldFJlY29yZCwgKFwicmVkaXJlY3QgZmFpbGVkOiBuYW1lZCByb3V0ZSBcXFwiXCIgKyBuYW1lICsgXCJcXFwiIG5vdCBmb3VuZC5cIikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgaGFzaDogaGFzaCxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0sIHVuZGVmaW5lZCwgbG9jYXRpb24pXG4gICAgfSBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAvLyAxLiByZXNvbHZlIHJlbGF0aXZlIHJlZGlyZWN0XG4gICAgICB2YXIgcmF3UGF0aCA9IHJlc29sdmVSZWNvcmRQYXRoKHBhdGgsIHJlY29yZCk7XG4gICAgICAvLyAyLiByZXNvbHZlIHBhcmFtc1xuICAgICAgdmFyIHJlc29sdmVkUGF0aCA9IGZpbGxQYXJhbXMocmF3UGF0aCwgcGFyYW1zLCAoXCJyZWRpcmVjdCByb3V0ZSB3aXRoIHBhdGggXFxcIlwiICsgcmF3UGF0aCArIFwiXFxcIlwiKSk7XG4gICAgICAvLyAzLiByZW1hdGNoIHdpdGggZXhpc3RpbmcgcXVlcnkgYW5kIGhhc2hcbiAgICAgIHJldHVybiBtYXRjaCh7XG4gICAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgICBwYXRoOiByZXNvbHZlZFBhdGgsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgICAgaGFzaDogaGFzaFxuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybihmYWxzZSwgKFwiaW52YWxpZCByZWRpcmVjdCBvcHRpb246IFwiICsgKEpTT04uc3RyaW5naWZ5KHJlZGlyZWN0KSkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWxpYXMgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICBtYXRjaEFzXG4gICkge1xuICAgIHZhciBhbGlhc2VkUGF0aCA9IGZpbGxQYXJhbXMobWF0Y2hBcywgbG9jYXRpb24ucGFyYW1zLCAoXCJhbGlhc2VkIHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyBtYXRjaEFzICsgXCJcXFwiXCIpKTtcbiAgICB2YXIgYWxpYXNlZE1hdGNoID0gbWF0Y2goe1xuICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICBwYXRoOiBhbGlhc2VkUGF0aFxuICAgIH0pO1xuICAgIGlmIChhbGlhc2VkTWF0Y2gpIHtcbiAgICAgIHZhciBtYXRjaGVkID0gYWxpYXNlZE1hdGNoLm1hdGNoZWQ7XG4gICAgICB2YXIgYWxpYXNlZFJlY29yZCA9IG1hdGNoZWRbbWF0Y2hlZC5sZW5ndGggLSAxXTtcbiAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IGFsaWFzZWRNYXRjaC5wYXJhbXM7XG4gICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKGFsaWFzZWRSZWNvcmQsIGxvY2F0aW9uKVxuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVJvdXRlIChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb24sXG4gICAgcmVkaXJlY3RlZEZyb21cbiAgKSB7XG4gICAgaWYgKHJlY29yZCAmJiByZWNvcmQucmVkaXJlY3QpIHtcbiAgICAgIHJldHVybiByZWRpcmVjdChyZWNvcmQsIHJlZGlyZWN0ZWRGcm9tIHx8IGxvY2F0aW9uKVxuICAgIH1cbiAgICBpZiAocmVjb3JkICYmIHJlY29yZC5tYXRjaEFzKSB7XG4gICAgICByZXR1cm4gYWxpYXMocmVjb3JkLCBsb2NhdGlvbiwgcmVjb3JkLm1hdGNoQXMpXG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVSb3V0ZShyZWNvcmQsIGxvY2F0aW9uLCByZWRpcmVjdGVkRnJvbSwgcm91dGVyKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYXRjaDogbWF0Y2gsXG4gICAgYWRkUm91dGVzOiBhZGRSb3V0ZXNcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlIChcbiAgcmVnZXgsXG4gIHBhdGgsXG4gIHBhcmFtc1xuKSB7XG4gIHZhciBtID0gcGF0aC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKCFtKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBmb3IgKHZhciBpID0gMSwgbGVuID0gbS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBrZXkgPSByZWdleC5rZXlzW2kgLSAxXTtcbiAgICB2YXIgdmFsID0gdHlwZW9mIG1baV0gPT09ICdzdHJpbmcnID8gZGVjb2RlVVJJQ29tcG9uZW50KG1baV0pIDogbVtpXTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBwYXJhbXNba2V5Lm5hbWVdID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVSZWNvcmRQYXRoIChwYXRoLCByZWNvcmQpIHtcbiAgcmV0dXJuIHJlc29sdmVQYXRoKHBhdGgsIHJlY29yZC5wYXJlbnQgPyByZWNvcmQucGFyZW50LnBhdGggOiAnLycsIHRydWUpXG59XG5cbi8qICAqL1xuXG5cbnZhciBwb3NpdGlvblN0b3JlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuZnVuY3Rpb24gc2V0dXBTY3JvbGwgKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgIHNhdmVTY3JvbGxQb3NpdGlvbigpO1xuICAgIGlmIChlLnN0YXRlICYmIGUuc3RhdGUua2V5KSB7XG4gICAgICBzZXRTdGF0ZUtleShlLnN0YXRlLmtleSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU2Nyb2xsIChcbiAgcm91dGVyLFxuICB0byxcbiAgZnJvbSxcbiAgaXNQb3Bcbikge1xuICBpZiAoIXJvdXRlci5hcHApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBiZWhhdmlvciA9IHJvdXRlci5vcHRpb25zLnNjcm9sbEJlaGF2aW9yO1xuICBpZiAoIWJlaGF2aW9yKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydCh0eXBlb2YgYmVoYXZpb3IgPT09ICdmdW5jdGlvbicsIFwic2Nyb2xsQmVoYXZpb3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgLy8gd2FpdCB1bnRpbCByZS1yZW5kZXIgZmluaXNoZXMgYmVmb3JlIHNjcm9sbGluZ1xuICByb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICB2YXIgc2hvdWxkU2Nyb2xsID0gYmVoYXZpb3IodG8sIGZyb20sIGlzUG9wID8gcG9zaXRpb24gOiBudWxsKTtcbiAgICBpZiAoIXNob3VsZFNjcm9sbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBpc09iamVjdCA9IHR5cGVvZiBzaG91bGRTY3JvbGwgPT09ICdvYmplY3QnO1xuICAgIGlmIChpc09iamVjdCAmJiB0eXBlb2Ygc2hvdWxkU2Nyb2xsLnNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzaG91bGRTY3JvbGwuc2VsZWN0b3IpO1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBzaG91bGRTY3JvbGwub2Zmc2V0ICYmIHR5cGVvZiBzaG91bGRTY3JvbGwub2Zmc2V0ID09PSAnb2JqZWN0JyA/IHNob3VsZFNjcm9sbC5vZmZzZXQgOiB7fTtcbiAgICAgICAgb2Zmc2V0ID0gbm9ybWFsaXplT2Zmc2V0KG9mZnNldCk7XG4gICAgICAgIHBvc2l0aW9uID0gZ2V0RWxlbWVudFBvc2l0aW9uKGVsLCBvZmZzZXQpO1xuICAgICAgfSBlbHNlIGlmIChpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCAmJiBpc1ZhbGlkUG9zaXRpb24oc2hvdWxkU2Nyb2xsKSkge1xuICAgICAgcG9zaXRpb24gPSBub3JtYWxpemVQb3NpdGlvbihzaG91bGRTY3JvbGwpO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVTY3JvbGxQb3NpdGlvbiAoKSB7XG4gIHZhciBrZXkgPSBnZXRTdGF0ZUtleSgpO1xuICBpZiAoa2V5KSB7XG4gICAgcG9zaXRpb25TdG9yZVtrZXldID0ge1xuICAgICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbiAoKSB7XG4gIHZhciBrZXkgPSBnZXRTdGF0ZUtleSgpO1xuICBpZiAoa2V5KSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uU3RvcmVba2V5XVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRQb3NpdGlvbiAoZWwsIG9mZnNldCkge1xuICB2YXIgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBkb2NSZWN0ID0gZG9jRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB4OiBlbFJlY3QubGVmdCAtIGRvY1JlY3QubGVmdCAtIG9mZnNldC54LFxuICAgIHk6IGVsUmVjdC50b3AgLSBkb2NSZWN0LnRvcCAtIG9mZnNldC55XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFBvc2l0aW9uIChvYmopIHtcbiAgcmV0dXJuIGlzTnVtYmVyKG9iai54KSB8fCBpc051bWJlcihvYmoueSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4ge1xuICAgIHg6IGlzTnVtYmVyKG9iai54KSA/IG9iai54IDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIHk6IGlzTnVtYmVyKG9iai55KSA/IG9iai55IDogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplT2Zmc2V0IChvYmopIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBpc051bWJlcihvYmoueCkgPyBvYmoueCA6IDAsXG4gICAgeTogaXNOdW1iZXIob2JqLnkpID8gb2JqLnkgOiAwXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIgKHYpIHtcbiAgcmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJ1xufVxuXG4vKiAgKi9cblxudmFyIHN1cHBvcnRzUHVzaFN0YXRlID0gaW5Ccm93c2VyICYmIChmdW5jdGlvbiAoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmIChcbiAgICAodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiZcbiAgICB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmXG4gICAgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeVxufSkoKTtcblxuLy8gdXNlIFVzZXIgVGltaW5nIGFwaSAoaWYgcHJlc2VudCkgZm9yIG1vcmUgYWNjdXJhdGUga2V5IHByZWNpc2lvblxudmFyIFRpbWUgPSBpbkJyb3dzZXIgJiYgd2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3dcbiAgPyB3aW5kb3cucGVyZm9ybWFuY2VcbiAgOiBEYXRlO1xuXG52YXIgX2tleSA9IGdlbktleSgpO1xuXG5mdW5jdGlvbiBnZW5LZXkgKCkge1xuICByZXR1cm4gVGltZS5ub3coKS50b0ZpeGVkKDMpXG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlS2V5ICgpIHtcbiAgcmV0dXJuIF9rZXlcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGVLZXkgKGtleSkge1xuICBfa2V5ID0ga2V5O1xufVxuXG5mdW5jdGlvbiBwdXNoU3RhdGUgKHVybCwgcmVwbGFjZSkge1xuICBzYXZlU2Nyb2xsUG9zaXRpb24oKTtcbiAgLy8gdHJ5Li4uY2F0Y2ggdGhlIHB1c2hTdGF0ZSBjYWxsIHRvIGdldCBhcm91bmQgU2FmYXJpXG4gIC8vIERPTSBFeGNlcHRpb24gMTggd2hlcmUgaXQgbGltaXRzIHRvIDEwMCBwdXNoU3RhdGUgY2FsbHNcbiAgdmFyIGhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdHJ5IHtcbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9rZXkgPSBnZW5LZXkoKTtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsga2V5OiBfa2V5IH0sICcnLCB1cmwpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ2Fzc2lnbiddKHVybCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVwbGFjZVN0YXRlICh1cmwpIHtcbiAgcHVzaFN0YXRlKHVybCwgdHJ1ZSk7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBydW5RdWV1ZSAocXVldWUsIGZuLCBjYikge1xuICB2YXIgc3RlcCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIGNiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChxdWV1ZVtpbmRleF0pIHtcbiAgICAgICAgZm4ocXVldWVbaW5kZXhdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RlcChpbmRleCArIDEpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ZXAoaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHN0ZXAoMCk7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlQXN5bmNDb21wb25lbnRzIChtYXRjaGVkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodG8sIGZyb20sIG5leHQpIHtcbiAgICB2YXIgaGFzQXN5bmMgPSBmYWxzZTtcbiAgICB2YXIgcGVuZGluZyA9IDA7XG4gICAgdmFyIGVycm9yID0gbnVsbDtcblxuICAgIGZsYXRNYXBDb21wb25lbnRzKG1hdGNoZWQsIGZ1bmN0aW9uIChkZWYsIF8sIG1hdGNoLCBrZXkpIHtcbiAgICAgIC8vIGlmIGl0J3MgYSBmdW5jdGlvbiBhbmQgZG9lc24ndCBoYXZlIGNpZCBhdHRhY2hlZCxcbiAgICAgIC8vIGFzc3VtZSBpdCdzIGFuIGFzeW5jIGNvbXBvbmVudCByZXNvbHZlIGZ1bmN0aW9uLlxuICAgICAgLy8gd2UgYXJlIG5vdCB1c2luZyBWdWUncyBkZWZhdWx0IGFzeW5jIHJlc29sdmluZyBtZWNoYW5pc20gYmVjYXVzZVxuICAgICAgLy8gd2Ugd2FudCB0byBoYWx0IHRoZSBuYXZpZ2F0aW9uIHVudGlsIHRoZSBpbmNvbWluZyBjb21wb25lbnQgaGFzIGJlZW5cbiAgICAgIC8vIHJlc29sdmVkLlxuICAgICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgJiYgZGVmLmNpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGhhc0FzeW5jID0gdHJ1ZTtcbiAgICAgICAgcGVuZGluZysrO1xuXG4gICAgICAgIHZhciByZXNvbHZlID0gb25jZShmdW5jdGlvbiAocmVzb2x2ZWREZWYpIHtcbiAgICAgICAgICBpZiAocmVzb2x2ZWREZWYuX19lc01vZHVsZSAmJiByZXNvbHZlZERlZi5kZWZhdWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlZERlZiA9IHJlc29sdmVkRGVmLmRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHNhdmUgcmVzb2x2ZWQgb24gYXN5bmMgZmFjdG9yeSBpbiBjYXNlIGl0J3MgdXNlZCBlbHNld2hlcmVcbiAgICAgICAgICBkZWYucmVzb2x2ZWQgPSB0eXBlb2YgcmVzb2x2ZWREZWYgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcmVzb2x2ZWREZWZcbiAgICAgICAgICAgIDogX1Z1ZS5leHRlbmQocmVzb2x2ZWREZWYpO1xuICAgICAgICAgIG1hdGNoLmNvbXBvbmVudHNba2V5XSA9IHJlc29sdmVkRGVmO1xuICAgICAgICAgIHBlbmRpbmctLTtcbiAgICAgICAgICBpZiAocGVuZGluZyA8PSAwKSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcmVqZWN0ID0gb25jZShmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgdmFyIG1zZyA9IFwiRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50IFwiICsga2V5ICsgXCI6IFwiICsgcmVhc29uO1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihmYWxzZSwgbXNnKTtcbiAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICBlcnJvciA9IGlzRXJyb3IocmVhc29uKVxuICAgICAgICAgICAgICA/IHJlYXNvblxuICAgICAgICAgICAgICA6IG5ldyBFcnJvcihtc2cpO1xuICAgICAgICAgICAgbmV4dChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcmVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IGRlZihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlcy50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXMudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBuZXcgc3ludGF4IGluIFZ1ZSAyLjNcbiAgICAgICAgICAgIHZhciBjb21wID0gcmVzLmNvbXBvbmVudDtcbiAgICAgICAgICAgIGlmIChjb21wICYmIHR5cGVvZiBjb21wLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY29tcC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWhhc0FzeW5jKSB7IG5leHQoKTsgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZsYXRNYXBDb21wb25lbnRzIChcbiAgbWF0Y2hlZCxcbiAgZm5cbikge1xuICByZXR1cm4gZmxhdHRlbihtYXRjaGVkLm1hcChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtLmNvbXBvbmVudHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmbihcbiAgICAgIG0uY29tcG9uZW50c1trZXldLFxuICAgICAgbS5pbnN0YW5jZXNba2V5XSxcbiAgICAgIG0sIGtleVxuICAgICk7IH0pXG4gIH0pKVxufVxuXG5mdW5jdGlvbiBmbGF0dGVuIChhcnIpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFycilcbn1cblxuLy8gaW4gV2VicGFjayAyLCByZXF1aXJlLmVuc3VyZSBub3cgYWxzbyByZXR1cm5zIGEgUHJvbWlzZVxuLy8gc28gdGhlIHJlc29sdmUvcmVqZWN0IGZ1bmN0aW9ucyBtYXkgZ2V0IGNhbGxlZCBhbiBleHRyYSB0aW1lXG4vLyBpZiB0aGUgdXNlciB1c2VzIGFuIGFycm93IGZ1bmN0aW9uIHNob3J0aGFuZCB0aGF0IGhhcHBlbnMgdG9cbi8vIHJldHVybiB0aGF0IFByb21pc2UuXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgaWYgKGNhbGxlZCkgeyByZXR1cm4gfVxuICAgIGNhbGxlZCA9IHRydWU7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBIaXN0b3J5ID0gZnVuY3Rpb24gSGlzdG9yeSAocm91dGVyLCBiYXNlKSB7XG4gIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB0aGlzLmJhc2UgPSBub3JtYWxpemVCYXNlKGJhc2UpO1xuICAvLyBzdGFydCB3aXRoIGEgcm91dGUgb2JqZWN0IHRoYXQgc3RhbmRzIGZvciBcIm5vd2hlcmVcIlxuICB0aGlzLmN1cnJlbnQgPSBTVEFSVDtcbiAgdGhpcy5wZW5kaW5nID0gbnVsbDtcbiAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICB0aGlzLnJlYWR5Q2JzID0gW107XG4gIHRoaXMucmVhZHlFcnJvckNicyA9IFtdO1xuICB0aGlzLmVycm9yQ2JzID0gW107XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4gKGNiKSB7XG4gIHRoaXMuY2IgPSBjYjtcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLm9uUmVhZHkgPSBmdW5jdGlvbiBvblJlYWR5IChjYiwgZXJyb3JDYikge1xuICBpZiAodGhpcy5yZWFkeSkge1xuICAgIGNiKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yZWFkeUNicy5wdXNoKGNiKTtcbiAgICBpZiAoZXJyb3JDYikge1xuICAgICAgdGhpcy5yZWFkeUVycm9yQ2JzLnB1c2goZXJyb3JDYik7XG4gICAgfVxuICB9XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gb25FcnJvciAoZXJyb3JDYikge1xuICB0aGlzLmVycm9yQ2JzLnB1c2goZXJyb3JDYik7XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS50cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiB0cmFuc2l0aW9uVG8gKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIHJvdXRlID0gdGhpcy5yb3V0ZXIubWF0Y2gobG9jYXRpb24sIHRoaXMuY3VycmVudCk7XG4gIHRoaXMuY29uZmlybVRyYW5zaXRpb24ocm91dGUsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpO1xuICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgdGhpcyQxLmVuc3VyZVVSTCgpO1xuXG4gICAgLy8gZmlyZSByZWFkeSBjYnMgb25jZVxuICAgIGlmICghdGhpcyQxLnJlYWR5KSB7XG4gICAgICB0aGlzJDEucmVhZHkgPSB0cnVlO1xuICAgICAgdGhpcyQxLnJlYWR5Q2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IGNiKHJvdXRlKTsgfSk7XG4gICAgfVxuICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKG9uQWJvcnQpIHtcbiAgICAgIG9uQWJvcnQoZXJyKTtcbiAgICB9XG4gICAgaWYgKGVyciAmJiAhdGhpcyQxLnJlYWR5KSB7XG4gICAgICB0aGlzJDEucmVhZHkgPSB0cnVlO1xuICAgICAgdGhpcyQxLnJlYWR5RXJyb3JDYnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgY2IoZXJyKTsgfSk7XG4gICAgfVxuICB9KTtcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLmNvbmZpcm1UcmFuc2l0aW9uID0gZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb24gKHJvdXRlLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQ7XG4gIHZhciBhYm9ydCA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoaXNFcnJvcihlcnIpKSB7XG4gICAgICBpZiAodGhpcyQxLmVycm9yQ2JzLmxlbmd0aCkge1xuICAgICAgICB0aGlzJDEuZXJyb3JDYnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgY2IoZXJyKTsgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKGZhbHNlLCAndW5jYXVnaHQgZXJyb3IgZHVyaW5nIHJvdXRlIG5hdmlnYXRpb246Jyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb25BYm9ydCAmJiBvbkFib3J0KGVycik7XG4gIH07XG4gIGlmIChcbiAgICBpc1NhbWVSb3V0ZShyb3V0ZSwgY3VycmVudCkgJiZcbiAgICAvLyBpbiB0aGUgY2FzZSB0aGUgcm91dGUgbWFwIGhhcyBiZWVuIGR5bmFtaWNhbGx5IGFwcGVuZGVkIHRvXG4gICAgcm91dGUubWF0Y2hlZC5sZW5ndGggPT09IGN1cnJlbnQubWF0Y2hlZC5sZW5ndGhcbiAgKSB7XG4gICAgdGhpcy5lbnN1cmVVUkwoKTtcbiAgICByZXR1cm4gYWJvcnQoKVxuICB9XG5cbiAgdmFyIHJlZiA9IHJlc29sdmVRdWV1ZSh0aGlzLmN1cnJlbnQubWF0Y2hlZCwgcm91dGUubWF0Y2hlZCk7XG4gICAgdmFyIHVwZGF0ZWQgPSByZWYudXBkYXRlZDtcbiAgICB2YXIgZGVhY3RpdmF0ZWQgPSByZWYuZGVhY3RpdmF0ZWQ7XG4gICAgdmFyIGFjdGl2YXRlZCA9IHJlZi5hY3RpdmF0ZWQ7XG5cbiAgdmFyIHF1ZXVlID0gW10uY29uY2F0KFxuICAgIC8vIGluLWNvbXBvbmVudCBsZWF2ZSBndWFyZHNcbiAgICBleHRyYWN0TGVhdmVHdWFyZHMoZGVhY3RpdmF0ZWQpLFxuICAgIC8vIGdsb2JhbCBiZWZvcmUgaG9va3NcbiAgICB0aGlzLnJvdXRlci5iZWZvcmVIb29rcyxcbiAgICAvLyBpbi1jb21wb25lbnQgdXBkYXRlIGhvb2tzXG4gICAgZXh0cmFjdFVwZGF0ZUhvb2tzKHVwZGF0ZWQpLFxuICAgIC8vIGluLWNvbmZpZyBlbnRlciBndWFyZHNcbiAgICBhY3RpdmF0ZWQubWFwKGZ1bmN0aW9uIChtKSB7IHJldHVybiBtLmJlZm9yZUVudGVyOyB9KSxcbiAgICAvLyBhc3luYyBjb21wb25lbnRzXG4gICAgcmVzb2x2ZUFzeW5jQ29tcG9uZW50cyhhY3RpdmF0ZWQpXG4gICk7XG5cbiAgdGhpcy5wZW5kaW5nID0gcm91dGU7XG4gIHZhciBpdGVyYXRvciA9IGZ1bmN0aW9uIChob29rLCBuZXh0KSB7XG4gICAgaWYgKHRoaXMkMS5wZW5kaW5nICE9PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIGFib3J0KClcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGhvb2socm91dGUsIGN1cnJlbnQsIGZ1bmN0aW9uICh0bykge1xuICAgICAgICBpZiAodG8gPT09IGZhbHNlIHx8IGlzRXJyb3IodG8pKSB7XG4gICAgICAgICAgLy8gbmV4dChmYWxzZSkgLT4gYWJvcnQgbmF2aWdhdGlvbiwgZW5zdXJlIGN1cnJlbnQgVVJMXG4gICAgICAgICAgdGhpcyQxLmVuc3VyZVVSTCh0cnVlKTtcbiAgICAgICAgICBhYm9ydCh0byk7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdHlwZW9mIHRvID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICh0eXBlb2YgdG8gPT09ICdvYmplY3QnICYmIChcbiAgICAgICAgICAgIHR5cGVvZiB0by5wYXRoID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgdHlwZW9mIHRvLm5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gbmV4dCgnLycpIG9yIG5leHQoeyBwYXRoOiAnLycgfSkgLT4gcmVkaXJlY3RcbiAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgIGlmICh0eXBlb2YgdG8gPT09ICdvYmplY3QnICYmIHRvLnJlcGxhY2UpIHtcbiAgICAgICAgICAgIHRoaXMkMS5yZXBsYWNlKHRvKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcyQxLnB1c2godG8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjb25maXJtIHRyYW5zaXRpb24gYW5kIHBhc3Mgb24gdGhlIHZhbHVlXG4gICAgICAgICAgbmV4dCh0byk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFib3J0KGUpO1xuICAgIH1cbiAgfTtcblxuICBydW5RdWV1ZShxdWV1ZSwgaXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zdEVudGVyQ2JzID0gW107XG4gICAgdmFyIGlzVmFsaWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzJDEuY3VycmVudCA9PT0gcm91dGU7IH07XG4gICAgLy8gd2FpdCB1bnRpbCBhc3luYyBjb21wb25lbnRzIGFyZSByZXNvbHZlZCBiZWZvcmVcbiAgICAvLyBleHRyYWN0aW5nIGluLWNvbXBvbmVudCBlbnRlciBndWFyZHNcbiAgICB2YXIgZW50ZXJHdWFyZHMgPSBleHRyYWN0RW50ZXJHdWFyZHMoYWN0aXZhdGVkLCBwb3N0RW50ZXJDYnMsIGlzVmFsaWQpO1xuICAgIHZhciBxdWV1ZSA9IGVudGVyR3VhcmRzLmNvbmNhdCh0aGlzJDEucm91dGVyLnJlc29sdmVIb29rcyk7XG4gICAgcnVuUXVldWUocXVldWUsIGl0ZXJhdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcyQxLnBlbmRpbmcgIT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBhYm9ydCgpXG4gICAgICB9XG4gICAgICB0aGlzJDEucGVuZGluZyA9IG51bGw7XG4gICAgICBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICAgIGlmICh0aGlzJDEucm91dGVyLmFwcCkge1xuICAgICAgICB0aGlzJDEucm91dGVyLmFwcC4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBvc3RFbnRlckNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyBjYigpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudXBkYXRlUm91dGUgPSBmdW5jdGlvbiB1cGRhdGVSb3V0ZSAocm91dGUpIHtcbiAgdmFyIHByZXYgPSB0aGlzLmN1cnJlbnQ7XG4gIHRoaXMuY3VycmVudCA9IHJvdXRlO1xuICB0aGlzLmNiICYmIHRoaXMuY2Iocm91dGUpO1xuICB0aGlzLnJvdXRlci5hZnRlckhvb2tzLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICBob29rICYmIGhvb2socm91dGUsIHByZXYpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUJhc2UgKGJhc2UpIHtcbiAgaWYgKCFiYXNlKSB7XG4gICAgaWYgKGluQnJvd3Nlcikge1xuICAgICAgLy8gcmVzcGVjdCA8YmFzZT4gdGFnXG4gICAgICB2YXIgYmFzZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYmFzZScpO1xuICAgICAgYmFzZSA9IChiYXNlRWwgJiYgYmFzZUVsLmdldEF0dHJpYnV0ZSgnaHJlZicpKSB8fCAnLyc7XG4gICAgICAvLyBzdHJpcCBmdWxsIFVSTCBvcmlnaW5cbiAgICAgIGJhc2UgPSBiYXNlLnJlcGxhY2UoL15odHRwcz86XFwvXFwvW15cXC9dKy8sICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZSA9ICcvJztcbiAgICB9XG4gIH1cbiAgLy8gbWFrZSBzdXJlIHRoZXJlJ3MgdGhlIHN0YXJ0aW5nIHNsYXNoXG4gIGlmIChiYXNlLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgYmFzZSA9ICcvJyArIGJhc2U7XG4gIH1cbiAgLy8gcmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gIHJldHVybiBiYXNlLnJlcGxhY2UoL1xcLyQvLCAnJylcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXVlIChcbiAgY3VycmVudCxcbiAgbmV4dFxuKSB7XG4gIHZhciBpO1xuICB2YXIgbWF4ID0gTWF0aC5tYXgoY3VycmVudC5sZW5ndGgsIG5leHQubGVuZ3RoKTtcbiAgZm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgaWYgKGN1cnJlbnRbaV0gIT09IG5leHRbaV0pIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdXBkYXRlZDogbmV4dC5zbGljZSgwLCBpKSxcbiAgICBhY3RpdmF0ZWQ6IG5leHQuc2xpY2UoaSksXG4gICAgZGVhY3RpdmF0ZWQ6IGN1cnJlbnQuc2xpY2UoaSlcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0R3VhcmRzIChcbiAgcmVjb3JkcyxcbiAgbmFtZSxcbiAgYmluZCxcbiAgcmV2ZXJzZVxuKSB7XG4gIHZhciBndWFyZHMgPSBmbGF0TWFwQ29tcG9uZW50cyhyZWNvcmRzLCBmdW5jdGlvbiAoZGVmLCBpbnN0YW5jZSwgbWF0Y2gsIGtleSkge1xuICAgIHZhciBndWFyZCA9IGV4dHJhY3RHdWFyZChkZWYsIG5hbWUpO1xuICAgIGlmIChndWFyZCkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZ3VhcmQpXG4gICAgICAgID8gZ3VhcmQubWFwKGZ1bmN0aW9uIChndWFyZCkgeyByZXR1cm4gYmluZChndWFyZCwgaW5zdGFuY2UsIG1hdGNoLCBrZXkpOyB9KVxuICAgICAgICA6IGJpbmQoZ3VhcmQsIGluc3RhbmNlLCBtYXRjaCwga2V5KVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmbGF0dGVuKHJldmVyc2UgPyBndWFyZHMucmV2ZXJzZSgpIDogZ3VhcmRzKVxufVxuXG5mdW5jdGlvbiBleHRyYWN0R3VhcmQgKFxuICBkZWYsXG4gIGtleVxuKSB7XG4gIGlmICh0eXBlb2YgZGVmICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXh0ZW5kIG5vdyBzbyB0aGF0IGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQuXG4gICAgZGVmID0gX1Z1ZS5leHRlbmQoZGVmKTtcbiAgfVxuICByZXR1cm4gZGVmLm9wdGlvbnNba2V5XVxufVxuXG5mdW5jdGlvbiBleHRyYWN0TGVhdmVHdWFyZHMgKGRlYWN0aXZhdGVkKSB7XG4gIHJldHVybiBleHRyYWN0R3VhcmRzKGRlYWN0aXZhdGVkLCAnYmVmb3JlUm91dGVMZWF2ZScsIGJpbmRHdWFyZCwgdHJ1ZSlcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFVwZGF0ZUhvb2tzICh1cGRhdGVkKSB7XG4gIHJldHVybiBleHRyYWN0R3VhcmRzKHVwZGF0ZWQsICdiZWZvcmVSb3V0ZVVwZGF0ZScsIGJpbmRHdWFyZClcbn1cblxuZnVuY3Rpb24gYmluZEd1YXJkIChndWFyZCwgaW5zdGFuY2UpIHtcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGJvdW5kUm91dGVHdWFyZCAoKSB7XG4gICAgICByZXR1cm4gZ3VhcmQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEVudGVyR3VhcmRzIChcbiAgYWN0aXZhdGVkLFxuICBjYnMsXG4gIGlzVmFsaWRcbikge1xuICByZXR1cm4gZXh0cmFjdEd1YXJkcyhhY3RpdmF0ZWQsICdiZWZvcmVSb3V0ZUVudGVyJywgZnVuY3Rpb24gKGd1YXJkLCBfLCBtYXRjaCwga2V5KSB7XG4gICAgcmV0dXJuIGJpbmRFbnRlckd1YXJkKGd1YXJkLCBtYXRjaCwga2V5LCBjYnMsIGlzVmFsaWQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGJpbmRFbnRlckd1YXJkIChcbiAgZ3VhcmQsXG4gIG1hdGNoLFxuICBrZXksXG4gIGNicyxcbiAgaXNWYWxpZFxuKSB7XG4gIHJldHVybiBmdW5jdGlvbiByb3V0ZUVudGVyR3VhcmQgKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgcmV0dXJuIGd1YXJkKHRvLCBmcm9tLCBmdW5jdGlvbiAoY2IpIHtcbiAgICAgIG5leHQoY2IpO1xuICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYnMucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gIzc1MFxuICAgICAgICAgIC8vIGlmIGEgcm91dGVyLXZpZXcgaXMgd3JhcHBlZCB3aXRoIGFuIG91dC1pbiB0cmFuc2l0aW9uLFxuICAgICAgICAgIC8vIHRoZSBpbnN0YW5jZSBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIGF0IHRoaXMgdGltZS5cbiAgICAgICAgICAvLyB3ZSB3aWxsIG5lZWQgdG8gcG9sbCBmb3IgcmVnaXN0cmF0aW9uIHVudGlsIGN1cnJlbnQgcm91dGVcbiAgICAgICAgICAvLyBpcyBubyBsb25nZXIgdmFsaWQuXG4gICAgICAgICAgcG9sbChjYiwgbWF0Y2guaW5zdGFuY2VzLCBrZXksIGlzVmFsaWQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvbGwgKFxuICBjYiwgLy8gc29tZWhvdyBmbG93IGNhbm5vdCBpbmZlciB0aGlzIGlzIGEgZnVuY3Rpb25cbiAgaW5zdGFuY2VzLFxuICBrZXksXG4gIGlzVmFsaWRcbikge1xuICBpZiAoaW5zdGFuY2VzW2tleV0pIHtcbiAgICBjYihpbnN0YW5jZXNba2V5XSk7XG4gIH0gZWxzZSBpZiAoaXNWYWxpZCgpKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBwb2xsKGNiLCBpbnN0YW5jZXMsIGtleSwgaXNWYWxpZCk7XG4gICAgfSwgMTYpO1xuICB9XG59XG5cbi8qICAqL1xuXG5cbnZhciBIVE1MNUhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkkJDEpIHtcbiAgZnVuY3Rpb24gSFRNTDVIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIEhpc3RvcnkkJDEuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpO1xuXG4gICAgdmFyIGV4cGVjdFNjcm9sbCA9IHJvdXRlci5vcHRpb25zLnNjcm9sbEJlaGF2aW9yO1xuXG4gICAgaWYgKGV4cGVjdFNjcm9sbCkge1xuICAgICAgc2V0dXBTY3JvbGwoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGN1cnJlbnQgPSB0aGlzJDEuY3VycmVudDtcbiAgICAgIHRoaXMkMS50cmFuc2l0aW9uVG8oZ2V0TG9jYXRpb24odGhpcyQxLmJhc2UpLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgaWYgKGV4cGVjdFNjcm9sbCkge1xuICAgICAgICAgIGhhbmRsZVNjcm9sbChyb3V0ZXIsIHJvdXRlLCBjdXJyZW50LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIEhpc3RvcnkkJDEgKSBIVE1MNUhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeSQkMTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkkJDEgJiYgSGlzdG9yeSQkMS5wcm90b3R5cGUgKTtcbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhUTUw1SGlzdG9yeTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGZyb21Sb3V0ZSA9IHJlZi5jdXJyZW50O1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpO1xuICAgICAgaGFuZGxlU2Nyb2xsKHRoaXMkMS5yb3V0ZXIsIHJvdXRlLCBmcm9tUm91dGUsIGZhbHNlKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBmcm9tUm91dGUgPSByZWYuY3VycmVudDtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKTtcbiAgICAgIGhhbmRsZVNjcm9sbCh0aGlzJDEucm91dGVyLCByb3V0ZSwgZnJvbVJvdXRlLCBmYWxzZSk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgaWYgKGdldExvY2F0aW9uKHRoaXMuYmFzZSkgIT09IHRoaXMuY3VycmVudC5mdWxsUGF0aCkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBjbGVhblBhdGgodGhpcy5iYXNlICsgdGhpcy5jdXJyZW50LmZ1bGxQYXRoKTtcbiAgICAgIHB1c2ggPyBwdXNoU3RhdGUoY3VycmVudCkgOiByZXBsYWNlU3RhdGUoY3VycmVudCk7XG4gICAgfVxuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0TG9jYXRpb24odGhpcy5iYXNlKVxuICB9O1xuXG4gIHJldHVybiBIVE1MNUhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24gKGJhc2UpIHtcbiAgdmFyIHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIGlmIChiYXNlICYmIHBhdGguaW5kZXhPZihiYXNlKSA9PT0gMCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2UubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gKHBhdGggfHwgJy8nKSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaFxufVxuXG4vKiAgKi9cblxuXG52YXIgSGFzaEhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkkJDEpIHtcbiAgZnVuY3Rpb24gSGFzaEhpc3RvcnkgKHJvdXRlciwgYmFzZSwgZmFsbGJhY2spIHtcbiAgICBIaXN0b3J5JCQxLmNhbGwodGhpcywgcm91dGVyLCBiYXNlKTtcbiAgICAvLyBjaGVjayBoaXN0b3J5IGZhbGxiYWNrIGRlZXBsaW5raW5nXG4gICAgaWYgKGZhbGxiYWNrICYmIGNoZWNrRmFsbGJhY2sodGhpcy5iYXNlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVuc3VyZVNsYXNoKCk7XG4gIH1cblxuICBpZiAoIEhpc3RvcnkkJDEgKSBIYXNoSGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5JCQxO1xuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5JCQxICYmIEhpc3RvcnkkJDEucHJvdG90eXBlICk7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEhhc2hIaXN0b3J5O1xuXG4gIC8vIHRoaXMgaXMgZGVsYXllZCB1bnRpbCB0aGUgYXBwIG1vdW50c1xuICAvLyB0byBhdm9pZCB0aGUgaGFzaGNoYW5nZSBsaXN0ZW5lciBiZWluZyBmaXJlZCB0b28gZWFybHlcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnNldHVwTGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWVuc3VyZVNsYXNoKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzJDEudHJhbnNpdGlvblRvKGdldEhhc2goKSwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoSGFzaChyb3V0ZS5mdWxsUGF0aCk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aCk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAocHVzaCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50LmZ1bGxQYXRoO1xuICAgIGlmIChnZXRIYXNoKCkgIT09IGN1cnJlbnQpIHtcbiAgICAgIHB1c2ggPyBwdXNoSGFzaChjdXJyZW50KSA6IHJlcGxhY2VIYXNoKGN1cnJlbnQpO1xuICAgIH1cbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0SGFzaCgpXG4gIH07XG5cbiAgcmV0dXJuIEhhc2hIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbmZ1bmN0aW9uIGNoZWNrRmFsbGJhY2sgKGJhc2UpIHtcbiAgdmFyIGxvY2F0aW9uID0gZ2V0TG9jYXRpb24oYmFzZSk7XG4gIGlmICghL15cXC8jLy50ZXN0KGxvY2F0aW9uKSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFxuICAgICAgY2xlYW5QYXRoKGJhc2UgKyAnLyMnICsgbG9jYXRpb24pXG4gICAgKTtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuc3VyZVNsYXNoICgpIHtcbiAgdmFyIHBhdGggPSBnZXRIYXNoKCk7XG4gIGlmIChwYXRoLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXBsYWNlSGFzaCgnLycgKyBwYXRoKTtcbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGdldEhhc2ggKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHZhciBpbmRleCA9IGhyZWYuaW5kZXhPZignIycpO1xuICByZXR1cm4gaW5kZXggPT09IC0xID8gJycgOiBocmVmLnNsaWNlKGluZGV4ICsgMSlcbn1cblxuZnVuY3Rpb24gcHVzaEhhc2ggKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaCAocGF0aCkge1xuICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICB2YXIgaSA9IGhyZWYuaW5kZXhPZignIycpO1xuICB2YXIgYmFzZSA9IGkgPj0gMCA/IGhyZWYuc2xpY2UoMCwgaSkgOiBocmVmO1xuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgoYmFzZSArIFwiI1wiICsgcGF0aCkpO1xufVxuXG4vKiAgKi9cblxuXG52YXIgQWJzdHJhY3RIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5JCQxKSB7XG4gIGZ1bmN0aW9uIEFic3RyYWN0SGlzdG9yeSAocm91dGVyLCBiYXNlKSB7XG4gICAgSGlzdG9yeSQkMS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSk7XG4gICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIHRoaXMuaW5kZXggPSAtMTtcbiAgfVxuXG4gIGlmICggSGlzdG9yeSQkMSApIEFic3RyYWN0SGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5JCQxO1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSQkMSAmJiBIaXN0b3J5JCQxLnByb3RvdHlwZSApO1xuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJzdHJhY3RIaXN0b3J5O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4ICsgMSkuY29uY2F0KHJvdXRlKTtcbiAgICAgIHRoaXMkMS5pbmRleCsrO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB9LCBvbkFib3J0KTtcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCkuY29uY2F0KHJvdXRlKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgdGFyZ2V0SW5kZXggPSB0aGlzLmluZGV4ICsgbjtcbiAgICBpZiAodGFyZ2V0SW5kZXggPCAwIHx8IHRhcmdldEluZGV4ID49IHRoaXMuc3RhY2subGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIHJvdXRlID0gdGhpcy5zdGFja1t0YXJnZXRJbmRleF07XG4gICAgdGhpcy5jb25maXJtVHJhbnNpdGlvbihyb3V0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcyQxLmluZGV4ID0gdGFyZ2V0SW5kZXg7XG4gICAgICB0aGlzJDEudXBkYXRlUm91dGUocm91dGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZ2V0Q3VycmVudExvY2F0aW9uID0gZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gY3VycmVudCA/IGN1cnJlbnQuZnVsbFBhdGggOiAnLydcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAoKSB7XG4gICAgLy8gbm9vcFxuICB9O1xuXG4gIHJldHVybiBBYnN0cmFjdEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuLyogICovXG5cbnZhciBWdWVSb3V0ZXIgPSBmdW5jdGlvbiBWdWVSb3V0ZXIgKG9wdGlvbnMpIHtcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgdGhpcy5hcHAgPSBudWxsO1xuICB0aGlzLmFwcHMgPSBbXTtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgdGhpcy5iZWZvcmVIb29rcyA9IFtdO1xuICB0aGlzLnJlc29sdmVIb29rcyA9IFtdO1xuICB0aGlzLmFmdGVySG9va3MgPSBbXTtcbiAgdGhpcy5tYXRjaGVyID0gY3JlYXRlTWF0Y2hlcihvcHRpb25zLnJvdXRlcyB8fCBbXSwgdGhpcyk7XG5cbiAgdmFyIG1vZGUgPSBvcHRpb25zLm1vZGUgfHwgJ2hhc2gnO1xuICB0aGlzLmZhbGxiYWNrID0gbW9kZSA9PT0gJ2hpc3RvcnknICYmICFzdXBwb3J0c1B1c2hTdGF0ZSAmJiBvcHRpb25zLmZhbGxiYWNrICE9PSBmYWxzZTtcbiAgaWYgKHRoaXMuZmFsbGJhY2spIHtcbiAgICBtb2RlID0gJ2hhc2gnO1xuICB9XG4gIGlmICghaW5Ccm93c2VyKSB7XG4gICAgbW9kZSA9ICdhYnN0cmFjdCc7XG4gIH1cbiAgdGhpcy5tb2RlID0gbW9kZTtcblxuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlICdoaXN0b3J5JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIVE1MNUhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlKTtcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGFzaEhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlLCB0aGlzLmZhbGxiYWNrKTtcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWJzdHJhY3QnOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEFic3RyYWN0SGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UpO1xuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgYXNzZXJ0KGZhbHNlLCAoXCJpbnZhbGlkIG1vZGU6IFwiICsgbW9kZSkpO1xuICAgICAgfVxuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjdXJyZW50Um91dGU6IHt9IH07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUubWF0Y2ggPSBmdW5jdGlvbiBtYXRjaCAoXG4gIHJhdyxcbiAgY3VycmVudCxcbiAgcmVkaXJlY3RlZEZyb21cbikge1xuICByZXR1cm4gdGhpcy5tYXRjaGVyLm1hdGNoKHJhdywgY3VycmVudCwgcmVkaXJlY3RlZEZyb20pXG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuY3VycmVudFJvdXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuaGlzdG9yeSAmJiB0aGlzLmhpc3RvcnkuY3VycmVudFxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gaW5pdCAoYXBwIC8qIFZ1ZSBjb21wb25lbnQgaW5zdGFuY2UgKi8pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFzc2VydChcbiAgICBpbnN0YWxsLmluc3RhbGxlZCxcbiAgICBcIm5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBjYWxsIGBWdWUudXNlKFZ1ZVJvdXRlcilgIFwiICtcbiAgICBcImJlZm9yZSBjcmVhdGluZyByb290IGluc3RhbmNlLlwiXG4gICk7XG5cbiAgdGhpcy5hcHBzLnB1c2goYXBwKTtcblxuICAvLyBtYWluIGFwcCBhbHJlYWR5IGluaXRpYWxpemVkLlxuICBpZiAodGhpcy5hcHApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIHZhciBoaXN0b3J5ID0gdGhpcy5oaXN0b3J5O1xuXG4gIGlmIChoaXN0b3J5IGluc3RhbmNlb2YgSFRNTDVIaXN0b3J5KSB7XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oaGlzdG9yeS5nZXRDdXJyZW50TG9jYXRpb24oKSk7XG4gIH0gZWxzZSBpZiAoaGlzdG9yeSBpbnN0YW5jZW9mIEhhc2hIaXN0b3J5KSB7XG4gICAgdmFyIHNldHVwSGFzaExpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaGlzdG9yeS5zZXR1cExpc3RlbmVycygpO1xuICAgIH07XG4gICAgaGlzdG9yeS50cmFuc2l0aW9uVG8oXG4gICAgICBoaXN0b3J5LmdldEN1cnJlbnRMb2NhdGlvbigpLFxuICAgICAgc2V0dXBIYXNoTGlzdGVuZXIsXG4gICAgICBzZXR1cEhhc2hMaXN0ZW5lclxuICAgICk7XG4gIH1cblxuICBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAocm91dGUpIHtcbiAgICB0aGlzJDEuYXBwcy5mb3JFYWNoKGZ1bmN0aW9uIChhcHApIHtcbiAgICAgIGFwcC5fcm91dGUgPSByb3V0ZTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJlZm9yZUVhY2ggPSBmdW5jdGlvbiBiZWZvcmVFYWNoIChmbikge1xuICByZXR1cm4gcmVnaXN0ZXJIb29rKHRoaXMuYmVmb3JlSG9va3MsIGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5iZWZvcmVSZXNvbHZlID0gZnVuY3Rpb24gYmVmb3JlUmVzb2x2ZSAoZm4pIHtcbiAgcmV0dXJuIHJlZ2lzdGVySG9vayh0aGlzLnJlc29sdmVIb29rcywgZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmFmdGVyRWFjaCA9IGZ1bmN0aW9uIGFmdGVyRWFjaCAoZm4pIHtcbiAgcmV0dXJuIHJlZ2lzdGVySG9vayh0aGlzLmFmdGVySG9va3MsIGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5vblJlYWR5ID0gZnVuY3Rpb24gb25SZWFkeSAoY2IsIGVycm9yQ2IpIHtcbiAgdGhpcy5oaXN0b3J5Lm9uUmVhZHkoY2IsIGVycm9yQ2IpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gb25FcnJvciAoZXJyb3JDYikge1xuICB0aGlzLmhpc3Rvcnkub25FcnJvcihlcnJvckNiKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gIHRoaXMuaGlzdG9yeS5wdXNoKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gIHRoaXMuaGlzdG9yeS5yZXBsYWNlKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICB0aGlzLmhpc3RvcnkuZ28obik7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJhY2sgPSBmdW5jdGlvbiBiYWNrICgpIHtcbiAgdGhpcy5nbygtMSk7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmZvcndhcmQgPSBmdW5jdGlvbiBmb3J3YXJkICgpIHtcbiAgdGhpcy5nbygxKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZ2V0TWF0Y2hlZENvbXBvbmVudHMgPSBmdW5jdGlvbiBnZXRNYXRjaGVkQ29tcG9uZW50cyAodG8pIHtcbiAgdmFyIHJvdXRlID0gdG9cbiAgICA/IHRvLm1hdGNoZWRcbiAgICAgID8gdG9cbiAgICAgIDogdGhpcy5yZXNvbHZlKHRvKS5yb3V0ZVxuICAgIDogdGhpcy5jdXJyZW50Um91dGU7XG4gIGlmICghcm91dGUpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCByb3V0ZS5tYXRjaGVkLm1hcChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhtLmNvbXBvbmVudHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gbS5jb21wb25lbnRzW2tleV1cbiAgICB9KVxuICB9KSlcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUgKFxuICB0byxcbiAgY3VycmVudCxcbiAgYXBwZW5kXG4pIHtcbiAgdmFyIGxvY2F0aW9uID0gbm9ybWFsaXplTG9jYXRpb24oXG4gICAgdG8sXG4gICAgY3VycmVudCB8fCB0aGlzLmhpc3RvcnkuY3VycmVudCxcbiAgICBhcHBlbmQsXG4gICAgdGhpc1xuICApO1xuICB2YXIgcm91dGUgPSB0aGlzLm1hdGNoKGxvY2F0aW9uLCBjdXJyZW50KTtcbiAgdmFyIGZ1bGxQYXRoID0gcm91dGUucmVkaXJlY3RlZEZyb20gfHwgcm91dGUuZnVsbFBhdGg7XG4gIHZhciBiYXNlID0gdGhpcy5oaXN0b3J5LmJhc2U7XG4gIHZhciBocmVmID0gY3JlYXRlSHJlZihiYXNlLCBmdWxsUGF0aCwgdGhpcy5tb2RlKTtcbiAgcmV0dXJuIHtcbiAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgcm91dGU6IHJvdXRlLFxuICAgIGhyZWY6IGhyZWYsXG4gICAgLy8gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBub3JtYWxpemVkVG86IGxvY2F0aW9uLFxuICAgIHJlc29sdmVkOiByb3V0ZVxuICB9XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmFkZFJvdXRlcyA9IGZ1bmN0aW9uIGFkZFJvdXRlcyAocm91dGVzKSB7XG4gIHRoaXMubWF0Y2hlci5hZGRSb3V0ZXMocm91dGVzKTtcbiAgaWYgKHRoaXMuaGlzdG9yeS5jdXJyZW50ICE9PSBTVEFSVCkge1xuICAgIHRoaXMuaGlzdG9yeS50cmFuc2l0aW9uVG8odGhpcy5oaXN0b3J5LmdldEN1cnJlbnRMb2NhdGlvbigpKTtcbiAgfVxufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFZ1ZVJvdXRlci5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG5mdW5jdGlvbiByZWdpc3Rlckhvb2sgKGxpc3QsIGZuKSB7XG4gIGxpc3QucHVzaChmbik7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGkgPSBsaXN0LmluZGV4T2YoZm4pO1xuICAgIGlmIChpID4gLTEpIHsgbGlzdC5zcGxpY2UoaSwgMSk7IH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIcmVmIChiYXNlLCBmdWxsUGF0aCwgbW9kZSkge1xuICB2YXIgcGF0aCA9IG1vZGUgPT09ICdoYXNoJyA/ICcjJyArIGZ1bGxQYXRoIDogZnVsbFBhdGg7XG4gIHJldHVybiBiYXNlID8gY2xlYW5QYXRoKGJhc2UgKyAnLycgKyBwYXRoKSA6IHBhdGhcbn1cblxuVnVlUm91dGVyLmluc3RhbGwgPSBpbnN0YWxsO1xuVnVlUm91dGVyLnZlcnNpb24gPSAnMi43LjAnO1xuXG5pZiAoaW5Ccm93c2VyICYmIHdpbmRvdy5WdWUpIHtcbiAgd2luZG93LlZ1ZS51c2UoVnVlUm91dGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWdWVSb3V0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5jb21tb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4vcm91dGVyXCI7XG5cbnJlcXVpcmUoXCIuL2Jvb3RzdHJhcFwiKTtcbnJlcXVpcmUoXCIuL2NvbXBvbmVudHNcIik7XG5yZXF1aXJlKFwiLi9kaXJlY3RpdmVzXCIpO1xucmVxdWlyZShcIi4vbWl4aW5zXCIpO1xuXG53aW5kb3cuc3RvcmUgPSBzdG9yZTtcblxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2U7XG5cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICBzdG9yZSxcbiAgcm91dGVyXG59KTtcblxud2luZG93LmFwcCA9IGFwcDtcblxuYXBwLiRtb3VudChcIiNhcHAtbGF5b3V0XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LThjMDFlMTdlXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Rhc2hib2FyZC52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9EYXNoYm9hcmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBEYXNoYm9hcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LThjMDFlMTdlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOGMwMWUxN2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvRGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Jvb21zLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2NhYjQwMjVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUm9vbXMudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUm9vbXMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBSb29tcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2NhYjQwMjVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zY2FiNDAyNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUm9vbXMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1Jvb21zLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Jvb20udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wNGYxMDRmY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Sb29tLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vUm9vbS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJvb20udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA0ZjEwNGZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDRmMTA0ZmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vUm9vbS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9Sb29tLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Jvb2tpbmdBdHRlbmRlZXMudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wMmY4YmRhOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Cb29raW5nQXR0ZW5kZWVzLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nQXR0ZW5kZWVzLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQm9va2luZ0F0dGVuZGVlcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDJmOGJkYThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wMmY4YmRhOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0Jvb2tpbmdBdHRlbmRlZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nQXR0ZW5kZWVzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NhbGVuZGFyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWQwMzczNDZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2FsZW5kYXIudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ2FsZW5kYXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFkMDM3MzQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWQwMzczNDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9DYWxlbmRhci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Jvb21TdGF0dXMudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01Mjg5YjkzNVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Sb29tU3RhdHVzLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Sb29tU3RhdHVzLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUm9vbVN0YXR1cy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTI4OWI5MzVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01Mjg5YjkzNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL1Jvb21TdGF0dXMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Sb29tU3RhdHVzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgUm9vbXMgIGZyb20gXCIuL1Jvb21zLnZ1ZVwiO1xuaW1wb3J0IFJvb20gIGZyb20gXCIuL3Jvb20vUm9vbS52dWVcIjtcbmltcG9ydCBEYXNoYm9hcmQgIGZyb20gXCIuL0Rhc2hib2FyZC52dWVcIjtcbmltcG9ydCBBcHBTcGFjZSBmcm9tICcuLy4uL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlJztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZU5vdEZvdW5kLnZ1ZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGNvbXBvbmVudDogQXBwU3BhY2UsXG4gICAgY2hpbGRyZW4gOiBbXG4gICAgICAgIHsgcGF0aDogXCIvXCIsIGNvbXBvbmVudDogRGFzaGJvYXJkLCBuYW1lOiBcImRhc2hib2FyZFwifSxcbiAgICAgICAgeyBwYXRoOiBcIi9wcm92aWRlci86cHJvdmlkZXIvcm9vbXNcIiwgbmFtZTogXCJwcm92aWRlcl9yb29tc1wiLCBjb21wb25lbnQ6IFJvb21zIH0sXG4gICAgXVxuICB9LFxuICB7IHBhdGg6IFwiL3Jvb21zLzpyb29tXCIsIG5hbWU6IFwicm9vbVwiLCBjb21wb25lbnQ6IFJvb20gfSxcbiAgeyBwYXRoOiBcIipcIiwgY29tcG9uZW50OiBQYWdlTm90Rm91bmQgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3JvdXRlcy5qcyIsIi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBHbG9iYWwgVmFyaWFibGVzXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfFxuICovXG5cbndpbmRvdy5sYXJvdXRlID0gcmVxdWlyZShcIi4vbGFyb3V0ZVwiKTtcbndpbmRvdy5tb21lbnQgPSByZXF1aXJlKFwibW9tZW50LXRpbWV6b25lXCIpO1xucmVxdWlyZShcIm1vbWVudC1wcmVjaXNlLXJhbmdlLXBsdWdpblwiKTtcbm1vbWVudC50ei5zZXREZWZhdWx0KFwiVVRDXCIpO1xuXG4vKlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHwgQXhpb3MgU2V0dXBcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gKi9cblxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQ1NSRi1UT0tFTlwiXSA9IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbjtcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICBjb25maWcgPT4ge1xuICAgIE5Qcm9ncmVzcy5jb25maWd1cmUoe1xuICAgICAgZWFzaW5nOiBcImVhc2VcIixcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBzaG93U3Bpbm5lcjogZmFsc2VcbiAgICB9KTtcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICBOUHJvZ3Jlc3MuaW5jKDAuMyk7XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSxcbiAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4pO1xuXG5heGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICByZXNwb25zZSA9PiB7XG4gICAgTlByb2dyZXNzLmRvbmUoKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sXG4gIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuKTtcblxuLypcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8IExhcmF2ZWwgRWNobyBTZXR1cFxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHxcbiAqL1xuXG5pbXBvcnQgRWNobyBmcm9tIFwibGFyYXZlbC1lY2hvXCI7XG5pbXBvcnQgUHVzaGVyIGZyb20gXCJwdXNoZXItanNcIjtcblxuUHVzaGVyLmxvZyA9IG1zZyA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKG1zZyk7XG59O1xuXG53aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbiAgY2x1c3RlcjogJ3VzMicsXG4gIGJyb2FkY2FzdGVyOiBcInB1c2hlclwiLFxuICBrZXk6IExhcmF2ZWwucHVzaGVyS2V5LFxufSk7XG5cbi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBTZW50cnkgKyBSYXZlbiBTZXR1cFxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHxcbiAqL1xuLy8gaW1wb3J0IFJhdmVuIGZyb20gJ3JhdmVuLWpzJztcbi8vIGltcG9ydCBSYXZlblZ1ZSBmcm9tICdyYXZlbi1qcy9wbHVnaW5zL3Z1ZSc7XG4vL1xuLy8gaWYoTGFyYXZlbC5lbnYgIT09ICdsb2NhbCcpIHtcbi8vICAgICBSYXZlblxuLy8gICAgICAgICAuY29uZmlnKCdodHRwczovLzUwMTI0ZTg5ZDY4OTQ1YmI4Zjc4NzY2NmYwNDgyODA3QHNlbnRyeS5jb2RlcGllci5pby80Jylcbi8vICAgICAgICAgLmFkZFBsdWdpbihSYXZlblZ1ZSwgVnVlKVxuLy8gICAgICAgICAuaW5zdGFsbCgpO1xuLy8gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJjbGFzcyBFcnJvcnMge1xuICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgRXJyb3JzIGluc3RhbmNlLlxuICAgICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAgICogRGV0ZXJtaW5lIGlmIGFuIGVycm9ycyBleGlzdHMgZm9yIHRoZSBnaXZlbiBmaWVsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgICAqL1xuICBoYXMoZmllbGQpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICB9XG5cbiAgLyoqXG4gICAgICogRGV0ZXJtaW5lIGlmIHdlIGhhdmUgYW55IGVycm9ycy5cbiAgICAgKi9cbiAgYW55KCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFJldHJpZXZlIHRoZSBlcnJvciBtZXNzYWdlIGZvciBhIGZpZWxkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG4gICAgICovXG4gIGdldChmaWVsZCkge1xuICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAgICogUmVjb3JkIHRoZSBuZXcgZXJyb3JzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgICAqL1xuICByZWNvcmQoZXJyb3JzKSB7XG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gIH1cblxuICAvKipcbiAgICAgKiBDbGVhciBvbmUgb3IgYWxsIGVycm9yIGZpZWxkcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGZpZWxkXG4gICAgICovXG4gIGNsZWFyKGZpZWxkKSB7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NsYXNzZXMvRXJyb3JzLmpzIiwiaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4vUmVxdWVzdFwiO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVxdWVzdCB7XG4gIC8qKlxuICAgICAqIFJlc2V0IHRoZSBmb3JtIGZpZWxkcy5cbiAgICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgZm9yIChjb25zdCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgdGhpc1tmaWVsZF0gPSB0aGlzLm9yaWdpbmFsRGF0YVtmaWVsZF07XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgfVxuXG4gIGVtcHR5KCkge1xuICAgIGZvciAoY29uc3QgZmllbGQgaW4gdGhpcy5lbXB0eURhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gdGhpcy5lbXB0eURhdGFbZmllbGRdO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICAgKiBIYW5kbGUgYSBzdWNjZXNzZnVsIGZvcm0gc3VibWlzc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgaWYgKHRoaXMucmVzZXREYXRhKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICBkaWZmKCkge1xuICAgIHJldHVybiBfLnJlZHVjZShcbiAgICAgIHRoaXMuZGF0YSgpLFxuICAgICAgKHJlc3VsdCwgdmFsdWUsIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gXy5pc0VxdWFsKHZhbHVlLCB0aGlzLm9yaWdpbmFsRGF0YVtrZXldKVxuICAgICAgICAgID8gcmVzdWx0XG4gICAgICAgICAgOiByZXN1bHQuY29uY2F0KGtleSk7XG4gICAgICB9LFxuICAgICAgW11cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NsYXNzZXMvRm9ybS5qcyIsImltcG9ydCBFcnJvcnMgZnJvbSBcIi4vRXJyb3JzXCI7XG5cbmNsYXNzIFJlcXVlc3Qge1xuICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgRm9ybSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0LCBGb3JtRGF0YX0gZGF0YVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzZXRcbiAgICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YSwgcmVzZXQpIHtcbiAgICB0aGlzLnJlc2V0RGF0YSA9IHJlc2V0IHx8IGZhbHNlO1xuXG4gICAgaWYgKGRhdGEgJiYgIV8uaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHRoaXNbXCJ2YWx1ZVwiXSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW1wdHlEYXRhID0gZGF0YTtcbiAgICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBkYXRhKSB7XG4gICAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzKCk7XG4gIH1cblxuICAvKipcbiAgICAgKiBGZXRjaCBhbGwgcmVsZXZhbnQgZGF0YSBmb3IgdGhlIGZvcm0uXG4gICAgICovXG4gIGRhdGEoKSB7XG4gICAgaWYgKHRoaXMuZm9ybURhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1EYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcblxuICAgIGRlbGV0ZSBkYXRhLmVycm9ycztcbiAgICBkZWxldGUgZGF0YS5yZXNldERhdGE7XG4gICAgZGVsZXRlIGRhdGEuZW1wdHlEYXRhO1xuICAgIGRlbGV0ZSBkYXRhLm9yaWdpbmFsRGF0YTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2VuZCBhIEdFVCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IG11dGF0aW9uc1xuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNvbmZpZ1xuICAgICAqL1xuICBnZXQodXJsLCBtdXRhdGlvbnMsIGNvbmZpZykge1xuICAgIGZvciAoY29uc3QgdmFsdWUgaW4gY29uZmlnKSB7XG4gICAgICB0aGlzW3ZhbHVlXSA9IGNvbmZpZ1t2YWx1ZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFxuICAgICAgXCJnZXRcIixcbiAgICAgIHRoaXMuZGF0YVF1ZXJ5U3RyaW5nKCkgPyB1cmwgKyBcIj9cIiArIHRoaXMuZGF0YVF1ZXJ5U3RyaW5nKCkgOiB1cmwsXG4gICAgICBtdXRhdGlvbnNcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2VuZCBhIFBPU1QgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBtdXRhdGlvbnNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjb25maWdcbiAgICAgKi9cbiAgcG9zdCh1cmwsIG11dGF0aW9ucywgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicG9zdFwiLCB1cmwsIG11dGF0aW9ucywgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNlbmQgYSBQVVQgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBtdXRhdGlvbnNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjb25maWdcbiAgICAgKi9cbiAgcHV0KHVybCwgbXV0YXRpb25zLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwdXRcIiwgdXJsLCBtdXRhdGlvbnMsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICAgKiBTZW5kIGEgUEFUQ0ggcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBtdXRhdGlvbnNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjb25maWdcbiAgICAgKi9cbiAgcGF0Y2godXJsLCBtdXRhdGlvbnMsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInBhdGNoXCIsIHVybCwgbXV0YXRpb25zLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2VuZCBhIERFTEVURSByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IG11dGF0aW9uc1xuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNvbmZpZ1xuICAgICAqL1xuICBkZWxldGUodXJsLCBtdXRhdGlvbnMsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcImRlbGV0ZVwiLCB1cmwsIG11dGF0aW9ucywgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZm9ybS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0VHlwZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gbXV0YXRpb25zXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnXG4gICAgICovXG4gIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsLCBtdXRhdGlvbnMsIGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5mb3JtRGF0YSA/IHRoaXMuZm9ybURhdGEgOiB0aGlzLmRhdGEoKTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgW3JlcXVlc3RUeXBlXSh1cmwsIGRhdGEsIGNvbmZpZylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLm9uU3VjY2VzcygpO1xuXG4gICAgICAgICAgICBpZiAoXy5pc1N0cmluZyhtdXRhdGlvbnMpKSB7XG4gICAgICAgICAgICAgIG11dGF0aW9ucyA9IFttdXRhdGlvbnNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobXV0YXRpb25zICYmIG11dGF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgXy5lYWNoKG11dGF0aW9ucywgbXV0YXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGFwcC4kc3RvcmUuY29tbWl0KG11dGF0aW9uLCB7XG4gICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICAgIHJlcXVlc3REYXRhOiB0aGlzLmRhdGEoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlc2V0RGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0T3JpZ2luYWxEYXRhKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgICAgICAgYXBwLmhhbmRsZUFwaUVycm9yKGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMub25GYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIEhhbmRsZSBhIHN1Y2Nlc3NmdWwgZm9ybSBzdWJtaXNzaW9uLlxuICAgICAqL1xuICBvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIEhhbmRsZSBhIGZhaWxlZCBmb3JtIHN1Ym1pc3Npb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAgICovXG4gIG9uRmFpbChlcnJvcnMpIHtcbiAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgZGF0YSB0byB0aGUgb3JpZ2luYWwgZGF0YVxuICAgICAqL1xuICBzZXRPcmlnaW5hbERhdGEoKSB7XG4gICAgdGhpcy5vcmlnaW5hbERhdGEgPSB0aGlzLmRhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIHF1ZXJ5IHN0cmluZyBmb3IgdGhlIGRhdGEgZ2l2ZW5cbiAgICAgKi9cbiAgZGF0YVF1ZXJ5U3RyaW5nKCkge1xuICAgIGxldCBzdHIgPSBbXTtcbiAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YSgpO1xuICAgIGZvciAobGV0IGRhdHVtIGluIGRhdGEpXG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShkYXR1bSkpIHtcbiAgICAgICAgc3RyLnB1c2goXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGRhdHVtKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFbZGF0dW1dKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIHJldHVybiBzdHIuam9pbihcIiZcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY2xhc3Nlcy9SZXF1ZXN0LmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSBudWxsXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ODJlZDc1OVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BcHBTcGFjZS52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBcHBTcGFjZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTgyZWQ3NTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ODJlZDc1OVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcFNwYWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ2xpcGJvYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDdjOWE0ZDJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpcGJvYXJkLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DbGlwYm9hcmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDbGlwYm9hcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ3YzlhNGQyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDdjOWE0ZDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DbGlwYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DbGlwYm9hcmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTmF2aWdhdGlvbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTExOGZiNzg4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL05hdmlnYXRpb24udnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBOYXZpZ2F0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMThmYjc4OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTExOGZiNzg4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2aWdhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQ3NTJiZGZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBOb3RpZmljYXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ0NzUyYmRmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDQ3NTJiZGZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTm90aWZpY2F0aW9ucy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRkZGJmMTI0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL05vdGlmaWNhdGlvbnMudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBOb3RpZmljYXRpb25zLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00ZGRiZjEyNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRkZGJmMTI0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gbnVsbFxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTI2YjNjZGNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUGFnZU5vdEZvdW5kLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBQYWdlTm90Rm91bmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTkyNmIzY2RjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOTI2YjNjZGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGltZUFnby52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY4NjhkYzM4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1RpbWVBZ28udnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBUaW1lQWdvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ODY4ZGMzOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTY4NjhkYzM4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVGltZUFnby52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVG9vbFRpcC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTEyNjBjOTlmXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Rvb2xUaXAudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBUb29sVGlwLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xMjYwYzk5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTEyNjBjOTlmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9vbFRpcC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlZ1ZS5jb21wb25lbnQoXCJUaW1lQWdvXCIsIHJlcXVpcmUoXCIuL1RpbWVBZ28udnVlXCIpKTtcblZ1ZS5jb21wb25lbnQoXCJUb29sdGlwXCIsIHJlcXVpcmUoXCIuL1Rvb2xUaXAudnVlXCIpKTtcblZ1ZS5jb21wb25lbnQoXCJDbGlwYm9hcmRcIiwgcmVxdWlyZShcIi4vQ2xpcGJvYXJkLnZ1ZVwiKSk7XG5WdWUuY29tcG9uZW50KFwiTmF2aWdhdGlvblwiLCByZXF1aXJlKFwiLi9OYXZpZ2F0aW9uLnZ1ZVwiKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCIoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGxhcm91dGUgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciByb3V0ZXMgPSB7XG5cbiAgICAgICAgICAgIGFic29sdXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHJvb3RVcmw6ICdodHRwOi8vY29kZXBpZXIuZGV2JyxcbiAgICAgICAgICAgIHJvdXRlcyA6IFt7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvYXV0aG9yaXplXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXEF1dGhvcml6YXRpb25Db250cm9sbGVyQGF1dGhvcml6ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJvYXV0aFxcL2F1dGhvcml6ZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxBcHByb3ZlQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJAYXBwcm92ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvYXV0aG9yaXplXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXERlbnlBdXRob3JpemF0aW9uQ29udHJvbGxlckBkZW55XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvdG9rZW5cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQWNjZXNzVG9rZW5Db250cm9sbGVyQGlzc3VlVG9rZW5cIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJvYXV0aFxcL3Rva2Vuc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxBdXRob3JpemVkQWNjZXNzVG9rZW5Db250cm9sbGVyQGZvclVzZXJcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJvYXV0aFxcL3Rva2Vuc1xcL3t0b2tlbl9pZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQXV0aG9yaXplZEFjY2Vzc1Rva2VuQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvdG9rZW5cXC9yZWZyZXNoXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXFRyYW5zaWVudFRva2VuQ29udHJvbGxlckByZWZyZXNoXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwib2F1dGhcXC9jbGllbnRzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXENsaWVudENvbnRyb2xsZXJAZm9yVXNlclwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJvYXV0aFxcL2NsaWVudHNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQ2xpZW50Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvY2xpZW50c1xcL3tjbGllbnRfaWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXENsaWVudENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwib2F1dGhcXC9jbGllbnRzXFwve2NsaWVudF9pZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQ2xpZW50Q29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwib2F1dGhcXC9zY29wZXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcU2NvcGVDb250cm9sbGVyQGFsbFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvcGVyc29uYWwtYWNjZXNzLXRva2Vuc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxQZXJzb25hbEFjY2Vzc1Rva2VuQ29udHJvbGxlckBmb3JVc2VyXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvcGVyc29uYWwtYWNjZXNzLXRva2Vuc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxQZXJzb25hbEFjY2Vzc1Rva2VuQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvcGVyc29uYWwtYWNjZXNzLXRva2Vuc1xcL3t0b2tlbl9pZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcUGVyc29uYWxBY2Nlc3NUb2tlbkNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJicm9hZGNhc3RpbmdcXC9hdXRoXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiSWxsdW1pbmF0ZVxcQnJvYWRjYXN0aW5nXFxCcm9hZGNhc3RDb250cm9sbGVyQGF1dGhlbnRpY2F0ZVwifSx7XCJob3N0XCI6XCJwcm92aXNpb24uY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJcXC9cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXEN1c3RvbVNlcnZlclByb3Zpc2lvbmluZ0NvbnRyb2xsZXJAcHJvdmlzaW9uXCJ9LHtcImhvc3RcIjpcInByb3Zpc2lvbi5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJzdGFydFxcL3twcm92aXNpb25pbmdfa2V5fVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcQ3VzdG9tU2VydmVyUHJvdmlzaW9uaW5nQ29udHJvbGxlckBzdGFydFwifSx7XCJob3N0XCI6XCJwcm92aXNpb24uY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJrZXlzXFwve3Byb3Zpc2lvbmluZ19rZXl9XFwvcHVibGljXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxDdXN0b21TZXJ2ZXJQcm92aXNpb25pbmdDb250cm9sbGVyQHJldHVyblB1YmxpY0tleVwifSx7XCJob3N0XCI6XCJwcm92aXNpb24uY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJrZXlzXFwve3Byb3Zpc2lvbmluZ19rZXlcXC9wcml2YXRlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcQ3VzdG9tU2VydmVyUHJvdmlzaW9uaW5nQ29udHJvbGxlckByZXR1cm5Qcml2YXRlS2V5XCJ9LHtcImhvc3RcIjpcInByb3Zpc2lvbi5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImVuZFxcL3twcm92aXNpb25pbmdfa2V5fVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcQ3VzdG9tU2VydmVyUHJvdmlzaW9uaW5nQ29udHJvbGxlckBlbmRcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC8yZmFcIixcIm5hbWVcIjpcIjJmYS5pbmRleFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC8yZmFcIixcIm5hbWVcIjpcIjJmYS5zdG9yZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcLzJmYVxcL3tmYX1cIixcIm5hbWVcIjpcIjJmYS5zaG93XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFNlY29uZEF1dGhDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvMmZhXFwve2ZhfVwiLFwibmFtZVwiOlwiMmZhLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC8yZmFcXC97ZmF9XCIsXCJuYW1lXCI6XCIyZmEuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbWVcIixcIm5hbWVcIjpcIm1lLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvdXNlclwiLFwibmFtZVwiOlwidXNlci5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC91c2VyXCIsXCJuYW1lXCI6XCJ1c2VyLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvdXNlclxcL3t1c2VyfVwiLFwibmFtZVwiOlwidXNlci5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvdXNlclxcL3t1c2VyfVwiLFwibmFtZVwiOlwidXNlci51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcVXNlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvdXNlclxcL3t1c2VyfVwiLFwibmFtZVwiOlwidXNlci5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL2ludm9pY2VzXCIsXCJuYW1lXCI6XCJpbnZvaWNlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25JbnZvaWNlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL2ludm9pY2VzXCIsXCJuYW1lXCI6XCJpbnZvaWNlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25JbnZvaWNlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXFwvaW52b2ljZXNcXC97aW52b2ljZX1cIixcIm5hbWVcIjpcImludm9pY2VzLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uSW52b2ljZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL2ludm9pY2VzXFwve2ludm9pY2V9XCIsXCJuYW1lXCI6XCJpbnZvaWNlcy51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uSW52b2ljZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cXC9pbnZvaWNlc1xcL3tpbnZvaWNlfVwiLFwibmFtZVwiOlwiaW52b2ljZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25JbnZvaWNlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25Db250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24uc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXFwve3N1YnNjcmlwdGlvbn1cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL3tzdWJzY3JpcHRpb259XCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24udXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cXC97c3Vic2NyaXB0aW9ufVwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb24tY2FyZFwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLWNhcmQuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ2FyZENvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb24tY2FyZFwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLWNhcmQuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ2FyZENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvbi1jYXJkXFwve3N1YnNjcmlwdGlvbl9jYXJkfVwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLWNhcmQuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25DYXJkQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uLWNhcmRcXC97c3Vic2NyaXB0aW9uX2NhcmR9XCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24tY2FyZC51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ2FyZENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb24tY2FyZFxcL3tzdWJzY3JpcHRpb25fY2FyZH1cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi1jYXJkLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ2FyZENvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cIixcIm5hbWVcIjpcInRlYW0uaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cIixcIm5hbWVcIjpcInRlYW0uc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3t0ZWFtfVwiLFwibmFtZVwiOlwidGVhbS5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC97dGVhbX1cIixcIm5hbWVcIjpcInRlYW0udXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwve3RlYW19XCIsXCJuYW1lXCI6XCJ0ZWFtLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwvdGVhbVxcL3t0ZWFtfVxcL21lbWJlcnNcIixcIm5hbWVcIjpcInRlYW0ubWVtYmVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbU1lbWJlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3RlYW1cXC97dGVhbX1cXC9tZW1iZXJzXCIsXCJuYW1lXCI6XCJ0ZWFtLm1lbWJlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1NZW1iZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3RlYW1cXC97dGVhbX1cXC9tZW1iZXJzXFwve21lbWJlcn1cIixcIm5hbWVcIjpcInRlYW0ubWVtYmVycy5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC90ZWFtXFwve3RlYW19XFwvbWVtYmVyc1xcL3ttZW1iZXJ9XCIsXCJuYW1lXCI6XCJ0ZWFtLm1lbWJlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwvdGVhbVxcL3t0ZWFtfVxcL21lbWJlcnNcXC97bWVtYmVyfVwiLFwibmFtZVwiOlwidGVhbS5tZW1iZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1NZW1iZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3N3aXRjaFxcL3tpZD99XCIsXCJuYW1lXCI6XCJ0ZWFtcy5zd2l0Y2hcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQHN3aXRjaFRlYW1cIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL21lbWJlcnNcIixcIm5hbWVcIjpcInRlYW1zLm1lbWJlcnMuaW52aXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckBpbnZpdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL21lbWJlcnNcXC9yZXNlbmRcXC97aW52aXRlX2lkfVwiLFwibmFtZVwiOlwidGVhbXMubWVtYmVycy5yZXNlbmRfaW52aXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckByZXNlbmRJbnZpdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9jYXRlZ29yaWVzXCIsXCJuYW1lXCI6XCJjYXRlZ29yaWVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkNhdGVnb3JpZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2NhdGVnb3JpZXNcIixcIm5hbWVcIjpcImNhdGVnb3JpZXMuc3RvcmVcIixcImFjdGlvblwiOlwiQ2F0ZWdvcmllc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9jYXRlZ29yaWVzXFwve2NhdGVnb3J5fVwiLFwibmFtZVwiOlwiY2F0ZWdvcmllcy5zaG93XCIsXCJhY3Rpb25cIjpcIkNhdGVnb3JpZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvY2F0ZWdvcmllc1xcL3tjYXRlZ29yeX1cIixcIm5hbWVcIjpcImNhdGVnb3JpZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkNhdGVnb3JpZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL2NhdGVnb3JpZXNcXC97Y2F0ZWdvcnl9XCIsXCJuYW1lXCI6XCJjYXRlZ29yaWVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiQ2F0ZWdvcmllc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1xcL2J1b3lDbGFzc2VzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQnVveUFwcENvbnRyb2xsZXJAZ2V0QnVveUNsYXNzZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYnVveS1hcHBzXFwve2J1b3lfYXBwfVxcL3VwZGF0ZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1wiLFwibmFtZVwiOlwiYnVveS1hcHBzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1wiLFwibmFtZVwiOlwiYnVveS1hcHBzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYnVveS1hcHBzXFwve2J1b3lfYXBwfVwiLFwibmFtZVwiOlwiYnVveS1hcHBzLnNob3dcIixcImFjdGlvblwiOlwiQnVveUFwcENvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9idW95LWFwcHNcXC97YnVveV9hcHB9XCIsXCJuYW1lXCI6XCJidW95LWFwcHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1xcL3tidW95X2FwcH1cIixcIm5hbWVcIjpcImJ1b3ktYXBwcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0c1wiLFwibmFtZVwiOlwiYml0dHMuaW5kZXhcIixcImFjdGlvblwiOlwiQml0dHNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2JpdHRzXCIsXCJuYW1lXCI6XCJiaXR0cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJCaXR0c0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0c1xcL3tiaXR0fVwiLFwibmFtZVwiOlwiYml0dHMuc2hvd1wiLFwiYWN0aW9uXCI6XCJCaXR0c0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0c1xcL3tiaXR0fVwiLFwibmFtZVwiOlwiYml0dHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkJpdHRzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0c1xcL3tiaXR0fVwiLFwibmFtZVwiOlwiYml0dHMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJCaXR0c0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0XFwve2JpdHR9XFwvcnVuXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQml0dHNDb250cm9sbGVyQHJ1bk9uU2VydmVyc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3N5c3RlbXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTeXN0ZW1zQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcnVubmluZy1jb21tYW5kc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQGdldFJ1bm5pbmdDb21tYW5kc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcnVubmluZy1kZXBsb3ltZW50c1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQGdldFJ1bm5pbmdEZXBsb3ltZW50c1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3NoLWtleXNcIixcIm5hbWVcIjpcInNzaC1rZXlzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJTc2hLZXlDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3NoLWtleXNcIixcIm5hbWVcIjpcInNzaC1rZXlzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJTc2hLZXlDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic3NoLWtleXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyU3NoS2V5Q29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNzaC1rZXlzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyU3NoS2V5Q29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzc2gta2V5cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJTc2hLZXlDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlci1wcm92aWRlcnNcIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyU2VydmVyUHJvdmlkZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJTZXJ2ZXJQcm92aWRlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlci1wcm92aWRlcnNcXC97c2VydmVyX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclNlcnZlclByb3ZpZGVyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyLXByb3ZpZGVyc1xcL3tzZXJ2ZXJfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJTZXJ2ZXJQcm92aWRlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXItcHJvdmlkZXJzXFwve3NlcnZlcl9wcm92aWRlcn1cIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJTZXJ2ZXJQcm92aWRlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3MuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcVXNlck5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcVXNlck5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclJlcG9zaXRvcnlQcm92aWRlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1wiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyUmVwb3NpdG9yeVByb3ZpZGVyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcXC97cmVwb3NpdG9yeV9wcm92aWRlcn1cIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyUmVwb3NpdG9yeVByb3ZpZGVyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcXC97cmVwb3NpdG9yeV9wcm92aWRlcn1cIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJSZXBvc2l0b3J5UHJvdmlkZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcXC97cmVwb3NpdG9yeV9wcm92aWRlcn1cIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyUmVwb3NpdG9yeVByb3ZpZGVyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlck5vdGlmaWNhdGlvblByb3ZpZGVyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyTm90aWZpY2F0aW9uUHJvdmlkZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXFwve25vdGlmaWNhdGlvbl9wcm92aWRlcn1cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJOb3RpZmljYXRpb25Qcm92aWRlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcXC97bm90aWZpY2F0aW9uX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyTm90aWZpY2F0aW9uUHJvdmlkZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1xcL3tub3RpZmljYXRpb25fcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyTm90aWZpY2F0aW9uUHJvdmlkZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2V2ZW50c1wiLFwibmFtZVwiOlwiZXZlbnRzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkV2ZW50Q29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2V2ZW50c1wiLFwibmFtZVwiOlwiZXZlbnRzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIkV2ZW50Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvZXZlbnRzXFwve2V2ZW50fVwiLFwibmFtZVwiOlwiZXZlbnRzLnNob3dcIixcImFjdGlvblwiOlwiRXZlbnRDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ldmVudHNcXC97ZXZlbnR9XCIsXCJuYW1lXCI6XCJldmVudHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkV2ZW50Q29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2V2ZW50c1xcL3tldmVudH1cIixcIm5hbWVcIjpcImV2ZW50cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIkV2ZW50Q29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlc1xcL2FsbFwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVDb250cm9sbGVyQGFsbFBpbGVzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlc1wiLFwibmFtZVwiOlwicGlsZXMuaW5kZXhcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlc1wiLFwibmFtZVwiOlwicGlsZXMuc3RvcmVcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVzXFwve3BpbGV9XCIsXCJuYW1lXCI6XCJwaWxlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlc1xcL3twaWxlfVwiLFwibmFtZVwiOlwicGlsZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZXNcXC97cGlsZX1cIixcIm5hbWVcIjpcInBpbGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZVxcL3twaWxlfVxcL3NpdGVzXCIsXCJuYW1lXCI6XCJwaWxlLnNpdGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVTaXRlc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlXFwve3BpbGV9XFwvc2l0ZXNcIixcIm5hbWVcIjpcInBpbGUuc2l0ZXMuc3RvcmVcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZVNpdGVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZVxcL3twaWxlfVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJwaWxlLnNpdGVzLnNob3dcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZVNpdGVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZVxcL3twaWxlfVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJwaWxlLnNpdGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlU2l0ZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZVxcL3twaWxlfVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJwaWxlLnNpdGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZVNpdGVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvY2hhbmdlLXBpbGVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlQ29udHJvbGxlckBjaGFuZ2VQaWxlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcIixcIm5hbWVcIjpcInNlcnZlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVwiLFwibmFtZVwiOlwic2VydmVycy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL2ZpbmQtZmlsZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAZmluZFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XFwvcmVsb2FkLWZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpbGVDb250cm9sbGVyQHJlbG9hZEZpbGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL2N1c3RvbVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckBnZW5lcmF0ZUN1c3RvbVNlcnZlclNoXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9hbGxfc2VydmVyc1xcL2J1b3lzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJCdW95Q29udHJvbGxlckBteVNlcnZlckJ1b3lzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwve3NlcnZlcn1cXC9maWxlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQGdldEZpbGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9yZXN0b3JlXFwve3NlcnZlcn1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAcmVzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XFwvZmlsZVxcL3NhdmVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAc2F2ZUZpbGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9kaXNrLXNwYWNlXFwve3NlcnZlcn1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAZ2V0RGlza1NwYWNlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwvcmVzdGFydC1zZXJ2ZXJcXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckByZXN0YXJ0U2VydmVyXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwvcmVzdGFydC1kYXRhYmFzZVxcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHJlc3RhcnREYXRhYmFzZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9yZXN0YXJ0LXdvcmtlcnNcXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckByZXN0YXJ0V29ya2VyU2VydmljZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9zc2gtY29ubmVjdGlvblxcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2hLZXlDb250cm9sbGVyQHRlc3RTU0hDb25uZWN0aW9uXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwvcmVzdGFydC13ZWItc2VydmljZXNcXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckByZXN0YXJ0V2ViU2VydmljZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpbGVcIixcIm5hbWVcIjpcInNlcnZlcnMuZmlsZS5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpbGVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlsZVwiLFwibmFtZVwiOlwic2VydmVycy5maWxlLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmlsZS5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmlsZS51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaWxlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmlsZS5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvYnVveXNcIixcIm5hbWVcIjpcInNlcnZlcnMuYnVveXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJCdW95Q29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2J1b3lzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmJ1b3lzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQnVveUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2J1b3lzXFwve2J1b3l9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmJ1b3lzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJCdW95Q29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvYnVveXNcXC97YnVveX1cIixcIm5hbWVcIjpcInNlcnZlcnMuYnVveXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQnVveUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9idW95c1xcL3tidW95fVwiLFwibmFtZVwiOlwic2VydmVycy5idW95cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQnVveUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2l0ZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuc2l0ZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTaXRlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NpdGVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNpdGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2l0ZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNpdGVzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTaXRlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2l0ZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2l0ZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwic2VydmVycy5zaXRlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2l0ZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvd29ya2Vyc1wiLFwibmFtZVwiOlwic2VydmVycy53b3JrZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyV29ya2VyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3dvcmtlcnNcIixcIm5hbWVcIjpcInNlcnZlcnMud29ya2Vycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlcldvcmtlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3dvcmtlcnNcXC97d29ya2VyfVwiLFwibmFtZVwiOlwic2VydmVycy53b3JrZXJzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJXb3JrZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC93b3JrZXJzXFwve3dvcmtlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMud29ya2Vycy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJXb3JrZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvd29ya2Vyc1xcL3t3b3JrZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLndvcmtlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlcldvcmtlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hc1wiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWFzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYXNcIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYXNcXC97c2NoZW1hfVwiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWFzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWFzXFwve3NjaGVtYX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hc1xcL3tzY2hlbWF9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZGFlbW9uc1wiLFwibmFtZVwiOlwic2VydmVycy5kYWVtb25zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRGFlbW9uc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9kYWVtb25zXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmRhZW1vbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJEYWVtb25zQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZGFlbW9uc1xcL3tkYWVtb259XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmRhZW1vbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckRhZW1vbnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9kYWVtb25zXFwve2RhZW1vbn1cIixcIm5hbWVcIjpcInNlcnZlcnMuZGFlbW9ucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJEYWVtb25zQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2RhZW1vbnNcXC97ZGFlbW9ufVwiLFwibmFtZVwiOlwic2VydmVycy5kYWVtb25zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJEYWVtb25zQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2gta2V5c1wiLFwibmFtZVwiOlwic2VydmVycy5zc2gta2V5cy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzaEtleUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2gta2V5c1wiLFwibmFtZVwiOlwic2VydmVycy5zc2gta2V5cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzaEtleUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzaC1rZXlzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2hLZXlDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic2VydmVycy5zc2gta2V5cy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2hLZXlDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc3NoLWtleXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzaEtleUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmVhdHVyZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuZmVhdHVyZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZlYXR1cmVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZlYXR1cmVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZlYXR1cmVzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmVhdHVyZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9mZWF0dXJlc1xcL3tmZWF0dXJlfVwiLFwibmFtZVwiOlwic2VydmVycy5mZWF0dXJlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvY3Jvbi1qb2JzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmNyb24tam9icy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNyb25Kb2JDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvY3Jvbi1qb2JzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmNyb24tam9icy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNyb25Kb2JDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9jcm9uLWpvYnNcXC97Y3Jvbl9qb2J9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmNyb24tam9icy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ3JvbkpvYkNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Nyb24tam9ic1xcL3tjcm9uX2pvYn1cIixcIm5hbWVcIjpcInNlcnZlcnMuY3Jvbi1qb2JzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNyb25Kb2JDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvY3Jvbi1qb2JzXFwve2Nyb25fam9ifVwiLFwibmFtZVwiOlwic2VydmVycy5jcm9uLWpvYnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNyb25Kb2JDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzbC1jZXJ0aWZpY2F0ZVwiLFwibmFtZVwiOlwic2VydmVycy5zc2wtY2VydGlmaWNhdGUuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2xDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NsLWNlcnRpZmljYXRlXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzbC1jZXJ0aWZpY2F0ZS5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzbENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzbC1jZXJ0aWZpY2F0ZVxcL3tzc2xfY2VydGlmaWNhdGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzbC1jZXJ0aWZpY2F0ZS5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NsQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NsLWNlcnRpZmljYXRlXFwve3NzbF9jZXJ0aWZpY2F0ZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc3NsLWNlcnRpZmljYXRlLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzbENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2wtY2VydGlmaWNhdGVcXC97c3NsX2NlcnRpZmljYXRlfVwiLFwibmFtZVwiOlwic2VydmVycy5zc2wtY2VydGlmaWNhdGUuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzbENvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hLXVzZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYS11c2Vycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYVVzZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hLXVzZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYS11c2Vycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYVVzZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWEtdXNlcnNcXC97c2NoZW1hX3VzZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYS11c2Vycy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hVXNlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYS11c2Vyc1xcL3tzY2hlbWFfdXNlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hLXVzZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYVVzZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hLXVzZXJzXFwve3NjaGVtYV91c2VyfVwiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWEtdXNlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYVVzZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpcmV3YWxsLXJ1bGVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpcmV3YWxsLXJ1bGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlyZXdhbGxSdWxlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpcmV3YWxsLXJ1bGVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpcmV3YWxsLXJ1bGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlyZXdhbGxSdWxlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlyZXdhbGwtcnVsZXNcXC97ZmlyZXdhbGxfcnVsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmlyZXdhbGwtcnVsZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpcmV3YWxsLXJ1bGVzXFwve2ZpcmV3YWxsX3J1bGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpcmV3YWxsLXJ1bGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maXJld2FsbC1ydWxlc1xcL3tmaXJld2FsbF9ydWxlfVwiLFwibmFtZVwiOlwic2VydmVycy5maXJld2FsbC1ydWxlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlyZXdhbGxSdWxlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9wcm92aXNpb24tc3RlcHNcIixcIm5hbWVcIjpcInNlcnZlcnMucHJvdmlzaW9uLXN0ZXBzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyUHJvdmlzaW9uU3RlcHNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvcHJvdmlzaW9uLXN0ZXBzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnByb3Zpc2lvbi1zdGVwcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclByb3Zpc2lvblN0ZXBzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvcHJvdmlzaW9uLXN0ZXBzXFwve3Byb3Zpc2lvbl9zdGVwfVwiLFwibmFtZVwiOlwic2VydmVycy5wcm92aXNpb24tc3RlcHMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclByb3Zpc2lvblN0ZXBzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvcHJvdmlzaW9uLXN0ZXBzXFwve3Byb3Zpc2lvbl9zdGVwfVwiLFwibmFtZVwiOlwic2VydmVycy5wcm92aXNpb24tc3RlcHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyUHJvdmlzaW9uU3RlcHNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvcHJvdmlzaW9uLXN0ZXBzXFwve3Byb3Zpc2lvbl9zdGVwfVwiLFwibmFtZVwiOlwic2VydmVycy5wcm92aXNpb24tc3RlcHMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclByb3Zpc2lvblN0ZXBzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9sYW5ndWFnZS1zZXR0aW5nc1wiLFwibmFtZVwiOlwic2VydmVycy5sYW5ndWFnZS1zZXR0aW5ncy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcIixcIm5hbWVcIjpcInNlcnZlcnMubGFuZ3VhZ2Utc2V0dGluZ3Muc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcXC97bGFuZ3VhZ2Vfc2V0dGluZ31cIixcIm5hbWVcIjpcInNlcnZlcnMubGFuZ3VhZ2Utc2V0dGluZ3Muc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9sYW5ndWFnZS1zZXR0aW5nc1xcL3tsYW5ndWFnZV9zZXR0aW5nfVwiLFwibmFtZVwiOlwic2VydmVycy5sYW5ndWFnZS1zZXR0aW5ncy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2xhbmd1YWdlLXNldHRpbmdzXFwve2xhbmd1YWdlX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmxhbmd1YWdlLXNldHRpbmdzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuZW52aXJvbm1lbnQtdmFyaWFibGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmVudmlyb25tZW50LXZhcmlhYmxlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXFwve2Vudmlyb25tZW50X3ZhcmlhYmxlfVwiLFwibmFtZVwiOlwic2VydmVycy5lbnZpcm9ubWVudC12YXJpYWJsZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXFwve2Vudmlyb25tZW50X3ZhcmlhYmxlfVwiLFwibmFtZVwiOlwic2VydmVycy5lbnZpcm9ubWVudC12YXJpYWJsZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXFwve2Vudmlyb25tZW50X3ZhcmlhYmxlfVwiLFwibmFtZVwiOlwic2VydmVycy5lbnZpcm9ubWVudC12YXJpYWJsZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL2xhbmd1YWdlLXNldHRpbmdzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBnZXRMYW5ndWFnZVNldHRpbmdzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1wiLFwibmFtZVwiOlwic2l0ZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1wiLFwibmFtZVwiOlwic2l0ZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwic2l0ZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInNpdGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9yZW5hbWVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZW5hbWVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvZmluZC1maWxlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQGZpbmRcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvd29ya2Zsb3dcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlV29ya2Zsb3dDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL3JlZnJlc2gtc3NoLWtleXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZWZyZXNoUHVibGljS2V5XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL3JlZnJlc2gtZGVwbG95LWtleVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHJlZnJlc2hEZXBsb3lLZXlcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9jbGVhci1jb21tYW5kc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJDb21tYW5kc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9yZWxvYWQtZmlsZVxcL3tmaWxlfVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQHJlbG9hZEZpbGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9kZXBsb3lcXC97c2l0ZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckBkZXBsb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yb2xsYmFja1xcL3tzaXRlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHJvbGxiYWNrXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvZGVwbG95bWVudC1zdGVwc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50U3RlcHNDb250cm9sbGVyQGdldERlcGxveW1lbnRTdGVwc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3Jlc3RhcnQtc2VydmVyXFwve3NpdGV9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAcmVzdGFydFNlcnZlclwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3Jlc3RhcnQtZGF0YWJhc2VcXC97c2l0ZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZXN0YXJ0RGF0YWJhc2VzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVzdGFydC13b3JrZXJzXFwve3NpdGV9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAcmVzdGFydFdvcmtlclNlcnZpY2VzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVzdGFydC13ZWItc2VydmljZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZXN0YXJ0V2ViU2VydmljZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZG5zXCIsXCJuYW1lXCI6XCJzaXRlcy5kbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURuc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Ruc1wiLFwibmFtZVwiOlwic2l0ZXMuZG5zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEbnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Ruc1xcL3tkbn1cIixcIm5hbWVcIjpcInNpdGVzLmRucy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEbnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Ruc1xcL3tkbn1cIixcIm5hbWVcIjpcInNpdGVzLmRucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURuc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Ruc1xcL3tkbn1cIixcIm5hbWVcIjpcInNpdGVzLmRucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEbnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlsZVwiLFwibmFtZVwiOlwic2l0ZXMuZmlsZS5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlsZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpbGVcIixcIm5hbWVcIjpcInNpdGVzLmZpbGUuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpcInNpdGVzLmZpbGUuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlsZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlsZVxcL3tmaWxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZmlsZS51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maWxlXFwve2ZpbGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5maWxlLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvYnVveXNcIixcIm5hbWVcIjpcInNpdGVzLmJ1b3lzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVCdW95Q29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvYnVveXNcIixcIm5hbWVcIjpcInNpdGVzLmJ1b3lzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVCdW95Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9idW95c1xcL3tidW95fVwiLFwibmFtZVwiOlwic2l0ZXMuYnVveXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQnVveUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvYnVveXNcXC97YnVveX1cIixcIm5hbWVcIjpcInNpdGVzLmJ1b3lzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQnVveUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2J1b3lzXFwve2J1b3l9XCIsXCJuYW1lXCI6XCJzaXRlcy5idW95cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVCdW95Q29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlcnNcIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlcnNcIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXJzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC93b3JrZXJzXCIsXCJuYW1lXCI6XCJzaXRlcy53b3JrZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVXb3JrZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC93b3JrZXJzXCIsXCJuYW1lXCI6XCJzaXRlcy53b3JrZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVXb3JrZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3dvcmtlcnNcXC97d29ya2VyfVwiLFwibmFtZVwiOlwic2l0ZXMud29ya2Vycy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVXb3JrZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3dvcmtlcnNcXC97d29ya2VyfVwiLFwibmFtZVwiOlwic2l0ZXMud29ya2Vycy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVdvcmtlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3dvcmtlcnNcXC97d29ya2VyfVwiLFwibmFtZVwiOlwic2l0ZXMud29ya2Vycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVXb3JrZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hc1wiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hc1wiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWFzXFwve3NjaGVtYX1cIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWFzXFwve3NjaGVtYX1cIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWFzXFwve3NjaGVtYX1cIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RhZW1vbnNcIixcIm5hbWVcIjpcInNpdGVzLmRhZW1vbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURhZW1vbnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kYWVtb25zXCIsXCJuYW1lXCI6XCJzaXRlcy5kYWVtb25zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEYWVtb25zQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kYWVtb25zXFwve2RhZW1vbn1cIixcIm5hbWVcIjpcInNpdGVzLmRhZW1vbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGFlbW9uc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGFlbW9uc1xcL3tkYWVtb259XCIsXCJuYW1lXCI6XCJzaXRlcy5kYWVtb25zLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGFlbW9uc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RhZW1vbnNcXC97ZGFlbW9ufVwiLFwibmFtZVwiOlwic2l0ZXMuZGFlbW9ucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEYWVtb25zQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzaC1rZXlzXCIsXCJuYW1lXCI6XCJzaXRlcy5zc2gta2V5cy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NoS2V5Q29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NoLWtleXNcIixcIm5hbWVcIjpcInNpdGVzLnNzaC1rZXlzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2hLZXlDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzaXRlcy5zc2gta2V5cy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2hLZXlDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzaXRlcy5zc2gta2V5cy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzaEtleUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzaXRlcy5zc2gta2V5cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2hLZXlDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvY3Jvbi1qb2JzXCIsXCJuYW1lXCI6XCJzaXRlcy5jcm9uLWpvYnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNyb25Kb2JDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9jcm9uLWpvYnNcIixcIm5hbWVcIjpcInNpdGVzLmNyb24tam9icy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ3JvbkpvYkNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvY3Jvbi1qb2JzXFwve2Nyb25fam9ifVwiLFwibmFtZVwiOlwic2l0ZXMuY3Jvbi1qb2JzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNyb25Kb2JDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Nyb24tam9ic1xcL3tjcm9uX2pvYn1cIixcIm5hbWVcIjpcInNpdGVzLmNyb24tam9icy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNyb25Kb2JDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9jcm9uLWpvYnNcXC97Y3Jvbl9qb2J9XCIsXCJuYW1lXCI6XCJzaXRlcy5jcm9uLWpvYnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ3JvbkpvYkNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2wtY2VydGlmaWNhdGVcIixcIm5hbWVcIjpcInNpdGVzLnNzbC1jZXJ0aWZpY2F0ZS5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NsQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NsLWNlcnRpZmljYXRlXCIsXCJuYW1lXCI6XCJzaXRlcy5zc2wtY2VydGlmaWNhdGUuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzbENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NsLWNlcnRpZmljYXRlXFwve3NzbF9jZXJ0aWZpY2F0ZX1cIixcIm5hbWVcIjpcInNpdGVzLnNzbC1jZXJ0aWZpY2F0ZS5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2xDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzbC1jZXJ0aWZpY2F0ZVxcL3tzc2xfY2VydGlmaWNhdGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5zc2wtY2VydGlmaWNhdGUudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2xDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2wtY2VydGlmaWNhdGVcXC97c3NsX2NlcnRpZmljYXRlfVwiLFwibmFtZVwiOlwic2l0ZXMuc3NsLWNlcnRpZmljYXRlLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzbENvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9saWZlLWxpbmVzXCIsXCJuYW1lXCI6XCJzaXRlcy5saWZlLWxpbmVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMaWZlbGluZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9saWZlLWxpbmVzXCIsXCJuYW1lXCI6XCJzaXRlcy5saWZlLWxpbmVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMaWZlbGluZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xpZmUtbGluZXNcXC97bGlmZV9saW5lfVwiLFwibmFtZVwiOlwic2l0ZXMubGlmZS1saW5lcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMaWZlbGluZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xpZmUtbGluZXNcXC97bGlmZV9saW5lfVwiLFwibmFtZVwiOlwic2l0ZXMubGlmZS1saW5lcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxpZmVsaW5lc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xpZmUtbGluZXNcXC97bGlmZV9saW5lfVwiLFwibmFtZVwiOlwic2l0ZXMubGlmZS1saW5lcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMaWZlbGluZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudHNcIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnRzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50c0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnRzXCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudHNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnRzXFwve2RlcGxveW1lbnR9XCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50cy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50c0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudHNcXC97ZGVwbG95bWVudH1cIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnRzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudHNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50c1xcL3tkZXBsb3ltZW50fVwiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudHMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudHNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hLXVzZXJzXCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWEtdXNlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYVVzZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWEtdXNlcnNcIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYS11c2Vycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hVXNlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hLXVzZXJzXFwve3NjaGVtYV91c2VyfVwiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hLXVzZXJzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYVVzZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYS11c2Vyc1xcL3tzY2hlbWFfdXNlcn1cIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYS11c2Vycy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYVVzZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWEtdXNlcnNcXC97c2NoZW1hX3VzZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWEtdXNlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hVXNlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9ob29rc1wiLFwibmFtZVwiOlwic2l0ZXMuaG9va3MuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcUmVwb3NpdG9yeVxcUmVwb3NpdG9yeUhvb2tDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9ob29rc1wiLFwibmFtZVwiOlwic2l0ZXMuaG9va3Muc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcUmVwb3NpdG9yeVxcUmVwb3NpdG9yeUhvb2tDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2hvb2tzXFwve2hvb2t9XCIsXCJuYW1lXCI6XCJzaXRlcy5ob29rcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFJlcG9zaXRvcnlcXFJlcG9zaXRvcnlIb29rQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9ob29rc1xcL3tob29rfVwiLFwibmFtZVwiOlwic2l0ZXMuaG9va3MudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFJlcG9zaXRvcnlcXFJlcG9zaXRvcnlIb29rQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvaG9va3NcXC97aG9va31cIixcIm5hbWVcIjpcInNpdGVzLmhvb2tzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcUmVwb3NpdG9yeVxcUmVwb3NpdG9yeUhvb2tDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlyZXdhbGwtcnVsZXNcIixcIm5hbWVcIjpcInNpdGVzLmZpcmV3YWxsLXJ1bGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaXJld2FsbFJ1bGVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maXJld2FsbC1ydWxlc1wiLFwibmFtZVwiOlwic2l0ZXMuZmlyZXdhbGwtcnVsZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlyZXdhbGwtcnVsZXNcXC97ZmlyZXdhbGxfcnVsZX1cIixcIm5hbWVcIjpcInNpdGVzLmZpcmV3YWxsLXJ1bGVzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlyZXdhbGwtcnVsZXNcXC97ZmlyZXdhbGxfcnVsZX1cIixcIm5hbWVcIjpcInNpdGVzLmZpcmV3YWxsLXJ1bGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlyZXdhbGxSdWxlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlyZXdhbGwtcnVsZXNcXC97ZmlyZXdhbGxfcnVsZX1cIixcIm5hbWVcIjpcInNpdGVzLmZpcmV3YWxsLXJ1bGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXItZmVhdHVyZXNcIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlci1mZWF0dXJlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXItZmVhdHVyZXNcIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlci1mZWF0dXJlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlci1mZWF0dXJlc1xcL3tzZXJ2ZXJfdHlwZX1cIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlci1mZWF0dXJlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyLWZlYXR1cmVzXFwve3NlcnZlcl90eXBlfVwiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVyLWZlYXR1cmVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXItZmVhdHVyZXNcXC97c2VydmVyX3R5cGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXItZmVhdHVyZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudC1zdGVwc1wiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudC1zdGVwcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudFN0ZXBzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudC1zdGVwc1wiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudC1zdGVwcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudFN0ZXBzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50LXN0ZXBzXFwve2RlcGxveW1lbnRfc3RlcH1cIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnQtc3RlcHMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudFN0ZXBzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50LXN0ZXBzXFwve2RlcGxveW1lbnRfc3RlcH1cIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnQtc3RlcHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50U3RlcHNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50LXN0ZXBzXFwve2RlcGxveW1lbnRfc3RlcH1cIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnQtc3RlcHMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudFN0ZXBzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xhbmd1YWdlLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJzaXRlcy5sYW5ndWFnZS1zZXR0aW5ncy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xhbmd1YWdlLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJzaXRlcy5sYW5ndWFnZS1zZXR0aW5ncy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcXC97bGFuZ3VhZ2Vfc2V0dGluZ31cIixcIm5hbWVcIjpcInNpdGVzLmxhbmd1YWdlLXNldHRpbmdzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xhbmd1YWdlLXNldHRpbmdzXFwve2xhbmd1YWdlX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJzaXRlcy5sYW5ndWFnZS1zZXR0aW5ncy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9sYW5ndWFnZS1zZXR0aW5nc1xcL3tsYW5ndWFnZV9zZXR0aW5nfVwiLFwibmFtZVwiOlwic2l0ZXMubGFuZ3VhZ2Utc2V0dGluZ3MuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcIixcIm5hbWVcIjpcInNpdGVzLmVudmlyb25tZW50LXZhcmlhYmxlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcIixcIm5hbWVcIjpcInNpdGVzLmVudmlyb25tZW50LXZhcmlhYmxlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1xcL3tlbnZpcm9ubWVudF92YXJpYWJsZX1cIixcIm5hbWVcIjpcInNpdGVzLmVudmlyb25tZW50LXZhcmlhYmxlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXFwve2Vudmlyb25tZW50X3ZhcmlhYmxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZW52aXJvbm1lbnQtdmFyaWFibGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcXC97ZW52aXJvbm1lbnRfdmFyaWFibGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5lbnZpcm9ubWVudC12YXJpYWJsZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9sYW5ndWFnZS1zZXR0aW5nc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBnZXRMYW5ndWFnZVNldHRpbmdzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3MuaW5kZXhcIixcImFjdGlvblwiOlwiTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIk5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5zaG93XCIsXCJhY3Rpb25cIjpcIk5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy51cGRhdGVcIixcImFjdGlvblwiOlwiTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1xcL3tub3RpZmljYXRpb25fc2V0dGluZ31cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIk5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvdHlwZXNcIixcIm5hbWVcIjpcInR5cGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyVHlwZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3R5cGVzXCIsXCJuYW1lXCI6XCJ0eXBlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclR5cGVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3R5cGVzXFwve3R5cGV9XCIsXCJuYW1lXCI6XCJ0eXBlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyVHlwZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvdHlwZXNcXC97dHlwZX1cIixcIm5hbWVcIjpcInR5cGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclR5cGVzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC90eXBlc1xcL3t0eXBlfVwiLFwibmFtZVwiOlwidHlwZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclR5cGVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvZmVhdHVyZXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZlYXR1cmVDb250cm9sbGVyQGdldEZlYXR1cmVzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvbGFuZ3VhZ2VzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBnZXRMYW5ndWFnZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9mcmFtZXdvcmtzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBnZXRGcmFtZXdvcmtzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2l0ZVxcL3tzaXRlfVxcL2VkaXRhYmxlLWZpbGVzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZlYXR1cmVDb250cm9sbGVyQGdldEVkaXRhYmxlRmlsZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL2VkaXRhYmxlLWZpbGVzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBnZXRFZGl0YWJsZUZpbGVzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2l0ZVxcL3tzaXRlfVxcL2ZyYW1ld29ya1xcL2VkaXRhYmxlLWZpbGVzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZlYXR1cmVDb250cm9sbGVyQGdldEVkaXRhYmxlRnJhbWV3b3JrRmlsZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvc2VydmVyLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFNlcnZlclByb3ZpZGVyc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3NlcnZlci1wcm92aWRlcnNcIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxTZXJ2ZXJQcm92aWRlcnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3NlcnZlci1wcm92aWRlcnNcXC97c2VydmVyX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5zaG93XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcU2VydmVyUHJvdmlkZXJzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9zZXJ2ZXItcHJvdmlkZXJzXFwve3NlcnZlcl9wcm92aWRlcn1cIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcU2VydmVyUHJvdmlkZXJzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvc2VydmVyLXByb3ZpZGVyc1xcL3tzZXJ2ZXJfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxTZXJ2ZXJQcm92aWRlcnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcUmVwb3NpdG9yeVByb3ZpZGVyc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3JlcG9zaXRvcnktcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFJlcG9zaXRvcnlQcm92aWRlcnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3JlcG9zaXRvcnktcHJvdmlkZXJzXFwve3JlcG9zaXRvcnlfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy5zaG93XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcUmVwb3NpdG9yeVByb3ZpZGVyc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcXC97cmVwb3NpdG9yeV9wcm92aWRlcn1cIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFJlcG9zaXRvcnlQcm92aWRlcnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1xcL3tyZXBvc2l0b3J5X3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFJlcG9zaXRvcnlQcm92aWRlcnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXE5vdGlmaWNhdGlvblByb3ZpZGVyc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxOb3RpZmljYXRpb25Qcm92aWRlcnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcXC97bm90aWZpY2F0aW9uX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy5zaG93XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcTm90aWZpY2F0aW9uUHJvdmlkZXJzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXFwve25vdGlmaWNhdGlvbl9wcm92aWRlcn1cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcTm90aWZpY2F0aW9uUHJvdmlkZXJzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1xcL3tub3RpZmljYXRpb25fcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxOb3RpZmljYXRpb25Qcm92aWRlcnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9vcHRpb25zXCIsXCJuYW1lXCI6XCJvcHRpb25zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlck9wdGlvbnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL29wdGlvbnNcIixcIm5hbWVcIjpcIm9wdGlvbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9vcHRpb25zXFwve29wdGlvbn1cIixcIm5hbWVcIjpcIm9wdGlvbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJPcHRpb25zQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL29wdGlvbnNcXC97b3B0aW9ufVwiLFwibmFtZVwiOlwib3B0aW9ucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvb3B0aW9uc1xcL3tvcHRpb259XCIsXCJuYW1lXCI6XCJvcHRpb25zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL3JlZ2lvbnNcIixcIm5hbWVcIjpcInJlZ2lvbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvcmVnaW9uc1wiLFwibmFtZVwiOlwicmVnaW9ucy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL3JlZ2lvbnNcXC97cmVnaW9ufVwiLFwibmFtZVwiOlwicmVnaW9ucy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlclJlZ2lvbnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvcmVnaW9uc1xcL3tyZWdpb259XCIsXCJuYW1lXCI6XCJyZWdpb25zLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJSZWdpb25zQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9yZWdpb25zXFwve3JlZ2lvbn1cIixcIm5hbWVcIjpcInJlZ2lvbnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvZmVhdHVyZXNcIixcIm5hbWVcIjpcImZlYXR1cmVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9mZWF0dXJlc1wiLFwibmFtZVwiOlwiZmVhdHVyZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcImZlYXR1cmVzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcImZlYXR1cmVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcImZlYXR1cmVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9wcm92aWRlclwiLFwibmFtZVwiOlwicHJvdmlkZXIuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9wcm92aWRlclwiLFwibmFtZVwiOlwicHJvdmlkZXIuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3Byb3ZpZGVyXFwve3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicHJvdmlkZXIuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcHJvdmlkZXJcXC97cHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJwcm92aWRlci51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9wcm92aWRlclxcL3twcm92aWRlcn1cIixcIm5hbWVcIjpcInByb3ZpZGVyLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvb3B0aW9uc1wiLFwibmFtZVwiOlwib3B0aW9ucy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJPcHRpb25zQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9vcHRpb25zXCIsXCJuYW1lXCI6XCJvcHRpb25zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlck9wdGlvbnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvb3B0aW9uc1xcL3tvcHRpb259XCIsXCJuYW1lXCI6XCJvcHRpb25zLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9vcHRpb25zXFwve29wdGlvbn1cIixcIm5hbWVcIjpcIm9wdGlvbnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlck9wdGlvbnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL29wdGlvbnNcXC97b3B0aW9ufVwiLFwibmFtZVwiOlwib3B0aW9ucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlck9wdGlvbnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9yZWdpb25zXCIsXCJuYW1lXCI6XCJyZWdpb25zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlclJlZ2lvbnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3JlZ2lvbnNcIixcIm5hbWVcIjpcInJlZ2lvbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9yZWdpb25zXFwve3JlZ2lvbn1cIixcIm5hbWVcIjpcInJlZ2lvbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3JlZ2lvbnNcXC97cmVnaW9ufVwiLFwibmFtZVwiOlwicmVnaW9ucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcmVnaW9uc1xcL3tyZWdpb259XCIsXCJuYW1lXCI6XCJyZWdpb25zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL2ZlYXR1cmVzXCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvZmVhdHVyZXNcIixcIm5hbWVcIjpcImZlYXR1cmVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJmZWF0dXJlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwibG9naW5cIixcIm5hbWVcIjpcImxvZ2luXCIsXCJhY3Rpb25cIjpcIkF1dGhcXExvZ2luQ29udHJvbGxlckBzaG93TG9naW5Gb3JtXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImxvZ2luXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQXV0aFxcTG9naW5Db250cm9sbGVyQGxvZ2luXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImxvZ291dFwiLFwibmFtZVwiOlwibG9nb3V0XCIsXCJhY3Rpb25cIjpcIkF1dGhcXExvZ2luQ29udHJvbGxlckBsb2dvdXRcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwicmVnaXN0ZXJcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxSZWdpc3RlckNvbnRyb2xsZXJAcmVnaXN0ZXJcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwicGFzc3dvcmRcXC9lbWFpbFwiLFwibmFtZVwiOlwicGFzc3dvcmQuZW1haWxcIixcImFjdGlvblwiOlwiQXV0aFxcRm9yZ290UGFzc3dvcmRDb250cm9sbGVyQHNlbmRSZXNldExpbmtFbWFpbFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInBhc3N3b3JkXFwvcmVzZXRcXC97dG9rZW59XCIsXCJuYW1lXCI6XCJwYXNzd29yZC5yZXNldFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxSZXNldFBhc3N3b3JkQ29udHJvbGxlckBzaG93UmVzZXRGb3JtXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInBhc3N3b3JkXFwvcmVzZXRcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxSZXNldFBhc3N3b3JkQ29udHJvbGxlckByZXNldFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInByb3ZpZGVyXFwve3Byb3ZpZGVyfVxcL2xpbmtcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxPYXV0aENvbnRyb2xsZXJAbmV3UHJvdmlkZXJcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJwcm92aWRlclxcL3twcm92aWRlcn1cXC9jYWxsYmFja1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkF1dGhcXE9hdXRoQ29udHJvbGxlckBnZXRIYW5kbGVQcm92aWRlckNhbGxiYWNrXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInN0cmlwZVxcL3dlYmhvb2tcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXENhc2hpZXJcXEh0dHBcXENvbnRyb2xsZXJzXFxXZWJob29rQ29udHJvbGxlckBoYW5kbGVXZWJob29rXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcIixcIm5hbWVcIjpcInBsYW5zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJzdWJzY3JpcHRpb25cXC9wbGFuc1xcL2NyZWF0ZVwiLFwibmFtZVwiOlwicGxhbnMuY3JlYXRlXCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAY3JlYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInN1YnNjcmlwdGlvblxcL3BsYW5zXCIsXCJuYW1lXCI6XCJwbGFucy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTdWJzY3JpcHRpb25Db250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcXC97cGxhbn1cIixcIm5hbWVcIjpcInBsYW5zLnNob3dcIixcImFjdGlvblwiOlwiU3Vic2NyaXB0aW9uQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcXC97cGxhbn1cXC9lZGl0XCIsXCJuYW1lXCI6XCJwbGFucy5lZGl0XCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAZWRpdFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJzdWJzY3JpcHRpb25cXC9wbGFuc1xcL3twbGFufVwiLFwibmFtZVwiOlwicGxhbnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcXC97cGxhbn1cIixcIm5hbWVcIjpcInBsYW5zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU3Vic2NyaXB0aW9uQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiLFwiUE9TVFwiLFwiUFVUXCIsXCJQQVRDSFwiLFwiREVMRVRFXCJdLFwidXJpXCI6XCJ3ZWJob29rXFwvZGVwbG95XFwve3NpdGVIYXNoSWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiV2ViSG9va0NvbnRyb2xsZXJAZGVwbG95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiLFwiUE9TVFwiLFwiUFVUXCIsXCJQQVRDSFwiLFwiREVMRVRFXCJdLFwidXJpXCI6XCJ3ZWJob29rXFwvc2VydmVyXFwve3NlcnZlckhhc2hJZH1cXC9zc2xcXC91cGRhdGVkXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiV2ViSG9va0NvbnRyb2xsZXJAc2VydmVyU3NsQ2VydGlmaWNhdGVVcGRhdGVkXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwid2ViaG9va1xcL3thbnl9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQ29udHJvbGxlckByZWRpcmVjdFRvQXBwXCJ9LHtcImhvc3RcIjpcInN0YXRzLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwid2ViaG9va1xcL2xvYWRzXFwve3NlcnZlckhhc2hJZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJXZWJIb29rQ29udHJvbGxlckBsb2FkTW9uaXRvclwifSx7XCJob3N0XCI6XCJzdGF0cy5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIndlYmhvb2tcXC9tZW1vcnlcXC97c2VydmVySGFzaElkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIldlYkhvb2tDb250cm9sbGVyQG1lbW9yeU1vbml0b3JcIn0se1wiaG9zdFwiOlwic3RhdHMuY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ3ZWJob29rXFwvZGlza3VzYWdlXFwve3NlcnZlckhhc2hJZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJXZWJIb29rQ29udHJvbGxlckBkaXNrVXNhZ2VNb25pdG9yXCJ9LHtcImhvc3RcIjpcInN0YXRzLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwid2ViaG9va1xcL3thbnl9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQ29udHJvbGxlckByZWRpcmVjdFRvQXBwXCJ9LHtcImhvc3RcIjpcImxpZmVsaW5lLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwie2xpZmVsaW5lSGFzaElkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkxpZmVMaW5lQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOlwibGlmZWxpbmUuY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ7YW55fVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkNvbnRyb2xsZXJAcmVkaXJlY3RUb0FwcFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInRlYW1zXFwvYWNjZXB0XFwve3Rva2VufVwiLFwibmFtZVwiOlwidGVhbXMuYWNjZXB0X2ludml0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbUNvbnRyb2xsZXJAYWNjZXB0SW52aXRlXCJ9LHtcImhvc3RcIjpcInN0eWxlLWd1aWRlLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiXFwvXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiUHVibGljQ29udHJvbGxlckBzdHlsZUd1aWRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwicHJpdmFjeVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlB1YmxpY0NvbnRyb2xsZXJAcHJpdmFjeVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJzdWJzY3JpYmVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJQdWJsaWNDb250cm9sbGVyQHN1YnNjcmliZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInRlcm1zLW9mLXNlcnZpY2VcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJQdWJsaWNDb250cm9sbGVyQHRlcm1zT2ZTZXJ2aWNlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiXFwvXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQ29udHJvbGxlckBhcHBcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJzZWNvbmQtYXV0aFwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkF1dGhcXFNlY29uZEF1dGhDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwic2Vjb25kLWF1dGhcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInNsYWNrLWludml0ZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQHNsYWNrSW52aXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvaW52b2ljZXNcXC97aW52b2ljZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25JbnZvaWNlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwie2FueX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJDb250cm9sbGVyQGFwcFwifV0sXG4gICAgICAgICAgICBwcmVmaXg6ICcnLFxuXG4gICAgICAgICAgICByb3V0ZSA6IGZ1bmN0aW9uIChuYW1lLCBwYXJhbWV0ZXJzLCByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGUgfHwgdGhpcy5nZXRCeU5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoICEgcm91dGUgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9Sb3V0ZShyb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cmw6IGZ1bmN0aW9uICh1cmwsIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycyB8fCBbXTtcblxuICAgICAgICAgICAgICAgIHZhciB1cmkgPSB1cmwgKyAnLycgKyBwYXJhbWV0ZXJzLmpvaW4oJy8nKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvcnJlY3RVcmwodXJpKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRvUm91dGUgOiBmdW5jdGlvbiAocm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXJpID0gdGhpcy5yZXBsYWNlTmFtZWRQYXJhbWV0ZXJzKHJvdXRlLnVyaSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICAgICAgdmFyIHFzICA9IHRoaXMuZ2V0Um91dGVRdWVyeVN0cmluZyhwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFic29sdXRlICYmIHRoaXMuaXNPdGhlckhvc3Qocm91dGUpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiLy9cIiArIHJvdXRlLmhvc3QgKyBcIi9cIiArIHVyaSArIHFzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvcnJlY3RVcmwodXJpICsgcXMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNPdGhlckhvc3Q6IGZ1bmN0aW9uIChyb3V0ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlLmhvc3QgJiYgcm91dGUuaG9zdCAhPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXBsYWNlTmFtZWRQYXJhbWV0ZXJzIDogZnVuY3Rpb24gKHVyaSwgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXHsoLio/KVxcPz9cXH0vZywgZnVuY3Rpb24obWF0Y2gsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJhbWV0ZXJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyYW1ldGVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdHJpcCBvdXQgYW55IG9wdGlvbmFsIHBhcmFtZXRlcnMgdGhhdCB3ZXJlIG5vdCBnaXZlblxuICAgICAgICAgICAgICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXC9cXHsuKj9cXD9cXH0vZywgJycpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVyaTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldFJvdXRlUXVlcnlTdHJpbmcgOiBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIHZhciBxcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHFzLnB1c2goa2V5ICsgJz0nICsgcGFyYW1ldGVyc1trZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChxcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJz8nICsgcXMuam9pbignJicpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0QnlOYW1lIDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5yb3V0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm91dGVzLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpcy5yb3V0ZXNba2V5XS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEJ5QWN0aW9uIDogZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMucm91dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHRoaXMucm91dGVzW2tleV0uYWN0aW9uID09PSBhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0Q29ycmVjdFVybDogZnVuY3Rpb24gKHVyaSkge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLnByZWZpeCArICcvJyArIHVyaS5yZXBsYWNlKC9eXFwvPy8sICcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggISB0aGlzLmFic29sdXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdFVybC5yZXBsYWNlKCcvXFwvPyQvJywgJycpICsgdXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBnZXRMaW5rQXR0cmlidXRlcyA9IGZ1bmN0aW9uKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICggISBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXR0cnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRycy5wdXNoKGtleSArICc9XCInICsgYXR0cmlidXRlc1trZXldICsgJ1wiJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXR0cnMuam9pbignICcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBnZXRIdG1sTGluayA9IGZ1bmN0aW9uICh1cmwsIHRpdGxlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICB0aXRsZSAgICAgID0gdGl0bGUgfHwgdXJsO1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IGdldExpbmtBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gJzxhIGhyZWY9XCInICsgdXJsICsgJ1wiICcgKyBhdHRyaWJ1dGVzICsgJz4nICsgdGl0bGUgKyAnPC9hPic7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgdXJsIGZvciBhIGdpdmVuIGNvbnRyb2xsZXIgYWN0aW9uLlxuICAgICAgICAgICAgLy8gbGFyb3V0ZS5hY3Rpb24oJ0hvbWVDb250cm9sbGVyQGdldEluZGV4JywgW3BhcmFtcyA9IHt9XSlcbiAgICAgICAgICAgIGFjdGlvbiA6IGZ1bmN0aW9uIChuYW1lLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMgfHwge307XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVzLnJvdXRlKG5hbWUsIHBhcmFtZXRlcnMsIHJvdXRlcy5nZXRCeUFjdGlvbihuYW1lKSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIHVybCBmb3IgYSBnaXZlbiBuYW1lZCByb3V0ZS5cbiAgICAgICAgICAgIC8vIGxhcm91dGUucm91dGUoJ3JvdXRlTmFtZScsIFtwYXJhbXMgPSB7fV0pXG4gICAgICAgICAgICByb3V0ZSA6IGZ1bmN0aW9uIChyb3V0ZSwgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlcy5yb3V0ZShyb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIGZ1bGx5IHF1YWxpZmllZCBVUkwgdG8gdGhlIGdpdmVuIHBhdGguXG4gICAgICAgICAgICAvLyBsYXJvdXRlLnJvdXRlKCd1cmwnLCBbcGFyYW1zID0ge31dKVxuICAgICAgICAgICAgdXJsIDogZnVuY3Rpb24gKHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMgfHwge307XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVzLnVybChyb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIGh0bWwgbGluayB0byB0aGUgZ2l2ZW4gdXJsLlxuICAgICAgICAgICAgLy8gbGFyb3V0ZS5saW5rX3RvKCdmb28vYmFyJywgW3RpdGxlID0gdXJsXSwgW2F0dHJpYnV0ZXMgPSB7fV0pXG4gICAgICAgICAgICBsaW5rX3RvIDogZnVuY3Rpb24gKHVybCwgdGl0bGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLnVybCh1cmwpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEh0bWxMaW5rKHVybCwgdGl0bGUsIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBodG1sIGxpbmsgdG8gdGhlIGdpdmVuIHJvdXRlLlxuICAgICAgICAgICAgLy8gbGFyb3V0ZS5saW5rX3RvX3JvdXRlKCdyb3V0ZS5uYW1lJywgW3RpdGxlPXVybF0sIFtwYXJhbWV0ZXJzID0ge31dLCBbYXR0cmlidXRlcyA9IHt9XSlcbiAgICAgICAgICAgIGxpbmtfdG9fcm91dGUgOiBmdW5jdGlvbiAocm91dGUsIHRpdGxlLCBwYXJhbWV0ZXJzLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMucm91dGUocm91dGUsIHBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEh0bWxMaW5rKHVybCwgdGl0bGUsIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBodG1sIGxpbmsgdG8gdGhlIGdpdmVuIGNvbnRyb2xsZXIgYWN0aW9uLlxuICAgICAgICAgICAgLy8gbGFyb3V0ZS5saW5rX3RvX2FjdGlvbignSG9tZUNvbnRyb2xsZXJAZ2V0SW5kZXgnLCBbdGl0bGU9dXJsXSwgW3BhcmFtZXRlcnMgPSB7fV0sIFthdHRyaWJ1dGVzID0ge31dKVxuICAgICAgICAgICAgbGlua190b19hY3Rpb24gOiBmdW5jdGlvbihhY3Rpb24sIHRpdGxlLCBwYXJhbWV0ZXJzLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuYWN0aW9uKGFjdGlvbiwgcGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SHRtbExpbmsodXJsLCB0aXRsZSwgYXR0cmlidXRlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgIH0pLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBFeHBvc2UgdGhlIGNsYXNzIGVpdGhlciB2aWEgQU1ELCBDb21tb25KUyBvciB0aGUgZ2xvYmFsIG9iamVjdFxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXJvdXRlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGxhcm91dGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3cubGFyb3V0ZSA9IGxhcm91dGU7XG4gICAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2xhcm91dGUuanMiLCJleHBvcnQgY29uc3Qgbm93ID0gKCkgPT4ge1xuICByZXR1cm4gbW9tZW50KCkudHoobW9tZW50LnR6Lmd1ZXNzKCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHBhcnNlRGF0ZSA9IGRhdGUgPT4ge1xuICByZXR1cm4gbW9tZW50KGRhdGUpLnR6KG1vbWVudC50ei5ndWVzcygpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBodW1hbml6ZURpZmYgPSAoZGF0ZTEsIGRhdGUyKSA9PiB7XG4gIHJldHVybiBtb21lbnQuZHVyYXRpb24obW9tZW50KGRhdGUyKS5kaWZmKG1vbWVudChkYXRlMSksICdtaW51dGVzJyksIFwibWludXRlc1wiKS5odW1hbml6ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFRpbWUgPSAoZGF0ZSkgPT4ge1xuICByZXR1cm4gcGFyc2VEYXRlKGRhdGUpLmZvcm1hdCgnaDptbSBBJylcbn1cblxuZXhwb3J0IGNvbnN0IGdldFRpbWVIZWlnaHRTdHlsZSA9IChzdGFydERhdGUsIGVuZERhdGUpID0+IHtcblxuICAgIGxldCBzdGFydERhdGVQYXJzZWQgPSBwYXJzZURhdGUoc3RhcnREYXRlKTtcbiAgICBsZXQgc3RhcnRFTSA9ICgoKChzdGFydERhdGVQYXJzZWQuZm9ybWF0KCdISCcpICogNjApICsgcGFyc2VJbnQoc3RhcnREYXRlUGFyc2VkLmZvcm1hdCgnbW0nKSkpKSAqIDYpIC8gNjA7XG5cbiAgICBsZXQgZW5kRGF0ZVBhcnNlZCA9IHBhcnNlRGF0ZShlbmREYXRlKTtcbiAgICBsZXQgZW5kRW0gPSAoKCgoKGVuZERhdGVQYXJzZWQuZm9ybWF0KCdISCcpICogNjApICsgcGFyc2VJbnQoZW5kRGF0ZVBhcnNlZC5mb3JtYXQoJ21tJykpKSkgKiA2KSAvIDYwKSAtIHN0YXJ0RU07XG5cbiAgICByZXR1cm4gYHRvcDoke3N0YXJ0RU0gfWVtOyBoZWlnaHQ6JHtlbmRFbSB9ZW07YDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL2RhdGUtdGltZS9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBsb2NhbCA9ICgpID0+IHtcbiAgcmV0dXJuIExhcmF2ZWwuZW52ID09PSAnbG9jYWwnO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvZW52aXJvbm1lbnQvaW5kZXguanMiLCIvLyBOT1RFIC0gdGhpcyB3aWxsIG5vdCB3b3JrIHdpdGggUFVUISEhXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3ltZm9ueS9zeW1mb255L2lzc3Vlcy85MjI2XG5leHBvcnQgY29uc3QgZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbihmb3JtKSB7XG4gIGlmICghJChmb3JtKS5pcyhcImZvcm1cIikpIHtcbiAgICBmb3JtID0gJChmb3JtKS5maW5kKFwiZm9ybVwiKVswXTtcbiAgfVxuICByZXR1cm4gbmV3IEZvcm1EYXRhKGZvcm0pO1xufTtcblxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uLy4uL2NsYXNzZXMvRm9ybVwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRm9ybSA9IChkYXRhLCByZXNldCkgPT4ge1xuICByZXR1cm4gbmV3IEZvcm0oZGF0YSwgcmVzZXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvZm9ybS9pbmRleC5qcyIsImltcG9ydCB7IGNyZWF0ZUZvcm0sIGdldEZvcm1EYXRhIH0gZnJvbSBcIi4vZm9ybVwiO1xuXG5pbXBvcnQgeyBiYWNrLCBhY3Rpb24gfSBmcm9tIFwiLi9yb3V0ZXNcIjtcblxuaW1wb3J0IHsgbm93LCBodW1hbml6ZURpZmYsIHBhcnNlRGF0ZSwgZm9ybWF0VGltZSwgZ2V0VGltZUhlaWdodFN0eWxlIH0gZnJvbSBcIi4vZGF0ZS10aW1lXCI7XG5cbmltcG9ydCB7IGxvY2FsIH0gZnJvbSBcIi4vZW52aXJvbm1lbnRcIjtcblxuaW1wb3J0IHsgaXNBZG1pbiB9IGZyb20gXCIuL3Blcm1pc3Npb25zXCI7XG5cbmltcG9ydCB7IHNob3dFcnJvciwgc2hvd1N1Y2Nlc3MsIGhhbmRsZUFwaUVycm9yIH0gZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuXG5WdWUubWl4aW4oe1xuICBtZXRob2RzOiB7XG4gICAgbm93LFxuICAgIGJhY2ssXG4gICAgaHVtYW5pemVEaWZmLFxuICAgIGFjdGlvbixcbiAgICBzaG93RXJyb3IsXG4gICAgcGFyc2VEYXRlLFxuICAgIGZvcm1hdFRpbWUsXG4gICAgY3JlYXRlRm9ybSxcbiAgICBzaG93U3VjY2VzcyxcbiAgICBnZXRGb3JtRGF0YSxcbiAgICBoYW5kbGVBcGlFcnJvcixcbiAgICBnZXRUaW1lSGVpZ2h0U3R5bGVcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBsb2NhbCxcbiAgICBpc0FkbWluLFxuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvaW5kZXguanMiLCJleHBvcnQgY29uc3Qgc2hvd0Vycm9yID0gZnVuY3Rpb24obWVzc2FnZSwgdGl0bGUsIHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRpbWVvdXQgPSA1MDAwO1xuICB9XG5cbiAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJub3RpZmljYXRpb25zL2FkZFwiLCB7XG4gICAgdGl0bGU6ICFfLmlzRW1wdHkodGl0bGUpID8gdGl0bGUgOiBcIkVycm9yISFcIixcbiAgICB0ZXh0OiBtZXNzYWdlLFxuICAgIGNsYXNzOiBcImVycm9yXCIsXG4gICAgdGltZW91dDogdGltZW91dFxuICB9KTtcbn07XG5leHBvcnQgY29uc3Qgc2hvd1N1Y2Nlc3MgPSBmdW5jdGlvbihtZXNzYWdlLCB0aXRsZSwgdGltZW91dCkge1xuICBpZiAodGltZW91dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGltZW91dCA9IDUwMDA7XG4gIH1cblxuICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcIm5vdGlmaWNhdGlvbnMvYWRkXCIsIHtcbiAgICB0aXRsZTogIV8uaXNFbXB0eSh0aXRsZSkgPyB0aXRsZSA6IFwiU3VjY2VzcyEhXCIsXG4gICAgdGV4dDogbWVzc2FnZSxcbiAgICBjbGFzczogXCJzdWNjZXNzXCIsXG4gICAgdGltZW91dDogdGltZW91dFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBcGlFcnJvciA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gIGxldCBtZXNzYWdlID0gcmVzcG9uc2U7XG5cbiAgaWYgKF8uaXNPYmplY3QocmVzcG9uc2UpKSB7XG4gICAgaWYgKF8uaXNTZXQocmVzcG9uc2UuZXJyb3JzKSkge1xuICAgICAgbWVzc2FnZSA9IHJlc3BvbnNlLmVycm9ycztcbiAgICB9IGVsc2UgaWYgKF8uaXNPYmplY3QocmVzcG9uc2UuZGF0YSkpIHtcbiAgICAgIG1lc3NhZ2UgPSBcIlwiO1xuICAgICAgXy5lYWNoKHJlc3BvbnNlLmRhdGEuZXJyb3JzLCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBtZXNzYWdlICs9IGVycm9yICsgXCI8YnI+XCI7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuICB9XG5cbiAgaWYgKF8uaXNTdHJpbmcobWVzc2FnZSkpIHtcbiAgICB0aGlzLnNob3dFcnJvcihtZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oXCJVTkFCTEUgVE8gUEFSU0UgRVJST1JcIik7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL25vdGlmaWNhdGlvbnMvaW5kZXguanMiLCJleHBvcnQgY29uc3QgaXNBZG1pbiA9IGZ1bmN0aW9uKCkge1xuICAvLyByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyLnJvbGUgPT09IFwiYWRtaW5cIjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9wZXJtaXNzaW9ucy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBiYWNrID0gKCkgPT4ge1xuICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gKGFjdGlvbiwgcGFyYW1ldGVycykgPT4ge1xuICAvLyByZXR1cm4gbGFyb3V0ZS5hY3Rpb24oYWN0aW9uLCBwYXJhbWV0ZXJzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL3JvdXRlcy9pbmRleC5qcyIsInJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9pbmRleC5qcyIsImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyByb3V0ZXMgfSBmcm9tIFwiLi4vYXBwL3JvdXRlcy5qc1wiO1xuXG53aW5kb3cuVnVlUm91dGVyID0gcmVxdWlyZShcInZ1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vblwiKTtcblxuVnVlLnVzZShWdWVSb3V0ZXIpO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgbW9kZTogXCJoaXN0b3J5XCIsXG4gIHJvdXRlczogcm91dGVzXG59KTtcblxuLy8gcm91dGVyLmJlZm9yZVJlc29sdmUoKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4vLyAgIC8vIGlmICghc3RvcmUuc3RhdGUudXNlci51c2VyLmlzX3N1YnNjcmliZWQpIHtcbi8vICAgLy8gICBpZiAodG8ubmFtZSAhPT0gXCJzdWJzY3JpcHRpb25cIikge1xuLy8gICAvLyAgICAgbmV4dCh7XG4vLyAgIC8vICAgICAgIG5hbWU6IFwic3Vic2NyaXB0aW9uXCJcbi8vICAgLy8gICAgIH0pO1xuLy8gICAvLyAgIH0gZWxzZSB7XG4vLyAgIC8vICAgICBuZXh0KCk7XG4vLyAgIC8vICAgfVxuLy8gICAvLyB9IGVsc2Uge1xuLy8gICAvLyAgIG5leHQoKTtcbi8vICAgLy8gfVxuLy8gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcm91dGVyL2luZGV4LmpzIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgVnVleCBmcm9tIFwidnVleFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vLi4vY2xhc3Nlcy9Gb3JtXCI7XG5pbXBvcnQgRXJyb3JzIGZyb20gXCIuLy4uL2NsYXNzZXMvRXJyb3JzXCI7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwiLi4vbWl4aW5zL2hlbHBlcnMvcm91dGVzXCI7XG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi8uLi9jbGFzc2VzL1JlcXVlc3RcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgbW9kdWxlcyB9IGZyb20gXCIuL21vZHVsZXNcIjtcblxuVnVlLnVzZShWdWV4KTtcblZ1ZS5Gb3JtID0gRm9ybTtcblZ1ZS5FcnJvcnMgPSBFcnJvcnM7XG5WdWUuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cblZ1ZS5hY3Rpb24gPSBhY3Rpb247XG5cblZ1ZS5yZXF1ZXN0ID0gZGF0YSA9PiB7XG4gIHJldHVybiBuZXcgUmVxdWVzdChkYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczogbW9kdWxlc1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGxvZ291dCA9IChjb250ZXh0LCBkYXRhKSA9PiB7XG4gIHJldHVybiBWdWUucmVxdWVzdChkYXRhKVxuICAgIC5wb3N0KFZ1ZS5hY3Rpb24oXCJBdXRoTG9naW5Db250cm9sbGVyQGxvZ291dFwiKSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcbiAgICB9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL2F1dGgvYWN0aW9ucy5qcyIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSBcIi4vbXV0YXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIGFjdGlvbnMsXG4gIG11dGF0aW9ucyxcbiAgbmFtZXNwYWNlZDogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvYXV0aC9zdGF0ZS5qcyIsImltcG9ydCBhdXRoIGZyb20gXCIuL2F1dGhcIjtcbmltcG9ydCByb29tcyBmcm9tICcuL3Jvb21zJztcbmltcG9ydCBzeXN0ZW0gZnJvbSBcIi4vc3lzdGVtXCI7XG5pbXBvcnQgcHJvdmlkZXJzIGZyb20gXCIuL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IG5vdGlmaWNhdGlvbnMgZnJvbSBcIi4vbm90aWZpY2F0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGF1dGgsXG4gIHJvb21zLFxuICBzeXN0ZW0sXG4gIHByb3ZpZGVycyxcbiAgbm90aWZpY2F0aW9ucyxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvaW5kZXguanMiLCJleHBvcnQgY29uc3QgYWRkID0gKHsgY29tbWl0IH0sIG5vdGlmaWNhdGlvbikgPT4ge1xuICBjb21taXQoXCJhZGRcIiwgbm90aWZpY2F0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmUgPSAoeyBjb21taXQgfSwgbm90aWZpY2F0aW9uKSA9PiB7XG4gIGNvbW1pdChcInJlbW92ZVwiLCBub3RpZmljYXRpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL2FjdGlvbnMuanMiLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCIuL211dGF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBhY3Rpb25zLFxuICBtdXRhdGlvbnMsXG4gIG5hbWVzcGFjZWQ6IHRydWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBhZGQgPSAoc3RhdGUsIG5vdGlmaWNhdGlvbikgPT4ge1xuICBzdGF0ZS5ub3RpZmljYXRpb25zLnB1c2gobm90aWZpY2F0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmUgPSAoc3RhdGUsIG5vdGlmaWNhdGlvbikgPT4ge1xuICBzdGF0ZS5ub3RpZmljYXRpb25zID0gXy53aXRob3V0KHN0YXRlLm5vdGlmaWNhdGlvbnMsIG5vdGlmaWNhdGlvbik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL25vdGlmaWNhdGlvbnMvbXV0YXRpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBub3RpZmljYXRpb25zOiBbXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL3N0YXRlLmpzIiwiZXhwb3J0IGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICBWdWUucmVxdWVzdCgpLmdldCgnL2FwaS9wcm92aWRlcnMnLCAncHJvdmlkZXJzL3NldEFsbCcpXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9hY3Rpb25zLmpzIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tIFwiLi9tdXRhdGlvbnNcIjtcblxuaW1wb3J0IHJvb21zIGZyb20gJy4vbW9kdWxlcy9yb29tcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIGFjdGlvbnMsXG4gIG11dGF0aW9ucyxcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgICBtb2R1bGVzIDoge1xuICAgICAgICByb29tc1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGdldCA9ICh7fSwgcHJvdmlkZXIpID0+IHtcbiAgICBWdWUucmVxdWVzdCgpLmdldChgL2FwaS9wcm92aWRlcnMvJHtwcm92aWRlcn0vcm9vbXNgLCAncHJvdmlkZXJzL3Jvb21zL3NldEFsbCcpXG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSAoe30sIGRhdGEpID0+IHtcbiAgICBWdWUucmVxdWVzdChkYXRhKS5wb3N0KGAvYXBpL3Byb3ZpZGVycy8ke2RhdGEucHJvdmlkZXJ9L3Jvb21zYCwgJ3Jvb21zL2FkZCcpLnRoZW4oKHJvb20pID0+IHtcbiAgICAgICAgYXBwLiRyb3V0ZXIucHVzaChgL3Jvb21zLyR7cm9vbS5pZH1gKVxuICAgIH0pXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tb2R1bGVzL3Jvb21zL2FjdGlvbnMuanMiLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCIuL211dGF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBhY3Rpb25zLFxuICBtdXRhdGlvbnMsXG4gIG5hbWVzcGFjZWQ6IHRydWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvaW5kZXguanMiLCJleHBvcnQgY29uc3Qgc2V0QWxsID0gKHN0YXRlLCB7IHJlc3BvbnNlIH0pID0+IHtcbiAgc3RhdGUucm9vbXMgPSByZXNwb25zZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvbXV0YXRpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICByb29tczogW11cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvc3RhdGUuanMiLCJleHBvcnQgY29uc3Qgc2V0QWxsID0gKHN0YXRlLCB7IHJlc3BvbnNlIH0pID0+IHtcbiAgc3RhdGUucHJvdmlkZXJzID0gcmVzcG9uc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tdXRhdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHByb3ZpZGVyczogW11cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL3N0YXRlLmpzIiwiZXhwb3J0IGNvbnN0IGdldCA9ICh7fSkgPT4ge1xuICAgIFZ1ZS5yZXF1ZXN0KCkuZ2V0KGAvYXBpL3Jvb21zYCwgJ3Jvb21zL3NldEFsbCcpXG59O1xuXG5leHBvcnQgY29uc3Qgc2hvdyA9ICh7fSwgcm9vbSkgPT4ge1xuICAgIFZ1ZS5yZXF1ZXN0KCkuZ2V0KGAvYXBpL3Jvb21zLyR7cm9vbX1gLCAncm9vbXMvc2V0Jylcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL2FjdGlvbnMuanMiLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCIuL211dGF0aW9uc1wiO1xuXG5pbXBvcnQgZXZlbnRzIGZyb20gJy4vbW9kdWxlcy9ldmVudHMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIGFjdGlvbnMsXG4gIG11dGF0aW9ucyxcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgbW9kdWxlcyA6IHtcbiAgICAgIGV2ZW50c1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGdldCA9ICh7fSwgcm9vbSkgPT4ge1xuICAgIFZ1ZS5yZXF1ZXN0KCkuZ2V0KGAvYXBpL3Jvb21zLyR7cm9vbX0vZXZlbnRzYCwgJ3Jvb21zL2V2ZW50cy9zZXRBbGwnKVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvbW9kdWxlcy9ldmVudHMvYWN0aW9ucy5qcyIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSBcIi4vbXV0YXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIGFjdGlvbnMsXG4gIG11dGF0aW9ucyxcbiAgbmFtZXNwYWNlZDogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tb2R1bGVzL2V2ZW50cy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBzZXRBbGwgPSAoc3RhdGUsIHsgcmVzcG9uc2UgfSkgPT4ge1xuICBzdGF0ZS5ldmVudHMgPSByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXQgPSAoc3RhdGUsIGJvb2tpbmcpID0+IHtcbiAgICBzdGF0ZS5ldmVudCA9IGJvb2tpbmc7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvbW9kdWxlcy9ldmVudHMvbXV0YXRpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBldmVudHM6IFtdLFxuICBldmVudCA6IG51bGwsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL3N0YXRlLmpzIiwiZXhwb3J0IGNvbnN0IHNldCA9IChzdGF0ZSwgeyByZXNwb25zZSB9KSA9PiB7XG4gICAgc3RhdGUucm9vbSA9IHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEFsbCA9IChzdGF0ZSwgeyByZXNwb25zZSB9KSA9PiB7XG4gIHN0YXRlLnJvb21zID0gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkID0gKHN0YXRlLCB7IHJlc3BvbnNlIH0pID0+IHtcbiAgICBzdGF0ZS5yb29tcy5wdXNoKHJlc3BvbnNlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvbXV0YXRpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICByb29tOiBudWxsLFxuICByb29tcyA6IFtdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL3N0YXRlLmpzIiwiZXhwb3J0IGNvbnN0IHNldFZlcnNpb24gPSAoeyBjb21taXQgfSwgZGF0YSkgPT4ge1xuICBjb21taXQoXCJzZXRWZXJzaW9uXCIsIGRhdGEudmVyc2lvbik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3N5c3RlbS9hY3Rpb25zLmpzIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tIFwiLi9tdXRhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3N5c3RlbS9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBzZXRWZXJzaW9uID0gKHN0YXRlLCB2ZXJzaW9uKSA9PiB7XG4gIHN0YXRlLnZlcnNpb24gPSB2ZXJzaW9uO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vbXV0YXRpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICB2ZXJzaW9uOiBMYXJhdmVsLnZlcnNpb25cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc3lzdGVtL3N0YXRlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==