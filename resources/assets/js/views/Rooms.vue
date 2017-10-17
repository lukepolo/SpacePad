<template>
    <div>
        <h3>Available Rooms</h3>
        <template v-for="room in rooms">
            <div @click="createRoom(room)">
                {{ room.name }}
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('providers/rooms/get', this.$route.params.provider);
        },
        methods : {
            createRoom(room) {
                this.$store.dispatch('providers/rooms/store', {
                    name : room.name,
                    room : room.room,
                    provider : this.$route.params.provider
                })
            }
        },
        computed : {
            rooms() {
                return this.$store.state.providers.rooms.rooms;
            }
        }
    }
</script>