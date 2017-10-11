<template>
    <div class="calendar" ref="calendar" @scroll="setScrollTimeout">
        <div class="hour-container" v-for="hour in hours">
            <div class="hour">{{ hour.display }}</div>
        </div>
        <template v-for="booking in bookings">
            <booking :booking="booking"></booking>
        </template>
        <span :style="currentTimeStyle" class="current-time-container" ref="current-time-container">
            <span class="current-time">{{ currentTime }}</span>
        </span>
    </div>
</template>

<script>
    import Booking from './../components/Booking.vue';
    export default {
        components: {
          Booking
        },
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
        mounted() {
           this.scrollToCurrentTime();
        },
        data() {
            return {
                hours : [],
                currentTime : null,
                currentTimeStyle : null,
                currentTimeScrollInterval : null
            }
        },
        methods : {
            setScrollTimeout() {
                clearTimeout(this.currentTimeScrollInterval);
                this.currentTimeScrollInterval = setInterval(() => {
                    this.scrollToCurrentTime();
                }, (15 * 1000));
            },
            getOffset(el) {
                let rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
            },
            scrollToCurrentTime() {
                // https://github.com/vuejs/vue-router/issues/173
                // this will animate it
                let calendar = this.$refs.calendar
                calendar.scrollTop = 0;
                let calendarOffsets = this.getOffset(calendar)
                let currentTimeOffsets = this.getOffset(this.$refs['current-time-container']);
                calendar.scrollTop = (currentTimeOffsets.top - calendarOffsets.top) - 125;
            },
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