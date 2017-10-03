<template>
    <div>
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