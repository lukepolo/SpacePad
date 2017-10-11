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
            return this.timeDifference >= 15;
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
                        "\n                    10 Seats, TV : HDMI\n                    "
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
                        "\n                        Find Another space\n                    "
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vUm9vbXMudnVlIiwid2VicGFjazovLy9Sb29tLnZ1ZSIsIndlYnBhY2s6Ly8vQm9va2luZy52dWUiLCJ3ZWJwYWNrOi8vL0Jvb2tpbmdBdHRlbmRlZXMudnVlIiwid2VicGFjazovLy9DYWxlbmRhci52dWUiLCJ3ZWJwYWNrOi8vL0NsaXBib2FyZC52dWUiLCJ3ZWJwYWNrOi8vL05hdmlnYXRpb24udnVlIiwid2VicGFjazovLy9Ob3RpZmljYXRpb24udnVlIiwid2VicGFjazovLy9Ob3RpZmljYXRpb25zLnZ1ZSIsIndlYnBhY2s6Ly8vVGltZUFnby52dWUiLCJ3ZWJwYWNrOi8vL1Rvb2xUaXAudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWU/ZmIyMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlP2Y2N2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlPzBkM2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Rvb2xUaXAudnVlP2FmYWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZT8wMjU1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1Jvb21zLnZ1ZT9mNTQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlP2E1MTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0Jvb2tpbmcudnVlPzhiNTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWU/ODc2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWU/Y2I0NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlP2MzM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlPzc3ZmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvRGFzaGJvYXJkLnZ1ZT9mMTUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlPzRjMmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9EYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1Jvb21zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL0Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NsYXNzZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NsYXNzZXMvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DbGlwYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VOb3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub29sVGlwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9sYXJvdXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvZGF0ZS10aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvZW52aXJvbm1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9ub3RpZmljYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvcGVybWlzc2lvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb3V0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvYXV0aC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tb2R1bGVzL3Jvb21zL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Byb3ZpZGVycy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tb2R1bGVzL2V2ZW50cy9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc3lzdGVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJ3aW5kb3ciLCJzdG9yZSIsIlZ1ZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJhcHAiLCJyb3V0ZXIiLCIkbW91bnQiLCJwYXRoIiwiY29tcG9uZW50IiwiY2hpbGRyZW4iLCJuYW1lIiwibGFyb3V0ZSIsIm1vbWVudCIsInR6Iiwic2V0RGVmYXVsdCIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJOUHJvZ3Jlc3MiLCJjb25maWd1cmUiLCJlYXNpbmciLCJzcGVlZCIsInNob3dTcGlubmVyIiwic3RhcnQiLCJpbmMiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsImRvbmUiLCJQdXNoZXIiLCJsb2ciLCJFY2hvIiwiY2x1c3RlciIsImJyb2FkY2FzdGVyIiwia2V5IiwicHVzaGVyS2V5IiwiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJGb3JtIiwib3JpZ2luYWxEYXRhIiwiY2xlYXIiLCJlbXB0eURhdGEiLCJkYXRhIiwicmVzZXREYXRhIiwicmVzZXQiLCJfIiwicmVkdWNlIiwicmVzdWx0IiwidmFsdWUiLCJpc0VxdWFsIiwiY29uY2F0IiwiUmVxdWVzdCIsImlzT2JqZWN0IiwiRm9ybURhdGEiLCJmb3JtRGF0YSIsImFzc2lnbiIsInVybCIsIm11dGF0aW9ucyIsInN1Ym1pdCIsImRhdGFRdWVyeVN0cmluZyIsInJlcXVlc3RUeXBlIiwicmVzb2x2ZSIsInRoZW4iLCJvblN1Y2Nlc3MiLCJpc1N0cmluZyIsImVhY2giLCIkc3RvcmUiLCJjb21taXQiLCJtdXRhdGlvbiIsInJlcXVlc3REYXRhIiwic2V0T3JpZ2luYWxEYXRhIiwiY2F0Y2giLCJoYW5kbGVBcGlFcnJvciIsIm9uRmFpbCIsImNvbnNvbGUiLCJyZWNvcmQiLCJzdHIiLCJkYXR1bSIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicm91dGVzIiwiYWJzb2x1dGUiLCJyb290VXJsIiwicHJlZml4Iiwicm91dGUiLCJwYXJhbWV0ZXJzIiwiZ2V0QnlOYW1lIiwidW5kZWZpbmVkIiwidG9Sb3V0ZSIsInVyaSIsImdldENvcnJlY3RVcmwiLCJyZXBsYWNlTmFtZWRQYXJhbWV0ZXJzIiwicXMiLCJnZXRSb3V0ZVF1ZXJ5U3RyaW5nIiwiaXNPdGhlckhvc3QiLCJob3N0IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInJlcGxhY2UiLCJtYXRjaCIsImdldEJ5QWN0aW9uIiwiYWN0aW9uIiwiZ2V0TGlua0F0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwiYXR0cnMiLCJnZXRIdG1sTGluayIsInRpdGxlIiwibGlua190byIsImxpbmtfdG9fcm91dGUiLCJsaW5rX3RvX2FjdGlvbiIsImNhbGwiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIiwibm93IiwiZ3Vlc3MiLCJwYXJzZURhdGUiLCJkYXRlIiwiaHVtYW5pemVEaWZmIiwiZGF0ZTEiLCJkYXRlMiIsImR1cmF0aW9uIiwiZGlmZiIsImh1bWFuaXplIiwiZm9ybWF0VGltZSIsImZvcm1hdCIsImdldFRpbWVIZWlnaHRTdHlsZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzdGFydERhdGVQYXJzZWQiLCJzdGFydEVNIiwicGFyc2VJbnQiLCJlbmREYXRlUGFyc2VkIiwiZW5kRW0iLCJsb2NhbCIsImVudiIsImdldEZvcm1EYXRhIiwiZm9ybSIsIiQiLCJpcyIsImZpbmQiLCJjcmVhdGVGb3JtIiwibWl4aW4iLCJtZXRob2RzIiwiYmFjayIsInNob3dFcnJvciIsInNob3dTdWNjZXNzIiwiY29tcHV0ZWQiLCJpc0FkbWluIiwibWVzc2FnZSIsInRpbWVvdXQiLCJkaXNwYXRjaCIsImlzRW1wdHkiLCJ0ZXh0IiwiY2xhc3MiLCJpc1NldCIsIndhcm4iLCJoaXN0b3J5IiwiVnVlUm91dGVyIiwibW9kZSIsIlZ1ZXgiLCJTdG9yZSIsIm1vZHVsZXMiLCJsb2dvdXQiLCJjb250ZXh0IiwicG9zdCIsInN0YXRlIiwiYWN0aW9ucyIsIm5hbWVzcGFjZWQiLCJhdXRoIiwicm9vbXMiLCJzeXN0ZW0iLCJwcm92aWRlcnMiLCJub3RpZmljYXRpb25zIiwiYWRkIiwibm90aWZpY2F0aW9uIiwicmVtb3ZlIiwid2l0aG91dCIsImdldCIsInByb3ZpZGVyIiwicm9vbSIsIiRyb3V0ZXIiLCJpZCIsInNldEFsbCIsInNob3ciLCJldmVudHMiLCJjcmVhdGUiLCJ1cGRhdGUiLCJwdXQiLCJldmVudCIsInNldCIsImJvb2tpbmciLCJib29raW5nS2V5IiwiZmluZEtleSIsInNldFZlcnNpb24iLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO2dDQUVBOzZCQUNBOzZCQUNBO0FBQ0E7OztnQ0FFQTsyQ0FDQTtBQUNBO3dDQUNBOytDQUNBO0FBRUE7QUFQQTtBQUxBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtnQ0FFQTt1RUFDQTtBQUNBOzs7OENBRUE7OzJCQUVBOzJCQUNBOzZDQUVBO0FBSkE7QUFNQTtBQVJBOztnQ0FVQTtxREFDQTtBQUVBO0FBSkE7QUFiQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJFQTtBQUNBOztBQUVBOztBQUdBO0FBRUE7QUFIQTs7QUFJQTs7OERBQ0E7aUVBQ0E7MEVBQ0E7b0JBQ0E7b0VBQ0E7QUFDQTs7OzZDQUVBOzt5QkFFQTt5Q0FFQTtBQUhBO0FBSUE7b0NBQ0E7MENBQ0E7bUNBQ0E7O21DQUVBO2lDQUNBOzZDQUNBO2tHQUNBO2dDQUVBO0FBTkE7QUFPQTtBQUNBOzBDQUNBOzswQkFFQTt5Q0FDQTsyQ0FDQTsyQ0FFQTtBQUxBO0FBT0E7QUEzQkE7OzhCQTZCQTsyQ0FDQTtBQUNBOzREQUNBO3lEQUNBO3dFQUNBO0FBQ0E7QUFDQTs0Q0FDQTttQ0FDQTtBQUNBO29EQUNBO2lFQUNBO2tDQUNBOzRCQUNBO0FBQ0E7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O0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLHVCQUF1QixxQkFBcUIsRUFBRTtBQUNqRDtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0EsdUNBQXVDLGlCQUFpQixFQUFFO0FBQzFELEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUEsNEJBQTRCLHdCQUF3Qjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsMEJBQTBCO0FBQzFCLEdBQUc7O0FBRUg7QUFDQSwwQkFBMEI7QUFDMUIsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFFBQVE7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixZQUFZO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsaUJBQWlCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QixLQUFELFNBQXlCO0FBQUEsUUFBZmpKLFFBQWUsU0FBZkEsUUFBZTs7QUFDM0NqQyxRQUFJME0sR0FBSixDQUFReEIsS0FBUixFQUFlLE9BQWYsRUFBd0JqSixRQUF4QjtBQUNILENBRk07O0FBSUEsSUFBTXlKLE1BQU0sU0FBTkEsR0FBTSxDQUFDUixLQUFELFNBQXlCO0FBQUEsUUFBZmpKLFFBQWUsU0FBZkEsUUFBZTs7QUFDeENpSixVQUFNSSxLQUFOLENBQVk3RixJQUFaLENBQWlCeEQsUUFBakI7QUFDSCxDQUZNLEM7Ozs7Ozs7OztBQ1JQLHlEQUFlO0FBQ2IrSixRQUFNLElBRE87QUFFYlYsU0FBUTtBQUZLLENBQWYsRTs7Ozs7Ozs7OztBQ0FPLElBQU13QixhQUFhLFNBQWJBLFVBQWEsT0FBYXpKLElBQWIsRUFBc0I7QUFBQSxNQUFuQnlCLE1BQW1CLFFBQW5CQSxNQUFtQjs7QUFDOUNBLFNBQU8sWUFBUCxFQUFxQnpCLEtBQUswSixPQUExQjtBQUNELENBRk0sQzs7Ozs7Ozs7Ozs7QUNBUDtBQUNBO0FBQ0E7O0FBRUEseURBQWU7QUFDYjdCLFNBQUEsdURBRGE7QUFFYkMsV0FBQSxzQ0FGYTtBQUdiL0csYUFBQSx3Q0FIYTtBQUliZ0gsY0FBWTtBQUpDLENBQWYsRTs7Ozs7Ozs7OztBQ0pPLElBQU0wQixhQUFhLFNBQWJBLFVBQWEsQ0FBQzVCLEtBQUQsRUFBUTZCLE9BQVIsRUFBb0I7QUFDNUM3QixRQUFNNkIsT0FBTixHQUFnQkEsT0FBaEI7QUFDRCxDQUZNLEM7Ozs7Ozs7O0FDQVAseURBQWU7QUFDYkEsV0FBUzdMLFFBQVE2TDtBQURKLENBQWYsRTs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICBMZXRzIGNvbm5lY3QgeW91ciBmaXJzdCBwcm92aWRlclxuXG4gICAgICAgIDxhIGhyZWY9XCIvcHJvdmlkZXIvb2ZmaWNlMzY1L2xpbmtcIj5PZmZpY2UgMzY1PC9hPlxuICAgICAgICA8YSBocmVmPVwiL3Byb3ZpZGVyL2dzdWl0ZS9saW5rXCI+R1N1aXRlPC9hPlxuXG4gICAgICAgIDxoMz5Db25uZWN0ZWQgQWNjb3VudHM8L2gzPlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJwcm92aWRlciBpbiBwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWUgOiAncHJvdmlkZXJfcm9vbXMnLCBwYXJhbXMgOiB7IHByb3ZpZGVyIDogcHJvdmlkZXIuaWQgfX1cIj5cbiAgICAgICAgICAgICAgICB7eyBwcm92aWRlci5lbWFpbCB9fSBbe3sgcHJvdmlkZXIucHJvdmlkZXIgfX1dXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxoMz5Sb29tczwvaDM+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInJvb20gaW4gcm9vbXNcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZSA6ICdyb29tJywgcGFyYW1zIDogeyByb29tIDogcm9vbS5pZCB9fVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyByb29tLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3Jvb21zL2dldCcpXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncHJvdmlkZXJzL2dldCcpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkIDoge1xuICAgICAgICAgICAgcm9vbXMoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5yb29tcy5yb29tcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm92aWRlcnMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnByb3ZpZGVycy5wcm92aWRlcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBEYXNoYm9hcmQudnVlP2Q2MTNhN2ZhIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5BdmFpbGFibGUgUm9vbXM8L2gzPlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJyb29tIGluIHJvb21zXCI+XG4gICAgICAgICAgICA8ZGl2IEBjbGljaz1cImNyZWF0ZVJvb20ocm9vbSlcIj5cbiAgICAgICAgICAgICAgICB7eyByb29tLm5hbWUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncHJvdmlkZXJzL3Jvb21zL2dldCcsIHRoaXMuJHJvdXRlLnBhcmFtcy5wcm92aWRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHMgOiB7XG4gICAgICAgICAgICBjcmVhdGVSb29tKHJvb20pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncHJvdmlkZXJzL3Jvb21zL3N0b3JlJywge1xuICAgICAgICAgICAgICAgICAgICBuYW1lIDogcm9vbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICByb29tIDogcm9vbS5yb29tLFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlciA6IHRoaXMuJHJvdXRlLnBhcmFtcy5wcm92aWRlclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkIDoge1xuICAgICAgICAgICAgcm9vbXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnByb3ZpZGVycy5yb29tcy5yb29tcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSb29tcy52dWU/ZjEwNTdiOWEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBpZD1cInJvb21cIiB2LWlmPVwicm9vbVwiPlxuICAgICAgICA8ZGl2IGlkPVwicm9vbS1jb250ZW50XCI+XG5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJyb29tLWhlYWRlciBsZXZlbFwiIDpjbGFzcz1cInsgYm9va2VkIDogY3VycmVudEJvb2tpbmcgLCBmcmVlIDogIWN1cnJlbnRCb29raW5nfVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gTGVmdCBzaWRlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57eyByb29tLm5hbWUgfX08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gUmlnaHQgc2lkZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnt7IGN1cnJlbnREYXRlIH19PC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8IS0tY29udGVudCAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIHJvb20tZGV0YWlsc1wiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBjYWxlbmRhci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29raW5nLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjdXJyZW50Qm9va2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Cb29rZWQgdW50aWwge3sgZm9ybWF0VGltZShjdXJyZW50Qm9va2luZy5lbmRfZGF0ZSkgfX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJuZXh0Qm9va2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Cb29rZWQgaW4ge3sgaHVtYW5pemVEaWZmKG5vdygpLCBwYXJzZURhdGUobmV4dEJvb2tpbmcuc3RhcnRfZGF0ZSkpIH19IDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+RnJlZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGNhbGVuZGFyPjwvY2FsZW5kYXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIHRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCIgIHYtaWY9XCJzZWxlY3RlZEJvb2tpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDEwIFNlYXRzLCBUViA6IEhETUlcbiAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzZWxlY3RlZEJvb2tpbmcuc3ViamVjdCB9fTxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3sgZm9ybWF0VGltZShzZWxlY3RlZEJvb2tpbmcuc3RhcnRfZGF0ZSkgfX0gLSB7eyBmb3JtYXRUaW1lKHNlbGVjdGVkQm9va2luZy5lbmRfZGF0ZSkgfX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxib29raW5nLWF0dGVuZGVlcyA6Ym9va2luZz1cInNlbGVjdGVkQm9va2luZ1wiPjwvYm9va2luZy1hdHRlbmRlZXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48YnI+PGJyPjxicj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjdXJyZW50Qm9va2luZyA9PSBzZWxlY3RlZEJvb2tpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiZW5kQm9va2luZ1wiPkVuZCBCb29raW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb29tLWZvb3RlclwiIDpjbGFzcz1cInsgYm9va2VkIDogY3VycmVudEJvb2tpbmcgLCBmcmVlIDogIWN1cnJlbnRCb29raW5nfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIExlZnQgc2lkZSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjaGVja2luZ0ludG9Cb29raW5nICYmICFjaGVja2luZ0ludG9Cb29raW5nLmNoZWNrZWRfaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImNoZWNrSW4oKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgSW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFJpZ2h0IHNpZGUgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhY3VycmVudEJvb2tpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9vay1yb29tLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Cb29rPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImJvb2tSb29tKDE1KVwiPjE1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImJvb2tSb29tKDMwKVwiPjMwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImJvb2tSb29tKDQ1KVwiPjQ1PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImJvb2tSb29tKDYwKVwiPjYwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGV2ZWwtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbmQgQW5vdGhlciBzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vY29tcG9uZW50cy9DYWxlbmRhci52dWUnO1xuICAgIGltcG9ydCBCb29raW5nQXR0ZW5kZWVzIGZyb20gJy4vY29tcG9uZW50cy9Cb29raW5nQXR0ZW5kZWVzLnZ1ZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHMgOiB7XG4gICAgICAgICAgICBDYWxlbmRhcixcbiAgICAgICAgICAgIEJvb2tpbmdBdHRlbmRlZXMsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncm9vbXMvc2hvdycsIHRoaXMuJHJvdXRlLnBhcmFtcy5yb29tKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWVTY3JvbGxJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncm9vbXMvZXZlbnRzL2dldCcsIHRoaXMuJHJvdXRlLnBhcmFtcy5yb29tKVxuICAgICAgICAgICAgfSwgKCg1ICogNjApICogMTAwMCkpO1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ3Jvb21zL2V2ZW50cy9nZXQnLCB0aGlzLiRyb3V0ZS5wYXJhbXMucm9vbSlcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kcyA6IHtcbiAgICAgICAgICAgIGJvb2tSb29tKG1pbnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncm9vbXMvZXZlbnRzL2NyZWF0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA6IG1pbnV0ZXMsXG4gICAgICAgICAgICAgICAgICAgIHJvb20gOiB0aGlzLiRyb3V0ZS5wYXJhbXMucm9vbSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNrSW4oKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja2luZ0ludG9Cb29raW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib29raW5nID0gdGhpcy5jaGVja2luZ0ludG9Cb29raW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgncm9vbXMvZXZlbnRzL3VwZGF0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50IDogYm9va2luZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA6IGJvb2tpbmcuZW5kX2RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICByb29tIDogdGhpcy4kcm91dGUucGFyYW1zLnJvb20sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA6IHRoaXMubm93KCkgPCB0aGlzLnBhcnNlRGF0ZShib29raW5nLnN0YXJ0X2RhdGUpID8gdGhpcy5ub3coKSA6IGJvb2tpbmcuc3RhcnRfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRfaW4gOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmRCb29raW5nKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdyb29tcy9ldmVudHMvdXBkYXRlJywge1xuICAgICAgICAgICAgICAgICAgICBlbmQgOiB0aGlzLm5vdygpLFxuICAgICAgICAgICAgICAgICAgICByb29tIDogdGhpcy4kcm91dGUucGFyYW1zLnJvb20sXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50IDogdGhpcy5jdXJyZW50Qm9va2luZy5pZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgOiB0aGlzLmN1cnJlbnRCb29raW5nLnN0YXJ0X2RhdGUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICByb29tKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5yb29tcy5yb29tO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoZWNraW5nSW50b0Jvb2tpbmcoKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50Qm9va2luZyB8fCB0aGlzLm5leHRCb29raW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRCb29raW5nID8gdGhpcy5jdXJyZW50Qm9va2luZyA6IHRoaXMubmV4dEJvb2tpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1cnJlbnREYXRlKCkge1xuICAgICAgICAgICAgICByZXR1cm4gbW9tZW50KCkuZm9ybWF0KCdsbCcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRCb29raW5nKCkge1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEJvb2tpbmcgPSB0aGlzLiRzdG9yZS5zdGF0ZS5yb29tcy5ldmVudHMuZXZlbnQ7XG4gICAgICAgICAgICAgICAgaWYoIXNlbGVjdGVkQm9va2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0Qm9va2luZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRCb29raW5nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9va2luZ3MoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnJvb21zLmV2ZW50cy5ldmVudHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3VycmVudEJvb2tpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLmJvb2tpbmdzLCAoYm9va2luZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURhdGUoYm9va2luZy5zdGFydF9kYXRlKS5pc0JlZm9yZSh0aGlzLm5vdygpKSAmJiB0aGlzLnBhcnNlRGF0ZShib29raW5nLmVuZF9kYXRlKS5pc0FmdGVyKHRoaXMubm93KCkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmV4dEJvb2tpbmcoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uZmluZCh0aGlzLmJvb2tpbmdzLCAoYm9va2luZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZURhdGUoYm9va2luZy5zdGFydF9kYXRlKS5pc0FmdGVyKHRoaXMubm93KCkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUm9vbS52dWU/MDdhM2FjYTYiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwiYm9va2luZyAmJiBzaG91bGREaXNwbGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib29raW5nXCIgOnN0eWxlPVwiZ2V0VGltZUhlaWdodFN0eWxlKGJvb2tpbmcuc3RhcnRfZGF0ZSwgYm9va2luZy5lbmRfZGF0ZSlcIiBAY2xpY2s9XCJzZWxlY3RCb29raW5nXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt7IGZvcm1hdFRpbWUoYm9va2luZy5zdGFydF9kYXRlKSB9fSAtIHt7IGZvcm1hdFRpbWUoYm9va2luZy5lbmRfZGF0ZSkgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwic2hvdWxkRGlzcGxheVN1YmplY3RcIj5cbiAgICAgICAgICAgICAgICB7eyBib29raW5nLnN1YmplY3QgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgIHByb3BzIDogWydib29raW5nJ10sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNlbGVjdEJvb2tpbmcoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdyb29tcy9ldmVudHMvc2V0JywgdGhpcy5ib29raW5nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgdGltZURpZmZlcmVuY2UoKSB7XG4gICAgICAgICAgICAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKHRoaXMucGFyc2VEYXRlKHRoaXMuYm9va2luZy5lbmRfZGF0ZSkuZGlmZih0aGlzLnBhcnNlRGF0ZSh0aGlzLmJvb2tpbmcuc3RhcnRfZGF0ZSkpKS5hc01pbnV0ZXMoKVxuICAgICAgICAgICB9LFxuICAgICAgICAgICBzaG91bGREaXNwbGF5KCkge1xuICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZURpZmZlcmVuY2UgPj0gMTU7XG5cbiAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3VsZERpc3BsYXlTdWJqZWN0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbWVEaWZmZXJlbmNlID49IDMwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBCb29raW5nLnZ1ZT8wOWE5YmMwMCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJib29raW5nXCIgY2xhc3M9XCJhdHRlbmRlZXNcIj5cbiAgICAgICAgPGgzPkF0dGVuZGVlczwvaDM+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImF0dGVuZGVlIGluIGJvb2tpbmcuYXR0ZW5kZWVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0ZW5kZWVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImF0dGVuZGVlLXN0YXR1c1wiIDpjbGFzcz1cImF0dGVuZGVlLnN0YXR1c1wiPnt7IGF0dGVuZGVlLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgIHByb3BzIDogWydib29raW5nJ11cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQm9va2luZ0F0dGVuZGVlcy52dWU/ZjVkZTk2YjYiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyXCIgcmVmPVwiY2FsZW5kYXJcIiBAc2Nyb2xsPVwic2V0U2Nyb2xsVGltZW91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG91ci1jb250YWluZXJcIiB2LWZvcj1cImhvdXIgaW4gaG91cnNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VyXCI+e3sgaG91ci5kaXNwbGF5IH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJib29raW5nIGluIGJvb2tpbmdzXCI+XG4gICAgICAgICAgICA8Ym9va2luZyA6Ym9va2luZz1cImJvb2tpbmdcIj48L2Jvb2tpbmc+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIDpzdHlsZT1cImN1cnJlbnRUaW1lU3R5bGVcIiBjbGFzcz1cImN1cnJlbnQtdGltZS1jb250YWluZXJcIiByZWY9XCJjdXJyZW50LXRpbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1cnJlbnQtdGltZVwiPnt7IGN1cnJlbnRUaW1lIH19PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBCb29raW5nIGZyb20gJy4vLi4vY29tcG9uZW50cy9Cb29raW5nLnZ1ZSc7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgQm9va2luZ1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgbGV0IGhvdXIgPSAwO1xuICAgICAgICAgICAgd2hpbGUoaG91ciA8IDI0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3Vycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknIDogbW9tZW50KGhvdXIsICdIJykuZm9ybWF0KCdoIEEnKSxcbiAgICAgICAgICAgICAgICAgICAgJ2V2ZW50cycgOiBbXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGhvdXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEN1cnJlbnRUaW1lU3R5bGVzKCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudFRpbWVTdHlsZXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgdGhpcy5zY3JvbGxUb0N1cnJlbnRUaW1lKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhvdXJzIDogW10sXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWUgOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lU3R5bGUgOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUaW1lU2Nyb2xsSW50ZXJ2YWwgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHMgOiB7XG4gICAgICAgICAgICBzZXRTY3JvbGxUaW1lb3V0KCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmN1cnJlbnRUaW1lU2Nyb2xsSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWVTY3JvbGxJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0N1cnJlbnRUaW1lKCk7XG4gICAgICAgICAgICAgICAgfSwgKDE1ICogMTAwMCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldE9mZnNldChlbCkge1xuICAgICAgICAgICAgICAgIGxldCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsIGxlZnQ6IHJlY3QubGVmdCArIHNjcm9sbExlZnQgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNjcm9sbFRvQ3VycmVudFRpbWUoKSB7XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS1yb3V0ZXIvaXNzdWVzLzE3M1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBhbmltYXRlIGl0XG4gICAgICAgICAgICAgICAgbGV0IGNhbGVuZGFyID0gdGhpcy4kcmVmcy5jYWxlbmRhclxuICAgICAgICAgICAgICAgIGNhbGVuZGFyLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGNhbGVuZGFyT2Zmc2V0cyA9IHRoaXMuZ2V0T2Zmc2V0KGNhbGVuZGFyKVxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGltZU9mZnNldHMgPSB0aGlzLmdldE9mZnNldCh0aGlzLiRyZWZzWydjdXJyZW50LXRpbWUtY29udGFpbmVyJ10pO1xuICAgICAgICAgICAgICAgIGNhbGVuZGFyLnNjcm9sbFRvcCA9IChjdXJyZW50VGltZU9mZnNldHMudG9wIC0gY2FsZW5kYXJPZmZzZXRzLnRvcCkgLSAxMjU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0Q3VycmVudFRpbWVTdHlsZXMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vdyA9IHRoaXMubm93KCk7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0RU0gPSAoKCgobm93LmZvcm1hdCgnSEgnKSAqIDYwKSArIHBhcnNlSW50KG5vdy5mb3JtYXQoJ21tJykpKSkgKiA2KSAvIDYwO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBub3cuZm9ybWF0KCdoOm1tIEEnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lU3R5bGUgPSAgYHRvcDoke3N0YXJ0RU0gfWVtO2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkIDoge1xuICAgICAgICAgICAgYm9va2luZ3MoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnJvb21zLmV2ZW50cy5ldmVudHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENhbGVuZGFyLnZ1ZT9hMWZiNjUxOCIsIjx0ZW1wbGF0ZT5cbiAgICA8YSBjbGFzcz1cImJ0biBidG4tc21hbGwgY2xpcGJvYXJkXCIgOmRhdGEtY2xpcGJvYXJkLXRleHQ9XCJkYXRhXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jbGlwYm9hcmRcIj48L3NwYW4+XG4gICAgPC9hPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCAoKSB7XG4gICAgICAgICAgICBuZXcgQ2xpcGJvYXJkKCcuY2xpcGJvYXJkJywge1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENsaXBib2FyZC52dWU/NWIyYTNhMjMiLCI8dGVtcGxhdGU+XG4gICAgPGhlYWRlcj5cbiAgICAgICAgPG5vdGlmaWNhdGlvbnM+PC9ub3RpZmljYXRpb25zPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIj5cbiAgICAgICAgICAgICAgICBTcGFjZSBQYWRcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzZWN0aW9uIHYtaWY9XCJjdXJyZW50X3ZlcnNpb24gIT09ICB2ZXJzaW9uXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEhlbGxvLCBXZSd2ZSBnb3QgYSBuZXcgdmVyc2lvbiBvZiBTcGFjZVBhZCByZWFkeSBmb3IgeW91LiA8YSBocmVmPVwiXCI+UmVmcmVzaCBub3c8L2E+IHRvIG1ha2UgaXQgeW91cnMuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvaGVhZGVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuICAgIGltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gJy4vTm90aWZpY2F0aW9ucy52dWUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRfdmVyc2lvbjogTGFyYXZlbC52ZXJzaW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkIDoge1xuICAgICAgICAgICAgdmVyc2lvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnN5c3RlbS52ZXJzaW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTmF2aWdhdGlvbi52dWU/MTY2MGE0NDQiLCI8dGVtcGxhdGU+XG4gICAgPHRyYW5zaXRpb24gbmFtZT1cImZhZGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvblwiIDpjbGFzcz1cIm5vdGlmaWNhdGlvbi5jbGFzc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjbG9zZShub3RpZmljYXRpb24pXCIgY2xhc3M9XCJub3RpZmljYXRpb24tY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwibm90aWZpY2F0aW9uLWhlYWRpbmdcIiB2LWlmPVwibm90aWZpY2F0aW9uLnRpdGxlXCI+e3tub3RpZmljYXRpb24udGl0bGV9fTwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uLXRleHRcIiB2LWh0bWw9XCJub3RpZmljYXRpb24udGV4dFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiBbJ25vdGlmaWNhdGlvbiddLFxuICAgICAgICBkYXRhICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGltZXI6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZCAoKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5ub3RpZmljYXRpb24uaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSA/IHRoaXMubm90aWZpY2F0aW9uLnRpbWVvdXQgOiB0cnVlXG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSh0aGlzLm5vdGlmaWNhdGlvbilcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMubm90aWZpY2F0aW9uLnRpbWVvdXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ25vdGlmaWNhdGlvbnMvcmVtb3ZlJywgbm90aWZpY2F0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTm90aWZpY2F0aW9uLnZ1ZT9mZDAxYjE0OCIsIjx0ZW1wbGF0ZSBpZD1cIm5vdGlmaWNhdGlvbnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uc1wiPlxuICAgICAgICA8bm90aWZpY2F0aW9uXG4gICAgICAgICAgICB2LWZvcj1cIihub3RpZmljYXRpb24sIGluZGV4KSBpbiBub3RpZmljYXRpb25zXCJcbiAgICAgICAgICAgIDpub3RpZmljYXRpb249XCJub3RpZmljYXRpb25cIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgPlxuICAgICAgICA8L25vdGlmaWNhdGlvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbi52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIE5vdGlmaWNhdGlvblxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9ucyAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLm5vdGlmaWNhdGlvbnMubm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICByZW1vdmVOb3RpZmljYXRpb246IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnbm90aWZpY2F0aW9ucy9yZW1vdmUnLCBub3RpZmljYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBOb3RpZmljYXRpb25zLnZ1ZT9mN2M1MmY2NiIsIjx0ZW1wbGF0ZT5cbiAgICA8c3Bhbj4ge3sgdGV4dCB9fSA8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHRpbWU6IHt9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQgKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50VGltZSgpXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgfSwgNjAwMDApXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGEgKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGltZTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgdGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFRpbWUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGRhdGUgKCkge1xuICAgICAgICAgICAgICAgIFZ1ZS5zZXQodGhpcy5jdXJyZW50VGltZSwgdGhpcy5jdXJyZW50VGltZS5hZGQoLTEsICdtaW51dGUnKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRDdXJyZW50VGltZSAoKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IHRoaXMudGltZVxuXG4gICAgICAgICAgICAgICAgaWYoIW1vbWVudC5pc01vbWVudCh0aW1lKSkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5wYXJzZURhdGUodGltZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGltZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgdGV4dCAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mcm9tTm93KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCd1dGUnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdhZ28nLCAnJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUaW1lQWdvLnZ1ZT8zNjEwYWQyOSIsIjx0ZW1wbGF0ZT5cbiAgICA8c3BhblxuICAgICAgICA6Y2xhc3M9XCJbXG4gICAgICAgICdoaW50LS0nK3R5cGUsXG4gICAgICAgICdoaW50LS0nK3NpemUsXG4gICAgICAgICdoaW50LS0nK3BsYWNlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgICAgJ2hpbnQtLXJvdW5kZWQnOiB0aGlzLnJvdW5kZWQsXG4gICAgICAgICAgICAnaGludC0tYWx3YXlzJzogdGhpcy5hbHdheXMsXG4gICAgICAgICAgICAnaGludC0tbm8tYW5pbWF0ZSc6IHRoaXMubm9BbmltYXRlXG4gICAgICAgIH1dXCJcbiAgICAgICAgOmFyaWEtbGFiZWw9XCJtZXNzYWdlXCJcbiAgICA+XG4gICAgICAgIHt7IHR5cGUgfX1cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgc2l6ZTogU3RyaW5nLFxuICAgICAgICAgICAgYWx3YXlzOiBCb29sZWFuLFxuICAgICAgICAgICAgcm91bmRlZDogQm9vbGVhbixcbiAgICAgICAgICAgIG5vQW5pbWF0ZTogQm9vbGVhbixcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ3RvcCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFRvb2xUaXAudnVlPzIwZGM4NjE3IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIHRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmJvb2tpbmdcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF0dGVuZGVlc1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJBdHRlbmRlZXNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0uYm9va2luZy5hdHRlbmRlZXMsIGZ1bmN0aW9uKGF0dGVuZGVlKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF0dGVuZGVlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImF0dGVuZGVlLXN0YXR1c1wiLCBjbGFzczogYXR0ZW5kZWUuc3RhdHVzIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhhdHRlbmRlZS5uYW1lKSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wMmY4YmRhOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDJmOGJkYThcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMDJmOGJkYThcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0ucm9vbVxuICAgID8gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJyb29tXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwicm9vbS1jb250ZW50XCIgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIm5hdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb29tLWhlYWRlciBsZXZlbFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBib29rZWQ6IF92bS5jdXJyZW50Qm9va2luZywgZnJlZTogIV92bS5jdXJyZW50Qm9va2luZyB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucm9vbS5uYW1lKSldKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50RGF0ZSkpXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIHJvb20tZGV0YWlsc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBjYWxlbmRhci13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYm9va2luZy1zdGF0dXNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudEJvb2tpbmdcbiAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoMVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCb29rZWQgdW50aWwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWUoX3ZtLmN1cnJlbnRCb29raW5nLmVuZF9kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLm5leHRCb29raW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCb29rZWQgaW4gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5odW1hbml6ZURpZmYoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub3coKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhcnNlRGF0ZShfdm0ubmV4dEJvb2tpbmcuc3RhcnRfZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogW19jKFwiaDFcIiwgW192bS5fdihcIkZyZWVcIildKV1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiY2FsZW5kYXJcIilcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiB0YWJzXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRCb29raW5nXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgMTAgU2VhdHMsIFRWIDogSERNSVxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zZWxlY3RlZEJvb2tpbmcuc3ViamVjdClcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWUoX3ZtLnNlbGVjdGVkQm9va2luZy5zdGFydF9kYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXRUaW1lKF92bS5zZWxlY3RlZEJvb2tpbmcuZW5kX2RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJvb2tpbmctYXR0ZW5kZWVzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGJvb2tpbmc6IF92bS5zZWxlY3RlZEJvb2tpbmcgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50Qm9va2luZyA9PSBfdm0uc2VsZWN0ZWRCb29raW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmVuZEJvb2tpbmcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbmQgQm9va2luZ1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvb20tZm9vdGVyXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IGJvb2tlZDogX3ZtLmN1cnJlbnRCb29raW5nLCBmcmVlOiAhX3ZtLmN1cnJlbnRCb29raW5nIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hlY2tpbmdJbnRvQm9va2luZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uY2hlY2tpbmdJbnRvQm9va2luZy5jaGVja2VkX2luXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGVja0luKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgSW5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxldmVsLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgIV92bS5jdXJyZW50Qm9va2luZ1xuICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvb2stcm9vbS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJCb29rXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYm9va1Jvb20oMTUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIjE1XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYm9va1Jvb20oMzApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIjMwXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYm9va1Jvb20oNDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIjQ1XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYm9va1Jvb20oNjApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIjYwXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgRmluZCBBbm90aGVyIHNwYWNlXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMDRmMTA0ZmNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTA0ZjEwNGZjXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9Sb29tLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wNGYxMDRmY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vUm9vbS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImhlYWRlclwiLFxuICAgIFtcbiAgICAgIF9jKFwibm90aWZpY2F0aW9uc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsb2dvLWNvbnRhaW5lclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IFwiL1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgU3BhY2UgUGFkXFxuICAgICAgICBcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5jdXJyZW50X3ZlcnNpb24gIT09IF92bS52ZXJzaW9uXG4gICAgICAgID8gX2MoXCJzZWN0aW9uXCIsIFtfdm0uX20oMCldKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJcXG4gICAgICAgICAgICBIZWxsbywgV2UndmUgZ290IGEgbmV3IHZlcnNpb24gb2YgU3BhY2VQYWQgcmVhZHkgZm9yIHlvdS4gXCJcbiAgICAgICksXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIlwiIH0gfSwgW192bS5fdihcIlJlZnJlc2ggbm93XCIpXSksXG4gICAgICBfdm0uX3YoXCIgdG8gbWFrZSBpdCB5b3Vycy5cXG4gICAgICAgIFwiKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xMThmYjc4OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTE4ZmI3ODhcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2aWdhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMTE4ZmI3ODhcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2aWdhdGlvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNwYW5cIixcbiAgICB7XG4gICAgICBjbGFzczogW1xuICAgICAgICBcImhpbnQtLVwiICsgX3ZtLnR5cGUsXG4gICAgICAgIFwiaGludC0tXCIgKyBfdm0uc2l6ZSxcbiAgICAgICAgXCJoaW50LS1cIiArIF92bS5wbGFjZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBcImhpbnQtLXJvdW5kZWRcIjogdGhpcy5yb3VuZGVkLFxuICAgICAgICAgIFwiaGludC0tYWx3YXlzXCI6IHRoaXMuYWx3YXlzLFxuICAgICAgICAgIFwiaGludC0tbm8tYW5pbWF0ZVwiOiB0aGlzLm5vQW5pbWF0ZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IF92bS5tZXNzYWdlIH1cbiAgICB9LFxuICAgIFtfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnR5cGUpICsgXCJcXG4gICAgXCIpLCBfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTEyNjBjOTlmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xMjYwYzk5ZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub29sVGlwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0xMjYwYzk5ZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub29sVGlwLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgcmVmOiBcImNhbGVuZGFyXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJjYWxlbmRhclwiLFxuICAgICAgb246IHsgc2Nyb2xsOiBfdm0uc2V0U2Nyb2xsVGltZW91dCB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uX2woX3ZtLmhvdXJzLCBmdW5jdGlvbihob3VyKSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhvdXItY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaG91clwiIH0sIFtfdm0uX3YoX3ZtLl9zKGhvdXIuZGlzcGxheSkpXSlcbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uYm9va2luZ3MsIGZ1bmN0aW9uKGJvb2tpbmcpIHtcbiAgICAgICAgcmV0dXJuIFtfYyhcImJvb2tpbmdcIiwgeyBhdHRyczogeyBib29raW5nOiBib29raW5nIH0gfSldXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiY3VycmVudC10aW1lLWNvbnRhaW5lclwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1cnJlbnQtdGltZS1jb250YWluZXJcIixcbiAgICAgICAgICBzdHlsZTogX3ZtLmN1cnJlbnRUaW1lU3R5bGVcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImN1cnJlbnQtdGltZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmN1cnJlbnRUaW1lKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTFkMDM3MzQ2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xZDAzNzM0NlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9DYWxlbmRhci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMWQwMzczNDZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQ2FsZW5kYXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJBdmFpbGFibGUgUm9vbXNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnJvb21zLCBmdW5jdGlvbihyb29tKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5jcmVhdGVSb29tKHJvb20pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKHJvb20ubmFtZSkgKyBcIlxcbiAgICAgICAgXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtM2NhYjQwMjVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNjYWI0MDI1XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUm9vbXMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTNjYWI0MDI1XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUm9vbXMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJmYWRlXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb25cIiwgY2xhc3M6IF92bS5ub3RpZmljYXRpb24uY2xhc3MgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24tY2xvc2VcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmNsb3NlKF92bS5ub3RpZmljYXRpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubm90aWZpY2F0aW9uLnRpdGxlXG4gICAgICAgID8gX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbi1oZWFkaW5nXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubm90aWZpY2F0aW9uLnRpdGxlKSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uLXRleHRcIixcbiAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLm5vdGlmaWNhdGlvbi50ZXh0KSB9XG4gICAgICB9KVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00NDc1MmJkZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDQ3NTJiZGZcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00NDc1MmJkZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmJvb2tpbmcgJiYgX3ZtLnNob3VsZERpc3BsYXlcbiAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib29raW5nXCIsXG4gICAgICAgICAgICBzdHlsZTogX3ZtLmdldFRpbWVIZWlnaHRTdHlsZShcbiAgICAgICAgICAgICAgX3ZtLmJvb2tpbmcuc3RhcnRfZGF0ZSxcbiAgICAgICAgICAgICAgX3ZtLmJvb2tpbmcuZW5kX2RhdGVcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNlbGVjdEJvb2tpbmcgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm1hdFRpbWUoX3ZtLmJvb2tpbmcuc3RhcnRfZGF0ZSkpICtcbiAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtYXRUaW1lKF92bS5ib29raW5nLmVuZF9kYXRlKSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5zaG91bGREaXNwbGF5U3ViamVjdFxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ib29raW5nLnN1YmplY3QpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ3M2UwNDAxXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NzNlMDQwMVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00NzNlMDQwMVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3Jvb20vY29tcG9uZW50cy9Cb29raW5nLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc21hbGwgY2xpcGJvYXJkXCIsXG4gICAgICBhdHRyczogeyBcImRhdGEtY2xpcGJvYXJkLXRleHRcIjogX3ZtLmRhdGEgfVxuICAgIH0sXG4gICAgW19jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24tY2xpcGJvYXJkXCIgfSldXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTQ3YzlhNGQyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00N2M5YTRkMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9DbGlwYm9hcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTQ3YzlhNGQyXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibm90aWZpY2F0aW9uc1wiIH0sXG4gICAgX3ZtLl9sKF92bS5ub3RpZmljYXRpb25zLCBmdW5jdGlvbihub3RpZmljYXRpb24sIGluZGV4KSB7XG4gICAgICByZXR1cm4gX2MoXCJub3RpZmljYXRpb25cIiwge1xuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICBhdHRyczogeyBub3RpZmljYXRpb246IG5vdGlmaWNhdGlvbiB9XG4gICAgICB9KVxuICAgIH0pXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTRkZGJmMTI0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00ZGRiZjEyNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00ZGRiZjEyNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtfYyhcIm5hdmlnYXRpb25cIiksIF92bS5fdihcIiBcIiksIF9jKFwicm91dGVyLXZpZXdcIildLCAxKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTgyZWQ3NTlcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU4MmVkNzU5XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcFNwYWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi01ODJlZDc1OVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9BcHBTcGFjZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgW192bS5fdihcIiBcIiArIF92bS5fcyhfdm0udGV4dCkgKyBcIiBcIildKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNjg2OGRjMzhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTY4NjhkYzM4XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTY4NjhkYzM4XCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RpbWVBZ28udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgTGV0cyBjb25uZWN0IHlvdXIgZmlyc3QgcHJvdmlkZXJcXG5cXG4gICAgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvcHJvdmlkZXIvb2ZmaWNlMzY1L2xpbmtcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiT2ZmaWNlIDM2NVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvcHJvdmlkZXIvZ3N1aXRlL2xpbmtcIiB9IH0sIFtfdm0uX3YoXCJHU3VpdGVcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJDb25uZWN0ZWQgQWNjb3VudHNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnByb3ZpZGVycywgZnVuY3Rpb24ocHJvdmlkZXIpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwcm92aWRlcl9yb29tc1wiLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IHByb3ZpZGVyOiBwcm92aWRlci5pZCB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MocHJvdmlkZXIuZW1haWwpICtcbiAgICAgICAgICAgICAgICAgIFwiIFtcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MocHJvdmlkZXIucHJvdmlkZXIpICtcbiAgICAgICAgICAgICAgICAgIFwiXVxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiUm9vbXNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnJvb21zLCBmdW5jdGlvbihyb29tKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcInJvb21cIiwgcGFyYW1zOiB7IHJvb206IHJvb20uaWQgfSB9IH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKHJvb20ubmFtZSkgKyBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOGMwMWUxN2VcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LThjMDFlMTdlXCIsXCJoYXNTY29wZWRcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvRGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi04YzAxZTE3ZVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL0Rhc2hib2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX3ZtLl92KFwiXFxuICAgIFNvcnJ5IHlvdSBtdXN0IGhhdmUgdGhlIHdyb25nIHVybFxcblwiKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi05MjZiM2NkY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOTI2YjNjZGNcIixcImhhc1Njb3BlZFwiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFnZU5vdEZvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi05MjZiM2NkY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qKlxuICAqIHZ1ZS1yb3V0ZXIgdjIuNy4wXG4gICogKGMpIDIwMTcgRXZhbiBZb3VcbiAgKiBAbGljZW5zZSBNSVRcbiAgKi9cbid1c2Ugc3RyaWN0JztcblxuLyogICovXG5cbmZ1bmN0aW9uIGFzc2VydCAoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKChcIlt2dWUtcm91dGVyXSBcIiArIG1lc3NhZ2UpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm4gKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZGl0aW9uKSB7XG4gICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUud2FybigoXCJbdnVlLXJvdXRlcl0gXCIgKyBtZXNzYWdlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFcnJvciAoZXJyKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXJyKS5pbmRleE9mKCdFcnJvcicpID4gLTFcbn1cblxudmFyIFZpZXcgPSB7XG4gIG5hbWU6ICdyb3V0ZXItdmlldycsXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoXywgcmVmKSB7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcbiAgICB2YXIgcGFyZW50ID0gcmVmLnBhcmVudDtcbiAgICB2YXIgZGF0YSA9IHJlZi5kYXRhO1xuXG4gICAgZGF0YS5yb3V0ZXJWaWV3ID0gdHJ1ZTtcblxuICAgIC8vIGRpcmVjdGx5IHVzZSBwYXJlbnQgY29udGV4dCdzIGNyZWF0ZUVsZW1lbnQoKSBmdW5jdGlvblxuICAgIC8vIHNvIHRoYXQgY29tcG9uZW50cyByZW5kZXJlZCBieSByb3V0ZXItdmlldyBjYW4gcmVzb2x2ZSBuYW1lZCBzbG90c1xuICAgIHZhciBoID0gcGFyZW50LiRjcmVhdGVFbGVtZW50O1xuICAgIHZhciBuYW1lID0gcHJvcHMubmFtZTtcbiAgICB2YXIgcm91dGUgPSBwYXJlbnQuJHJvdXRlO1xuICAgIHZhciBjYWNoZSA9IHBhcmVudC5fcm91dGVyVmlld0NhY2hlIHx8IChwYXJlbnQuX3JvdXRlclZpZXdDYWNoZSA9IHt9KTtcblxuICAgIC8vIGRldGVybWluZSBjdXJyZW50IHZpZXcgZGVwdGgsIGFsc28gY2hlY2sgdG8gc2VlIGlmIHRoZSB0cmVlXG4gICAgLy8gaGFzIGJlZW4gdG9nZ2xlZCBpbmFjdGl2ZSBidXQga2VwdC1hbGl2ZS5cbiAgICB2YXIgZGVwdGggPSAwO1xuICAgIHZhciBpbmFjdGl2ZSA9IGZhbHNlO1xuICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50Ll9yb3V0ZXJSb290ICE9PSBwYXJlbnQpIHtcbiAgICAgIGlmIChwYXJlbnQuJHZub2RlICYmIHBhcmVudC4kdm5vZGUuZGF0YS5yb3V0ZXJWaWV3KSB7XG4gICAgICAgIGRlcHRoKys7XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50Ll9pbmFjdGl2ZSkge1xuICAgICAgICBpbmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICB9XG4gICAgZGF0YS5yb3V0ZXJWaWV3RGVwdGggPSBkZXB0aDtcblxuICAgIC8vIHJlbmRlciBwcmV2aW91cyB2aWV3IGlmIHRoZSB0cmVlIGlzIGluYWN0aXZlIGFuZCBrZXB0LWFsaXZlXG4gICAgaWYgKGluYWN0aXZlKSB7XG4gICAgICByZXR1cm4gaChjYWNoZVtuYW1lXSwgZGF0YSwgY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWQgPSByb3V0ZS5tYXRjaGVkW2RlcHRoXTtcbiAgICAvLyByZW5kZXIgZW1wdHkgbm9kZSBpZiBubyBtYXRjaGVkIHJvdXRlXG4gICAgaWYgKCFtYXRjaGVkKSB7XG4gICAgICBjYWNoZVtuYW1lXSA9IG51bGw7XG4gICAgICByZXR1cm4gaCgpXG4gICAgfVxuXG4gICAgdmFyIGNvbXBvbmVudCA9IGNhY2hlW25hbWVdID0gbWF0Y2hlZC5jb21wb25lbnRzW25hbWVdO1xuXG4gICAgLy8gYXR0YWNoIGluc3RhbmNlIHJlZ2lzdHJhdGlvbiBob29rXG4gICAgLy8gdGhpcyB3aWxsIGJlIGNhbGxlZCBpbiB0aGUgaW5zdGFuY2UncyBpbmplY3RlZCBsaWZlY3ljbGUgaG9va3NcbiAgICBkYXRhLnJlZ2lzdGVyUm91dGVJbnN0YW5jZSA9IGZ1bmN0aW9uICh2bSwgdmFsKSB7XG4gICAgICAvLyB2YWwgY291bGQgYmUgdW5kZWZpbmVkIGZvciB1bnJlZ2lzdHJhdGlvblxuICAgICAgdmFyIGN1cnJlbnQgPSBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXTtcbiAgICAgIGlmIChcbiAgICAgICAgKHZhbCAmJiBjdXJyZW50ICE9PSB2bSkgfHxcbiAgICAgICAgKCF2YWwgJiYgY3VycmVudCA9PT0gdm0pXG4gICAgICApIHtcbiAgICAgICAgbWF0Y2hlZC5pbnN0YW5jZXNbbmFtZV0gPSB2YWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWxzbyByZWdpc2V0ZXIgaW5zdGFuY2UgaW4gcHJlcGF0Y2ggaG9va1xuICAgIC8vIGluIGNhc2UgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlIGlzIHJldXNlZCBhY3Jvc3MgZGlmZmVyZW50IHJvdXRlc1xuICAgIDsoZGF0YS5ob29rIHx8IChkYXRhLmhvb2sgPSB7fSkpLnByZXBhdGNoID0gZnVuY3Rpb24gKF8sIHZub2RlKSB7XG4gICAgICBtYXRjaGVkLmluc3RhbmNlc1tuYW1lXSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIH07XG5cbiAgICAvLyByZXNvbHZlIHByb3BzXG4gICAgZGF0YS5wcm9wcyA9IHJlc29sdmVQcm9wcyhyb3V0ZSwgbWF0Y2hlZC5wcm9wcyAmJiBtYXRjaGVkLnByb3BzW25hbWVdKTtcblxuICAgIHJldHVybiBoKGNvbXBvbmVudCwgZGF0YSwgY2hpbGRyZW4pXG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlc29sdmVQcm9wcyAocm91dGUsIGNvbmZpZykge1xuICBzd2l0Y2ggKHR5cGVvZiBjb25maWcpIHtcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHJldHVybiBjb25maWdcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICByZXR1cm4gY29uZmlnKHJvdXRlKVxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIGNvbmZpZyA/IHJvdXRlLnBhcmFtcyA6IHVuZGVmaW5lZFxuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgIFwicHJvcHMgaW4gXFxcIlwiICsgKHJvdXRlLnBhdGgpICsgXCJcXFwiIGlzIGEgXCIgKyAodHlwZW9mIGNvbmZpZykgKyBcIiwgXCIgK1xuICAgICAgICAgIFwiZXhwZWN0aW5nIGFuIG9iamVjdCwgZnVuY3Rpb24gb3IgYm9vbGVhbi5cIlxuICAgICAgICApO1xuICAgICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgZW5jb2RlUmVzZXJ2ZVJFID0gL1shJygpKl0vZztcbnZhciBlbmNvZGVSZXNlcnZlUmVwbGFjZXIgPSBmdW5jdGlvbiAoYykgeyByZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTsgfTtcbnZhciBjb21tYVJFID0gLyUyQy9nO1xuXG4vLyBmaXhlZCBlbmNvZGVVUklDb21wb25lbnQgd2hpY2ggaXMgbW9yZSBjb25mb3JtYW50IHRvIFJGQzM5ODY6XG4vLyAtIGVzY2FwZXMgWyEnKCkqXVxuLy8gLSBwcmVzZXJ2ZSBjb21tYXNcbnZhciBlbmNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAucmVwbGFjZShlbmNvZGVSZXNlcnZlUkUsIGVuY29kZVJlc2VydmVSZXBsYWNlcilcbiAgLnJlcGxhY2UoY29tbWFSRSwgJywnKTsgfTtcblxudmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudDtcblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXJ5IChcbiAgcXVlcnksXG4gIGV4dHJhUXVlcnksXG4gIF9wYXJzZVF1ZXJ5XG4pIHtcbiAgaWYgKCBleHRyYVF1ZXJ5ID09PSB2b2lkIDAgKSBleHRyYVF1ZXJ5ID0ge307XG5cbiAgdmFyIHBhcnNlID0gX3BhcnNlUXVlcnkgfHwgcGFyc2VRdWVyeTtcbiAgdmFyIHBhcnNlZFF1ZXJ5O1xuICB0cnkge1xuICAgIHBhcnNlZFF1ZXJ5ID0gcGFyc2UocXVlcnkgfHwgJycpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKGZhbHNlLCBlLm1lc3NhZ2UpO1xuICAgIHBhcnNlZFF1ZXJ5ID0ge307XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIGV4dHJhUXVlcnkpIHtcbiAgICB2YXIgdmFsID0gZXh0cmFRdWVyeVtrZXldO1xuICAgIHBhcnNlZFF1ZXJ5W2tleV0gPSBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwuc2xpY2UoKSA6IHZhbDtcbiAgfVxuICByZXR1cm4gcGFyc2VkUXVlcnlcbn1cblxuZnVuY3Rpb24gcGFyc2VRdWVyeSAocXVlcnkpIHtcbiAgdmFyIHJlcyA9IHt9O1xuXG4gIHF1ZXJ5ID0gcXVlcnkudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJyk7XG5cbiAgaWYgKCFxdWVyeSkge1xuICAgIHJldHVybiByZXNcbiAgfVxuXG4gIHF1ZXJ5LnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICB2YXIgcGFydHMgPSBwYXJhbS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnPScpO1xuICAgIHZhciBrZXkgPSBkZWNvZGUocGFydHMuc2hpZnQoKSk7XG4gICAgdmFyIHZhbCA9IHBhcnRzLmxlbmd0aCA+IDBcbiAgICAgID8gZGVjb2RlKHBhcnRzLmpvaW4oJz0nKSlcbiAgICAgIDogbnVsbDtcblxuICAgIGlmIChyZXNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXNba2V5XSA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzW2tleV0pKSB7XG4gICAgICByZXNba2V5XS5wdXNoKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc1trZXldID0gW3Jlc1trZXldLCB2YWxdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlRdWVyeSAob2JqKSB7XG4gIHZhciByZXMgPSBvYmogPyBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZW5jb2RlKGtleSlcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICB2YWwuZm9yRWFjaChmdW5jdGlvbiAodmFsMikge1xuICAgICAgICBpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbDIgPT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGUoa2V5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodmFsMikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQuam9pbignJicpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHZhbClcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lmxlbmd0aCA+IDA7IH0pLmpvaW4oJyYnKSA6IG51bGw7XG4gIHJldHVybiByZXMgPyAoXCI/XCIgKyByZXMpIDogJydcbn1cblxuLyogICovXG5cblxudmFyIHRyYWlsaW5nU2xhc2hSRSA9IC9cXC8/JC87XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlIChcbiAgcmVjb3JkLFxuICBsb2NhdGlvbixcbiAgcmVkaXJlY3RlZEZyb20sXG4gIHJvdXRlclxuKSB7XG4gIHZhciBzdHJpbmdpZnlRdWVyeSQkMSA9IHJvdXRlciAmJiByb3V0ZXIub3B0aW9ucy5zdHJpbmdpZnlRdWVyeTtcbiAgdmFyIHJvdXRlID0ge1xuICAgIG5hbWU6IGxvY2F0aW9uLm5hbWUgfHwgKHJlY29yZCAmJiByZWNvcmQubmFtZSksXG4gICAgbWV0YTogKHJlY29yZCAmJiByZWNvcmQubWV0YSkgfHwge30sXG4gICAgcGF0aDogbG9jYXRpb24ucGF0aCB8fCAnLycsXG4gICAgaGFzaDogbG9jYXRpb24uaGFzaCB8fCAnJyxcbiAgICBxdWVyeTogbG9jYXRpb24ucXVlcnkgfHwge30sXG4gICAgcGFyYW1zOiBsb2NhdGlvbi5wYXJhbXMgfHwge30sXG4gICAgZnVsbFBhdGg6IGdldEZ1bGxQYXRoKGxvY2F0aW9uLCBzdHJpbmdpZnlRdWVyeSQkMSksXG4gICAgbWF0Y2hlZDogcmVjb3JkID8gZm9ybWF0TWF0Y2gocmVjb3JkKSA6IFtdXG4gIH07XG4gIGlmIChyZWRpcmVjdGVkRnJvbSkge1xuICAgIHJvdXRlLnJlZGlyZWN0ZWRGcm9tID0gZ2V0RnVsbFBhdGgocmVkaXJlY3RlZEZyb20sIHN0cmluZ2lmeVF1ZXJ5JCQxKTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShyb3V0ZSlcbn1cblxuLy8gdGhlIHN0YXJ0aW5nIHJvdXRlIHRoYXQgcmVwcmVzZW50cyB0aGUgaW5pdGlhbCBzdGF0ZVxudmFyIFNUQVJUID0gY3JlYXRlUm91dGUobnVsbCwge1xuICBwYXRoOiAnLydcbn0pO1xuXG5mdW5jdGlvbiBmb3JtYXRNYXRjaCAocmVjb3JkKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgd2hpbGUgKHJlY29yZCkge1xuICAgIHJlcy51bnNoaWZ0KHJlY29yZCk7XG4gICAgcmVjb3JkID0gcmVjb3JkLnBhcmVudDtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdldEZ1bGxQYXRoIChcbiAgcmVmLFxuICBfc3RyaW5naWZ5UXVlcnlcbikge1xuICB2YXIgcGF0aCA9IHJlZi5wYXRoO1xuICB2YXIgcXVlcnkgPSByZWYucXVlcnk7IGlmICggcXVlcnkgPT09IHZvaWQgMCApIHF1ZXJ5ID0ge307XG4gIHZhciBoYXNoID0gcmVmLmhhc2g7IGlmICggaGFzaCA9PT0gdm9pZCAwICkgaGFzaCA9ICcnO1xuXG4gIHZhciBzdHJpbmdpZnkgPSBfc3RyaW5naWZ5UXVlcnkgfHwgc3RyaW5naWZ5UXVlcnk7XG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgc3RyaW5naWZ5KHF1ZXJ5KSArIGhhc2hcbn1cblxuZnVuY3Rpb24gaXNTYW1lUm91dGUgKGEsIGIpIHtcbiAgaWYgKGIgPT09IFNUQVJUKSB7XG4gICAgcmV0dXJuIGEgPT09IGJcbiAgfSBlbHNlIGlmICghYikge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgaWYgKGEucGF0aCAmJiBiLnBhdGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYS5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykgPT09IGIucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJycpICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KVxuICAgIClcbiAgfSBlbHNlIGlmIChhLm5hbWUgJiYgYi5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGEubmFtZSA9PT0gYi5uYW1lICYmXG4gICAgICBhLmhhc2ggPT09IGIuaGFzaCAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnF1ZXJ5LCBiLnF1ZXJ5KSAmJlxuICAgICAgaXNPYmplY3RFcXVhbChhLnBhcmFtcywgYi5wYXJhbXMpXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0RXF1YWwgKGEsIGIpIHtcbiAgaWYgKCBhID09PSB2b2lkIDAgKSBhID0ge307XG4gIGlmICggYiA9PT0gdm9pZCAwICkgYiA9IHt9O1xuXG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgYVZhbCA9IGFba2V5XTtcbiAgICB2YXIgYlZhbCA9IGJba2V5XTtcbiAgICAvLyBjaGVjayBuZXN0ZWQgZXF1YWxpdHlcbiAgICBpZiAodHlwZW9mIGFWYWwgPT09ICdvYmplY3QnICYmIHR5cGVvZiBiVmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGlzT2JqZWN0RXF1YWwoYVZhbCwgYlZhbClcbiAgICB9XG4gICAgcmV0dXJuIFN0cmluZyhhVmFsKSA9PT0gU3RyaW5nKGJWYWwpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlzSW5jbHVkZWRSb3V0ZSAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIHJldHVybiAoXG4gICAgY3VycmVudC5wYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnLycpLmluZGV4T2YoXG4gICAgICB0YXJnZXQucGF0aC5yZXBsYWNlKHRyYWlsaW5nU2xhc2hSRSwgJy8nKVxuICAgICkgPT09IDAgJiZcbiAgICAoIXRhcmdldC5oYXNoIHx8IGN1cnJlbnQuaGFzaCA9PT0gdGFyZ2V0Lmhhc2gpICYmXG4gICAgcXVlcnlJbmNsdWRlcyhjdXJyZW50LnF1ZXJ5LCB0YXJnZXQucXVlcnkpXG4gIClcbn1cblxuZnVuY3Rpb24gcXVlcnlJbmNsdWRlcyAoY3VycmVudCwgdGFyZ2V0KSB7XG4gIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICBpZiAoIShrZXkgaW4gY3VycmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG4vKiAgKi9cblxuLy8gd29yayBhcm91bmQgd2VpcmQgZmxvdyBidWdcbnZhciB0b1R5cGVzID0gW1N0cmluZywgT2JqZWN0XTtcbnZhciBldmVudFR5cGVzID0gW1N0cmluZywgQXJyYXldO1xuXG52YXIgTGluayA9IHtcbiAgbmFtZTogJ3JvdXRlci1saW5rJyxcbiAgcHJvcHM6IHtcbiAgICB0bzoge1xuICAgICAgdHlwZTogdG9UeXBlcyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhJ1xuICAgIH0sXG4gICAgZXhhY3Q6IEJvb2xlYW4sXG4gICAgYXBwZW5kOiBCb29sZWFuLFxuICAgIHJlcGxhY2U6IEJvb2xlYW4sXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBleGFjdEFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgZXZlbnQ6IHtcbiAgICAgIHR5cGU6IGV2ZW50VHlwZXMsXG4gICAgICBkZWZhdWx0OiAnY2xpY2snXG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJvdXRlciA9IHRoaXMuJHJvdXRlcjtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuJHJvdXRlO1xuICAgIHZhciByZWYgPSByb3V0ZXIucmVzb2x2ZSh0aGlzLnRvLCBjdXJyZW50LCB0aGlzLmFwcGVuZCk7XG4gICAgdmFyIGxvY2F0aW9uID0gcmVmLmxvY2F0aW9uO1xuICAgIHZhciByb3V0ZSA9IHJlZi5yb3V0ZTtcbiAgICB2YXIgaHJlZiA9IHJlZi5ocmVmO1xuXG4gICAgdmFyIGNsYXNzZXMgPSB7fTtcbiAgICB2YXIgZ2xvYmFsQWN0aXZlQ2xhc3MgPSByb3V0ZXIub3B0aW9ucy5saW5rQWN0aXZlQ2xhc3M7XG4gICAgdmFyIGdsb2JhbEV4YWN0QWN0aXZlQ2xhc3MgPSByb3V0ZXIub3B0aW9ucy5saW5rRXhhY3RBY3RpdmVDbGFzcztcbiAgICAvLyBTdXBwb3J0IGdsb2JhbCBlbXB0eSBhY3RpdmUgY2xhc3NcbiAgICB2YXIgYWN0aXZlQ2xhc3NGYWxsYmFjayA9IGdsb2JhbEFjdGl2ZUNsYXNzID09IG51bGxcbiAgICAgICAgICAgID8gJ3JvdXRlci1saW5rLWFjdGl2ZSdcbiAgICAgICAgICAgIDogZ2xvYmFsQWN0aXZlQ2xhc3M7XG4gICAgdmFyIGV4YWN0QWN0aXZlQ2xhc3NGYWxsYmFjayA9IGdsb2JhbEV4YWN0QWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyAncm91dGVyLWxpbmstZXhhY3QtYWN0aXZlJ1xuICAgICAgICAgICAgOiBnbG9iYWxFeGFjdEFjdGl2ZUNsYXNzO1xuICAgIHZhciBhY3RpdmVDbGFzcyA9IHRoaXMuYWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyBhY3RpdmVDbGFzc0ZhbGxiYWNrXG4gICAgICAgICAgICA6IHRoaXMuYWN0aXZlQ2xhc3M7XG4gICAgdmFyIGV4YWN0QWN0aXZlQ2xhc3MgPSB0aGlzLmV4YWN0QWN0aXZlQ2xhc3MgPT0gbnVsbFxuICAgICAgICAgICAgPyBleGFjdEFjdGl2ZUNsYXNzRmFsbGJhY2tcbiAgICAgICAgICAgIDogdGhpcy5leGFjdEFjdGl2ZUNsYXNzO1xuICAgIHZhciBjb21wYXJlVGFyZ2V0ID0gbG9jYXRpb24ucGF0aFxuICAgICAgPyBjcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbiwgbnVsbCwgcm91dGVyKVxuICAgICAgOiByb3V0ZTtcblxuICAgIGNsYXNzZXNbZXhhY3RBY3RpdmVDbGFzc10gPSBpc1NhbWVSb3V0ZShjdXJyZW50LCBjb21wYXJlVGFyZ2V0KTtcbiAgICBjbGFzc2VzW2FjdGl2ZUNsYXNzXSA9IHRoaXMuZXhhY3RcbiAgICAgID8gY2xhc3Nlc1tleGFjdEFjdGl2ZUNsYXNzXVxuICAgICAgOiBpc0luY2x1ZGVkUm91dGUoY3VycmVudCwgY29tcGFyZVRhcmdldCk7XG5cbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZ3VhcmRFdmVudChlKSkge1xuICAgICAgICBpZiAodGhpcyQxLnJlcGxhY2UpIHtcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZShsb2NhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2gobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvbiA9IHsgY2xpY2s6IGd1YXJkRXZlbnQgfTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmV2ZW50KSkge1xuICAgICAgdGhpcy5ldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7IG9uW2VdID0gaGFuZGxlcjsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uW3RoaXMuZXZlbnRdID0gaGFuZGxlcjtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnRhZyA9PT0gJ2EnKSB7XG4gICAgICBkYXRhLm9uID0gb247XG4gICAgICBkYXRhLmF0dHJzID0geyBocmVmOiBocmVmIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IDxhPiBjaGlsZCBhbmQgYXBwbHkgbGlzdGVuZXIgYW5kIGhyZWZcbiAgICAgIHZhciBhID0gZmluZEFuY2hvcih0aGlzLiRzbG90cy5kZWZhdWx0KTtcbiAgICAgIGlmIChhKSB7XG4gICAgICAgIC8vIGluIGNhc2UgdGhlIDxhPiBpcyBhIHN0YXRpYyBub2RlXG4gICAgICAgIGEuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGV4dGVuZCA9IF9WdWUudXRpbC5leHRlbmQ7XG4gICAgICAgIHZhciBhRGF0YSA9IGEuZGF0YSA9IGV4dGVuZCh7fSwgYS5kYXRhKTtcbiAgICAgICAgYURhdGEub24gPSBvbjtcbiAgICAgICAgdmFyIGFBdHRycyA9IGEuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYS5kYXRhLmF0dHJzKTtcbiAgICAgICAgYUF0dHJzLmhyZWYgPSBocmVmO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG9lc24ndCBoYXZlIDxhPiBjaGlsZCwgYXBwbHkgbGlzdGVuZXIgdG8gc2VsZlxuICAgICAgICBkYXRhLm9uID0gb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGhpcy50YWcsIGRhdGEsIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGd1YXJkRXZlbnQgKGUpIHtcbiAgLy8gZG9uJ3QgcmVkaXJlY3Qgd2l0aCBjb250cm9sIGtleXNcbiAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSkgeyByZXR1cm4gfVxuICAvLyBkb24ndCByZWRpcmVjdCB3aGVuIHByZXZlbnREZWZhdWx0IGNhbGxlZFxuICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IG9uIHJpZ2h0IGNsaWNrXG4gIGlmIChlLmJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGUuYnV0dG9uICE9PSAwKSB7IHJldHVybiB9XG4gIC8vIGRvbid0IHJlZGlyZWN0IGlmIGB0YXJnZXQ9XCJfYmxhbmtcImBcbiAgaWYgKGUuY3VycmVudFRhcmdldCAmJiBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpO1xuICAgIGlmICgvXFxiX2JsYW5rXFxiL2kudGVzdCh0YXJnZXQpKSB7IHJldHVybiB9XG4gIH1cbiAgLy8gdGhpcyBtYXkgYmUgYSBXZWV4IGV2ZW50IHdoaWNoIGRvZXNuJ3QgaGF2ZSB0aGlzIG1ldGhvZFxuICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaW5kQW5jaG9yIChjaGlsZHJlbikge1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICB2YXIgY2hpbGQ7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZC50YWcgPT09ICdhJykge1xuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC5jaGlsZHJlbiAmJiAoY2hpbGQgPSBmaW5kQW5jaG9yKGNoaWxkLmNoaWxkcmVuKSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBfVnVlO1xuXG5mdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgaWYgKGluc3RhbGwuaW5zdGFsbGVkKSB7IHJldHVybiB9XG4gIGluc3RhbGwuaW5zdGFsbGVkID0gdHJ1ZTtcblxuICBfVnVlID0gVnVlO1xuXG4gIHZhciBpc0RlZiA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2ICE9PSB1bmRlZmluZWQ7IH07XG5cbiAgdmFyIHJlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbiAodm0sIGNhbGxWYWwpIHtcbiAgICB2YXIgaSA9IHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgICBpZiAoaXNEZWYoaSkgJiYgaXNEZWYoaSA9IGkuZGF0YSkgJiYgaXNEZWYoaSA9IGkucmVnaXN0ZXJSb3V0ZUluc3RhbmNlKSkge1xuICAgICAgaSh2bSwgY2FsbFZhbCk7XG4gICAgfVxuICB9O1xuXG4gIFZ1ZS5taXhpbih7XG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiBiZWZvcmVDcmVhdGUgKCkge1xuICAgICAgaWYgKGlzRGVmKHRoaXMuJG9wdGlvbnMucm91dGVyKSkge1xuICAgICAgICB0aGlzLl9yb3V0ZXJSb290ID0gdGhpcztcbiAgICAgICAgdGhpcy5fcm91dGVyID0gdGhpcy4kb3B0aW9ucy5yb3V0ZXI7XG4gICAgICAgIHRoaXMuX3JvdXRlci5pbml0KHRoaXMpO1xuICAgICAgICBWdWUudXRpbC5kZWZpbmVSZWFjdGl2ZSh0aGlzLCAnX3JvdXRlJywgdGhpcy5fcm91dGVyLmhpc3RvcnkuY3VycmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yb3V0ZXJSb290ID0gKHRoaXMuJHBhcmVudCAmJiB0aGlzLiRwYXJlbnQuX3JvdXRlclJvb3QpIHx8IHRoaXM7XG4gICAgICB9XG4gICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIHRoaXMpO1xuICAgIH0sXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiBkZXN0cm95ZWQgKCkge1xuICAgICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHJvdXRlcicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7IHJldHVybiB0aGlzLl9yb3V0ZXJSb290Ll9yb3V0ZXIgfVxuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRyb3V0ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7IHJldHVybiB0aGlzLl9yb3V0ZXJSb290Ll9yb3V0ZSB9XG4gIH0pO1xuXG4gIFZ1ZS5jb21wb25lbnQoJ3JvdXRlci12aWV3JywgVmlldyk7XG4gIFZ1ZS5jb21wb25lbnQoJ3JvdXRlci1saW5rJywgTGluayk7XG5cbiAgdmFyIHN0cmF0cyA9IFZ1ZS5jb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuICAvLyB1c2UgdGhlIHNhbWUgaG9vayBtZXJnaW5nIHN0cmF0ZWd5IGZvciByb3V0ZSBob29rc1xuICBzdHJhdHMuYmVmb3JlUm91dGVFbnRlciA9IHN0cmF0cy5iZWZvcmVSb3V0ZUxlYXZlID0gc3RyYXRzLmJlZm9yZVJvdXRlVXBkYXRlID0gc3RyYXRzLmNyZWF0ZWQ7XG59XG5cbi8qICAqL1xuXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlUGF0aCAoXG4gIHJlbGF0aXZlLFxuICBiYXNlLFxuICBhcHBlbmRcbikge1xuICB2YXIgZmlyc3RDaGFyID0gcmVsYXRpdmUuY2hhckF0KDApO1xuICBpZiAoZmlyc3RDaGFyID09PSAnLycpIHtcbiAgICByZXR1cm4gcmVsYXRpdmVcbiAgfVxuXG4gIGlmIChmaXJzdENoYXIgPT09ICc/JyB8fCBmaXJzdENoYXIgPT09ICcjJykge1xuICAgIHJldHVybiBiYXNlICsgcmVsYXRpdmVcbiAgfVxuXG4gIHZhciBzdGFjayA9IGJhc2Uuc3BsaXQoJy8nKTtcblxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2VnbWVudCBpZjpcbiAgLy8gLSBub3QgYXBwZW5kaW5nXG4gIC8vIC0gYXBwZW5kaW5nIHRvIHRyYWlsaW5nIHNsYXNoIChsYXN0IHNlZ21lbnQgaXMgZW1wdHkpXG4gIGlmICghYXBwZW5kIHx8ICFzdGFja1tzdGFjay5sZW5ndGggLSAxXSkge1xuICAgIHN0YWNrLnBvcCgpO1xuICB9XG5cbiAgLy8gcmVzb2x2ZSByZWxhdGl2ZSBwYXRoXG4gIHZhciBzZWdtZW50cyA9IHJlbGF0aXZlLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJy8nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNbaV07XG4gICAgaWYgKHNlZ21lbnQgPT09ICcuLicpIHtcbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudCAhPT0gJy4nKSB7XG4gICAgICBzdGFjay5wdXNoKHNlZ21lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVuc3VyZSBsZWFkaW5nIHNsYXNoXG4gIGlmIChzdGFja1swXSAhPT0gJycpIHtcbiAgICBzdGFjay51bnNoaWZ0KCcnKTtcbiAgfVxuXG4gIHJldHVybiBzdGFjay5qb2luKCcvJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIHZhciBoYXNoID0gJyc7XG4gIHZhciBxdWVyeSA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgaGFzaCA9IHBhdGguc2xpY2UoaGFzaEluZGV4KTtcbiAgICBwYXRoID0gcGF0aC5zbGljZSgwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgaWYgKHF1ZXJ5SW5kZXggPj0gMCkge1xuICAgIHF1ZXJ5ID0gcGF0aC5zbGljZShxdWVyeUluZGV4ICsgMSk7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoMCwgcXVlcnlJbmRleCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGg6IHBhdGgsXG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIGhhc2g6IGhhc2hcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhblBhdGggKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvXFwvL2csICcvJylcbn1cblxudmFyIGluZGV4JDEgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgcGF0aFRvUmVnZXhwYC5cbiAqL1xudmFyIGluZGV4ID0gcGF0aFRvUmVnZXhwO1xudmFyIHBhcnNlXzEgPSBwYXJzZTtcbnZhciBjb21waWxlXzEgPSBjb21waWxlO1xudmFyIHRva2Vuc1RvRnVuY3Rpb25fMSA9IHRva2Vuc1RvRnVuY3Rpb247XG52YXIgdG9rZW5zVG9SZWdFeHBfMSA9IHRva2Vuc1RvUmVnRXhwO1xuXG4vKipcbiAqIFRoZSBtYWluIHBhdGggbWF0Y2hpbmcgcmVnZXhwIHV0aWxpdHkuXG4gKlxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xudmFyIFBBVEhfUkVHRVhQID0gbmV3IFJlZ0V4cChbXG4gIC8vIE1hdGNoIGVzY2FwZWQgY2hhcmFjdGVycyB0aGF0IHdvdWxkIG90aGVyd2lzZSBhcHBlYXIgaW4gZnV0dXJlIG1hdGNoZXMuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSB1c2VyIHRvIGVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCB3b24ndCB0cmFuc2Zvcm0uXG4gICcoXFxcXFxcXFwuKScsXG4gIC8vIE1hdGNoIEV4cHJlc3Mtc3R5bGUgcGFyYW1ldGVycyBhbmQgdW4tbmFtZWQgcGFyYW1ldGVycyB3aXRoIGEgcHJlZml4XG4gIC8vIGFuZCBvcHRpb25hbCBzdWZmaXhlcy4gTWF0Y2hlcyBhcHBlYXIgYXM6XG4gIC8vXG4gIC8vIFwiLzp0ZXN0KFxcXFxkKyk/XCIgPT4gW1wiL1wiLCBcInRlc3RcIiwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgXCI/XCIsIHVuZGVmaW5lZF1cbiAgLy8gXCIvcm91dGUoXFxcXGQrKVwiICA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCJcXGQrXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICAvLyBcIi8qXCIgICAgICAgICAgICA9PiBbXCIvXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgXCIqXCJdXG4gICcoW1xcXFwvLl0pPyg/Oig/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSkoWysqP10pP3woXFxcXCopKSdcbl0uam9pbignfCcpLCAnZycpO1xuXG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19IG9wdGlvbnNcbiAqIEByZXR1cm4geyFBcnJheX1cbiAqL1xuZnVuY3Rpb24gcGFyc2UgKHN0ciwgb3B0aW9ucykge1xuICB2YXIgdG9rZW5zID0gW107XG4gIHZhciBrZXkgPSAwO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgcGF0aCA9ICcnO1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nO1xuICB2YXIgcmVzO1xuXG4gIHdoaWxlICgocmVzID0gUEFUSF9SRUdFWFAuZXhlYyhzdHIpKSAhPSBudWxsKSB7XG4gICAgdmFyIG0gPSByZXNbMF07XG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV07XG4gICAgdmFyIG9mZnNldCA9IHJlcy5pbmRleDtcbiAgICBwYXRoICs9IHN0ci5zbGljZShpbmRleCwgb2Zmc2V0KTtcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoO1xuXG4gICAgLy8gSWdub3JlIGFscmVhZHkgZXNjYXBlZCBzZXF1ZW5jZXMuXG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHBhdGggKz0gZXNjYXBlZFsxXTtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgdmFyIG5leHQgPSBzdHJbaW5kZXhdO1xuICAgIHZhciBwcmVmaXggPSByZXNbMl07XG4gICAgdmFyIG5hbWUgPSByZXNbM107XG4gICAgdmFyIGNhcHR1cmUgPSByZXNbNF07XG4gICAgdmFyIGdyb3VwID0gcmVzWzVdO1xuICAgIHZhciBtb2RpZmllciA9IHJlc1s2XTtcbiAgICB2YXIgYXN0ZXJpc2sgPSByZXNbN107XG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKTtcbiAgICAgIHBhdGggPSAnJztcbiAgICB9XG5cbiAgICB2YXIgcGFydGlhbCA9IHByZWZpeCAhPSBudWxsICYmIG5leHQgIT0gbnVsbCAmJiBuZXh0ICE9PSBwcmVmaXg7XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJztcbiAgICB2YXIgb3B0aW9uYWwgPSBtb2RpZmllciA9PT0gJz8nIHx8IG1vZGlmaWVyID09PSAnKic7XG4gICAgdmFyIGRlbGltaXRlciA9IHJlc1syXSB8fCBkZWZhdWx0RGVsaW1pdGVyO1xuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cDtcblxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICBwcmVmaXg6IHByZWZpeCB8fCAnJyxcbiAgICAgIGRlbGltaXRlcjogZGVsaW1pdGVyLFxuICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICBwYXJ0aWFsOiBwYXJ0aWFsLFxuICAgICAgYXN0ZXJpc2s6ICEhYXN0ZXJpc2ssXG4gICAgICBwYXR0ZXJuOiBwYXR0ZXJuID8gZXNjYXBlR3JvdXAocGF0dGVybikgOiAoYXN0ZXJpc2sgPyAnLionIDogJ1teJyArIGVzY2FwZVN0cmluZyhkZWxpbWl0ZXIpICsgJ10rPycpXG4gICAgfSk7XG4gIH1cblxuICAvLyBNYXRjaCBhbnkgY2hhcmFjdGVycyBzdGlsbCByZW1haW5pbmcuXG4gIGlmIChpbmRleCA8IHN0ci5sZW5ndGgpIHtcbiAgICBwYXRoICs9IHN0ci5zdWJzdHIoaW5kZXgpO1xuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKTtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnNcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gICAgICAgICAgICAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFmdW5jdGlvbihPYmplY3Q9LCBPYmplY3Q9KX1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZSAoc3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucykpXG59XG5cbi8qKlxuICogUHJldHRpZXIgZW5jb2Rpbmcgb2YgVVJJIHBhdGggc2VnbWVudHMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVVUklDb21wb25lbnRQcmV0dHkgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvW1xcLz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGFzdGVyaXNrIHBhcmFtZXRlci4gU2ltaWxhciB0byBgcHJldHR5YCwgYnV0IGFsbG93cyBzbGFzaGVzLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ31cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlQXN0ZXJpc2sgKHN0cikge1xuICByZXR1cm4gZW5jb2RlVVJJKHN0cikucmVwbGFjZSgvWz8jXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKClcbiAgfSlcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbiAodG9rZW5zKSB7XG4gIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICB2YXIgbWF0Y2hlcyA9IG5ldyBBcnJheSh0b2tlbnMubGVuZ3RoKTtcblxuICAvLyBDb21waWxlIGFsbCB0aGUgcGF0dGVybnMgYmVmb3JlIGNvbXBpbGF0aW9uLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgdG9rZW5zW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgbWF0Y2hlc1tpXSA9IG5ldyBSZWdFeHAoJ14oPzonICsgdG9rZW5zW2ldLnBhdHRlcm4gKyAnKSQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuICAgIHZhciBwYXRoID0gJyc7XG4gICAgdmFyIGRhdGEgPSBvYmogfHwge307XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuICAgIHZhciBlbmNvZGUgPSBvcHRpb25zLnByZXR0eSA/IGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSA6IGVuY29kZVVSSUNvbXBvbmVudDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBhdGggKz0gdG9rZW47XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXTtcbiAgICAgIHZhciBzZWdtZW50O1xuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgICAvLyBQcmVwZW5kIHBhcnRpYWwgc2VnbWVudCBwcmVmaXhlcy5cbiAgICAgICAgICBpZiAodG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlIGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCQxKHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgJ2AnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgYmUgZW1wdHknKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdKTtcblxuICAgICAgICAgIGlmICghbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBtYXRjaCBcIicgKyB0b2tlbi5wYXR0ZXJuICsgJ1wiLCBidXQgcmVjZWl2ZWQgYCcgKyBKU09OLnN0cmluZ2lmeShzZWdtZW50KSArICdgJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXRoICs9IChqID09PSAwID8gdG9rZW4ucHJlZml4IDogdG9rZW4uZGVsaW1pdGVyKSArIHNlZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzZWdtZW50ID0gdG9rZW4uYXN0ZXJpc2sgPyBlbmNvZGVBc3Rlcmlzayh2YWx1ZSkgOiBlbmNvZGUodmFsdWUpO1xuXG4gICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgIH1cblxuICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXxcXC9cXFxcXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogRXNjYXBlIHRoZSBjYXB0dXJpbmcgZ3JvdXAgYnkgZXNjYXBpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBtZWFuaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZ3JvdXBcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlR3JvdXAgKGdyb3VwKSB7XG4gIHJldHVybiBncm91cC5yZXBsYWNlKC8oWz0hOiRcXC8oKV0pL2csICdcXFxcJDEnKVxufVxuXG4vKipcbiAqIEF0dGFjaCB0aGUga2V5cyBhcyBhIHByb3BlcnR5IG9mIHRoZSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcmVcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGF0dGFjaEtleXMgKHJlLCBrZXlzKSB7XG4gIHJlLmtleXMgPSBrZXlzO1xuICByZXR1cm4gcmVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJ1xufVxuXG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHshQXJyYXl9ICBrZXlzXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cCAocGF0aCwga2V5cykge1xuICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhwYXRoLCBrZXlzKVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gIHBhdGhcbiAqIEBwYXJhbSAge0FycmF5fSAgIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcnRzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgcGFydHMucHVzaChwYXRoVG9SZWdleHAocGF0aFtpXSwga2V5cywgb3B0aW9ucykuc291cmNlKTtcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSk7XG5cbiAgcmV0dXJuIGF0dGFjaEtleXMocmVnZXhwLCBrZXlzKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHBhdGhcbiAqIEBwYXJhbSAgeyFBcnJheX0gIGtleXNcbiAqIEBwYXJhbSAgeyFPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIHJldHVybiB0b2tlbnNUb1JlZ0V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICpcbiAqIEBwYXJhbSAgeyFBcnJheX0gICAgICAgICAgdG9rZW5zXG4gKiBAcGFyYW0gIHsoQXJyYXl8T2JqZWN0KT19IGtleXNcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdFeHAgKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWluZGV4JDEoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKTtcbiAgICBrZXlzID0gW107XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3Q7XG4gIHZhciBlbmQgPSBvcHRpb25zLmVuZCAhPT0gZmFsc2U7XG4gIHZhciByb3V0ZSA9ICcnO1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyh0b2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KTtcbiAgICAgIHZhciBjYXB0dXJlID0gJyg/OicgKyB0b2tlbi5wYXR0ZXJuICsgJyknO1xuXG4gICAgICBrZXlzLnB1c2godG9rZW4pO1xuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgIGlmICghdG9rZW4ucGFydGlhbCkge1xuICAgICAgICAgIGNhcHR1cmUgPSAnKD86JyArIHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSk/JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXB0dXJlID0gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpPyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknO1xuICAgICAgfVxuXG4gICAgICByb3V0ZSArPSBjYXB0dXJlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nKTtcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXI7XG5cbiAgLy8gSW4gbm9uLXN0cmljdCBtb2RlIHdlIGFsbG93IGEgc2xhc2ggYXQgdGhlIGVuZCBvZiBtYXRjaC4gSWYgdGhlIHBhdGggdG9cbiAgLy8gbWF0Y2ggYWxyZWFkeSBlbmRzIHdpdGggYSBzbGFzaCwgd2UgcmVtb3ZlIGl0IGZvciBjb25zaXN0ZW5jeS4gVGhlIHNsYXNoXG4gIC8vIGlzIHZhbGlkIGF0IHRoZSBlbmQgb2YgYSBwYXRoIG1hdGNoLCBub3QgaW4gdGhlIG1pZGRsZS4gVGhpcyBpcyBpbXBvcnRhbnRcbiAgLy8gaW4gbm9uLWVuZGluZyBtb2RlLCB3aGVyZSBcIi90ZXN0L1wiIHNob3VsZG4ndCBtYXRjaCBcIi90ZXN0Ly9yb3V0ZVwiLlxuICBpZiAoIXN0cmljdCkge1xuICAgIHJvdXRlID0gKGVuZHNXaXRoRGVsaW1pdGVyID8gcm91dGUuc2xpY2UoMCwgLWRlbGltaXRlci5sZW5ndGgpIDogcm91dGUpICsgJyg/OicgKyBkZWxpbWl0ZXIgKyAnKD89JCkpPyc7XG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnO1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSc7XG4gIH1cblxuICByZXR1cm4gYXR0YWNoS2V5cyhuZXcgUmVnRXhwKCdeJyArIHJvdXRlLCBmbGFncyhvcHRpb25zKSksIGtleXMpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqXG4gKiBAcGFyYW0gIHsoc3RyaW5nfFJlZ0V4cHxBcnJheSl9IHBhdGhcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0gICAgICAga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgaWYgKCFpbmRleCQxKGtleXMpKSB7XG4gICAgb3B0aW9ucyA9IC8qKiBAdHlwZSB7IU9iamVjdH0gKi8gKGtleXMgfHwgb3B0aW9ucyk7XG4gICAga2V5cyA9IFtdO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSlcbiAgfVxuXG4gIGlmIChpbmRleCQxKHBhdGgpKSB7XG4gICAgcmV0dXJuIGFycmF5VG9SZWdleHAoLyoqIEB0eXBlIHshQXJyYXl9ICovIChwYXRoKSwgLyoqIEB0eXBlIHshQXJyYXl9ICovIChrZXlzKSwgb3B0aW9ucylcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdUb1JlZ2V4cCgvKiogQHR5cGUge3N0cmluZ30gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxufVxuXG5pbmRleC5wYXJzZSA9IHBhcnNlXzE7XG5pbmRleC5jb21waWxlID0gY29tcGlsZV8xO1xuaW5kZXgudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb25fMTtcbmluZGV4LnRva2Vuc1RvUmVnRXhwID0gdG9rZW5zVG9SZWdFeHBfMTtcblxuLyogICovXG5cbnZhciByZWdleHBDb21waWxlQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBmaWxsUGFyYW1zIChcbiAgcGF0aCxcbiAgcGFyYW1zLFxuICByb3V0ZU1zZ1xuKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZpbGxlciA9XG4gICAgICByZWdleHBDb21waWxlQ2FjaGVbcGF0aF0gfHxcbiAgICAgIChyZWdleHBDb21waWxlQ2FjaGVbcGF0aF0gPSBpbmRleC5jb21waWxlKHBhdGgpKTtcbiAgICByZXR1cm4gZmlsbGVyKHBhcmFtcyB8fCB7fSwgeyBwcmV0dHk6IHRydWUgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKGZhbHNlLCAoXCJtaXNzaW5nIHBhcmFtIGZvciBcIiArIHJvdXRlTXNnICsgXCI6IFwiICsgKGUubWVzc2FnZSkpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTWFwIChcbiAgcm91dGVzLFxuICBvbGRQYXRoTGlzdCxcbiAgb2xkUGF0aE1hcCxcbiAgb2xkTmFtZU1hcFxuKSB7XG4gIC8vIHRoZSBwYXRoIGxpc3QgaXMgdXNlZCB0byBjb250cm9sIHBhdGggbWF0Y2hpbmcgcHJpb3JpdHlcbiAgdmFyIHBhdGhMaXN0ID0gb2xkUGF0aExpc3QgfHwgW107XG4gIHZhciBwYXRoTWFwID0gb2xkUGF0aE1hcCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbmFtZU1hcCA9IG9sZE5hbWVNYXAgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICByb3V0ZXMuZm9yRWFjaChmdW5jdGlvbiAocm91dGUpIHtcbiAgICBhZGRSb3V0ZVJlY29yZChwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCwgcm91dGUpO1xuICB9KTtcblxuICAvLyBlbnN1cmUgd2lsZGNhcmQgcm91dGVzIGFyZSBhbHdheXMgYXQgdGhlIGVuZFxuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdGhMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGlmIChwYXRoTGlzdFtpXSA9PT0gJyonKSB7XG4gICAgICBwYXRoTGlzdC5wdXNoKHBhdGhMaXN0LnNwbGljZShpLCAxKVswXSk7XG4gICAgICBsLS07XG4gICAgICBpLS07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoTGlzdDogcGF0aExpc3QsXG4gICAgcGF0aE1hcDogcGF0aE1hcCxcbiAgICBuYW1lTWFwOiBuYW1lTWFwXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkUm91dGVSZWNvcmQgKFxuICBwYXRoTGlzdCxcbiAgcGF0aE1hcCxcbiAgbmFtZU1hcCxcbiAgcm91dGUsXG4gIHBhcmVudCxcbiAgbWF0Y2hBc1xuKSB7XG4gIHZhciBwYXRoID0gcm91dGUucGF0aDtcbiAgdmFyIG5hbWUgPSByb3V0ZS5uYW1lO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChwYXRoICE9IG51bGwsIFwiXFxcInBhdGhcXFwiIGlzIHJlcXVpcmVkIGluIGEgcm91dGUgY29uZmlndXJhdGlvbi5cIik7XG4gICAgYXNzZXJ0KFxuICAgICAgdHlwZW9mIHJvdXRlLmNvbXBvbmVudCAhPT0gJ3N0cmluZycsXG4gICAgICBcInJvdXRlIGNvbmZpZyBcXFwiY29tcG9uZW50XFxcIiBmb3IgcGF0aDogXCIgKyAoU3RyaW5nKHBhdGggfHwgbmFtZSkpICsgXCIgY2Fubm90IGJlIGEgXCIgK1xuICAgICAgXCJzdHJpbmcgaWQuIFVzZSBhbiBhY3R1YWwgY29tcG9uZW50IGluc3RlYWQuXCJcbiAgICApO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRQYXRoID0gbm9ybWFsaXplUGF0aChwYXRoLCBwYXJlbnQpO1xuICB2YXIgcGF0aFRvUmVnZXhwT3B0aW9ucyA9IHJvdXRlLnBhdGhUb1JlZ2V4cE9wdGlvbnMgfHwge307XG5cbiAgaWYgKHR5cGVvZiByb3V0ZS5jYXNlU2Vuc2l0aXZlID09PSAnYm9vbGVhbicpIHtcbiAgICBwYXRoVG9SZWdleHBPcHRpb25zLnNlbnNpdGl2ZSA9IHJvdXRlLmNhc2VTZW5zaXRpdmU7XG4gIH1cblxuICB2YXIgcmVjb3JkID0ge1xuICAgIHBhdGg6IG5vcm1hbGl6ZWRQYXRoLFxuICAgIHJlZ2V4OiBjb21waWxlUm91dGVSZWdleChub3JtYWxpemVkUGF0aCwgcGF0aFRvUmVnZXhwT3B0aW9ucyksXG4gICAgY29tcG9uZW50czogcm91dGUuY29tcG9uZW50cyB8fCB7IGRlZmF1bHQ6IHJvdXRlLmNvbXBvbmVudCB9LFxuICAgIGluc3RhbmNlczoge30sXG4gICAgbmFtZTogbmFtZSxcbiAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICBtYXRjaEFzOiBtYXRjaEFzLFxuICAgIHJlZGlyZWN0OiByb3V0ZS5yZWRpcmVjdCxcbiAgICBiZWZvcmVFbnRlcjogcm91dGUuYmVmb3JlRW50ZXIsXG4gICAgbWV0YTogcm91dGUubWV0YSB8fCB7fSxcbiAgICBwcm9wczogcm91dGUucHJvcHMgPT0gbnVsbFxuICAgICAgPyB7fVxuICAgICAgOiByb3V0ZS5jb21wb25lbnRzXG4gICAgICAgID8gcm91dGUucHJvcHNcbiAgICAgICAgOiB7IGRlZmF1bHQ6IHJvdXRlLnByb3BzIH1cbiAgfTtcblxuICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICAvLyBXYXJuIGlmIHJvdXRlIGlzIG5hbWVkLCBkb2VzIG5vdCByZWRpcmVjdCBhbmQgaGFzIGEgZGVmYXVsdCBjaGlsZCByb3V0ZS5cbiAgICAvLyBJZiB1c2VycyBuYXZpZ2F0ZSB0byB0aGlzIHJvdXRlIGJ5IG5hbWUsIHRoZSBkZWZhdWx0IGNoaWxkIHdpbGxcbiAgICAvLyBub3QgYmUgcmVuZGVyZWQgKEdIIElzc3VlICM2MjkpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChyb3V0ZS5uYW1lICYmICFyb3V0ZS5yZWRpcmVjdCAmJiByb3V0ZS5jaGlsZHJlbi5zb21lKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gL15cXC8/JC8udGVzdChjaGlsZC5wYXRoKTsgfSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICBcIk5hbWVkIFJvdXRlICdcIiArIChyb3V0ZS5uYW1lKSArIFwiJyBoYXMgYSBkZWZhdWx0IGNoaWxkIHJvdXRlLiBcIiArXG4gICAgICAgICAgXCJXaGVuIG5hdmlnYXRpbmcgdG8gdGhpcyBuYW1lZCByb3V0ZSAoOnRvPVxcXCJ7bmFtZTogJ1wiICsgKHJvdXRlLm5hbWUpICsgXCInXFxcIiksIFwiICtcbiAgICAgICAgICBcInRoZSBkZWZhdWx0IGNoaWxkIHJvdXRlIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBSZW1vdmUgdGhlIG5hbWUgZnJvbSBcIiArXG4gICAgICAgICAgXCJ0aGlzIHJvdXRlIGFuZCB1c2UgdGhlIG5hbWUgb2YgdGhlIGRlZmF1bHQgY2hpbGQgcm91dGUgZm9yIG5hbWVkIFwiICtcbiAgICAgICAgICBcImxpbmtzIGluc3RlYWQuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcm91dGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBjaGlsZE1hdGNoQXMgPSBtYXRjaEFzXG4gICAgICAgID8gY2xlYW5QYXRoKChtYXRjaEFzICsgXCIvXCIgKyAoY2hpbGQucGF0aCkpKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgIGFkZFJvdXRlUmVjb3JkKHBhdGhMaXN0LCBwYXRoTWFwLCBuYW1lTWFwLCBjaGlsZCwgcmVjb3JkLCBjaGlsZE1hdGNoQXMpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJvdXRlLmFsaWFzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgYWxpYXNlcyA9IEFycmF5LmlzQXJyYXkocm91dGUuYWxpYXMpXG4gICAgICA/IHJvdXRlLmFsaWFzXG4gICAgICA6IFtyb3V0ZS5hbGlhc107XG5cbiAgICBhbGlhc2VzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICB2YXIgYWxpYXNSb3V0ZSA9IHtcbiAgICAgICAgcGF0aDogYWxpYXMsXG4gICAgICAgIGNoaWxkcmVuOiByb3V0ZS5jaGlsZHJlblxuICAgICAgfTtcbiAgICAgIGFkZFJvdXRlUmVjb3JkKFxuICAgICAgICBwYXRoTGlzdCxcbiAgICAgICAgcGF0aE1hcCxcbiAgICAgICAgbmFtZU1hcCxcbiAgICAgICAgYWxpYXNSb3V0ZSxcbiAgICAgICAgcGFyZW50LFxuICAgICAgICByZWNvcmQucGF0aCB8fCAnLycgLy8gbWF0Y2hBc1xuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghcGF0aE1hcFtyZWNvcmQucGF0aF0pIHtcbiAgICBwYXRoTGlzdC5wdXNoKHJlY29yZC5wYXRoKTtcbiAgICBwYXRoTWFwW3JlY29yZC5wYXRoXSA9IHJlY29yZDtcbiAgfVxuXG4gIGlmIChuYW1lKSB7XG4gICAgaWYgKCFuYW1lTWFwW25hbWVdKSB7XG4gICAgICBuYW1lTWFwW25hbWVdID0gcmVjb3JkO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhbWF0Y2hBcykge1xuICAgICAgd2FybihcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIFwiRHVwbGljYXRlIG5hbWVkIHJvdXRlcyBkZWZpbml0aW9uOiBcIiArXG4gICAgICAgIFwieyBuYW1lOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLCBwYXRoOiBcXFwiXCIgKyAocmVjb3JkLnBhdGgpICsgXCJcXFwiIH1cIlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGlsZVJvdXRlUmVnZXggKHBhdGgsIHBhdGhUb1JlZ2V4cE9wdGlvbnMpIHtcbiAgdmFyIHJlZ2V4ID0gaW5kZXgocGF0aCwgW10sIHBhdGhUb1JlZ2V4cE9wdGlvbnMpO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBrZXlzID0ge307XG4gICAgcmVnZXgua2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHdhcm4oIWtleXNba2V5Lm5hbWVdLCAoXCJEdXBsaWNhdGUgcGFyYW0ga2V5cyBpbiByb3V0ZSB3aXRoIHBhdGg6IFxcXCJcIiArIHBhdGggKyBcIlxcXCJcIikpO1xuICAgICAga2V5c1trZXkubmFtZV0gPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiByZWdleFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXRoIChwYXRoLCBwYXJlbnQpIHtcbiAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgaWYgKHBhdGhbMF0gPT09ICcvJykgeyByZXR1cm4gcGF0aCB9XG4gIGlmIChwYXJlbnQgPT0gbnVsbCkgeyByZXR1cm4gcGF0aCB9XG4gIHJldHVybiBjbGVhblBhdGgoKChwYXJlbnQucGF0aCkgKyBcIi9cIiArIHBhdGgpKVxufVxuXG4vKiAgKi9cblxuXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhdGlvbiAoXG4gIHJhdyxcbiAgY3VycmVudCxcbiAgYXBwZW5kLFxuICByb3V0ZXJcbikge1xuICB2YXIgbmV4dCA9IHR5cGVvZiByYXcgPT09ICdzdHJpbmcnID8geyBwYXRoOiByYXcgfSA6IHJhdztcbiAgLy8gbmFtZWQgdGFyZ2V0XG4gIGlmIChuZXh0Lm5hbWUgfHwgbmV4dC5fbm9ybWFsaXplZCkge1xuICAgIHJldHVybiBuZXh0XG4gIH1cblxuICAvLyByZWxhdGl2ZSBwYXJhbXNcbiAgaWYgKCFuZXh0LnBhdGggJiYgbmV4dC5wYXJhbXMgJiYgY3VycmVudCkge1xuICAgIG5leHQgPSBhc3NpZ24oe30sIG5leHQpO1xuICAgIG5leHQuX25vcm1hbGl6ZWQgPSB0cnVlO1xuICAgIHZhciBwYXJhbXMgPSBhc3NpZ24oYXNzaWduKHt9LCBjdXJyZW50LnBhcmFtcyksIG5leHQucGFyYW1zKTtcbiAgICBpZiAoY3VycmVudC5uYW1lKSB7XG4gICAgICBuZXh0Lm5hbWUgPSBjdXJyZW50Lm5hbWU7XG4gICAgICBuZXh0LnBhcmFtcyA9IHBhcmFtcztcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQubWF0Y2hlZC5sZW5ndGgpIHtcbiAgICAgIHZhciByYXdQYXRoID0gY3VycmVudC5tYXRjaGVkW2N1cnJlbnQubWF0Y2hlZC5sZW5ndGggLSAxXS5wYXRoO1xuICAgICAgbmV4dC5wYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInBhdGggXCIgKyAoY3VycmVudC5wYXRoKSkpO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybihmYWxzZSwgXCJyZWxhdGl2ZSBwYXJhbXMgbmF2aWdhdGlvbiByZXF1aXJlcyBhIGN1cnJlbnQgcm91dGUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dFxuICB9XG5cbiAgdmFyIHBhcnNlZFBhdGggPSBwYXJzZVBhdGgobmV4dC5wYXRoIHx8ICcnKTtcbiAgdmFyIGJhc2VQYXRoID0gKGN1cnJlbnQgJiYgY3VycmVudC5wYXRoKSB8fCAnLyc7XG4gIHZhciBwYXRoID0gcGFyc2VkUGF0aC5wYXRoXG4gICAgPyByZXNvbHZlUGF0aChwYXJzZWRQYXRoLnBhdGgsIGJhc2VQYXRoLCBhcHBlbmQgfHwgbmV4dC5hcHBlbmQpXG4gICAgOiBiYXNlUGF0aDtcblxuICB2YXIgcXVlcnkgPSByZXNvbHZlUXVlcnkoXG4gICAgcGFyc2VkUGF0aC5xdWVyeSxcbiAgICBuZXh0LnF1ZXJ5LFxuICAgIHJvdXRlciAmJiByb3V0ZXIub3B0aW9ucy5wYXJzZVF1ZXJ5XG4gICk7XG5cbiAgdmFyIGhhc2ggPSBuZXh0Lmhhc2ggfHwgcGFyc2VkUGF0aC5oYXNoO1xuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSB7XG4gICAgaGFzaCA9IFwiI1wiICsgaGFzaDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgcGF0aDogcGF0aCxcbiAgICBxdWVyeTogcXVlcnksXG4gICAgaGFzaDogaGFzaFxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbiAoYSwgYikge1xuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGFba2V5XSA9IGJba2V5XTtcbiAgfVxuICByZXR1cm4gYVxufVxuXG4vKiAgKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVNYXRjaGVyIChcbiAgcm91dGVzLFxuICByb3V0ZXJcbikge1xuICB2YXIgcmVmID0gY3JlYXRlUm91dGVNYXAocm91dGVzKTtcbiAgdmFyIHBhdGhMaXN0ID0gcmVmLnBhdGhMaXN0O1xuICB2YXIgcGF0aE1hcCA9IHJlZi5wYXRoTWFwO1xuICB2YXIgbmFtZU1hcCA9IHJlZi5uYW1lTWFwO1xuXG4gIGZ1bmN0aW9uIGFkZFJvdXRlcyAocm91dGVzKSB7XG4gICAgY3JlYXRlUm91dGVNYXAocm91dGVzLCBwYXRoTGlzdCwgcGF0aE1hcCwgbmFtZU1hcCk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaCAoXG4gICAgcmF3LFxuICAgIGN1cnJlbnRSb3V0ZSxcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVMb2NhdGlvbihyYXcsIGN1cnJlbnRSb3V0ZSwgZmFsc2UsIHJvdXRlcik7XG4gICAgdmFyIG5hbWUgPSBsb2NhdGlvbi5uYW1lO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHZhciByZWNvcmQgPSBuYW1lTWFwW25hbWVdO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybihyZWNvcmQsIChcIlJvdXRlIHdpdGggbmFtZSAnXCIgKyBuYW1lICsgXCInIGRvZXMgbm90IGV4aXN0XCIpKTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVjb3JkKSB7IHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pIH1cbiAgICAgIHZhciBwYXJhbU5hbWVzID0gcmVjb3JkLnJlZ2V4LmtleXNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAha2V5Lm9wdGlvbmFsOyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleS5uYW1lOyB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbi5wYXJhbXMgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhcmFtcyA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFJvdXRlICYmIHR5cGVvZiBjdXJyZW50Um91dGUucGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudFJvdXRlLnBhcmFtcykge1xuICAgICAgICAgIGlmICghKGtleSBpbiBsb2NhdGlvbi5wYXJhbXMpICYmIHBhcmFtTmFtZXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnBhcmFtc1trZXldID0gY3VycmVudFJvdXRlLnBhcmFtc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkKSB7XG4gICAgICAgIGxvY2F0aW9uLnBhdGggPSBmaWxsUGFyYW1zKHJlY29yZC5wYXRoLCBsb2NhdGlvbi5wYXJhbXMsIChcIm5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCJcIikpO1xuICAgICAgICByZXR1cm4gX2NyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aCkge1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0ge307XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGhMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXRoID0gcGF0aExpc3RbaV07XG4gICAgICAgIHZhciByZWNvcmQkMSA9IHBhdGhNYXBbcGF0aF07XG4gICAgICAgIGlmIChtYXRjaFJvdXRlKHJlY29yZCQxLnJlZ2V4LCBsb2NhdGlvbi5wYXRoLCBsb2NhdGlvbi5wYXJhbXMpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShyZWNvcmQkMSwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIG5vIG1hdGNoXG4gICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0IChcbiAgICByZWNvcmQsXG4gICAgbG9jYXRpb25cbiAgKSB7XG4gICAgdmFyIG9yaWdpbmFsUmVkaXJlY3QgPSByZWNvcmQucmVkaXJlY3Q7XG4gICAgdmFyIHJlZGlyZWN0ID0gdHlwZW9mIG9yaWdpbmFsUmVkaXJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcmlnaW5hbFJlZGlyZWN0KGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIG51bGwsIHJvdXRlcikpXG4gICAgICAgIDogb3JpZ2luYWxSZWRpcmVjdDtcblxuICAgIGlmICh0eXBlb2YgcmVkaXJlY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZWRpcmVjdCA9IHsgcGF0aDogcmVkaXJlY3QgfTtcbiAgICB9XG5cbiAgICBpZiAoIXJlZGlyZWN0IHx8IHR5cGVvZiByZWRpcmVjdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgZmFsc2UsIChcImludmFsaWQgcmVkaXJlY3Qgb3B0aW9uOiBcIiArIChKU09OLnN0cmluZ2lmeShyZWRpcmVjdCkpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG5cbiAgICB2YXIgcmUgPSByZWRpcmVjdDtcbiAgICB2YXIgbmFtZSA9IHJlLm5hbWU7XG4gICAgdmFyIHBhdGggPSByZS5wYXRoO1xuICAgIHZhciBxdWVyeSA9IGxvY2F0aW9uLnF1ZXJ5O1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgcGFyYW1zID0gbG9jYXRpb24ucGFyYW1zO1xuICAgIHF1ZXJ5ID0gcmUuaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgPyByZS5xdWVyeSA6IHF1ZXJ5O1xuICAgIGhhc2ggPSByZS5oYXNPd25Qcm9wZXJ0eSgnaGFzaCcpID8gcmUuaGFzaCA6IGhhc2g7XG4gICAgcGFyYW1zID0gcmUuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpID8gcmUucGFyYW1zIDogcGFyYW1zO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIC8vIHJlc29sdmVkIG5hbWVkIGRpcmVjdFxuICAgICAgdmFyIHRhcmdldFJlY29yZCA9IG5hbWVNYXBbbmFtZV07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhc3NlcnQodGFyZ2V0UmVjb3JkLCAoXCJyZWRpcmVjdCBmYWlsZWQ6IG5hbWVkIHJvdXRlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgbm90IGZvdW5kLlwiKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2goe1xuICAgICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSwgdW5kZWZpbmVkLCBsb2NhdGlvbilcbiAgICB9IGVsc2UgaWYgKHBhdGgpIHtcbiAgICAgIC8vIDEuIHJlc29sdmUgcmVsYXRpdmUgcmVkaXJlY3RcbiAgICAgIHZhciByYXdQYXRoID0gcmVzb2x2ZVJlY29yZFBhdGgocGF0aCwgcmVjb3JkKTtcbiAgICAgIC8vIDIuIHJlc29sdmUgcGFyYW1zXG4gICAgICB2YXIgcmVzb2x2ZWRQYXRoID0gZmlsbFBhcmFtcyhyYXdQYXRoLCBwYXJhbXMsIChcInJlZGlyZWN0IHJvdXRlIHdpdGggcGF0aCBcXFwiXCIgKyByYXdQYXRoICsgXCJcXFwiXCIpKTtcbiAgICAgIC8vIDMuIHJlbWF0Y2ggd2l0aCBleGlzdGluZyBxdWVyeSBhbmQgaGFzaFxuICAgICAgcmV0dXJuIG1hdGNoKHtcbiAgICAgICAgX25vcm1hbGl6ZWQ6IHRydWUsXG4gICAgICAgIHBhdGg6IHJlc29sdmVkUGF0aCxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgICBoYXNoOiBoYXNoXG4gICAgICB9LCB1bmRlZmluZWQsIGxvY2F0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKGZhbHNlLCAoXCJpbnZhbGlkIHJlZGlyZWN0IG9wdGlvbjogXCIgKyAoSlNPTi5zdHJpbmdpZnkocmVkaXJlY3QpKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9jcmVhdGVSb3V0ZShudWxsLCBsb2NhdGlvbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhbGlhcyAoXG4gICAgcmVjb3JkLFxuICAgIGxvY2F0aW9uLFxuICAgIG1hdGNoQXNcbiAgKSB7XG4gICAgdmFyIGFsaWFzZWRQYXRoID0gZmlsbFBhcmFtcyhtYXRjaEFzLCBsb2NhdGlvbi5wYXJhbXMsIChcImFsaWFzZWQgcm91dGUgd2l0aCBwYXRoIFxcXCJcIiArIG1hdGNoQXMgKyBcIlxcXCJcIikpO1xuICAgIHZhciBhbGlhc2VkTWF0Y2ggPSBtYXRjaCh7XG4gICAgICBfbm9ybWFsaXplZDogdHJ1ZSxcbiAgICAgIHBhdGg6IGFsaWFzZWRQYXRoXG4gICAgfSk7XG4gICAgaWYgKGFsaWFzZWRNYXRjaCkge1xuICAgICAgdmFyIG1hdGNoZWQgPSBhbGlhc2VkTWF0Y2gubWF0Y2hlZDtcbiAgICAgIHZhciBhbGlhc2VkUmVjb3JkID0gbWF0Y2hlZFttYXRjaGVkLmxlbmd0aCAtIDFdO1xuICAgICAgbG9jYXRpb24ucGFyYW1zID0gYWxpYXNlZE1hdGNoLnBhcmFtcztcbiAgICAgIHJldHVybiBfY3JlYXRlUm91dGUoYWxpYXNlZFJlY29yZCwgbG9jYXRpb24pXG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlUm91dGUobnVsbCwgbG9jYXRpb24pXG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlUm91dGUgKFxuICAgIHJlY29yZCxcbiAgICBsb2NhdGlvbixcbiAgICByZWRpcmVjdGVkRnJvbVxuICApIHtcbiAgICBpZiAocmVjb3JkICYmIHJlY29yZC5yZWRpcmVjdCkge1xuICAgICAgcmV0dXJuIHJlZGlyZWN0KHJlY29yZCwgcmVkaXJlY3RlZEZyb20gfHwgbG9jYXRpb24pXG4gICAgfVxuICAgIGlmIChyZWNvcmQgJiYgcmVjb3JkLm1hdGNoQXMpIHtcbiAgICAgIHJldHVybiBhbGlhcyhyZWNvcmQsIGxvY2F0aW9uLCByZWNvcmQubWF0Y2hBcylcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZVJvdXRlKHJlY29yZCwgbG9jYXRpb24sIHJlZGlyZWN0ZWRGcm9tLCByb3V0ZXIpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hdGNoOiBtYXRjaCxcbiAgICBhZGRSb3V0ZXM6IGFkZFJvdXRlc1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUm91dGUgKFxuICByZWdleCxcbiAgcGF0aCxcbiAgcGFyYW1zXG4pIHtcbiAgdmFyIG0gPSBwYXRoLm1hdGNoKHJlZ2V4KTtcblxuICBpZiAoIW0pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAxLCBsZW4gPSBtLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIGtleSA9IHJlZ2V4LmtleXNbaSAtIDFdO1xuICAgIHZhciB2YWwgPSB0eXBlb2YgbVtpXSA9PT0gJ3N0cmluZycgPyBkZWNvZGVVUklDb21wb25lbnQobVtpXSkgOiBtW2ldO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcmFtc1trZXkubmFtZV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVJlY29yZFBhdGggKHBhdGgsIHJlY29yZCkge1xuICByZXR1cm4gcmVzb2x2ZVBhdGgocGF0aCwgcmVjb3JkLnBhcmVudCA/IHJlY29yZC5wYXJlbnQucGF0aCA6ICcvJywgdHJ1ZSlcbn1cblxuLyogICovXG5cblxudmFyIHBvc2l0aW9uU3RvcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5mdW5jdGlvbiBzZXR1cFNjcm9sbCAoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKCk7XG4gICAgaWYgKGUuc3RhdGUgJiYgZS5zdGF0ZS5rZXkpIHtcbiAgICAgIHNldFN0YXRlS2V5KGUuc3RhdGUua2V5KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTY3JvbGwgKFxuICByb3V0ZXIsXG4gIHRvLFxuICBmcm9tLFxuICBpc1BvcFxuKSB7XG4gIGlmICghcm91dGVyLmFwcCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJlaGF2aW9yID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3I7XG4gIGlmICghYmVoYXZpb3IpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBiZWhhdmlvciA9PT0gJ2Z1bmN0aW9uJywgXCJzY3JvbGxCZWhhdmlvciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICAvLyB3YWl0IHVudGlsIHJlLXJlbmRlciBmaW5pc2hlcyBiZWZvcmUgc2Nyb2xsaW5nXG4gIHJvdXRlci5hcHAuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIHZhciBzaG91bGRTY3JvbGwgPSBiZWhhdmlvcih0bywgZnJvbSwgaXNQb3AgPyBwb3NpdGlvbiA6IG51bGwpO1xuICAgIGlmICghc2hvdWxkU2Nyb2xsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGlzT2JqZWN0ID0gdHlwZW9mIHNob3VsZFNjcm9sbCA9PT0gJ29iamVjdCc7XG4gICAgaWYgKGlzT2JqZWN0ICYmIHR5cGVvZiBzaG91bGRTY3JvbGwuc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNob3VsZFNjcm9sbC5zZWxlY3Rvcik7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IHNob3VsZFNjcm9sbC5vZmZzZXQgJiYgdHlwZW9mIHNob3VsZFNjcm9sbC5vZmZzZXQgPT09ICdvYmplY3QnID8gc2hvdWxkU2Nyb2xsLm9mZnNldCA6IHt9O1xuICAgICAgICBvZmZzZXQgPSBub3JtYWxpemVPZmZzZXQob2Zmc2V0KTtcbiAgICAgICAgcG9zaXRpb24gPSBnZXRFbGVtZW50UG9zaXRpb24oZWwsIG9mZnNldCk7XG4gICAgICB9IGVsc2UgaWYgKGlzVmFsaWRQb3NpdGlvbihzaG91bGRTY3JvbGwpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbm9ybWFsaXplUG9zaXRpb24oc2hvdWxkU2Nyb2xsKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0ICYmIGlzVmFsaWRQb3NpdGlvbihzaG91bGRTY3JvbGwpKSB7XG4gICAgICBwb3NpdGlvbiA9IG5vcm1hbGl6ZVBvc2l0aW9uKHNob3VsZFNjcm9sbCk7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2F2ZVNjcm9sbFBvc2l0aW9uICgpIHtcbiAgdmFyIGtleSA9IGdldFN0YXRlS2V5KCk7XG4gIGlmIChrZXkpIHtcbiAgICBwb3NpdGlvblN0b3JlW2tleV0gPSB7XG4gICAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBvc2l0aW9uICgpIHtcbiAgdmFyIGtleSA9IGdldFN0YXRlS2V5KCk7XG4gIGlmIChrZXkpIHtcbiAgICByZXR1cm4gcG9zaXRpb25TdG9yZVtrZXldXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFBvc2l0aW9uIChlbCwgb2Zmc2V0KSB7XG4gIHZhciBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIGRvY1JlY3QgPSBkb2NFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHg6IGVsUmVjdC5sZWZ0IC0gZG9jUmVjdC5sZWZ0IC0gb2Zmc2V0LngsXG4gICAgeTogZWxSZWN0LnRvcCAtIGRvY1JlY3QudG9wIC0gb2Zmc2V0LnlcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUG9zaXRpb24gKG9iaikge1xuICByZXR1cm4gaXNOdW1iZXIob2JqLngpIHx8IGlzTnVtYmVyKG9iai55KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQb3NpdGlvbiAob2JqKSB7XG4gIHJldHVybiB7XG4gICAgeDogaXNOdW1iZXIob2JqLngpID8gb2JqLnggOiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogaXNOdW1iZXIob2JqLnkpID8gb2JqLnkgOiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPZmZzZXQgKG9iaikge1xuICByZXR1cm4ge1xuICAgIHg6IGlzTnVtYmVyKG9iai54KSA/IG9iai54IDogMCxcbiAgICB5OiBpc051bWJlcihvYmoueSkgPyBvYmoueSA6IDBcbiAgfVxufVxuXG5mdW5jdGlvbiBpc051bWJlciAodikge1xuICByZXR1cm4gdHlwZW9mIHYgPT09ICdudW1iZXInXG59XG5cbi8qICAqL1xuXG52YXIgc3VwcG9ydHNQdXNoU3RhdGUgPSBpbkJyb3dzZXIgJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKFxuICAgICh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJlxuICAgIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiZcbiAgICB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiZcbiAgICB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5XG59KSgpO1xuXG4vLyB1c2UgVXNlciBUaW1pbmcgYXBpIChpZiBwcmVzZW50KSBmb3IgbW9yZSBhY2N1cmF0ZSBrZXkgcHJlY2lzaW9uXG52YXIgVGltZSA9IGluQnJvd3NlciAmJiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vd1xuICA/IHdpbmRvdy5wZXJmb3JtYW5jZVxuICA6IERhdGU7XG5cbnZhciBfa2V5ID0gZ2VuS2V5KCk7XG5cbmZ1bmN0aW9uIGdlbktleSAoKSB7XG4gIHJldHVybiBUaW1lLm5vdygpLnRvRml4ZWQoMylcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdGVLZXkgKCkge1xuICByZXR1cm4gX2tleVxufVxuXG5mdW5jdGlvbiBzZXRTdGF0ZUtleSAoa2V5KSB7XG4gIF9rZXkgPSBrZXk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdGF0ZSAodXJsLCByZXBsYWNlKSB7XG4gIHNhdmVTY3JvbGxQb3NpdGlvbigpO1xuICAvLyB0cnkuLi5jYXRjaCB0aGUgcHVzaFN0YXRlIGNhbGwgdG8gZ2V0IGFyb3VuZCBTYWZhcmlcbiAgLy8gRE9NIEV4Y2VwdGlvbiAxOCB3aGVyZSBpdCBsaW1pdHMgdG8gMTAwIHB1c2hTdGF0ZSBjYWxsc1xuICB2YXIgaGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB0cnkge1xuICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7IGtleTogX2tleSB9LCAnJywgdXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2tleSA9IGdlbktleSgpO1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IF9rZXkgfSwgJycsIHVybCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgd2luZG93LmxvY2F0aW9uW3JlcGxhY2UgPyAncmVwbGFjZScgOiAnYXNzaWduJ10odXJsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlU3RhdGUgKHVybCkge1xuICBwdXNoU3RhdGUodXJsLCB0cnVlKTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJ1blF1ZXVlIChxdWV1ZSwgZm4sIGNiKSB7XG4gIHZhciBzdGVwID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgY2IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHF1ZXVlW2luZGV4XSkge1xuICAgICAgICBmbihxdWV1ZVtpbmRleF0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzdGVwKGluZGV4ICsgMSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RlcChpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc3RlcCgwKTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlc29sdmVBc3luY0NvbXBvbmVudHMgKG1hdGNoZWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgbmV4dCkge1xuICAgIHZhciBoYXNBc3luYyA9IGZhbHNlO1xuICAgIHZhciBwZW5kaW5nID0gMDtcbiAgICB2YXIgZXJyb3IgPSBudWxsO1xuXG4gICAgZmxhdE1hcENvbXBvbmVudHMobWF0Y2hlZCwgZnVuY3Rpb24gKGRlZiwgXywgbWF0Y2gsIGtleSkge1xuICAgICAgLy8gaWYgaXQncyBhIGZ1bmN0aW9uIGFuZCBkb2Vzbid0IGhhdmUgY2lkIGF0dGFjaGVkLFxuICAgICAgLy8gYXNzdW1lIGl0J3MgYW4gYXN5bmMgY29tcG9uZW50IHJlc29sdmUgZnVuY3Rpb24uXG4gICAgICAvLyB3ZSBhcmUgbm90IHVzaW5nIFZ1ZSdzIGRlZmF1bHQgYXN5bmMgcmVzb2x2aW5nIG1lY2hhbmlzbSBiZWNhdXNlXG4gICAgICAvLyB3ZSB3YW50IHRvIGhhbHQgdGhlIG5hdmlnYXRpb24gdW50aWwgdGhlIGluY29taW5nIGNvbXBvbmVudCBoYXMgYmVlblxuICAgICAgLy8gcmVzb2x2ZWQuXG4gICAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWYuY2lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaGFzQXN5bmMgPSB0cnVlO1xuICAgICAgICBwZW5kaW5nKys7XG5cbiAgICAgICAgdmFyIHJlc29sdmUgPSBvbmNlKGZ1bmN0aW9uIChyZXNvbHZlZERlZikge1xuICAgICAgICAgIGlmIChyZXNvbHZlZERlZi5fX2VzTW9kdWxlICYmIHJlc29sdmVkRGVmLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkRGVmID0gcmVzb2x2ZWREZWYuZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc2F2ZSByZXNvbHZlZCBvbiBhc3luYyBmYWN0b3J5IGluIGNhc2UgaXQncyB1c2VkIGVsc2V3aGVyZVxuICAgICAgICAgIGRlZi5yZXNvbHZlZCA9IHR5cGVvZiByZXNvbHZlZERlZiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgPyByZXNvbHZlZERlZlxuICAgICAgICAgICAgOiBfVnVlLmV4dGVuZChyZXNvbHZlZERlZik7XG4gICAgICAgICAgbWF0Y2guY29tcG9uZW50c1trZXldID0gcmVzb2x2ZWREZWY7XG4gICAgICAgICAgcGVuZGluZy0tO1xuICAgICAgICAgIGlmIChwZW5kaW5nIDw9IDApIHtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciByZWplY3QgPSBvbmNlKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgICAgICB2YXIgbXNnID0gXCJGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQgXCIgKyBrZXkgKyBcIjogXCIgKyByZWFzb247XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKGZhbHNlLCBtc2cpO1xuICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yID0gaXNFcnJvcihyZWFzb24pXG4gICAgICAgICAgICAgID8gcmVhc29uXG4gICAgICAgICAgICAgIDogbmV3IEVycm9yKG1zZyk7XG4gICAgICAgICAgICBuZXh0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzID0gZGVmKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJlcy50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5ldyBzeW50YXggaW4gVnVlIDIuM1xuICAgICAgICAgICAgdmFyIGNvbXAgPSByZXMuY29tcG9uZW50O1xuICAgICAgICAgICAgaWYgKGNvbXAgJiYgdHlwZW9mIGNvbXAudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBjb21wLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghaGFzQXN5bmMpIHsgbmV4dCgpOyB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmxhdE1hcENvbXBvbmVudHMgKFxuICBtYXRjaGVkLFxuICBmblxuKSB7XG4gIHJldHVybiBmbGF0dGVuKG1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGZuKFxuICAgICAgbS5jb21wb25lbnRzW2tleV0sXG4gICAgICBtLmluc3RhbmNlc1trZXldLFxuICAgICAgbSwga2V5XG4gICAgKTsgfSlcbiAgfSkpXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4gKGFycikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJyKVxufVxuXG4vLyBpbiBXZWJwYWNrIDIsIHJlcXVpcmUuZW5zdXJlIG5vdyBhbHNvIHJldHVybnMgYSBQcm9taXNlXG4vLyBzbyB0aGUgcmVzb2x2ZS9yZWplY3QgZnVuY3Rpb25zIG1heSBnZXQgY2FsbGVkIGFuIGV4dHJhIHRpbWVcbi8vIGlmIHRoZSB1c2VyIHVzZXMgYW4gYXJyb3cgZnVuY3Rpb24gc2hvcnRoYW5kIHRoYXQgaGFwcGVucyB0b1xuLy8gcmV0dXJuIHRoYXQgUHJvbWlzZS5cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICBpZiAoY2FsbGVkKSB7IHJldHVybiB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncylcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIEhpc3RvcnkgPSBmdW5jdGlvbiBIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIHRoaXMuYmFzZSA9IG5vcm1hbGl6ZUJhc2UoYmFzZSk7XG4gIC8vIHN0YXJ0IHdpdGggYSByb3V0ZSBvYmplY3QgdGhhdCBzdGFuZHMgZm9yIFwibm93aGVyZVwiXG4gIHRoaXMuY3VycmVudCA9IFNUQVJUO1xuICB0aGlzLnBlbmRpbmcgPSBudWxsO1xuICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gIHRoaXMucmVhZHlDYnMgPSBbXTtcbiAgdGhpcy5yZWFkeUVycm9yQ2JzID0gW107XG4gIHRoaXMuZXJyb3JDYnMgPSBbXTtcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbiAoY2IpIHtcbiAgdGhpcy5jYiA9IGNiO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUub25SZWFkeSA9IGZ1bmN0aW9uIG9uUmVhZHkgKGNiLCBlcnJvckNiKSB7XG4gIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgY2IoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlYWR5Q2JzLnB1c2goY2IpO1xuICAgIGlmIChlcnJvckNiKSB7XG4gICAgICB0aGlzLnJlYWR5RXJyb3JDYnMucHVzaChlcnJvckNiKTtcbiAgICB9XG4gIH1cbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiBvbkVycm9yIChlcnJvckNiKSB7XG4gIHRoaXMuZXJyb3JDYnMucHVzaChlcnJvckNiKTtcbn07XG5cbkhpc3RvcnkucHJvdG90eXBlLnRyYW5zaXRpb25UbyA9IGZ1bmN0aW9uIHRyYW5zaXRpb25UbyAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgcm91dGUgPSB0aGlzLnJvdXRlci5tYXRjaChsb2NhdGlvbiwgdGhpcy5jdXJyZW50KTtcbiAgdGhpcy5jb25maXJtVHJhbnNpdGlvbihyb3V0ZSwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS51cGRhdGVSb3V0ZShyb3V0ZSk7XG4gICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB0aGlzJDEuZW5zdXJlVVJMKCk7XG5cbiAgICAvLyBmaXJlIHJlYWR5IGNicyBvbmNlXG4gICAgaWYgKCF0aGlzJDEucmVhZHkpIHtcbiAgICAgIHRoaXMkMS5yZWFkeSA9IHRydWU7XG4gICAgICB0aGlzJDEucmVhZHlDYnMuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgY2Iocm91dGUpOyB9KTtcbiAgICB9XG4gIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAob25BYm9ydCkge1xuICAgICAgb25BYm9ydChlcnIpO1xuICAgIH1cbiAgICBpZiAoZXJyICYmICF0aGlzJDEucmVhZHkpIHtcbiAgICAgIHRoaXMkMS5yZWFkeSA9IHRydWU7XG4gICAgICB0aGlzJDEucmVhZHlFcnJvckNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyBjYihlcnIpOyB9KTtcbiAgICB9XG4gIH0pO1xufTtcblxuSGlzdG9yeS5wcm90b3R5cGUuY29uZmlybVRyYW5zaXRpb24gPSBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvbiAocm91dGUsIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudDtcbiAgdmFyIGFib3J0ID0gZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChpc0Vycm9yKGVycikpIHtcbiAgICAgIGlmICh0aGlzJDEuZXJyb3JDYnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMkMS5lcnJvckNicy5mb3JFYWNoKGZ1bmN0aW9uIChjYikgeyBjYihlcnIpOyB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oZmFsc2UsICd1bmNhdWdodCBlcnJvciBkdXJpbmcgcm91dGUgbmF2aWdhdGlvbjonKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgICBvbkFib3J0ICYmIG9uQWJvcnQoZXJyKTtcbiAgfTtcbiAgaWYgKFxuICAgIGlzU2FtZVJvdXRlKHJvdXRlLCBjdXJyZW50KSAmJlxuICAgIC8vIGluIHRoZSBjYXNlIHRoZSByb3V0ZSBtYXAgaGFzIGJlZW4gZHluYW1pY2FsbHkgYXBwZW5kZWQgdG9cbiAgICByb3V0ZS5tYXRjaGVkLmxlbmd0aCA9PT0gY3VycmVudC5tYXRjaGVkLmxlbmd0aFxuICApIHtcbiAgICB0aGlzLmVuc3VyZVVSTCgpO1xuICAgIHJldHVybiBhYm9ydCgpXG4gIH1cblxuICB2YXIgcmVmID0gcmVzb2x2ZVF1ZXVlKHRoaXMuY3VycmVudC5tYXRjaGVkLCByb3V0ZS5tYXRjaGVkKTtcbiAgICB2YXIgdXBkYXRlZCA9IHJlZi51cGRhdGVkO1xuICAgIHZhciBkZWFjdGl2YXRlZCA9IHJlZi5kZWFjdGl2YXRlZDtcbiAgICB2YXIgYWN0aXZhdGVkID0gcmVmLmFjdGl2YXRlZDtcblxuICB2YXIgcXVldWUgPSBbXS5jb25jYXQoXG4gICAgLy8gaW4tY29tcG9uZW50IGxlYXZlIGd1YXJkc1xuICAgIGV4dHJhY3RMZWF2ZUd1YXJkcyhkZWFjdGl2YXRlZCksXG4gICAgLy8gZ2xvYmFsIGJlZm9yZSBob29rc1xuICAgIHRoaXMucm91dGVyLmJlZm9yZUhvb2tzLFxuICAgIC8vIGluLWNvbXBvbmVudCB1cGRhdGUgaG9va3NcbiAgICBleHRyYWN0VXBkYXRlSG9va3ModXBkYXRlZCksXG4gICAgLy8gaW4tY29uZmlnIGVudGVyIGd1YXJkc1xuICAgIGFjdGl2YXRlZC5tYXAoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0uYmVmb3JlRW50ZXI7IH0pLFxuICAgIC8vIGFzeW5jIGNvbXBvbmVudHNcbiAgICByZXNvbHZlQXN5bmNDb21wb25lbnRzKGFjdGl2YXRlZClcbiAgKTtcblxuICB0aGlzLnBlbmRpbmcgPSByb3V0ZTtcbiAgdmFyIGl0ZXJhdG9yID0gZnVuY3Rpb24gKGhvb2ssIG5leHQpIHtcbiAgICBpZiAodGhpcyQxLnBlbmRpbmcgIT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gYWJvcnQoKVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgaG9vayhyb3V0ZSwgY3VycmVudCwgZnVuY3Rpb24gKHRvKSB7XG4gICAgICAgIGlmICh0byA9PT0gZmFsc2UgfHwgaXNFcnJvcih0bykpIHtcbiAgICAgICAgICAvLyBuZXh0KGZhbHNlKSAtPiBhYm9ydCBuYXZpZ2F0aW9uLCBlbnN1cmUgY3VycmVudCBVUkxcbiAgICAgICAgICB0aGlzJDEuZW5zdXJlVVJMKHRydWUpO1xuICAgICAgICAgIGFib3J0KHRvKTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0eXBlb2YgdG8gPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgKHR5cGVvZiB0byA9PT0gJ29iamVjdCcgJiYgKFxuICAgICAgICAgICAgdHlwZW9mIHRvLnBhdGggPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgdG8ubmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICApKVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBuZXh0KCcvJykgb3IgbmV4dCh7IHBhdGg6ICcvJyB9KSAtPiByZWRpcmVjdFxuICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0byA9PT0gJ29iamVjdCcgJiYgdG8ucmVwbGFjZSkge1xuICAgICAgICAgICAgdGhpcyQxLnJlcGxhY2UodG8pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzJDEucHVzaCh0byk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbmZpcm0gdHJhbnNpdGlvbiBhbmQgcGFzcyBvbiB0aGUgdmFsdWVcbiAgICAgICAgICBuZXh0KHRvKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYWJvcnQoZSk7XG4gICAgfVxuICB9O1xuXG4gIHJ1blF1ZXVlKHF1ZXVlLCBpdGVyYXRvciwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3N0RW50ZXJDYnMgPSBbXTtcbiAgICB2YXIgaXNWYWxpZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMkMS5jdXJyZW50ID09PSByb3V0ZTsgfTtcbiAgICAvLyB3YWl0IHVudGlsIGFzeW5jIGNvbXBvbmVudHMgYXJlIHJlc29sdmVkIGJlZm9yZVxuICAgIC8vIGV4dHJhY3RpbmcgaW4tY29tcG9uZW50IGVudGVyIGd1YXJkc1xuICAgIHZhciBlbnRlckd1YXJkcyA9IGV4dHJhY3RFbnRlckd1YXJkcyhhY3RpdmF0ZWQsIHBvc3RFbnRlckNicywgaXNWYWxpZCk7XG4gICAgdmFyIHF1ZXVlID0gZW50ZXJHdWFyZHMuY29uY2F0KHRoaXMkMS5yb3V0ZXIucmVzb2x2ZUhvb2tzKTtcbiAgICBydW5RdWV1ZShxdWV1ZSwgaXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzJDEucGVuZGluZyAhPT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGFib3J0KClcbiAgICAgIH1cbiAgICAgIHRoaXMkMS5wZW5kaW5nID0gbnVsbDtcbiAgICAgIG9uQ29tcGxldGUocm91dGUpO1xuICAgICAgaWYgKHRoaXMkMS5yb3V0ZXIuYXBwKSB7XG4gICAgICAgIHRoaXMkMS5yb3V0ZXIuYXBwLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcG9zdEVudGVyQ2JzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7IGNiKCk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5IaXN0b3J5LnByb3RvdHlwZS51cGRhdGVSb3V0ZSA9IGZ1bmN0aW9uIHVwZGF0ZVJvdXRlIChyb3V0ZSkge1xuICB2YXIgcHJldiA9IHRoaXMuY3VycmVudDtcbiAgdGhpcy5jdXJyZW50ID0gcm91dGU7XG4gIHRoaXMuY2IgJiYgdGhpcy5jYihyb3V0ZSk7XG4gIHRoaXMucm91dGVyLmFmdGVySG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgIGhvb2sgJiYgaG9vayhyb3V0ZSwgcHJldik7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplQmFzZSAoYmFzZSkge1xuICBpZiAoIWJhc2UpIHtcbiAgICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgICAvLyByZXNwZWN0IDxiYXNlPiB0YWdcbiAgICAgIHZhciBiYXNlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJyk7XG4gICAgICBiYXNlID0gKGJhc2VFbCAmJiBiYXNlRWwuZ2V0QXR0cmlidXRlKCdocmVmJykpIHx8ICcvJztcbiAgICAgIC8vIHN0cmlwIGZ1bGwgVVJMIG9yaWdpblxuICAgICAgYmFzZSA9IGJhc2UucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC9bXlxcL10rLywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlID0gJy8nO1xuICAgIH1cbiAgfVxuICAvLyBtYWtlIHN1cmUgdGhlcmUncyB0aGUgc3RhcnRpbmcgc2xhc2hcbiAgaWYgKGJhc2UuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICBiYXNlID0gJy8nICsgYmFzZTtcbiAgfVxuICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2hcbiAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXFwvJC8sICcnKVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUXVldWUgKFxuICBjdXJyZW50LFxuICBuZXh0XG4pIHtcbiAgdmFyIGk7XG4gIHZhciBtYXggPSBNYXRoLm1heChjdXJyZW50Lmxlbmd0aCwgbmV4dC5sZW5ndGgpO1xuICBmb3IgKGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICBpZiAoY3VycmVudFtpXSAhPT0gbmV4dFtpXSkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVkOiBuZXh0LnNsaWNlKDAsIGkpLFxuICAgIGFjdGl2YXRlZDogbmV4dC5zbGljZShpKSxcbiAgICBkZWFjdGl2YXRlZDogY3VycmVudC5zbGljZShpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RHdWFyZHMgKFxuICByZWNvcmRzLFxuICBuYW1lLFxuICBiaW5kLFxuICByZXZlcnNlXG4pIHtcbiAgdmFyIGd1YXJkcyA9IGZsYXRNYXBDb21wb25lbnRzKHJlY29yZHMsIGZ1bmN0aW9uIChkZWYsIGluc3RhbmNlLCBtYXRjaCwga2V5KSB7XG4gICAgdmFyIGd1YXJkID0gZXh0cmFjdEd1YXJkKGRlZiwgbmFtZSk7XG4gICAgaWYgKGd1YXJkKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShndWFyZClcbiAgICAgICAgPyBndWFyZC5tYXAoZnVuY3Rpb24gKGd1YXJkKSB7IHJldHVybiBiaW5kKGd1YXJkLCBpbnN0YW5jZSwgbWF0Y2gsIGtleSk7IH0pXG4gICAgICAgIDogYmluZChndWFyZCwgaW5zdGFuY2UsIG1hdGNoLCBrZXkpXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZsYXR0ZW4ocmV2ZXJzZSA/IGd1YXJkcy5yZXZlcnNlKCkgOiBndWFyZHMpXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RHdWFyZCAoXG4gIGRlZixcbiAga2V5XG4pIHtcbiAgaWYgKHR5cGVvZiBkZWYgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBleHRlbmQgbm93IHNvIHRoYXQgZ2xvYmFsIG1peGlucyBhcmUgYXBwbGllZC5cbiAgICBkZWYgPSBfVnVlLmV4dGVuZChkZWYpO1xuICB9XG4gIHJldHVybiBkZWYub3B0aW9uc1trZXldXG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RMZWF2ZUd1YXJkcyAoZGVhY3RpdmF0ZWQpIHtcbiAgcmV0dXJuIGV4dHJhY3RHdWFyZHMoZGVhY3RpdmF0ZWQsICdiZWZvcmVSb3V0ZUxlYXZlJywgYmluZEd1YXJkLCB0cnVlKVxufVxuXG5mdW5jdGlvbiBleHRyYWN0VXBkYXRlSG9va3MgKHVwZGF0ZWQpIHtcbiAgcmV0dXJuIGV4dHJhY3RHdWFyZHModXBkYXRlZCwgJ2JlZm9yZVJvdXRlVXBkYXRlJywgYmluZEd1YXJkKVxufVxuXG5mdW5jdGlvbiBiaW5kR3VhcmQgKGd1YXJkLCBpbnN0YW5jZSkge1xuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYm91bmRSb3V0ZUd1YXJkICgpIHtcbiAgICAgIHJldHVybiBndWFyZC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0RW50ZXJHdWFyZHMgKFxuICBhY3RpdmF0ZWQsXG4gIGNicyxcbiAgaXNWYWxpZFxuKSB7XG4gIHJldHVybiBleHRyYWN0R3VhcmRzKGFjdGl2YXRlZCwgJ2JlZm9yZVJvdXRlRW50ZXInLCBmdW5jdGlvbiAoZ3VhcmQsIF8sIG1hdGNoLCBrZXkpIHtcbiAgICByZXR1cm4gYmluZEVudGVyR3VhcmQoZ3VhcmQsIG1hdGNoLCBrZXksIGNicywgaXNWYWxpZClcbiAgfSlcbn1cblxuZnVuY3Rpb24gYmluZEVudGVyR3VhcmQgKFxuICBndWFyZCxcbiAgbWF0Y2gsXG4gIGtleSxcbiAgY2JzLFxuICBpc1ZhbGlkXG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJvdXRlRW50ZXJHdWFyZCAodG8sIGZyb20sIG5leHQpIHtcbiAgICByZXR1cm4gZ3VhcmQodG8sIGZyb20sIGZ1bmN0aW9uIChjYikge1xuICAgICAgbmV4dChjYik7XG4gICAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNicy5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyAjNzUwXG4gICAgICAgICAgLy8gaWYgYSByb3V0ZXItdmlldyBpcyB3cmFwcGVkIHdpdGggYW4gb3V0LWluIHRyYW5zaXRpb24sXG4gICAgICAgICAgLy8gdGhlIGluc3RhbmNlIG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgYXQgdGhpcyB0aW1lLlxuICAgICAgICAgIC8vIHdlIHdpbGwgbmVlZCB0byBwb2xsIGZvciByZWdpc3RyYXRpb24gdW50aWwgY3VycmVudCByb3V0ZVxuICAgICAgICAgIC8vIGlzIG5vIGxvbmdlciB2YWxpZC5cbiAgICAgICAgICBwb2xsKGNiLCBtYXRjaC5pbnN0YW5jZXMsIGtleSwgaXNWYWxpZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gcG9sbCAoXG4gIGNiLCAvLyBzb21laG93IGZsb3cgY2Fubm90IGluZmVyIHRoaXMgaXMgYSBmdW5jdGlvblxuICBpbnN0YW5jZXMsXG4gIGtleSxcbiAgaXNWYWxpZFxuKSB7XG4gIGlmIChpbnN0YW5jZXNba2V5XSkge1xuICAgIGNiKGluc3RhbmNlc1trZXldKTtcbiAgfSBlbHNlIGlmIChpc1ZhbGlkKCkpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBvbGwoY2IsIGluc3RhbmNlcywga2V5LCBpc1ZhbGlkKTtcbiAgICB9LCAxNik7XG4gIH1cbn1cblxuLyogICovXG5cblxudmFyIEhUTUw1SGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSQkMSkge1xuICBmdW5jdGlvbiBIVE1MNUhpc3RvcnkgKHJvdXRlciwgYmFzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgSGlzdG9yeSQkMS5jYWxsKHRoaXMsIHJvdXRlciwgYmFzZSk7XG5cbiAgICB2YXIgZXhwZWN0U2Nyb2xsID0gcm91dGVyLm9wdGlvbnMuc2Nyb2xsQmVoYXZpb3I7XG5cbiAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICBzZXR1cFNjcm9sbCgpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXMkMS5jdXJyZW50O1xuICAgICAgdGhpcyQxLnRyYW5zaXRpb25UbyhnZXRMb2NhdGlvbih0aGlzJDEuYmFzZSksIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICBpZiAoZXhwZWN0U2Nyb2xsKSB7XG4gICAgICAgICAgaGFuZGxlU2Nyb2xsKHJvdXRlciwgcm91dGUsIGN1cnJlbnQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICggSGlzdG9yeSQkMSApIEhUTUw1SGlzdG9yeS5fX3Byb3RvX18gPSBIaXN0b3J5JCQxO1xuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSGlzdG9yeSQkMSAmJiBIaXN0b3J5JCQxLnByb3RvdHlwZSApO1xuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSFRNTDVIaXN0b3J5O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyAobikge1xuICAgIHdpbmRvdy5oaXN0b3J5LmdvKG4pO1xuICB9O1xuXG4gIEhUTUw1SGlzdG9yeS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgZnJvbVJvdXRlID0gcmVmLmN1cnJlbnQ7XG4gICAgdGhpcy50cmFuc2l0aW9uVG8obG9jYXRpb24sIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgcHVzaFN0YXRlKGNsZWFuUGF0aCh0aGlzJDEuYmFzZSArIHJvdXRlLmZ1bGxQYXRoKSk7XG4gICAgICBoYW5kbGVTY3JvbGwodGhpcyQxLnJvdXRlciwgcm91dGUsIGZyb21Sb3V0ZSwgZmFsc2UpO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB9LCBvbkFib3J0KTtcbiAgfTtcblxuICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIGZyb21Sb3V0ZSA9IHJlZi5jdXJyZW50O1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VTdGF0ZShjbGVhblBhdGgodGhpcyQxLmJhc2UgKyByb3V0ZS5mdWxsUGF0aCkpO1xuICAgICAgaGFuZGxlU2Nyb2xsKHRoaXMkMS5yb3V0ZXIsIHJvdXRlLCBmcm9tUm91dGUsIGZhbHNlKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5lbnN1cmVVUkwgPSBmdW5jdGlvbiBlbnN1cmVVUkwgKHB1c2gpIHtcbiAgICBpZiAoZ2V0TG9jYXRpb24odGhpcy5iYXNlKSAhPT0gdGhpcy5jdXJyZW50LmZ1bGxQYXRoKSB7XG4gICAgICB2YXIgY3VycmVudCA9IGNsZWFuUGF0aCh0aGlzLmJhc2UgKyB0aGlzLmN1cnJlbnQuZnVsbFBhdGgpO1xuICAgICAgcHVzaCA/IHB1c2hTdGF0ZShjdXJyZW50KSA6IHJlcGxhY2VTdGF0ZShjdXJyZW50KTtcbiAgICB9XG4gIH07XG5cbiAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5nZXRDdXJyZW50TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24gKCkge1xuICAgIHJldHVybiBnZXRMb2NhdGlvbih0aGlzLmJhc2UpXG4gIH07XG5cbiAgcmV0dXJuIEhUTUw1SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG5mdW5jdGlvbiBnZXRMb2NhdGlvbiAoYmFzZSkge1xuICB2YXIgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgaWYgKGJhc2UgJiYgcGF0aC5pbmRleE9mKGJhc2UpID09PSAwKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZS5sZW5ndGgpO1xuICB9XG4gIHJldHVybiAocGF0aCB8fCAnLycpICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoXG59XG5cbi8qICAqL1xuXG5cbnZhciBIYXNoSGlzdG9yeSA9IChmdW5jdGlvbiAoSGlzdG9yeSQkMSkge1xuICBmdW5jdGlvbiBIYXNoSGlzdG9yeSAocm91dGVyLCBiYXNlLCBmYWxsYmFjaykge1xuICAgIEhpc3RvcnkkJDEuY2FsbCh0aGlzLCByb3V0ZXIsIGJhc2UpO1xuICAgIC8vIGNoZWNrIGhpc3RvcnkgZmFsbGJhY2sgZGVlcGxpbmtpbmdcbiAgICBpZiAoZmFsbGJhY2sgJiYgY2hlY2tGYWxsYmFjayh0aGlzLmJhc2UpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZW5zdXJlU2xhc2goKTtcbiAgfVxuXG4gIGlmICggSGlzdG9yeSQkMSApIEhhc2hIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3RvcnkkJDE7XG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEhpc3RvcnkkJDEgJiYgSGlzdG9yeSQkMS5wcm90b3R5cGUgKTtcbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gSGFzaEhpc3Rvcnk7XG5cbiAgLy8gdGhpcyBpcyBkZWxheWVkIHVudGlsIHRoZSBhcHAgbW91bnRzXG4gIC8vIHRvIGF2b2lkIHRoZSBoYXNoY2hhbmdlIGxpc3RlbmVyIGJlaW5nIGZpcmVkIHRvbyBlYXJseVxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuc2V0dXBMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXR1cExpc3RlbmVycyAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghZW5zdXJlU2xhc2goKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMkMS50cmFuc2l0aW9uVG8oZ2V0SGFzaCgpLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgcmVwbGFjZUhhc2gocm91dGUuZnVsbFBhdGgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHB1c2hIYXNoKHJvdXRlLmZ1bGxQYXRoKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChsb2NhdGlvbiwgb25Db21wbGV0ZSwgb25BYm9ydCkge1xuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJlcGxhY2VIYXNoKHJvdXRlLmZ1bGxQYXRoKTtcbiAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZShyb3V0ZSk7XG4gICAgfSwgb25BYm9ydCk7XG4gIH07XG5cbiAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICBIYXNoSGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMIChwdXNoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQuZnVsbFBhdGg7XG4gICAgaWYgKGdldEhhc2goKSAhPT0gY3VycmVudCkge1xuICAgICAgcHVzaCA/IHB1c2hIYXNoKGN1cnJlbnQpIDogcmVwbGFjZUhhc2goY3VycmVudCk7XG4gICAgfVxuICB9O1xuXG4gIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5nZXRDdXJyZW50TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24gKCkge1xuICAgIHJldHVybiBnZXRIYXNoKClcbiAgfTtcblxuICByZXR1cm4gSGFzaEhpc3Rvcnk7XG59KEhpc3RvcnkpKTtcblxuZnVuY3Rpb24gY2hlY2tGYWxsYmFjayAoYmFzZSkge1xuICB2YXIgbG9jYXRpb24gPSBnZXRMb2NhdGlvbihiYXNlKTtcbiAgaWYgKCEvXlxcLyMvLnRlc3QobG9jYXRpb24pKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXG4gICAgICBjbGVhblBhdGgoYmFzZSArICcvIycgKyBsb2NhdGlvbilcbiAgICApO1xuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gZW5zdXJlU2xhc2ggKCkge1xuICB2YXIgcGF0aCA9IGdldEhhc2goKTtcbiAgaWYgKHBhdGguY2hhckF0KDApID09PSAnLycpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJlcGxhY2VIYXNoKCcvJyArIHBhdGgpO1xuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gZ2V0SGFzaCAoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgdmFyIGluZGV4ID0gaHJlZi5pbmRleE9mKCcjJyk7XG4gIHJldHVybiBpbmRleCA9PT0gLTEgPyAnJyA6IGhyZWYuc2xpY2UoaW5kZXggKyAxKVxufVxuXG5mdW5jdGlvbiBwdXNoSGFzaCAocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoIChwYXRoKSB7XG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHZhciBpID0gaHJlZi5pbmRleE9mKCcjJyk7XG4gIHZhciBiYXNlID0gaSA+PSAwID8gaHJlZi5zbGljZSgwLCBpKSA6IGhyZWY7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKChiYXNlICsgXCIjXCIgKyBwYXRoKSk7XG59XG5cbi8qICAqL1xuXG5cbnZhciBBYnN0cmFjdEhpc3RvcnkgPSAoZnVuY3Rpb24gKEhpc3RvcnkkJDEpIHtcbiAgZnVuY3Rpb24gQWJzdHJhY3RIaXN0b3J5IChyb3V0ZXIsIGJhc2UpIHtcbiAgICBIaXN0b3J5JCQxLmNhbGwodGhpcywgcm91dGVyLCBiYXNlKTtcbiAgICB0aGlzLnN0YWNrID0gW107XG4gICAgdGhpcy5pbmRleCA9IC0xO1xuICB9XG5cbiAgaWYgKCBIaXN0b3J5JCQxICkgQWJzdHJhY3RIaXN0b3J5Ll9fcHJvdG9fXyA9IEhpc3RvcnkkJDE7XG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBIaXN0b3J5JCQxICYmIEhpc3RvcnkkJDEucHJvdG90eXBlICk7XG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBBYnN0cmFjdEhpc3Rvcnk7XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMudHJhbnNpdGlvblRvKGxvY2F0aW9uLCBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHRoaXMkMS5zdGFjayA9IHRoaXMkMS5zdGFjay5zbGljZSgwLCB0aGlzJDEuaW5kZXggKyAxKS5jb25jYXQocm91dGUpO1xuICAgICAgdGhpcyQxLmluZGV4Kys7XG4gICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUocm91dGUpO1xuICAgIH0sIG9uQWJvcnQpO1xuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UgKGxvY2F0aW9uLCBvbkNvbXBsZXRlLCBvbkFib3J0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB0aGlzLnRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICB0aGlzJDEuc3RhY2sgPSB0aGlzJDEuc3RhY2suc2xpY2UoMCwgdGhpcyQxLmluZGV4KS5jb25jYXQocm91dGUpO1xuICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKHJvdXRlKTtcbiAgICB9LCBvbkFib3J0KTtcbiAgfTtcblxuICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28gKG4pIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciB0YXJnZXRJbmRleCA9IHRoaXMuaW5kZXggKyBuO1xuICAgIGlmICh0YXJnZXRJbmRleCA8IDAgfHwgdGFyZ2V0SW5kZXggPj0gdGhpcy5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgcm91dGUgPSB0aGlzLnN0YWNrW3RhcmdldEluZGV4XTtcbiAgICB0aGlzLmNvbmZpcm1UcmFuc2l0aW9uKHJvdXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzJDEuaW5kZXggPSB0YXJnZXRJbmRleDtcbiAgICAgIHRoaXMkMS51cGRhdGVSb3V0ZShyb3V0ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQWJzdHJhY3RIaXN0b3J5LnByb3RvdHlwZS5nZXRDdXJyZW50TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24gKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBjdXJyZW50ID8gY3VycmVudC5mdWxsUGF0aCA6ICcvJ1xuICB9O1xuXG4gIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZW5zdXJlVVJMID0gZnVuY3Rpb24gZW5zdXJlVVJMICgpIHtcbiAgICAvLyBub29wXG4gIH07XG5cbiAgcmV0dXJuIEFic3RyYWN0SGlzdG9yeTtcbn0oSGlzdG9yeSkpO1xuXG4vKiAgKi9cblxudmFyIFZ1ZVJvdXRlciA9IGZ1bmN0aW9uIFZ1ZVJvdXRlciAob3B0aW9ucykge1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICB0aGlzLmFwcCA9IG51bGw7XG4gIHRoaXMuYXBwcyA9IFtdO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLmJlZm9yZUhvb2tzID0gW107XG4gIHRoaXMucmVzb2x2ZUhvb2tzID0gW107XG4gIHRoaXMuYWZ0ZXJIb29rcyA9IFtdO1xuICB0aGlzLm1hdGNoZXIgPSBjcmVhdGVNYXRjaGVyKG9wdGlvbnMucm91dGVzIHx8IFtdLCB0aGlzKTtcblxuICB2YXIgbW9kZSA9IG9wdGlvbnMubW9kZSB8fCAnaGFzaCc7XG4gIHRoaXMuZmFsbGJhY2sgPSBtb2RlID09PSAnaGlzdG9yeScgJiYgIXN1cHBvcnRzUHVzaFN0YXRlICYmIG9wdGlvbnMuZmFsbGJhY2sgIT09IGZhbHNlO1xuICBpZiAodGhpcy5mYWxsYmFjaykge1xuICAgIG1vZGUgPSAnaGFzaCc7XG4gIH1cbiAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICBtb2RlID0gJ2Fic3RyYWN0JztcbiAgfVxuICB0aGlzLm1vZGUgPSBtb2RlO1xuXG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgJ2hpc3RvcnknOlxuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhUTUw1SGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UpO1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdoYXNoJzpcbiAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIYXNoSGlzdG9yeSh0aGlzLCBvcHRpb25zLmJhc2UsIHRoaXMuZmFsbGJhY2spO1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdhYnN0cmFjdCc6XG4gICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgQWJzdHJhY3RIaXN0b3J5KHRoaXMsIG9wdGlvbnMuYmFzZSk7XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhc3NlcnQoZmFsc2UsIChcImludmFsaWQgbW9kZTogXCIgKyBtb2RlKSk7XG4gICAgICB9XG4gIH1cbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGN1cnJlbnRSb3V0ZToge30gfTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uIG1hdGNoIChcbiAgcmF3LFxuICBjdXJyZW50LFxuICByZWRpcmVjdGVkRnJvbVxuKSB7XG4gIHJldHVybiB0aGlzLm1hdGNoZXIubWF0Y2gocmF3LCBjdXJyZW50LCByZWRpcmVjdGVkRnJvbSlcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5jdXJyZW50Um91dGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5oaXN0b3J5ICYmIHRoaXMuaGlzdG9yeS5jdXJyZW50XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0IChhcHAgLyogVnVlIGNvbXBvbmVudCBpbnN0YW5jZSAqLykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0KFxuICAgIGluc3RhbGwuaW5zdGFsbGVkLFxuICAgIFwibm90IGluc3RhbGxlZC4gTWFrZSBzdXJlIHRvIGNhbGwgYFZ1ZS51c2UoVnVlUm91dGVyKWAgXCIgK1xuICAgIFwiYmVmb3JlIGNyZWF0aW5nIHJvb3QgaW5zdGFuY2UuXCJcbiAgKTtcblxuICB0aGlzLmFwcHMucHVzaChhcHApO1xuXG4gIC8vIG1haW4gYXBwIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gIGlmICh0aGlzLmFwcCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgdmFyIGhpc3RvcnkgPSB0aGlzLmhpc3Rvcnk7XG5cbiAgaWYgKGhpc3RvcnkgaW5zdGFuY2VvZiBIVE1MNUhpc3RvcnkpIHtcbiAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhoaXN0b3J5LmdldEN1cnJlbnRMb2NhdGlvbigpKTtcbiAgfSBlbHNlIGlmIChoaXN0b3J5IGluc3RhbmNlb2YgSGFzaEhpc3RvcnkpIHtcbiAgICB2YXIgc2V0dXBIYXNoTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBoaXN0b3J5LnNldHVwTGlzdGVuZXJzKCk7XG4gICAgfTtcbiAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhcbiAgICAgIGhpc3RvcnkuZ2V0Q3VycmVudExvY2F0aW9uKCksXG4gICAgICBzZXR1cEhhc2hMaXN0ZW5lcixcbiAgICAgIHNldHVwSGFzaExpc3RlbmVyXG4gICAgKTtcbiAgfVxuXG4gIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgIHRoaXMkMS5hcHBzLmZvckVhY2goZnVuY3Rpb24gKGFwcCkge1xuICAgICAgYXBwLl9yb3V0ZSA9IHJvdXRlO1xuICAgIH0pO1xuICB9KTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmVmb3JlRWFjaCA9IGZ1bmN0aW9uIGJlZm9yZUVhY2ggKGZuKSB7XG4gIHJldHVybiByZWdpc3Rlckhvb2sodGhpcy5iZWZvcmVIb29rcywgZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLmJlZm9yZVJlc29sdmUgPSBmdW5jdGlvbiBiZWZvcmVSZXNvbHZlIChmbikge1xuICByZXR1cm4gcmVnaXN0ZXJIb29rKHRoaXMucmVzb2x2ZUhvb2tzLCBmbilcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYWZ0ZXJFYWNoID0gZnVuY3Rpb24gYWZ0ZXJFYWNoIChmbikge1xuICByZXR1cm4gcmVnaXN0ZXJIb29rKHRoaXMuYWZ0ZXJIb29rcywgZm4pXG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLm9uUmVhZHkgPSBmdW5jdGlvbiBvblJlYWR5IChjYiwgZXJyb3JDYikge1xuICB0aGlzLmhpc3Rvcnkub25SZWFkeShjYiwgZXJyb3JDYik7XG59O1xuXG5WdWVSb3V0ZXIucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiBvbkVycm9yIChlcnJvckNiKSB7XG4gIHRoaXMuaGlzdG9yeS5vbkVycm9yKGVycm9yQ2IpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgdGhpcy5oaXN0b3J5LnB1c2gobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSAobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpIHtcbiAgdGhpcy5oaXN0b3J5LnJlcGxhY2UobG9jYXRpb24sIG9uQ29tcGxldGUsIG9uQWJvcnQpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5nbyA9IGZ1bmN0aW9uIGdvIChuKSB7XG4gIHRoaXMuaGlzdG9yeS5nbyhuKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYmFjayA9IGZ1bmN0aW9uIGJhY2sgKCkge1xuICB0aGlzLmdvKC0xKTtcbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuZm9yd2FyZCA9IGZ1bmN0aW9uIGZvcndhcmQgKCkge1xuICB0aGlzLmdvKDEpO1xufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5nZXRNYXRjaGVkQ29tcG9uZW50cyA9IGZ1bmN0aW9uIGdldE1hdGNoZWRDb21wb25lbnRzICh0bykge1xuICB2YXIgcm91dGUgPSB0b1xuICAgID8gdG8ubWF0Y2hlZFxuICAgICAgPyB0b1xuICAgICAgOiB0aGlzLnJlc29sdmUodG8pLnJvdXRlXG4gICAgOiB0aGlzLmN1cnJlbnRSb3V0ZTtcbiAgaWYgKCFyb3V0ZSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIHJldHVybiBbXS5jb25jYXQuYXBwbHkoW10sIHJvdXRlLm1hdGNoZWQubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG0uY29tcG9uZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBtLmNvbXBvbmVudHNba2V5XVxuICAgIH0pXG4gIH0pKVxufTtcblxuVnVlUm91dGVyLnByb3RvdHlwZS5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZSAoXG4gIHRvLFxuICBjdXJyZW50LFxuICBhcHBlbmRcbikge1xuICB2YXIgbG9jYXRpb24gPSBub3JtYWxpemVMb2NhdGlvbihcbiAgICB0byxcbiAgICBjdXJyZW50IHx8IHRoaXMuaGlzdG9yeS5jdXJyZW50LFxuICAgIGFwcGVuZCxcbiAgICB0aGlzXG4gICk7XG4gIHZhciByb3V0ZSA9IHRoaXMubWF0Y2gobG9jYXRpb24sIGN1cnJlbnQpO1xuICB2YXIgZnVsbFBhdGggPSByb3V0ZS5yZWRpcmVjdGVkRnJvbSB8fCByb3V0ZS5mdWxsUGF0aDtcbiAgdmFyIGJhc2UgPSB0aGlzLmhpc3RvcnkuYmFzZTtcbiAgdmFyIGhyZWYgPSBjcmVhdGVIcmVmKGJhc2UsIGZ1bGxQYXRoLCB0aGlzLm1vZGUpO1xuICByZXR1cm4ge1xuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICByb3V0ZTogcm91dGUsXG4gICAgaHJlZjogaHJlZixcbiAgICAvLyBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICAgIG5vcm1hbGl6ZWRUbzogbG9jYXRpb24sXG4gICAgcmVzb2x2ZWQ6IHJvdXRlXG4gIH1cbn07XG5cblZ1ZVJvdXRlci5wcm90b3R5cGUuYWRkUm91dGVzID0gZnVuY3Rpb24gYWRkUm91dGVzIChyb3V0ZXMpIHtcbiAgdGhpcy5tYXRjaGVyLmFkZFJvdXRlcyhyb3V0ZXMpO1xuICBpZiAodGhpcy5oaXN0b3J5LmN1cnJlbnQgIT09IFNUQVJUKSB7XG4gICAgdGhpcy5oaXN0b3J5LnRyYW5zaXRpb25Ubyh0aGlzLmhpc3RvcnkuZ2V0Q3VycmVudExvY2F0aW9uKCkpO1xuICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVnVlUm91dGVyLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVySG9vayAobGlzdCwgZm4pIHtcbiAgbGlzdC5wdXNoKGZuKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9IGxpc3QuaW5kZXhPZihmbik7XG4gICAgaWYgKGkgPiAtMSkgeyBsaXN0LnNwbGljZShpLCAxKTsgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhyZWYgKGJhc2UsIGZ1bGxQYXRoLCBtb2RlKSB7XG4gIHZhciBwYXRoID0gbW9kZSA9PT0gJ2hhc2gnID8gJyMnICsgZnVsbFBhdGggOiBmdWxsUGF0aDtcbiAgcmV0dXJuIGJhc2UgPyBjbGVhblBhdGgoYmFzZSArICcvJyArIHBhdGgpIDogcGF0aFxufVxuXG5WdWVSb3V0ZXIuaW5zdGFsbCA9IGluc3RhbGw7XG5WdWVSb3V0ZXIudmVyc2lvbiA9ICcyLjcuMCc7XG5cbmlmIChpbkJyb3dzZXIgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlLnVzZShWdWVSb3V0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZ1ZVJvdXRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1yb3V0ZXIvZGlzdC92dWUtcm91dGVyLmNvbW1vbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuY29tbW9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBzdG9yZSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi9yb3V0ZXJcIjtcblxucmVxdWlyZShcIi4vYm9vdHN0cmFwXCIpO1xucmVxdWlyZShcIi4vY29tcG9uZW50c1wiKTtcbnJlcXVpcmUoXCIuL2RpcmVjdGl2ZXNcIik7XG5yZXF1aXJlKFwiLi9taXhpbnNcIik7XG5cbndpbmRvdy5zdG9yZSA9IHN0b3JlO1xuXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZTtcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIHN0b3JlLFxuICByb3V0ZXJcbn0pO1xuXG53aW5kb3cuYXBwID0gYXBwO1xuXG5hcHAuJG1vdW50KFwiI2FwcC1sYXlvdXRcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOGMwMWUxN2VcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRGFzaGJvYXJkLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvYXBwL0Rhc2hib2FyZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIERhc2hib2FyZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOGMwMWUxN2VcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04YzAxZTE3ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvRGFzaGJvYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9EYXNoYm9hcmQudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUm9vbXMudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zY2FiNDAyNVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Sb29tcy52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9Sb29tcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJvb21zLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zY2FiNDAyNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNjYWI0MDI1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9Sb29tcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUm9vbXMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUm9vbS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTA0ZjEwNGZjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Jvb20udnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9Sb29tLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5LnN1YnN0cigwLCAyKSAhPT0gXCJfX1wifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUm9vbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDRmMTA0ZmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNGYxMDRmY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9Sb29tLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL1Jvb20udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQm9va2luZy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ3M2UwNDAxXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Jvb2tpbmcudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0Jvb2tpbmcudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBCb29raW5nLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NzNlMDQwMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ3M2UwNDAxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0Jvb2tpbmcudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQm9va2luZ0F0dGVuZGVlcy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAyZjhiZGE4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Jvb2tpbmdBdHRlbmRlZXMudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0Jvb2tpbmdBdHRlbmRlZXMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBCb29raW5nQXR0ZW5kZWVzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMmY4YmRhOFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAyZjhiZGE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQm9va2luZ0F0dGVuZGVlcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0Jvb2tpbmdBdHRlbmRlZXMudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ2FsZW5kYXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xZDAzNzM0NlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DYWxlbmRhci52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQ2FsZW5kYXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDYWxlbmRhci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWQwMzczNDZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xZDAzNzM0NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm9vbS9jb21wb25lbnRzL0NhbGVuZGFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yb29tL2NvbXBvbmVudHMvQ2FsZW5kYXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBSb29tcyAgZnJvbSBcIi4vUm9vbXMudnVlXCI7XG5pbXBvcnQgUm9vbSAgZnJvbSBcIi4vcm9vbS9Sb29tLnZ1ZVwiO1xuaW1wb3J0IERhc2hib2FyZCAgZnJvbSBcIi4vRGFzaGJvYXJkLnZ1ZVwiO1xuaW1wb3J0IEFwcFNwYWNlIGZyb20gJy4vLi4vY29tcG9uZW50cy9BcHBTcGFjZS52dWUnO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlTm90Rm91bmQudnVlXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgY29tcG9uZW50OiBBcHBTcGFjZSxcbiAgICBjaGlsZHJlbiA6IFtcbiAgICAgICAgeyBwYXRoOiBcIi9cIiwgY29tcG9uZW50OiBEYXNoYm9hcmQsIG5hbWU6IFwiZGFzaGJvYXJkXCJ9LFxuICAgICAgICB7IHBhdGg6IFwiL3Byb3ZpZGVyLzpwcm92aWRlci9yb29tc1wiLCBuYW1lOiBcInByb3ZpZGVyX3Jvb21zXCIsIGNvbXBvbmVudDogUm9vbXMgfSxcbiAgICBdXG4gIH0sXG4gIHsgcGF0aDogXCIvcm9vbXMvOnJvb21cIiwgbmFtZTogXCJyb29tXCIsIGNvbXBvbmVudDogUm9vbSB9LFxuICB7IHBhdGg6IFwiKlwiLCBjb21wb25lbnQ6IFBhZ2VOb3RGb3VuZCB9XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvcm91dGVzLmpzIiwiLypcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8IEdsb2JhbCBWYXJpYWJsZXNcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8XG4gKi9cblxud2luZG93Lmxhcm91dGUgPSByZXF1aXJlKFwiLi9sYXJvdXRlXCIpO1xud2luZG93Lm1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnQtdGltZXpvbmVcIik7XG5yZXF1aXJlKFwibW9tZW50LXByZWNpc2UtcmFuZ2UtcGx1Z2luXCIpO1xubW9tZW50LnR6LnNldERlZmF1bHQoXCJVVENcIik7XG5cbi8qXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfCBBeGlvcyBTZXR1cFxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHxcbiAqL1xuXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcblxud2luZG93LmF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLVJlcXVlc3RlZC1XaXRoXCJdID0gXCJYTUxIdHRwUmVxdWVzdFwiO1xud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1DU1JGLVRPS0VOXCJdID0gd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuO1xuXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gIGNvbmZpZyA9PiB7XG4gICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7XG4gICAgICBlYXNpbmc6IFwiZWFzZVwiLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIHNob3dTcGlubmVyOiBmYWxzZVxuICAgIH0pO1xuICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xuICAgIE5Qcm9ncmVzcy5pbmMoMC4zKTtcbiAgICByZXR1cm4gY29uZmlnO1xuICB9LFxuICBmdW5jdGlvbihlcnJvcikge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbik7XG5cbmF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gIHJlc3BvbnNlID0+IHtcbiAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSxcbiAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4pO1xuXG4vKlxuIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIHwgTGFyYXZlbCBFY2hvIFNldHVwXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfFxuICovXG5cbmltcG9ydCBFY2hvIGZyb20gXCJsYXJhdmVsLWVjaG9cIjtcbmltcG9ydCBQdXNoZXIgZnJvbSBcInB1c2hlci1qc1wiO1xuXG5QdXNoZXIubG9nID0gbXNnID0+IHtcbiAgLy8gY29uc29sZS5sb2cobXNnKTtcbn07XG5cbndpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuICBjbHVzdGVyOiAndXMyJyxcbiAgYnJvYWRjYXN0ZXI6IFwicHVzaGVyXCIsXG4gIGtleTogTGFyYXZlbC5wdXNoZXJLZXksXG59KTtcblxuLypcbiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiB8IFNlbnRyeSArIFJhdmVuIFNldHVwXG4gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gfFxuICovXG4vLyBpbXBvcnQgUmF2ZW4gZnJvbSAncmF2ZW4tanMnO1xuLy8gaW1wb3J0IFJhdmVuVnVlIGZyb20gJ3JhdmVuLWpzL3BsdWdpbnMvdnVlJztcbi8vXG4vLyBpZihMYXJhdmVsLmVudiAhPT0gJ2xvY2FsJykge1xuLy8gICAgIFJhdmVuXG4vLyAgICAgICAgIC5jb25maWcoJ2h0dHBzOi8vNTAxMjRlODlkNjg5NDViYjhmNzg3NjY2ZjA0ODI4MDdAc2VudHJ5LmNvZGVwaWVyLmlvLzQnKVxuLy8gICAgICAgICAuYWRkUGx1Z2luKFJhdmVuVnVlLCBWdWUpXG4vLyAgICAgICAgIC5pbnN0YWxsKCk7XG4vLyB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsImNsYXNzIEVycm9ycyB7XG4gIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBFcnJvcnMgaW5zdGFuY2UuXG4gICAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cblxuICAvKipcbiAgICAgKiBEZXRlcm1pbmUgaWYgYW4gZXJyb3JzIGV4aXN0cyBmb3IgdGhlIGdpdmVuIGZpZWxkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG4gICAgICovXG4gIGhhcyhmaWVsZCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gIH1cblxuICAvKipcbiAgICAgKiBEZXRlcm1pbmUgaWYgd2UgaGF2ZSBhbnkgZXJyb3JzLlxuICAgICAqL1xuICBhbnkoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAgICogUmV0cmlldmUgdGhlIGVycm9yIG1lc3NhZ2UgZm9yIGEgZmllbGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcbiAgICAgKi9cbiAgZ2V0KGZpZWxkKSB7XG4gICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICAgKiBSZWNvcmQgdGhlIG5ldyBlcnJvcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAgICovXG4gIHJlY29yZChlcnJvcnMpIHtcbiAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgfVxuXG4gIC8qKlxuICAgICAqIENsZWFyIG9uZSBvciBhbGwgZXJyb3IgZmllbGRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gZmllbGRcbiAgICAgKi9cbiAgY2xlYXIoZmllbGQpIHtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF07XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY2xhc3Nlcy9FcnJvcnMuanMiLCJpbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi9SZXF1ZXN0XCI7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZXF1ZXN0IHtcbiAgLyoqXG4gICAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgICAqL1xuICByZXNldCgpIHtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICB0aGlzW2ZpZWxkXSA9IHRoaXMub3JpZ2luYWxEYXRhW2ZpZWxkXTtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgZW1wdHkoKSB7XG4gICAgZm9yIChjb25zdCBmaWVsZCBpbiB0aGlzLmVtcHR5RGF0YSkge1xuICAgICAgdGhpc1tmaWVsZF0gPSB0aGlzLmVtcHR5RGF0YVtmaWVsZF07XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIEhhbmRsZSBhIHN1Y2Nlc3NmdWwgZm9ybSBzdWJtaXNzaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgb25TdWNjZXNzKGRhdGEpIHtcbiAgICBpZiAodGhpcy5yZXNldERhdGEpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgfVxuXG4gIGRpZmYoKSB7XG4gICAgcmV0dXJuIF8ucmVkdWNlKFxuICAgICAgdGhpcy5kYXRhKCksXG4gICAgICAocmVzdWx0LCB2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBfLmlzRXF1YWwodmFsdWUsIHRoaXMub3JpZ2luYWxEYXRhW2tleV0pXG4gICAgICAgICAgPyByZXN1bHRcbiAgICAgICAgICA6IHJlc3VsdC5jb25jYXQoa2V5KTtcbiAgICAgIH0sXG4gICAgICBbXVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY2xhc3Nlcy9Gb3JtLmpzIiwiaW1wb3J0IEVycm9ycyBmcm9tIFwiLi9FcnJvcnNcIjtcblxuY2xhc3MgUmVxdWVzdCB7XG4gIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBGb3JtIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3QsIEZvcm1EYXRhfSBkYXRhXG4gICAgICogQHBhcmFtIHtib29sZWFufSByZXNldFxuICAgICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhLCByZXNldCkge1xuICAgIHRoaXMucmVzZXREYXRhID0gcmVzZXQgfHwgZmFsc2U7XG5cbiAgICBpZiAoZGF0YSAmJiAhXy5pc09iamVjdChkYXRhKSkge1xuICAgICAgdGhpc1tcInZhbHVlXCJdID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbXB0eURhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgICAgdGhpc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIEZldGNoIGFsbCByZWxldmFudCBkYXRhIGZvciB0aGUgZm9ybS5cbiAgICAgKi9cbiAgZGF0YSgpIHtcbiAgICBpZiAodGhpcy5mb3JtRGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybURhdGE7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuXG4gICAgZGVsZXRlIGRhdGEuZXJyb3JzO1xuICAgIGRlbGV0ZSBkYXRhLnJlc2V0RGF0YTtcbiAgICBkZWxldGUgZGF0YS5lbXB0eURhdGE7XG4gICAgZGVsZXRlIGRhdGEub3JpZ2luYWxEYXRhO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICAgKiBTZW5kIGEgR0VUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gbXV0YXRpb25zXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnXG4gICAgICovXG4gIGdldCh1cmwsIG11dGF0aW9ucywgY29uZmlnKSB7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBpbiBjb25maWcpIHtcbiAgICAgIHRoaXNbdmFsdWVdID0gY29uZmlnW3ZhbHVlXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXG4gICAgICBcImdldFwiLFxuICAgICAgdGhpcy5kYXRhUXVlcnlTdHJpbmcoKSA/IHVybCArIFwiP1wiICsgdGhpcy5kYXRhUXVlcnlTdHJpbmcoKSA6IHVybCxcbiAgICAgIG11dGF0aW9uc1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICAgKiBTZW5kIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IG11dGF0aW9uc1xuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNvbmZpZ1xuICAgICAqL1xuICBwb3N0KHVybCwgbXV0YXRpb25zLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwb3N0XCIsIHVybCwgbXV0YXRpb25zLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2VuZCBhIFBVVCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IG11dGF0aW9uc1xuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNvbmZpZ1xuICAgICAqL1xuICBwdXQodXJsLCBtdXRhdGlvbnMsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInB1dFwiLCB1cmwsIG11dGF0aW9ucywgY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNlbmQgYSBQQVRDSCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IG11dGF0aW9uc1xuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNvbmZpZ1xuICAgICAqL1xuICBwYXRjaCh1cmwsIG11dGF0aW9ucywgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicGF0Y2hcIiwgdXJsLCBtdXRhdGlvbnMsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICAgKiBTZW5kIGEgREVMRVRFIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gbXV0YXRpb25zXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnXG4gICAgICovXG4gIGRlbGV0ZSh1cmwsIG11dGF0aW9ucywgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwiZGVsZXRlXCIsIHVybCwgbXV0YXRpb25zLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmb3JtLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RUeXBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBtdXRhdGlvbnNcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjb25maWdcbiAgICAgKi9cbiAgc3VibWl0KHJlcXVlc3RUeXBlLCB1cmwsIG11dGF0aW9ucywgY29uZmlnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZvcm1EYXRhID8gdGhpcy5mb3JtRGF0YSA6IHRoaXMuZGF0YSgpO1xuXG4gICAgICBheGlvc1xuICAgICAgICBbcmVxdWVzdFR5cGVdKHVybCwgZGF0YSwgY29uZmlnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKCk7XG5cbiAgICAgICAgICAgIGlmIChfLmlzU3RyaW5nKG11dGF0aW9ucykpIHtcbiAgICAgICAgICAgICAgbXV0YXRpb25zID0gW211dGF0aW9uc107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtdXRhdGlvbnMgJiYgbXV0YXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICBfLmVhY2gobXV0YXRpb25zLCBtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgYXBwLiRzdG9yZS5jb21taXQobXV0YXRpb24sIHtcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgICAgICAgcmVxdWVzdERhdGE6IHRoaXMuZGF0YSgpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzZXREYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPcmlnaW5hbERhdGEoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBhcHAuaGFuZGxlQXBpRXJyb3IoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5vbkZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAgICogSGFuZGxlIGEgc3VjY2Vzc2Z1bCBmb3JtIHN1Ym1pc3Npb24uXG4gICAgICovXG4gIG9uU3VjY2VzcygpIHtcbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAgICogSGFuZGxlIGEgZmFpbGVkIGZvcm0gc3VibWlzc2lvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcbiAgICAgKi9cbiAgb25GYWlsKGVycm9ycykge1xuICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnJvcnMpO1xuICB9XG5cbiAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBkYXRhIHRvIHRoZSBvcmlnaW5hbCBkYXRhXG4gICAgICovXG4gIHNldE9yaWdpbmFsRGF0YSgpIHtcbiAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IHRoaXMuZGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgcXVlcnkgc3RyaW5nIGZvciB0aGUgZGF0YSBnaXZlblxuICAgICAqL1xuICBkYXRhUXVlcnlTdHJpbmcoKSB7XG4gICAgbGV0IHN0ciA9IFtdO1xuICAgIGxldCBkYXRhID0gdGhpcy5kYXRhKCk7XG4gICAgZm9yIChsZXQgZGF0dW0gaW4gZGF0YSlcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGRhdHVtKSkge1xuICAgICAgICBzdHIucHVzaChcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoZGF0dW0pICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtkYXR1bV0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jbGFzc2VzL1JlcXVlc3QuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IG51bGxcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU4MmVkNzU5XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FwcFNwYWNlLnZ1ZVwiKVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9BcHBTcGFjZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEFwcFNwYWNlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ODJlZDc1OVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU4MmVkNzU5XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwU3BhY2UudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9BcHBTcGFjZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DbGlwYm9hcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00N2M5YTRkMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGlwYm9hcmQudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENsaXBib2FyZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDdjOWE0ZDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00N2M5YTRkMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NsaXBib2FyZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9OYXZpZ2F0aW9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTE4ZmI3ODhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTmF2aWdhdGlvbi52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2aWdhdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIE5hdmlnYXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTExOGZiNzg4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTE4ZmI3ODhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTmF2aWdhdGlvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ob3RpZmljYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NDc1MmJkZlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Ob3RpZmljYXRpb24udnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIE5vdGlmaWNhdGlvbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDQ3NTJiZGZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NDc1MmJkZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ob3RpZmljYXRpb25zLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGRkYmYxMjRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTm90aWZpY2F0aW9ucy52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIE5vdGlmaWNhdGlvbnMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRkZGJmMTI0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGRkYmYxMjRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSBudWxsXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi05MjZiM2NkY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9QYWdlTm90Rm91bmQudnVlXCIpXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VOb3RGb3VuZC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFBhZ2VOb3RGb3VuZC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOTI2YjNjZGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi05MjZiM2NkY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VOb3RGb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BhZ2VOb3RGb3VuZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UaW1lQWdvLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjg2OGRjMzhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVGltZUFnby52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVGltZUFnby52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFRpbWVBZ28udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY4NjhkYzM4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjg2OGRjMzhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9UaW1lQWdvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVGltZUFnby52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ub29sVGlwLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTI2MGM5OWZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVG9vbFRpcC52dWVcIilcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9vbFRpcC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleS5zdWJzdHIoMCwgMikgIT09IFwiX19cIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFRvb2xUaXAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTEyNjBjOTlmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTI2MGM5OWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9Ub29sVGlwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9vbFRpcC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiVnVlLmNvbXBvbmVudChcIlRpbWVBZ29cIiwgcmVxdWlyZShcIi4vVGltZUFnby52dWVcIikpO1xuVnVlLmNvbXBvbmVudChcIlRvb2x0aXBcIiwgcmVxdWlyZShcIi4vVG9vbFRpcC52dWVcIikpO1xuVnVlLmNvbXBvbmVudChcIkNsaXBib2FyZFwiLCByZXF1aXJlKFwiLi9DbGlwYm9hcmQudnVlXCIpKTtcblZ1ZS5jb21wb25lbnQoXCJOYXZpZ2F0aW9uXCIsIHJlcXVpcmUoXCIuL05hdmlnYXRpb24udnVlXCIpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9pbmRleC5qcyIsIihmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgbGFyb3V0ZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHJvdXRlcyA9IHtcblxuICAgICAgICAgICAgYWJzb2x1dGU6IGZhbHNlLFxuICAgICAgICAgICAgcm9vdFVybDogJ2h0dHA6Ly9jb2RlcGllci5kZXYnLFxuICAgICAgICAgICAgcm91dGVzIDogW3tcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwib2F1dGhcXC9hdXRob3JpemVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQXV0aG9yaXphdGlvbkNvbnRyb2xsZXJAYXV0aG9yaXplXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvYXV0aG9yaXplXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXEFwcHJvdmVBdXRob3JpemF0aW9uQ29udHJvbGxlckBhcHByb3ZlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwib2F1dGhcXC9hdXRob3JpemVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcRGVueUF1dGhvcml6YXRpb25Db250cm9sbGVyQGRlbnlcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwib2F1dGhcXC90b2tlblwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxBY2Nlc3NUb2tlbkNvbnRyb2xsZXJAaXNzdWVUb2tlblwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvdG9rZW5zXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXEF1dGhvcml6ZWRBY2Nlc3NUb2tlbkNvbnRyb2xsZXJAZm9yVXNlclwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvdG9rZW5zXFwve3Rva2VuX2lkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxBdXRob3JpemVkQWNjZXNzVG9rZW5Db250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwib2F1dGhcXC90b2tlblxcL3JlZnJlc2hcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcVHJhbnNpZW50VG9rZW5Db250cm9sbGVyQHJlZnJlc2hcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJvYXV0aFxcL2NsaWVudHNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQ2xpZW50Q29udHJvbGxlckBmb3JVc2VyXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcIm9hdXRoXFwvY2xpZW50c1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxDbGllbnRDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiXSxcInVyaVwiOlwib2F1dGhcXC9jbGllbnRzXFwve2NsaWVudF9pZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJcXExhcmF2ZWxcXFBhc3Nwb3J0XFxIdHRwXFxDb250cm9sbGVyc1xcQ2xpZW50Q29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJvYXV0aFxcL2NsaWVudHNcXC97Y2xpZW50X2lkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxDbGllbnRDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJvYXV0aFxcL3Njb3Blc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxTY29wZUNvbnRyb2xsZXJAYWxsXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwib2F1dGhcXC9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXFBlcnNvbmFsQWNjZXNzVG9rZW5Db250cm9sbGVyQGZvclVzZXJcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwib2F1dGhcXC9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiXFxMYXJhdmVsXFxQYXNzcG9ydFxcSHR0cFxcQ29udHJvbGxlcnNcXFBlcnNvbmFsQWNjZXNzVG9rZW5Db250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwib2F1dGhcXC9wZXJzb25hbC1hY2Nlc3MtdG9rZW5zXFwve3Rva2VuX2lkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcUGFzc3BvcnRcXEh0dHBcXENvbnRyb2xsZXJzXFxQZXJzb25hbEFjY2Vzc1Rva2VuQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImJyb2FkY2FzdGluZ1xcL2F1dGhcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJJbGx1bWluYXRlXFxCcm9hZGNhc3RpbmdcXEJyb2FkY2FzdENvbnRyb2xsZXJAYXV0aGVudGljYXRlXCJ9LHtcImhvc3RcIjpcInByb3Zpc2lvbi5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIlxcL1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcQ3VzdG9tU2VydmVyUHJvdmlzaW9uaW5nQ29udHJvbGxlckBwcm92aXNpb25cIn0se1wiaG9zdFwiOlwicHJvdmlzaW9uLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInN0YXJ0XFwve3Byb3Zpc2lvbmluZ19rZXl9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxDdXN0b21TZXJ2ZXJQcm92aXNpb25pbmdDb250cm9sbGVyQHN0YXJ0XCJ9LHtcImhvc3RcIjpcInByb3Zpc2lvbi5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImtleXNcXC97cHJvdmlzaW9uaW5nX2tleX1cXC9wdWJsaWNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXEN1c3RvbVNlcnZlclByb3Zpc2lvbmluZ0NvbnRyb2xsZXJAcmV0dXJuUHVibGljS2V5XCJ9LHtcImhvc3RcIjpcInByb3Zpc2lvbi5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImtleXNcXC97cHJvdmlzaW9uaW5nX2tleVxcL3ByaXZhdGV9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxDdXN0b21TZXJ2ZXJQcm92aXNpb25pbmdDb250cm9sbGVyQHJldHVyblByaXZhdGVLZXlcIn0se1wiaG9zdFwiOlwicHJvdmlzaW9uLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiZW5kXFwve3Byb3Zpc2lvbmluZ19rZXl9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxDdXN0b21TZXJ2ZXJQcm92aXNpb25pbmdDb250cm9sbGVyQGVuZFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcLzJmYVwiLFwibmFtZVwiOlwiMmZhLmluZGV4XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFNlY29uZEF1dGhDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcLzJmYVwiLFwibmFtZVwiOlwiMmZhLnN0b3JlXCIsXCJhY3Rpb25cIjpcIkF1dGhcXFNlY29uZEF1dGhDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvMmZhXFwve2ZhfVwiLFwibmFtZVwiOlwiMmZhLnNob3dcIixcImFjdGlvblwiOlwiQXV0aFxcU2Vjb25kQXV0aENvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC8yZmFcXC97ZmF9XCIsXCJuYW1lXCI6XCIyZmEudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkF1dGhcXFNlY29uZEF1dGhDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcLzJmYVxcL3tmYX1cIixcIm5hbWVcIjpcIjJmYS5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFNlY29uZEF1dGhDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9tZVwiLFwibmFtZVwiOlwibWUuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcVXNlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC91c2VyXCIsXCJuYW1lXCI6XCJ1c2VyLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3VzZXJcIixcIm5hbWVcIjpcInVzZXIuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcVXNlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC91c2VyXFwve3VzZXJ9XCIsXCJuYW1lXCI6XCJ1c2VyLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcVXNlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC91c2VyXFwve3VzZXJ9XCIsXCJuYW1lXCI6XCJ1c2VyLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC91c2VyXFwve3VzZXJ9XCIsXCJuYW1lXCI6XCJ1c2VyLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcVXNlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXFwvaW52b2ljZXNcIixcIm5hbWVcIjpcImludm9pY2VzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkludm9pY2VDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXFwvaW52b2ljZXNcIixcIm5hbWVcIjpcImludm9pY2VzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkludm9pY2VDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cXC9pbnZvaWNlc1xcL3tpbnZvaWNlfVwiLFwibmFtZVwiOlwiaW52b2ljZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25JbnZvaWNlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXFwvaW52b2ljZXNcXC97aW52b2ljZX1cIixcIm5hbWVcIjpcImludm9pY2VzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25JbnZvaWNlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL2ludm9pY2VzXFwve2ludm9pY2V9XCIsXCJuYW1lXCI6XCJpbnZvaWNlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkludm9pY2VDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25Db250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb25cXC97c3Vic2NyaXB0aW9ufVwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uXFwve3N1YnNjcmlwdGlvbn1cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcU3Vic2NyaXB0aW9uXFxVc2VyU3Vic2NyaXB0aW9uQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvblxcL3tzdWJzY3JpcHRpb259XCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24uZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25Db250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvbi1jYXJkXCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24tY2FyZC5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25DYXJkQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvbi1jYXJkXCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24tY2FyZC5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25DYXJkQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3Vic2NyaXB0aW9uLWNhcmRcXC97c3Vic2NyaXB0aW9uX2NhcmR9XCIsXCJuYW1lXCI6XCJzdWJzY3JpcHRpb24tY2FyZC5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkNhcmRDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zdWJzY3JpcHRpb24tY2FyZFxcL3tzdWJzY3JpcHRpb25fY2FyZH1cIixcIm5hbWVcIjpcInN1YnNjcmlwdGlvbi1jYXJkLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25DYXJkQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3N1YnNjcmlwdGlvbi1jYXJkXFwve3N1YnNjcmlwdGlvbl9jYXJkfVwiLFwibmFtZVwiOlwic3Vic2NyaXB0aW9uLWNhcmQuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxTdWJzY3JpcHRpb25cXFVzZXJTdWJzY3JpcHRpb25DYXJkQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVwiLFwibmFtZVwiOlwidGVhbS5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVwiLFwibmFtZVwiOlwidGVhbS5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwve3RlYW19XCIsXCJuYW1lXCI6XCJ0ZWFtLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3t0ZWFtfVwiLFwibmFtZVwiOlwidGVhbS51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1Db250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC97dGVhbX1cIixcIm5hbWVcIjpcInRlYW0uZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC90ZWFtXFwve3RlYW19XFwvbWVtYmVyc1wiLFwibmFtZVwiOlwidGVhbS5tZW1iZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtTWVtYmVyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwvdGVhbVxcL3t0ZWFtfVxcL21lbWJlcnNcIixcIm5hbWVcIjpcInRlYW0ubWVtYmVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbU1lbWJlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwvdGVhbVxcL3t0ZWFtfVxcL21lbWJlcnNcXC97bWVtYmVyfVwiLFwibmFtZVwiOlwidGVhbS5tZW1iZXJzLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1NZW1iZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvdGVhbVxcL3RlYW1cXC97dGVhbX1cXC9tZW1iZXJzXFwve21lbWJlcn1cIixcIm5hbWVcIjpcInRlYW0ubWVtYmVycy51cGRhdGVcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1NZW1iZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3RlYW1cXC90ZWFtXFwve3RlYW19XFwvbWVtYmVyc1xcL3ttZW1iZXJ9XCIsXCJuYW1lXCI6XCJ0ZWFtLm1lbWJlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbU1lbWJlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwvc3dpdGNoXFwve2lkP31cIixcIm5hbWVcIjpcInRlYW1zLnN3aXRjaFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxUZWFtXFxVc2VyVGVhbUNvbnRyb2xsZXJAc3dpdGNoVGVhbVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwvbWVtYmVyc1wiLFwibmFtZVwiOlwidGVhbXMubWVtYmVycy5pbnZpdGVcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1NZW1iZXJDb250cm9sbGVyQGludml0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC90ZWFtXFwvbWVtYmVyc1xcL3Jlc2VuZFxcL3tpbnZpdGVfaWR9XCIsXCJuYW1lXCI6XCJ0ZWFtcy5tZW1iZXJzLnJlc2VuZF9pbnZpdGVcIixcImFjdGlvblwiOlwiVXNlclxcVGVhbVxcVXNlclRlYW1NZW1iZXJDb250cm9sbGVyQHJlc2VuZEludml0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2NhdGVnb3JpZXNcIixcIm5hbWVcIjpcImNhdGVnb3JpZXMuaW5kZXhcIixcImFjdGlvblwiOlwiQ2F0ZWdvcmllc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvY2F0ZWdvcmllc1wiLFwibmFtZVwiOlwiY2F0ZWdvcmllcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJDYXRlZ29yaWVzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2NhdGVnb3JpZXNcXC97Y2F0ZWdvcnl9XCIsXCJuYW1lXCI6XCJjYXRlZ29yaWVzLnNob3dcIixcImFjdGlvblwiOlwiQ2F0ZWdvcmllc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9jYXRlZ29yaWVzXFwve2NhdGVnb3J5fVwiLFwibmFtZVwiOlwiY2F0ZWdvcmllcy51cGRhdGVcIixcImFjdGlvblwiOlwiQ2F0ZWdvcmllc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvY2F0ZWdvcmllc1xcL3tjYXRlZ29yeX1cIixcIm5hbWVcIjpcImNhdGVnb3JpZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJDYXRlZ29yaWVzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYnVveS1hcHBzXFwvYnVveUNsYXNzZXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJCdW95QXBwQ29udHJvbGxlckBnZXRCdW95Q2xhc3Nlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9idW95LWFwcHNcXC97YnVveV9hcHB9XFwvdXBkYXRlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQnVveUFwcENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvYnVveS1hcHBzXCIsXCJuYW1lXCI6XCJidW95LWFwcHMuaW5kZXhcIixcImFjdGlvblwiOlwiQnVveUFwcENvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYnVveS1hcHBzXCIsXCJuYW1lXCI6XCJidW95LWFwcHMuc3RvcmVcIixcImFjdGlvblwiOlwiQnVveUFwcENvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9idW95LWFwcHNcXC97YnVveV9hcHB9XCIsXCJuYW1lXCI6XCJidW95LWFwcHMuc2hvd1wiLFwiYWN0aW9uXCI6XCJCdW95QXBwQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL2J1b3ktYXBwc1xcL3tidW95X2FwcH1cIixcIm5hbWVcIjpcImJ1b3ktYXBwcy51cGRhdGVcIixcImFjdGlvblwiOlwiQnVveUFwcENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvYnVveS1hcHBzXFwve2J1b3lfYXBwfVwiLFwibmFtZVwiOlwiYnVveS1hcHBzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiQnVveUFwcENvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2JpdHRzXCIsXCJuYW1lXCI6XCJiaXR0cy5pbmRleFwiLFwiYWN0aW9uXCI6XCJCaXR0c0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvYml0dHNcIixcIm5hbWVcIjpcImJpdHRzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIkJpdHRzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2JpdHRzXFwve2JpdHR9XCIsXCJuYW1lXCI6XCJiaXR0cy5zaG93XCIsXCJhY3Rpb25cIjpcIkJpdHRzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL2JpdHRzXFwve2JpdHR9XCIsXCJuYW1lXCI6XCJiaXR0cy51cGRhdGVcIixcImFjdGlvblwiOlwiQml0dHNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL2JpdHRzXFwve2JpdHR9XCIsXCJuYW1lXCI6XCJiaXR0cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIkJpdHRzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL2JpdHRcXC97Yml0dH1cXC9ydW5cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJCaXR0c0NvbnRyb2xsZXJAcnVuT25TZXJ2ZXJzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc3lzdGVtc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlN5c3RlbXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ydW5uaW5nLWNvbW1hbmRzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiVXNlclxcVXNlckNvbnRyb2xsZXJAZ2V0UnVubmluZ0NvbW1hbmRzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ydW5uaW5nLWRlcGxveW1lbnRzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiVXNlclxcVXNlckNvbnRyb2xsZXJAZ2V0UnVubmluZ0RlcGxveW1lbnRzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zc2gta2V5c1wiLFwibmFtZVwiOlwic3NoLWtleXMuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcVXNlclNzaEtleUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zc2gta2V5c1wiLFwibmFtZVwiOlwic3NoLWtleXMuc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcVXNlclNzaEtleUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzc2gta2V5cy5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJTc2hLZXlDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic3NoLWtleXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFVzZXJTc2hLZXlDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNzaC1rZXlzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcVXNlclNzaEtleUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJTZXJ2ZXJQcm92aWRlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXItcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclNlcnZlclByb3ZpZGVyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyLXByb3ZpZGVyc1xcL3tzZXJ2ZXJfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyU2VydmVyUHJvdmlkZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXItcHJvdmlkZXJzXFwve3NlcnZlcl9wcm92aWRlcn1cIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclNlcnZlclByb3ZpZGVyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlci1wcm92aWRlcnNcXC97c2VydmVyX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclNlcnZlclByb3ZpZGVyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tc2V0dGluZ3NcIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5pbmRleFwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3Muc3RvcmVcIixcImFjdGlvblwiOlwiVXNlclxcVXNlck5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXFwve25vdGlmaWNhdGlvbl9zZXR0aW5nfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLnNob3dcIixcImFjdGlvblwiOlwiVXNlclxcVXNlck5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXFwve25vdGlmaWNhdGlvbl9zZXR0aW5nfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXFwve25vdGlmaWNhdGlvbl9zZXR0aW5nfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiVXNlclxcVXNlck5vdGlmaWNhdGlvblNldHRpbmdzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1wiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyUmVwb3NpdG9yeVByb3ZpZGVyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3JlcG9zaXRvcnktcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJSZXBvc2l0b3J5UHJvdmlkZXJDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1xcL3tyZXBvc2l0b3J5X3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJSZXBvc2l0b3J5UHJvdmlkZXJDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1xcL3tyZXBvc2l0b3J5X3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlclJlcG9zaXRvcnlQcm92aWRlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1xcL3tyZXBvc2l0b3J5X3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJSZXBvc2l0b3J5UHJvdmlkZXJDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiVXNlclxcUHJvdmlkZXJzXFxVc2VyTm90aWZpY2F0aW9uUHJvdmlkZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJOb3RpZmljYXRpb25Qcm92aWRlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcXC97bm90aWZpY2F0aW9uX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy5zaG93XCIsXCJhY3Rpb25cIjpcIlVzZXJcXFByb3ZpZGVyc1xcVXNlck5vdGlmaWNhdGlvblByb3ZpZGVyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1xcL3tub3RpZmljYXRpb25fcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJOb3RpZmljYXRpb25Qcm92aWRlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXFwve25vdGlmaWNhdGlvbl9wcm92aWRlcn1cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJVc2VyXFxQcm92aWRlcnNcXFVzZXJOb3RpZmljYXRpb25Qcm92aWRlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvZXZlbnRzXCIsXCJuYW1lXCI6XCJldmVudHMuaW5kZXhcIixcImFjdGlvblwiOlwiRXZlbnRDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvZXZlbnRzXCIsXCJuYW1lXCI6XCJldmVudHMuc3RvcmVcIixcImFjdGlvblwiOlwiRXZlbnRDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9ldmVudHNcXC97ZXZlbnR9XCIsXCJuYW1lXCI6XCJldmVudHMuc2hvd1wiLFwiYWN0aW9uXCI6XCJFdmVudENvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2V2ZW50c1xcL3tldmVudH1cIixcIm5hbWVcIjpcImV2ZW50cy51cGRhdGVcIixcImFjdGlvblwiOlwiRXZlbnRDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvZXZlbnRzXFwve2V2ZW50fVwiLFwibmFtZVwiOlwiZXZlbnRzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiRXZlbnRDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVzXFwvYWxsXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiUGlsZVxcUGlsZUNvbnRyb2xsZXJAYWxsUGlsZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVzXCIsXCJuYW1lXCI6XCJwaWxlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVzXCIsXCJuYW1lXCI6XCJwaWxlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcGlsZXNcXC97cGlsZX1cIixcIm5hbWVcIjpcInBpbGVzLnNob3dcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVzXFwve3BpbGV9XCIsXCJuYW1lXCI6XCJwaWxlcy51cGRhdGVcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlc1xcL3twaWxlfVwiLFwibmFtZVwiOlwicGlsZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlXFwve3BpbGV9XFwvc2l0ZXNcIixcIm5hbWVcIjpcInBpbGUuc2l0ZXMuaW5kZXhcIixcImFjdGlvblwiOlwiUGlsZVxcUGlsZVNpdGVzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3BpbGVcXC97cGlsZX1cXC9zaXRlc1wiLFwibmFtZVwiOlwicGlsZS5zaXRlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlU2l0ZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlXFwve3BpbGV9XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInBpbGUuc2l0ZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlU2l0ZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlXFwve3BpbGV9XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInBpbGUuc2l0ZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVTaXRlc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9waWxlXFwve3BpbGV9XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInBpbGUuc2l0ZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJQaWxlXFxQaWxlU2l0ZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9jaGFuZ2UtcGlsZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlBpbGVcXFBpbGVDb250cm9sbGVyQGNoYW5nZVBpbGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcIixcIm5hbWVcIjpcInNlcnZlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1wiLFwibmFtZVwiOlwic2VydmVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVwiLFwibmFtZVwiOlwic2VydmVycy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XFwvZmluZC1maWxlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaWxlQ29udHJvbGxlckBmaW5kXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwve3NlcnZlcn1cXC9yZWxvYWQtZmlsZVxcL3tmaWxlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAcmVsb2FkRmlsZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XFwvY3VzdG9tXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQGdlbmVyYXRlQ3VzdG9tU2VydmVyU2hcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2FsbF9zZXJ2ZXJzXFwvYnVveXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckJ1b3lDb250cm9sbGVyQG15U2VydmVyQnVveXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC97c2VydmVyfVxcL2ZpbGVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAZ2V0RmlsZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3Jlc3RvcmVcXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckByZXN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyXFwve3NlcnZlcn1cXC9maWxlXFwvc2F2ZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckBzYXZlRmlsZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL2Rpc2stc3BhY2VcXC97c2VydmVyfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ29udHJvbGxlckBnZXREaXNrU3BhY2VcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9yZXN0YXJ0LXNlcnZlclxcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHJlc3RhcnRTZXJ2ZXJcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9yZXN0YXJ0LWRhdGFiYXNlXFwve3NlcnZlcn1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckNvbnRyb2xsZXJAcmVzdGFydERhdGFiYXNlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3Jlc3RhcnQtd29ya2Vyc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHJlc3RhcnRXb3JrZXJTZXJ2aWNlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3NzaC1jb25uZWN0aW9uXFwve3NlcnZlcn1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzaEtleUNvbnRyb2xsZXJAdGVzdFNTSENvbm5lY3Rpb25cIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJcXC9yZXN0YXJ0LXdlYi1zZXJ2aWNlc1xcL3tzZXJ2ZXJ9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDb250cm9sbGVyQHJlc3RhcnRXZWJTZXJ2aWNlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlsZVwiLFwibmFtZVwiOlwic2VydmVycy5maWxlLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlsZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maWxlXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpbGUuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaWxlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlsZVxcL3tmaWxlfVwiLFwibmFtZVwiOlwic2VydmVycy5maWxlLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaWxlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlsZVxcL3tmaWxlfVwiLFwibmFtZVwiOlwic2VydmVycy5maWxlLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZpbGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlsZVxcL3tmaWxlfVwiLFwibmFtZVwiOlwic2VydmVycy5maWxlLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaWxlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9idW95c1wiLFwibmFtZVwiOlwic2VydmVycy5idW95cy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckJ1b3lDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvYnVveXNcIixcIm5hbWVcIjpcInNlcnZlcnMuYnVveXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJCdW95Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvYnVveXNcXC97YnVveX1cIixcIm5hbWVcIjpcInNlcnZlcnMuYnVveXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckJ1b3lDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9idW95c1xcL3tidW95fVwiLFwibmFtZVwiOlwic2VydmVycy5idW95cy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJCdW95Q29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2J1b3lzXFwve2J1b3l9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmJ1b3lzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJCdW95Q29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zaXRlc1wiLFwibmFtZVwiOlwic2VydmVycy5zaXRlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNpdGVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2l0ZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuc2l0ZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTaXRlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2l0ZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNpdGVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwic2VydmVycy5zaXRlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTaXRlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNpdGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTaXRlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC93b3JrZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLndvcmtlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJXb3JrZXJDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvd29ya2Vyc1wiLFwibmFtZVwiOlwic2VydmVycy53b3JrZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyV29ya2VyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvd29ya2Vyc1xcL3t3b3JrZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLndvcmtlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlcldvcmtlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3dvcmtlcnNcXC97d29ya2VyfVwiLFwibmFtZVwiOlwic2VydmVycy53b3JrZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlcldvcmtlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC93b3JrZXJzXFwve3dvcmtlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMud29ya2Vycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyV29ya2VyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWFzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hc1wiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWFzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hc1xcL3tzY2hlbWF9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYXNcXC97c2NoZW1hfVwiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWFzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNjaGVtYUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWFzXFwve3NjaGVtYX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9kYWVtb25zXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmRhZW1vbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJEYWVtb25zQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2RhZW1vbnNcIixcIm5hbWVcIjpcInNlcnZlcnMuZGFlbW9ucy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckRhZW1vbnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9kYWVtb25zXFwve2RhZW1vbn1cIixcIm5hbWVcIjpcInNlcnZlcnMuZGFlbW9ucy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRGFlbW9uc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2RhZW1vbnNcXC97ZGFlbW9ufVwiLFwibmFtZVwiOlwic2VydmVycy5kYWVtb25zLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckRhZW1vbnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZGFlbW9uc1xcL3tkYWVtb259XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmRhZW1vbnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckRhZW1vbnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzaC1rZXlzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzaC1rZXlzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NoS2V5Q29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzaC1rZXlzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzaC1rZXlzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NoS2V5Q29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc3NoLWtleXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzaEtleUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzaC1rZXlzXFwve3NzaF9rZXl9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzaC1rZXlzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzaEtleUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2gta2V5c1xcL3tzc2hfa2V5fVwiLFwibmFtZVwiOlwic2VydmVycy5zc2gta2V5cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NoS2V5Q29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9mZWF0dXJlc1wiLFwibmFtZVwiOlwic2VydmVycy5mZWF0dXJlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZlYXR1cmVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmVhdHVyZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuZmVhdHVyZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmVhdHVyZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZlYXR1cmVDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9mZWF0dXJlc1xcL3tmZWF0dXJlfVwiLFwibmFtZVwiOlwic2VydmVycy5mZWF0dXJlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZlYXR1cmVzXFwve2ZlYXR1cmV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZlYXR1cmVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGZWF0dXJlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9jcm9uLWpvYnNcIixcIm5hbWVcIjpcInNlcnZlcnMuY3Jvbi1qb2JzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ3JvbkpvYkNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9jcm9uLWpvYnNcIixcIm5hbWVcIjpcInNlcnZlcnMuY3Jvbi1qb2JzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ3JvbkpvYkNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Nyb24tam9ic1xcL3tjcm9uX2pvYn1cIixcIm5hbWVcIjpcInNlcnZlcnMuY3Jvbi1qb2JzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJDcm9uSm9iQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvY3Jvbi1qb2JzXFwve2Nyb25fam9ifVwiLFwibmFtZVwiOlwic2VydmVycy5jcm9uLWpvYnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ3JvbkpvYkNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9jcm9uLWpvYnNcXC97Y3Jvbl9qb2J9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmNyb24tam9icy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyQ3JvbkpvYkNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NsLWNlcnRpZmljYXRlXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzbC1jZXJ0aWZpY2F0ZS5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlclNzbENvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2wtY2VydGlmaWNhdGVcIixcIm5hbWVcIjpcInNlcnZlcnMuc3NsLWNlcnRpZmljYXRlLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NsQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc3NsLWNlcnRpZmljYXRlXFwve3NzbF9jZXJ0aWZpY2F0ZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuc3NsLWNlcnRpZmljYXRlLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTc2xDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zc2wtY2VydGlmaWNhdGVcXC97c3NsX2NlcnRpZmljYXRlfVwiLFwibmFtZVwiOlwic2VydmVycy5zc2wtY2VydGlmaWNhdGUudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NsQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NzbC1jZXJ0aWZpY2F0ZVxcL3tzc2xfY2VydGlmaWNhdGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNzbC1jZXJ0aWZpY2F0ZS5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU3NsQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWEtdXNlcnNcIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hLXVzZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hVXNlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWEtdXNlcnNcIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hLXVzZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hVXNlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3NjaGVtYS11c2Vyc1xcL3tzY2hlbWFfdXNlcn1cIixcIm5hbWVcIjpcInNlcnZlcnMuc2NoZW1hLXVzZXJzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJTY2hlbWFVc2VyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvc2NoZW1hLXVzZXJzXFwve3NjaGVtYV91c2VyfVwiLFwibmFtZVwiOlwic2VydmVycy5zY2hlbWEtdXNlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hVXNlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9zY2hlbWEtdXNlcnNcXC97c2NoZW1hX3VzZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnNjaGVtYS11c2Vycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyU2NoZW1hVXNlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlyZXdhbGwtcnVsZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuZmlyZXdhbGwtcnVsZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaXJld2FsbFJ1bGVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlyZXdhbGwtcnVsZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuZmlyZXdhbGwtcnVsZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaXJld2FsbFJ1bGVDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9maXJld2FsbC1ydWxlc1xcL3tmaXJld2FsbF9ydWxlfVwiLFwibmFtZVwiOlwic2VydmVycy5maXJld2FsbC1ydWxlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlyZXdhbGxSdWxlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvZmlyZXdhbGwtcnVsZXNcXC97ZmlyZXdhbGxfcnVsZX1cIixcIm5hbWVcIjpcInNlcnZlcnMuZmlyZXdhbGwtcnVsZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmlyZXdhbGxSdWxlQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2ZpcmV3YWxsLXJ1bGVzXFwve2ZpcmV3YWxsX3J1bGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmZpcmV3YWxsLXJ1bGVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJGaXJld2FsbFJ1bGVDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL3Byb3Zpc2lvbi1zdGVwc1wiLFwibmFtZVwiOlwic2VydmVycy5wcm92aXNpb24tc3RlcHMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJQcm92aXNpb25TdGVwc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9wcm92aXNpb24tc3RlcHNcIixcIm5hbWVcIjpcInNlcnZlcnMucHJvdmlzaW9uLXN0ZXBzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyUHJvdmlzaW9uU3RlcHNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9wcm92aXNpb24tc3RlcHNcXC97cHJvdmlzaW9uX3N0ZXB9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnByb3Zpc2lvbi1zdGVwcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyUHJvdmlzaW9uU3RlcHNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9wcm92aXNpb24tc3RlcHNcXC97cHJvdmlzaW9uX3N0ZXB9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnByb3Zpc2lvbi1zdGVwcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJQcm92aXNpb25TdGVwc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9wcm92aXNpb24tc3RlcHNcXC97cHJvdmlzaW9uX3N0ZXB9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLnByb3Zpc2lvbi1zdGVwcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyUHJvdmlzaW9uU3RlcHNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2xhbmd1YWdlLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmxhbmd1YWdlLXNldHRpbmdzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9sYW5ndWFnZS1zZXR0aW5nc1wiLFwibmFtZVwiOlwic2VydmVycy5sYW5ndWFnZS1zZXR0aW5ncy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9sYW5ndWFnZS1zZXR0aW5nc1xcL3tsYW5ndWFnZV9zZXR0aW5nfVwiLFwibmFtZVwiOlwic2VydmVycy5sYW5ndWFnZS1zZXR0aW5ncy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2xhbmd1YWdlLXNldHRpbmdzXFwve2xhbmd1YWdlX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmxhbmd1YWdlLXNldHRpbmdzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2VydmVyc1xcL3tzZXJ2ZXJ9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcXC97bGFuZ3VhZ2Vfc2V0dGluZ31cIixcIm5hbWVcIjpcInNlcnZlcnMubGFuZ3VhZ2Utc2V0dGluZ3MuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlcnNcXC97c2VydmVyfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1wiLFwibmFtZVwiOlwic2VydmVycy5lbnZpcm9ubWVudC12YXJpYWJsZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcIixcIm5hbWVcIjpcInNlcnZlcnMuZW52aXJvbm1lbnQtdmFyaWFibGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcXC97ZW52aXJvbm1lbnRfdmFyaWFibGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmVudmlyb25tZW50LXZhcmlhYmxlcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcXC97ZW52aXJvbm1lbnRfdmFyaWFibGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmVudmlyb25tZW50LXZhcmlhYmxlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zZXJ2ZXJzXFwve3NlcnZlcn1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcXC97ZW52aXJvbm1lbnRfdmFyaWFibGV9XCIsXCJuYW1lXCI6XCJzZXJ2ZXJzLmVudmlyb25tZW50LXZhcmlhYmxlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRW52aXJvbm1lbnRWYXJpYWJsZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQGdldExhbmd1YWdlU2V0dGluZ3NcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXCIsXCJuYW1lXCI6XCJzaXRlcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXCIsXCJuYW1lXCI6XCJzaXRlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cIixcIm5hbWVcIjpcInNpdGVzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XCIsXCJuYW1lXCI6XCJzaXRlcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVwiLFwibmFtZVwiOlwic2l0ZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL3JlbmFtZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHJlbmFtZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9maW5kLWZpbGVcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlsZUNvbnRyb2xsZXJAZmluZFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC93b3JrZmxvd1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVXb3JrZmxvd0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvcmVmcmVzaC1zc2gta2V5c1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHJlZnJlc2hQdWJsaWNLZXlcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlXFwve3NpdGV9XFwvcmVmcmVzaC1kZXBsb3kta2V5XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAcmVmcmVzaERlcGxveUtleVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL2NsZWFyLWNvbW1hbmRzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckNvbW1hbmRzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL3JlbG9hZC1maWxlXFwve2ZpbGV9XFwvc2VydmVyXFwve3NlcnZlcn1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlsZUNvbnRyb2xsZXJAcmVsb2FkRmlsZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL2RlcGxveVxcL3tzaXRlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQGRlcGxveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3JvbGxiYWNrXFwve3NpdGV9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUNvbnRyb2xsZXJAcm9sbGJhY2tcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVcXC97c2l0ZX1cXC9kZXBsb3ltZW50LXN0ZXBzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRTdGVwc0NvbnRyb2xsZXJAZ2V0RGVwbG95bWVudFN0ZXBzXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVzdGFydC1zZXJ2ZXJcXC97c2l0ZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZXN0YXJ0U2VydmVyXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvcmVzdGFydC1kYXRhYmFzZVxcL3tzaXRlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHJlc3RhcnREYXRhYmFzZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yZXN0YXJ0LXdvcmtlcnNcXC97c2l0ZX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ29udHJvbGxlckByZXN0YXJ0V29ya2VyU2VydmljZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9yZXN0YXJ0LXdlYi1zZXJ2aWNlc1xcL3tzaXRlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDb250cm9sbGVyQHJlc3RhcnRXZWJTZXJ2aWNlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kbnNcIixcIm5hbWVcIjpcInNpdGVzLmRucy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRG5zQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZG5zXCIsXCJuYW1lXCI6XCJzaXRlcy5kbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURuc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZG5zXFwve2RufVwiLFwibmFtZVwiOlwic2l0ZXMuZG5zLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURuc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZG5zXFwve2RufVwiLFwibmFtZVwiOlwic2l0ZXMuZG5zLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRG5zQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZG5zXFwve2RufVwiLFwibmFtZVwiOlwic2l0ZXMuZG5zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURuc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maWxlXCIsXCJuYW1lXCI6XCJzaXRlcy5maWxlLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaWxlQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlsZVwiLFwibmFtZVwiOlwic2l0ZXMuZmlsZS5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlsZUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZmlsZVxcL3tmaWxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZmlsZS5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaWxlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maWxlXFwve2ZpbGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5maWxlLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlsZUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpbGVcXC97ZmlsZX1cIixcIm5hbWVcIjpcInNpdGVzLmZpbGUuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlsZUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9idW95c1wiLFwibmFtZVwiOlwic2l0ZXMuYnVveXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUJ1b3lDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9idW95c1wiLFwibmFtZVwiOlwic2l0ZXMuYnVveXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUJ1b3lDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2J1b3lzXFwve2J1b3l9XCIsXCJuYW1lXCI6XCJzaXRlcy5idW95cy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVCdW95Q29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9idW95c1xcL3tidW95fVwiLFwibmFtZVwiOlwic2l0ZXMuYnVveXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVCdW95Q29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvYnVveXNcXC97YnVveX1cIixcIm5hbWVcIjpcInNpdGVzLmJ1b3lzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUJ1b3lDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyc1wiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyc1wiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXJzXFwve3NlcnZlcn1cIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXJzXFwve3NlcnZlcn1cIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXJzXFwve3NlcnZlcn1cIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2VydmVyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3dvcmtlcnNcIixcIm5hbWVcIjpcInNpdGVzLndvcmtlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVdvcmtlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3dvcmtlcnNcIixcIm5hbWVcIjpcInNpdGVzLndvcmtlcnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVdvcmtlckNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvd29ya2Vyc1xcL3t3b3JrZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy53b3JrZXJzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVdvcmtlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvd29ya2Vyc1xcL3t3b3JrZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy53b3JrZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlV29ya2VyQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvd29ya2Vyc1xcL3t3b3JrZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy53b3JrZXJzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVdvcmtlckNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWFzXCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWFzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWFzXCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWFzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYXNcXC97c2NoZW1hfVwiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYXNcXC97c2NoZW1hfVwiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNjaGVtYUNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYXNcXC97c2NoZW1hfVwiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGFlbW9uc1wiLFwibmFtZVwiOlwic2l0ZXMuZGFlbW9ucy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRGFlbW9uc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RhZW1vbnNcIixcIm5hbWVcIjpcInNpdGVzLmRhZW1vbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURhZW1vbnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RhZW1vbnNcXC97ZGFlbW9ufVwiLFwibmFtZVwiOlwic2l0ZXMuZGFlbW9ucy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEYWVtb25zQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kYWVtb25zXFwve2RhZW1vbn1cIixcIm5hbWVcIjpcInNpdGVzLmRhZW1vbnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEYWVtb25zQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGFlbW9uc1xcL3tkYWVtb259XCIsXCJuYW1lXCI6XCJzaXRlcy5kYWVtb25zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURhZW1vbnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NoLWtleXNcIixcIm5hbWVcIjpcInNpdGVzLnNzaC1rZXlzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2hLZXlDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2gta2V5c1wiLFwibmFtZVwiOlwic2l0ZXMuc3NoLWtleXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzaEtleUNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNpdGVzLnNzaC1rZXlzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzaEtleUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNpdGVzLnNzaC1rZXlzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NoS2V5Q29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NoLWtleXNcXC97c3NoX2tleX1cIixcIm5hbWVcIjpcInNpdGVzLnNzaC1rZXlzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzaEtleUNvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9jcm9uLWpvYnNcIixcIm5hbWVcIjpcInNpdGVzLmNyb24tam9icy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ3JvbkpvYkNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Nyb24tam9ic1wiLFwibmFtZVwiOlwic2l0ZXMuY3Jvbi1qb2JzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDcm9uSm9iQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9jcm9uLWpvYnNcXC97Y3Jvbl9qb2J9XCIsXCJuYW1lXCI6XCJzaXRlcy5jcm9uLWpvYnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ3JvbkpvYkNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvY3Jvbi1qb2JzXFwve2Nyb25fam9ifVwiLFwibmFtZVwiOlwic2l0ZXMuY3Jvbi1qb2JzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlQ3JvbkpvYkNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Nyb24tam9ic1xcL3tjcm9uX2pvYn1cIixcIm5hbWVcIjpcInNpdGVzLmNyb24tam9icy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVDcm9uSm9iQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzbC1jZXJ0aWZpY2F0ZVwiLFwibmFtZVwiOlwic2l0ZXMuc3NsLWNlcnRpZmljYXRlLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTc2xDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2wtY2VydGlmaWNhdGVcIixcIm5hbWVcIjpcInNpdGVzLnNzbC1jZXJ0aWZpY2F0ZS5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NsQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zc2wtY2VydGlmaWNhdGVcXC97c3NsX2NlcnRpZmljYXRlfVwiLFwibmFtZVwiOlwic2l0ZXMuc3NsLWNlcnRpZmljYXRlLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzbENvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc3NsLWNlcnRpZmljYXRlXFwve3NzbF9jZXJ0aWZpY2F0ZX1cIixcIm5hbWVcIjpcInNpdGVzLnNzbC1jZXJ0aWZpY2F0ZS51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNzbENvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NzbC1jZXJ0aWZpY2F0ZVxcL3tzc2xfY2VydGlmaWNhdGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5zc2wtY2VydGlmaWNhdGUuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU3NsQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xpZmUtbGluZXNcIixcIm5hbWVcIjpcInNpdGVzLmxpZmUtbGluZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxpZmVsaW5lc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xpZmUtbGluZXNcIixcIm5hbWVcIjpcInNpdGVzLmxpZmUtbGluZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxpZmVsaW5lc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGlmZS1saW5lc1xcL3tsaWZlX2xpbmV9XCIsXCJuYW1lXCI6XCJzaXRlcy5saWZlLWxpbmVzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxpZmVsaW5lc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGlmZS1saW5lc1xcL3tsaWZlX2xpbmV9XCIsXCJuYW1lXCI6XCJzaXRlcy5saWZlLWxpbmVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGlmZWxpbmVzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGlmZS1saW5lc1xcL3tsaWZlX2xpbmV9XCIsXCJuYW1lXCI6XCJzaXRlcy5saWZlLWxpbmVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxpZmVsaW5lc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50c1wiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudHMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudHNcIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnRzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50c0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZGVwbG95bWVudHNcXC97ZGVwbG95bWVudH1cIixcIm5hbWVcIjpcInNpdGVzLmRlcGxveW1lbnRzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50c1xcL3tkZXBsb3ltZW50fVwiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudHMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50c0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnRzXFwve2RlcGxveW1lbnR9XCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50cy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50c0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWEtdXNlcnNcIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYS11c2Vycy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hVXNlckNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYS11c2Vyc1wiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hLXVzZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFVc2VyQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zY2hlbWEtdXNlcnNcXC97c2NoZW1hX3VzZXJ9XCIsXCJuYW1lXCI6XCJzaXRlcy5zY2hlbWEtdXNlcnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hVXNlckNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2NoZW1hLXVzZXJzXFwve3NjaGVtYV91c2VyfVwiLFwibmFtZVwiOlwic2l0ZXMuc2NoZW1hLXVzZXJzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlU2NoZW1hVXNlckNvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NjaGVtYS11c2Vyc1xcL3tzY2hlbWFfdXNlcn1cIixcIm5hbWVcIjpcInNpdGVzLnNjaGVtYS11c2Vycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTY2hlbWFVc2VyQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2hvb2tzXCIsXCJuYW1lXCI6XCJzaXRlcy5ob29rcy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTaXRlXFxSZXBvc2l0b3J5XFxSZXBvc2l0b3J5SG9va0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2hvb2tzXCIsXCJuYW1lXCI6XCJzaXRlcy5ob29rcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxSZXBvc2l0b3J5XFxSZXBvc2l0b3J5SG9va0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvaG9va3NcXC97aG9va31cIixcIm5hbWVcIjpcInNpdGVzLmhvb2tzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcUmVwb3NpdG9yeVxcUmVwb3NpdG9yeUhvb2tDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2hvb2tzXFwve2hvb2t9XCIsXCJuYW1lXCI6XCJzaXRlcy5ob29rcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcUmVwb3NpdG9yeVxcUmVwb3NpdG9yeUhvb2tDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9ob29rc1xcL3tob29rfVwiLFwibmFtZVwiOlwic2l0ZXMuaG9va3MuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxSZXBvc2l0b3J5XFxSZXBvc2l0b3J5SG9va0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maXJld2FsbC1ydWxlc1wiLFwibmFtZVwiOlwic2l0ZXMuZmlyZXdhbGwtcnVsZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUZpcmV3YWxsUnVsZUNvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2ZpcmV3YWxsLXJ1bGVzXCIsXCJuYW1lXCI6XCJzaXRlcy5maXJld2FsbC1ydWxlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlyZXdhbGxSdWxlQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maXJld2FsbC1ydWxlc1xcL3tmaXJld2FsbF9ydWxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZmlyZXdhbGwtcnVsZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlyZXdhbGxSdWxlQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maXJld2FsbC1ydWxlc1xcL3tmaXJld2FsbF9ydWxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZmlyZXdhbGwtcnVsZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVGaXJld2FsbFJ1bGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9maXJld2FsbC1ydWxlc1xcL3tmaXJld2FsbF9ydWxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZmlyZXdhbGwtcnVsZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmlyZXdhbGxSdWxlQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlci1mZWF0dXJlc1wiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVyLWZlYXR1cmVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlci1mZWF0dXJlc1wiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVyLWZlYXR1cmVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvc2VydmVyLWZlYXR1cmVzXFwve3NlcnZlcl90eXBlfVwiLFwibmFtZVwiOlwic2l0ZXMuc2VydmVyLWZlYXR1cmVzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9zZXJ2ZXItZmVhdHVyZXNcXC97c2VydmVyX3R5cGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5zZXJ2ZXItZmVhdHVyZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL3NlcnZlci1mZWF0dXJlc1xcL3tzZXJ2ZXJfdHlwZX1cIixcIm5hbWVcIjpcInNpdGVzLnNlcnZlci1mZWF0dXJlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50LXN0ZXBzXCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50LXN0ZXBzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50U3RlcHNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9kZXBsb3ltZW50LXN0ZXBzXCIsXCJuYW1lXCI6XCJzaXRlcy5kZXBsb3ltZW50LXN0ZXBzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50U3RlcHNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnQtc3RlcHNcXC97ZGVwbG95bWVudF9zdGVwfVwiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudC1zdGVwcy5zaG93XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50U3RlcHNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnQtc3RlcHNcXC97ZGVwbG95bWVudF9zdGVwfVwiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudC1zdGVwcy51cGRhdGVcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZURlcGxveW1lbnRTdGVwc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2RlcGxveW1lbnQtc3RlcHNcXC97ZGVwbG95bWVudF9zdGVwfVwiLFwibmFtZVwiOlwic2l0ZXMuZGVwbG95bWVudC1zdGVwcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVEZXBsb3ltZW50U3RlcHNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcIixcIm5hbWVcIjpcInNpdGVzLmxhbmd1YWdlLXNldHRpbmdzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcIixcIm5hbWVcIjpcInNpdGVzLmxhbmd1YWdlLXNldHRpbmdzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9sYW5ndWFnZS1zZXR0aW5nc1xcL3tsYW5ndWFnZV9zZXR0aW5nfVwiLFwibmFtZVwiOlwic2l0ZXMubGFuZ3VhZ2Utc2V0dGluZ3Muc2hvd1wiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvbGFuZ3VhZ2Utc2V0dGluZ3NcXC97bGFuZ3VhZ2Vfc2V0dGluZ31cIixcIm5hbWVcIjpcInNpdGVzLmxhbmd1YWdlLXNldHRpbmdzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlTGFuZ3VhZ2VTZXR0aW5nc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2xhbmd1YWdlLXNldHRpbmdzXFwve2xhbmd1YWdlX3NldHRpbmd9XCIsXCJuYW1lXCI6XCJzaXRlcy5sYW5ndWFnZS1zZXR0aW5ncy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVMYW5ndWFnZVNldHRpbmdzQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1wiLFwibmFtZVwiOlwic2l0ZXMuZW52aXJvbm1lbnQtdmFyaWFibGVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1wiLFwibmFtZVwiOlwic2l0ZXMuZW52aXJvbm1lbnQtdmFyaWFibGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9teVxcL3NpdGVzXFwve3NpdGV9XFwvZW52aXJvbm1lbnQtdmFyaWFibGVzXFwve2Vudmlyb25tZW50X3ZhcmlhYmxlfVwiLFwibmFtZVwiOlwic2l0ZXMuZW52aXJvbm1lbnQtdmFyaWFibGVzLnNob3dcIixcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUVudmlyb25tZW50VmFyaWFibGVzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZXNcXC97c2l0ZX1cXC9lbnZpcm9ubWVudC12YXJpYWJsZXNcXC97ZW52aXJvbm1lbnRfdmFyaWFibGV9XCIsXCJuYW1lXCI6XCJzaXRlcy5lbnZpcm9ubWVudC12YXJpYWJsZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbXlcXC9zaXRlc1xcL3tzaXRlfVxcL2Vudmlyb25tZW50LXZhcmlhYmxlc1xcL3tlbnZpcm9ubWVudF92YXJpYWJsZX1cIixcIm5hbWVcIjpcInNpdGVzLmVudmlyb25tZW50LXZhcmlhYmxlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNpdGVcXFNpdGVFbnZpcm9ubWVudFZhcmlhYmxlc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL215XFwvc2l0ZVxcL3tzaXRlfVxcL2xhbmd1YWdlLXNldHRpbmdzXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiU2l0ZVxcU2l0ZUxhbmd1YWdlU2V0dGluZ3NDb250cm9sbGVyQGdldExhbmd1YWdlU2V0dGluZ3NcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9ub3RpZmljYXRpb24tc2V0dGluZ3NcIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1zZXR0aW5ncy5pbmRleFwiLFwiYWN0aW9uXCI6XCJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tc2V0dGluZ3Muc3RvcmVcIixcImFjdGlvblwiOlwiTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXFwve25vdGlmaWNhdGlvbl9zZXR0aW5nfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLnNob3dcIixcImFjdGlvblwiOlwiTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXFwve25vdGlmaWNhdGlvbl9zZXR0aW5nfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJOb3RpZmljYXRpb25TZXR0aW5nc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvbm90aWZpY2F0aW9uLXNldHRpbmdzXFwve25vdGlmaWNhdGlvbl9zZXR0aW5nfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXNldHRpbmdzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiTm90aWZpY2F0aW9uU2V0dGluZ3NDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC90eXBlc1wiLFwibmFtZVwiOlwidHlwZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJUeXBlc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvdHlwZXNcIixcIm5hbWVcIjpcInR5cGVzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyVHlwZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvdHlwZXNcXC97dHlwZX1cIixcIm5hbWVcIjpcInR5cGVzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxTZXJ2ZXJUeXBlc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC90eXBlc1xcL3t0eXBlfVwiLFwibmFtZVwiOlwidHlwZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyVHlwZXNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3R5cGVzXFwve3R5cGV9XCIsXCJuYW1lXCI6XCJ0eXBlcy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyVHlwZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9mZWF0dXJlc1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlNlcnZlclxcU2VydmVyRmVhdHVyZUNvbnRyb2xsZXJAZ2V0RmVhdHVyZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9sYW5ndWFnZXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZlYXR1cmVDb250cm9sbGVyQGdldExhbmd1YWdlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL2ZyYW1ld29ya3NcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZlYXR1cmVDb250cm9sbGVyQGdldEZyYW1ld29ya3NcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zaXRlXFwve3NpdGV9XFwvZWRpdGFibGUtZmlsZXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmVhdHVyZUNvbnRyb2xsZXJAZ2V0RWRpdGFibGVGaWxlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3tzZXJ2ZXJ9XFwvZWRpdGFibGUtZmlsZXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFNlcnZlckZlYXR1cmVDb250cm9sbGVyQGdldEVkaXRhYmxlRmlsZXNcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zaXRlXFwve3NpdGV9XFwvZnJhbWV3b3JrXFwvZWRpdGFibGUtZmlsZXNcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJTaXRlXFxTaXRlRmVhdHVyZUNvbnRyb2xsZXJAZ2V0RWRpdGFibGVGcmFtZXdvcmtGaWxlc1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9zZXJ2ZXItcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcU2VydmVyUHJvdmlkZXJzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvc2VydmVyLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFNlcnZlclByb3ZpZGVyc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvc2VydmVyLXByb3ZpZGVyc1xcL3tzZXJ2ZXJfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJzZXJ2ZXItcHJvdmlkZXJzLnNob3dcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxTZXJ2ZXJQcm92aWRlcnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3NlcnZlci1wcm92aWRlcnNcXC97c2VydmVyX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwic2VydmVyLXByb3ZpZGVycy51cGRhdGVcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxTZXJ2ZXJQcm92aWRlcnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9zZXJ2ZXItcHJvdmlkZXJzXFwve3NlcnZlcl9wcm92aWRlcn1cIixcIm5hbWVcIjpcInNlcnZlci1wcm92aWRlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXFNlcnZlclByb3ZpZGVyc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1wiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMuaW5kZXhcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxSZXBvc2l0b3J5UHJvdmlkZXJzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLnN0b3JlXCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcUmVwb3NpdG9yeVByb3ZpZGVyc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvcmVwb3NpdG9yeS1wcm92aWRlcnNcXC97cmVwb3NpdG9yeV9wcm92aWRlcn1cIixcIm5hbWVcIjpcInJlcG9zaXRvcnktcHJvdmlkZXJzLnNob3dcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxSZXBvc2l0b3J5UHJvdmlkZXJzQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9yZXBvc2l0b3J5LXByb3ZpZGVyc1xcL3tyZXBvc2l0b3J5X3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicmVwb3NpdG9yeS1wcm92aWRlcnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcUmVwb3NpdG9yeVByb3ZpZGVyc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL3JlcG9zaXRvcnktcHJvdmlkZXJzXFwve3JlcG9zaXRvcnlfcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJyZXBvc2l0b3J5LXByb3ZpZGVycy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcUmVwb3NpdG9yeVByb3ZpZGVyc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLmluZGV4XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFByb3ZpZGVyc1xcTm90aWZpY2F0aW9uUHJvdmlkZXJzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1wiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXE5vdGlmaWNhdGlvblByb3ZpZGVyc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9hdXRoXFwvcHJvdmlkZXJzXFwvbm90aWZpY2F0aW9uLXByb3ZpZGVyc1xcL3tub3RpZmljYXRpb25fcHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJub3RpZmljYXRpb24tcHJvdmlkZXJzLnNob3dcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxOb3RpZmljYXRpb25Qcm92aWRlcnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvYXV0aFxcL3Byb3ZpZGVyc1xcL25vdGlmaWNhdGlvbi1wcm92aWRlcnNcXC97bm90aWZpY2F0aW9uX3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwibm90aWZpY2F0aW9uLXByb3ZpZGVycy51cGRhdGVcIixcImFjdGlvblwiOlwiQXV0aFxcUHJvdmlkZXJzXFxOb3RpZmljYXRpb25Qcm92aWRlcnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL2F1dGhcXC9wcm92aWRlcnNcXC9ub3RpZmljYXRpb24tcHJvdmlkZXJzXFwve25vdGlmaWNhdGlvbl9wcm92aWRlcn1cIixcIm5hbWVcIjpcIm5vdGlmaWNhdGlvbi1wcm92aWRlcnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJBdXRoXFxQcm92aWRlcnNcXE5vdGlmaWNhdGlvblByb3ZpZGVyc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL29wdGlvbnNcIixcIm5hbWVcIjpcIm9wdGlvbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvb3B0aW9uc1wiLFwibmFtZVwiOlwib3B0aW9ucy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJPcHRpb25zQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL29wdGlvbnNcXC97b3B0aW9ufVwiLFwibmFtZVwiOlwib3B0aW9ucy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlck9wdGlvbnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvb3B0aW9uc1xcL3tvcHRpb259XCIsXCJuYW1lXCI6XCJvcHRpb25zLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJPcHRpb25zQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9vcHRpb25zXFwve29wdGlvbn1cIixcIm5hbWVcIjpcIm9wdGlvbnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJPcHRpb25zQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvcmVnaW9uc1wiLFwibmFtZVwiOlwicmVnaW9ucy5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9yZWdpb25zXCIsXCJuYW1lXCI6XCJyZWdpb25zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlclJlZ2lvbnNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvZGlnaXRhbG9jZWFuXFwvcmVnaW9uc1xcL3tyZWdpb259XCIsXCJuYW1lXCI6XCJyZWdpb25zLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9yZWdpb25zXFwve3JlZ2lvbn1cIixcIm5hbWVcIjpcInJlZ2lvbnMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlclJlZ2lvbnNDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL3JlZ2lvbnNcXC97cmVnaW9ufVwiLFwibmFtZVwiOlwicmVnaW9ucy5kZXN0cm95XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlclJlZ2lvbnNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9mZWF0dXJlc1wiLFwibmFtZVwiOlwiZmVhdHVyZXMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXERpZ2l0YWxPY2VhblxcRGlnaXRhbE9jZWFuU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2RpZ2l0YWxvY2VhblxcL2ZlYXR1cmVzXCIsXCJuYW1lXCI6XCJmZWF0dXJlcy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9mZWF0dXJlc1xcL3tmZWF0dXJlfVwiLFwibmFtZVwiOlwiZmVhdHVyZXMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9mZWF0dXJlc1xcL3tmZWF0dXJlfVwiLFwibmFtZVwiOlwiZmVhdHVyZXMudXBkYXRlXCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxEaWdpdGFsT2NlYW5cXERpZ2l0YWxPY2VhblNlcnZlckZlYXR1cmVzQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9kaWdpdGFsb2NlYW5cXC9mZWF0dXJlc1xcL3tmZWF0dXJlfVwiLFwibmFtZVwiOlwiZmVhdHVyZXMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcRGlnaXRhbE9jZWFuXFxEaWdpdGFsT2NlYW5TZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3Byb3ZpZGVyXCIsXCJuYW1lXCI6XCJwcm92aWRlci5pbmRleFwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3Byb3ZpZGVyXCIsXCJuYW1lXCI6XCJwcm92aWRlci5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcHJvdmlkZXJcXC97cHJvdmlkZXJ9XCIsXCJuYW1lXCI6XCJwcm92aWRlci5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZUNvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQVVRcIixcIlBBVENIXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9wcm92aWRlclxcL3twcm92aWRlcn1cIixcIm5hbWVcIjpcInByb3ZpZGVyLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJERUxFVEVcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3Byb3ZpZGVyXFwve3Byb3ZpZGVyfVwiLFwibmFtZVwiOlwicHJvdmlkZXIuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9vcHRpb25zXCIsXCJuYW1lXCI6XCJvcHRpb25zLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlck9wdGlvbnNDb250cm9sbGVyQGluZGV4XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL29wdGlvbnNcIixcIm5hbWVcIjpcIm9wdGlvbnMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9vcHRpb25zXFwve29wdGlvbn1cIixcIm5hbWVcIjpcIm9wdGlvbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJPcHRpb25zQ29udHJvbGxlckBzaG93XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL29wdGlvbnNcXC97b3B0aW9ufVwiLFwibmFtZVwiOlwib3B0aW9ucy51cGRhdGVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvb3B0aW9uc1xcL3tvcHRpb259XCIsXCJuYW1lXCI6XCJvcHRpb25zLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyT3B0aW9uc0NvbnRyb2xsZXJAZGVzdHJveVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3JlZ2lvbnNcIixcIm5hbWVcIjpcInJlZ2lvbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyUmVnaW9uc0NvbnRyb2xsZXJAaW5kZXhcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcmVnaW9uc1wiLFwibmFtZVwiOlwicmVnaW9ucy5zdG9yZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBzdG9yZVwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcImFwaVxcL3NlcnZlclxcL3Byb3ZpZGVyc1xcL2xpbm9kZVxcL3JlZ2lvbnNcXC97cmVnaW9ufVwiLFwibmFtZVwiOlwicmVnaW9ucy5zaG93XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlclJlZ2lvbnNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvcmVnaW9uc1xcL3tyZWdpb259XCIsXCJuYW1lXCI6XCJyZWdpb25zLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJSZWdpb25zQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9yZWdpb25zXFwve3JlZ2lvbn1cIixcIm5hbWVcIjpcInJlZ2lvbnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJSZWdpb25zQ29udHJvbGxlckBkZXN0cm95XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvZmVhdHVyZXNcIixcIm5hbWVcIjpcImZlYXR1cmVzLmluZGV4XCIsXCJhY3Rpb25cIjpcIlNlcnZlclxcUHJvdmlkZXJzXFxMaW5vZGVcXExpbm9kZVNlcnZlckZlYXR1cmVzQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJhcGlcXC9zZXJ2ZXJcXC9wcm92aWRlcnNcXC9saW5vZGVcXC9mZWF0dXJlc1wiLFwibmFtZVwiOlwiZmVhdHVyZXMuc3RvcmVcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcImZlYXR1cmVzLnNob3dcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUFVUXCIsXCJQQVRDSFwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcImZlYXR1cmVzLnVwZGF0ZVwiLFwiYWN0aW9uXCI6XCJTZXJ2ZXJcXFByb3ZpZGVyc1xcTGlub2RlXFxMaW5vZGVTZXJ2ZXJGZWF0dXJlc0NvbnRyb2xsZXJAdXBkYXRlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkRFTEVURVwiXSxcInVyaVwiOlwiYXBpXFwvc2VydmVyXFwvcHJvdmlkZXJzXFwvbGlub2RlXFwvZmVhdHVyZXNcXC97ZmVhdHVyZX1cIixcIm5hbWVcIjpcImZlYXR1cmVzLmRlc3Ryb3lcIixcImFjdGlvblwiOlwiU2VydmVyXFxQcm92aWRlcnNcXExpbm9kZVxcTGlub2RlU2VydmVyRmVhdHVyZXNDb250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJsb2dpblwiLFwibmFtZVwiOlwibG9naW5cIixcImFjdGlvblwiOlwiQXV0aFxcTG9naW5Db250cm9sbGVyQHNob3dMb2dpbkZvcm1cIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwibG9naW5cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJBdXRoXFxMb2dpbkNvbnRyb2xsZXJAbG9naW5cIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwibG9nb3V0XCIsXCJuYW1lXCI6XCJsb2dvdXRcIixcImFjdGlvblwiOlwiQXV0aFxcTG9naW5Db250cm9sbGVyQGxvZ291dFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJyZWdpc3RlclwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkF1dGhcXFJlZ2lzdGVyQ29udHJvbGxlckByZWdpc3RlclwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJwYXNzd29yZFxcL2VtYWlsXCIsXCJuYW1lXCI6XCJwYXNzd29yZC5lbWFpbFwiLFwiYWN0aW9uXCI6XCJBdXRoXFxGb3Jnb3RQYXNzd29yZENvbnRyb2xsZXJAc2VuZFJlc2V0TGlua0VtYWlsXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwicGFzc3dvcmRcXC9yZXNldFxcL3t0b2tlbn1cIixcIm5hbWVcIjpcInBhc3N3b3JkLnJlc2V0XCIsXCJhY3Rpb25cIjpcIkF1dGhcXFJlc2V0UGFzc3dvcmRDb250cm9sbGVyQHNob3dSZXNldEZvcm1cIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwicGFzc3dvcmRcXC9yZXNldFwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkF1dGhcXFJlc2V0UGFzc3dvcmRDb250cm9sbGVyQHJlc2V0XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwicHJvdmlkZXJcXC97cHJvdmlkZXJ9XFwvbGlua1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkF1dGhcXE9hdXRoQ29udHJvbGxlckBuZXdQcm92aWRlclwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInByb3ZpZGVyXFwve3Byb3ZpZGVyfVxcL2NhbGxiYWNrXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQXV0aFxcT2F1dGhDb250cm9sbGVyQGdldEhhbmRsZVByb3ZpZGVyQ2FsbGJhY2tcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwic3RyaXBlXFwvd2ViaG9va1wiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlxcTGFyYXZlbFxcQ2FzaGllclxcSHR0cFxcQ29udHJvbGxlcnNcXFdlYmhvb2tDb250cm9sbGVyQGhhbmRsZVdlYmhvb2tcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJzdWJzY3JpcHRpb25cXC9wbGFuc1wiLFwibmFtZVwiOlwicGxhbnMuaW5kZXhcIixcImFjdGlvblwiOlwiU3Vic2NyaXB0aW9uQ29udHJvbGxlckBpbmRleFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInN1YnNjcmlwdGlvblxcL3BsYW5zXFwvY3JlYXRlXCIsXCJuYW1lXCI6XCJwbGFucy5jcmVhdGVcIixcImFjdGlvblwiOlwiU3Vic2NyaXB0aW9uQ29udHJvbGxlckBjcmVhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiUE9TVFwiXSxcInVyaVwiOlwic3Vic2NyaXB0aW9uXFwvcGxhbnNcIixcIm5hbWVcIjpcInBsYW5zLnN0b3JlXCIsXCJhY3Rpb25cIjpcIlN1YnNjcmlwdGlvbkNvbnRyb2xsZXJAc3RvcmVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJzdWJzY3JpcHRpb25cXC9wbGFuc1xcL3twbGFufVwiLFwibmFtZVwiOlwicGxhbnMuc2hvd1wiLFwiYWN0aW9uXCI6XCJTdWJzY3JpcHRpb25Db250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJzdWJzY3JpcHRpb25cXC9wbGFuc1xcL3twbGFufVxcL2VkaXRcIixcIm5hbWVcIjpcInBsYW5zLmVkaXRcIixcImFjdGlvblwiOlwiU3Vic2NyaXB0aW9uQ29udHJvbGxlckBlZGl0XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBVVFwiLFwiUEFUQ0hcIl0sXCJ1cmlcIjpcInN1YnNjcmlwdGlvblxcL3BsYW5zXFwve3BsYW59XCIsXCJuYW1lXCI6XCJwbGFucy51cGRhdGVcIixcImFjdGlvblwiOlwiU3Vic2NyaXB0aW9uQ29udHJvbGxlckB1cGRhdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiREVMRVRFXCJdLFwidXJpXCI6XCJzdWJzY3JpcHRpb25cXC9wbGFuc1xcL3twbGFufVwiLFwibmFtZVwiOlwicGxhbnMuZGVzdHJveVwiLFwiYWN0aW9uXCI6XCJTdWJzY3JpcHRpb25Db250cm9sbGVyQGRlc3Ryb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCIsXCJQT1NUXCIsXCJQVVRcIixcIlBBVENIXCIsXCJERUxFVEVcIl0sXCJ1cmlcIjpcIndlYmhvb2tcXC9kZXBsb3lcXC97c2l0ZUhhc2hJZH1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJXZWJIb29rQ29udHJvbGxlckBkZXBsb3lcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCIsXCJQT1NUXCIsXCJQVVRcIixcIlBBVENIXCIsXCJERUxFVEVcIl0sXCJ1cmlcIjpcIndlYmhvb2tcXC9zZXJ2ZXJcXC97c2VydmVySGFzaElkfVxcL3NzbFxcL3VwZGF0ZWRcIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJXZWJIb29rQ29udHJvbGxlckBzZXJ2ZXJTc2xDZXJ0aWZpY2F0ZVVwZGF0ZWRcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ3ZWJob29rXFwve2FueX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJDb250cm9sbGVyQHJlZGlyZWN0VG9BcHBcIn0se1wiaG9zdFwiOlwic3RhdHMuY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ3ZWJob29rXFwvbG9hZHNcXC97c2VydmVySGFzaElkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIldlYkhvb2tDb250cm9sbGVyQGxvYWRNb25pdG9yXCJ9LHtcImhvc3RcIjpcInN0YXRzLmNvZGVwaWVyLmRldlwiLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwid2ViaG9va1xcL21lbW9yeVxcL3tzZXJ2ZXJIYXNoSWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiV2ViSG9va0NvbnRyb2xsZXJAbWVtb3J5TW9uaXRvclwifSx7XCJob3N0XCI6XCJzdGF0cy5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcIndlYmhvb2tcXC9kaXNrdXNhZ2VcXC97c2VydmVySGFzaElkfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIldlYkhvb2tDb250cm9sbGVyQGRpc2tVc2FnZU1vbml0b3JcIn0se1wiaG9zdFwiOlwic3RhdHMuY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ3ZWJob29rXFwve2FueX1cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJDb250cm9sbGVyQHJlZGlyZWN0VG9BcHBcIn0se1wiaG9zdFwiOlwibGlmZWxpbmUuY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ7bGlmZWxpbmVIYXNoSWR9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiTGlmZUxpbmVDb250cm9sbGVyQHVwZGF0ZVwifSx7XCJob3N0XCI6XCJsaWZlbGluZS5jb2RlcGllci5kZXZcIixcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInthbnl9XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQ29udHJvbGxlckByZWRpcmVjdFRvQXBwXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwidGVhbXNcXC9hY2NlcHRcXC97dG9rZW59XCIsXCJuYW1lXCI6XCJ0ZWFtcy5hY2NlcHRfaW52aXRlXCIsXCJhY3Rpb25cIjpcIlVzZXJcXFRlYW1cXFVzZXJUZWFtQ29udHJvbGxlckBhY2NlcHRJbnZpdGVcIn0se1wiaG9zdFwiOlwic3R5bGUtZ3VpZGUuY29kZXBpZXIuZGV2XCIsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJcXC9cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJQdWJsaWNDb250cm9sbGVyQHN0eWxlR3VpZGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJwcml2YWN5XCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiUHVibGljQ29udHJvbGxlckBwcml2YWN5XCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIlBPU1RcIl0sXCJ1cmlcIjpcInN1YnNjcmliZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlB1YmxpY0NvbnRyb2xsZXJAc3Vic2NyaWJlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwidGVybXMtb2Ytc2VydmljZVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlB1YmxpY0NvbnRyb2xsZXJAdGVybXNPZlNlcnZpY2VcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJcXC9cIixcIm5hbWVcIjpudWxsLFwiYWN0aW9uXCI6XCJDb250cm9sbGVyQGFwcFwifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJHRVRcIixcIkhFQURcIl0sXCJ1cmlcIjpcInNlY29uZC1hdXRoXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiQXV0aFxcU2Vjb25kQXV0aENvbnRyb2xsZXJAc2hvd1wifSx7XCJob3N0XCI6bnVsbCxcIm1ldGhvZHNcIjpbXCJQT1NUXCJdLFwidXJpXCI6XCJzZWNvbmQtYXV0aFwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkF1dGhcXFNlY29uZEF1dGhDb250cm9sbGVyQHN0b3JlXCJ9LHtcImhvc3RcIjpudWxsLFwibWV0aG9kc1wiOltcIkdFVFwiLFwiSEVBRFwiXSxcInVyaVwiOlwic2xhY2staW52aXRlXCIsXCJuYW1lXCI6bnVsbCxcImFjdGlvblwiOlwiVXNlclxcVXNlckNvbnRyb2xsZXJAc2xhY2tJbnZpdGVcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJzdWJzY3JpcHRpb25cXC9pbnZvaWNlc1xcL3tpbnZvaWNlfVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIlVzZXJcXFN1YnNjcmlwdGlvblxcVXNlclN1YnNjcmlwdGlvbkludm9pY2VDb250cm9sbGVyQHNob3dcIn0se1wiaG9zdFwiOm51bGwsXCJtZXRob2RzXCI6W1wiR0VUXCIsXCJIRUFEXCJdLFwidXJpXCI6XCJ7YW55fVwiLFwibmFtZVwiOm51bGwsXCJhY3Rpb25cIjpcIkNvbnRyb2xsZXJAYXBwXCJ9XSxcbiAgICAgICAgICAgIHByZWZpeDogJycsXG5cbiAgICAgICAgICAgIHJvdXRlIDogZnVuY3Rpb24gKG5hbWUsIHBhcmFtZXRlcnMsIHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZSB8fCB0aGlzLmdldEJ5TmFtZShuYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmICggISByb3V0ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b1JvdXRlKHJvdXRlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVybDogZnVuY3Rpb24gKHVybCwgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzIHx8IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFyIHVyaSA9IHVybCArICcvJyArIHBhcmFtZXRlcnMuam9pbignLycpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29ycmVjdFVybCh1cmkpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdG9Sb3V0ZSA6IGZ1bmN0aW9uIChyb3V0ZSwgcGFyYW1ldGVycykge1xuICAgICAgICAgICAgICAgIHZhciB1cmkgPSB0aGlzLnJlcGxhY2VOYW1lZFBhcmFtZXRlcnMocm91dGUudXJpLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICB2YXIgcXMgID0gdGhpcy5nZXRSb3V0ZVF1ZXJ5U3RyaW5nKHBhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWJzb2x1dGUgJiYgdGhpcy5pc090aGVySG9zdChyb3V0ZSkpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIvL1wiICsgcm91dGUuaG9zdCArIFwiL1wiICsgdXJpICsgcXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29ycmVjdFVybCh1cmkgKyBxcyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc090aGVySG9zdDogZnVuY3Rpb24gKHJvdXRlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGUuaG9zdCAmJiByb3V0ZS5ob3N0ICE9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlcGxhY2VOYW1lZFBhcmFtZXRlcnMgOiBmdW5jdGlvbiAodXJpLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgdXJpID0gdXJpLnJlcGxhY2UoL1xceyguKj8pXFw/P1xcfS9nLCBmdW5jdGlvbihtYXRjaCwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcmFtZXRlcnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJhbWV0ZXJzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIFN0cmlwIG91dCBhbnkgb3B0aW9uYWwgcGFyYW1ldGVycyB0aGF0IHdlcmUgbm90IGdpdmVuXG4gICAgICAgICAgICAgICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcL1xcey4qP1xcP1xcfS9nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdXJpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0Um91dGVRdWVyeVN0cmluZyA6IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHFzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXMucHVzaChrZXkgKyAnPScgKyBwYXJhbWV0ZXJzW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHFzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAnPycgKyBxcy5qb2luKCcmJyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRCeU5hbWUgOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnJvdXRlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0aGlzLnJvdXRlc1trZXldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0QnlBY3Rpb24gOiBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5yb3V0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm91dGVzLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpcy5yb3V0ZXNba2V5XS5hY3Rpb24gPT09IGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRDb3JyZWN0VXJsOiBmdW5jdGlvbiAodXJpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMucHJlZml4ICsgJy8nICsgdXJpLnJlcGxhY2UoL15cXC8/LywgJycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCAhIHRoaXMuYWJzb2x1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yb290VXJsLnJlcGxhY2UoJy9cXC8/JC8nLCAnJykgKyB1cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGdldExpbmtBdHRyaWJ1dGVzID0gZnVuY3Rpb24oYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKCAhIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhdHRycyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzLnB1c2goa2V5ICsgJz1cIicgKyBhdHRyaWJ1dGVzW2tleV0gKyAnXCInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhdHRycy5qb2luKCcgJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGdldEh0bWxMaW5rID0gZnVuY3Rpb24gKHVybCwgdGl0bGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHRpdGxlICAgICAgPSB0aXRsZSB8fCB1cmw7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gZ2V0TGlua0F0dHJpYnV0ZXMoYXR0cmlidXRlcyk7XG5cbiAgICAgICAgICAgIHJldHVybiAnPGEgaHJlZj1cIicgKyB1cmwgKyAnXCIgJyArIGF0dHJpYnV0ZXMgKyAnPicgKyB0aXRsZSArICc8L2E+JztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSB1cmwgZm9yIGEgZ2l2ZW4gY29udHJvbGxlciBhY3Rpb24uXG4gICAgICAgICAgICAvLyBsYXJvdXRlLmFjdGlvbignSG9tZUNvbnRyb2xsZXJAZ2V0SW5kZXgnLCBbcGFyYW1zID0ge31dKVxuICAgICAgICAgICAgYWN0aW9uIDogZnVuY3Rpb24gKG5hbWUsIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycyB8fCB7fTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZXMucm91dGUobmFtZSwgcGFyYW1ldGVycywgcm91dGVzLmdldEJ5QWN0aW9uKG5hbWUpKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgdXJsIGZvciBhIGdpdmVuIG5hbWVkIHJvdXRlLlxuICAgICAgICAgICAgLy8gbGFyb3V0ZS5yb3V0ZSgncm91dGVOYW1lJywgW3BhcmFtcyA9IHt9XSlcbiAgICAgICAgICAgIHJvdXRlIDogZnVuY3Rpb24gKHJvdXRlLCBwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1ldGVycyA9IHBhcmFtZXRlcnMgfHwge307XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVzLnJvdXRlKHJvdXRlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgZnVsbHkgcXVhbGlmaWVkIFVSTCB0byB0aGUgZ2l2ZW4gcGF0aC5cbiAgICAgICAgICAgIC8vIGxhcm91dGUucm91dGUoJ3VybCcsIFtwYXJhbXMgPSB7fV0pXG4gICAgICAgICAgICB1cmwgOiBmdW5jdGlvbiAocm91dGUsIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycyB8fCB7fTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZXMudXJsKHJvdXRlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgaHRtbCBsaW5rIHRvIHRoZSBnaXZlbiB1cmwuXG4gICAgICAgICAgICAvLyBsYXJvdXRlLmxpbmtfdG8oJ2Zvby9iYXInLCBbdGl0bGUgPSB1cmxdLCBbYXR0cmlidXRlcyA9IHt9XSlcbiAgICAgICAgICAgIGxpbmtfdG8gOiBmdW5jdGlvbiAodXJsLCB0aXRsZSwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHVybCA9IHRoaXMudXJsKHVybCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SHRtbExpbmsodXJsLCB0aXRsZSwgYXR0cmlidXRlcyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIGh0bWwgbGluayB0byB0aGUgZ2l2ZW4gcm91dGUuXG4gICAgICAgICAgICAvLyBsYXJvdXRlLmxpbmtfdG9fcm91dGUoJ3JvdXRlLm5hbWUnLCBbdGl0bGU9dXJsXSwgW3BhcmFtZXRlcnMgPSB7fV0sIFthdHRyaWJ1dGVzID0ge31dKVxuICAgICAgICAgICAgbGlua190b19yb3V0ZSA6IGZ1bmN0aW9uIChyb3V0ZSwgdGl0bGUsIHBhcmFtZXRlcnMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5yb3V0ZShyb3V0ZSwgcGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SHRtbExpbmsodXJsLCB0aXRsZSwgYXR0cmlidXRlcyk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIGh0bWwgbGluayB0byB0aGUgZ2l2ZW4gY29udHJvbGxlciBhY3Rpb24uXG4gICAgICAgICAgICAvLyBsYXJvdXRlLmxpbmtfdG9fYWN0aW9uKCdIb21lQ29udHJvbGxlckBnZXRJbmRleCcsIFt0aXRsZT11cmxdLCBbcGFyYW1ldGVycyA9IHt9XSwgW2F0dHJpYnV0ZXMgPSB7fV0pXG4gICAgICAgICAgICBsaW5rX3RvX2FjdGlvbiA6IGZ1bmN0aW9uKGFjdGlvbiwgdGl0bGUsIHBhcmFtZXRlcnMsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5hY3Rpb24oYWN0aW9uLCBwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRIdG1sTGluayh1cmwsIHRpdGxlLCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgfSkuY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIEV4cG9zZSB0aGUgY2xhc3MgZWl0aGVyIHZpYSBBTUQsIENvbW1vbkpTIG9yIHRoZSBnbG9iYWwgb2JqZWN0XG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGxhcm91dGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyl7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gbGFyb3V0ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sYXJvdXRlID0gbGFyb3V0ZTtcbiAgICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbGFyb3V0ZS5qcyIsImV4cG9ydCBjb25zdCBub3cgPSAoKSA9PiB7XG4gIHJldHVybiBtb21lbnQoKS50eihtb21lbnQudHouZ3Vlc3MoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcGFyc2VEYXRlID0gZGF0ZSA9PiB7XG4gIHJldHVybiBtb21lbnQoZGF0ZSkudHoobW9tZW50LnR6Lmd1ZXNzKCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGh1bWFuaXplRGlmZiA9IChkYXRlMSwgZGF0ZTIpID0+IHtcbiAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbihtb21lbnQoZGF0ZTIpLmRpZmYobW9tZW50KGRhdGUxKSwgJ21pbnV0ZXMnKSwgXCJtaW51dGVzXCIpLmh1bWFuaXplKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0VGltZSA9IChkYXRlKSA9PiB7XG4gIHJldHVybiBwYXJzZURhdGUoZGF0ZSkuZm9ybWF0KCdoOm1tIEEnKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VGltZUhlaWdodFN0eWxlID0gKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgPT4ge1xuXG4gICAgbGV0IHN0YXJ0RGF0ZVBhcnNlZCA9IHBhcnNlRGF0ZShzdGFydERhdGUpO1xuICAgIGxldCBzdGFydEVNID0gKCgoKHN0YXJ0RGF0ZVBhcnNlZC5mb3JtYXQoJ0hIJykgKiA2MCkgKyBwYXJzZUludChzdGFydERhdGVQYXJzZWQuZm9ybWF0KCdtbScpKSkpICogNikgLyA2MDtcblxuICAgIGxldCBlbmREYXRlUGFyc2VkID0gcGFyc2VEYXRlKGVuZERhdGUpO1xuICAgIGxldCBlbmRFbSA9ICgoKCgoZW5kRGF0ZVBhcnNlZC5mb3JtYXQoJ0hIJykgKiA2MCkgKyBwYXJzZUludChlbmREYXRlUGFyc2VkLmZvcm1hdCgnbW0nKSkpKSAqIDYpIC8gNjApIC0gc3RhcnRFTTtcblxuICAgIHJldHVybiBgdG9wOiR7c3RhcnRFTSB9ZW07IGhlaWdodDoke2VuZEVtIH1lbTtgO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvZGF0ZS10aW1lL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGxvY2FsID0gKCkgPT4ge1xuICByZXR1cm4gTGFyYXZlbC5lbnYgPT09ICdsb2NhbCc7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9lbnZpcm9ubWVudC9pbmRleC5qcyIsIi8vIE5PVEUgLSB0aGlzIHdpbGwgbm90IHdvcmsgd2l0aCBQVVQhISFcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zeW1mb255L3N5bWZvbnkvaXNzdWVzLzkyMjZcbmV4cG9ydCBjb25zdCBnZXRGb3JtRGF0YSA9IGZ1bmN0aW9uKGZvcm0pIHtcbiAgaWYgKCEkKGZvcm0pLmlzKFwiZm9ybVwiKSkge1xuICAgIGZvcm0gPSAkKGZvcm0pLmZpbmQoXCJmb3JtXCIpWzBdO1xuICB9XG4gIHJldHVybiBuZXcgRm9ybURhdGEoZm9ybSk7XG59O1xuXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vLi4vY2xhc3Nlcy9Gb3JtXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGb3JtID0gKGRhdGEsIHJlc2V0KSA9PiB7XG4gIHJldHVybiBuZXcgRm9ybShkYXRhLCByZXNldCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9mb3JtL2luZGV4LmpzIiwiaW1wb3J0IHsgY3JlYXRlRm9ybSwgZ2V0Rm9ybURhdGEgfSBmcm9tIFwiLi9mb3JtXCI7XG5cbmltcG9ydCB7IGJhY2ssIGFjdGlvbiB9IGZyb20gXCIuL3JvdXRlc1wiO1xuXG5pbXBvcnQgeyBub3csIGh1bWFuaXplRGlmZiwgcGFyc2VEYXRlLCBmb3JtYXRUaW1lLCBnZXRUaW1lSGVpZ2h0U3R5bGUgfSBmcm9tIFwiLi9kYXRlLXRpbWVcIjtcblxuaW1wb3J0IHsgbG9jYWwgfSBmcm9tIFwiLi9lbnZpcm9ubWVudFwiO1xuXG5pbXBvcnQgeyBpc0FkbWluIH0gZnJvbSBcIi4vcGVybWlzc2lvbnNcIjtcblxuaW1wb3J0IHsgc2hvd0Vycm9yLCBzaG93U3VjY2VzcywgaGFuZGxlQXBpRXJyb3IgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5cblZ1ZS5taXhpbih7XG4gIG1ldGhvZHM6IHtcbiAgICBub3csXG4gICAgYmFjayxcbiAgICBodW1hbml6ZURpZmYsXG4gICAgYWN0aW9uLFxuICAgIHNob3dFcnJvcixcbiAgICBwYXJzZURhdGUsXG4gICAgZm9ybWF0VGltZSxcbiAgICBjcmVhdGVGb3JtLFxuICAgIHNob3dTdWNjZXNzLFxuICAgIGdldEZvcm1EYXRhLFxuICAgIGhhbmRsZUFwaUVycm9yLFxuICAgIGdldFRpbWVIZWlnaHRTdHlsZVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxvY2FsLFxuICAgIGlzQWRtaW4sXG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9taXhpbnMvaGVscGVycy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBzaG93RXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlLCB0aXRsZSwgdGltZW91dCkge1xuICBpZiAodGltZW91dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGltZW91dCA9IDUwMDA7XG4gIH1cblxuICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcIm5vdGlmaWNhdGlvbnMvYWRkXCIsIHtcbiAgICB0aXRsZTogIV8uaXNFbXB0eSh0aXRsZSkgPyB0aXRsZSA6IFwiRXJyb3IhIVwiLFxuICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgY2xhc3M6IFwiZXJyb3JcIixcbiAgICB0aW1lb3V0OiB0aW1lb3V0XG4gIH0pO1xufTtcbmV4cG9ydCBjb25zdCBzaG93U3VjY2VzcyA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHRpdGxlLCB0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aW1lb3V0ID0gNTAwMDtcbiAgfVxuXG4gIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwibm90aWZpY2F0aW9ucy9hZGRcIiwge1xuICAgIHRpdGxlOiAhXy5pc0VtcHR5KHRpdGxlKSA/IHRpdGxlIDogXCJTdWNjZXNzISFcIixcbiAgICB0ZXh0OiBtZXNzYWdlLFxuICAgIGNsYXNzOiBcInN1Y2Nlc3NcIixcbiAgICB0aW1lb3V0OiB0aW1lb3V0XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFwaUVycm9yID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgbGV0IG1lc3NhZ2UgPSByZXNwb25zZTtcblxuICBpZiAoXy5pc09iamVjdChyZXNwb25zZSkpIHtcbiAgICBpZiAoXy5pc1NldChyZXNwb25zZS5lcnJvcnMpKSB7XG4gICAgICBtZXNzYWdlID0gcmVzcG9uc2UuZXJyb3JzO1xuICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdChyZXNwb25zZS5kYXRhKSkge1xuICAgICAgbWVzc2FnZSA9IFwiXCI7XG4gICAgICBfLmVhY2gocmVzcG9uc2UuZGF0YS5lcnJvcnMsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gZXJyb3IgKyBcIjxicj5cIjtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlID0gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG4gIH1cblxuICBpZiAoXy5pc1N0cmluZyhtZXNzYWdlKSkge1xuICAgIHRoaXMuc2hvd0Vycm9yKG1lc3NhZ2UpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybihcIlVOQUJMRSBUTyBQQVJTRSBFUlJPUlwiKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvbm90aWZpY2F0aW9ucy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBpc0FkbWluID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIucm9sZSA9PT0gXCJhZG1pblwiO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21peGlucy9oZWxwZXJzL3Blcm1pc3Npb25zL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGJhY2sgPSAoKSA9PiB7XG4gIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb24gPSAoYWN0aW9uLCBwYXJhbWV0ZXJzKSA9PiB7XG4gIC8vIHJldHVybiBsYXJvdXRlLmFjdGlvbihhY3Rpb24sIHBhcmFtZXRlcnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2hlbHBlcnMvcm91dGVzL2luZGV4LmpzIiwicmVxdWlyZShcIi4vaGVscGVyc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvbWl4aW5zL2luZGV4LmpzIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHJvdXRlcyB9IGZyb20gXCIuLi9hcHAvcm91dGVzLmpzXCI7XG5cbndpbmRvdy5WdWVSb3V0ZXIgPSByZXF1aXJlKFwidnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuY29tbW9uXCIpO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICBtb2RlOiBcImhpc3RvcnlcIixcbiAgcm91dGVzOiByb3V0ZXNcbn0pO1xuXG4vLyByb3V0ZXIuYmVmb3JlUmVzb2x2ZSgodG8sIGZyb20sIG5leHQpID0+IHtcbi8vICAgLy8gaWYgKCFzdG9yZS5zdGF0ZS51c2VyLnVzZXIuaXNfc3Vic2NyaWJlZCkge1xuLy8gICAvLyAgIGlmICh0by5uYW1lICE9PSBcInN1YnNjcmlwdGlvblwiKSB7XG4vLyAgIC8vICAgICBuZXh0KHtcbi8vICAgLy8gICAgICAgbmFtZTogXCJzdWJzY3JpcHRpb25cIlxuLy8gICAvLyAgICAgfSk7XG4vLyAgIC8vICAgfSBlbHNlIHtcbi8vICAgLy8gICAgIG5leHQoKTtcbi8vICAgLy8gICB9XG4vLyAgIC8vIH0gZWxzZSB7XG4vLyAgIC8vICAgbmV4dCgpO1xuLy8gICAvLyB9XG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb3V0ZXIvaW5kZXguanMiLCJpbXBvcnQgVnVlIGZyb20gXCJ2dWVcIjtcbmltcG9ydCBWdWV4IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi8uLi9jbGFzc2VzL0Zvcm1cIjtcbmltcG9ydCBFcnJvcnMgZnJvbSBcIi4vLi4vY2xhc3Nlcy9FcnJvcnNcIjtcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCIuLi9taXhpbnMvaGVscGVycy9yb3V0ZXNcIjtcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLy4uL2NsYXNzZXMvUmVxdWVzdFwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBtb2R1bGVzIH0gZnJvbSBcIi4vbW9kdWxlc1wiO1xuXG5WdWUudXNlKFZ1ZXgpO1xuVnVlLkZvcm0gPSBGb3JtO1xuVnVlLkVycm9ycyA9IEVycm9ycztcblZ1ZS5SZXF1ZXN0ID0gUmVxdWVzdDtcblxuVnVlLmFjdGlvbiA9IGFjdGlvbjtcblxuVnVlLnJlcXVlc3QgPSBkYXRhID0+IHtcbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KGRhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBtb2R1bGVzOiBtb2R1bGVzXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvaW5kZXguanMiLCJleHBvcnQgY29uc3QgbG9nb3V0ID0gKGNvbnRleHQsIGRhdGEpID0+IHtcbiAgcmV0dXJuIFZ1ZS5yZXF1ZXN0KGRhdGEpXG4gICAgLnBvc3QoVnVlLmFjdGlvbihcIkF1dGhMb2dpbkNvbnRyb2xsZXJAbG9nb3V0XCIpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL1wiO1xuICAgIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvYXV0aC9hY3Rpb25zLmpzIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tIFwiLi9tdXRhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL2F1dGgvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9hdXRoL3N0YXRlLmpzIiwiaW1wb3J0IGF1dGggZnJvbSBcIi4vYXV0aFwiO1xuaW1wb3J0IHJvb21zIGZyb20gJy4vcm9vbXMnO1xuaW1wb3J0IHN5c3RlbSBmcm9tIFwiLi9zeXN0ZW1cIjtcbmltcG9ydCBwcm92aWRlcnMgZnJvbSBcIi4vcHJvdmlkZXJzXCI7XG5pbXBvcnQgbm90aWZpY2F0aW9ucyBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXV0aCxcbiAgcm9vbXMsXG4gIHN5c3RlbSxcbiAgcHJvdmlkZXJzLFxuICBub3RpZmljYXRpb25zLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBhZGQgPSAoeyBjb21taXQgfSwgbm90aWZpY2F0aW9uKSA9PiB7XG4gIGNvbW1pdChcImFkZFwiLCBub3RpZmljYXRpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9ICh7IGNvbW1pdCB9LCBub3RpZmljYXRpb24pID0+IHtcbiAgY29tbWl0KFwicmVtb3ZlXCIsIG5vdGlmaWNhdGlvbik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL25vdGlmaWNhdGlvbnMvYWN0aW9ucy5qcyIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSBcIi4vbXV0YXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIGFjdGlvbnMsXG4gIG11dGF0aW9ucyxcbiAgbmFtZXNwYWNlZDogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9ub3RpZmljYXRpb25zL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IGFkZCA9IChzdGF0ZSwgbm90aWZpY2F0aW9uKSA9PiB7XG4gIHN0YXRlLm5vdGlmaWNhdGlvbnMucHVzaChub3RpZmljYXRpb24pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IChzdGF0ZSwgbm90aWZpY2F0aW9uKSA9PiB7XG4gIHN0YXRlLm5vdGlmaWNhdGlvbnMgPSBfLndpdGhvdXQoc3RhdGUubm90aWZpY2F0aW9ucywgbm90aWZpY2F0aW9uKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvbm90aWZpY2F0aW9ucy9tdXRhdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5vdGlmaWNhdGlvbnM6IFtdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL25vdGlmaWNhdGlvbnMvc3RhdGUuanMiLCJleHBvcnQgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgIFZ1ZS5yZXF1ZXN0KCkuZ2V0KCcvYXBpL3Byb3ZpZGVycycsICdwcm92aWRlcnMvc2V0QWxsJylcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL2FjdGlvbnMuanMiLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCIuL211dGF0aW9uc1wiO1xuXG5pbXBvcnQgcm9vbXMgZnJvbSAnLi9tb2R1bGVzL3Jvb21zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlLFxuICAgIG1vZHVsZXMgOiB7XG4gICAgICAgIHJvb21zXG4gICAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9wcm92aWRlcnMvaW5kZXguanMiLCJleHBvcnQgY29uc3QgZ2V0ID0gKHt9LCBwcm92aWRlcikgPT4ge1xuICAgIFZ1ZS5yZXF1ZXN0KCkuZ2V0KGAvYXBpL3Byb3ZpZGVycy8ke3Byb3ZpZGVyfS9yb29tc2AsICdwcm92aWRlcnMvcm9vbXMvc2V0QWxsJylcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9ICh7fSwgZGF0YSkgPT4ge1xuICAgIFZ1ZS5yZXF1ZXN0KGRhdGEpLnBvc3QoYC9hcGkvcHJvdmlkZXJzLyR7ZGF0YS5wcm92aWRlcn0vcm9vbXNgLCAncm9vbXMvYWRkJykudGhlbigocm9vbSkgPT4ge1xuICAgICAgICBhcHAuJHJvdXRlci5wdXNoKGAvcm9vbXMvJHtyb29tLmlkfWApXG4gICAgfSlcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL21vZHVsZXMvcm9vbXMvYWN0aW9ucy5qcyIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSBcIi4vbXV0YXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGUsXG4gIGFjdGlvbnMsXG4gIG11dGF0aW9ucyxcbiAgbmFtZXNwYWNlZDogdHJ1ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9wcm92aWRlcnMvbW9kdWxlcy9yb29tcy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBzZXRBbGwgPSAoc3RhdGUsIHsgcmVzcG9uc2UgfSkgPT4ge1xuICBzdGF0ZS5yb29tcyA9IHJlc3BvbnNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9wcm92aWRlcnMvbW9kdWxlcy9yb29tcy9tdXRhdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJvb21zOiBbXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9wcm92aWRlcnMvbW9kdWxlcy9yb29tcy9zdGF0ZS5qcyIsImV4cG9ydCBjb25zdCBzZXRBbGwgPSAoc3RhdGUsIHsgcmVzcG9uc2UgfSkgPT4ge1xuICBzdGF0ZS5wcm92aWRlcnMgPSByZXNwb25zZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcHJvdmlkZXJzL211dGF0aW9ucy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvdmlkZXJzOiBbXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9wcm92aWRlcnMvc3RhdGUuanMiLCJleHBvcnQgY29uc3QgZ2V0ID0gKHt9KSA9PiB7XG4gICAgVnVlLnJlcXVlc3QoKS5nZXQoYC9hcGkvcm9vbXNgLCAncm9vbXMvc2V0QWxsJylcbn07XG5cbmV4cG9ydCBjb25zdCBzaG93ID0gKHt9LCByb29tKSA9PiB7XG4gICAgVnVlLnJlcXVlc3QoKS5nZXQoYC9hcGkvcm9vbXMvJHtyb29tfWAsICdyb29tcy9zZXQnKVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvYWN0aW9ucy5qcyIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbnMgZnJvbSBcIi4vbXV0YXRpb25zXCI7XG5cbmltcG9ydCBldmVudHMgZnJvbSAnLi9tb2R1bGVzL2V2ZW50cydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBtb2R1bGVzIDoge1xuICAgICAgZXZlbnRzXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvaW5kZXguanMiLCJleHBvcnQgY29uc3QgZ2V0ID0gKHt9LCByb29tKSA9PiB7XG4gICAgVnVlLnJlcXVlc3QoKS5nZXQoYC9hcGkvcm9vbXMvJHtyb29tfS9ldmVudHNgLCAncm9vbXMvZXZlbnRzL3NldEFsbCcpXG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlID0gKHt9LCBkYXRhKSA9PiB7XG4gICAgVnVlLnJlcXVlc3QoZGF0YSkucG9zdChgL2FwaS9yb29tcy8ke2RhdGEucm9vbX0vZXZlbnRzYCwgJ3Jvb21zL2V2ZW50cy9hZGQnKVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlID0gKHt9LCBkYXRhKSA9PiB7XG4gICAgVnVlLnJlcXVlc3QoZGF0YSkucHV0KGAvYXBpL3Jvb21zLyR7ZGF0YS5yb29tfS9ldmVudHMvJHtkYXRhLmV2ZW50fWAsICdyb29tcy9ldmVudHMvdXBkYXRlJylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tb2R1bGVzL2V2ZW50cy9hY3Rpb25zLmpzIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tIFwiLi9tdXRhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZSxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zLFxuICBuYW1lc3BhY2VkOiB0cnVlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3Jvb21zL21vZHVsZXMvZXZlbnRzL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IHNldEFsbCA9IChzdGF0ZSwgeyByZXNwb25zZSB9KSA9PiB7XG4gICAgVnVlLnNldChzdGF0ZSwgJ2V2ZW50cycsIHJlc3BvbnNlKVxufTtcblxuZXhwb3J0IGNvbnN0IHNldCA9IChzdGF0ZSwgYm9va2luZykgPT4ge1xuICAgIFZ1ZS5zZXQoc3RhdGUsICdldmVudCcsIGJvb2tpbmcpXG59O1xuXG5leHBvcnQgY29uc3QgYWRkID0gKHN0YXRlLCB7IHJlc3BvbnNlIH0pID0+IHtcbiAgICBzdGF0ZS5ldmVudHMucHVzaChyZXNwb25zZSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlID0gKHN0YXRlLCB7cmVzcG9uc2V9KSA9PiB7XG4gICAgbGV0IGJvb2tpbmdLZXkgPSBfLmZpbmRLZXkoc3RhdGUuZXZlbnRzLCB7IGlkIDogcmVzcG9uc2UuaWQgfSk7XG4gICAgaWYoYm9va2luZ0tleSkge1xuICAgICAgICBWdWUuc2V0KHN0YXRlLmV2ZW50cywgYm9va2luZ0tleSwgcmVzcG9uc2UpO1xuICAgIH1cbn07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tb2R1bGVzL2V2ZW50cy9tdXRhdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGV2ZW50czogW10sXG4gIGV2ZW50IDogbnVsbCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvbW9kdWxlcy9ldmVudHMvc3RhdGUuanMiLCJleHBvcnQgY29uc3Qgc2V0ID0gKHN0YXRlLCB7IHJlc3BvbnNlIH0pID0+IHtcbiAgICBWdWUuc2V0KHN0YXRlLCAncm9vbScsIHJlc3BvbnNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRBbGwgPSAoc3RhdGUsIHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgIFZ1ZS5zZXQoc3RhdGUsICdyb29tcycsIHJlc3BvbnNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGQgPSAoc3RhdGUsIHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgIHN0YXRlLnJvb21zLnB1c2gocmVzcG9uc2UpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9yb29tcy9tdXRhdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJvb206IG51bGwsXG4gIHJvb21zIDogW11cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvcm9vbXMvc3RhdGUuanMiLCJleHBvcnQgY29uc3Qgc2V0VmVyc2lvbiA9ICh7IGNvbW1pdCB9LCBkYXRhKSA9PiB7XG4gIGNvbW1pdChcInNldFZlcnNpb25cIiwgZGF0YS52ZXJzaW9uKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc3lzdGVtL2FjdGlvbnMuanMiLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCIuL211dGF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBhY3Rpb25zLFxuICBtdXRhdGlvbnMsXG4gIG5hbWVzcGFjZWQ6IHRydWVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3N0b3JlL21vZHVsZXMvc3lzdGVtL2luZGV4LmpzIiwiZXhwb3J0IGNvbnN0IHNldFZlcnNpb24gPSAoc3RhdGUsIHZlcnNpb24pID0+IHtcbiAgc3RhdGUudmVyc2lvbiA9IHZlcnNpb247XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdG9yZS9tb2R1bGVzL3N5c3RlbS9tdXRhdGlvbnMuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHZlcnNpb246IExhcmF2ZWwudmVyc2lvblxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvc3RvcmUvbW9kdWxlcy9zeXN0ZW0vc3RhdGUuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zYXNzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9