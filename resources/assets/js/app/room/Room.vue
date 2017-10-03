<template>
    <div id="room" v-if="room">
        <div id="room-content">

            <nav class="room-header level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                        <p class="subtitle is-5">{{ currentDate }}</p>
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
                           <room-status></room-status>
                       </div>
                    </div>
                    <div class="level bookings">
                        <calendar></calendar>
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
                        <booking-attendees :booking="selectedBooking"></booking-attendees>
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
    import Calendar from './components/Calendar.vue';
    import RoomStatus from './components/RoomStatus.vue';
    import BookingAttendees from './components/BookingAttendees.vue';

    export default {
        components : {
            Calendar,
            RoomStatus,
            BookingAttendees,
        },
        data() {
            return {
                selectedBooking : null
            }
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
              return moment().format('lll')
            },
        }
    }
</script>