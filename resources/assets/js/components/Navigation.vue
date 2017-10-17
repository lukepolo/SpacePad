<template>
    <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    Space Pad
                </router-link>
                <router-link :to="{ name : 'my-profile' }" class="navbar-item is-hidden-desktop" style="margin-left: auto;">
                    My Profile
                </router-link>
                <a class="navbar-item is-hidden-desktop" @click="logout">
                    Logout
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <router-link :to="{ name : 'my-profile' }" class="navbar-item" style="margin-left: auto;">
                        My Profile
                    </router-link>
                    <a class="navbar-item" @click="logout">
                        Logout
                    </a>
                </div>
            </div>
        </nav>
        <section v-if="current_version !==  version">
            <div>
                Hello, We've got a new version of SpacePad ready for you. <a href="">Refresh now</a> to make it yours.
            </div>
        </section>
        <notifications></notifications>
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
        methods : {
            logout() {
                this.$store.dispatch('auth/logout');
            }
        },
        computed : {
            version () {
                return this.$store.state.system.version
            },
        }
    }
</script>
