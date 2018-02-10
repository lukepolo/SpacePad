<template>

    <header>

        <nav class="navbar" role="navigation" aria-label="main navigation">

            <router-link to="/">

                Space Pad

            </router-link>

            <router-link :to="{ name : 'my-profile' }">

                My Profile

            </router-link>

            <a @click="logout">

                Logout

            </a>

        </nav>

        <div v-if="current_version !==  version">

            <div>

                Hello, We've got a new version of SpacePad ready for you. <a href="">Refresh now</a> to make it yours.

            </div>

        </div>

        <notifications></notifications>

    </header>

</template>

<script>

    import Notifications from './Notifications.vue'

    export default {
        components: {
            Notifications
        },
        data() {
            return {
                current_version: Laravel.version
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('auth/logout');
            }
        },
        computed: {
            version() {
                return this.$store.state.system.version
            },
        }
    }
</script>
