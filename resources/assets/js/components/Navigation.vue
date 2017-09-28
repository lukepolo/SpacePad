<template>
    <header>
        <notifications></notifications>
        <div class="logo-container">
            <router-link to="/">
                Space Pad
            </router-link>
        </div>

        <section v-if="current_version !==  version">
            <div>
                Hello, We've got a new version of SpacePad ready for you. <a href="">Refresh now</a> to make it yours.
            </div>
        </section>
    </header>
</template>

<script>

    import Notifications from './Notifications.vue'

    export default {
        components: {
            Notifications
        },
        data () {
            return {
                current_version: Laravel.version
            }
        },
        computed : {
            version () {
                return this.$store.state.system.version
            },
        }
    }
</script>
