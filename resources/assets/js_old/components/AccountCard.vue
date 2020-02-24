<template>

    <div class="card">

        <header class="card-header">

            <div class="card-header-title">

                {{ account.email }}

                <i class="fab fa-google"

                   :class="{ 'fa-google' : account.provider === 'gsuite', 'fa-microsoft' : account.provider === 'office365'  }"></i>

            </div>

            <a href="#" class="card-header-icon" aria-label="more options">

              <span class="icon">

                <i class="fa fa-angle-down" aria-hidden="true"></i>

              </span>

            </a>

        </header>

        <div class="card-content">

            <div class="content">

                <div class="columns">

                    <template v-for="room in rooms">

                        <div class="column is-three-quarters">

                            <router-link :to="{ name : 'room', params : { room : room.id }}">

                                {{ room.name }}

                            </router-link>

                        </div>

                        <div class="column is-one-quarter">

                            <router-link :to="{ name : 'room-modify', params : { room : room.id }}">

                                [modify]

                            </router-link>

                        </div>

                    </template>

                </div>

            </div>

        </div>

        <footer class="card-footer">

            <router-link class="card-footer-item" :to="{ name : 'provider_rooms', params : { provider : account.id }}">

                Add Room

            </router-link>

            <a @click.prevent="showDeleteModal = true" class="card-footer-item">Delete</a>

        </footer>

        <modal v-if="showDeleteModal" @close="showDeleteModal = false" @confirm="deleteAccount">

            Do you wish to delete this ({{ account.email }}) account?

        </modal>

    </div>

</template>

<script>
    import Modal from '@components/Modal.vue'

    export default {
        components: {
            Modal
        },
        props: ['account'],
        data() {
            return {
                showDeleteModal: false,
            }
        },
        computed: {
            rooms() {
                return _.filter(this.$store.state.rooms.rooms, (room) => {
                    return this.account.id === parseInt(room.room_provider_id);
                });
            }
        },
        methods: {
            deleteAccount() {
                this.$store.dispatch('providers/destroy', this.account.id).then(() => {
                    this.showDeleteModal = false
                })
            }
        }
    }
</script>



