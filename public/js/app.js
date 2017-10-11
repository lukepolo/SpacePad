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
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Calendar_vue__ = __webpack_require__("./resources/assets/js/app/room/components/Calendar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Calendar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BookingAttendees_vue__ = __webpack_require__("./resources/assets/js/app/room/components/BookingAttendees.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BookingAttendees_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_BookingAttendees_vue__);
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
        BookingAttendees: __WEBPACK_IMPORTED_MODULE_1__components_BookingAttendees_vue___default.a
    },
    created: function created() {
        var _this = this;

        this.$store.dispatch('rooms/show', this.$route.params.room);
        this.currentTimeScrollInterval = setInterval(function () {
            _this.$store.dispatch('rooms/events/get', _this.$route.params.room);
        }, 5 * 60 * 1000);
        this.$store.dispatch('rooms/events/get', this.$route.params.room);
    },

    methods: {
        bookRoom: function bookRoom(minutes) {
            this.$store.dispatch('rooms/events/create', {
                minutes: minutes,
                room: this.$route.params.room
            });
        },
        checkIn: function checkIn() {
            if (this.checkingIntoBooking) {
                var booking = this.checkingIntoBooking;
                this.$store.dispatch('rooms/events/update', {
                    event: booking.id,
                    end: booking.end_date,
                    room: this.$route.params.room,
                    start: this.now() < this.parseDate(booking.start_date) ? this.now() : booking.start_date,
                    checked_in: true
                });
            }
        },
        endBooking: function endBooking() {
            this.$store.dispatch('rooms/events/update', {
                end: this.now(),
                room: this.$route.params.room,
                event: this.currentBooking.id,
                start: this.currentBooking.start_date
            });
        }
    },
    computed: {
        room: function room() {
            return this.$store.state.rooms.room;
        },
        checkingIntoBooking: function checkingIntoBooking() {
            if (this.currentBooking || this.nextBooking) {
                return this.currentBooking ? this.currentBooking : this.nextBooking;
            }
        },
        currentDate: function currentDate() {
            return moment().format('ll');
        },
        selectedBooking: function selectedBooking() {
            var selectedBooking = this.$store.state.rooms.events.event;
            if (!selectedBooking) {
                return this.nextBooking;
            }
            return selectedBooking;
        },
        bookings: function bookings() {
            return this.$store.state.rooms.events.events;
        },
        currentBooking: function currentBooking() {
            var _this2 = this;

            return _.find(this.bookings, function (booking) {
                return _this2.parseDate(booking.start_date).isBefore(_this2.now()) && _this2.parseDate(booking.end_date).isAfter(_this2.now());
            });
        },
        nextBooking: function nextBooking() {
            var _this3 = this;

            return _.find(this.bookings, function (booking) {
                return _this3.parseDate(booking.start_date).isAfter(_this3.now());
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/lodash/lodash.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/components/Booking.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['booking'],
    methods: {
        selectBooking: function selectBooking() {
            this.$store.commit('rooms/events/set', this.booking);
        }
    },
    computed: {
        timeDifference: function timeDifference() {
            return moment.duration(this.parseDate(this.booking.end_date).diff(this.parseDate(this.booking.start_date))).asMinutes();
        },
        shouldDisplay: function shouldDisplay() {
            return this.timeDifference >= 5;
        },
        shouldDisplaySubject: function shouldDisplaySubject() {
            return this.timeDifference >= 30;
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
   props: ['booking']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/components/Calendar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Booking_vue__ = __webpack_require__("./resources/assets/js/app/room/components/Booking.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Booking_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Booking_vue__);
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
        Booking: __WEBPACK_IMPORTED_MODULE_0__components_Booking_vue___default.a
    },
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
            calendar.scrollTop = currentTimeOffsets.top - calendarOffsets.top - 125;
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
        { staticClass: "attendees" },
        [
          _c("h3", [_vm._v("Attendees")]),
          _vm._v(" "),
          _vm._l(_vm.booking.attendees, function(attendee) {
            return [
              _c("div", { staticClass: "attendee" }, [
                _c(
                  "span",
                  { staticClass: "attendee-status", class: attendee.status },
                  [_vm._v(_vm._s(attendee.name))]
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
          _c(
            "nav",
            {
              staticClass: "room-header level",
              class: { booked: _vm.currentBooking, free: !_vm.currentBooking }
            },
            [
              _c("div", { staticClass: "level-left" }, [
                _c("h2", [_vm._v(_vm._s(_vm.room.name))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "level-right" }, [
                _c("h2", [_vm._v(_vm._s(_vm.currentDate))])
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "columns room-details" }, [
            _c(
              "div",
              { staticClass: "column calendar-wrapper" },
              [
                _c(
                  "div",
                  { staticClass: "booking-status" },
                  [
                    _vm.currentBooking
                      ? [
                          _c("h1", [
                            _vm._v(
                              "Booked until " +
                                _vm._s(
                                  _vm.formatTime(_vm.currentBooking.end_date)
                                )
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
                ),
                _vm._v(" "),
                _c("calendar")
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "column tabs" }, [
              _vm.selectedBooking
                ? _c(
                    "div",
                    { staticClass: "tab-content" },
                    [
                      _vm._v(
                        "\n                    10 Seats, TV : HDMI <-- TODO\n                    "
                      ),
                      _c("hr"),
                      _vm._v(" "),
                      _c("h2", [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.selectedBooking.subject)
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("small", [
                          _vm._v(
                            _vm._s(
                              _vm.formatTime(_vm.selectedBooking.start_date)
                            ) +
                              " - " +
                              _vm._s(
                                _vm.formatTime(_vm.selectedBooking.end_date)
                              )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("booking-attendees", {
                        attrs: { booking: _vm.selectedBooking }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _c("br"),
                      _c("br"),
                      _c("br"),
                      _vm._v(" "),
                      _vm.currentBooking == _vm.selectedBooking
                        ? [
                            _c(
                              "div",
                              {
                                staticClass: "button",
                                on: { click: _vm.endBooking }
                              },
                              [_vm._v("End Booking")]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "room-footer",
              class: { booked: _vm.currentBooking, free: !_vm.currentBooking }
            },
            [
              _c("div", { staticClass: "level" }, [
                _c("div", { staticClass: "level-left" }, [
                  _c(
                    "div",
                    { staticClass: "level-item" },
                    [
                      _vm.checkingIntoBooking &&
                      !_vm.checkingIntoBooking.checked_in
                        ? [
                            _c(
                              "div",
                              {
                                staticClass: "button",
                                on: {
                                  click: function($event) {
                                    _vm.checkIn()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                Check In\n                            "
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "level-right" },
                  [
                    !_vm.currentBooking
                      ? [
                          _c("div", { staticClass: "book-room-container" }, [
                            _c("span", [_vm._v("Book")]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "button",
                                on: {
                                  click: function($event) {
                                    _vm.bookRoom(15)
                                  }
                                }
                              },
                              [_vm._v("15")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "button",
                                on: {
                                  click: function($event) {
                                    _vm.bookRoom(30)
                                  }
                                }
                              },
                              [_vm._v("30")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "button",
                                on: {
                                  click: function($event) {
                                    _vm.bookRoom(45)
                                  }
                                }
                              },
                              [_vm._v("45")]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "button",
                                on: {
                                  click: function($event) {
                                    _vm.bookRoom(60)
                                  }
                                }
                              },
                              [_vm._v("60")]
                            )
                          ])
                        ]
                      : _vm._e(),
                    _vm._v(" "),
                    _c("p", { staticClass: "level-item" }, [
                      _vm._v(
                        "\n                        Find Another space <-- TODO\n                    "
                      )
                    ])
                  ],
                  2
                )
              ])
            ]
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
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
        return [_c("booking", { attrs: { booking: booking } })]
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-473e0401\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/room/components/Booking.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.booking && _vm.shouldDisplay
    ? _c("div", [
        _c(
          "div",
          {
            staticClass: "booking",
            style: _vm.getTimeHeightStyle(
              _vm.booking.start_date,
              _vm.booking.end_date
            ),
            on: { click: _vm.selectBooking }
          },
          [
            _c("div", [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.formatTime(_vm.booking.start_date)) +
                  " - " +
                  _vm._s(_vm.formatTime(_vm.booking.end_date)) +
                  "\n        "
              )
            ]),
            _vm._v(" "),
            _vm.shouldDisplaySubject
              ? _c("div", [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.booking.subject) +
                      "\n        "
                  )
                ])
              : _vm._e()
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-473e0401", module.exports)
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

/***/ "./resources/assets/js/app/room/components/Booking.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/app/room/components/Booking.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-473e0401\",\"hasScoped\":false}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/app/room/components/Booking.vue")
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
Component.options.__file = "resources/assets/js/app/room/components/Booking.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Booking.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-473e0401", Component.options)
  } else {
    hotAPI.reload("data-v-473e0401", Component.options)
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var get = function get(_ref, room) {
    _objectDestructuringEmpty(_ref);

    Vue.request().get('/api/rooms/' + room + '/events', 'rooms/events/setAll');
};

var create = function create(_ref2, data) {
    _objectDestructuringEmpty(_ref2);

    Vue.request(data).post('/api/rooms/' + data.room + '/events', 'rooms/events/add');
};

var update = function update(_ref3, data) {
    _objectDestructuringEmpty(_ref3);

    Vue.request(data).put('/api/rooms/' + data.room + '/events/' + data.event, 'rooms/events/update');
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
/* WEBPACK VAR INJECTION */(function(Vue, _) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
var setAll = function setAll(state, _ref) {
    var response = _ref.response;

    Vue.set(state, 'events', response);
};

var set = function set(state, booking) {
    Vue.set(state, 'event', booking);
};

var add = function add(state, _ref2) {
    var response = _ref2.response;

    state.events.push(response);
};

var update = function update(state, _ref3) {
    var response = _ref3.response;

    var bookingKey = _.findKey(state.events, { id: response.id });
    if (bookingKey) {
        Vue.set(state.events, bookingKey, response);
    }
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/vue/dist/vue.common.js"), __webpack_require__("./node_modules/lodash/lodash.js")))

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
/* WEBPACK VAR INJECTION */(function(Vue) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAll", function() { return setAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
var set = function set(state, _ref) {
    var response = _ref.response;

    Vue.set(state, 'room', response);
};

var setAll = function setAll(state, _ref2) {
    var response = _ref2.response;

    Vue.set(state, 'rooms', response);
};

var add = function add(state, _ref3) {
    var response = _ref3.response;

    state.rooms.push(response);
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/vue/dist/vue.common.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vUm9vbXMudnVlIiwid2VicGFjazovLy9Sb29tLnZ1ZSIsIndlYnBhY2s6Ly8vQm9va2luZy52dWUiLCJ3ZWJwYWNrOi8vL0Jvb2tpbmdBdHRlbmRlZXMudnVlIiwid2VicGFjazovLy9DYWxlbmRhci52dWUiLCJ3ZWJwYWNrOi8vL0NsaXBib2FyZC52dWUiLCJ3ZWJwYWNrOi8vL05hdmlnYXRpb24udnVlIiwid2VicGFjazovLy9Ob3RpZmljYXRpb24udnVlIiwid2VicGFjazovLy9Ob3RpZmljYXRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vVGltZUFnby52dWUiLCJ3ZWJwYWNrOi8vL1Rvb2xUaXAudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWU/ZmIyMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlP2Y2N2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlPzBkM2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlP2FmYWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZT8wMjU1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1Jvb21zLnZ1ZT9mNTQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlP2E1MTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0Jvb2tpbmcudnVlPzhiNTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWU/ODc2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWU/Y2I0NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlP2MzM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlPzc3ZmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvRGFzaGJvYXJkLnZ1ZT9mMTUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlPzRjMmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9EYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1Jvb21zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL0Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NsYXNzZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NsYXNzZXMvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DbGlwYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VOb3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub29sVGlwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXJvdXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvZGF0ZS10aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvZW52aXJvbm1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9ub3RpZmljYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvcGVybWlzc2lvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvYXV0aC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tb2R1bGVzL3Jvb21zL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tb2R1bGVzL2V2ZW50cy9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc3lzdGVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJzdG9yZSIsIlZ1ZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJhcHAiLCJyb3V0ZXIiLCIkbW91bnQiLCJwYXRoIiwiY29tcG9uZW50IiwiY2hpbGRyZW4iLCJuYW1lIiwibGFyb3V0ZSIsIm1vbWVudCIsInR6Iiwic2V0RGVmYXVsdCIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJOUHJvZ3Jlc3MiLCJjb25maWd1cmUiLCJlYXNpbmciLCJzcGVlZCIsInNob3dTcGlubmVyIiwic3RhcnQiLCJpbmMiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRvbmUiLCJQdXNoZXIiLCJsb2ciLCJFY2hvIiwiY2x1c3RlciIsImJyb2FkY2FzdGVyIiwia2V5IiwicHVzaGVyS2V5IiwiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJGb3JtIiwib3JpZ2luYWxEYXRhIiwiY2xlYXIiLCJlbXB0eURhdGEiLCJkYXRhIiwicmVzZXREYXRhIiwicmVzZXQiLCJfIiwicmVkdWNlIiwicmVzdWx0IiwidmFsdWUiLCJpc0VxdWFsIiwiY29uY2F0IiwiUmVxdWVzdCIsImlzT2JqZWN0IiwiRm9ybURhdGEiLCJmb3JtRGF0YSIsImFzc2lnbiIsInVybCIsIm11dGF0aW9ucyIsInN1Ym1pdCIsImRhdGFRdWVyeVN0cmluZyIsInJlcXVlc3RUeXBlIiwicmVzb2x2ZSIsInRoZW4iLCJvblN1Y2Nlc3MiLCJpc1N0cmluZyIsImVhY2giLCIkc3RvcmUiLCJjb21taXQiLCJtdXRhdGlvbiIsInJlcXVlc3REYXRhIiwic2V0T3JpZ2luYWxEYXRhIiwiY2F0Y2giLCJoYW5kbGVBcGlFcnJvciIsIm9uRmFpbCIsImNvbnNvbGUiLCJyZWNvcmQiLCJzdHIiLCJkYXR1bSIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicm91dGVzIiwiYWJzb2x1dGUiLCJyb290VXJsIiwicHJlZml4Iiwicm91dGUiLCJwYXJhbWV0ZXJzIiwiZ2V0QnlOYW1lIiwidW5kZWZpbmVkIiwidG9Sb3V0ZSIsInVyaSIsImdldENvcnJlY3RVcmwiLCJyZXBsYWNlTmFtZWRQYXJhbWV0ZXJzIiwicXMiLCJnZXRSb3V0ZVF1ZXJ5U3RyaW5nIiwiaXNPdGhlckhvc3QiLCJob3N0IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInJlcGxhY2UiLCJtYXRjaCIsImdldEJ5QWN0aW9uIiwiYWN0aW9uIiwiZ2V0TGlua0F0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJnZXRIdG1sTGluayIsInRpdGxlIiwibGlua190byIsImxpbmtfdG9fcm91dGUiLCJsaW5rX3RvX2FjdGlvbiIsImNhbGwiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwibm93IiwiZ3Vlc3MiLCJwYXJzZURhdGUiLCJkYXRlIiwiaHVtYW5pemVEaWZmIiwiZGF0ZTEiLCJkYXRlMiIsImR1cmF0aW9uIiwiZGlmZiIsImh1bWFuaXplIiwiZm9ybWF0VGltZSIsImZvcm1hdCIsImdldFRpbWVIZWlnaHRTdHlsZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzdGFydERhdGVQYXJzZWQiLCJzdGFydEVNIiwicGFyc2VJbnQiLCJlbmREYXRlUGFyc2VkIiwiZW5kRW0iLCJsb2NhbCIsImVudiIsImdldEZvcm1EYXRhIiwiZm9ybSIsIiQiLCJpcyIsImZpbmQiLCJjcmVhdGVGb3JtIiwibWl4aW4iLCJtZXRob2RzIiwiYmFjayIsInNob3dFcnJvciIsInNob3dTdWNjZXNzIiwiY29tcHV0ZWQiLCJpc0FkbWluIiwibWVzc2FnZSIsInRpbWVvdXQiLCJkaXNwYXRjaCIsImlzRW1wdHkiLCJ0ZXh0IiwiY2xhc3MiLCJpc1NldCIsIndhcm4iLCJoaXN0b3J5IiwiVnVlUm91dGVyIiwibW9kZSIsIlZ1ZXgiLCJTdG9yZSIsIm1vZHVsZXMiLCJsb2dvdXQiLCJjb250ZXh0IiwicG9zdCIsInN0YXRlIiwiYWN0aW9ucyIsIm5hbWVzcGFjZWQiLCJhdXRoIiwicm9vbXMiLCJzeXN0ZW0iLCJwcm92aWRlcnMiLCJub3RpZmljYXRpb25zIiwiYWRkIiwibm90aWZpY2F0aW9uIiwicmVtb3ZlIiwid2l0aG91dCIsImdldCIsInByb3ZpZGVyIiwicm9vbSIsIiRyb3V0ZXIiLCJpZCIsInNldEFsbCIsInNob3ciLCJldmVudHMiLCJjcmVhdGUiLCJ1cGRhdGUiLCJwdXQiLCJldmVudCIsInNldCIsImJvb2tpbmciLCJib29raW5nS2V5IiwiZmluZEtleSIsInNldFZlcnNpb24iLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO2dDQUVBOzZCQUNBOzZCQUNBO0FBQ0E7OztnQ0FFQTsyQ0FDQTtBQUNBO3dDQUNBOytDQUNBO0FBRUE7QUFQQTtBQUxBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtnQ0FFQTt1RUFDQTtBQUNBOzs7OENBRUE7OzJCQUVBOzJCQUNBOzZDQUVBO0FBSkE7QUFNQTtBQVJBOztnQ0FVQTtxREFDQTtBQUVBO0FBSkE7QUFiQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJFQTtBQUNBOztBQUVBOztBQUdBO0FBRUE7QUFIQTs7QUFJQTs7OERBQ0E7aUVBQ0E7MEVBQ0E7b0JBQ0E7b0VBQ0E7QUFDQTs7OzZDQUVBOzt5QkFFQTt5Q0FFQTtBQUhBO0FBSUE7b0NBQ0E7MENBQ0E7bUNBQ0E7O21DQUVBO2lDQUNBOzZDQUNBO2tHQUNBO2dDQUVBO0FBTkE7QUFPQTtBQUNBOzBDQUNBOzswQkFFQTt5Q0FDQTsyQ0FDQTsyQ0FFQTtBQUxBO0FBT0E7QUEzQkE7OzhCQTZCQTsyQ0FDQTtBQUNBOzREQUNBO3lEQUNBO3dFQUNBO0FBQ0E7QUFDQTs0Q0FDQTttQ0FDQTtBQUNBO29EQUNBO2lFQUNBO2tDQUNBOzRCQUNBO0FBQ0E7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O0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLHVCQUF1QixxQkFBcUIsRUFBRTtBQUNqRDtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0EsdUNBQXVDLGlCQUFpQixFQUFFO0FBQzFELEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUEsNEJBQTRCLHdCQUF3Qjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsMEJBQTBCO0FBQzFCLEdBQUc7O0FBRUg7QUFDQSwwQkFBMEI7QUFDMUIsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFFBQVE7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsaUJBQWlCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QixLQUFELFNBQXlCO0FBQUEsUUFBZmpKLFFBQWUsU0FBZkEsUUFBZTs7QUFDM0NqQyxRQUFJME0sR0FBSixDQUFReEIsS0FBUixFQUFlLE9BQWYsRUFBd0JqSixRQUF4QjtBQUNILENBRk07O0FBSUEsSUFBTXlKLE1BQU0sU0FBTkEsR0FBTSxDQUFDUixLQUFELFNBQXlCO0FBQUEsUUFBZmpKLFFBQWUsU0FBZkEsUUFBZTs7QUFDeENpSixVQUFNSSxLQUFOLENBQVk3RixJQUFaLENBQWlCeEQsUUFBakI7QUFDSCxDQUZNLEM7Ozs7Ozs7OztBQ1JQLHlEQUFlO0FBQ2IrSixRQUFNLElBRE87QUFFYlYsU0FBUTtBQUZLLENBQWYsRTs7Ozs7Ozs7OztBQ0FPLElBQU13QixhQUFhLFNBQWJBLFVBQWEsT0FBYXpKLElBQWIsRUFBc0I7QUFBQSxNQUFuQnlCLE1BQW1CLFFBQW5CQSxNQUFtQjs7QUFDOUNBLFNBQU8sWUFBUCxFQUFxQnpCLEtBQUswSixPQUExQjtBQUNELENBRk0sQzs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBQ0E7O0FBRUEseURBQWU7QUFDYjdCLFNBQUEsdURBRGE7QUFFYkMsV0FBQSxzQ0FGYTtBQUdiL0csYUFBQSx3Q0FIYTtBQUliZ0gsY0FBWTtBQUpDLENBQWYsRTs7Ozs7Ozs7OztBQ0pPLElBQU0wQixhQUFhLFNBQWJBLFVBQWEsQ0FBQzVCLEtBQUQsRUFBUTZCLE9BQVIsRUFBb0I7QUFDNUM3QixRQUFNNkIsT0FBTixHQUFnQkEsT0FBaEI7QUFDRCxDQUZNLEM7Ozs7Ozs7O0FDQVAseURBQWU7QUFDYkEsV0FBUzdMLFFBQVE2TDtBQURKLENBQWYsRTs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICBMZXRzIGNvbm5lY3QgeW91ciBmaXJzdCBwcm92aWRlclxuXG4gICAgICAgIDxhIGhyZWY9XCIvcHJvdmlkZXIvb2ZmaWNlMzY1L2xpbmtcIj5PZmZpY2UgMzY1PC9hPlxuICAgICAgICA8YSBocmVmPVwiL3Byb3ZpZGVyL2dzdWl0ZS9saW5rXCI+R1N1aXRlPC9hPlxuXG4gICAgICAgIDxoMz5Db25uZWN0ZWQgQWNjb3VudHM8L2gzPlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJwcm92aWRlciBpbiBwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAncHJvdmlkZXJfcm9vbXMnLCBwYXJhbXMgOiB7IHByb3ZpZGVyIDogcHJvdmlkZXIuaWQgfX1cIj5cbiAgICAgICAgICAgICAgICB7eyBwcm92aWRlci5lbWFpbCB9fSBbe3sgcHJvdmlkZXIucHJvdmlkZXIgfX1dXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxoMz5Sb29tczwvaDM+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInJvb20gaW4gcm9vbXNcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdyb29tJywgcGFyYW1zIDogeyByb29tIDogcm9vbS5pZCB9fVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyByb29tLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3Jvb21zL2dldCcpXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncHJvdmlkZXJzL2dldCcpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkIDoge1xuICAgICAgICAgICAgcm9vbXMoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5yb29tcy5yb29tcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm92aWRlcnMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnByb3ZpZGVycy5wcm92aWRlcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBEYXNoYm9hcmQudnVlP2Q2MTNhN2ZhIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5BdmFpbGFibGUgUm9vbXM8L2gzPlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJyb29tIGluIHJvb21zXCI+XG4gICAgICAgICAgICA8ZGl2IEBjbGljaz1cImNyZWF0ZVJvb20ocm9vbSlcIj5cbiAgICAgICAgICAgICAgICB7eyByb29tLm5hbWUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncHJvdmlkZXJzL3Jvb21zL2dldCcsIHRoaXMuJHJvdXRlLnBhcmFtcy5wcm92aWRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHMgOiB7XG4gICAgICAgICAgICBjcmVhdGVSb29tKHJvb20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncHJvdmlkZXJzL3Jvb21zL3N0b3JlJywge1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogcm9vbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICByb29tIDogcm9vbS5yb29tLFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA6IHRoaXMuJHJvdXRlLnBhcmFtcy5wcm92aWRlclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkIDoge1xuICAgICAgICAgICAgcm9vbXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnByb3ZpZGVycy5yb29tcy5yb29tcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSb29tcy52dWU/ZjEwNTdiOWEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBpZD1cInJvb21cIiB2LWlmPVwicm9vbVwiPlxuICAgICAgICA8ZGl2IGlkPVwicm9vbS1jb250ZW50XCI+XG5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJyb29tLWhlYWRlciBsZXZlbFwiIDpjbGFzcz1cInsgYm9va2VkIDogY3VycmVudEJvb2tpbmcgLCBmcmVlIDogIWN1cnJlbnRCb29raW5nfVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gTGVmdCBzaWRlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57eyByb29tLm5hbWUgfX08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gUmlnaHQgc2lkZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7IGN1cnJlbnREYXRlIH19PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8IS0tY29udGVudCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIHJvb20tZGV0YWlsc1wiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYWxlbmRhci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29raW5nLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjdXJyZW50Qm9va2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Cb29rZWQgdW50aWwge3sgZm9ybWF0VGltZShjdXJyZW50Qm9va2luZy5lbmRfZGF0ZSkgfX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJuZXh0Qm9va2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Cb29rZWQgaW4ge3sgaHVtYW5pemVEaWZmKG5vdygpLCBwYXJzZURhdGUobmV4dEJvb2tpbmcuc3RhcnRfZGF0ZSkpIH19IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+RnJlZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGNhbGVuZGFyPjwvY2FsZW5kYXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIHRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCIgIHYtaWY9XCJzZWxlY3RlZEJvb2tpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDEwIFNlYXRzLCBUViA6IEhETUkgPC0tIFRPRE9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzZWxlY3RlZEJvb2tpbmcuc3ViamVjdCB9fTxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3sgZm9ybWF0VGltZShzZWxlY3RlZEJvb2tpbmcuc3RhcnRfZGF0ZSkgfX0gLSB7eyBmb3JtYXRUaW1lKHNlbGVjdGVkQm9va2luZy5lbmRfZGF0ZSkgfX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxib29raW5nLWF0dGVuZGVlcyA6Ym9va2luZz1cInNlbGVjdGVkQm9va2luZ1wiPjwvYm9va2luZy1hdHRlbmRlZXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48YnI+PGJyPjxicj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjdXJyZW50Qm9va2luZyA9PSBzZWxlY3RlZEJvb2tpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiZW5kQm9va2luZ1wiPkVuZCBCb29raW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb29tLWZvb3RlclwiIDpjbGFzcz1cInsgYm9va2VkIDogY3VycmVudEJvb2tpbmcgLCBmcmVlIDogIWN1cnJlbnRCb29raW5nfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIExlZnQgc2lkZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjaGVja2luZ0ludG9Cb29raW5nICYmICFjaGVja2luZ0ludG9Cb29raW5nLmNoZWNrZWRfaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImNoZWNrSW4oKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgSW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFJpZ2h0IHNpZGUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhY3VycmVudEJvb2tpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vay1yb29tLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb29rPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImJvb2tSb29tKDE1KVwiPjE1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImJvb2tSb29tKDMwKVwiPjMwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImJvb2tSb29tKDQ1KVwiPjQ1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImJvb2tSb29tKDYwKVwiPjYwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGV2ZWwtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmQgQW5vdGhlciBzcGFjZSA8LS0gVE9ET1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY29tcG9uZW50cy9DYWxlbmRhci52dWUnO1xuICAgIGltcG9ydCBCb29raW5nQXR0ZW5kZWVzIGZyb20gJy4vY29tcG9uZW50cy9Cb29raW5nQXR0ZW5kZWVzLnZ1ZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHMgOiB7XG4gICAgICAgICAgICBDYWxlbmRhcixcbiAgICAgICAgICAgIEJvb2tpbmdBdHRlbmRlZXMsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncm9vbXMvc2hvdycsIHRoaXMuJHJvdXRlLnBhcmFtcy5yb29tKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWVTY3JvbGxJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncm9vbXMvZXZlbnRzL2dldCcsIHRoaXMuJHJvdXRlLnBhcmFtcy5yb29tKVxuICAgICAgICAgICAgfSwgKCg1ICogNjApICogMTAwMCkpO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3Jvb21zL2V2ZW50cy9nZXQnLCB0aGlzLiRyb3V0ZS5wYXJhbXMucm9vbSlcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kcyA6IHtcbiAgICAgICAgICAgIGJvb2tSb29tKG1pbnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncm9vbXMvZXZlbnRzL2NyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA6IG1pbnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgIHJvb20gOiB0aGlzLiRyb3V0ZS5wYXJhbXMucm9vbSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrSW4oKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja2luZ0ludG9Cb29raW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib29raW5nID0gdGhpcy5jaGVja2luZ0ludG9Cb29raW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncm9vbXMvZXZlbnRzL3VwZGF0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50IDogYm9va2luZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA6IGJvb2tpbmcuZW5kX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICByb29tIDogdGhpcy4kcm91dGUucGFyYW1zLnJvb20sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA6IHRoaXMubm93KCkgPCB0aGlzLnBhcnNlRGF0ZShib29raW5nLnN0YXJ0X2RhdGUpID8gdGhpcy5ub3coKSA6IGJvb2tpbmcuc3RhcnRfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRfaW4gOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRCb29raW5nKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdyb29tcy9ldmVudHMvdXBkYXRlJywge1xuICAgICAgICAgICAgICAgICAgICBlbmQgOiB0aGlzLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICByb29tIDogdGhpcy4kcm91dGUucGFyYW1zLnJvb20sXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50IDogdGhpcy5jdXJyZW50Qm9va2luZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgOiB0aGlzLmN1cnJlbnRCb29raW5nLnN0YXJ0X2RhdGUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICByb29tKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5yb29tcy5yb29tO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNraW5nSW50b0Jvb2tpbmcoKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50Qm9va2luZyB8fCB0aGlzLm5leHRCb29raW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRCb29raW5nID8gdGhpcy5jdXJyZW50Qm9va2luZyA6IHRoaXMubmV4dEJvb2tpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbnREYXRlKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KCkuZm9ybWF0KCdsbCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRCb29raW5nKCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEJvb2tpbmcgPSB0aGlzLiRzdG9yZS5zdGF0ZS5yb29tcy5ldmVudHMuZXZlbnQ7XG4gICAgICAgICAgICAgICAgaWYoIXNlbGVjdGVkQm9va2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0Qm9va2luZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRCb29raW5nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9va2luZ3MoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnJvb21zLmV2ZW50cy5ldmVudHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VycmVudEJvb2tpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLmJvb2tpbmdzLCAoYm9va2luZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURhdGUoYm9va2luZy5zdGFydF9kYXRlKS5pc0JlZm9yZSh0aGlzLm5vdygpKSAmJiB0aGlzLnBhcnNlRGF0ZShib29raW5nLmVuZF9kYXRlKS5pc0FmdGVyKHRoaXMubm93KCkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dEJvb2tpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLmJvb2tpbmdzLCAoYm9va2luZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURhdGUoYm9va2luZy5zdGFydF9kYXRlKS5pc0FmdGVyKHRoaXMubm93KCkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUm9vbS52dWU/NTc4ZWQ4ODYiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwiYm9va2luZyAmJiBzaG91bGREaXNwbGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib29raW5nXCIgOnN0eWxlPVwiZ2V0VGltZUhlaWdodFN0eWxlKGJvb2tpbmcuc3RhcnRfZGF0ZSwgYm9va2luZy5lbmRfZGF0ZSlcIiBAY2xpY2s9XCJzZWxlY3RCb29raW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt7IGZvcm1hdFRpbWUoYm9va2luZy5zdGFydF9kYXRlKSB9fSAtIHt7IGZvcm1hdFRpbWUoYm9va2luZy5lbmRfZGF0ZSkgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwic2hvdWxkRGlzcGxheVN1YmplY3RcIj5cbiAgICAgICAgICAgICAgICB7eyBib29raW5nLnN1YmplY3QgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgIHByb3BzIDogWydib29raW5nJ10sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNlbGVjdEJvb2tpbmcoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdyb29tcy9ldmVudHMvc2V0JywgdGhpcy5ib29raW5nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgdGltZURpZmZlcmVuY2UoKSB7XG4gICAgICAgICAgICAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKHRoaXMucGFyc2VEYXRlKHRoaXMuYm9va2luZy5lbmRfZGF0ZSkuZGlmZih0aGlzLnBhcnNlRGF0ZSh0aGlzLmJvb2tpbmcuc3RhcnRfZGF0ZSkpKS5hc01pbnV0ZXMoKVxuICAgICAgICAgICB9LFxuICAgICAgICAgICBzaG91bGREaXNwbGF5KCkge1xuICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZURpZmZlcmVuY2UgPj0gNTtcblxuICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvdWxkRGlzcGxheVN1YmplY3QoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZURpZmZlcmVuY2UgPj0gMzA7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEJvb2tpbmcudnVlPzNlYmU4MWIzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgdi1pZj1cImJvb2tpbmdcIiBjbGFzcz1cImF0dGVuZGVlc1wiPlxuICAgICAgICA8aDM+QXR0ZW5kZWVzPC9oMz5cbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiYXR0ZW5kZWUgaW4gYm9va2luZy5hdHRlbmRlZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdHRlbmRlZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXR0ZW5kZWUtc3RhdHVzXCIgOmNsYXNzPVwiYXR0ZW5kZWUuc3RhdHVzXCI+e3sgYXR0ZW5kZWUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgcHJvcHMgOiBbJ2Jvb2tpbmcnXVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBCb29raW5nQXR0ZW5kZWVzLnZ1ZT9mNWRlOTZiNiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIiByZWY9XCJjYWxlbmRhclwiIEBzY3JvbGw9XCJzZXRTY3JvbGxUaW1lb3V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3VyLWNvbnRhaW5lclwiIHYtZm9yPVwiaG91ciBpbiBob3Vyc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhvdXJcIj57eyBob3VyLmRpc3BsYXkgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImJvb2tpbmcgaW4gYm9va2luZ3NcIj5cbiAgICAgICAgICAgIDxib29raW5nIDpib29raW5nPVwiYm9va2luZ1wiPjwvYm9va2luZz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHNwYW4gOnN0eWxlPVwiY3VycmVudFRpbWVTdHlsZVwiIGNsYXNzPVwiY3VycmVudC10aW1lLWNvbnRhaW5lclwiIHJlZj1cImN1cnJlbnQtdGltZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3VycmVudC10aW1lXCI+e3sgY3VycmVudFRpbWUgfX08L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEJvb2tpbmcgZnJvbSAnLi8uLi9jb21wb25lbnRzL0Jvb2tpbmcudnVlJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICBCb29raW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICBsZXQgaG91ciA9IDA7XG4gICAgICAgICAgICB3aGlsZShob3VyIDwgMjQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheScgOiBtb21lbnQoaG91ciwgJ0gnKS5mb3JtYXQoJ2ggQScpLFxuICAgICAgICAgICAgICAgICAgICAnZXZlbnRzJyA6IFtdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaG91cisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFRpbWVTdHlsZXMoKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgdGhpcy5nZXRDdXJyZW50VGltZVN0eWxlcygpO1xuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICB0aGlzLnNjcm9sbFRvQ3VycmVudFRpbWUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaG91cnMgOiBbXSxcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWVTdHlsZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWVTY3JvbGxJbnRlcnZhbCA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kcyA6IHtcbiAgICAgICAgICAgIHNldFNjcm9sbFRpbWVvdXQoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY3VycmVudFRpbWVTY3JvbGxJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZVNjcm9sbEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvQ3VycmVudFRpbWUoKTtcbiAgICAgICAgICAgICAgICB9LCAoMTUgKiAxMDAwKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0T2Zmc2V0KGVsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCwgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsVG9DdXJyZW50VGltZSgpIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlLXJvdXRlci9pc3N1ZXMvMTczXG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIGFuaW1hdGUgaXRcbiAgICAgICAgICAgICAgICBsZXQgY2FsZW5kYXIgPSB0aGlzLiRyZWZzLmNhbGVuZGFyXG4gICAgICAgICAgICAgICAgY2FsZW5kYXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgY2FsZW5kYXJPZmZzZXRzID0gdGhpcy5nZXRPZmZzZXQoY2FsZW5kYXIpXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUaW1lT2Zmc2V0cyA9IHRoaXMuZ2V0T2Zmc2V0KHRoaXMuJHJlZnNbJ2N1cnJlbnQtdGltZS1jb250YWluZXInXSk7XG4gICAgICAgICAgICAgICAgY2FsZW5kYXIuc2Nyb2xsVG9wID0gKGN1cnJlbnRUaW1lT2Zmc2V0cy50b3AgLSBjYWxlbmRhck9mZnNldHMudG9wKSAtIDEyNTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDdXJyZW50VGltZVN0eWxlcygpIHtcbiAgICAgICAgICAgICAgICBsZXQgbm93ID0gdGhpcy5ub3coKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRFTSA9ICgoKChub3cuZm9ybWF0KCdISCcpICogNjApICsgcGFyc2VJbnQobm93LmZvcm1hdCgnbW0nKSkpKSAqIDYpIC8gNjA7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IG5vdy5mb3JtYXQoJ2g6bW0gQScpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWVTdHlsZSA9ICBgdG9wOiR7c3RhcnRFTSB9ZW07YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQgOiB7XG4gICAgICAgICAgICBib29raW5ncygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUucm9vbXMuZXZlbnRzLmV2ZW50cztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2FsZW5kYXIudnVlP2ExZmI2NTE4IiwiPHRlbXBsYXRlPlxuICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1zbWFsbCBjbGlwYm9hcmRcIiA6ZGF0YS1jbGlwYm9hcmQtdGV4dD1cImRhdGFcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWNsaXBib2FyZFwiPjwvc3Bhbj5cbiAgICA8L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGE6IFN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkICgpIHtcbiAgICAgICAgICAgIG5ldyBDbGlwYm9hcmQoJy5jbGlwYm9hcmQnLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGhpcy5kYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2xpcGJvYXJkLnZ1ZT81YjJhM2EyMyIsIjx0ZW1wbGF0ZT5cbiAgICA8aGVhZGVyPlxuICAgICAgICA8bm90aWZpY2F0aW9ucz48L25vdGlmaWNhdGlvbnM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICAgIFNwYWNlIFBhZFxuICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHNlY3Rpb24gdi1pZj1cImN1cnJlbnRfdmVyc2lvbiAhPT0gIHZlcnNpb25cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgSGVsbG8sIFdlJ3ZlIGdvdCBhIG5ldyB2ZXJzaW9uIG9mIFNwYWNlUGFkIHJlYWR5IGZvciB5b3UuIDxhIGhyZWY9XCJcIj5SZWZyZXNoIG5vdzwvYT4gdG8gbWFrZSBpdCB5b3Vycy5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC9oZWFkZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gICAgaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi9Ob3RpZmljYXRpb25zLnZ1ZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgTm90aWZpY2F0aW9uc1xuICAgICAgICB9LFxuICAgICAgICBkYXRhICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY3VycmVudF92ZXJzaW9uOiBMYXJhdmVsLnZlcnNpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQgOiB7XG4gICAgICAgICAgICB2ZXJzaW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuc3lzdGVtLnZlcnNpb25cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBOYXZpZ2F0aW9uLnZ1ZT8xNjYwYTQ0NCIsIjx0ZW1wbGF0ZT5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uXCIgOmNsYXNzPVwibm90aWZpY2F0aW9uLmNsYXNzXCI+XG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImNsb3NlKG5vdGlmaWNhdGlvbilcIiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1jbG9zZVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJub3RpZmljYXRpb24taGVhZGluZ1wiIHYtaWY9XCJub3RpZmljYXRpb24udGl0bGVcIj57e25vdGlmaWNhdGlvbi50aXRsZX19PC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb24tdGV4dFwiIHYtaHRtbD1cIm5vdGlmaWNhdGlvbi50ZXh0XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IFsnbm90aWZpY2F0aW9uJ10sXG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0aW1lcjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLm5vdGlmaWNhdGlvbi5oYXNPd25Qcm9wZXJ0eSgndGltZW91dCcpID8gdGhpcy5ub3RpZmljYXRpb24udGltZW91dCA6IHRydWVcbiAgICAgICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKHRoaXMubm90aWZpY2F0aW9uKVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgdGhpcy5ub3RpZmljYXRpb24udGltZW91dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcilcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbm90aWZpY2F0aW9ucy9yZW1vdmUnLCBub3RpZmljYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBOb3RpZmljYXRpb24udnVlP2ZkMDFiMTQ4IiwiPHRlbXBsYXRlIGlkPVwibm90aWZpY2F0aW9uc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICAgIDxub3RpZmljYXRpb25cbiAgICAgICAgICAgIHYtZm9yPVwiKG5vdGlmaWNhdGlvbiwgaW5kZXgpIGluIG5vdGlmaWNhdGlvbnNcIlxuICAgICAgICAgICAgOm5vdGlmaWNhdGlvbj1cIm5vdGlmaWNhdGlvblwiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICA+XG4gICAgICAgIDwvbm90aWZpY2F0aW9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vTm90aWZpY2F0aW9uLnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgTm90aWZpY2F0aW9uXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBub3RpZmljYXRpb25zICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUubm90aWZpY2F0aW9ucy5ub3RpZmljYXRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHJlbW92ZU5vdGlmaWNhdGlvbjogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdub3RpZmljYXRpb25zL3JlbW92ZScsIG5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE5vdGlmaWNhdGlvbnMudnVlP2Y3YzUyZjY2IiwiPHRlbXBsYXRlPlxuICAgIDxzcGFuPiB7eyB0ZXh0IH19IDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdGltZToge31cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRUaW1lKClcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICB9LCA2MDAwMClcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICB0aW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50VGltZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHVwZGF0ZSAoKSB7XG4gICAgICAgICAgICAgICAgVnVlLnNldCh0aGlzLmN1cnJlbnRUaW1lLCB0aGlzLmN1cnJlbnRUaW1lLmFkZCgtMSwgJ21pbnV0ZScpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEN1cnJlbnRUaW1lICgpIHtcblxuICAgICAgICAgICAgICAgIGxldCB0aW1lID0gdGhpcy50aW1lXG5cbiAgICAgICAgICAgICAgICBpZighbW9tZW50LmlzTW9tZW50KHRpbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLnBhcnNlRGF0ZSh0aW1lKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0ZXh0ICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZyb21Ob3coKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3V0ZScsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ2FnbycsICcnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFRpbWVBZ28udnVlPzM2MTBhZDI5IiwiPHRlbXBsYXRlPlxuICAgIDxzcGFuXG4gICAgICAgIDpjbGFzcz1cIltcbiAgICAgICAgJ2hpbnQtLScrdHlwZSxcbiAgICAgICAgJ2hpbnQtLScrc2l6ZSxcbiAgICAgICAgJ2hpbnQtLScrcGxhY2VtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgICAnaGludC0tcm91bmRlZCc6IHRoaXMucm91bmRlZCxcbiAgICAgICAgICAgICdoaW50LS1hbHdheXMnOiB0aGlzLmFsd2F5cyxcbiAgICAgICAgICAgICdoaW50LS1uby1hbmltYXRlJzogdGhpcy5ub0FuaW1hdGVcbiAgICAgICAgfV1cIlxuICAgICAgICA6YXJpYS1sYWJlbD1cIm1lc3NhZ2VcIlxuICAgID5cbiAgICAgICAge3sgdHlwZSB9fVxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBzaXplOiBTdHJpbmcsXG4gICAgICAgICAgICBhbHdheXM6IEJvb2xlYW4sXG4gICAgICAgICAgICByb3VuZGVkOiBCb29sZWFuLFxuICAgICAgICAgICAgbm9BbmltYXRlOiBCb29sZWFuLFxuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlbWVudDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAndG9wJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVG9vbFRpcC52dWU/MjBkYzg2MTciLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gdGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICB2YXIgZnVuY3Rpb25hbCA9IG9wdGlvbnMuZnVuY3Rpb25hbFxuICAgIHZhciBleGlzdGluZyA9IGZ1bmN0aW9uYWxcbiAgICAgID8gb3B0aW9ucy5yZW5kZXJcbiAgICAgIDogb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBleGlzdGluZyhoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uYm9va2luZ1xuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXR0ZW5kZWVzXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkF0dGVuZGVlc1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5ib29raW5nLmF0dGVuZGVlcywgZnVuY3Rpb24oYXR0ZW5kZWUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXR0ZW5kZWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXR0ZW5kZWUtc3RhdHVzXCIsIGNsYXNzOiBhdHRlbmRlZS5zdGF0dXMgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGF0dGVuZGVlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTAyZjhiZGE4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wMmY4YmRhOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nQXR0ZW5kZWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wMmY4YmRhOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nQXR0ZW5kZWVzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5yb29tXG4gICAgPyBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInJvb21cIiB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJyb29tLWNvbnRlbnRcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibmF2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvb20taGVhZGVyIGxldmVsXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IGJvb2tlZDogX3ZtLmN1cnJlbnRCb29raW5nLCBmcmVlOiAhX3ZtLmN1cnJlbnRCb29raW5nIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5yb29tLm5hbWUpKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLmN1cnJlbnREYXRlKSldKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgcm9vbS1kZXRhaWxzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGNhbGVuZGFyLXdyYXBwZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib29raW5nLXN0YXR1c1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50Qm9va2luZ1xuICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJvb2tlZCB1bnRpbCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0VGltZShfdm0uY3VycmVudEJvb2tpbmcuZW5kX2RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0ubmV4dEJvb2tpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJvb2tlZCBpbiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmh1bWFuaXplRGlmZihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFyc2VEYXRlKF92bS5uZXh0Qm9va2luZy5zdGFydF9kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBbX2MoXCJoMVwiLCBbX3ZtLl92KFwiRnJlZVwiKV0pXVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJjYWxlbmRhclwiKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIHRhYnNcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5zZWxlY3RlZEJvb2tpbmdcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAxMCBTZWF0cywgVFYgOiBIRE1JIDwtLSBUT0RPXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNlbGVjdGVkQm9va2luZy5zdWJqZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzbWFsbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0VGltZShfdm0uc2VsZWN0ZWRCb29raW5nLnN0YXJ0X2RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWUoX3ZtLnNlbGVjdGVkQm9va2luZy5lbmRfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYm9va2luZy1hdHRlbmRlZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYm9va2luZzogX3ZtLnNlbGVjdGVkQm9va2luZyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRCb29raW5nID09IF92bS5zZWxlY3RlZEJvb2tpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZW5kQm9va2luZyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVuZCBCb29raW5nXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm9vbS1mb290ZXJcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgYm9va2VkOiBfdm0uY3VycmVudEJvb2tpbmcsIGZyZWU6ICFfdm0uY3VycmVudEJvb2tpbmcgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGVja2luZ0ludG9Cb29raW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5jaGVja2luZ0ludG9Cb29raW5nLmNoZWNrZWRfaW5cbiAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrSW4oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBJblxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAhX3ZtLmN1cnJlbnRCb29raW5nXG4gICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm9vay1yb29tLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkJvb2tcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ib29rUm9vbSgxNSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiMTVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ib29rUm9vbSgzMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiMzBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ib29rUm9vbSg0NSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiNDVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ib29rUm9vbSg2MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiNjBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5kIEFub3RoZXIgc3BhY2UgPC0tIFRPRE9cXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wNGYxMDRmY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDRmMTA0ZmNcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTA0ZjEwNGZjXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9Sb29tLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiaGVhZGVyXCIsXG4gICAgW1xuICAgICAgX2MoXCJub3RpZmljYXRpb25zXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxvZ28tY29udGFpbmVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBTcGFjZSBQYWRcXG4gICAgICAgIFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmN1cnJlbnRfdmVyc2lvbiAhPT0gX3ZtLnZlcnNpb25cbiAgICAgICAgPyBfYyhcInNlY3Rpb25cIiwgW192bS5fbSgwKV0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlxcbiAgICAgICAgICAgIEhlbGxvLCBXZSd2ZSBnb3QgYSBuZXcgdmVyc2lvbiBvZiBTcGFjZVBhZCByZWFkeSBmb3IgeW91LiBcIlxuICAgICAgKSxcbiAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbX3ZtLl92KFwiUmVmcmVzaCBub3dcIildKSxcbiAgICAgIF92bS5fdihcIiB0byBtYWtlIGl0IHlvdXJzLlxcbiAgICAgICAgXCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTExOGZiNzg4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xMThmYjc4OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xMThmYjc4OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic3BhblwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBbXG4gICAgICAgIFwiaGludC0tXCIgKyBfdm0udHlwZSxcbiAgICAgICAgXCJoaW50LS1cIiArIF92bS5zaXplLFxuICAgICAgICBcImhpbnQtLVwiICsgX3ZtLnBsYWNlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgIFwiaGludC0tcm91bmRlZFwiOiB0aGlzLnJvdW5kZWQsXG4gICAgICAgICAgXCJoaW50LS1hbHdheXNcIjogdGhpcy5hbHdheXMsXG4gICAgICAgICAgXCJoaW50LS1uby1hbmltYXRlXCI6IHRoaXMubm9BbmltYXRlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogX3ZtLm1lc3NhZ2UgfVxuICAgIH0sXG4gICAgW192bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0udHlwZSkgKyBcIlxcbiAgICBcIiksIF92bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTI2MGM5OWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTEyNjBjOTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTEyNjBjOTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICByZWY6IFwiY2FsZW5kYXJcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNhbGVuZGFyXCIsXG4gICAgICBvbjogeyBzY3JvbGw6IF92bS5zZXRTY3JvbGxUaW1lb3V0IH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5fbChfdm0uaG91cnMsIGZ1bmN0aW9uKGhvdXIpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaG91ci1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJob3VyXCIgfSwgW192bS5fdihfdm0uX3MoaG91ci5kaXNwbGF5KSldKVxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5ib29raW5ncywgZnVuY3Rpb24oYm9va2luZykge1xuICAgICAgICByZXR1cm4gW19jKFwiYm9va2luZ1wiLCB7IGF0dHJzOiB7IGJvb2tpbmc6IGJvb2tpbmcgfSB9KV1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJjdXJyZW50LXRpbWUtY29udGFpbmVyXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VycmVudC10aW1lLWNvbnRhaW5lclwiLFxuICAgICAgICAgIHN0eWxlOiBfdm0uY3VycmVudFRpbWVTdHlsZVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY3VycmVudC10aW1lXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY3VycmVudFRpbWUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWQwMzczNDZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFkMDM3MzQ2XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xZDAzNzM0NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9DYWxlbmRhci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkF2YWlsYWJsZSBSb29tc1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0ucm9vbXMsIGZ1bmN0aW9uKHJvb20pIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmNyZWF0ZVJvb20ocm9vbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3Mocm9vbS5uYW1lKSArIFwiXFxuICAgICAgICBcIildXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zY2FiNDAyNVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtM2NhYjQwMjVcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9Sb29tcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtM2NhYjQwMjVcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9Sb29tcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImZhZGVcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvblwiLCBjbGFzczogX3ZtLm5vdGlmaWNhdGlvbi5jbGFzcyB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbi1jbG9zZVwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uY2xvc2UoX3ZtLm5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihcIsOXXCIpXSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5ub3RpZmljYXRpb24udGl0bGVcbiAgICAgICAgPyBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLWhlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5ub3RpZmljYXRpb24udGl0bGUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24tdGV4dFwiLFxuICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ubm90aWZpY2F0aW9uLnRleHQpIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ0NzUyYmRmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NDc1MmJkZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTQ0NzUyYmRmXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uYm9va2luZyAmJiBfdm0uc2hvdWxkRGlzcGxheVxuICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvb2tpbmdcIixcbiAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0VGltZUhlaWdodFN0eWxlKFxuICAgICAgICAgICAgICBfdm0uYm9va2luZy5zdGFydF9kYXRlLFxuICAgICAgICAgICAgICBfdm0uYm9va2luZy5lbmRfZGF0ZVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2VsZWN0Qm9va2luZyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybWF0VGltZShfdm0uYm9va2luZy5zdGFydF9kYXRlKSkgK1xuICAgICAgICAgICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm1hdFRpbWUoX3ZtLmJvb2tpbmcuZW5kX2RhdGUpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnNob3VsZERpc3BsYXlTdWJqZWN0XG4gICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmJvb2tpbmcuc3ViamVjdCkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDczZTA0MDFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ3M2UwNDAxXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0Jvb2tpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTQ3M2UwNDAxXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0Jvb2tpbmcudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJhXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbWFsbCBjbGlwYm9hcmRcIixcbiAgICAgIGF0dHJzOiB7IFwiZGF0YS1jbGlwYm9hcmQtdGV4dFwiOiBfdm0uZGF0YSB9XG4gICAgfSxcbiAgICBbX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1jbGlwYm9hcmRcIiB9KV1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDdjOWE0ZDJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ3YzlhNGQyXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNDdjOWE0ZDJcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2xpcGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb25zXCIgfSxcbiAgICBfdm0uX2woX3ZtLm5vdGlmaWNhdGlvbnMsIGZ1bmN0aW9uKG5vdGlmaWNhdGlvbiwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBfYyhcIm5vdGlmaWNhdGlvblwiLCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGF0dHJzOiB7IG5vdGlmaWNhdGlvbjogbm90aWZpY2F0aW9uIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNGRkYmYxMjRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRkZGJmMTI0XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTRkZGJmMTI0XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW19jKFwibmF2aWdhdGlvblwiKSwgX3ZtLl92KFwiIFwiKSwgX2MoXCJyb3V0ZXItdmlld1wiKV0sIDEpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01ODJlZDc1OVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTgyZWQ3NTlcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTU4MmVkNzU5XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcFNwYWNlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS50ZXh0KSArIFwiIFwiKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02ODY4ZGMzOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjg2OGRjMzhcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVGltZUFnby52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtNjg2OGRjMzhcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVGltZUFnby52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICBMZXRzIGNvbm5lY3QgeW91ciBmaXJzdCBwcm92aWRlclxcblxcbiAgICBcIiksXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9wcm92aWRlci9vZmZpY2UzNjUvbGlua1wiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJPZmZpY2UgMzY1XCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9wcm92aWRlci9nc3VpdGUvbGlua1wiIH0gfSwgW192bS5fdihcIkdTdWl0ZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkNvbm5lY3RlZCBBY2NvdW50c1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0ucHJvdmlkZXJzLCBmdW5jdGlvbihwcm92aWRlcikge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInByb3ZpZGVyX3Jvb21zXCIsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgcHJvdmlkZXI6IHByb3ZpZGVyLmlkIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm92aWRlci5lbWFpbCkgK1xuICAgICAgICAgICAgICAgICAgXCIgW1wiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm92aWRlci5wcm92aWRlcikgK1xuICAgICAgICAgICAgICAgICAgXCJdXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJSb29tc1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0ucm9vbXMsIGZ1bmN0aW9uKHJvb20pIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwicm9vbVwiLCBwYXJhbXM6IHsgcm9vbTogcm9vbS5pZCB9IH0gfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3Mocm9vbS5uYW1lKSArIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi04YzAxZTE3ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOGMwMWUxN2VcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LThjMDFlMTdlXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvRGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJcXG4gICAgU29ycnkgeW91IG11c3QgaGF2ZSB0aGUgd3JvbmcgdXJsXFxuXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTkyNmIzY2RjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05MjZiM2NkY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTkyNmIzY2RjXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VOb3RGb3VuZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXG4gICogdnVlLXJvdXRlciB2Mi43LjBcbiAgKiAoYykgMjAxNyBFdmFuIFlvdVxuICAqIEBsaWNlbnNlIE1JVFxuICAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gYXNzZXJ0IChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKFwiW3Z1ZS1yb3V0ZXJdIFwiICsgbWVzc2FnZSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gd2FybiAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25kaXRpb24pIHtcbiAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0Vycm9yIChlcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlcnIpLmluZGV4T2YoJ0Vycm9yJykgPiAtMVxufVxuXG52YXIgVmlldyA9IHtcbiAgbmFtZTogJ3JvdXRlci12aWV3JyxcbiAgZnVuY3Rpb25hbDogdHJ1ZSxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChfLCByZWYpIHtcbiAgICB2YXIgcHJvcHMgPSByZWYucHJvcHM7XG4gICAgdmFyIGNoaWxkcmVuID0gcmVmLmNoaWxkcmVuO1xuICAgIHZhciBwYXJlbnQgPSByZWYucGFyZW50O1xuICAgIHZhciBkYXRhID0gcmVmLmRhdGE7XG5cbiAgICBkYXRhLnJvdXRlclZpZXcgPSB0cnVlO1xuXG4gICAgLy8gZGlyZWN0bHkgdXNlIHBhcmVudCBjb250ZXh0J3MgY3JlYXRlRWxlbWVudCgpIGZ1bmN0aW9uXG4gICAgLy8gc28gdGhhdCBjb21wb25lbnRzIHJlbmRlcmVkIGJ5IHJvdXRlci12aWV3IGNhbiByZXNvbHZlIG5hbWVkIHNsb3RzXG4gICAgdmFyIGggPSBwYXJlbnQuJGNyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIG5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHZhciByb3V0ZSA9IHBhcmVudC4kcm91dGU7XG4gICAgdmFyIGNhY2hlID0gcGFyZW50Ll9yb3V0ZXJWaWV3Q2FjaGUgfHwgKHBhcmVudC5fcm91dGVyVmlld0NhY2hlID0ge30pO1xuXG4gICAgLy8gZGV0ZXJtaW5lIGN1cnJlbnQgdmlldyBkZXB0aCwgYWxzbyBjaGVjayB0byBzZWUgaWYgdGhlIHRyZWVcbiAgICAvLyBoYXMgYmVlbiB0b2dnbGVkIGluYWN0aXZlIGJ1dCBrZXB0LWFsaXZlLlxuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgdmFyIGluYWN0aXZlID0gZmFsc2U7XG4gICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQuX3JvdXRlclJvb3QgIT09IHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC4kdm5vZGUgJiYgcGFyZW50LiR2bm9kZS5kYXRhLnJvdXRlclZpZXcpIHtcbiAgICAgICAgZGVwdGgrKztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJlbnQuX2luYWN0aXZlKSB7XG4gICAgICAgIGluYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgIH1cbiAgICBkYXRhLnJvdXRlclZpZXdEZXB0aCA9IGRlcHRoO1xuXG4gICAgLy8gcmVuZGVyIHByZXZpb3VzIHZpZXcgaWYgdGhlIHRyZWUgaXMgaW5hY3RpdmUgYW5kIGtlcHQtYWxpdmVcbiAgICBpZiAoaW5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBoKGNhY2hlW25hbWVdLCBkYXRhLCBjaGlsZHJlbilcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZCA9IHJvdXRlLm1hdGNoZWRbZGVwdGhdO1xuICAgIC8vIHJlbmRlciBlbXB0eSBub2RlIGlmIG5vIG1hdGNoZWQgcm91dGVcbiAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgIGNhY2hlW25hbWVdID0gbnVsbDtcbiAgICAgIHJldHVybiBoKClcbiAgICB9XG5cbiAgICB2YXIgY29tcG9uZW50ID0gY2FjaGVbbmFtZV0gPSBtYXRjaGVkLmNvbXBvbmVudHNbbmFtZV07XG5cbiAgICAvLyBhdHRhY2ggaW5zdGFuY2UgcmVnaXN0cmF0aW9uIGhvb2tcbiAgICAvLyB0aGlzIHdpbGwgYmUgY2FsbGVkIGluIHRoZSBpbnN0YW5jZSdzIGluamVjdGVkIGxpZmVjeWNsZSBob29rc1xuICAgIGRhdGEucmVnaXN0ZXJSb3V0ZUluc3RhbmNlID0gZnVuY3Rpb24gKHZtLCB2YWwpIHtcbiAgICAgIC8vIHZhbCBjb3VsZCBiZSB1bmRlZmluZWQgZm9yIHVucmVnaXN0cmF0aW9uXG4gICAgICB2YXIgY3VycmVudCA9IG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdO1xuICAgICAgaWYgKFxuICAgICAgICAodmFsICYmIGN1cnJlbnQgIT09IHZtKSB8fFxuICAgICAgICAoIXZhbCAmJiBjdXJyZW50ID09PSB2bSlcbiAgICAgICkge1xuICAgICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhbHNvIHJlZ2lzZXRlciBpbnN0YW5jZSBpbiBwcmVwYXRjaCBob29rXG4gICAgLy8gaW4gY2FzZSB0aGUgc2FtZSBjb21wb25lbnQgaW5zdGFuY2UgaXMgcmV1c2VkIGFjcm9zcyBkaWZmZXJlbnQgcm91dGVzXG4gICAgOyhkYXRhLmhvb2sgfHwgKGRhdGEuaG9vayA9IHt9KSkucHJlcGF0Y2ggPSBmdW5jdGlvbiAoXywgdm5vZGUpIHtcbiAgICAgIG1hdGNoZWQuaW5zdGFuY2VzW25hbWVdID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgfTtcblxuICAgIC8vIHJlc29sdmUgcHJvcHNcbiAgICBkYXRhLnByb3BzID0gcmVzb2x2ZVByb3BzKHJvdXRlLCBtYXRjaGVkLnByb3BzICYmIG1hdGNoZWQucHJvcHNbbmFtZV0pO1xuXG4gICAgcmV0dXJuIGgoY29tcG9uZW50LCBkYXRhLCBjaGlsZHJlbilcbiAgfVxufTtcblxuZnVuY3Rpb24gcmVzb2x2ZVByb3BzIChyb3V0ZSwgY29uZmlnKSB7XG4gIHN3aXRjaCAodHlwZW9mIGNvbmZpZykge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgcmV0dXJuIGNvbmZpZ1xuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHJldHVybiBjb25maWcocm91dGUpXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gY29uZmlnID8gcm91dGUucGFyYW1zIDogdW5kZWZpbmVkXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgXCJwcm9wcyBpbiBcXFwiXCIgKyAocm91dGUucGF0aCkgKyBcIlxcXCIgaXMgYSBcIiArICh0eXBlb2YgY29uZmlnKSArIFwiLCBcIiArXG4gICAgICAgICAgXCJleHBlY3RpbmcgYW4gb2JqZWN0LCBmdW5jdGlvbiBvciBib29sZWFuLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBlbmNvZGVSZXNlcnZlUkUgPSAvWyEnKCkqXS9nO1xudmFyIGVuY29kZVJlc2VydmVSZXBsYWNlciA9IGZ1bmN0aW9uIChjKSB7IHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpOyB9O1xudmFyIGNvbW1hUkUgPSAvJTJDL2c7XG5cbi8vIGZpeGVkIGVuY29kZVVSSUNvbXBvbmVudCB3aGljaCBpcyBtb3JlIGNvbmZvcm1hbnQgdG8gUkZDMzk4Njpcbi8vIC0gZXNjYXBlcyBbIScoKSpdXG4vLyAtIHByZXNlcnZlIGNvbW1hc1xudmFyIGVuY29kZSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIC5yZXBsYWNlKGVuY29kZVJlc2VydmVSRSwgZW5jb2RlUmVzZXJ2ZVJlcGxhY2VyKVxuICAucmVwbGFjZShjb21tYVJFLCAnLCcpOyB9O1xuXG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xuXG5mdW5jdGlvbiByZXNvbHZlUXVlcnkgKFxuICBxdWVyeSxcbiAgZXh0cmFRdWVyeSxcbiAgX3BhcnNlUXVlcnlcbikge1xuICBpZiAoIGV4dHJhUXVlcnkgPT09IHZvaWQgMCApIGV4dHJhUXVlcnkgPSB7fTtcblxuICB2YXIgcGFyc2UgPSBfcGFyc2VRdWVyeSB8fCBwYXJzZVF1ZXJ5O1xuICB2YXIgcGFyc2VkUXVlcnk7XG4gIHRyeSB7XG4gICAgcGFyc2VkUXVlcnkgPSBwYXJzZShxdWVyeSB8fCAnJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oZmFsc2UsIGUubWVzc2FnZSk7XG4gICAgcGFyc2VkUXVlcnkgPSB7fTtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gZXh0cmFRdWVyeSkge1xuICAgIHZhciB2YWwgPSBleHRyYVF1ZXJ5W2tleV07XG4gICAgcGFyc2VkUXVlcnlba2V5XSA9IEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbC5zbGljZSgpIDogdmFsO1xuICB9XG4gIHJldHVybiBwYXJzZWRRdWVyeVxufVxuXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5IChxdWVyeSkge1xuICB2YXIgcmVzID0ge307XG5cbiAgcXVlcnkgPSBxdWVyeS50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKTtcblxuICBpZiAoIXF1ZXJ5KSB7XG4gICAgcmV0dXJuIHJlc1xuICB9XG5cbiAgcXVlcnkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG4gICAgdmFyIGtleSA9IGRlY29kZShwYXJ0cy5zaGlmdCgpKTtcbiAgICB2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMFxuICAgICAgPyBkZWNvZGUocGFydHMuam9pbignPScpKVxuICAgICAgOiBudWxsO1xuXG4gICAgaWYgKHJlc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc1trZXldID0gdmFsO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXNba2V5XSkpIHtcbiAgICAgIHJlc1trZXldLnB1c2godmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzW2tleV0gPSBbcmVzW2tleV0sIHZhbF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5IChvYmopIHtcbiAgdmFyIHJlcyA9IG9iaiA/IE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuICAgIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbmNvZGUoa2V5KVxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIHZhbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG4gICAgICAgIGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsMiA9PT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZShrZXkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2YWwyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcmJylcbiAgICB9XG5cbiAgICByZXR1cm4gZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodmFsKVxuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgubGVuZ3RoID4gMDsgfSkuam9pbignJicpIDogbnVsbDtcbiAgcmV0dXJuIHJlcyA/IChcIj9cIiArIHJlcykgOiAnJ1xufVxuXG4vKiAgKi9cblxuXG52YXIgdHJhaWxpbmdTbGFzaFJFID0gL1xcLz8kLztcblxuZnVuY3Rpb24gY3JlYXRlUm91dGUgKFxuICByZWNvcmQsXG4gIGxvY2F0aW9uLFxuICByZWRpcmVjdGVkRnJvbSxcbiAgcm91dGVyXG4pIHtcbiAgdmFyIHN0cmluZ2lmeVF1ZXJ5JCQxID0gcm91dGVyICYmIHJvdXRlci5vcHRpb25zLnN0cmluZ2lmeVF1ZXJ5O1xuICB2YXIgcm91dGUgPSB7XG4gICAgbmFtZTogbG9jYXRpb24ubmFtZSB8fCAocmVjb3JkICYmIHJlY29yZC5uYW1lKSxcbiAgICBtZXRhOiAocmVjb3JkICYmIHJlY29yZC5tZXRhKSB8fCB7fSxcbiAgICBwYXRoOiBsb2NhdGlvbi5wYXRoIHx8ICcvJyxcbiAgICBoYXNoOiBsb2NhdGlvbi5oYXNoIHx8ICcnLFxuICAgIHF1ZXJ5OiBsb2NhdGlvbi5xdWVyeSB8fCB7fSxcbiAgICBwYXJhbXM6IGxvY2F0aW9uLnBhcmFtcyB8fCB7fSxcbiAgICBmdWxsUGF0aDogZ2V0RnVsbFBhdGgobG9jYXRpb24sIHN0cmluZ2lmeVF1ZXJ5JCQxKSxcbiAgICBtYXRjaGVkOiByZWNvcmQgPyBmb3JtYXRNYXRjaChyZWNvcmQpIDogW11cbiAgfTtcbiAgaWYgKHJlZGlyZWN0ZWRGcm9tKSB7XG4gICAgcm91dGUucmVkaXJlY3RlZEZyb20gPSBnZXRGdWxsUGF0aChyZWRpcmVjdGVkRnJvbSwgc3RyaW5naWZ5UXVlcnkkJDEpO1xuICB9XG4gIHJldHVybiBPYmplY3QuZnJlZXplKHJvdXRlKVxufVxuXG4vLyB0aGUgc3RhcnRpbmcgcm91dGUgdGhhdCByZXByZXNlbnRzIHRoZSBpbml0aWFsIHN0YXRlXG52YXIgU1RBUlQgPSBjcmVhdGVSb3V0ZShudWxsLCB7XG4gIHBhdGg6ICcvJ1xufSk7XG5cbmZ1bmN0aW9uIGZvcm1hdE1hdGNoIChyZWNvcmQpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB3aGlsZSAocmVjb3JkKSB7XG4gICAgcmVzLnVuc2hpZnQocmVjb3JkKTtcbiAgICByZWNvcmQgPSByZWNvcmQucGFyZW50O1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZ2V0RnVsbFBhdGggKFxuICByZWYsXG4gIF9zdHJpbmdpZnlRdWVyeVxuKSB7XG4gIHZhciBwYXRoID0gcmVmLnBhdGg7XG4gIHZhciBxdWVyeSA9IHJlZi5xdWVyeTsgaWYgKCBxdWVyeSA9PT0gdm9pZCAwICkgcXVlcnkgPSB7fTtcbiAgdmFyIGhhc2ggPSByZWYuaGFzaDsgaWYgKCBoYXNoID09PSB2b2lkIDAgKSBoYXNoID0gJyc7XG5cbiAgdmFyIHN0cmluZ2lmeSA9IF9zdHJpbmdpZnlRdWVyeSB8fCBzdHJpbmdpZnlRdWVyeTtcbiAgcmV0dXJuIChwYXRoIHx8ICcvJykgKyBzdHJpbmdpZnkocXVlcnkpICsgaGFzaFxufVxuXG5mdW5jdGlvbiBpc1NhbWVSb3V0ZSAoYSwgYikge1xuICBpZiAoYiA9PT0gU1RBUlQpIHtcbiAgICByZXR1cm4gYSA9PT0gYlxuICB9IGVsc2UgaWYgKCFiKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSBpZiAoYS5wYXRoICYmIGIucGF0aCkge1xuICAgIHJldHVybiAoXG4gICAgICBhLnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcnKSA9PT0gYi5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgJiZcbiAgICAgIGEuaGFzaCA9PT0gYi5oYXNoICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucXVlcnksIGIucXVlcnkpXG4gICAgKVxuICB9IGVsc2UgaWYgKGEubmFtZSAmJiBiLm5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5uYW1lID09PSBiLm5hbWUgJiZcbiAgICAgIGEuaGFzaCA9PT0gYi5oYXNoICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucXVlcnksIGIucXVlcnkpICYmXG4gICAgICBpc09iamVjdEVxdWFsKGEucGFyYW1zLCBiLnBhcmFtcylcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNPYmplY3RFcXVhbCAoYSwgYikge1xuICBpZiAoIGEgPT09IHZvaWQgMCApIGEgPSB7fTtcbiAgaWYgKCBiID09PSB2b2lkIDAgKSBiID0ge307XG5cbiAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gYUtleXMuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBhVmFsID0gYVtrZXldO1xuICAgIHZhciBiVmFsID0gYltrZXldO1xuICAgIC8vIGNoZWNrIG5lc3RlZCBlcXVhbGl0eVxuICAgIGlmICh0eXBlb2YgYVZhbCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGJWYWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gaXNPYmplY3RFcXVhbChhVmFsLCBiVmFsKVxuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKGFWYWwpID09PSBTdHJpbmcoYlZhbClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaXNJbmNsdWRlZFJvdXRlIChjdXJyZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIChcbiAgICBjdXJyZW50LnBhdGgucmVwbGFjZSh0cmFpbGluZ1NsYXNoUkUsICcvJykuaW5kZXhPZihcbiAgICAgIHRhcmdldC5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnLycpXG4gICAgKSA9PT0gMCAmJlxuICAgICghdGFyZ2V0Lmhhc2ggfHwgY3VycmVudC5oYXNoID09PSB0YXJnZXQuaGFzaCkgJiZcbiAgICBxdWVyeUluY2x1ZGVzKGN1cnJlbnQucXVlcnksIHRhcmdldC5xdWVyeSlcbiAgKVxufVxuXG5mdW5jdGlvbiBxdWVyeUluY2x1ZGVzIChjdXJyZW50LCB0YXJnZXQpIHtcbiAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghKGtleSBpbiBjdXJyZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbi8qICAqL1xuXG4vLyB3b3JrIGFyb3VuZCB3ZWlyZCBmbG93IGJ1Z1xudmFyIHRvVHlwZXMgPSBbU3RyaW5nLCBPYmplY3RdO1xudmFyIGV2ZW50VHlwZXMgPSBbU3RyaW5nLCBBcnJheV07XG5cbnZhciBMaW5rID0ge1xuICBuYW1lOiAncm91dGVyLWxpbmsnLFxuICBwcm9wczoge1xuICAgIHRvOiB7XG4gICAgICB0eXBlOiB0b1R5cGVzLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHRhZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2EnXG4gICAgfSxcbiAgICBleGFjdDogQm9vbGVhbixcbiAgICBhcHBlbmQ6IEJvb2xlYW4sXG4gICAgcmVwbGFjZTogQm9vbGVhbixcbiAgICBhY3RpdmVDbGFzczogU3RyaW5nLFxuICAgIGV4YWN0QWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogZXZlbnRUeXBlcyxcbiAgICAgIGRlZmF1bHQ6ICdjbGljaydcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcm91dGVyID0gdGhpcy4kcm91dGVyO1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy4kcm91dGU7XG4gICAgdmFyIHJlZiA9IHJvdXRlci5yZXNvbHZlKHRoaXMudG8sIGN1cnJlbnQsIHRoaXMuYXBwZW5kKTtcbiAgICB2YXIgbG9jYXRpb24gPSByZWYubG9jYXRpb247XG4gICAgdmFyIHJvdXRlID0gcmVmLnJvdXRlO1xuICAgIHZhciBocmVmID0gcmVmLmhyZWY7XG5cbiAgICB2YXIgY2xhc3NlcyA9IHt9O1xuICAgIHZhciBnbG9iYWxBY3RpdmVDbGFzcyA9IHJvdXRlci5vcHRpb25zLmxpbmtBY3RpdmVDbGFzcztcbiAgICB2YXIgZ2xvYmFsRXhhY3RBY3RpdmVDbGFzcyA9IHJvdXRlci5vcHRpb25zLmxpbmtFeGFjdEFjdGl2ZUNsYXNzO1xuICAgIC8vIFN1cHBvcnQgZ2xvYmFsIGVtcHR5IGFjdGl2ZSBjbGFzc1xuICAgIHZhciBhY3RpdmVDbGFzc0ZhbGxiYWNrID0gZ2xvYmFsQWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyAncm91dGVyLWxpbmstYWN0aXZlJ1xuICAgICAgICAgICAgOiBnbG9iYWxBY3RpdmVDbGFzcztcbiAgICB2YXIgZXhhY3RBY3RpdmVDbGFzc0ZhbGxiYWNrID0gZ2xvYmFsRXhhY3RBY3RpdmVDbGFzcyA9PSBudWxsXG4gICAgICAgICAgICA/ICdyb3V0ZXItbGluay1leGFjdC1hY3RpdmUnXG4gICAgICAgICAgICA6IGdsb2JhbEV4YWN0QWN0aXZlQ2xhc3M7XG4gICAgdmFyIGFjdGl2ZUNsYXNzID0gdGhpcy5hY3RpdmVDbGFzcyA9PSBudWxsXG4gICAgICAgICAgICA/IGFjdGl2ZUNsYXNzRmFsbGJhY2tcbiAgICAgICAgICAgIDogdGhpcy5hY3RpdmVDbGFzcztcbiAgICB2YXIgZXhhY3RBY3RpdmVDbGFzcyA9IHRoaXMuZXhhY3RBY3RpdmVDbGFzcyA9PSBudWxsXG4gICAgICAgICAgICA/IGV4YWN0QWN0aXZlQ2xhc3NGYWxsYmFja1xuICAgICAgICAgICAgOiB0aGlzLmV4YWN0QWN0aXZlQ2xhc3M7XG4gICAgdmFyIGNvbXBhcmVUYXJnZXQgPSBsb2NhdGlvbi5wYXRoXG4gICAgICA/IGNyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uLCBudWxsLCByb3V0ZXIpXG4gICAgICA6IHJvdXRlO1xuXG4gICAgY2xhc3Nlc1tleGFjdEFjdGl2ZUNsYXNzXSA9IGlzU2FtZVJvdXRlKGN1cnJlbnQsIGNvbXBhcmVUYXJnZXQpO1xuICAgIGNsYXNzZXNbYWN0aXZlQ2xhc3NdID0gdGhpcy5leGFjdFxuICAgICAgPyBjbGFzc2VzW2V4YWN0QWN0aXZlQ2xhc3NdXG4gICAgICA6IGlzSW5jbHVkZWRSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KTtcblxuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChndWFyZEV2ZW50KGUpKSB7XG4gICAgICAgIGlmICh0aGlzJDEucmVwbGFjZSkge1xuICAgICAgICAgIHJvdXRlci5yZXBsYWNlKGxvY2F0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3V0ZXIucHVzaChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG9uID0geyBjbGljazogZ3VhcmRFdmVudCB9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZXZlbnQpKSB7XG4gICAgICB0aGlzLmV2ZW50LmZvckVhY2goZnVuY3Rpb24gKGUpIHsgb25bZV0gPSBoYW5kbGVyOyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25bdGhpcy5ldmVudF0gPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0ge1xuICAgICAgY2xhc3M6IGNsYXNzZXNcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMudGFnID09PSAnYScpIHtcbiAgICAgIGRhdGEub24gPSBvbjtcbiAgICAgIGRhdGEuYXR0cnMgPSB7IGhyZWY6IGhyZWYgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmluZCB0aGUgZmlyc3QgPGE+IGNoaWxkIGFuZCBhcHBseSBsaXN0ZW5lciBhbmQgaHJlZlxuICAgICAgdmFyIGEgPSBmaW5kQW5jaG9yKHRoaXMuJHNsb3RzLmRlZmF1bHQpO1xuICAgICAgaWYgKGEpIHtcbiAgICAgICAgLy8gaW4gY2FzZSB0aGUgPGE+IGlzIGEgc3RhdGljIG5vZGVcbiAgICAgICAgYS5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICB2YXIgZXh0ZW5kID0gX1Z1ZS51dGlsLmV4dGVuZDtcbiAgICAgICAgdmFyIGFEYXRhID0gYS5kYXRhID0gZXh0ZW5kKHt9LCBhLmRhdGEpO1xuICAgICAgICBhRGF0YS5vbiA9IG9uO1xuICAgICAgICB2YXIgYUF0dHJzID0gYS5kYXRhLmF0dHJzID0gZXh0ZW5kKHt9LCBhLmRhdGEuYXR0cnMpO1xuICAgICAgICBhQXR0cnMuaHJlZiA9IGhyZWY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkb2Vzbid0IGhhdmUgPGE+IGNoaWxkLCBhcHBseSBsaXN0ZW5lciB0byBzZWxmXG4gICAgICAgIGRhdGEub24gPSBvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaCh0aGlzLnRhZywgZGF0YSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfVxufTtcblxuZnVuY3Rpb24gZ3VhcmRFdmVudCAoZSkge1xuICAvLyBkb24ndCByZWRpcmVjdCB3aXRoIGNvbnRyb2wga2V5c1xuICBpZiAoZS5tZXRhS2V5IHx8IGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IHdoZW4gcHJldmVudERlZmF1bHQgY2FsbGVkXG4gIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHsgcmV0dXJuIH1cbiAgLy8gZG9uJ3QgcmVkaXJlY3Qgb24gcmlnaHQgY2xpY2tcbiAgaWYgKGUuYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgZS5idXR0b24gIT09IDApIHsgcmV0dXJuIH1cbiAgLy8gZG9uJ3QgcmVkaXJlY3QgaWYgYHRhcmdldD1cIl9ibGFua1wiYFxuICBpZiAoZS5jdXJyZW50VGFyZ2V0ICYmIGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFyZ2V0Jyk7XG4gICAgaWYgKC9cXGJfYmxhbmtcXGIvaS50ZXN0KHRhcmdldCkpIHsgcmV0dXJuIH1cbiAgfVxuICAvLyB0aGlzIG1heSBiZSBhIFdlZXggZXZlbnQgd2hpY2ggZG9lc24ndCBoYXZlIHRoaXMgbWV0aG9kXG4gIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGZpbmRBbmNob3IgKGNoaWxkcmVuKSB7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIHZhciBjaGlsZDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ2EnKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuICYmIChjaGlsZCA9IGZpbmRBbmNob3IoY2hpbGQuY2hpbGRyZW4pKSkge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIF9WdWU7XG5cbmZ1bmN0aW9uIGluc3RhbGwgKFZ1ZSkge1xuICBpZiAoaW5zdGFsbC5pbnN0YWxsZWQpIHsgcmV0dXJuIH1cbiAgaW5zdGFsbC5pbnN0YWxsZWQgPSB0cnVlO1xuXG4gIF9WdWUgPSBWdWU7XG5cbiAgdmFyIGlzRGVmID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYgIT09IHVuZGVmaW5lZDsgfTtcblxuICB2YXIgcmVnaXN0ZXJJbnN0YW5jZSA9IGZ1bmN0aW9uICh2bSwgY2FsbFZhbCkge1xuICAgIHZhciBpID0gdm0uJG9wdGlvbnMuX3BhcmVudFZub2RlO1xuICAgIGlmIChpc0RlZihpKSAmJiBpc0RlZihpID0gaS5kYXRhKSAmJiBpc0RlZihpID0gaS5yZWdpc3RlclJvdXRlSW5zdGFuY2UpKSB7XG4gICAgICBpKHZtLCBjYWxsVmFsKTtcbiAgICB9XG4gIH07XG5cbiAgVnVlLm1peGluKHtcbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uIGJlZm9yZUNyZWF0ZSAoKSB7XG4gICAgICBpZiAoaXNEZWYodGhpcy4kb3B0aW9ucy5yb3V0ZXIpKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlclJvb3QgPSB0aGlzO1xuICAgICAgICB0aGlzLl9yb3V0ZXIgPSB0aGlzLiRvcHRpb25zLnJvdXRlcjtcbiAgICAgICAgdGhpcy5fcm91dGVyLmluaXQodGhpcyk7XG4gICAgICAgIFZ1ZS51dGlsLmRlZmluZVJlYWN0aXZlKHRoaXMsICdfcm91dGUnLCB0aGlzLl9yb3V0ZXIuaGlzdG9yeS5jdXJyZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JvdXRlclJvb3QgPSAodGhpcy4kcGFyZW50ICYmIHRoaXMuJHBhcmVudC5fcm91dGVyUm9vdCkgfHwgdGhpcztcbiAgICAgIH1cbiAgICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgdGhpcyk7XG4gICAgfSxcbiAgICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCAoKSB7XG4gICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckcm91dGVyJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHsgcmV0dXJuIHRoaXMuX3JvdXRlclJvb3QuX3JvdXRlciB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICgpIHsgcmV0dXJuIHRoaXMuX3JvdXRlclJvb3QuX3JvdXRlIH1cbiAgfSk7XG5cbiAgVnVlLmNvbXBvbmVudCgncm91dGVyLXZpZXcnLCBWaWV3KTtcbiAgVnVlLmNvbXBvbmVudCgncm91dGVyLWxpbmsnLCBMaW5rKTtcblxuICB2YXIgc3RyYXRzID0gVnVlLmNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG4gIC8vIHVzZSB0aGUgc2FtZSBob29rIG1lcmdpbmcgc3RyYXRlZ3kgZm9yIHJvdXRlIGhvb2tzXG4gIHN0cmF0cy5iZWZvcmVSb3V0ZUVudGVyID0gc3RyYXRzLmJlZm9yZVJvdXRlTGVhdmUgPSBzdHJhdHMuYmVmb3JlUm91dGVVcGRhdGUgPSBzdHJhdHMuY3JlYXRlZDtcbn1cblxuLyogICovXG5cbnZhciBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRoIChcbiAgcmVsYXRpdmUsXG4gIGJhc2UsXG4gIGFwcGVuZFxuKSB7XG4gIHZhciBmaXJzdENoYXIgPSByZWxhdGl2ZS5jaGFyQXQoMCk7XG4gIGlmIChmaXJzdENoYXIgPT09ICcvJykge1xuICAgIHJldHVybiByZWxhdGl2ZVxuICB9XG5cbiAgaWYgKGZpcnN0Q2hhciA9PT0gJz8nIHx8IGZpcnN0Q2hhciA9PT0gJyMnKSB7XG4gICAgcmV0dXJuIGJhc2UgKyByZWxhdGl2ZVxuICB9XG5cbiAgdmFyIHN0YWNrID0gYmFzZS5zcGxpdCgnLycpO1xuXG4gIC8vIHJlbW92ZSB0cmFpbGluZyBzZWdtZW50IGlmOlxuICAvLyAtIG5vdCBhcHBlbmRpbmdcbiAgLy8gLSBhcHBlbmRpbmcgdG8gdHJhaWxpbmcgc2xhc2ggKGxhc3Qgc2VnbWVudCBpcyBlbXB0eSlcbiAgaWYgKCFhcHBlbmQgfHwgIXN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgc3RhY2sucG9wKCk7XG4gIH1cblxuICAvLyByZXNvbHZlIHJlbGF0aXZlIHBhdGhcbiAgdmFyIHNlZ21lbnRzID0gcmVsYXRpdmUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcbiAgICBpZiAoc2VnbWVudCA9PT0gJy4uJykge1xuICAgICAgc3RhY2sucG9wKCk7XG4gICAgfSBlbHNlIGlmIChzZWdtZW50ICE9PSAnLicpIHtcbiAgICAgIHN0YWNrLnB1c2goc2VnbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZW5zdXJlIGxlYWRpbmcgc2xhc2hcbiAgaWYgKHN0YWNrWzBdICE9PSAnJykge1xuICAgIHN0YWNrLnVuc2hpZnQoJycpO1xuICB9XG5cbiAgcmV0dXJuIHN0YWNrLmpvaW4oJy8nKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgdmFyIGhhc2ggPSAnJztcbiAgdmFyIHF1ZXJ5ID0gJyc7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ID49IDApIHtcbiAgICBoYXNoID0gcGF0aC5zbGljZShoYXNoSW5kZXgpO1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICBpZiAocXVlcnlJbmRleCA+PSAwKSB7XG4gICAgcXVlcnkgPSBwYXRoLnNsaWNlKHF1ZXJ5SW5kZXggKyAxKTtcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBxdWVyeUluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFuUGF0aCAocGF0aCkge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKVxufVxuXG52YXIgaW5kZXgkMSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbi8qKlxuICogRXhwb3NlIGBwYXRoVG9SZWdleHBgLlxuICovXG52YXIgaW5kZXggPSBwYXRoVG9SZWdleHA7XG52YXIgcGFyc2VfMSA9IHBhcnNlO1xudmFyIGNvbXBpbGVfMSA9IGNvbXBpbGU7XG52YXIgdG9rZW5zVG9GdW5jdGlvbl8xID0gdG9rZW5zVG9GdW5jdGlvbjtcbnZhciB0b2tlbnNUb1JlZ0V4cF8xID0gdG9rZW5zVG9SZWdFeHA7XG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCIvOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCIvXCIsIFwidGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIiwgdW5kZWZpbmVkXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gIC8vIFwiLypcIiAgICAgICAgICAgID0+IFtcIi9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIipcIl1cbiAgJyhbXFxcXC8uXSk/KD86KD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHN0clxuICogQHBhcmFtICB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybiB7IUFycmF5fVxuICovXG5mdW5jdGlvbiBwYXJzZSAoc3RyLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSBbXTtcbiAgdmFyIGtleSA9IDA7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBwYXRoID0gJyc7XG4gIHZhciBkZWZhdWx0RGVsaW1pdGVyID0gb3B0aW9ucyAmJiBvcHRpb25zLmRlbGltaXRlciB8fCAnLyc7XG4gIHZhciByZXM7XG5cbiAgd2hpbGUgKChyZXMgPSBQQVRIX1JFR0VYUC5leGVjKHN0cikpICE9IG51bGwpIHtcbiAgICB2YXIgbSA9IHJlc1swXTtcbiAgICB2YXIgZXNjYXBlZCA9IHJlc1sxXTtcbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4O1xuICAgIHBhdGggKz0gc3RyLnNsaWNlKGluZGV4LCBvZmZzZXQpO1xuICAgIGluZGV4ID0gb2Zmc2V0ICsgbS5sZW5ndGg7XG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdO1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB2YXIgbmV4dCA9IHN0cltpbmRleF07XG4gICAgdmFyIHByZWZpeCA9IHJlc1syXTtcbiAgICB2YXIgbmFtZSA9IHJlc1szXTtcbiAgICB2YXIgY2FwdHVyZSA9IHJlc1s0XTtcbiAgICB2YXIgZ3JvdXAgPSByZXNbNV07XG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzZdO1xuICAgIHZhciBhc3RlcmlzayA9IHJlc1s3XTtcblxuICAgIC8vIFB1c2ggdGhlIGN1cnJlbnQgcGF0aCBvbnRvIHRoZSB0b2tlbnMuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHRva2Vucy5wdXNoKHBhdGgpO1xuICAgICAgcGF0aCA9ICcnO1xuICAgIH1cblxuICAgIHZhciBwYXJ0aWFsID0gcHJlZml4ICE9IG51bGwgJiYgbmV4dCAhPSBudWxsICYmIG5leHQgIT09IHByZWZpeDtcbiAgICB2YXIgcmVwZWF0ID0gbW9kaWZpZXIgPT09ICcrJyB8fCBtb2RpZmllciA9PT0gJyonO1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJztcbiAgICB2YXIgZGVsaW1pdGVyID0gcmVzWzJdIHx8IGRlZmF1bHREZWxpbWl0ZXI7XG4gICAgdmFyIHBhdHRlcm4gPSBjYXB0dXJlIHx8IGdyb3VwO1xuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6IChhc3RlcmlzayA/ICcuKicgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnXSs/JylcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1hdGNoIGFueSBjaGFyYWN0ZXJzIHN0aWxsIHJlbWFpbmluZy5cbiAgaWYgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIHBhdGggKz0gc3RyLnN1YnN0cihpbmRleCk7XG4gIH1cblxuICAvLyBJZiB0aGUgcGF0aCBleGlzdHMsIHB1c2ggaXQgb250byB0aGUgZW5kLlxuICBpZiAocGF0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBQcmV0dGllciBlbmNvZGluZyBvZiBVUkkgcGF0aCBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bXFwvPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgYXN0ZXJpc2sgcGFyYW1ldGVyLiBTaW1pbGFyIHRvIGBwcmV0dHlgLCBidXQgYWxsb3dzIHNsYXNoZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVBc3RlcmlzayAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpO1xuXG4gIC8vIENvbXBpbGUgYWxsIHRoZSBwYXR0ZXJucyBiZWZvcmUgY29tcGlsYXRpb24uXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiB0b2tlbnNbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBtYXRjaGVzW2ldID0gbmV3IFJlZ0V4cCgnXig/OicgKyB0b2tlbnNbaV0ucGF0dGVybiArICcpJCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG4gICAgdmFyIHBhdGggPSAnJztcbiAgICB2YXIgZGF0YSA9IG9iaiB8fCB7fTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG4gICAgdmFyIGVuY29kZSA9IG9wdGlvbnMucHJldHR5ID8gZW5jb2RlVVJJQ29tcG9uZW50UHJldHR5IDogZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCArPSB0b2tlbjtcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBkYXRhW3Rva2VuLm5hbWVdO1xuICAgICAgdmFyIHNlZ21lbnQ7XG5cbiAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgIC8vIFByZXBlbmQgcGFydGlhbCBzZWdtZW50IHByZWZpeGVzLlxuICAgICAgICAgIGlmICh0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gYmUgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4JDEodmFsdWUpKSB7XG4gICAgICAgIGlmICghdG9rZW4ucmVwZWF0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgcmVwZWF0LCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyAnYCcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG5vdCBiZSBlbXB0eScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0pO1xuXG4gICAgICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHNlZ21lbnQpICsgJ2AnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHNlZ21lbnQgPSB0b2tlbi5hc3RlcmlzayA/IGVuY29kZUFzdGVyaXNrKHZhbHVlKSA6IGVuY29kZSh2YWx1ZSk7XG5cbiAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbWF0Y2ggXCInICsgdG9rZW4ucGF0dGVybiArICdcIiwgYnV0IHJlY2VpdmVkIFwiJyArIHNlZ21lbnQgKyAnXCInKVxuICAgICAgfVxuXG4gICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfFxcL1xcXFxdKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBncm91cFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JFxcLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSByZVxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXM7XG4gIHJldHVybiByZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZsYWdzIChvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLnNlbnNpdGl2ZSA/ICcnIDogJ2knXG59XG5cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFSZWdFeHB9IHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwIChwYXRoLCBrZXlzKSB7XG4gIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcblxuICBpZiAoZ3JvdXBzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGksXG4gICAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgICAgZGVsaW1pdGVyOiBudWxsLFxuICAgICAgICBvcHRpb25hbDogZmFsc2UsXG4gICAgICAgIHJlcGVhdDogZmFsc2UsXG4gICAgICAgIHBhcnRpYWw6IGZhbHNlLFxuICAgICAgICBhc3RlcmlzazogZmFsc2UsXG4gICAgICAgIHBhdHRlcm46IG51bGxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHBhdGhUb1JlZ2V4cChwYXRoW2ldLCBrZXlzLCBvcHRpb25zKS5zb3VyY2UpO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKTtcblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZWdleHAsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgICAgICAgICB0b2tlbnNcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaW5kZXgkMShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpO1xuICAgIGtleXMgPSBbXTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdDtcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZTtcbiAgdmFyIHJvdXRlID0gJyc7XG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKHRva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyh0b2tlbi5wcmVmaXgpO1xuICAgICAgdmFyIGNhcHR1cmUgPSAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSc7XG5cbiAgICAgIGtleXMucHVzaCh0b2tlbik7XG5cbiAgICAgIGlmICh0b2tlbi5yZXBlYXQpIHtcbiAgICAgICAgY2FwdHVyZSArPSAnKD86JyArIHByZWZpeCArIGNhcHR1cmUgKyAnKSonO1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyk/JztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSc7XG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCAnLycpO1xuICB2YXIgZW5kc1dpdGhEZWxpbWl0ZXIgPSByb3V0ZS5zbGljZSgtZGVsaW1pdGVyLmxlbmd0aCkgPT09IGRlbGltaXRlcjtcblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhEZWxpbWl0ZXIgPyByb3V0ZS5zbGljZSgwLCAtZGVsaW1pdGVyLmxlbmd0aCkgOiByb3V0ZSkgKyAnKD86JyArIGRlbGltaXRlciArICcoPz0kKSk/JztcbiAgfVxuXG4gIGlmIChlbmQpIHtcbiAgICByb3V0ZSArPSAnJCc7XG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gbm9uLWVuZGluZyBtb2RlLCB3ZSBuZWVkIHRoZSBjYXB0dXJpbmcgZ3JvdXBzIHRvIG1hdGNoIGFzIG11Y2ggYXNcbiAgICAvLyBwb3NzaWJsZSBieSB1c2luZyBhIHBvc2l0aXZlIGxvb2thaGVhZCB0byB0aGUgZW5kIG9yIG5leHQgcGF0aCBzZWdtZW50LlxuICAgIHJvdXRlICs9IHN0cmljdCAmJiBlbmRzV2l0aERlbGltaXRlciA/ICcnIDogJyg/PScgKyBkZWxpbWl0ZXIgKyAnfCQpJztcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWluZGV4JDEoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKTtcbiAgICBrZXlzID0gW107XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpKVxuICB9XG5cbiAgaWYgKGluZGV4JDEocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG59XG5cbmluZGV4LnBhcnNlID0gcGFyc2VfMTtcbmluZGV4LmNvbXBpbGUgPSBjb21waWxlXzE7XG5pbmRleC50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbl8xO1xuaW5kZXgudG9rZW5zVG9SZWdFeHAgPSB0b2tlbnNUb1JlZ0V4cF8xO1xuXG4vKiAgKi9cblxudmFyIHJlZ2V4cENvbXBpbGVDYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmZ1bmN0aW9uIGZpbGxQYXJhbXMgKFxuICBwYXRoLFxuICBwYXJhbXMsXG4gIHJvdXRlTXNnXG4pIHtcbiAgdHJ5IHtcbiAgICB2YXIgZmlsbGVyID1cbiAgICAgIHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSB8fFxuICAgICAgKHJlZ2V4cENvbXBpbGVDYWNoZVtwYXRoXSA9IGluZGV4LmNvbXBpbGUocGF0aCkpO1xuICAgIHJldHVybiBmaWxsZXIocGFyYW1zIHx8IHt9LCB7IHByZXR0eTogdHJ1ZSB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm4oZmFsc2UsIChcIm1pc3NpbmcgcGFyYW0gZm9yIFwiICsgcm91dGVNc2cgKyBcIjogXCIgKyAoZS5tZXNzYWdlKSkpO1xuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVNYXAgKFxuICByb3V0ZXMsXG4gIG9sZFBhdGhMaXN0LFxuICBvbGRQYXRoTWFwLFxuICBvbGROYW1lTWFwXG4pIHtcbiAgLy8gdGhlIHBhdGggbGlzdCBpcyB1c2VkIHRvIGNvbnRyb2wgcGF0aCBtYXRjaGluZyBwcmlvcml0eVxuICB2YXIgcGF0aExpc3QgPSBvbGRQYXRoTGlzdCB8fCBbXTtcbiAgdmFyIHBhdGhNYXAgPSBvbGRQYXRoTWFwIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBuYW1lTWFwID0gb2xkTmFtZU1hcCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIHJvdXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhMaXN0LCBwYXRoTWFwLCBuYW1lTWFwLCByb3V0ZSk7XG4gIH0pO1xuXG4gIC8vIGVuc3VyZSB3aWxkY2FyZCByb3V0ZXMgYXJlIGFsd2F5cyBhdCB0aGUgZW5kXG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGF0aExpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHBhdGhMaXN0W2ldID09PSAnKicpIHtcbiAgICAgIHBhdGhMaXN0LnB1c2gocGF0aExpc3Quc3BsaWNlKGksIDEpWzBdKTtcbiAgICAgIGwtLTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGhMaXN0OiBwYXRoTGlzdCxcbiAgICBwYXRoTWFwOiBwYXRoTWFwLFxuICAgIG5hbWVNYXA6IG5hbWVNYXBcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRSb3V0ZVJlY29yZCAoXG4gIHBhdGhMaXN0LFxuICBwYXRoTWFwLFxuICBuYW1lTWFwLFxuICByb3V0ZSxcbiAgcGFyZW50LFxuICBtYXRjaEFzXG4pIHtcbiAgdmFyIHBhdGggPSByb3V0ZS5wYXRoO1xuICB2YXIgbmFtZSA9IHJvdXRlLm5hbWU7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHBhdGggIT0gbnVsbCwgXCJcXFwicGF0aFxcXCIgaXMgcmVxdWlyZWQgaW4gYSByb3V0ZSBjb25maWd1cmF0aW9uLlwiKTtcbiAgICBhc3NlcnQoXG4gICAgICB0eXBlb2Ygcm91dGUuY29tcG9uZW50ICE9PSAnc3RyaW5nJyxcbiAgICAgIFwicm91dGUgY29uZmlnIFxcXCJjb21wb25lbnRcXFwiIGZvciBwYXRoOiBcIiArIChTdHJpbmcocGF0aCB8fCBuYW1lKSkgKyBcIiBjYW5ub3QgYmUgYSBcIiArXG4gICAgICBcInN0cmluZyBpZC4gVXNlIGFuIGFjdHVhbCBjb21wb25lbnQgaW5zdGVhZC5cIlxuICAgICk7XG4gIH1cblxuICB2YXIgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVQYXRoKHBhdGgsIHBhcmVudCk7XG4gIHZhciBwYXRoVG9SZWdleHBPcHRpb25zID0gcm91dGUucGF0aFRvUmVnZXhwT3B0aW9ucyB8fCB7fTtcblxuICBpZiAodHlwZW9mIHJvdXRlLmNhc2VTZW5zaXRpdmUgPT09ICdib29sZWFuJykge1xuICAgIHBhdGhUb1JlZ2V4cE9wdGlvbnMuc2Vuc2l0aXZlID0gcm91dGUuY2FzZVNlbnNpdGl2ZTtcbiAgfVxuXG4gIHZhciByZWNvcmQgPSB7XG4gICAgcGF0aDogbm9ybWFsaXplZFBhdGgsXG4gICAgcmVnZXg6IGNvbXBpbGVSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRQYXRoLCBwYXRoVG9SZWdleHBPcHRpb25zKSxcbiAgICBjb21wb25lbnRzOiByb3V0ZS5jb21wb25lbnRzIHx8IHsgZGVmYXVsdDogcm91dGUuY29tcG9uZW50IH0sXG4gICAgaW5zdGFuY2VzOiB7fSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIG1hdGNoQXM6IG1hdGNoQXMsXG4gICAgcmVkaXJlY3Q6IHJvdXRlLnJlZGlyZWN0LFxuICAgIGJlZm9yZUVudGVyOiByb3V0ZS5iZWZvcmVFbnRlcixcbiAgICBtZXRhOiByb3V0ZS5tZXRhIHx8IHt9LFxuICAgIHByb3BzOiByb3V0ZS5wcm9wcyA9PSBudWxsXG4gICAgICA/IHt9XG4gICAgICA6IHJvdXRlLmNvbXBvbmVudHNcbiAgICAgICAgPyByb3V0ZS5wcm9wc1xuICAgICAgICA6IHsgZGVmYXVsdDogcm91dGUucHJvcHMgfVxuICB9O1xuXG4gIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgIC8vIFdhcm4gaWYgcm91dGUgaXMgbmFtZWQsIGRvZXMgbm90IHJlZGlyZWN0IGFuZCBoYXMgYSBkZWZhdWx0IGNoaWxkIHJvdXRlLlxuICAgIC8vIElmIHVzZXJzIG5hdmlnYXRlIHRvIHRoaXMgcm91dGUgYnkgbmFtZSwgdGhlIGRlZmF1bHQgY2hpbGQgd2lsbFxuICAgIC8vIG5vdCBiZSByZW5kZXJlZCAoR0ggSXNzdWUgIzYyOSlcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHJvdXRlLm5hbWUgJiYgIXJvdXRlLnJlZGlyZWN0ICYmIHJvdXRlLmNoaWxkcmVuLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiAvXlxcLz8kLy50ZXN0KGNoaWxkLnBhdGgpOyB9KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgIFwiTmFtZWQgUm91dGUgJ1wiICsgKHJvdXRlLm5hbWUpICsgXCInIGhhcyBhIGRlZmF1bHQgY2hpbGQgcm91dGUuIFwiICtcbiAgICAgICAgICBcIldoZW4gbmF2aWdhdGluZyB0byB0aGlzIG5hbWVkIHJvdXRlICg6dG89XFxcIntuYW1lOiAnXCIgKyAocm91dGUubmFtZSkgKyBcIidcXFwiKSwgXCIgK1xuICAgICAgICAgIFwidGhlIGRlZmF1bHQgY2hpbGQgcm91dGUgd2lsbCBub3QgYmUgcmVuZGVyZWQuIFJlbW92ZSB0aGUgbmFtZSBmcm9tIFwiICtcbiAgICAgICAgICBcInRoaXMgcm91dGUgYW5kIHVzZSB0aGUgbmFtZSBvZiB0aGUgZGVmYXVsdCBjaGlsZCByb3V0ZSBmb3IgbmFtZWQgXCIgK1xuICAgICAgICAgIFwibGlua3MgaW5zdGVhZC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByb3V0ZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIGNoaWxkTWF0Y2hBcyA9IG1hdGNoQXNcbiAgICAgICAgPyBjbGVhblBhdGgoKG1hdGNoQXMgKyBcIi9cIiArIChjaGlsZC5wYXRoKSkpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgYWRkUm91dGVSZWNvcmQocGF0aExpc3QsIHBhdGhNYXAsIG5hbWVNYXAsIGNoaWxkLCByZWNvcmQsIGNoaWxkTWF0Y2hBcyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocm91dGUuYWxpYXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBhbGlhc2VzID0gQXJyYXkuaXNBcnJheShyb3V0ZS5hbGlhcylcbiAgICAgID8gcm91dGUuYWxpYXNcbiAgICAgIDogW3JvdXRlLmFsaWFzXTtcblxuICAgIGFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgIHZhciBhbGlhc1JvdXRlID0ge1xuICAgICAgICBwYXRoOiBhbGlhcyxcbiAgICAgICAgY2hpbGRyZW46IHJvdXRlLmNoaWxkcmVuXG4gICAgICB9O1xuICAgICAgYWRkUm91dGVSZWNvcmQoXG4gICAgICAgIHBhdGhMaXN0LFxuICAgICAgICBwYXRoTWFwLFxuICAgICAgICBuYW1lTWFwLFxuICAgICAgICBhbGlhc1JvdXRlLFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIHJlY29yZC5wYXRoIHx8ICcvJyAvLyBtYXRjaEFzXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFwYXRoTWFwW3JlY29yZC5wYXRoXSkge1xuICAgIHBhdGhMaXN0LnB1c2gocmVjb3JkLnBhdGgpO1xuICAgIHBhdGhNYXBbcmVjb3JkLnBhdGhdID0gcmVjb3JkO1xuICB9XG5cbiAgaWYgKG5hbWUpIHtcbiAgICBpZiAoIW5hbWVNYXBbbmFtZV0pIHtcbiAgICAgIG5hbWVNYXBbbmFtZV0gPSByZWNvcmQ7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFtYXRjaEFzKSB7XG4gICAgICB3YXJuKFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgXCJEdXBsaWNhdGUgbmFtZWQgcm91dGVzIGRlZmluaXRpb246IFwiICtcbiAgICAgICAgXCJ7IG5hbWU6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsIHBhdGg6IFxcXCJcIiArIChyZWNvcmQucGF0aCkgKyBcIlxcXCIgfVwiXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb21waWxlUm91dGVSZWdleCAocGF0aCwgcGF0aFRvUmVnZXhwT3B0aW9ucykge1xuICB2YXIgcmVnZXggPSBpbmRleChwYXRoLCBbXSwgcGF0aFRvUmVnZXhwT3B0aW9ucyk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmFyIGtleXMgPSB7fTtcbiAgICByZWdleC5rZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgd2Fybigha2V5c1trZXkubmFtZV0sIChcIkR1cGxpY2F0ZSBwYXJhbSBrZXlzIGluIHJvdXRlIHdpdGggcGF0aDogXFxcIlwiICsgcGF0aCArIFwiXFxcIlwiKSk7XG4gICAgICBrZXlzW2tleS5uYW1lXSA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlZ2V4XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGggKHBhdGgsIHBhcmVudCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpO1xuICBpZiAocGF0aFswXSA9PT0gJy8nKSB7IHJldHVybiBwYXRoIH1cbiAgaWYgKHBhcmVudCA9PSBudWxsKSB7IHJldHVybiBwYXRoIH1cbiAgcmV0dXJuIGNsZWFuUGF0aCgoKHBhcmVudC5wYXRoKSArIFwiL1wiICsgcGF0aCkpXG59XG5cbi8qICAqL1xuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2F0aW9uIChcbiAgcmF3LFxuICBjdXJyZW50LFxuICBhcHBlbmQsXG4gIHJvdXRlclxuKSB7XG4gIHZhciBuZXh0ID0gdHlwZW9mIHJhdyA9PT0gJ3N0cmluZycgPyB7IHBhdGg6IHJhdyB9IDogcmF3O1xuICAvLyBuYW1lZCB0YXJnZXRcbiAgaWYgKG5leHQubmFtZSB8fCBuZXh0Ll9ub3JtYWxpemVkKSB7XG4gICAgcmV0dXJuIG5leHRcbiAgfVxuXG4gIC8vIHJlbGF0aXZlIHBhcmFtc1xuICBpZiAoIW5leHQucGF0aCAmJiBuZXh0LnBhcmFtcyAmJiBjdXJyZW50KSB7XG4gICAgbmV4dCA9IGFzc2lnbih7fSwgbmV4dCk7XG4gICAgbmV4dC5fbm9ybWFsaXplZCA9IHRydWU7XG4gICAgdmFyIHBhcmFtcyA9IGFzc2lnbihhc3NpZ24oe30sIGN1cnJlbnQucGFyYW1zKSwgbmV4dC5wYXJhbXMpO1xuICAgIGlmIChjdXJyZW50Lm5hbWUpIHtcbiAgICAgIG5leHQubmFtZSA9IGN1cnJlbnQubmFtZTtcbiAgICAgIG5leHQucGFyYW1zID0gcGFyYW1zO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudC5tYXRjaGVkLmxlbmd0aCkge1xuICAgICAgdmFyIHJhd1BhdGggPSBjdXJyZW50Lm1hdGNoZWRbY3VycmVudC5tYXRjaGVkLmxlbmd0aCAtIDFdLnBhdGg7XG4gICAgICBuZXh0LnBhdGggPSBmaWxsUGFyYW1zKHJhd1BhdGgsIHBhcmFtcywgKFwicGF0aCBcIiArIChjdXJyZW50LnBhdGgpKSk7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKGZhbHNlLCBcInJlbGF0aXZlIHBhcmFtcyBuYXZpZ2F0aW9uIHJlcXVpcmVzIGEgY3VycmVudCByb3V0ZS5cIik7XG4gICAgfVxuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICB2YXIgcGFyc2VkUGF0aCA9IHBhcnNlUGF0aChuZXh0LnBhdGggfHwgJycpO1xuICB2YXIgYmFzZVBhdGggPSAoY3VycmVudCAmJiBjdXJyZW50LnBhdGgpIHx8ICcvJztcbiAgdmFyIHBhdGggPSBwYXJzZWRQYXRoLnBhdGhcbiAgICA/IHJlc29sdmVQYXRoKHBhcnNlZFBhdGgucGF0aCwgYmFzZVBhdGgsIGFwcGVuZCB8fCBuZXh0LmFwcGVuZClcbiAgICA6IGJhc2VQYXRoO1xuXG4gIHZhciBxdWVyeSA9IHJlc29sdmVRdWVyeShcbiAgICBwYXJzZWRQYXRoLnF1ZXJ5LFxuICAgIG5leHQucXVlcnksXG4gICAgcm91dGVyICYmIHJvdXRlci5vcHRpb25zLnBhcnNlUXVlcnlcbiAgKTtcblxuICB2YXIgaGFzaCA9IG5leHQuaGFzaCB8fCBwYXJzZWRQYXRoLmhhc2g7XG4gIGlmIChoYXNoICYmIGhhc2guY2hhckF0KDApICE9PSAnIycpIHtcbiAgICBoYXNoID0gXCIjXCIgKyBoYXNoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICBwYXRoOiBwYXRoLFxuICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICBoYXNoOiBoYXNoXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduIChhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgYVtrZXldID0gYltrZXldO1xuICB9XG4gIHJldHVybiBhXG59XG5cbi8qICAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hdGNoZXIgKFxuICByb3V0ZXMsXG4gIHJvdXRlclxuKSB7XG4gIHZhciByZWYgPSBjcmVhdGVSb3V0ZU1hcChyb3V0ZXMpO1xuICB2YXIgcGF0aExpc3QgPSByZWYucGF0aExpc3Q7XG4gIHZhciBwYXRoTWFwID0gcmVmLnBhdGhNYXA7XG4gIHZhciBuYW1lTWFwID0gcmVmLm5hbWVNYXA7XG5cbiAgZnVuY3Rpb24gYWRkUm91dGVzIChyb3V0ZXMpIHtcbiAgICBjcmVhdGVSb3V0ZU1hcChyb3V0ZXMsIHBhdGhMaXN0LCBwYXRoTWFwLCBuYW1lTWFwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoIChcbiAgICByYXcsXG4gICAgY3VycmVudFJvdXRlLFxuICAgIHJlZGlyZWN0ZWRGcm9tXG4gICkge1xuICAgIHZhciBsb2NhdGlvbiA9IG5vcm1hbGl6ZUxvY2F0aW9uKHJhdywgY3VycmVudFJvdXRlLCBmYWxzZSwgcm91dGVyKTtcbiAgICB2YXIgbmFtZSA9IGxvY2F0aW9uLm5hbWU7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgdmFyIHJlY29yZCA9IG5hbWVNYXBbbmFtZV07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKHJlY29yZCwgKFwiUm91dGUgd2l0aCBuYW1lICdcIiArIG5hbWUgKyBcIicgZG9lcyBub3QgZXhpc3RcIikpO1xuICAgICAgfVxuICAgICAgaWYgKCFyZWNvcmQpIHsgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbikgfVxuICAgICAgdmFyIHBhcmFtTmFtZXMgPSByZWNvcmQucmVnZXgua2V5c1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICFrZXkub3B0aW9uYWw7IH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5Lm5hbWU7IH0pO1xuXG4gICAgICBpZiAodHlwZW9mIGxvY2F0aW9uLnBhcmFtcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9jYXRpb24ucGFyYW1zID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50Um91dGUgJiYgdHlwZW9mIGN1cnJlbnRSb3V0ZS5wYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50Um91dGUucGFyYW1zKSB7XG4gICAgICAgICAgaWYgKCEoa2V5IGluIGxvY2F0aW9uLnBhcmFtcykgJiYgcGFyYW1OYW1lcy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgbG9jYXRpb24ucGFyYW1zW2tleV0gPSBjdXJyZW50Um91dGUucGFyYW1zW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgbG9jYXRpb24ucGF0aCA9IGZpbGxQYXJhbXMocmVjb3JkLnBhdGgsIGxvY2F0aW9uLnBhcmFtcywgKFwibmFtZWQgcm91dGUgXFxcIlwiICsgbmFtZSArIFwiXFxcIlwiKSk7XG4gICAgICAgIHJldHVybiBfY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5wYXRoKSB7XG4gICAgICBsb2NhdGlvbi5wYXJhbXMgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBhdGggPSBwYXRoTGlzdFtpXTtcbiAgICAgICAgdmFyIHJlY29yZCQxID0gcGF0aE1hcFtwYXRoXTtcbiAgICAgICAgaWYgKG1hdGNoUm91dGUocmVjb3JkJDEucmVnZXgsIGxvY2F0aW9uLnBhdGgsIGxvY2F0aW9uLnBhcmFtcykpIHtcbiAgICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHJlY29yZCQxLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gbm8gbWF0Y2hcbiAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVkaXJlY3QgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvblxuICApIHtcbiAgICB2YXIgb3JpZ2luYWxSZWRpcmVjdCA9IHJlY29yZC5yZWRpcmVjdDtcbiAgICB2YXIgcmVkaXJlY3QgPSB0eXBlb2Ygb3JpZ2luYWxSZWRpcmVjdCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG9yaWdpbmFsUmVkaXJlY3QoY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbiwgbnVsbCwgcm91dGVyKSlcbiAgICAgICAgOiBvcmlnaW5hbFJlZGlyZWN0O1xuXG4gICAgaWYgKHR5cGVvZiByZWRpcmVjdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlZGlyZWN0ID0geyBwYXRoOiByZWRpcmVjdCB9O1xuICAgIH1cblxuICAgIGlmICghcmVkaXJlY3QgfHwgdHlwZW9mIHJlZGlyZWN0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBmYWxzZSwgKFwiaW52YWxpZCByZWRpcmVjdCBvcHRpb246IFwiICsgKEpTT04uc3RyaW5naWZ5KHJlZGlyZWN0KSkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICAgIH1cblxuICAgIHZhciByZSA9IHJlZGlyZWN0O1xuICAgIHZhciBuYW1lID0gcmUubmFtZTtcbiAgICB2YXIgcGF0aCA9IHJlLnBhdGg7XG4gICAgdmFyIHF1ZXJ5ID0gbG9jYXRpb24ucXVlcnk7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICAgIHZhciBwYXJhbXMgPSBsb2NhdGlvbi5wYXJhbXM7XG4gICAgcXVlcnkgPSByZS5oYXNPd25Qcm9wZXJ0eSgncXVlcnknKSA/IHJlLnF1ZXJ5IDogcXVlcnk7XG4gICAgaGFzaCA9IHJlLmhhc093blByb3BlcnR5KCdoYXNoJykgPyByZS5oYXNoIDogaGFzaDtcbiAgICBwYXJhbXMgPSByZS5oYXNPd25Qcm9wZXJ0eSgncGFyYW1zJykgPyByZS5wYXJhbXMgOiBwYXJhbXM7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgLy8gcmVzb2x2ZWQgbmFtZWQgZGlyZWN0XG4gICAgICB2YXIgdGFyZ2V0UmVjb3JkID0gbmFtZU1hcFtuYW1lXTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGFzc2VydCh0YXJnZXRSZWNvcmQsIChcInJlZGlyZWN0IGZhaWxlZDogbmFtZWQgcm91dGUgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBub3QgZm91bmQuXCIpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaCh7XG4gICAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgIGhhc2g6IGhhc2gsXG4gICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICB9LCB1bmRlZmluZWQsIGxvY2F0aW9uKVxuICAgIH0gZWxzZSBpZiAocGF0aCkge1xuICAgICAgLy8gMS4gcmVzb2x2ZSByZWxhdGl2ZSByZWRpcmVjdFxuICAgICAgdmFyIHJhd1BhdGggPSByZXNvbHZlUmVjb3JkUGF0aChwYXRoLCByZWNvcmQpO1xuICAgICAgLy8gMi4gcmVzb2x2ZSBwYXJhbXNcbiAgICAgIHZhciByZXNvbHZlZFBhdGggPSBmaWxsUGFyYW1zKHJhd1BhdGgsIHBhcmFtcywgKFwicmVkaXJlY3Qgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIHJhd1BhdGggKyBcIlxcXCJcIikpO1xuICAgICAgLy8gMy4gcmVtYXRjaCB3aXRoIGV4aXN0aW5nIHF1ZXJ5IGFuZCBoYXNoXG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgcGF0aDogcmVzb2x2ZWRQYXRoLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgIGhhc2g6IGhhc2hcbiAgICAgIH0sIHVuZGVmaW5lZCwgbG9jYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKG51bGwsIGxvY2F0aW9uKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFsaWFzIChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb24sXG4gICAgbWF0Y2hBc1xuICApIHtcbiAgICB2YXIgYWxpYXNlZFBhdGggPSBmaWxsUGFyYW1zKG1hdGNoQXMsIGxvY2F0aW9uLnBhcmFtcywgKFwiYWxpYXNlZCByb3V0ZSB3aXRoIHBhdGggXFxcIlwiICsgbWF0Y2hBcyArIFwiXFxcIlwiKSk7XG4gICAgdmFyIGFsaWFzZWRNYXRjaCA9IG1hdGNoKHtcbiAgICAgIF9ub3JtYWxpemVkOiB0cnVlLFxuICAgICAgcGF0aDogYWxpYXNlZFBhdGhcbiAgICB9KTtcbiAgICBpZiAoYWxpYXNlZE1hdGNoKSB7XG4gICAgICB2YXIgbWF0Y2hlZCA9IGFsaWFzZWRNYXRjaC5tYXRjaGVkO1xuICAgICAgdmFyIGFsaWFzZWRSZWNvcmQgPSBtYXRjaGVkW21hdGNoZWQubGVuZ3RoIC0gMV07XG4gICAgICBsb2NhdGlvbi5wYXJhbXMgPSBhbGlhc2VkTWF0Y2gucGFyYW1zO1xuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShhbGlhc2VkUmVjb3JkLCBsb2NhdGlvbilcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVSb3V0ZSAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIHJlZGlyZWN0ZWRGcm9tXG4gICkge1xuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLnJlZGlyZWN0KSB7XG4gICAgICByZXR1cm4gcmVkaXJlY3QocmVjb3JkLCByZWRpcmVjdGVkRnJvbSB8fCBsb2NhdGlvbilcbiAgICB9XG4gICAgaWYgKHJlY29yZCAmJiByZWNvcmQubWF0Y2hBcykge1xuICAgICAgcmV0dXJuIGFsaWFzKHJlY29yZCwgbG9jYXRpb24sIHJlY29yZC5tYXRjaEFzKVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlUm91dGUocmVjb3JkLCBsb2NhdGlvbiwgcmVkaXJlY3RlZEZyb20sIHJvdXRlcilcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWF0Y2g6IG1hdGNoLFxuICAgIGFkZFJvdXRlczogYWRkUm91dGVzXG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hSb3V0ZSAoXG4gIHJlZ2V4LFxuICBwYXRoLFxuICBwYXJhbXNcbikge1xuICB2YXIgbSA9IHBhdGgubWF0Y2gocmVnZXgpO1xuXG4gIGlmICghbSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IG0ubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIga2V5ID0gcmVnZXgua2V5c1tpIC0gMV07XG4gICAgdmFyIHZhbCA9IHR5cGVvZiBtW2ldID09PSAnc3RyaW5nJyA/IGRlY29kZVVSSUNvbXBvbmVudChtW2ldKSA6IG1baV07XG4gICAgaWYgKGtleSkge1xuICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUmVjb3JkUGF0aCAocGF0aCwgcmVjb3JkKSB7XG4gIHJldHVybiByZXNvbHZlUGF0aChwYXRoLCByZWNvcmQucGFyZW50ID8gcmVjb3JkLnBhcmVudC5wYXRoIDogJy8nLCB0cnVlKVxufVxuXG4vKiAgKi9cblxuXG52YXIgcG9zaXRpb25TdG9yZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmZ1bmN0aW9uIHNldHVwU2Nyb2xsICgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBzYXZlU2Nyb2xsUG9zaXRpb24oKTtcbiAgICBpZiAoZS5zdGF0ZSAmJiBlLnN0YXRlLmtleSkge1xuICAgICAgc2V0U3RhdGVLZXkoZS5zdGF0ZS5rZXkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbCAoXG4gIHJvdXRlcixcbiAgdG8sXG4gIGZyb20sXG4gIGlzUG9wXG4pIHtcbiAgaWYgKCFyb3V0ZXIuYXBwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgYmVoYXZpb3IgPSByb3V0ZXIub3B0aW9ucy5zY3JvbGxCZWhhdmlvcjtcbiAgaWYgKCFiZWhhdmlvcikge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQodHlwZW9mIGJlaGF2aW9yID09PSAnZnVuY3Rpb24nLCBcInNjcm9sbEJlaGF2aW9yIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIC8vIHdhaXQgdW50aWwgcmUtcmVuZGVyIGZpbmlzaGVzIGJlZm9yZSBzY3JvbGxpbmdcbiAgcm91dGVyLmFwcC4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3NpdGlvbiA9IGdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgdmFyIHNob3VsZFNjcm9sbCA9IGJlaGF2aW9yKHRvLCBmcm9tLCBpc1BvcCA/IHBvc2l0aW9uIDogbnVsbCk7XG4gICAgaWYgKCFzaG91bGRTY3JvbGwpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgaXNPYmplY3QgPSB0eXBlb2Ygc2hvdWxkU2Nyb2xsID09PSAnb2JqZWN0JztcbiAgICBpZiAoaXNPYmplY3QgJiYgdHlwZW9mIHNob3VsZFNjcm9sbC5zZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2hvdWxkU2Nyb2xsLnNlbGVjdG9yKTtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gc2hvdWxkU2Nyb2xsLm9mZnNldCAmJiB0eXBlb2Ygc2hvdWxkU2Nyb2xsLm9mZnNldCA9PT0gJ29iamVjdCcgPyBzaG91bGRTY3JvbGwub2Zmc2V0IDoge307XG4gICAgICAgIG9mZnNldCA9IG5vcm1hbGl6ZU9mZnNldChvZmZzZXQpO1xuICAgICAgICBwb3NpdGlvbiA9IGdldEVsZW1lbnRQb3NpdGlvbihlbCwgb2Zmc2V0KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNWYWxpZFBvc2l0aW9uKHNob3VsZFNjcm9sbCkpIHtcbiAgICAgICAgcG9zaXRpb24gPSBub3JtYWxpemVQb3NpdGlvbihzaG91bGRTY3JvbGwpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QgJiYgaXNWYWxpZFBvc2l0aW9uKHNob3VsZFNjcm9sbCkpIHtcbiAgICAgIHBvc2l0aW9uID0gbm9ybWFsaXplUG9zaXRpb24oc2hvdWxkU2Nyb2xsKTtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzYXZlU2Nyb2xsUG9zaXRpb24gKCkge1xuICB2YXIga2V5ID0gZ2V0U3RhdGVLZXkoKTtcbiAgaWYgKGtleSkge1xuICAgIHBvc2l0aW9uU3RvcmVba2V5XSA9IHtcbiAgICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUG9zaXRpb24gKCkge1xuICB2YXIga2V5ID0gZ2V0U3RhdGVLZXkoKTtcbiAgaWYgKGtleSkge1xuICAgIHJldHVybiBwb3NpdGlvblN0b3JlW2tleV1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24gKGVsLCBvZmZzZXQpIHtcbiAgdmFyIGRvY0VsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgZG9jUmVjdCA9IGRvY0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHJldHVybiB7XG4gICAgeDogZWxSZWN0LmxlZnQgLSBkb2NSZWN0LmxlZnQgLSBvZmZzZXQueCxcbiAgICB5OiBlbFJlY3QudG9wIC0gZG9jUmVjdC50b3AgLSBvZmZzZXQueVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRQb3NpdGlvbiAob2JqKSB7XG4gIHJldHVybiBpc051bWJlcihvYmoueCkgfHwgaXNOdW1iZXIob2JqLnkpXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvc2l0aW9uIChvYmopIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBpc051bWJlcihvYmoueCkgPyBvYmoueCA6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICB5OiBpc051bWJlcihvYmoueSkgPyBvYmoueSA6IHdpbmRvdy5wYWdlWU9mZnNldFxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9mZnNldCAob2JqKSB7XG4gIHJldHVybiB7XG4gICAgeDogaXNOdW1iZXIob2JqLngpID8gb2JqLnggOiAwLFxuICAgIHk6IGlzTnVtYmVyKG9iai55KSA/IG9iai55IDogMFxuICB9XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyICh2KSB7XG4gIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcidcbn1cblxuLyogICovXG5cbnZhciBzdXBwb3J0c1B1c2hTdGF0ZSA9IGluQnJvd3NlciAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICBpZiAoXG4gICAgKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmXG4gICAgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJlxuICAgIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJlxuICAgIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTFcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnlcbn0pKCk7XG5cbi8vIHVzZSBVc2VyIFRpbWluZyBhcGkgKGlmIHByZXNlbnQpIGZvciBtb3JlIGFjY3VyYXRlIGtleSBwcmVjaXNpb25cbnZhciBUaW1lID0gaW5Ccm93c2VyICYmIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB3aW5kb3cucGVyZm9ybWFuY2Uubm93XG4gID8gd2luZG93LnBlcmZvcm1hbmNlXG4gIDogRGF0ZTtcblxudmFyIF9rZXkgPSBnZW5LZXkoKTtcblxuZnVuY3Rpb24gZ2VuS2V5ICgpIHtcbiAgcmV0dXJuIFRpbWUubm93KCkudG9GaXhlZCgzKVxufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZUtleSAoKSB7XG4gIHJldHVybiBfa2V5XG59XG5cbmZ1bmN0aW9uIHNldFN0YXRlS2V5IChrZXkpIHtcbiAgX2tleSA9IGtleTtcbn1cblxuZnVuY3Rpb24gcHVzaFN0YXRlICh1cmwsIHJlcGxhY2UpIHtcbiAgc2F2ZVNjcm9sbFBvc2l0aW9uKCk7XG4gIC8vIHRyeS4uLmNhdGNoIHRoZSBwdXNoU3RhdGUgY2FsbCB0byBnZXQgYXJvdW5kIFNhZmFyaVxuICAvLyBET00gRXhjZXB0aW9uIDE4IHdoZXJlIGl0IGxpbWl0cyB0byAxMDAgcHVzaFN0YXRlIGNhbGxzXG4gIHZhciBoaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIHRyeSB7XG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHsga2V5OiBfa2V5IH0sICcnLCB1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfa2V5ID0gZ2VuS2V5KCk7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7IGtleTogX2tleSB9LCAnJywgdXJsKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB3aW5kb3cubG9jYXRpb25bcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdhc3NpZ24nXSh1cmwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VTdGF0ZSAodXJsKSB7XG4gIHB1c2hTdGF0ZSh1cmwsIHRydWUpO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcnVuUXVldWUgKHF1ZXVlLCBmbiwgY2IpIHtcbiAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gcXVldWUubGVuZ3RoKSB7XG4gICAgICBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocXVldWVbaW5kZXhdKSB7XG4gICAgICAgIGZuKHF1ZXVlW2luZGV4XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN0ZXAoaW5kZXggKyAxKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGVwKGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBzdGVwKDApO1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50cyAobWF0Y2hlZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgdmFyIGhhc0FzeW5jID0gZmFsc2U7XG4gICAgdmFyIHBlbmRpbmcgPSAwO1xuICAgIHZhciBlcnJvciA9IG51bGw7XG5cbiAgICBmbGF0TWFwQ29tcG9uZW50cyhtYXRjaGVkLCBmdW5jdGlvbiAoZGVmLCBfLCBtYXRjaCwga2V5KSB7XG4gICAgICAvLyBpZiBpdCdzIGEgZnVuY3Rpb24gYW5kIGRvZXNuJ3QgaGF2ZSBjaWQgYXR0YWNoZWQsXG4gICAgICAvLyBhc3N1bWUgaXQncyBhbiBhc3luYyBjb21wb25lbnQgcmVzb2x2ZSBmdW5jdGlvbi5cbiAgICAgIC8vIHdlIGFyZSBub3QgdXNpbmcgVnVlJ3MgZGVmYXVsdCBhc3luYyByZXNvbHZpbmcgbWVjaGFuaXNtIGJlY2F1c2VcbiAgICAgIC8vIHdlIHdhbnQgdG8gaGFsdCB0aGUgbmF2aWdhdGlvbiB1bnRpbCB0aGUgaW5jb21pbmcgY29tcG9uZW50IGhhcyBiZWVuXG4gICAgICAvLyByZXNvbHZlZC5cbiAgICAgIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nICYmIGRlZi5jaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBoYXNBc3luYyA9IHRydWU7XG4gICAgICAgIHBlbmRpbmcrKztcblxuICAgICAgICB2YXIgcmVzb2x2ZSA9IG9uY2UoZnVuY3Rpb24gKHJlc29sdmVkRGVmKSB7XG4gICAgICAgICAgaWYgKHJlc29sdmVkRGVmLl9fZXNNb2R1bGUgJiYgcmVzb2x2ZWREZWYuZGVmYXVsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZWREZWYgPSByZXNvbHZlZERlZi5kZWZhdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBzYXZlIHJlc29sdmVkIG9uIGFzeW5jIGZhY3RvcnkgaW4gY2FzZSBpdCdzIHVzZWQgZWxzZXdoZXJlXG4gICAgICAgICAgZGVmLnJlc29sdmVkID0gdHlwZW9mIHJlc29sdmVkRGVmID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHJlc29sdmVkRGVmXG4gICAgICAgICAgICA6IF9WdWUuZXh0ZW5kKHJlc29sdmVkRGVmKTtcbiAgICAgICAgICBtYXRjaC5jb21wb25lbnRzW2tleV0gPSByZXNvbHZlZERlZjtcbiAgICAgICAgICBwZW5kaW5nLS07XG4gICAgICAgICAgaWYgKHBlbmRpbmcgPD0gMCkge1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHJlamVjdCA9IG9uY2UoZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIHZhciBtc2cgPSBcIkZhaWxlZCB0byByZXNvbHZlIGFzeW5jIGNvbXBvbmVudCBcIiArIGtleSArIFwiOiBcIiArIHJlYXNvbjtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oZmFsc2UsIG1zZyk7XG4gICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IgPSBpc0Vycm9yKHJlYXNvbilcbiAgICAgICAgICAgICAgPyByZWFzb25cbiAgICAgICAgICAgICAgOiBuZXcgRXJyb3IobXNnKTtcbiAgICAgICAgICAgIG5leHQoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHJlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBkZWYocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbmV3IHN5bnRheCBpbiBWdWUgMi4zXG4gICAgICAgICAgICB2YXIgY29tcCA9IHJlcy5jb21wb25lbnQ7XG4gICAgICAgICAgICBpZiAoY29tcCAmJiB0eXBlb2YgY29tcC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbXAudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFoYXNBc3luYykgeyBuZXh0KCk7IH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmbGF0TWFwQ29tcG9uZW50cyAoXG4gIG1hdGNoZWQsXG4gIGZuXG4pIHtcbiAgcmV0dXJuIGZsYXR0ZW4obWF0Y2hlZC5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobS5jb21wb25lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZm4oXG4gICAgICBtLmNvbXBvbmVudHNba2V5XSxcbiAgICAgIG0uaW5zdGFuY2VzW2tleV0sXG4gICAgICBtLCBrZXlcbiAgICApOyB9KVxuICB9KSlcbn1cblxuZnVuY3Rpb24gZmxhdHRlbiAoYXJyKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcnIpXG59XG5cbi8vIGluIFdlYnBhY2sgMiwgcmVxdWlyZS5lbnN1cmUgbm93IGFsc28gcmV0dXJucyBhIFByb21pc2Vcbi8vIHNvIHRoZSByZXNvbHZlL3JlamVjdCBmdW5jdGlvbnMgbWF5IGdldCBjYWxsZWQgYW4gZXh0cmEgdGltZVxuLy8gaWYgdGhlIHVzZXIgdXNlcyBhbiBhcnJvdyBmdW5jdGlvbiBzaG9ydGhhbmQgdGhhdCBoYXBwZW5zIHRvXG4vLyByZXR1cm4gdGhhdCBQcm9taXNlLlxuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIGlmIChjYWxsZWQpIHsgcmV0dXJuIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgSGlzdG9yeSA9IGZ1bmN0aW9uIEhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgdGhpcy5iYXNlID0gbm9ybWFsaXplQmFzZShiYXNlKTtcbiAgLy8gc3RhcnQgd2l0aCBhIHJvdXRlIG9iamVjdCB0aGF0IHN0YW5kcyBmb3IgXCJub3doZXJlXCJcbiAgdGhpcy5jdXJyZW50ID0gU1RBUlQ7XG4gIHRoaXMucGVuZGluZyA9IG51bGw7XG4gIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgdGhpcy5yZWFkeUNicyA9IFtdO1xuICB0aGlzLnJlYWR5RXJyb3JDYnMgPSBbXTtcbiAgdGhpcy5lcnJvckNicyA9IFtdO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuIChjYikge1xuICB0aGlzLmNiID0gY2I7XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5vblJlYWR5ID0gZnVuY3Rpb24gb25SZWFkeSAoY2IsIGVycm9yQ2IpIHtcbiAgaWYgKHRoaXMucmVhZHkpIHtcbiAgICBjYigpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucmVhZHlDYnMucHVzaChjYik7XG4gICAgaWYgKGVycm9yQ2IpIHtcbiAgICAgIHRoaXMucmVhZHlFcnJvckNicy5wdXNoKGVycm9yQ2IpO1xuICAgIH1cbiAgfVxufTtcblxuSGlzdG9yeS5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IgKGVycm9yQ2IpIHtcbiAgdGhpcy5lcnJvckNicy5wdXNoKGVycm9yQ2IpO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUudHJhbnNpdGlvblRvID0gZnVuY3Rpb24gdHJhbnNpdGlvblRvIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciByb3V0ZSA9IHRoaXMucm91dGVyLm1hdGNoKGxvY2F0aW9uLCB0aGlzLmN1cnJlbnQpO1xuICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLnVwZGF0ZVJvdXRlKHJvdXRlKTtcbiAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIHRoaXMkMS5lbnN1cmVVUkwoKTtcblxuICAgIC8vIGZpcmUgcmVhZHkgY2JzIG9uY2VcbiAgICBpZiAoIXRoaXMkMS5yZWFkeSkge1xuICAgICAgdGhpcyQxLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMkMS5yZWFkeUNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyBjYihyb3V0ZSk7IH0pO1xuICAgIH1cbiAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChvbkFib3J0KSB7XG4gICAgICBvbkFib3J0KGVycik7XG4gICAgfVxuICAgIGlmIChlcnIgJiYgIXRoaXMkMS5yZWFkeSkge1xuICAgICAgdGhpcyQxLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMkMS5yZWFkeUVycm9yQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IGNiKGVycik7IH0pO1xuICAgIH1cbiAgfSk7XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS5jb25maXJtVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uIChyb3V0ZSwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuICB2YXIgYWJvcnQgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGlzRXJyb3IoZXJyKSkge1xuICAgICAgaWYgKHRoaXMkMS5lcnJvckNicy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcyQxLmVycm9yQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IGNiKGVycik7IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihmYWxzZSwgJ3VuY2F1Z2h0IGVycm9yIGR1cmluZyByb3V0ZSBuYXZpZ2F0aW9uOicpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuICAgIG9uQWJvcnQgJiYgb25BYm9ydChlcnIpO1xuICB9O1xuICBpZiAoXG4gICAgaXNTYW1lUm91dGUocm91dGUsIGN1cnJlbnQpICYmXG4gICAgLy8gaW4gdGhlIGNhc2UgdGhlIHJvdXRlIG1hcCBoYXMgYmVlbiBkeW5hbWljYWxseSBhcHBlbmRlZCB0b1xuICAgIHJvdXRlLm1hdGNoZWQubGVuZ3RoID09PSBjdXJyZW50Lm1hdGNoZWQubGVuZ3RoXG4gICkge1xuICAgIHRoaXMuZW5zdXJlVVJMKCk7XG4gICAgcmV0dXJuIGFib3J0KClcbiAgfVxuXG4gIHZhciByZWYgPSByZXNvbHZlUXVldWUodGhpcy5jdXJyZW50Lm1hdGNoZWQsIHJvdXRlLm1hdGNoZWQpO1xuICAgIHZhciB1cGRhdGVkID0gcmVmLnVwZGF0ZWQ7XG4gICAgdmFyIGRlYWN0aXZhdGVkID0gcmVmLmRlYWN0aXZhdGVkO1xuICAgIHZhciBhY3RpdmF0ZWQgPSByZWYuYWN0aXZhdGVkO1xuXG4gIHZhciBxdWV1ZSA9IFtdLmNvbmNhdChcbiAgICAvLyBpbi1jb21wb25lbnQgbGVhdmUgZ3VhcmRzXG4gICAgZXh0cmFjdExlYXZlR3VhcmRzKGRlYWN0aXZhdGVkKSxcbiAgICAvLyBnbG9iYWwgYmVmb3JlIGhvb2tzXG4gICAgdGhpcy5yb3V0ZXIuYmVmb3JlSG9va3MsXG4gICAgLy8gaW4tY29tcG9uZW50IHVwZGF0ZSBob29rc1xuICAgIGV4dHJhY3RVcGRhdGVIb29rcyh1cGRhdGVkKSxcbiAgICAvLyBpbi1jb25maWcgZW50ZXIgZ3VhcmRzXG4gICAgYWN0aXZhdGVkLm1hcChmdW5jdGlvbiAobSkgeyByZXR1cm4gbS5iZWZvcmVFbnRlcjsgfSksXG4gICAgLy8gYXN5bmMgY29tcG9uZW50c1xuICAgIHJlc29sdmVBc3luY0NvbXBvbmVudHMoYWN0aXZhdGVkKVxuICApO1xuXG4gIHRoaXMucGVuZGluZyA9IHJvdXRlO1xuICB2YXIgaXRlcmF0b3IgPSBmdW5jdGlvbiAoaG9vaywgbmV4dCkge1xuICAgIGlmICh0aGlzJDEucGVuZGluZyAhPT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBhYm9ydCgpXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBob29rKHJvdXRlLCBjdXJyZW50LCBmdW5jdGlvbiAodG8pIHtcbiAgICAgICAgaWYgKHRvID09PSBmYWxzZSB8fCBpc0Vycm9yKHRvKSkge1xuICAgICAgICAgIC8vIG5leHQoZmFsc2UpIC0+IGFib3J0IG5hdmlnYXRpb24sIGVuc3VyZSBjdXJyZW50IFVSTFxuICAgICAgICAgIHRoaXMkMS5lbnN1cmVVUkwodHJ1ZSk7XG4gICAgICAgICAgYWJvcnQodG8pO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHR5cGVvZiB0byA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAodHlwZW9mIHRvID09PSAnb2JqZWN0JyAmJiAoXG4gICAgICAgICAgICB0eXBlb2YgdG8ucGF0aCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHR5cGVvZiB0by5uYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICkpXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIG5leHQoJy8nKSBvciBuZXh0KHsgcGF0aDogJy8nIH0pIC0+IHJlZGlyZWN0XG4gICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHRvID09PSAnb2JqZWN0JyAmJiB0by5yZXBsYWNlKSB7XG4gICAgICAgICAgICB0aGlzJDEucmVwbGFjZSh0byk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMkMS5wdXNoKHRvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY29uZmlybSB0cmFuc2l0aW9uIGFuZCBwYXNzIG9uIHRoZSB2YWx1ZVxuICAgICAgICAgIG5leHQodG8pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhYm9ydChlKTtcbiAgICB9XG4gIH07XG5cbiAgcnVuUXVldWUocXVldWUsIGl0ZXJhdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvc3RFbnRlckNicyA9IFtdO1xuICAgIHZhciBpc1ZhbGlkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcyQxLmN1cnJlbnQgPT09IHJvdXRlOyB9O1xuICAgIC8vIHdhaXQgdW50aWwgYXN5bmMgY29tcG9uZW50cyBhcmUgcmVzb2x2ZWQgYmVmb3JlXG4gICAgLy8gZXh0cmFjdGluZyBpbi1jb21wb25lbnQgZW50ZXIgZ3VhcmRzXG4gICAgdmFyIGVudGVyR3VhcmRzID0gZXh0cmFjdEVudGVyR3VhcmRzKGFjdGl2YXRlZCwgcG9zdEVudGVyQ2JzLCBpc1ZhbGlkKTtcbiAgICB2YXIgcXVldWUgPSBlbnRlckd1YXJkcy5jb25jYXQodGhpcyQxLnJvdXRlci5yZXNvbHZlSG9va3MpO1xuICAgIHJ1blF1ZXVlKHF1ZXVlLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMkMS5wZW5kaW5nICE9PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gYWJvcnQoKVxuICAgICAgfVxuICAgICAgdGhpcyQxLnBlbmRpbmcgPSBudWxsO1xuICAgICAgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgICBpZiAodGhpcyQxLnJvdXRlci5hcHApIHtcbiAgICAgICAgdGhpcyQxLnJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwb3N0RW50ZXJDYnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgY2IoKTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLnVwZGF0ZVJvdXRlID0gZnVuY3Rpb24gdXBkYXRlUm91dGUgKHJvdXRlKSB7XG4gIHZhciBwcmV2ID0gdGhpcy5jdXJyZW50O1xuICB0aGlzLmN1cnJlbnQgPSByb3V0ZTtcbiAgdGhpcy5jYiAmJiB0aGlzLmNiKHJvdXRlKTtcbiAgdGhpcy5yb3V0ZXIuYWZ0ZXJIb29rcy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgaG9vayAmJiBob29rKHJvdXRlLCBwcmV2KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVCYXNlIChiYXNlKSB7XG4gIGlmICghYmFzZSkge1xuICAgIGlmIChpbkJyb3dzZXIpIHtcbiAgICAgIC8vIHJlc3BlY3QgPGJhc2U+IHRhZ1xuICAgICAgdmFyIGJhc2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKTtcbiAgICAgIGJhc2UgPSAoYmFzZUVsICYmIGJhc2VFbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkgfHwgJy8nO1xuICAgICAgLy8gc3RyaXAgZnVsbCBVUkwgb3JpZ2luXG4gICAgICBiYXNlID0gYmFzZS5yZXBsYWNlKC9eaHR0cHM/OlxcL1xcL1teXFwvXSsvLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2UgPSAnLyc7XG4gICAgfVxuICB9XG4gIC8vIG1ha2Ugc3VyZSB0aGVyZSdzIHRoZSBzdGFydGluZyBzbGFzaFxuICBpZiAoYmFzZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgIGJhc2UgPSAnLycgKyBiYXNlO1xuICB9XG4gIC8vIHJlbW92ZSB0cmFpbGluZyBzbGFzaFxuICByZXR1cm4gYmFzZS5yZXBsYWNlKC9cXC8kLywgJycpXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWV1ZSAoXG4gIGN1cnJlbnQsXG4gIG5leHRcbikge1xuICB2YXIgaTtcbiAgdmFyIG1heCA9IE1hdGgubWF4KGN1cnJlbnQubGVuZ3RoLCBuZXh0Lmxlbmd0aCk7XG4gIGZvciAoaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgIGlmIChjdXJyZW50W2ldICE9PSBuZXh0W2ldKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIHVwZGF0ZWQ6IG5leHQuc2xpY2UoMCwgaSksXG4gICAgYWN0aXZhdGVkOiBuZXh0LnNsaWNlKGkpLFxuICAgIGRlYWN0aXZhdGVkOiBjdXJyZW50LnNsaWNlKGkpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdEd1YXJkcyAoXG4gIHJlY29yZHMsXG4gIG5hbWUsXG4gIGJpbmQsXG4gIHJldmVyc2Vcbikge1xuICB2YXIgZ3VhcmRzID0gZmxhdE1hcENvbXBvbmVudHMocmVjb3JkcywgZnVuY3Rpb24gKGRlZiwgaW5zdGFuY2UsIG1hdGNoLCBrZXkpIHtcbiAgICB2YXIgZ3VhcmQgPSBleHRyYWN0R3VhcmQoZGVmLCBuYW1lKTtcbiAgICBpZiAoZ3VhcmQpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGd1YXJkKVxuICAgICAgICA/IGd1YXJkLm1hcChmdW5jdGlvbiAoZ3VhcmQpIHsgcmV0dXJuIGJpbmQoZ3VhcmQsIGluc3RhbmNlLCBtYXRjaCwga2V5KTsgfSlcbiAgICAgICAgOiBiaW5kKGd1YXJkLCBpbnN0YW5jZSwgbWF0Y2gsIGtleSlcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmxhdHRlbihyZXZlcnNlID8gZ3VhcmRzLnJldmVyc2UoKSA6IGd1YXJkcylcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEd1YXJkIChcbiAgZGVmLFxuICBrZXlcbikge1xuICBpZiAodHlwZW9mIGRlZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGV4dGVuZCBub3cgc28gdGhhdCBnbG9iYWwgbWl4aW5zIGFyZSBhcHBsaWVkLlxuICAgIGRlZiA9IF9WdWUuZXh0ZW5kKGRlZik7XG4gIH1cbiAgcmV0dXJuIGRlZi5vcHRpb25zW2tleV1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdExlYXZlR3VhcmRzIChkZWFjdGl2YXRlZCkge1xuICByZXR1cm4gZXh0cmFjdEd1YXJkcyhkZWFjdGl2YXRlZCwgJ2JlZm9yZVJvdXRlTGVhdmUnLCBiaW5kR3VhcmQsIHRydWUpXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RVcGRhdGVIb29rcyAodXBkYXRlZCkge1xuICByZXR1cm4gZXh0cmFjdEd1YXJkcyh1cGRhdGVkLCAnYmVmb3JlUm91dGVVcGRhdGUnLCBiaW5kR3VhcmQpXG59XG5cbmZ1bmN0aW9uIGJpbmRHdWFyZCAoZ3VhcmQsIGluc3RhbmNlKSB7XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiBib3VuZFJvdXRlR3VhcmQgKCkge1xuICAgICAgcmV0dXJuIGd1YXJkLmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RFbnRlckd1YXJkcyAoXG4gIGFjdGl2YXRlZCxcbiAgY2JzLFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGV4dHJhY3RHdWFyZHMoYWN0aXZhdGVkLCAnYmVmb3JlUm91dGVFbnRlcicsIGZ1bmN0aW9uIChndWFyZCwgXywgbWF0Y2gsIGtleSkge1xuICAgIHJldHVybiBiaW5kRW50ZXJHdWFyZChndWFyZCwgbWF0Y2gsIGtleSwgY2JzLCBpc1ZhbGlkKVxuICB9KVxufVxuXG5mdW5jdGlvbiBiaW5kRW50ZXJHdWFyZCAoXG4gIGd1YXJkLFxuICBtYXRjaCxcbiAga2V5LFxuICBjYnMsXG4gIGlzVmFsaWRcbikge1xuICByZXR1cm4gZnVuY3Rpb24gcm91dGVFbnRlckd1YXJkICh0bywgZnJvbSwgbmV4dCkge1xuICAgIHJldHVybiBndWFyZCh0bywgZnJvbSwgZnVuY3Rpb24gKGNiKSB7XG4gICAgICBuZXh0KGNiKTtcbiAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2JzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vICM3NTBcbiAgICAgICAgICAvLyBpZiBhIHJvdXRlci12aWV3IGlzIHdyYXBwZWQgd2l0aCBhbiBvdXQtaW4gdHJhbnNpdGlvbixcbiAgICAgICAgICAvLyB0aGUgaW5zdGFuY2UgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCBhdCB0aGlzIHRpbWUuXG4gICAgICAgICAgLy8gd2Ugd2lsbCBuZWVkIHRvIHBvbGwgZm9yIHJlZ2lzdHJhdGlvbiB1bnRpbCBjdXJyZW50IHJvdXRlXG4gICAgICAgICAgLy8gaXMgbm8gbG9uZ2VyIHZhbGlkLlxuICAgICAgICAgIHBvbGwoY2IsIG1hdGNoLmluc3RhbmNlcywga2V5LCBpc1ZhbGlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2xsIChcbiAgY2IsIC8vIHNvbWVob3cgZmxvdyBjYW5ub3QgaW5mZXIgdGhpcyBpcyBhIGZ1bmN0aW9uXG4gIGluc3RhbmNlcyxcbiAga2V5LFxuICBpc1ZhbGlkXG4pIHtcbiAgaWYgKGluc3RhbmNlc1trZXldKSB7XG4gICAgY2IoaW5zdGFuY2VzW2tleV0pO1xuICB9IGVsc2UgaWYgKGlzVmFsaWQoKSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcG9sbChjYiwgaW5zdGFuY2VzLCBrZXksIGlzVmFsaWQpO1xuICAgIH0sIDE2KTtcbiAgfVxufVxuXG4vKiAgKi9cblxuXG52YXIgSFRNTDVIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5JCQxKSB7XG4gIGZ1bmN0aW9uIEhUTUw1SGlzdG9yeSAocm91dGVyLCBiYXNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBIaXN0b3J5JCQxLmNhbGwodGhpcywgcm91dGVyLCBiYXNlKTtcblxuICAgIHZhciBleHBlY3RTY3JvbGwgPSByb3V0ZXIub3B0aW9ucy5zY3JvbGxCZWhhdmlvcjtcblxuICAgIGlmIChleHBlY3RTY3JvbGwpIHtcbiAgICAgIHNldHVwU2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpcyQxLmN1cnJlbnQ7XG4gICAgICB0aGlzJDEudHJhbnNpdGlvblRvKGdldExvY2F0aW9uKHRoaXMkMS5iYXNlKSwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgIGlmIChleHBlY3RTY3JvbGwpIHtcbiAgICAgICAgICBoYW5kbGVTY3JvbGwocm91dGVyLCByb3V0ZSwgY3VycmVudCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKCBIaXN0b3J5JCQxICkgSFRNTDVIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3RvcnkkJDE7XG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5JCQxICYmIEhpc3RvcnkkJDEucHJvdG90eXBlICk7XG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIVE1MNUhpc3Rvcnk7XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBmcm9tUm91dGUgPSByZWYuY3VycmVudDtcbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICBwdXNoU3RhdGUoY2xlYW5QYXRoKHRoaXMkMS5iYXNlICsgcm91dGUuZnVsbFBhdGgpKTtcbiAgICAgIGhhbmRsZVNjcm9sbCh0aGlzJDEucm91dGVyLCByb3V0ZSwgZnJvbVJvdXRlLCBmYWxzZSk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgZnJvbVJvdXRlID0gcmVmLmN1cnJlbnQ7XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcmVwbGFjZVN0YXRlKGNsZWFuUGF0aCh0aGlzJDEuYmFzZSArIHJvdXRlLmZ1bGxQYXRoKSk7XG4gICAgICBoYW5kbGVTY3JvbGwodGhpcyQxLnJvdXRlciwgcm91dGUsIGZyb21Sb3V0ZSwgZmFsc2UpO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB9LCBvbkFib3J0KTtcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmVuc3VyZVVSTCA9IGZ1bmN0aW9uIGVuc3VyZVVSTCAocHVzaCkge1xuICAgIGlmIChnZXRMb2NhdGlvbih0aGlzLmJhc2UpICE9PSB0aGlzLmN1cnJlbnQuZnVsbFBhdGgpIHtcbiAgICAgIHZhciBjdXJyZW50ID0gY2xlYW5QYXRoKHRoaXMuYmFzZSArIHRoaXMuY3VycmVudC5mdWxsUGF0aCk7XG4gICAgICBwdXNoID8gcHVzaFN0YXRlKGN1cnJlbnQpIDogcmVwbGFjZVN0YXRlKGN1cnJlbnQpO1xuICAgIH1cbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmdldEN1cnJlbnRMb2NhdGlvbiA9IGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldExvY2F0aW9uKHRoaXMuYmFzZSlcbiAgfTtcblxuICByZXR1cm4gSFRNTDVIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbmZ1bmN0aW9uIGdldExvY2F0aW9uIChiYXNlKSB7XG4gIHZhciBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICBpZiAoYmFzZSAmJiBwYXRoLmluZGV4T2YoYmFzZSkgPT09IDApIHtcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlLmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIChwYXRoIHx8ICcvJykgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2hcbn1cblxuLyogICovXG5cblxudmFyIEhhc2hIaXN0b3J5ID0gKGZ1bmN0aW9uIChIaXN0b3J5JCQxKSB7XG4gIGZ1bmN0aW9uIEhhc2hIaXN0b3J5IChyb3V0ZXIsIGJhc2UsIGZhbGxiYWNrKSB7XG4gICAgSGlzdG9yeSQkMS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSk7XG4gICAgLy8gY2hlY2sgaGlzdG9yeSBmYWxsYmFjayBkZWVwbGlua2luZ1xuICAgIGlmIChmYWxsYmFjayAmJiBjaGVja0ZhbGxiYWNrKHRoaXMuYmFzZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBlbnN1cmVTbGFzaCgpO1xuICB9XG5cbiAgaWYgKCBIaXN0b3J5JCQxICkgSGFzaEhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeSQkMTtcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSQkMSAmJiBIaXN0b3J5JCQxLnByb3RvdHlwZSApO1xuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIYXNoSGlzdG9yeTtcblxuICAvLyB0aGlzIGlzIGRlbGF5ZWQgdW50aWwgdGhlIGFwcCBtb3VudHNcbiAgLy8gdG8gYXZvaWQgdGhlIGhhc2hjaGFuZ2UgbGlzdGVuZXIgYmVpbmcgZmlyZWQgdG9vIGVhcmx5XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5zZXR1cExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldHVwTGlzdGVuZXJzICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFlbnN1cmVTbGFzaCgpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcyQxLnRyYW5zaXRpb25UbyhnZXRIYXNoKCksIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICByZXBsYWNlSGFzaChyb3V0ZS5mdWxsUGF0aCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcHVzaEhhc2gocm91dGUuZnVsbFBhdGgpO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB9LCBvbkFib3J0KTtcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcmVwbGFjZUhhc2gocm91dGUuZnVsbFBhdGgpO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB9LCBvbkFib3J0KTtcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICAgIHdpbmRvdy5oaXN0b3J5LmdvKG4pO1xuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKHB1c2gpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudC5mdWxsUGF0aDtcbiAgICBpZiAoZ2V0SGFzaCgpICE9PSBjdXJyZW50KSB7XG4gICAgICBwdXNoID8gcHVzaEhhc2goY3VycmVudCkgOiByZXBsYWNlSGFzaChjdXJyZW50KTtcbiAgICB9XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmdldEN1cnJlbnRMb2NhdGlvbiA9IGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldEhhc2goKVxuICB9O1xuXG4gIHJldHVybiBIYXNoSGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG5mdW5jdGlvbiBjaGVja0ZhbGxiYWNrIChiYXNlKSB7XG4gIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKGJhc2UpO1xuICBpZiAoIS9eXFwvIy8udGVzdChsb2NhdGlvbikpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcbiAgICAgIGNsZWFuUGF0aChiYXNlICsgJy8jJyArIGxvY2F0aW9uKVxuICAgICk7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBlbnN1cmVTbGFzaCAoKSB7XG4gIHZhciBwYXRoID0gZ2V0SGFzaCgpO1xuICBpZiAocGF0aC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmVwbGFjZUhhc2goJy8nICsgcGF0aCk7XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBnZXRIYXNoICgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICB2YXIgaW5kZXggPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgcmV0dXJuIGluZGV4ID09PSAtMSA/ICcnIDogaHJlZi5zbGljZShpbmRleCArIDEpXG59XG5cbmZ1bmN0aW9uIHB1c2hIYXNoIChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2ggKHBhdGgpIHtcbiAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgdmFyIGkgPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgdmFyIGJhc2UgPSBpID49IDAgPyBocmVmLnNsaWNlKDAsIGkpIDogaHJlZjtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoKGJhc2UgKyBcIiNcIiArIHBhdGgpKTtcbn1cblxuLyogICovXG5cblxudmFyIEFic3RyYWN0SGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSQkMSkge1xuICBmdW5jdGlvbiBBYnN0cmFjdEhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICAgIEhpc3RvcnkkJDEuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpO1xuICAgIHRoaXMuc3RhY2sgPSBbXTtcbiAgICB0aGlzLmluZGV4ID0gLTE7XG4gIH1cblxuICBpZiAoIEhpc3RvcnkkJDEgKSBBYnN0cmFjdEhpc3RvcnkuX19wcm90b19fID0gSGlzdG9yeSQkMTtcbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkkJDEgJiYgSGlzdG9yeSQkMS5wcm90b3R5cGUgKTtcbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFic3RyYWN0SGlzdG9yeTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgdGhpcyQxLnN0YWNrID0gdGhpcyQxLnN0YWNrLnNsaWNlKDAsIHRoaXMkMS5pbmRleCArIDEpLmNvbmNhdChyb3V0ZSk7XG4gICAgICB0aGlzJDEuaW5kZXgrKztcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHRoaXMkMS5zdGFjayA9IHRoaXMkMS5zdGFjay5zbGljZSgwLCB0aGlzJDEuaW5kZXgpLmNvbmNhdChyb3V0ZSk7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHRhcmdldEluZGV4ID0gdGhpcy5pbmRleCArIG47XG4gICAgaWYgKHRhcmdldEluZGV4IDwgMCB8fCB0YXJnZXRJbmRleCA+PSB0aGlzLnN0YWNrLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciByb3V0ZSA9IHRoaXMuc3RhY2tbdGFyZ2V0SW5kZXhdO1xuICAgIHRoaXMuY29uZmlybVRyYW5zaXRpb24ocm91dGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMkMS5pbmRleCA9IHRhcmdldEluZGV4O1xuICAgICAgdGhpcyQxLnVwZGF0ZVJvdXRlKHJvdXRlKTtcbiAgICB9KTtcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmdldEN1cnJlbnRMb2NhdGlvbiA9IGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIGN1cnJlbnQgPyBjdXJyZW50LmZ1bGxQYXRoIDogJy8nXG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKCkge1xuICAgIC8vIG5vb3BcbiAgfTtcblxuICByZXR1cm4gQWJzdHJhY3RIaXN0b3J5O1xufShIaXN0b3J5KSk7XG5cbi8qICAqL1xuXG52YXIgVnVlUm91dGVyID0gZnVuY3Rpb24gVnVlUm91dGVyIChvcHRpb25zKSB7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIHRoaXMuYXBwID0gbnVsbDtcbiAgdGhpcy5hcHBzID0gW107XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuYmVmb3JlSG9va3MgPSBbXTtcbiAgdGhpcy5yZXNvbHZlSG9va3MgPSBbXTtcbiAgdGhpcy5hZnRlckhvb2tzID0gW107XG4gIHRoaXMubWF0Y2hlciA9IGNyZWF0ZU1hdGNoZXIob3B0aW9ucy5yb3V0ZXMgfHwgW10sIHRoaXMpO1xuXG4gIHZhciBtb2RlID0gb3B0aW9ucy5tb2RlIHx8ICdoYXNoJztcbiAgdGhpcy5mYWxsYmFjayA9IG1vZGUgPT09ICdoaXN0b3J5JyAmJiAhc3VwcG9ydHNQdXNoU3RhdGUgJiYgb3B0aW9ucy5mYWxsYmFjayAhPT0gZmFsc2U7XG4gIGlmICh0aGlzLmZhbGxiYWNrKSB7XG4gICAgbW9kZSA9ICdoYXNoJztcbiAgfVxuICBpZiAoIWluQnJvd3Nlcikge1xuICAgIG1vZGUgPSAnYWJzdHJhY3QnO1xuICB9XG4gIHRoaXMubW9kZSA9IG1vZGU7XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSAnaGlzdG9yeSc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSFRNTDVIaXN0b3J5KHRoaXMsIG9wdGlvbnMuYmFzZSk7XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2hhc2gnOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhhc2hIaXN0b3J5KHRoaXMsIG9wdGlvbnMuYmFzZSwgdGhpcy5mYWxsYmFjayk7XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Fic3RyYWN0JzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBBYnN0cmFjdEhpc3RvcnkodGhpcywgb3B0aW9ucy5iYXNlKTtcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGFzc2VydChmYWxzZSwgKFwiaW52YWxpZCBtb2RlOiBcIiArIG1vZGUpKTtcbiAgICAgIH1cbiAgfVxufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgY3VycmVudFJvdXRlOiB7fSB9O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24gbWF0Y2ggKFxuICByYXcsXG4gIGN1cnJlbnQsXG4gIHJlZGlyZWN0ZWRGcm9tXG4pIHtcbiAgcmV0dXJuIHRoaXMubWF0Y2hlci5tYXRjaChyYXcsIGN1cnJlbnQsIHJlZGlyZWN0ZWRGcm9tKVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmN1cnJlbnRSb3V0ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmhpc3RvcnkgJiYgdGhpcy5oaXN0b3J5LmN1cnJlbnRcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIGluaXQgKGFwcCAvKiBWdWUgY29tcG9uZW50IGluc3RhbmNlICovKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBhc3NlcnQoXG4gICAgaW5zdGFsbC5pbnN0YWxsZWQsXG4gICAgXCJub3QgaW5zdGFsbGVkLiBNYWtlIHN1cmUgdG8gY2FsbCBgVnVlLnVzZShWdWVSb3V0ZXIpYCBcIiArXG4gICAgXCJiZWZvcmUgY3JlYXRpbmcgcm9vdCBpbnN0YW5jZS5cIlxuICApO1xuXG4gIHRoaXMuYXBwcy5wdXNoKGFwcCk7XG5cbiAgLy8gbWFpbiBhcHAgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgaWYgKHRoaXMuYXBwKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICB2YXIgaGlzdG9yeSA9IHRoaXMuaGlzdG9yeTtcblxuICBpZiAoaGlzdG9yeSBpbnN0YW5jZW9mIEhUTUw1SGlzdG9yeSkge1xuICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKGhpc3RvcnkuZ2V0Q3VycmVudExvY2F0aW9uKCkpO1xuICB9IGVsc2UgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIYXNoSGlzdG9yeSkge1xuICAgIHZhciBzZXR1cEhhc2hMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGhpc3Rvcnkuc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICB9O1xuICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKFxuICAgICAgaGlzdG9yeS5nZXRDdXJyZW50TG9jYXRpb24oKSxcbiAgICAgIHNldHVwSGFzaExpc3RlbmVyLFxuICAgICAgc2V0dXBIYXNoTGlzdGVuZXJcbiAgICApO1xuICB9XG5cbiAgaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgdGhpcyQxLmFwcHMuZm9yRWFjaChmdW5jdGlvbiAoYXBwKSB7XG4gICAgICBhcHAuX3JvdXRlID0gcm91dGU7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5iZWZvcmVFYWNoID0gZnVuY3Rpb24gYmVmb3JlRWFjaCAoZm4pIHtcbiAgcmV0dXJuIHJlZ2lzdGVySG9vayh0aGlzLmJlZm9yZUhvb2tzLCBmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmVmb3JlUmVzb2x2ZSA9IGZ1bmN0aW9uIGJlZm9yZVJlc29sdmUgKGZuKSB7XG4gIHJldHVybiByZWdpc3Rlckhvb2sodGhpcy5yZXNvbHZlSG9va3MsIGZuKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5hZnRlckVhY2ggPSBmdW5jdGlvbiBhZnRlckVhY2ggKGZuKSB7XG4gIHJldHVybiByZWdpc3Rlckhvb2sodGhpcy5hZnRlckhvb2tzLCBmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUub25SZWFkeSA9IGZ1bmN0aW9uIG9uUmVhZHkgKGNiLCBlcnJvckNiKSB7XG4gIHRoaXMuaGlzdG9yeS5vblJlYWR5KGNiLCBlcnJvckNiKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IgKGVycm9yQ2IpIHtcbiAgdGhpcy5oaXN0b3J5Lm9uRXJyb3IoZXJyb3JDYik7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICB0aGlzLmhpc3RvcnkucHVzaChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCk7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICB0aGlzLmhpc3RvcnkucmVwbGFjZShsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCk7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgdGhpcy5oaXN0b3J5LmdvKG4pO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5iYWNrID0gZnVuY3Rpb24gYmFjayAoKSB7XG4gIHRoaXMuZ28oLTEpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5mb3J3YXJkID0gZnVuY3Rpb24gZm9yd2FyZCAoKSB7XG4gIHRoaXMuZ28oMSk7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmdldE1hdGNoZWRDb21wb25lbnRzID0gZnVuY3Rpb24gZ2V0TWF0Y2hlZENvbXBvbmVudHMgKHRvKSB7XG4gIHZhciByb3V0ZSA9IHRvXG4gICAgPyB0by5tYXRjaGVkXG4gICAgICA/IHRvXG4gICAgICA6IHRoaXMucmVzb2x2ZSh0bykucm91dGVcbiAgICA6IHRoaXMuY3VycmVudFJvdXRlO1xuICBpZiAoIXJvdXRlKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgcm91dGUubWF0Y2hlZC5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobS5jb21wb25lbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIG0uY29tcG9uZW50c1trZXldXG4gICAgfSlcbiAgfSkpXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlIChcbiAgdG8sXG4gIGN1cnJlbnQsXG4gIGFwcGVuZFxuKSB7XG4gIHZhciBsb2NhdGlvbiA9IG5vcm1hbGl6ZUxvY2F0aW9uKFxuICAgIHRvLFxuICAgIGN1cnJlbnQgfHwgdGhpcy5oaXN0b3J5LmN1cnJlbnQsXG4gICAgYXBwZW5kLFxuICAgIHRoaXNcbiAgKTtcbiAgdmFyIHJvdXRlID0gdGhpcy5tYXRjaChsb2NhdGlvbiwgY3VycmVudCk7XG4gIHZhciBmdWxsUGF0aCA9IHJvdXRlLnJlZGlyZWN0ZWRGcm9tIHx8IHJvdXRlLmZ1bGxQYXRoO1xuICB2YXIgYmFzZSA9IHRoaXMuaGlzdG9yeS5iYXNlO1xuICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYoYmFzZSwgZnVsbFBhdGgsIHRoaXMubW9kZSk7XG4gIHJldHVybiB7XG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIHJvdXRlOiByb3V0ZSxcbiAgICBocmVmOiBocmVmLFxuICAgIC8vIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgbm9ybWFsaXplZFRvOiBsb2NhdGlvbixcbiAgICByZXNvbHZlZDogcm91dGVcbiAgfVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5hZGRSb3V0ZXMgPSBmdW5jdGlvbiBhZGRSb3V0ZXMgKHJvdXRlcykge1xuICB0aGlzLm1hdGNoZXIuYWRkUm91dGVzKHJvdXRlcyk7XG4gIGlmICh0aGlzLmhpc3RvcnkuY3VycmVudCAhPT0gU1RBUlQpIHtcbiAgICB0aGlzLmhpc3RvcnkudHJhbnNpdGlvblRvKHRoaXMuaGlzdG9yeS5nZXRDdXJyZW50TG9jYXRpb24oKSk7XG4gIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWdWVSb3V0ZXIucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJIb29rIChsaXN0LCBmbikge1xuICBsaXN0LnB1c2goZm4pO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpID0gbGlzdC5pbmRleE9mKGZuKTtcbiAgICBpZiAoaSA+IC0xKSB7IGxpc3Quc3BsaWNlKGksIDEpOyB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSHJlZiAoYmFzZSwgZnVsbFBhdGgsIG1vZGUpIHtcbiAgdmFyIHBhdGggPSBtb2RlID09PSAnaGFzaCcgPyAnIycgKyBmdWxsUGF0aCA6IGZ1bGxQYXRoO1xuICByZXR1cm4gYmFzZSA/IGNsZWFuUGF0aChiYXNlICsgJy8nICsgcGF0aCkgOiBwYXRoXG59XG5cblZ1ZVJvdXRlci5pbnN0YWxsID0gaW5zdGFsbDtcblZ1ZVJvdXRlci52ZXJzaW9uID0gJzIuNy4wJztcblxuaWYgKGluQnJvd3NlciAmJiB3aW5kb3cuVnVlKSB7XG4gIHdpbmRvdy5WdWUudXNlKFZ1ZVJvdXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVnVlUm91dGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuY29tbW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5jb21tb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlXCI7XG5pbXBvcnQgcm91dGVyIGZyb20gXCIuL3JvdXRlclwiO1xuXG5yZXF1aXJlKFwiLi9ib290c3RyYXBcIik7XG5yZXF1aXJlKFwiLi9jb21wb25lbnRzXCIpO1xucmVxdWlyZShcIi4vZGlyZWN0aXZlc1wiKTtcbnJlcXVpcmUoXCIuL21peGluc1wiKTtcblxud2luZG93LnN0b3JlID0gc3RvcmU7XG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJvdXRlclxufSk7XG5cbndpbmRvdy5hcHAgPSBhcHA7XG5cbmFwcC4kbW91bnQoXCIjYXBwLWxheW91dFwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04YzAxZTE3ZVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9EYXNoYm9hcmQudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvRGFzaGJvYXJkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gRGFzaGJvYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04YzAxZTE3ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LThjMDFlMTdlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Sb29tcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNjYWI0MDI1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Jvb21zLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvYXBwL1Jvb21zLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUm9vbXMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNjYWI0MDI1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2NhYjQwMjVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1Jvb21zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9Sb29tcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Sb29tLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDRmMTA0ZmNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUm9vbS52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBSb29tLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wNGYxMDRmY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTA0ZjEwNGZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vUm9vbS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Cb29raW5nLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDczZTA0MDFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQm9va2luZy52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEJvb2tpbmcudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ3M2UwNDAxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDczZTA0MDFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Cb29raW5nQXR0ZW5kZWVzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDJmOGJkYThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQm9va2luZ0F0dGVuZGVlcy52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEJvb2tpbmdBdHRlbmRlZXMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTAyZjhiZGE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDJmOGJkYThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nQXR0ZW5kZWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DYWxlbmRhci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFkMDM3MzQ2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NhbGVuZGFyLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9DYWxlbmRhci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENhbGVuZGFyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xZDAzNzM0NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFkMDM3MzQ2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQ2FsZW5kYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9DYWxlbmRhci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IFJvb21zICBmcm9tIFwiLi9Sb29tcy52dWVcIjtcbmltcG9ydCBSb29tICBmcm9tIFwiLi9yb29tL1Jvb20udnVlXCI7XG5pbXBvcnQgRGFzaGJvYXJkICBmcm9tIFwiLi9EYXNoYm9hcmQudnVlXCI7XG5pbXBvcnQgQXBwU3BhY2UgZnJvbSAnLi8uLi9jb21wb25lbnRzL0FwcFNwYWNlLnZ1ZSc7XG5pbXBvcnQgUGFnZU5vdEZvdW5kIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VOb3RGb3VuZC52dWVcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBjb21wb25lbnQ6IEFwcFNwYWNlLFxuICAgIGNoaWxkcmVuIDogW1xuICAgICAgICB7IHBhdGg6IFwiL1wiLCBjb21wb25lbnQ6IERhc2hib2FyZCwgbmFtZTogXCJkYXNoYm9hcmRcIn0sXG4gICAgICAgIHsgcGF0aDogXCIvcHJvdmlkZXIvOnByb3ZpZGVyL3Jvb21zXCIsIG5hbWU6IFwicHJvdmlkZXJfcm9vbXNcIiwgY29tcG9uZW50OiBSb29tcyB9LFxuICAgIF1cbiAgfSxcbiAgeyBwYXRoOiBcIi9yb29tcy86cm9vbVwiLCBuYW1lOiBcInJvb21cIiwgY29tcG9uZW50OiBSb29tIH0sXG4gIHsgcGF0aDogXCIqXCIsIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb3V0ZXMuanMiLCIvKlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHwgR2xvYmFsIFZhcmlhYmxlc1xuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHxcbiAqL1xuXG53aW5kb3cubGFyb3V0ZSA9IHJlcXVpcmUoXCIuL2xhcm91dGVcIik7XG53aW5kb3cubW9tZW50ID0gcmVxdWlyZShcIm1vbWVudC10aW1lem9uZVwiKTtcbnJlcXVpcmUoXCJtb21lbnQtcHJlY2lzZS1yYW5nZS1wbHVnaW5cIik7XG5tb21lbnQudHouc2V0RGVmYXVsdChcIlVUQ1wiKTtcblxuLypcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8IEF4aW9zIFNldHVwXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfFxuICovXG5cbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtUmVxdWVzdGVkLVdpdGhcIl0gPSBcIlhNTEh0dHBSZXF1ZXN0XCI7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUNTUkYtVE9LRU5cIl0gPSB3aW5kb3cuTGFyYXZlbC5jc3JmVG9rZW47XG5cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgY29uZmlnID0+IHtcbiAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKHtcbiAgICAgIGVhc2luZzogXCJlYXNlXCIsXG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgc2hvd1NwaW5uZXI6IGZhbHNlXG4gICAgfSk7XG4gICAgTlByb2dyZXNzLnN0YXJ0KCk7XG4gICAgTlByb2dyZXNzLmluYygwLjMpO1xuICAgIHJldHVybiBjb25maWc7XG4gIH0sXG4gIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuKTtcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgcmVzcG9uc2UgPT4ge1xuICAgIE5Qcm9ncmVzcy5kb25lKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LFxuICBmdW5jdGlvbihlcnJvcikge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbik7XG5cbi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBMYXJhdmVsIEVjaG8gU2V0dXBcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gKi9cblxuaW1wb3J0IEVjaG8gZnJvbSBcImxhcmF2ZWwtZWNob1wiO1xuaW1wb3J0IFB1c2hlciBmcm9tIFwicHVzaGVyLWpzXCI7XG5cblB1c2hlci5sb2cgPSBtc2cgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhtc2cpO1xufTtcblxud2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4gIGNsdXN0ZXI6ICd1czInLFxuICBicm9hZGNhc3RlcjogXCJwdXNoZXJcIixcbiAga2V5OiBMYXJhdmVsLnB1c2hlcktleSxcbn0pO1xuXG4vKlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHwgU2VudHJ5ICsgUmF2ZW4gU2V0dXBcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gKi9cbi8vIGltcG9ydCBSYXZlbiBmcm9tICdyYXZlbi1qcyc7XG4vLyBpbXBvcnQgUmF2ZW5WdWUgZnJvbSAncmF2ZW4tanMvcGx1Z2lucy92dWUnO1xuLy9cbi8vIGlmKExhcmF2ZWwuZW52ICE9PSAnbG9jYWwnKSB7XG4vLyAgICAgUmF2ZW5cbi8vICAgICAgICAgLmNvbmZpZygnaHR0cHM6Ly81MDEyNGU4OWQ2ODk0NWJiOGY3ODc2NjZmMDQ4MjgwN0BzZW50cnkuY29kZXBpZXIuaW8vNCcpXG4vLyAgICAgICAgIC5hZGRQbHVnaW4oUmF2ZW5WdWUsIFZ1ZSlcbi8vICAgICAgICAgLmluc3RhbGwoKTtcbi8vIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwiY2xhc3MgRXJyb3JzIHtcbiAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEVycm9ycyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIERldGVybWluZSBpZiBhbiBlcnJvcnMgZXhpc3RzIGZvciB0aGUgZ2l2ZW4gZmllbGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcbiAgICAgKi9cbiAgaGFzKGZpZWxkKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIERldGVybWluZSBpZiB3ZSBoYXZlIGFueSBlcnJvcnMuXG4gICAgICovXG4gIGFueSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICAgKiBSZXRyaWV2ZSB0aGUgZXJyb3IgbWVzc2FnZSBmb3IgYSBmaWVsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgICAqL1xuICBnZXQoZmllbGQpIHtcbiAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgICAqIFJlY29yZCB0aGUgbmV3IGVycm9ycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcbiAgICAgKi9cbiAgcmVjb3JkKGVycm9ycykge1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICB9XG5cbiAgLyoqXG4gICAgICogQ2xlYXIgb25lIG9yIGFsbCBlcnJvciBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBmaWVsZFxuICAgICAqL1xuICBjbGVhcihmaWVsZCkge1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL0Vycm9ycy5qcyIsImltcG9ydCBSZXF1ZXN0IGZyb20gXCIuL1JlcXVlc3RcIjtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlcXVlc3Qge1xuICAvKipcbiAgICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAgICovXG4gIHJlc2V0KCkge1xuICAgIGZvciAoY29uc3QgZmllbGQgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gdGhpcy5vcmlnaW5hbERhdGFbZmllbGRdO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICBlbXB0eSgpIHtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIGluIHRoaXMuZW1wdHlEYXRhKSB7XG4gICAgICB0aGlzW2ZpZWxkXSA9IHRoaXMuZW1wdHlEYXRhW2ZpZWxkXTtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAgICogSGFuZGxlIGEgc3VjY2Vzc2Z1bCBmb3JtIHN1Ym1pc3Npb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgIGlmICh0aGlzLnJlc2V0RGF0YSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgZGlmZigpIHtcbiAgICByZXR1cm4gXy5yZWR1Y2UoXG4gICAgICB0aGlzLmRhdGEoKSxcbiAgICAgIChyZXN1bHQsIHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIF8uaXNFcXVhbCh2YWx1ZSwgdGhpcy5vcmlnaW5hbERhdGFba2V5XSlcbiAgICAgICAgICA/IHJlc3VsdFxuICAgICAgICAgIDogcmVzdWx0LmNvbmNhdChrZXkpO1xuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL0Zvcm0uanMiLCJpbXBvcnQgRXJyb3JzIGZyb20gXCIuL0Vycm9yc1wiO1xuXG5jbGFzcyBSZXF1ZXN0IHtcbiAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEZvcm0gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdCwgRm9ybURhdGF9IGRhdGFcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc2V0XG4gICAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGEsIHJlc2V0KSB7XG4gICAgdGhpcy5yZXNldERhdGEgPSByZXNldCB8fCBmYWxzZTtcblxuICAgIGlmIChkYXRhICYmICFfLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICB0aGlzW1widmFsdWVcIl0gPSBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVtcHR5RGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3QgZmllbGQgaW4gZGF0YSkge1xuICAgICAgICB0aGlzW2ZpZWxkXSA9IGRhdGFbZmllbGRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9ycygpO1xuICB9XG5cbiAgLyoqXG4gICAgICogRmV0Y2ggYWxsIHJlbGV2YW50IGRhdGEgZm9yIHRoZSBmb3JtLlxuICAgICAqL1xuICBkYXRhKCkge1xuICAgIGlmICh0aGlzLmZvcm1EYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtRGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcyk7XG5cbiAgICBkZWxldGUgZGF0YS5lcnJvcnM7XG4gICAgZGVsZXRlIGRhdGEucmVzZXREYXRhO1xuICAgIGRlbGV0ZSBkYXRhLmVtcHR5RGF0YTtcbiAgICBkZWxldGUgZGF0YS5vcmlnaW5hbERhdGE7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNlbmQgYSBHRVQgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBtdXRhdGlvbnNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjb25maWdcbiAgICAgKi9cbiAgZ2V0KHVybCwgbXV0YXRpb25zLCBjb25maWcpIHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIGluIGNvbmZpZykge1xuICAgICAgdGhpc1t2YWx1ZV0gPSBjb25maWdbdmFsdWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcbiAgICAgIFwiZ2V0XCIsXG4gICAgICB0aGlzLmRhdGFRdWVyeVN0cmluZygpID8gdXJsICsgXCI/XCIgKyB0aGlzLmRhdGFRdWVyeVN0cmluZygpIDogdXJsLFxuICAgICAgbXV0YXRpb25zXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNlbmQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gbXV0YXRpb25zXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnXG4gICAgICovXG4gIHBvc3QodXJsLCBtdXRhdGlvbnMsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInBvc3RcIiwgdXJsLCBtdXRhdGlvbnMsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICAgKiBTZW5kIGEgUFVUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gbXV0YXRpb25zXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnXG4gICAgICovXG4gIHB1dCh1cmwsIG11dGF0aW9ucywgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicHV0XCIsIHVybCwgbXV0YXRpb25zLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2VuZCBhIFBBVENIIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gbXV0YXRpb25zXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnXG4gICAgICovXG4gIHBhdGNoKHVybCwgbXV0YXRpb25zLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwYXRjaFwiLCB1cmwsIG11dGF0aW9ucywgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNlbmQgYSBERUxFVEUgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBtdXRhdGlvbnNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjb25maWdcbiAgICAgKi9cbiAgZGVsZXRlKHVybCwgbXV0YXRpb25zLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJkZWxldGVcIiwgdXJsLCBtdXRhdGlvbnMsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZvcm0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IG11dGF0aW9uc1xuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNvbmZpZ1xuICAgICAqL1xuICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCwgbXV0YXRpb25zLCBjb25maWcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZm9ybURhdGEgPyB0aGlzLmZvcm1EYXRhIDogdGhpcy5kYXRhKCk7XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIFtyZXF1ZXN0VHlwZV0odXJsLCBkYXRhLCBjb25maWcpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3MoKTtcblxuICAgICAgICAgICAgaWYgKF8uaXNTdHJpbmcobXV0YXRpb25zKSkge1xuICAgICAgICAgICAgICBtdXRhdGlvbnMgPSBbbXV0YXRpb25zXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG11dGF0aW9ucyAmJiBtdXRhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIF8uZWFjaChtdXRhdGlvbnMsIG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBhcHAuJHN0b3JlLmNvbW1pdChtdXRhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICAgICAgICByZXF1ZXN0RGF0YTogdGhpcy5kYXRhKClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5yZXNldERhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE9yaWdpbmFsRGF0YSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGFwcC5oYW5kbGVBcGlFcnJvcihlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLm9uRmFpbChlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICAgKiBIYW5kbGUgYSBzdWNjZXNzZnVsIGZvcm0gc3VibWlzc2lvbi5cbiAgICAgKi9cbiAgb25TdWNjZXNzKCkge1xuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICAgKiBIYW5kbGUgYSBmYWlsZWQgZm9ybSBzdWJtaXNzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgICAqL1xuICBvbkZhaWwoZXJyb3JzKSB7XG4gICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IGRhdGEgdG8gdGhlIG9yaWdpbmFsIGRhdGFcbiAgICAgKi9cbiAgc2V0T3JpZ2luYWxEYXRhKCkge1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gdGhpcy5kYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBxdWVyeSBzdHJpbmcgZm9yIHRoZSBkYXRhIGdpdmVuXG4gICAgICovXG4gIGRhdGFRdWVyeVN0cmluZygpIHtcbiAgICBsZXQgc3RyID0gW107XG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGEoKTtcbiAgICBmb3IgKGxldCBkYXR1bSBpbiBkYXRhKVxuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoZGF0dW0pKSB7XG4gICAgICAgIHN0ci5wdXNoKFxuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChkYXR1bSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2RhdHVtXSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICByZXR1cm4gc3RyLmpvaW4oXCImXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NsYXNzZXMvUmVxdWVzdC5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gbnVsbFxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTgyZWQ3NTlcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwU3BhY2UudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcFNwYWNlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQXBwU3BhY2UudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU4MmVkNzU5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTgyZWQ3NTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9BcHBTcGFjZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcFNwYWNlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NsaXBib2FyZC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ3YzlhNGQyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaXBib2FyZC52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2xpcGJvYXJkLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ2xpcGJvYXJkLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00N2M5YTRkMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ3YzlhNGQyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2xpcGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQ2xpcGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL05hdmlnYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xMThmYjc4OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9OYXZpZ2F0aW9uLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTmF2aWdhdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTE4ZmI3ODhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xMThmYjc4OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL05vdGlmaWNhdGlvbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0NzUyYmRmXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL05vdGlmaWNhdGlvbi52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTm90aWZpY2F0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NDc1MmJkZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ0NzUyYmRmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL05vdGlmaWNhdGlvbnMudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00ZGRiZjEyNFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Ob3RpZmljYXRpb25zLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTm90aWZpY2F0aW9ucy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGRkYmYxMjRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00ZGRiZjEyNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IG51bGxcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTkyNmIzY2RjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1BhZ2VOb3RGb3VuZC52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnZU5vdEZvdW5kLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUGFnZU5vdEZvdW5kLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05MjZiM2NkY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTkyNmIzY2RjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnZU5vdEZvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnZU5vdEZvdW5kLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RpbWVBZ28udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02ODY4ZGMzOFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UaW1lQWdvLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9UaW1lQWdvLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVGltZUFnby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjg2OGRjMzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ODY4ZGMzOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9UaW1lQWdvLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Rvb2xUaXAudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xMjYwYzk5ZlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Ub29sVGlwLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub29sVGlwLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVG9vbFRpcC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTI2MGM5OWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xMjYwYzk5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub29sVGlwLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJWdWUuY29tcG9uZW50KFwiVGltZUFnb1wiLCByZXF1aXJlKFwiLi9UaW1lQWdvLnZ1ZVwiKSk7XG5WdWUuY29tcG9uZW50KFwiVG9vbHRpcFwiLCByZXF1aXJlKFwiLi9Ub29sVGlwLnZ1ZVwiKSk7XG5WdWUuY29tcG9uZW50KFwiQ2xpcGJvYXJkXCIsIHJlcXVpcmUoXCIuL0NsaXBib2FyZC52dWVcIikpO1xuVnVlLmNvbXBvbmVudChcIk5hdmlnYXRpb25cIiwgcmVxdWlyZShcIi4vTmF2aWdhdGlvbi52dWVcIikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwiKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBsYXJvdXRlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgcm91dGVzID0ge1xuXG4gICAgICAgICAgICBhYnNvbHV0ZTogZmFsc2UsXG4gICAgICAgICAgICByb290VXJsOiAnaHR0cDovL2NvZGVwaWVyLmRldicsXG4gICAgICAgICAgICByb3V0ZXMgOiBbe1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJvYXV0aFxcL2F1dGhvcml6ZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxBdXRob3JpemF0aW9uQ29udHJvbGxlckBhdXRob3JpemVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwib2F1dGhcXC9hdXRob3JpemVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQXBwcm92ZUF1dGhvcml6YXRpb25Db250cm9sbGVyQGFwcHJvdmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJvYXV0aFxcL2F1dGhvcml6ZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxEZW55QXV0aG9yaXphdGlvbkNvbnRyb2xsZXJAZGVueVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJvYXV0aFxcL3Rva2VuXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXEFjY2Vzc1Rva2VuQ29udHJvbGxlckBpc3N1ZVRva2VuXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwib2F1dGhcXC90b2tlbnNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQXV0aG9yaXplZEFjY2Vzc1Rva2VuQ29udHJvbGxlckBmb3JVc2VyXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwib2F1dGhcXC90b2tlbnNcXC97dG9rZW5faWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXEF1dGhvcml6ZWRBY2Nlc3NUb2tlbkNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJvYXV0aFxcL3Rva2VuXFwvcmVmcmVzaFwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxUcmFuc2llbnRUb2tlbkNvbnRyb2xsZXJAcmVmcmVzaFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvY2xpZW50c1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxDbGllbnRDb250cm9sbGVyQGZvclVzZXJcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwib2F1dGhcXC9jbGllbnRzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXENsaWVudENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCJdLFwidXJpXCI6XCJvYXV0aFxcL2NsaWVudHNcXC97Y2xpZW50X2lkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxDbGllbnRDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvY2xpZW50c1xcL3tjbGllbnRfaWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXENsaWVudENvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvc2NvcGVzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXFNjb3BlQ29udHJvbGxlckBhbGxcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJvYXV0aFxcL3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcUGVyc29uYWxBY2Nlc3NUb2tlbkNvbnRyb2xsZXJAZm9yVXNlclwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJvYXV0aFxcL3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcUGVyc29uYWxBY2Nlc3NUb2tlbkNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJvYXV0aFxcL3BlcnNvbmFsLWFjY2Vzcy10b2tlbnNcXC97dG9rZW5faWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXFBlcnNvbmFsQWNjZXNzVG9rZW5Db250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYnJvYWRjYXN0aW5nXFwvYXV0aFwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIklsbHVtaW5hdGVcXEJyb2FkY2FzdGluZ1xcQnJvYWRjYXN0Q29udHJvbGxlckBhdXRoZW50aWNhdGVcIn0se1wiaG9zdFwiOlwicHJvdmlzaW9uLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiXFwvXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxDdXN0b21TZXJ2ZXJQcm92aXNpb25pbmdDb250cm9sbGVyQHByb3Zpc2lvblwifSx7XCJob3N0XCI6XCJwcm92aXNpb24uY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwic3RhcnRcXC97cHJvdmlzaW9uaW5nX2tleX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXEN1c3RvbVNlcnZlclByb3Zpc2lvbmluZ0NvbnRyb2xsZXJAc3RhcnRcIn0se1wiaG9zdFwiOlwicHJvdmlzaW9uLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwia2V5c1xcL3twcm92aXNpb25pbmdfa2V5fVxcL3B1YmxpY1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcQ3VzdG9tU2VydmVyUHJvdmlzaW9uaW5nQ29udHJvbGxlckByZXR1cm5QdWJsaWNLZXlcIn0se1wiaG9zdFwiOlwicHJvdmlzaW9uLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwia2V5c1xcL3twcm92aXNpb25pbmdfa2V5XFwvcHJpdmF0ZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXEN1c3RvbVNlcnZlclByb3Zpc2lvbmluZ0NvbnRyb2xsZXJAcmV0dXJuUHJpdmF0ZUtleVwifSx7XCJob3N0XCI6XCJwcm92aXNpb24uY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJlbmRcXC97cHJvdmlzaW9uaW5nX2tleX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXEN1c3RvbVNlcnZlclByb3Zpc2lvbmluZ0NvbnRyb2xsZXJAZW5kXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvMmZhXCIsXCJuYW1lXCI6XCIyZmEuaW5kZXhcIixcImFjdGlvblwiOlwiQXV0aFxcU2Vjb25kQXV0aENvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvMmZhXCIsXCJuYW1lXCI6XCIyZmEuc3RvcmVcIixcImFjdGlvblwiOlwiQXV0aFxcU2Vjb25kQXV0aENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC8yZmFcXC97ZmF9XCIsXCJuYW1lXCI6XCIyZmEuc2hvd1wiLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcLzJmYVxcL3tmYX1cIixcIm5hbWVcIjpcIjJmYS51cGRhdGVcIixcImFjdGlvblwiOlwiQXV0aFxcU2Vjb25kQXV0aENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvMmZhXFwve2ZhfVwiLFwibmFtZVwiOlwiMmZhLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiQXV0aFxcU2Vjb25kQXV0aENvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL21lXCIsXCJuYW1lXCI6XCJtZS5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3VzZXJcIixcIm5hbWVcIjpcInVzZXIuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcVXNlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvdXNlclwiLFwibmFtZVwiOlwidXNlci5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3VzZXJcXC97dXNlcn1cIixcIm5hbWVcIjpcInVzZXIuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3VzZXJcXC97dXNlcn1cIixcIm5hbWVcIjpcInVzZXIudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3VzZXJcXC97dXNlcn1cIixcIm5hbWVcIjpcInVzZXIuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cXC9pbnZvaWNlc1wiLFwibmFtZVwiOlwiaW52b2ljZXMuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uSW52b2ljZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cXC9pbnZvaWNlc1wiLFwibmFtZVwiOlwiaW52b2ljZXMuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uSW52b2ljZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL2ludm9pY2VzXFwve2ludm9pY2V9XCIsXCJuYW1lXCI6XCJpbnZvaWNlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkludm9pY2VDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cXC9pbnZvaWNlc1xcL3tpbnZvaWNlfVwiLFwibmFtZVwiOlwiaW52b2ljZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkludm9pY2VDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXFwvaW52b2ljZXNcXC97aW52b2ljZX1cIixcIm5hbWVcIjpcImludm9pY2VzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uSW52b2ljZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24uaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL3tzdWJzY3JpcHRpb259XCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24uc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25Db250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cXC97c3Vic2NyaXB0aW9ufVwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25Db250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXFwve3N1YnNjcmlwdGlvbn1cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uLWNhcmRcIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi1jYXJkLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNhcmRDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uLWNhcmRcIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi1jYXJkLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNhcmRDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb24tY2FyZFxcL3tzdWJzY3JpcHRpb25fY2FyZH1cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi1jYXJkLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ2FyZENvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvbi1jYXJkXFwve3N1YnNjcmlwdGlvbl9jYXJkfVwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLWNhcmQudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNhcmRDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uLWNhcmRcXC97c3Vic2NyaXB0aW9uX2NhcmR9XCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24tY2FyZC5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNhcmRDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXCIsXCJuYW1lXCI6XCJ0ZWFtLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXCIsXCJuYW1lXCI6XCJ0ZWFtLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC97dGVhbX1cIixcIm5hbWVcIjpcInRlYW0uc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwve3RlYW19XCIsXCJuYW1lXCI6XCJ0ZWFtLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3t0ZWFtfVwiLFwibmFtZVwiOlwidGVhbS5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3RlYW1cXC97dGVhbX1cXC9tZW1iZXJzXCIsXCJuYW1lXCI6XCJ0ZWFtLm1lbWJlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1NZW1iZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC90ZWFtXFwve3RlYW19XFwvbWVtYmVyc1wiLFwibmFtZVwiOlwidGVhbS5tZW1iZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC90ZWFtXFwve3RlYW19XFwvbWVtYmVyc1xcL3ttZW1iZXJ9XCIsXCJuYW1lXCI6XCJ0ZWFtLm1lbWJlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbU1lbWJlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwvdGVhbVxcL3t0ZWFtfVxcL21lbWJlcnNcXC97bWVtYmVyfVwiLFwibmFtZVwiOlwidGVhbS5tZW1iZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbU1lbWJlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3RlYW1cXC97dGVhbX1cXC9tZW1iZXJzXFwve21lbWJlcn1cIixcIm5hbWVcIjpcInRlYW0ubWVtYmVycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC9zd2l0Y2hcXC97aWQ/fVwiLFwibmFtZVwiOlwidGVhbXMuc3dpdGNoXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtQ29udHJvbGxlckBzd2l0Y2hUZWFtXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC9tZW1iZXJzXCIsXCJuYW1lXCI6XCJ0ZWFtcy5tZW1iZXJzLmludml0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbU1lbWJlckNvbnRyb2xsZXJAaW52aXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC9tZW1iZXJzXFwvcmVzZW5kXFwve2ludml0ZV9pZH1cIixcIm5hbWVcIjpcInRlYW1zLm1lbWJlcnMucmVzZW5kX2ludml0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbU1lbWJlckNvbnRyb2xsZXJAcmVzZW5kSW52aXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvY2F0ZWdvcmllc1wiLFwibmFtZVwiOlwiY2F0ZWdvcmllcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJDYXRlZ29yaWVzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9jYXRlZ29yaWVzXCIsXCJuYW1lXCI6XCJjYXRlZ29yaWVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIkNhdGVnb3JpZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvY2F0ZWdvcmllc1xcL3tjYXRlZ29yeX1cIixcIm5hbWVcIjpcImNhdGVnb3JpZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJDYXRlZ29yaWVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL2NhdGVnb3JpZXNcXC97Y2F0ZWdvcnl9XCIsXCJuYW1lXCI6XCJjYXRlZ29yaWVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJDYXRlZ29yaWVzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9jYXRlZ29yaWVzXFwve2NhdGVnb3J5fVwiLFwibmFtZVwiOlwiY2F0ZWdvcmllcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIkNhdGVnb3JpZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9idW95LWFwcHNcXC9idW95Q2xhc3Nlc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQGdldEJ1b3lDbGFzc2VzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1xcL3tidW95X2FwcH1cXC91cGRhdGVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJCdW95QXBwQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9idW95LWFwcHNcIixcIm5hbWVcIjpcImJ1b3ktYXBwcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJCdW95QXBwQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9idW95LWFwcHNcIixcIm5hbWVcIjpcImJ1b3ktYXBwcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJCdW95QXBwQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1xcL3tidW95X2FwcH1cIixcIm5hbWVcIjpcImJ1b3ktYXBwcy5zaG93XCIsXCJhY3Rpb25cIjpcIkJ1b3lBcHBDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvYnVveS1hcHBzXFwve2J1b3lfYXBwfVwiLFwibmFtZVwiOlwiYnVveS1hcHBzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJCdW95QXBwQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9idW95LWFwcHNcXC97YnVveV9hcHB9XCIsXCJuYW1lXCI6XCJidW95LWFwcHMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJCdW95QXBwQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYml0dHNcIixcIm5hbWVcIjpcImJpdHRzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkJpdHRzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9iaXR0c1wiLFwibmFtZVwiOlwiYml0dHMuc3RvcmVcIixcImFjdGlvblwiOlwiQml0dHNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYml0dHNcXC97Yml0dH1cIixcIm5hbWVcIjpcImJpdHRzLnNob3dcIixcImFjdGlvblwiOlwiQml0dHNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvYml0dHNcXC97Yml0dH1cIixcIm5hbWVcIjpcImJpdHRzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJCaXR0c0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvYml0dHNcXC97Yml0dH1cIixcIm5hbWVcIjpcImJpdHRzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiQml0dHNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYml0dFxcL3tiaXR0fVxcL3J1blwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkJpdHRzQ29udHJvbGxlckBydW5PblNlcnZlcnNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zeXN0ZW1zXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU3lzdGVtc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3J1bm5pbmctY29tbWFuZHNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyQ29udHJvbGxlckBnZXRSdW5uaW5nQ29tbWFuZHNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3J1bm5pbmctZGVwbG95bWVudHNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyQ29udHJvbGxlckBnZXRSdW5uaW5nRGVwbG95bWVudHNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NzaC1rZXlzXCIsXCJuYW1lXCI6XCJzc2gta2V5cy5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyU3NoS2V5Q29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NzaC1rZXlzXCIsXCJuYW1lXCI6XCJzc2gta2V5cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyU3NoS2V5Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNzaC1rZXlzLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcVXNlclNzaEtleUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzc2gta2V5cy51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcVXNlclNzaEtleUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic3NoLWtleXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyU3NoS2V5Q29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXItcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclNlcnZlclByb3ZpZGVyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlci1wcm92aWRlcnNcIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyU2VydmVyUHJvdmlkZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXItcHJvdmlkZXJzXFwve3NlcnZlcl9wcm92aWRlcn1cIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJTZXJ2ZXJQcm92aWRlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlci1wcm92aWRlcnNcXC97c2VydmVyX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyU2VydmVyUHJvdmlkZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyLXByb3ZpZGVyc1xcL3tzZXJ2ZXJfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyU2VydmVyUHJvdmlkZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tc2V0dGluZ3NcIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tc2V0dGluZ3NcXC97bm90aWZpY2F0aW9uX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3Muc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tc2V0dGluZ3NcXC97bm90aWZpY2F0aW9uX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3MudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tc2V0dGluZ3NcXC97bm90aWZpY2F0aW9uX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3MuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3JlcG9zaXRvcnktcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJSZXBvc2l0b3J5UHJvdmlkZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclJlcG9zaXRvcnlQcm92aWRlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3JlcG9zaXRvcnktcHJvdmlkZXJzXFwve3JlcG9zaXRvcnlfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclJlcG9zaXRvcnlQcm92aWRlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3JlcG9zaXRvcnktcHJvdmlkZXJzXFwve3JlcG9zaXRvcnlfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyUmVwb3NpdG9yeVByb3ZpZGVyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3JlcG9zaXRvcnktcHJvdmlkZXJzXFwve3JlcG9zaXRvcnlfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclJlcG9zaXRvcnlQcm92aWRlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJOb3RpZmljYXRpb25Qcm92aWRlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlck5vdGlmaWNhdGlvblByb3ZpZGVyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1xcL3tub3RpZmljYXRpb25fcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyTm90aWZpY2F0aW9uUHJvdmlkZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXFwve25vdGlmaWNhdGlvbl9wcm92aWRlcn1cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlck5vdGlmaWNhdGlvblByb3ZpZGVyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcXC97bm90aWZpY2F0aW9uX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlck5vdGlmaWNhdGlvblByb3ZpZGVyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ldmVudHNcIixcIm5hbWVcIjpcImV2ZW50cy5pbmRleFwiLFwiYWN0aW9uXCI6XCJFdmVudENvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ldmVudHNcIixcIm5hbWVcIjpcImV2ZW50cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJFdmVudENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2V2ZW50c1xcL3tldmVudH1cIixcIm5hbWVcIjpcImV2ZW50cy5zaG93XCIsXCJhY3Rpb25cIjpcIkV2ZW50Q29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvZXZlbnRzXFwve2V2ZW50fVwiLFwibmFtZVwiOlwiZXZlbnRzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJFdmVudENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ldmVudHNcXC97ZXZlbnR9XCIsXCJuYW1lXCI6XCJldmVudHMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJFdmVudENvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZXNcXC9hbGxcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlQ29udHJvbGxlckBhbGxQaWxlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZXNcIixcIm5hbWVcIjpcInBpbGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZXNcIixcIm5hbWVcIjpcInBpbGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlc1xcL3twaWxlfVwiLFwibmFtZVwiOlwicGlsZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZXNcXC97cGlsZX1cIixcIm5hbWVcIjpcInBpbGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVzXFwve3BpbGV9XCIsXCJuYW1lXCI6XCJwaWxlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVcXC97cGlsZX1cXC9zaXRlc1wiLFwibmFtZVwiOlwicGlsZS5zaXRlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlU2l0ZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZVxcL3twaWxlfVxcL3NpdGVzXCIsXCJuYW1lXCI6XCJwaWxlLnNpdGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVTaXRlc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVcXC97cGlsZX1cXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwicGlsZS5zaXRlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVTaXRlc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVcXC97cGlsZX1cXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwicGlsZS5zaXRlcy51cGRhdGVcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZVNpdGVzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVcXC97cGlsZX1cXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwicGlsZS5zaXRlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVTaXRlc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2NoYW5nZS1waWxlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiUGlsZVxcUGlsZUNvbnRyb2xsZXJAY2hhbmdlUGlsZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1wiLFwibmFtZVwiOlwic2VydmVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVwiLFwibmFtZVwiOlwic2VydmVycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwve3NlcnZlcn1cXC9maW5kLWZpbGVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpbGVDb250cm9sbGVyQGZpbmRcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL3JlbG9hZC1maWxlXFwve2ZpbGV9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaWxlQ29udHJvbGxlckByZWxvYWRGaWxlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwve3NlcnZlcn1cXC9jdXN0b21cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAZ2VuZXJhdGVDdXN0b21TZXJ2ZXJTaFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvYWxsX3NlcnZlcnNcXC9idW95c1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQnVveUNvbnRyb2xsZXJAbXlTZXJ2ZXJCdW95c1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XFwvZmlsZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckBnZXRGaWxlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwvcmVzdG9yZVxcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHJlc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL2ZpbGVcXC9zYXZlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHNhdmVGaWxlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwvZGlzay1zcGFjZVxcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQGdldERpc2tTcGFjZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3Jlc3RhcnQtc2VydmVyXFwve3NlcnZlcn1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAcmVzdGFydFNlcnZlclwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3Jlc3RhcnQtZGF0YWJhc2VcXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckByZXN0YXJ0RGF0YWJhc2VzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwvcmVzdGFydC13b3JrZXJzXFwve3NlcnZlcn1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAcmVzdGFydFdvcmtlclNlcnZpY2VzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwvc3NoLWNvbm5lY3Rpb25cXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NoS2V5Q29udHJvbGxlckB0ZXN0U1NIQ29ubmVjdGlvblwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3Jlc3RhcnQtd2ViLXNlcnZpY2VzXFwve3NlcnZlcn1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAcmVzdGFydFdlYlNlcnZpY2VzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maWxlXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpbGUuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaWxlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpbGVcIixcIm5hbWVcIjpcInNlcnZlcnMuZmlsZS5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpbGVDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maWxlXFwve2ZpbGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpbGUuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpbGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maWxlXFwve2ZpbGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpbGUudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maWxlXFwve2ZpbGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpbGUuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpbGVDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2J1b3lzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmJ1b3lzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQnVveUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9idW95c1wiLFwibmFtZVwiOlwic2VydmVycy5idW95cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckJ1b3lDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9idW95c1xcL3tidW95fVwiLFwibmFtZVwiOlwic2VydmVycy5idW95cy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQnVveUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2J1b3lzXFwve2J1b3l9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmJ1b3lzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckJ1b3lDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvYnVveXNcXC97YnVveX1cIixcIm5hbWVcIjpcInNlcnZlcnMuYnVveXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckJ1b3lDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NpdGVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNpdGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2l0ZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zaXRlc1wiLFwibmFtZVwiOlwic2VydmVycy5zaXRlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNpdGVDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwic2VydmVycy5zaXRlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2l0ZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNpdGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNpdGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2l0ZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNpdGVDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3dvcmtlcnNcIixcIm5hbWVcIjpcInNlcnZlcnMud29ya2Vycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlcldvcmtlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC93b3JrZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLndvcmtlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJXb3JrZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC93b3JrZXJzXFwve3dvcmtlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMud29ya2Vycy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyV29ya2VyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvd29ya2Vyc1xcL3t3b3JrZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLndvcmtlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyV29ya2VyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3dvcmtlcnNcXC97d29ya2VyfVwiLFwibmFtZVwiOlwic2VydmVycy53b3JrZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJXb3JrZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYXNcIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWFzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWFzXFwve3NjaGVtYX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hc1xcL3tzY2hlbWF9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYXNcXC97c2NoZW1hfVwiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWFzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2RhZW1vbnNcIixcIm5hbWVcIjpcInNlcnZlcnMuZGFlbW9ucy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckRhZW1vbnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZGFlbW9uc1wiLFwibmFtZVwiOlwic2VydmVycy5kYWVtb25zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRGFlbW9uc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2RhZW1vbnNcXC97ZGFlbW9ufVwiLFwibmFtZVwiOlwic2VydmVycy5kYWVtb25zLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJEYWVtb25zQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZGFlbW9uc1xcL3tkYWVtb259XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmRhZW1vbnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRGFlbW9uc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9kYWVtb25zXFwve2RhZW1vbn1cIixcIm5hbWVcIjpcInNlcnZlcnMuZGFlbW9ucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRGFlbW9uc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NoLWtleXNcIixcIm5hbWVcIjpcInNlcnZlcnMuc3NoLWtleXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2hLZXlDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NoLWtleXNcIixcIm5hbWVcIjpcInNlcnZlcnMuc3NoLWtleXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2hLZXlDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic2VydmVycy5zc2gta2V5cy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NoS2V5Q29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc3NoLWtleXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NoS2V5Q29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzaC1rZXlzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2hLZXlDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZlYXR1cmVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZlYXR1cmVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9mZWF0dXJlc1wiLFwibmFtZVwiOlwic2VydmVycy5mZWF0dXJlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZlYXR1cmVDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9mZWF0dXJlc1xcL3tmZWF0dXJlfVwiLFwibmFtZVwiOlwic2VydmVycy5mZWF0dXJlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZlYXR1cmVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZlYXR1cmVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmVhdHVyZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZlYXR1cmVDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Nyb24tam9ic1wiLFwibmFtZVwiOlwic2VydmVycy5jcm9uLWpvYnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDcm9uSm9iQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Nyb24tam9ic1wiLFwibmFtZVwiOlwic2VydmVycy5jcm9uLWpvYnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDcm9uSm9iQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvY3Jvbi1qb2JzXFwve2Nyb25fam9ifVwiLFwibmFtZVwiOlwic2VydmVycy5jcm9uLWpvYnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNyb25Kb2JDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9jcm9uLWpvYnNcXC97Y3Jvbl9qb2J9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmNyb24tam9icy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDcm9uSm9iQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Nyb24tam9ic1xcL3tjcm9uX2pvYn1cIixcIm5hbWVcIjpcInNlcnZlcnMuY3Jvbi1qb2JzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDcm9uSm9iQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2wtY2VydGlmaWNhdGVcIixcIm5hbWVcIjpcInNlcnZlcnMuc3NsLWNlcnRpZmljYXRlLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NsQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzbC1jZXJ0aWZpY2F0ZVwiLFwibmFtZVwiOlwic2VydmVycy5zc2wtY2VydGlmaWNhdGUuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2xDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2wtY2VydGlmaWNhdGVcXC97c3NsX2NlcnRpZmljYXRlfVwiLFwibmFtZVwiOlwic2VydmVycy5zc2wtY2VydGlmaWNhdGUuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzbENvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzbC1jZXJ0aWZpY2F0ZVxcL3tzc2xfY2VydGlmaWNhdGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzbC1jZXJ0aWZpY2F0ZS51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2xDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NsLWNlcnRpZmljYXRlXFwve3NzbF9jZXJ0aWZpY2F0ZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc3NsLWNlcnRpZmljYXRlLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2xDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYS11c2Vyc1wiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWEtdXNlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFVc2VyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYS11c2Vyc1wiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWEtdXNlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFVc2VyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hLXVzZXJzXFwve3NjaGVtYV91c2VyfVwiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWEtdXNlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYVVzZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWEtdXNlcnNcXC97c2NoZW1hX3VzZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYS11c2Vycy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFVc2VyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYS11c2Vyc1xcL3tzY2hlbWFfdXNlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hLXVzZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFVc2VyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maXJld2FsbC1ydWxlc1wiLFwibmFtZVwiOlwic2VydmVycy5maXJld2FsbC1ydWxlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maXJld2FsbC1ydWxlc1wiLFwibmFtZVwiOlwic2VydmVycy5maXJld2FsbC1ydWxlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpcmV3YWxsLXJ1bGVzXFwve2ZpcmV3YWxsX3J1bGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpcmV3YWxsLXJ1bGVzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaXJld2FsbFJ1bGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maXJld2FsbC1ydWxlc1xcL3tmaXJld2FsbF9ydWxlfVwiLFwibmFtZVwiOlwic2VydmVycy5maXJld2FsbC1ydWxlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaXJld2FsbFJ1bGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlyZXdhbGwtcnVsZXNcXC97ZmlyZXdhbGxfcnVsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmlyZXdhbGwtcnVsZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvcHJvdmlzaW9uLXN0ZXBzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnByb3Zpc2lvbi1zdGVwcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclByb3Zpc2lvblN0ZXBzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3Byb3Zpc2lvbi1zdGVwc1wiLFwibmFtZVwiOlwic2VydmVycy5wcm92aXNpb24tc3RlcHMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJQcm92aXNpb25TdGVwc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3Byb3Zpc2lvbi1zdGVwc1xcL3twcm92aXNpb25fc3RlcH1cIixcIm5hbWVcIjpcInNlcnZlcnMucHJvdmlzaW9uLXN0ZXBzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJQcm92aXNpb25TdGVwc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3Byb3Zpc2lvbi1zdGVwc1xcL3twcm92aXNpb25fc3RlcH1cIixcIm5hbWVcIjpcInNlcnZlcnMucHJvdmlzaW9uLXN0ZXBzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclByb3Zpc2lvblN0ZXBzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3Byb3Zpc2lvbi1zdGVwc1xcL3twcm92aXNpb25fc3RlcH1cIixcIm5hbWVcIjpcInNlcnZlcnMucHJvdmlzaW9uLXN0ZXBzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJQcm92aXNpb25TdGVwc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcIixcIm5hbWVcIjpcInNlcnZlcnMubGFuZ3VhZ2Utc2V0dGluZ3MuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2xhbmd1YWdlLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmxhbmd1YWdlLXNldHRpbmdzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2xhbmd1YWdlLXNldHRpbmdzXFwve2xhbmd1YWdlX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmxhbmd1YWdlLXNldHRpbmdzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcXC97bGFuZ3VhZ2Vfc2V0dGluZ31cIixcIm5hbWVcIjpcInNlcnZlcnMubGFuZ3VhZ2Utc2V0dGluZ3MudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9sYW5ndWFnZS1zZXR0aW5nc1xcL3tsYW5ndWFnZV9zZXR0aW5nfVwiLFwibmFtZVwiOlwic2VydmVycy5sYW5ndWFnZS1zZXR0aW5ncy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmVudmlyb25tZW50LXZhcmlhYmxlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1wiLFwibmFtZVwiOlwic2VydmVycy5lbnZpcm9ubWVudC12YXJpYWJsZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1xcL3tlbnZpcm9ubWVudF92YXJpYWJsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZW52aXJvbm1lbnQtdmFyaWFibGVzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1xcL3tlbnZpcm9ubWVudF92YXJpYWJsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZW52aXJvbm1lbnQtdmFyaWFibGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1xcL3tlbnZpcm9ubWVudF92YXJpYWJsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZW52aXJvbm1lbnQtdmFyaWFibGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwve3NlcnZlcn1cXC9sYW5ndWFnZS1zZXR0aW5nc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAZ2V0TGFuZ3VhZ2VTZXR0aW5nc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcIixcIm5hbWVcIjpcInNpdGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcIixcIm5hbWVcIjpcInNpdGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwic2l0ZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInNpdGVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvcmVuYW1lXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAcmVuYW1lXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL2ZpbmQtZmlsZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaWxlQ29udHJvbGxlckBmaW5kXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL3dvcmtmbG93XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVdvcmtmbG93Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9yZWZyZXNoLXNzaC1rZXlzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAcmVmcmVzaFB1YmxpY0tleVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9yZWZyZXNoLWRlcGxveS1rZXlcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZWZyZXNoRGVwbG95S2V5XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvY2xlYXItY29tbWFuZHNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyQ29tbWFuZHNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvcmVsb2FkLWZpbGVcXC97ZmlsZX1cXC9zZXJ2ZXJcXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaWxlQ29udHJvbGxlckByZWxvYWRGaWxlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvZGVwbG95XFwve3NpdGV9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAZGVwbG95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcm9sbGJhY2tcXC97c2l0ZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByb2xsYmFja1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL2RlcGxveW1lbnQtc3RlcHNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudFN0ZXBzQ29udHJvbGxlckBnZXREZXBsb3ltZW50U3RlcHNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yZXN0YXJ0LXNlcnZlclxcL3tzaXRlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHJlc3RhcnRTZXJ2ZXJcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yZXN0YXJ0LWRhdGFiYXNlXFwve3NpdGV9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAcmVzdGFydERhdGFiYXNlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3Jlc3RhcnQtd29ya2Vyc1xcL3tzaXRlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHJlc3RhcnRXb3JrZXJTZXJ2aWNlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3Jlc3RhcnQtd2ViLXNlcnZpY2VzXFwve3NpdGV9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAcmVzdGFydFdlYlNlcnZpY2VzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Ruc1wiLFwibmFtZVwiOlwic2l0ZXMuZG5zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEbnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kbnNcIixcIm5hbWVcIjpcInNpdGVzLmRucy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRG5zQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kbnNcXC97ZG59XCIsXCJuYW1lXCI6XCJzaXRlcy5kbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRG5zQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kbnNcXC97ZG59XCIsXCJuYW1lXCI6XCJzaXRlcy5kbnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEbnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kbnNcXC97ZG59XCIsXCJuYW1lXCI6XCJzaXRlcy5kbnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRG5zQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpbGVcIixcIm5hbWVcIjpcInNpdGVzLmZpbGUuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maWxlXCIsXCJuYW1lXCI6XCJzaXRlcy5maWxlLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaWxlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maWxlXFwve2ZpbGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5maWxlLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpbGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpcInNpdGVzLmZpbGUudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaWxlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlsZVxcL3tmaWxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZmlsZS5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaWxlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2J1b3lzXCIsXCJuYW1lXCI6XCJzaXRlcy5idW95cy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQnVveUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2J1b3lzXCIsXCJuYW1lXCI6XCJzaXRlcy5idW95cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQnVveUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvYnVveXNcXC97YnVveX1cIixcIm5hbWVcIjpcInNpdGVzLmJ1b3lzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUJ1b3lDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2J1b3lzXFwve2J1b3l9XCIsXCJuYW1lXCI6XCJzaXRlcy5idW95cy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUJ1b3lDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9idW95c1xcL3tidW95fVwiLFwibmFtZVwiOlwic2l0ZXMuYnVveXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQnVveUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXJzXCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXJzXCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlcnNcXC97c2VydmVyfVwiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVycy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlcnNcXC97c2VydmVyfVwiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVycy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlcnNcXC97c2VydmVyfVwiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvd29ya2Vyc1wiLFwibmFtZVwiOlwic2l0ZXMud29ya2Vycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlV29ya2VyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvd29ya2Vyc1wiLFwibmFtZVwiOlwic2l0ZXMud29ya2Vycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlV29ya2VyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC93b3JrZXJzXFwve3dvcmtlcn1cIixcIm5hbWVcIjpcInNpdGVzLndvcmtlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlV29ya2VyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC93b3JrZXJzXFwve3dvcmtlcn1cIixcIm5hbWVcIjpcInNpdGVzLndvcmtlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVXb3JrZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC93b3JrZXJzXFwve3dvcmtlcn1cIixcIm5hbWVcIjpcInNpdGVzLndvcmtlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlV29ya2VyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYXNcIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYXNcIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hc1xcL3tzY2hlbWF9XCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWFzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hc1xcL3tzY2hlbWF9XCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWFzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hc1xcL3tzY2hlbWF9XCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWFzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kYWVtb25zXCIsXCJuYW1lXCI6XCJzaXRlcy5kYWVtb25zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEYWVtb25zQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGFlbW9uc1wiLFwibmFtZVwiOlwic2l0ZXMuZGFlbW9ucy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGFlbW9uc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGFlbW9uc1xcL3tkYWVtb259XCIsXCJuYW1lXCI6XCJzaXRlcy5kYWVtb25zLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURhZW1vbnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RhZW1vbnNcXC97ZGFlbW9ufVwiLFwibmFtZVwiOlwic2l0ZXMuZGFlbW9ucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURhZW1vbnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kYWVtb25zXFwve2RhZW1vbn1cIixcIm5hbWVcIjpcInNpdGVzLmRhZW1vbnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGFlbW9uc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2gta2V5c1wiLFwibmFtZVwiOlwic2l0ZXMuc3NoLWtleXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzaEtleUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzaC1rZXlzXCIsXCJuYW1lXCI6XCJzaXRlcy5zc2gta2V5cy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NoS2V5Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic2l0ZXMuc3NoLWtleXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NoS2V5Q29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic2l0ZXMuc3NoLWtleXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2hLZXlDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic2l0ZXMuc3NoLWtleXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NoS2V5Q29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Nyb24tam9ic1wiLFwibmFtZVwiOlwic2l0ZXMuY3Jvbi1qb2JzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDcm9uSm9iQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvY3Jvbi1qb2JzXCIsXCJuYW1lXCI6XCJzaXRlcy5jcm9uLWpvYnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNyb25Kb2JDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Nyb24tam9ic1xcL3tjcm9uX2pvYn1cIixcIm5hbWVcIjpcInNpdGVzLmNyb24tam9icy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDcm9uSm9iQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9jcm9uLWpvYnNcXC97Y3Jvbl9qb2J9XCIsXCJuYW1lXCI6XCJzaXRlcy5jcm9uLWpvYnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDcm9uSm9iQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvY3Jvbi1qb2JzXFwve2Nyb25fam9ifVwiLFwibmFtZVwiOlwic2l0ZXMuY3Jvbi1qb2JzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNyb25Kb2JDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NsLWNlcnRpZmljYXRlXCIsXCJuYW1lXCI6XCJzaXRlcy5zc2wtY2VydGlmaWNhdGUuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzbENvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzbC1jZXJ0aWZpY2F0ZVwiLFwibmFtZVwiOlwic2l0ZXMuc3NsLWNlcnRpZmljYXRlLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2xDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzbC1jZXJ0aWZpY2F0ZVxcL3tzc2xfY2VydGlmaWNhdGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5zc2wtY2VydGlmaWNhdGUuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NsQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2wtY2VydGlmaWNhdGVcXC97c3NsX2NlcnRpZmljYXRlfVwiLFwibmFtZVwiOlwic2l0ZXMuc3NsLWNlcnRpZmljYXRlLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NsQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NsLWNlcnRpZmljYXRlXFwve3NzbF9jZXJ0aWZpY2F0ZX1cIixcIm5hbWVcIjpcInNpdGVzLnNzbC1jZXJ0aWZpY2F0ZS5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2xDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGlmZS1saW5lc1wiLFwibmFtZVwiOlwic2l0ZXMubGlmZS1saW5lcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGlmZWxpbmVzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGlmZS1saW5lc1wiLFwibmFtZVwiOlwic2l0ZXMubGlmZS1saW5lcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGlmZWxpbmVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9saWZlLWxpbmVzXFwve2xpZmVfbGluZX1cIixcIm5hbWVcIjpcInNpdGVzLmxpZmUtbGluZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGlmZWxpbmVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9saWZlLWxpbmVzXFwve2xpZmVfbGluZX1cIixcIm5hbWVcIjpcInNpdGVzLmxpZmUtbGluZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMaWZlbGluZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9saWZlLWxpbmVzXFwve2xpZmVfbGluZX1cIixcIm5hbWVcIjpcInNpdGVzLmxpZmUtbGluZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGlmZWxpbmVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnRzXCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50cy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudHNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50c1wiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudHMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50c1xcL3tkZXBsb3ltZW50fVwiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudHMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudHNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnRzXFwve2RlcGxveW1lbnR9XCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50cy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudHNcXC97ZGVwbG95bWVudH1cIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnRzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYS11c2Vyc1wiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hLXVzZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFVc2VyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hLXVzZXJzXCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWEtdXNlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYVVzZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYS11c2Vyc1xcL3tzY2hlbWFfdXNlcn1cIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYS11c2Vycy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFVc2VyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWEtdXNlcnNcXC97c2NoZW1hX3VzZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWEtdXNlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFVc2VyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hLXVzZXJzXFwve3NjaGVtYV91c2VyfVwiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hLXVzZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYVVzZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvaG9va3NcIixcIm5hbWVcIjpcInNpdGVzLmhvb2tzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFJlcG9zaXRvcnlcXFJlcG9zaXRvcnlIb29rQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvaG9va3NcIixcIm5hbWVcIjpcInNpdGVzLmhvb2tzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFJlcG9zaXRvcnlcXFJlcG9zaXRvcnlIb29rQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9ob29rc1xcL3tob29rfVwiLFwibmFtZVwiOlwic2l0ZXMuaG9va3Muc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxSZXBvc2l0b3J5XFxSZXBvc2l0b3J5SG9va0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvaG9va3NcXC97aG9va31cIixcIm5hbWVcIjpcInNpdGVzLmhvb2tzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxSZXBvc2l0b3J5XFxSZXBvc2l0b3J5SG9va0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2hvb2tzXFwve2hvb2t9XCIsXCJuYW1lXCI6XCJzaXRlcy5ob29rcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFJlcG9zaXRvcnlcXFJlcG9zaXRvcnlIb29rQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpcmV3YWxsLXJ1bGVzXCIsXCJuYW1lXCI6XCJzaXRlcy5maXJld2FsbC1ydWxlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlyZXdhbGxSdWxlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlyZXdhbGwtcnVsZXNcIixcIm5hbWVcIjpcInNpdGVzLmZpcmV3YWxsLXJ1bGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaXJld2FsbFJ1bGVDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpcmV3YWxsLXJ1bGVzXFwve2ZpcmV3YWxsX3J1bGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5maXJld2FsbC1ydWxlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaXJld2FsbFJ1bGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpcmV3YWxsLXJ1bGVzXFwve2ZpcmV3YWxsX3J1bGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5maXJld2FsbC1ydWxlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpcmV3YWxsLXJ1bGVzXFwve2ZpcmV3YWxsX3J1bGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5maXJld2FsbC1ydWxlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaXJld2FsbFJ1bGVDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyLWZlYXR1cmVzXCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXItZmVhdHVyZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyLWZlYXR1cmVzXCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXItZmVhdHVyZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXItZmVhdHVyZXNcXC97c2VydmVyX3R5cGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXItZmVhdHVyZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlci1mZWF0dXJlc1xcL3tzZXJ2ZXJfdHlwZX1cIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlci1mZWF0dXJlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyLWZlYXR1cmVzXFwve3NlcnZlcl90eXBlfVwiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVyLWZlYXR1cmVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnQtc3RlcHNcIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnQtc3RlcHMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRTdGVwc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnQtc3RlcHNcIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnQtc3RlcHMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRTdGVwc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudC1zdGVwc1xcL3tkZXBsb3ltZW50X3N0ZXB9XCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50LXN0ZXBzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRTdGVwc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudC1zdGVwc1xcL3tkZXBsb3ltZW50X3N0ZXB9XCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50LXN0ZXBzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGVwbG95bWVudFN0ZXBzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudC1zdGVwc1xcL3tkZXBsb3ltZW50X3N0ZXB9XCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50LXN0ZXBzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRTdGVwc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9sYW5ndWFnZS1zZXR0aW5nc1wiLFwibmFtZVwiOlwic2l0ZXMubGFuZ3VhZ2Utc2V0dGluZ3MuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9sYW5ndWFnZS1zZXR0aW5nc1wiLFwibmFtZVwiOlwic2l0ZXMubGFuZ3VhZ2Utc2V0dGluZ3Muc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xhbmd1YWdlLXNldHRpbmdzXFwve2xhbmd1YWdlX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJzaXRlcy5sYW5ndWFnZS1zZXR0aW5ncy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9sYW5ndWFnZS1zZXR0aW5nc1xcL3tsYW5ndWFnZV9zZXR0aW5nfVwiLFwibmFtZVwiOlwic2l0ZXMubGFuZ3VhZ2Utc2V0dGluZ3MudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcXC97bGFuZ3VhZ2Vfc2V0dGluZ31cIixcIm5hbWVcIjpcInNpdGVzLmxhbmd1YWdlLXNldHRpbmdzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXCIsXCJuYW1lXCI6XCJzaXRlcy5lbnZpcm9ubWVudC12YXJpYWJsZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXCIsXCJuYW1lXCI6XCJzaXRlcy5lbnZpcm9ubWVudC12YXJpYWJsZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcXC97ZW52aXJvbm1lbnRfdmFyaWFibGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5lbnZpcm9ubWVudC12YXJpYWJsZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1xcL3tlbnZpcm9ubWVudF92YXJpYWJsZX1cIixcIm5hbWVcIjpcInNpdGVzLmVudmlyb25tZW50LXZhcmlhYmxlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXFwve2Vudmlyb25tZW50X3ZhcmlhYmxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZW52aXJvbm1lbnQtdmFyaWFibGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAZ2V0TGFuZ3VhZ2VTZXR0aW5nc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL25vdGlmaWNhdGlvbi1zZXR0aW5nc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLmluZGV4XCIsXCJhY3Rpb25cIjpcIk5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9ub3RpZmljYXRpb24tc2V0dGluZ3NcIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9ub3RpZmljYXRpb24tc2V0dGluZ3NcXC97bm90aWZpY2F0aW9uX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3Muc2hvd1wiLFwiYWN0aW9uXCI6XCJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9ub3RpZmljYXRpb24tc2V0dGluZ3NcXC97bm90aWZpY2F0aW9uX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3MudXBkYXRlXCIsXCJhY3Rpb25cIjpcIk5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9ub3RpZmljYXRpb24tc2V0dGluZ3NcXC97bm90aWZpY2F0aW9uX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3MuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3R5cGVzXCIsXCJuYW1lXCI6XCJ0eXBlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclR5cGVzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC90eXBlc1wiLFwibmFtZVwiOlwidHlwZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJUeXBlc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC90eXBlc1xcL3t0eXBlfVwiLFwibmFtZVwiOlwidHlwZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclR5cGVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3R5cGVzXFwve3R5cGV9XCIsXCJuYW1lXCI6XCJ0eXBlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJUeXBlc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvdHlwZXNcXC97dHlwZX1cIixcIm5hbWVcIjpcInR5cGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJUeXBlc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL2ZlYXR1cmVzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBnZXRGZWF0dXJlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL2xhbmd1YWdlc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAZ2V0TGFuZ3VhZ2VzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvZnJhbWV3b3Jrc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAZ2V0RnJhbWV3b3Jrc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NpdGVcXC97c2l0ZX1cXC9lZGl0YWJsZS1maWxlc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGZWF0dXJlQ29udHJvbGxlckBnZXRFZGl0YWJsZUZpbGVzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwve3NlcnZlcn1cXC9lZGl0YWJsZS1maWxlc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAZ2V0RWRpdGFibGVGaWxlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NpdGVcXC97c2l0ZX1cXC9mcmFtZXdvcmtcXC9lZGl0YWJsZS1maWxlc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGZWF0dXJlQ29udHJvbGxlckBnZXRFZGl0YWJsZUZyYW1ld29ya0ZpbGVzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3NlcnZlci1wcm92aWRlcnNcIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxTZXJ2ZXJQcm92aWRlcnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9zZXJ2ZXItcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcU2VydmVyUHJvdmlkZXJzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9zZXJ2ZXItcHJvdmlkZXJzXFwve3NlcnZlcl9wcm92aWRlcn1cIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFNlcnZlclByb3ZpZGVyc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvc2VydmVyLXByb3ZpZGVyc1xcL3tzZXJ2ZXJfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFNlcnZlclByb3ZpZGVyc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3NlcnZlci1wcm92aWRlcnNcXC97c2VydmVyX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcU2VydmVyUHJvdmlkZXJzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3JlcG9zaXRvcnktcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFJlcG9zaXRvcnlQcm92aWRlcnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1wiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxSZXBvc2l0b3J5UHJvdmlkZXJzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1xcL3tyZXBvc2l0b3J5X3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFJlcG9zaXRvcnlQcm92aWRlcnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3JlcG9zaXRvcnktcHJvdmlkZXJzXFwve3JlcG9zaXRvcnlfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy51cGRhdGVcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxSZXBvc2l0b3J5UHJvdmlkZXJzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcXC97cmVwb3NpdG9yeV9wcm92aWRlcn1cIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxSZXBvc2l0b3J5UHJvdmlkZXJzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxOb3RpZmljYXRpb25Qcm92aWRlcnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcTm90aWZpY2F0aW9uUHJvdmlkZXJzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXFwve25vdGlmaWNhdGlvbl9wcm92aWRlcn1cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXE5vdGlmaWNhdGlvblByb3ZpZGVyc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1xcL3tub3RpZmljYXRpb25fcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXE5vdGlmaWNhdGlvblByb3ZpZGVyc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcXC97bm90aWZpY2F0aW9uX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcTm90aWZpY2F0aW9uUHJvdmlkZXJzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvb3B0aW9uc1wiLFwibmFtZVwiOlwib3B0aW9ucy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJPcHRpb25zQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9vcHRpb25zXCIsXCJuYW1lXCI6XCJvcHRpb25zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlck9wdGlvbnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvb3B0aW9uc1xcL3tvcHRpb259XCIsXCJuYW1lXCI6XCJvcHRpb25zLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9vcHRpb25zXFwve29wdGlvbn1cIixcIm5hbWVcIjpcIm9wdGlvbnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlck9wdGlvbnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL29wdGlvbnNcXC97b3B0aW9ufVwiLFwibmFtZVwiOlwib3B0aW9ucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlck9wdGlvbnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9yZWdpb25zXCIsXCJuYW1lXCI6XCJyZWdpb25zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlclJlZ2lvbnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL3JlZ2lvbnNcIixcIm5hbWVcIjpcInJlZ2lvbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9yZWdpb25zXFwve3JlZ2lvbn1cIixcIm5hbWVcIjpcInJlZ2lvbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL3JlZ2lvbnNcXC97cmVnaW9ufVwiLFwibmFtZVwiOlwicmVnaW9ucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvcmVnaW9uc1xcL3tyZWdpb259XCIsXCJuYW1lXCI6XCJyZWdpb25zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL2ZlYXR1cmVzXCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvZmVhdHVyZXNcIixcIm5hbWVcIjpcImZlYXR1cmVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJmZWF0dXJlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcHJvdmlkZXJcIixcIm5hbWVcIjpcInByb3ZpZGVyLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcHJvdmlkZXJcIixcIm5hbWVcIjpcInByb3ZpZGVyLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9wcm92aWRlclxcL3twcm92aWRlcn1cIixcIm5hbWVcIjpcInByb3ZpZGVyLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3Byb3ZpZGVyXFwve3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicHJvdmlkZXIudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcHJvdmlkZXJcXC97cHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJwcm92aWRlci5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL29wdGlvbnNcIixcIm5hbWVcIjpcIm9wdGlvbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvb3B0aW9uc1wiLFwibmFtZVwiOlwib3B0aW9ucy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJPcHRpb25zQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL29wdGlvbnNcXC97b3B0aW9ufVwiLFwibmFtZVwiOlwib3B0aW9ucy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlck9wdGlvbnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvb3B0aW9uc1xcL3tvcHRpb259XCIsXCJuYW1lXCI6XCJvcHRpb25zLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJPcHRpb25zQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9vcHRpb25zXFwve29wdGlvbn1cIixcIm5hbWVcIjpcIm9wdGlvbnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJPcHRpb25zQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcmVnaW9uc1wiLFwibmFtZVwiOlwicmVnaW9ucy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9yZWdpb25zXCIsXCJuYW1lXCI6XCJyZWdpb25zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlclJlZ2lvbnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcmVnaW9uc1xcL3tyZWdpb259XCIsXCJuYW1lXCI6XCJyZWdpb25zLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9yZWdpb25zXFwve3JlZ2lvbn1cIixcIm5hbWVcIjpcInJlZ2lvbnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlclJlZ2lvbnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3JlZ2lvbnNcXC97cmVnaW9ufVwiLFwibmFtZVwiOlwicmVnaW9ucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlclJlZ2lvbnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9mZWF0dXJlc1wiLFwibmFtZVwiOlwiZmVhdHVyZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL2ZlYXR1cmVzXCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9mZWF0dXJlc1xcL3tmZWF0dXJlfVwiLFwibmFtZVwiOlwiZmVhdHVyZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9mZWF0dXJlc1xcL3tmZWF0dXJlfVwiLFwibmFtZVwiOlwiZmVhdHVyZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9mZWF0dXJlc1xcL3tmZWF0dXJlfVwiLFwibmFtZVwiOlwiZmVhdHVyZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImxvZ2luXCIsXCJuYW1lXCI6XCJsb2dpblwiLFwiYWN0aW9uXCI6XCJBdXRoXFxMb2dpbkNvbnRyb2xsZXJAc2hvd0xvZ2luRm9ybVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJsb2dpblwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkF1dGhcXExvZ2luQ29udHJvbGxlckBsb2dpblwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJsb2dvdXRcIixcIm5hbWVcIjpcImxvZ291dFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxMb2dpbkNvbnRyb2xsZXJAbG9nb3V0XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInJlZ2lzdGVyXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQXV0aFxcUmVnaXN0ZXJDb250cm9sbGVyQHJlZ2lzdGVyXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInBhc3N3b3JkXFwvZW1haWxcIixcIm5hbWVcIjpcInBhc3N3b3JkLmVtYWlsXCIsXCJhY3Rpb25cIjpcIkF1dGhcXEZvcmdvdFBhc3N3b3JkQ29udHJvbGxlckBzZW5kUmVzZXRMaW5rRW1haWxcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJwYXNzd29yZFxcL3Jlc2V0XFwve3Rva2VufVwiLFwibmFtZVwiOlwicGFzc3dvcmQucmVzZXRcIixcImFjdGlvblwiOlwiQXV0aFxcUmVzZXRQYXNzd29yZENvbnRyb2xsZXJAc2hvd1Jlc2V0Rm9ybVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJwYXNzd29yZFxcL3Jlc2V0XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQXV0aFxcUmVzZXRQYXNzd29yZENvbnRyb2xsZXJAcmVzZXRcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJwcm92aWRlclxcL3twcm92aWRlcn1cXC9saW5rXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQXV0aFxcT2F1dGhDb250cm9sbGVyQG5ld1Byb3ZpZGVyXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwicHJvdmlkZXJcXC97cHJvdmlkZXJ9XFwvY2FsbGJhY2tcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxPYXV0aENvbnRyb2xsZXJAZ2V0SGFuZGxlUHJvdmlkZXJDYWxsYmFja1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJzdHJpcGVcXC93ZWJob29rXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxDYXNoaWVyXFxIdHRwXFxDb250cm9sbGVyc1xcV2ViaG9va0NvbnRyb2xsZXJAaGFuZGxlV2ViaG9va1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInN1YnNjcmlwdGlvblxcL3BsYW5zXCIsXCJuYW1lXCI6XCJwbGFucy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTdWJzY3JpcHRpb25Db250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcXC9jcmVhdGVcIixcIm5hbWVcIjpcInBsYW5zLmNyZWF0ZVwiLFwiYWN0aW9uXCI6XCJTdWJzY3JpcHRpb25Db250cm9sbGVyQGNyZWF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJzdWJzY3JpcHRpb25cXC9wbGFuc1wiLFwibmFtZVwiOlwicGxhbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU3Vic2NyaXB0aW9uQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInN1YnNjcmlwdGlvblxcL3BsYW5zXFwve3BsYW59XCIsXCJuYW1lXCI6XCJwbGFucy5zaG93XCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInN1YnNjcmlwdGlvblxcL3BsYW5zXFwve3BsYW59XFwvZWRpdFwiLFwibmFtZVwiOlwicGxhbnMuZWRpdFwiLFwiYWN0aW9uXCI6XCJTdWJzY3JpcHRpb25Db250cm9sbGVyQGVkaXRcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcXC97cGxhbn1cIixcIm5hbWVcIjpcInBsYW5zLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTdWJzY3JpcHRpb25Db250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcInN1YnNjcmlwdGlvblxcL3BsYW5zXFwve3BsYW59XCIsXCJuYW1lXCI6XCJwbGFucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIixcIlBPU1RcIixcIlBVVFwiLFwiUEFUQ0hcIixcIkRFTEVURVwiXSxcInVyaVwiOlwid2ViaG9va1xcL2RlcGxveVxcL3tzaXRlSGFzaElkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIldlYkhvb2tDb250cm9sbGVyQGRlcGxveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIixcIlBPU1RcIixcIlBVVFwiLFwiUEFUQ0hcIixcIkRFTEVURVwiXSxcInVyaVwiOlwid2ViaG9va1xcL3NlcnZlclxcL3tzZXJ2ZXJIYXNoSWR9XFwvc3NsXFwvdXBkYXRlZFwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIldlYkhvb2tDb250cm9sbGVyQHNlcnZlclNzbENlcnRpZmljYXRlVXBkYXRlZFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIndlYmhvb2tcXC97YW55fVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkNvbnRyb2xsZXJAcmVkaXJlY3RUb0FwcFwifSx7XCJob3N0XCI6XCJzdGF0cy5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIndlYmhvb2tcXC9sb2Fkc1xcL3tzZXJ2ZXJIYXNoSWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiV2ViSG9va0NvbnRyb2xsZXJAbG9hZE1vbml0b3JcIn0se1wiaG9zdFwiOlwic3RhdHMuY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ3ZWJob29rXFwvbWVtb3J5XFwve3NlcnZlckhhc2hJZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJXZWJIb29rQ29udHJvbGxlckBtZW1vcnlNb25pdG9yXCJ9LHtcImhvc3RcIjpcInN0YXRzLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwid2ViaG9va1xcL2Rpc2t1c2FnZVxcL3tzZXJ2ZXJIYXNoSWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiV2ViSG9va0NvbnRyb2xsZXJAZGlza1VzYWdlTW9uaXRvclwifSx7XCJob3N0XCI6XCJzdGF0cy5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIndlYmhvb2tcXC97YW55fVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkNvbnRyb2xsZXJAcmVkaXJlY3RUb0FwcFwifSx7XCJob3N0XCI6XCJsaWZlbGluZS5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIntsaWZlbGluZUhhc2hJZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJMaWZlTGluZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpcImxpZmVsaW5lLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwie2FueX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJDb250cm9sbGVyQHJlZGlyZWN0VG9BcHBcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ0ZWFtc1xcL2FjY2VwdFxcL3t0b2tlbn1cIixcIm5hbWVcIjpcInRlYW1zLmFjY2VwdF9pbnZpdGVcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQGFjY2VwdEludml0ZVwifSx7XCJob3N0XCI6XCJzdHlsZS1ndWlkZS5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIlxcL1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlB1YmxpY0NvbnRyb2xsZXJAc3R5bGVHdWlkZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInByaXZhY3lcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJQdWJsaWNDb250cm9sbGVyQHByaXZhY3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwic3Vic2NyaWJlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiUHVibGljQ29udHJvbGxlckBzdWJzY3JpYmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ0ZXJtcy1vZi1zZXJ2aWNlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiUHVibGljQ29udHJvbGxlckB0ZXJtc09mU2VydmljZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIlxcL1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkNvbnRyb2xsZXJAYXBwXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic2Vjb25kLWF1dGhcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxTZWNvbmRBdXRoQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInNlY29uZC1hdXRoXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQXV0aFxcU2Vjb25kQXV0aENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJzbGFjay1pbnZpdGVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyQ29udHJvbGxlckBzbGFja0ludml0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInN1YnNjcmlwdGlvblxcL2ludm9pY2VzXFwve2ludm9pY2V9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uSW52b2ljZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInthbnl9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQ29udHJvbGxlckBhcHBcIn1dLFxuICAgICAgICAgICAgcHJlZml4OiAnJyxcblxuICAgICAgICAgICAgcm91dGUgOiBmdW5jdGlvbiAobmFtZSwgcGFyYW1ldGVycywgcm91dGUpIHtcbiAgICAgICAgICAgICAgICByb3V0ZSA9IHJvdXRlIHx8IHRoaXMuZ2V0QnlOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCAhIHJvdXRlICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUm91dGUocm91dGUsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdXJsOiBmdW5jdGlvbiAodXJsLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMgfHwgW107XG5cbiAgICAgICAgICAgICAgICB2YXIgdXJpID0gdXJsICsgJy8nICsgcGFyYW1ldGVycy5qb2luKCcvJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3JyZWN0VXJsKHVyaSk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0b1JvdXRlIDogZnVuY3Rpb24gKHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVyaSA9IHRoaXMucmVwbGFjZU5hbWVkUGFyYW1ldGVycyhyb3V0ZS51cmksIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgIHZhciBxcyAgPSB0aGlzLmdldFJvdXRlUXVlcnlTdHJpbmcocGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hYnNvbHV0ZSAmJiB0aGlzLmlzT3RoZXJIb3N0KHJvdXRlKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIi8vXCIgKyByb3V0ZS5ob3N0ICsgXCIvXCIgKyB1cmkgKyBxcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3JyZWN0VXJsKHVyaSArIHFzKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzT3RoZXJIb3N0OiBmdW5jdGlvbiAocm91dGUpe1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZS5ob3N0ICYmIHJvdXRlLmhvc3QgIT0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVwbGFjZU5hbWVkUGFyYW1ldGVycyA6IGZ1bmN0aW9uICh1cmksIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFx7KC4qPylcXD8/XFx9L2csIGZ1bmN0aW9uKG1hdGNoLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyYW1ldGVyc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFtZXRlcnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gU3RyaXAgb3V0IGFueSBvcHRpb25hbCBwYXJhbWV0ZXJzIHRoYXQgd2VyZSBub3QgZ2l2ZW5cbiAgICAgICAgICAgICAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvXFx7Lio/XFw/XFx9L2csICcnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB1cmk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRSb3V0ZVF1ZXJ5U3RyaW5nIDogZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxcy5wdXNoKGtleSArICc9JyArIHBhcmFtZXRlcnNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICc/JyArIHFzLmpvaW4oJyYnKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldEJ5TmFtZSA6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMucm91dGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHRoaXMucm91dGVzW2tleV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRCeUFjdGlvbiA6IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnJvdXRlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0aGlzLnJvdXRlc1trZXldLmFjdGlvbiA9PT0gYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldENvcnJlY3RVcmw6IGZ1bmN0aW9uICh1cmkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5wcmVmaXggKyAnLycgKyB1cmkucmVwbGFjZSgvXlxcLz8vLCAnJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoICEgdGhpcy5hYnNvbHV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3RVcmwucmVwbGFjZSgnL1xcLz8kLycsICcnKSArIHVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZ2V0TGlua0F0dHJpYnV0ZXMgPSBmdW5jdGlvbihhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAoICEgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGF0dHJzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnMucHVzaChrZXkgKyAnPVwiJyArIGF0dHJpYnV0ZXNba2V5XSArICdcIicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGF0dHJzLmpvaW4oJyAnKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZ2V0SHRtbExpbmsgPSBmdW5jdGlvbiAodXJsLCB0aXRsZSwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgdGl0bGUgICAgICA9IHRpdGxlIHx8IHVybDtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBnZXRMaW5rQXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcblxuICAgICAgICAgICAgcmV0dXJuICc8YSBocmVmPVwiJyArIHVybCArICdcIiAnICsgYXR0cmlidXRlcyArICc+JyArIHRpdGxlICsgJzwvYT4nO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIHVybCBmb3IgYSBnaXZlbiBjb250cm9sbGVyIGFjdGlvbi5cbiAgICAgICAgICAgIC8vIGxhcm91dGUuYWN0aW9uKCdIb21lQ29udHJvbGxlckBnZXRJbmRleCcsIFtwYXJhbXMgPSB7fV0pXG4gICAgICAgICAgICBhY3Rpb24gOiBmdW5jdGlvbiAobmFtZSwgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlcy5yb3V0ZShuYW1lLCBwYXJhbWV0ZXJzLCByb3V0ZXMuZ2V0QnlBY3Rpb24obmFtZSkpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSB1cmwgZm9yIGEgZ2l2ZW4gbmFtZWQgcm91dGUuXG4gICAgICAgICAgICAvLyBsYXJvdXRlLnJvdXRlKCdyb3V0ZU5hbWUnLCBbcGFyYW1zID0ge31dKVxuICAgICAgICAgICAgcm91dGUgOiBmdW5jdGlvbiAocm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycyB8fCB7fTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZXMucm91dGUocm91dGUsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBmdWxseSBxdWFsaWZpZWQgVVJMIHRvIHRoZSBnaXZlbiBwYXRoLlxuICAgICAgICAgICAgLy8gbGFyb3V0ZS5yb3V0ZSgndXJsJywgW3BhcmFtcyA9IHt9XSlcbiAgICAgICAgICAgIHVybCA6IGZ1bmN0aW9uIChyb3V0ZSwgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlcy51cmwocm91dGUsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBodG1sIGxpbmsgdG8gdGhlIGdpdmVuIHVybC5cbiAgICAgICAgICAgIC8vIGxhcm91dGUubGlua190bygnZm9vL2JhcicsIFt0aXRsZSA9IHVybF0sIFthdHRyaWJ1dGVzID0ge31dKVxuICAgICAgICAgICAgbGlua190byA6IGZ1bmN0aW9uICh1cmwsIHRpdGxlLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdGhpcy51cmwodXJsKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRIdG1sTGluayh1cmwsIHRpdGxlLCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgaHRtbCBsaW5rIHRvIHRoZSBnaXZlbiByb3V0ZS5cbiAgICAgICAgICAgIC8vIGxhcm91dGUubGlua190b19yb3V0ZSgncm91dGUubmFtZScsIFt0aXRsZT11cmxdLCBbcGFyYW1ldGVycyA9IHt9XSwgW2F0dHJpYnV0ZXMgPSB7fV0pXG4gICAgICAgICAgICBsaW5rX3RvX3JvdXRlIDogZnVuY3Rpb24gKHJvdXRlLCB0aXRsZSwgcGFyYW1ldGVycywgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLnJvdXRlKHJvdXRlLCBwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRIdG1sTGluayh1cmwsIHRpdGxlLCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgaHRtbCBsaW5rIHRvIHRoZSBnaXZlbiBjb250cm9sbGVyIGFjdGlvbi5cbiAgICAgICAgICAgIC8vIGxhcm91dGUubGlua190b19hY3Rpb24oJ0hvbWVDb250cm9sbGVyQGdldEluZGV4JywgW3RpdGxlPXVybF0sIFtwYXJhbWV0ZXJzID0ge31dLCBbYXR0cmlidXRlcyA9IHt9XSlcbiAgICAgICAgICAgIGxpbmtfdG9fYWN0aW9uIDogZnVuY3Rpb24oYWN0aW9uLCB0aXRsZSwgcGFyYW1ldGVycywgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLmFjdGlvbihhY3Rpb24sIHBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEh0bWxMaW5rKHVybCwgdGl0bGUsIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICB9KS5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogRXhwb3NlIHRoZSBjbGFzcyBlaXRoZXIgdmlhIEFNRCwgQ29tbW9uSlMgb3IgdGhlIGdsb2JhbCBvYmplY3RcbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbGFyb3V0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKXtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBsYXJvdXRlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2luZG93Lmxhcm91dGUgPSBsYXJvdXRlO1xuICAgIH1cblxufSkuY2FsbCh0aGlzKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXJvdXRlLmpzIiwiZXhwb3J0IGNvbnN0IG5vdyA9ICgpID0+IHtcbiAgcmV0dXJuIG1vbWVudCgpLnR6KG1vbWVudC50ei5ndWVzcygpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwYXJzZURhdGUgPSBkYXRlID0+IHtcbiAgcmV0dXJuIG1vbWVudChkYXRlKS50eihtb21lbnQudHouZ3Vlc3MoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgaHVtYW5pemVEaWZmID0gKGRhdGUxLCBkYXRlMikgPT4ge1xuICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKG1vbWVudChkYXRlMikuZGlmZihtb21lbnQoZGF0ZTEpLCAnbWludXRlcycpLCBcIm1pbnV0ZXNcIikuaHVtYW5pemUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRUaW1lID0gKGRhdGUpID0+IHtcbiAgcmV0dXJuIHBhcnNlRGF0ZShkYXRlKS5mb3JtYXQoJ2g6bW0gQScpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUaW1lSGVpZ2h0U3R5bGUgPSAoc3RhcnREYXRlLCBlbmREYXRlKSA9PiB7XG5cbiAgICBsZXQgc3RhcnREYXRlUGFyc2VkID0gcGFyc2VEYXRlKHN0YXJ0RGF0ZSk7XG4gICAgbGV0IHN0YXJ0RU0gPSAoKCgoc3RhcnREYXRlUGFyc2VkLmZvcm1hdCgnSEgnKSAqIDYwKSArIHBhcnNlSW50KHN0YXJ0RGF0ZVBhcnNlZC5mb3JtYXQoJ21tJykpKSkgKiA2KSAvIDYwO1xuXG4gICAgbGV0IGVuZERhdGVQYXJzZWQgPSBwYXJzZURhdGUoZW5kRGF0ZSk7XG4gICAgbGV0IGVuZEVtID0gKCgoKChlbmREYXRlUGFyc2VkLmZvcm1hdCgnSEgnKSAqIDYwKSArIHBhcnNlSW50KGVuZERhdGVQYXJzZWQuZm9ybWF0KCdtbScpKSkpICogNikgLyA2MCkgLSBzdGFydEVNO1xuXG4gICAgcmV0dXJuIGB0b3A6JHtzdGFydEVNIH1lbTsgaGVpZ2h0OiR7ZW5kRW0gfWVtO2A7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9kYXRlLXRpbWUvaW5kZXguanMiLCJleHBvcnQgY29uc3QgbG9jYWwgPSAoKSA9PiB7XG4gIHJldHVybiBMYXJhdmVsLmVudiA9PT0gJ2xvY2FsJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL2Vudmlyb25tZW50L2luZGV4LmpzIiwiLy8gTk9URSAtIHRoaXMgd2lsbCBub3Qgd29yayB3aXRoIFBVVCEhIVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N5bWZvbnkvc3ltZm9ueS9pc3N1ZXMvOTIyNlxuZXhwb3J0IGNvbnN0IGdldEZvcm1EYXRhID0gZnVuY3Rpb24oZm9ybSkge1xuICBpZiAoISQoZm9ybSkuaXMoXCJmb3JtXCIpKSB7XG4gICAgZm9ybSA9ICQoZm9ybSkuZmluZChcImZvcm1cIilbMF07XG4gIH1cbiAgcmV0dXJuIG5ldyBGb3JtRGF0YShmb3JtKTtcbn07XG5cbmltcG9ydCBGb3JtIGZyb20gXCIuLi8uLi8uLi9jbGFzc2VzL0Zvcm1cIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZvcm0gPSAoZGF0YSwgcmVzZXQpID0+IHtcbiAgcmV0dXJuIG5ldyBGb3JtKGRhdGEsIHJlc2V0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL2Zvcm0vaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVGb3JtLCBnZXRGb3JtRGF0YSB9IGZyb20gXCIuL2Zvcm1cIjtcblxuaW1wb3J0IHsgYmFjaywgYWN0aW9uIH0gZnJvbSBcIi4vcm91dGVzXCI7XG5cbmltcG9ydCB7IG5vdywgaHVtYW5pemVEaWZmLCBwYXJzZURhdGUsIGZvcm1hdFRpbWUsIGdldFRpbWVIZWlnaHRTdHlsZSB9IGZyb20gXCIuL2RhdGUtdGltZVwiO1xuXG5pbXBvcnQgeyBsb2NhbCB9IGZyb20gXCIuL2Vudmlyb25tZW50XCI7XG5cbmltcG9ydCB7IGlzQWRtaW4gfSBmcm9tIFwiLi9wZXJtaXNzaW9uc1wiO1xuXG5pbXBvcnQgeyBzaG93RXJyb3IsIHNob3dTdWNjZXNzLCBoYW5kbGVBcGlFcnJvciB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcblxuVnVlLm1peGluKHtcbiAgbWV0aG9kczoge1xuICAgIG5vdyxcbiAgICBiYWNrLFxuICAgIGh1bWFuaXplRGlmZixcbiAgICBhY3Rpb24sXG4gICAgc2hvd0Vycm9yLFxuICAgIHBhcnNlRGF0ZSxcbiAgICBmb3JtYXRUaW1lLFxuICAgIGNyZWF0ZUZvcm0sXG4gICAgc2hvd1N1Y2Nlc3MsXG4gICAgZ2V0Rm9ybURhdGEsXG4gICAgaGFuZGxlQXBpRXJyb3IsXG4gICAgZ2V0VGltZUhlaWdodFN0eWxlXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbG9jYWwsXG4gICAgaXNBZG1pbixcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IHNob3dFcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHRpdGxlLCB0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aW1lb3V0ID0gNTAwMDtcbiAgfVxuXG4gIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwibm90aWZpY2F0aW9ucy9hZGRcIiwge1xuICAgIHRpdGxlOiAhXy5pc0VtcHR5KHRpdGxlKSA/IHRpdGxlIDogXCJFcnJvciEhXCIsXG4gICAgdGV4dDogbWVzc2FnZSxcbiAgICBjbGFzczogXCJlcnJvclwiLFxuICAgIHRpbWVvdXQ6IHRpbWVvdXRcbiAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IHNob3dTdWNjZXNzID0gZnVuY3Rpb24obWVzc2FnZSwgdGl0bGUsIHRpbWVvdXQpIHtcbiAgaWYgKHRpbWVvdXQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRpbWVvdXQgPSA1MDAwO1xuICB9XG5cbiAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJub3RpZmljYXRpb25zL2FkZFwiLCB7XG4gICAgdGl0bGU6ICFfLmlzRW1wdHkodGl0bGUpID8gdGl0bGUgOiBcIlN1Y2Nlc3MhIVwiLFxuICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgY2xhc3M6IFwic3VjY2Vzc1wiLFxuICAgIHRpbWVvdXQ6IHRpbWVvdXRcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQXBpRXJyb3IgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICBsZXQgbWVzc2FnZSA9IHJlc3BvbnNlO1xuXG4gIGlmIChfLmlzT2JqZWN0KHJlc3BvbnNlKSkge1xuICAgIGlmIChfLmlzU2V0KHJlc3BvbnNlLmVycm9ycykpIHtcbiAgICAgIG1lc3NhZ2UgPSByZXNwb25zZS5lcnJvcnM7XG4gICAgfSBlbHNlIGlmIChfLmlzT2JqZWN0KHJlc3BvbnNlLmRhdGEpKSB7XG4gICAgICBtZXNzYWdlID0gXCJcIjtcbiAgICAgIF8uZWFjaChyZXNwb25zZS5kYXRhLmVycm9ycywgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgbWVzc2FnZSArPSBlcnJvciArIFwiPGJyPlwiO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSByZXNwb25zZS5kYXRhO1xuICAgIH1cbiAgfVxuXG4gIGlmIChfLmlzU3RyaW5nKG1lc3NhZ2UpKSB7XG4gICAgdGhpcy5zaG93RXJyb3IobWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKFwiVU5BQkxFIFRPIFBBUlNFIEVSUk9SXCIpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9ub3RpZmljYXRpb25zL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGlzQWRtaW4gPSBmdW5jdGlvbigpIHtcbiAgLy8gcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5yb2xlID09PSBcImFkbWluXCI7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvcGVybWlzc2lvbnMvaW5kZXguanMiLCJleHBvcnQgY29uc3QgYmFjayA9ICgpID0+IHtcbiAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IChhY3Rpb24sIHBhcmFtZXRlcnMpID0+IHtcbiAgLy8gcmV0dXJuIGxhcm91dGUuYWN0aW9uKGFjdGlvbiwgcGFyYW1ldGVycyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9yb3V0ZXMvaW5kZXguanMiLCJyZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaW5kZXguanMiLCJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgcm91dGVzIH0gZnJvbSBcIi4uL2FwcC9yb3V0ZXMuanNcIjtcblxud2luZG93LlZ1ZVJvdXRlciA9IHJlcXVpcmUoXCJ2dWUtcm91dGVyL2Rpc3QvdnVlLXJvdXRlci5jb21tb25cIik7XG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIG1vZGU6IFwiaGlzdG9yeVwiLFxuICByb3V0ZXM6IHJvdXRlc1xufSk7XG5cbi8vIHJvdXRlci5iZWZvcmVSZXNvbHZlKCh0bywgZnJvbSwgbmV4dCkgPT4ge1xuLy8gICAvLyBpZiAoIXN0b3JlLnN0YXRlLnVzZXIudXNlci5pc19zdWJzY3JpYmVkKSB7XG4vLyAgIC8vICAgaWYgKHRvLm5hbWUgIT09IFwic3Vic2NyaXB0aW9uXCIpIHtcbi8vICAgLy8gICAgIG5leHQoe1xuLy8gICAvLyAgICAgICBuYW1lOiBcInN1YnNjcmlwdGlvblwiXG4vLyAgIC8vICAgICB9KTtcbi8vICAgLy8gICB9IGVsc2Uge1xuLy8gICAvLyAgICAgbmV4dCgpO1xuLy8gICAvLyAgIH1cbi8vICAgLy8gfSBlbHNlIHtcbi8vICAgLy8gICBuZXh0KCk7XG4vLyAgIC8vIH1cbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JvdXRlci9pbmRleC5qcyIsImltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IFZ1ZXggZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuLy4uL2NsYXNzZXMvRm9ybVwiO1xuaW1wb3J0IEVycm9ycyBmcm9tIFwiLi8uLi9jbGFzc2VzL0Vycm9yc1wiO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcIi4uL21peGlucy9oZWxwZXJzL3JvdXRlc1wiO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4vLi4vY2xhc3Nlcy9SZXF1ZXN0XCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1vZHVsZXMgfSBmcm9tIFwiLi9tb2R1bGVzXCI7XG5cblZ1ZS51c2UoVnVleCk7XG5WdWUuRm9ybSA9IEZvcm07XG5WdWUuRXJyb3JzID0gRXJyb3JzO1xuVnVlLlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG5WdWUuYWN0aW9uID0gYWN0aW9uO1xuXG5WdWUucmVxdWVzdCA9IGRhdGEgPT4ge1xuICByZXR1cm4gbmV3IFJlcXVlc3QoZGF0YSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gIG1vZHVsZXM6IG1vZHVsZXNcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBsb2dvdXQgPSAoY29udGV4dCwgZGF0YSkgPT4ge1xuICByZXR1cm4gVnVlLnJlcXVlc3QoZGF0YSlcbiAgICAucG9zdChWdWUuYWN0aW9uKFwiQXV0aExvZ2luQ29udHJvbGxlckBsb2dvdXRcIikpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL2FjdGlvbnMuanMiLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCIuL211dGF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBhY3Rpb25zLFxuICBtdXRhdGlvbnMsXG4gIG5hbWVzcGFjZWQ6IHRydWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvYXV0aC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHt9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL2F1dGgvc3RhdGUuanMiLCJpbXBvcnQgYXV0aCBmcm9tIFwiLi9hdXRoXCI7XG5pbXBvcnQgcm9vbXMgZnJvbSAnLi9yb29tcyc7XG5pbXBvcnQgc3lzdGVtIGZyb20gXCIuL3N5c3RlbVwiO1xuaW1wb3J0IHByb3ZpZGVycyBmcm9tIFwiLi9wcm92aWRlcnNcIjtcbmltcG9ydCBub3RpZmljYXRpb25zIGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhdXRoLFxuICByb29tcyxcbiAgc3lzdGVtLFxuICBwcm92aWRlcnMsXG4gIG5vdGlmaWNhdGlvbnMsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGFkZCA9ICh7IGNvbW1pdCB9LCBub3RpZmljYXRpb24pID0+IHtcbiAgY29tbWl0KFwiYWRkXCIsIG5vdGlmaWNhdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKHsgY29tbWl0IH0sIG5vdGlmaWNhdGlvbikgPT4ge1xuICBjb21taXQoXCJyZW1vdmVcIiwgbm90aWZpY2F0aW9uKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9hY3Rpb25zLmpzIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tIFwiLi9tdXRhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL25vdGlmaWNhdGlvbnMvaW5kZXguanMiLCJleHBvcnQgY29uc3QgYWRkID0gKHN0YXRlLCBub3RpZmljYXRpb24pID0+IHtcbiAgc3RhdGUubm90aWZpY2F0aW9ucy5wdXNoKG5vdGlmaWNhdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKHN0YXRlLCBub3RpZmljYXRpb24pID0+IHtcbiAgc3RhdGUubm90aWZpY2F0aW9ucyA9IF8ud2l0aG91dChzdGF0ZS5ub3RpZmljYXRpb25zLCBub3RpZmljYXRpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL211dGF0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbm90aWZpY2F0aW9uczogW11cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9zdGF0ZS5qcyIsImV4cG9ydCBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgVnVlLnJlcXVlc3QoKS5nZXQoJy9hcGkvcHJvdmlkZXJzJywgJ3Byb3ZpZGVycy9zZXRBbGwnKVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9wcm92aWRlcnMvYWN0aW9ucy5qcyIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSBcIi4vbXV0YXRpb25zXCI7XG5cbmltcG9ydCByb29tcyBmcm9tICcuL21vZHVsZXMvcm9vbXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBhY3Rpb25zLFxuICBtdXRhdGlvbnMsXG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgbW9kdWxlcyA6IHtcbiAgICAgICAgcm9vbXNcbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBnZXQgPSAoe30sIHByb3ZpZGVyKSA9PiB7XG4gICAgVnVlLnJlcXVlc3QoKS5nZXQoYC9hcGkvcHJvdmlkZXJzLyR7cHJvdmlkZXJ9L3Jvb21zYCwgJ3Byb3ZpZGVycy9yb29tcy9zZXRBbGwnKVxufTtcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gKHt9LCBkYXRhKSA9PiB7XG4gICAgVnVlLnJlcXVlc3QoZGF0YSkucG9zdChgL2FwaS9wcm92aWRlcnMvJHtkYXRhLnByb3ZpZGVyfS9yb29tc2AsICdyb29tcy9hZGQnKS50aGVuKChyb29tKSA9PiB7XG4gICAgICAgIGFwcC4kcm91dGVyLnB1c2goYC9yb29tcy8ke3Jvb20uaWR9YClcbiAgICB9KVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9wcm92aWRlcnMvbW9kdWxlcy9yb29tcy9hY3Rpb25zLmpzIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tIFwiLi9tdXRhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tb2R1bGVzL3Jvb21zL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IHNldEFsbCA9IChzdGF0ZSwgeyByZXNwb25zZSB9KSA9PiB7XG4gIHN0YXRlLnJvb21zID0gcmVzcG9uc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tb2R1bGVzL3Jvb21zL211dGF0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcm9vbXM6IFtdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tb2R1bGVzL3Jvb21zL3N0YXRlLmpzIiwiZXhwb3J0IGNvbnN0IHNldEFsbCA9IChzdGF0ZSwgeyByZXNwb25zZSB9KSA9PiB7XG4gIHN0YXRlLnByb3ZpZGVycyA9IHJlc3BvbnNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9wcm92aWRlcnMvbXV0YXRpb25zLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBwcm92aWRlcnM6IFtdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9zdGF0ZS5qcyIsImV4cG9ydCBjb25zdCBnZXQgPSAoe30pID0+IHtcbiAgICBWdWUucmVxdWVzdCgpLmdldChgL2FwaS9yb29tc2AsICdyb29tcy9zZXRBbGwnKVxufTtcblxuZXhwb3J0IGNvbnN0IHNob3cgPSAoe30sIHJvb20pID0+IHtcbiAgICBWdWUucmVxdWVzdCgpLmdldChgL2FwaS9yb29tcy8ke3Jvb219YCwgJ3Jvb21zL3NldCcpXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9hY3Rpb25zLmpzIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tIFwiLi9tdXRhdGlvbnNcIjtcblxuaW1wb3J0IGV2ZW50cyBmcm9tICcuL21vZHVsZXMvZXZlbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBhY3Rpb25zLFxuICBtdXRhdGlvbnMsXG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIG1vZHVsZXMgOiB7XG4gICAgICBldmVudHNcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBnZXQgPSAoe30sIHJvb20pID0+IHtcbiAgICBWdWUucmVxdWVzdCgpLmdldChgL2FwaS9yb29tcy8ke3Jvb219L2V2ZW50c2AsICdyb29tcy9ldmVudHMvc2V0QWxsJylcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGUgPSAoe30sIGRhdGEpID0+IHtcbiAgICBWdWUucmVxdWVzdChkYXRhKS5wb3N0KGAvYXBpL3Jvb21zLyR7ZGF0YS5yb29tfS9ldmVudHNgLCAncm9vbXMvZXZlbnRzL2FkZCcpXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSAoe30sIGRhdGEpID0+IHtcbiAgICBWdWUucmVxdWVzdChkYXRhKS5wdXQoYC9hcGkvcm9vbXMvJHtkYXRhLnJvb219L2V2ZW50cy8ke2RhdGEuZXZlbnR9YCwgJ3Jvb21zL2V2ZW50cy91cGRhdGUnKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL2FjdGlvbnMuanMiLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCIuL211dGF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBhY3Rpb25zLFxuICBtdXRhdGlvbnMsXG4gIG5hbWVzcGFjZWQ6IHRydWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvbW9kdWxlcy9ldmVudHMvaW5kZXguanMiLCJleHBvcnQgY29uc3Qgc2V0QWxsID0gKHN0YXRlLCB7IHJlc3BvbnNlIH0pID0+IHtcbiAgICBWdWUuc2V0KHN0YXRlLCAnZXZlbnRzJywgcmVzcG9uc2UpXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0ID0gKHN0YXRlLCBib29raW5nKSA9PiB7XG4gICAgVnVlLnNldChzdGF0ZSwgJ2V2ZW50JywgYm9va2luZylcbn07XG5cbmV4cG9ydCBjb25zdCBhZGQgPSAoc3RhdGUsIHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgIHN0YXRlLmV2ZW50cy5wdXNoKHJlc3BvbnNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGUgPSAoc3RhdGUsIHtyZXNwb25zZX0pID0+IHtcbiAgICBsZXQgYm9va2luZ0tleSA9IF8uZmluZEtleShzdGF0ZS5ldmVudHMsIHsgaWQgOiByZXNwb25zZS5pZCB9KTtcbiAgICBpZihib29raW5nS2V5KSB7XG4gICAgICAgIFZ1ZS5zZXQoc3RhdGUuZXZlbnRzLCBib29raW5nS2V5LCByZXNwb25zZSk7XG4gICAgfVxufTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL211dGF0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZXZlbnRzOiBbXSxcbiAgZXZlbnQgOiBudWxsLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tb2R1bGVzL2V2ZW50cy9zdGF0ZS5qcyIsImV4cG9ydCBjb25zdCBzZXQgPSAoc3RhdGUsIHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgIFZ1ZS5zZXQoc3RhdGUsICdyb29tJywgcmVzcG9uc2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEFsbCA9IChzdGF0ZSwgeyByZXNwb25zZSB9KSA9PiB7XG4gICAgVnVlLnNldChzdGF0ZSwgJ3Jvb21zJywgcmVzcG9uc2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZCA9IChzdGF0ZSwgeyByZXNwb25zZSB9KSA9PiB7XG4gICAgc3RhdGUucm9vbXMucHVzaChyZXNwb25zZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL211dGF0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcm9vbTogbnVsbCxcbiAgcm9vbXMgOiBbXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9zdGF0ZS5qcyIsImV4cG9ydCBjb25zdCBzZXRWZXJzaW9uID0gKHsgY29tbWl0IH0sIGRhdGEpID0+IHtcbiAgY29tbWl0KFwic2V0VmVyc2lvblwiLCBkYXRhLnZlcnNpb24pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vYWN0aW9ucy5qcyIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSBcIi4vbXV0YXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIGFjdGlvbnMsXG4gIG11dGF0aW9ucyxcbiAgbmFtZXNwYWNlZDogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vaW5kZXguanMiLCJleHBvcnQgY29uc3Qgc2V0VmVyc2lvbiA9IChzdGF0ZSwgdmVyc2lvbikgPT4ge1xuICBzdGF0ZS52ZXJzaW9uID0gdmVyc2lvbjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc3lzdGVtL211dGF0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgdmVyc2lvbjogTGFyYXZlbC52ZXJzaW9uXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3N5c3RlbS9zdGF0ZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=