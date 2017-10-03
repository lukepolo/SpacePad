<template>
    <div class="calendar">
        <div class="hour-container" v-for="hour in hours">
            <div class="hour">{{ hour.display }}</div>
        </div>
        <template v-for="booking in bookings">
            <div class="booking" :style="getTimeHeightStyle(booking.start_date, booking.end_date)">
                <div>
                    {{ formatTime(booking.start_date) }} - {{ formatTime(booking.end_date) }}
                </div>
                <div>
                    {{ booking.subject }}
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        created() {
            let hour = 0;
            while(hour < 24) {
                this.hours.push({
                    'display' : moment(hour, 'H').format('h A'),
                    'events' : []
                });
                hour++;
            }
        },
        data() {
            return {
                hours : []
            }
        },
        computed : {
            bookings() {
                return this.$store.state.rooms.events.events;
            }
        }
    }
</script>