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
        <span :style="currentTimeStyle" class="current-time-container">
            <span class="current-time">{{ currentTime }}</span>
        </span>
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
            setInterval(() => {
                this.getCurrentTimeStyles();
            }, 1000);
            this.getCurrentTimeStyles();
        },
        data() {
            return {
                hours : [],
                currentTime : null,
                currentTimeStyle : null,
            }
        },
        methods : {
            getCurrentTimeStyles() {
                let now = this.now();
                let startEM = ((((now.format('HH') * 60) + parseInt(now.format('mm')))) * 6) / 60;
                this.currentTime = now.format('h:mm A');
                this.currentTimeStyle =  `top:${startEM }em;`;
            }
        },
        computed : {
            bookings() {
                return this.$store.state.rooms.events.events;
            },

        }
    }
</script>