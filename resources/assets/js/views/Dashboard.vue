<template>
    <div>
        <template v-if="providers.length == 0 ">
            Lets connect your first account
        </template>
        <template v-else>
            Connect a new account
        </template>

        <a href="/provider/office365/link">Office 365</a>
        <a href="/provider/gsuite/link">GSuite</a>

        <h3>Connected Accounts</h3>
        <template v-for="provider in providers">
            <router-link :to="{ name : 'provider_rooms', params : { provider : provider.id }}">
                {{ provider.email }} [{{ provider.provider }}]
            </router-link>
        </template>

        <h3>Rooms</h3>
        <template v-for="room in rooms">
            <div>
                <router-link :to="{ name : 'room', params : { room : room.id }}">
                    {{ room.name }}
                </router-link>
                <router-link :to="{ name : 'room-modify', params : { room : room.id }}">
                    [modify]
                </router-link>
            </div>
        </template>

    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('rooms/get')
            this.$store.dispatch('providers/get')
        },
        computed : {
            rooms() {
              return this.$store.state.rooms.rooms;
            },
            providers() {
                return this.$store.state.providers.providers
            }
        }
    }
</script>