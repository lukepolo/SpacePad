<template>
    <div v-if="booking">
        <template v-for="attendee in booking.attendees">
            <div>
                {status} - {{ attendee.name }}
            </div>
        </template>
    </div>
</template>

<script>
    export default {
       props : ['booking']
    }
</script>