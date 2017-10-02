<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child box">
                            <!-- Put any content you want -->
                        </article>
                        <article class="tile is-child box">
                            <!-- Put any coclerntent you want -->
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <!-- Put any content you want -->
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <!-- Put any content you want -->
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <!-- Put any content you want -->
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('rooms/show', this.$route.params.room);
            this.$store.dispatch('rooms/events/get', this.$route.params.room)
        },
        methods: {},
        computed: {
            room() {
                return this.$store.state.rooms.room;
            },
            events() {
                return this.$store.state.rooms.events.events;
            }
        }
    }
</script>