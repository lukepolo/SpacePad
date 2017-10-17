<template>
    <div v-if="booking" class="attendees">
        <h3>Attendees</h3>
        <template v-if="booking.attendees.length">
            <template v-for="attendee in booking.attendees">
                <div class="attendee">
                    <span class="attendee-status" :class="attendee.status">{{ attendee.name }}</span>
                </div>
            </template>
        </template>
        <template v-else>
            <p>No Attendees</p>
        </template>
    </div>
</template>

<script>
    export default {
       props : ['booking']
    }
</script>