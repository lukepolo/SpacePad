<template>
    <div v-if="booking && shouldDisplay">
        <div class="booking" :style="getTimeHeightStyle(booking.start_date, booking.end_date)" @click="selectBooking">
            <div>
                {{ formatTime(booking.start_date) }} - {{ formatTime(booking.end_date) }}
            </div>
            <div v-if="shouldDisplaySubject">
                {{ booking.subject }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       props : ['booking'],
        methods: {
            selectBooking() {
                this.$store.commit('rooms/events/set', this.booking)
            },
        },
        computed: {
           timeDifference() {
               return moment.duration(this.parseDate(this.booking.end_date).diff(this.parseDate(this.booking.start_date))).asMinutes()
           },
           shouldDisplay() {
               return this.timeDifference >= 15;

           },
            shouldDisplaySubject() {
                return this.timeDifference >= 30;
            },
        }
    }
</script>