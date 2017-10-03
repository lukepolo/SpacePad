<template>
    <div v-if="booking" class="attendees">
        <h3>Attendees</h3>
        <template v-for="attendee in booking.attendees">
            <div class="attendee">
                <span class="attendee-status" :class="attendee.status">{{ attendee.name }}</span>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
       props : ['booking']
    }
</script>