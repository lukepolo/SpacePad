<template>
    <div class="card">
        <header class="card-header">
            <div class="card-header-title">
                <h3>My Profile</h3>
            </div>
        </header>
        <div class="card-content">
            <div class="content">
                <form @submit.prevent="updateUser">

                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" v-model="form.name">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" v-model="form.email">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">New Password</label>
                        <div class="control">
                            <input class="input" type="password" v-model="form.password">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Confirm Password</label>
                        <div class="control">
                            <input class="input" type="password" v-model="form.password_confirmation">
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
                    email : null,
                    password : null,
                    password_confirmation : null
                })
            }
        },
        created() {
            this.form.fill(this.user)
        },
        methods: {
            updateUser() {
                this.$store.dispatch('auth/update', {
                    form : this.form,
                    user : this.user.id
                }).then(() => {
                    this.showSuccess('You have updated your profile');
                })
            }
        },
        computed: {
            user() {
                return this.$store.state.auth.user;
            }
        }
    }
</script>