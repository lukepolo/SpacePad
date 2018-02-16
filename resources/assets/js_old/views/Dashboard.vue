<template>

    <div class="Dashboard">

        <div class="Dashboard__con">

            <template v-if="providers.length == 0 ">




                <h1>Lets connect your first account</h1>

                <a href="/provider/office365/link">Office 365</a>

                <a href="/provider/gsuite/link">GSuite</a>




            </template>

            <template v-else>





                <template v-for="provider in providers">

                    <account-card :account="provider"></account-card>

                </template>





            </template>

        </div>

    </div>

</template>

<script>
    import AccountCard from '@components/AccountCard.vue';

    export default {
        components: {
            AccountCard
        },
        created() {
            this.$store.dispatch('rooms/get')
            this.$store.dispatch('providers/get')
        },
        computed: {
            rooms() {
                return this.$store.state.rooms.rooms;
            },
            providers() {
                return this.$store.state.providers.providers
            }
        }
    }
</script>