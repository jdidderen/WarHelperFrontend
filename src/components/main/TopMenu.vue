<template>
    <b-navbar type="is-dark" :mobile-burger="false">
        <template slot="brand">
            <Sidebar />
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <router-link to="/login">
                    <b-button v-if="!loggedIn" type="is-primary">
                        Login
                    </b-button>
                </router-link>
                <div class="buttons">
                    <b-button v-if="loggedIn" @click="logout()" type="is-danger">
                        Logout
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    import Sidebar from "@/components/main/Sidebar";
    export default {
        name: "TopMenu",
        components: {
            Sidebar
        },
        computed: {
            loggedIn() {
                return this.$store.state.status.loggedIn;
            }
        },
        methods: {
            logout: function () {
                this.$store.dispatch('logout');
                this.$router.push('/login');
            },
        }
    }
</script>

<style>
</style>
