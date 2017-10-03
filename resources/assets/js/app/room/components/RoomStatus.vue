<template>
    <div>
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
</template>

<script>
    export default {
        computed : {
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