<template>
    <div>
       <form @submit.prevent="updateRoom">
           <label>
               Name
           </label>
           <input type="text" v-model="form.name">

           <label>
               Features
           </label>
           <template v-for="(value, feature) in form.features">
               <label>{{ feature }}</label>
               <input type="checkbox" v-model="form.features[feature]">
           </template>

           <label>
               Capacity
           </label>
           <input type="number" v-model="form.capacity">

           <textarea v-model="form.comments"></textarea>

           <button type="submit">Update</button>
       </form>
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