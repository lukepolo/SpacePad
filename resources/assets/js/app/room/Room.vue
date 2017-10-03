<template>
    <div id="room" v-if="room">
        <div id="room-content">

            <nav class="room-header level" :class="{ booked : currentBooking , free : !currentBooking}">
                <!-- Left side -->
                <div class="level-left">
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
                    <div class="tab-content">
                        Display Room Details Here :
                        Seats, technologies, connectors
                        <booking-attendees :booking="selectedBooking"></booking-attendees>
                    </div>
                </div>

            </div>

            <div class="room-footer" :class="{ booked : currentBooking , free : !currentBooking}">
                <div class="level">
                    <!-- Left side -->
                    <div class="level-left">
                        <div class="level-item">
                            Release / (Check In / Start Early)
                        </div>
                    </div>

                    <!-- Right side -->
                    <div class="level-right">
                        <p class="level-item">
                            Find Another space
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
        created() {
            this.$store.dispatch('rooms/show', this.$route.params.room);
            this.$store.dispatch('rooms/events/get', this.$route.params.room)
        },
        computed: {
            room() {
                return this.$store.state.rooms.room;
            },
            currentDate() {
              return moment().format('ll')
            },
            selectedBooking() {
                return this.$store.state.rooms.events.event;
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