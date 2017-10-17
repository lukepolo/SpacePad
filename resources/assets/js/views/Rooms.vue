<template>
    <div>
        <h3>Available Rooms</h3>
        <template v-if="loading">
            Loading
        </template>
        <template v-else>
            <template v-if="notCreatedRooms.length">
                <template v-for="room in notCreatedRooms">
                    <div @click="createRoom(room)">
                        {{ room.name }}
                    </div>
                </template>
            </template>
            <template v-else>
                <router-link to="/">You do not have anymore rooms that you can create!</router-link>
            </template>
        </template>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('rooms/get')
            this.$store.dispatch('providers/rooms/get', this.$route.params.provider).then(() => {
                this.loading = false;
            });
        },
        data() {
            return {
                loading : true
            }
        },
        methods : {
            createRoom(room) {
                this.$store.dispatch('providers/rooms/store', {
                    name : room.name,
                    room : room.room,
                    provider : this.$route.params.provider
                }).then(room => {
                    this.$router.push(`/rooms/${room.id}/modify`);
                });
            }
        },
        computed : {
            rooms() {
                return this.$store.state.providers.rooms.rooms;
            },
            alreadyCreatedRooms() {
                return this.$store.state.rooms.rooms;
            },
            notCreatedRooms() {
                let alreadyCreatedRooms = this.alreadyCreatedRooms;
                if(this.rooms) {
                    return _.filter(this.rooms, (room) => {
                        return !_.find(alreadyCreatedRooms, { provider_calendar_owner : room.room })
                    });
                }
                return this.rooms;
            }
        }
    }
</script>