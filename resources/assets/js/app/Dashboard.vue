<template>
    <div>
        Lets connect your first provider

        <a href="/provider/office365/link">Office 365</a>

        <h3>Connected Accounts</h3>
        <template v-for="provider in providers">
            <router-link :to="{ name : 'provider_rooms', params : { provider : provider.id }}">
                {{ provider.email }} [{{ provider.provider }}]
            </router-link>
        </template>

    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('providers/get')
        },
        computed : {
            providers() {
                return this.$store.state.providers.providers
            }
        }
    }
</script>