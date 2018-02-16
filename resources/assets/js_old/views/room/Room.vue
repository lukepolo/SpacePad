<template>
    <div id="room" v-if="room">
        <div id="room-content">

            <nav class="room-header level" :class="{ booked : currentBooking , free : !currentBooking}">
                <!-- Left side -->
                <div class="level-left">
                    <span @click="showSideMenu=true">
                        <i class="fal fa-bars"></i>
                    </span>
                    <h2>{{ room.name }}</h2>
                </div>
                <!-- Right side -->
                <div class="level-right">
                    <h2>{{ currentDate }}</h2>
                </div>
            </nav>

            <!--content -->
            <div class="columns room-details">

                <div class="column calendar-wrapper">
                    <div class="booking-status">
                        <template v-if="currentBooking">
                            <h1>Booked until {{ formatTime(currentBooking.end_date) }}</h1>
                        </template>
                        <template v-else-if="nextBooking">
                            <h1>Booked in {{ humanizeDiff(now(), parseDate(nextBooking.start_date)) }} </h1>
                        </template>
                        <template v-else>
                            <h1>Free</h1>
                        </template>
                    </div>
                    <calendar></calendar>
                </div>

                <div class="column tabs">
                    <div class="tab-content"  v-if="selectedBooking">
                        10 Seats, TV : HDMI <-- TODO
                        <hr>
                        <h2>
                            {{ selectedBooking.subject }}<br>
                            <small>{{ formatTime(selectedBooking.start_date) }} - {{ formatTime(selectedBooking.end_date) }}</small>
                        </h2>
                        <booking-attendees :booking="selectedBooking"></booking-attendees>

                        <br><br><br><br>

                        <template v-if="currentBooking == selectedBooking">
                            <div class="btn" @click="endBooking">End Booking</div>
                        </template>

                    </div>
                </div>
            </div>

            <div class="room-footer" :class="{ booked : currentBooking , free : !currentBooking}">
                <div class="level">
                    <!-- Left side -->
                    <div class="level-left">
                        <div class="level-item">
                            <template v-if="checkingIntoBooking && !checkingIntoBooking.checked_in">
                                <div class="btn" @click="checkIn()">
                                    Check In
                                </div>
                            </template>
                        </div>
                    </div>

                    <!-- Right side -->
                    <div class="level-right">
                        <template v-if="!currentBooking">
                            <div class="book-room-container">
                                <span>Book</span>
                                <span class="btn" @click="bookRoom(15)">15</span>
                                <span class="btn" @click="bookRoom(30)">30</span>
                                <span class="btn" @click="bookRoom(45)">45</span>
                                <span class="btn" @click="bookRoom(60)">60</span>
                            </div>
                        </template>
                        <p class="level-item" @click="showSideMenu=true">
                            Find Another space
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <transition name="slide">
            <aside class="side-menu" v-if="showSideMenu">
                <p class="menu-label">
                    <span @click="showSideMenu=false">
                        <i class="fal fa-bars"></i>
                    </span>
                    Manage
                </p>
                <ul class="menu-list">
                    <li><a>Change Room</a></li>
                    <li><a>Edit Rooms Details</a></li>
                </ul>
            </aside>
        </transition>

    </div>
</template>

<script>
    import Calendar from './components/Calendar.vue';
    import BookingAttendees from './components/BookingAttendees.vue';

    export default {
        components : {
            Calendar,
            BookingAttendees,
        },
        data() {
          return {
              showSideMenu : false
          }
        },
        created() {
            this.$store.dispatch('rooms/show', this.$route.params.room);
            this.currentTimeScrollInterval = setInterval(() => {
                this.$store.dispatch('rooms/events/get', this.$route.params.room)
            }, ((5 * 60) * 1000));
            this.$store.dispatch('rooms/events/get', this.$route.params.room)
        },
        methods : {
            bookRoom(minutes) {
                this.$store.dispatch('rooms/events/create', {
                    minutes : minutes,
                    room : this.$route.params.room,
                })
            },
            checkIn() {
                if(this.checkingIntoBooking) {
                    let booking = this.checkingIntoBooking;
                    this.$store.dispatch('rooms/events/update', {
                        event : booking.id,
                        end : booking.end_date,
                        room : this.$route.params.room,
                        start : this.now() < this.parseDate(booking.start_date) ? this.now() : booking.start_date,
                        checked_in : true,
                    })
                }
            },
            endBooking() {
                this.$store.dispatch('rooms/events/update', {
                    end : this.now(),
                    room : this.$route.params.room,
                    event : this.currentBooking.id,
                    start : this.currentBooking.start_date,
                })
            },
        },
        computed: {
            room() {
                return this.$store.state.rooms.room;
            },
            checkingIntoBooking() {
                if(this.currentBooking || this.nextBooking) {
                    return this.currentBooking ? this.currentBooking : this.nextBooking;
                }
            },
            currentDate() {
              return moment().format('ll')
            },
            selectedBooking() {
                let selectedBooking = this.$store.state.rooms.events.event;
                if(!selectedBooking) {
                    return this.checkingIntoBooking
                }
                return selectedBooking
            },
            bookings() {
                return this.$store.state.rooms.events.events;
            },
            currentBooking() {
                return _.find(this.bookings, (booking) => {
                    return this.parseDate(booking.start_date).isBefore(this.now()) && this.parseDate(booking.end_date).isAfter(this.now());
                })
            },
            nextBooking() {
                return _.find(this.bookings, (booking) => {
                    return this.parseDate(booking.start_date).isAfter(this.now());
                })
            }
        }
    }
</script>