<template>
    <div>
        <h3>Room</h3>
        <pre>
            {{ room }}
        </pre>

        <h3>Events</h3>
        <pre>
            {{ events }}
        </pre>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('rooms/show', this.$route.params.room);
            this.$store.dispatch('rooms/events/get', this.$route.params.room)
        },
        methods : {

        },
        computed : {
            room() {
                return this.$store.state.rooms.room;
            },
            events() {
                return this.$store.state.rooms.events.events;
            }
        }
    }
</script>