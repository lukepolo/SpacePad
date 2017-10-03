<template>
    <div id="room" v-if="room">
        <div id="room-content">

            <nav class="room-header level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                        <p class="subtitle is-5">
                            {{ date }}
                        </p>
                    </div>
                </div>
                <!-- Right side -->
                <div class="level-right">
                    <p class="level-item">{{ room.name }}</p>
                </div>
            </nav>

            <!--content -->
            <div class="columns room-details">

                <div class="column calendar-wrapper">
                    <div class="level booking-status">
                       <div class="level-item">
                           <template v-if="currentBooking">
                               Booked until {{ formatTime(currentBooking.end_date) }}
                           </template>
                           <template v-else-if="nextBooking">
                               Next booking begins in 15 mins -- TODO
                           </template>
                           <template v-else>
                               Free
                           </template>
                       </div>
                    </div>
                    <div class="level bookings">
                        <div class="calendar">
                          <div class="hour-container" v-for="hour in hours">
                              <div class="hour">{{ hour.display }}</div>
                          </div>
                            <template v-for="booking in bookings">
                                <div class="booking" :style="getTimeHeightStyle(booking.start_date, booking.end_date)">
                                    {{ booking.subject }} : {{ formatTime(booking.start_date) }} - {{ formatTime(booking.end_date) }}
                                </div>
                            </template>
                        </div>
                    </div>
                </div>

                <div class="column tabs">
                    <div class="tab-buttons">
                        <div class="button">
                            Bookings
                        </div>
                        <div class="button">
                            Attendees
                        </div>
                    </div>
                    <div class="tab-content">
                        <template v-if="currentBooking">
                            <template v-for="attendee in currentBooking.attendees">
                                <div>
                                    {status} - {{ attendee.name }}
                                </div>
                            </template>
                        </template>
                    </div>
                </div>

            </div>

            <div class="room-footer">
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
    export default {
        created() {
            this.$store.dispatch('rooms/show', this.$route.params.room);
            this.$store.dispatch('rooms/events/get', this.$route.params.room)

            let hour = 0;
            while(hour < 24) {
                this.hours.push({
                    'display' : hour,
                    'events' : []
                });
                hour = hour + 1;
            }
        },
        data() {
            return {
                hours : []
            }
        },
        methods: {},
        computed: {
            date() {
              return moment().format('lll')
            },
            room() {
                return this.$store.state.rooms.room;
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