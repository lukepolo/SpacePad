<template>
    <div id="room" v-if="room">
        <div id="room-content">

            <nav class="room-header level">
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
                    <room-status></room-status>
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
            }
        }
    }
</script>