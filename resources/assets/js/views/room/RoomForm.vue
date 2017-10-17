<template>
    <div class="card" v-if="room">
        <header class="card-header">
            <div class="card-header-title">
                <h3>{{ room.name }}</h3>
            </div>
        </header>
        <div class="card-content">
            <div class="content">
                <form @submit.prevent="updateRoom">

                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" v-model="form.name">
                        </div>
                    </div>

                    <template v-for="(value, feature) in form.features">
                        <div class="field">
                            <div class="control">
                                <label class="checkbox">
                                    <input type="checkbox" v-model="form.features[feature]">
                                    {{ feature }}
                                </label>
                            </div>
                        </div>
                    </template>

                    <div class="field">
                        <label class="label">Capacity</label>
                        <div class="control">
                            <input class="input" type="number" v-model="form.capacity">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Comments</label>
                        <div class="control">
                            <textarea class="textarea" v-model="form.comments"></textarea>
                        </div>
                    </div>

                    <button class="btn" type="submit">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form : this.createForm({
                    name : null,
                    features : {
                        tv : false,
                        phone : false,
                        computer : false,
                        projector : false,
                    },
                    capacity : 0,
                    comments : null,
                })
            }
        },
        created() {
          this.fetchData();
        },
        watch: {
            '$route' : 'fetchData',
            'room' : function(room) {
                this.form.fill(room)
            }
        },
        methods: {
            fetchData() {
                this.$store.dispatch('rooms/show', this.$route.params.room)
            },
            updateRoom() {
                this.$store.dispatch('rooms/update', {
                    form : this.form,
                    room : this.$route.params.room
                }).then(() => {
                    this.$router.push('/')
                })
            }
        },
        computed : {
            room() {
                return this.$store.state.rooms.room;
            }
        }
    }
</script>