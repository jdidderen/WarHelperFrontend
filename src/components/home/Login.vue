<template>
    <form action="">
        <div v-if="!loggedIn" class="modal-card" style="width: auto">
            <header class="modal-card-head dark-mode">
                <p class="modal-card-title dark-mode">Login</p>
            </header>
            <section class="modal-card-body dark-mode">
                <b-field label="Email">
                    <b-input
                            type="username"
                            v-model="username"
                            placeholder="Your username"
                            required>
                    </b-input>
                </b-field>
                <b-field label="Password">
                    <b-input
                            type="password"
                            v-model="password"
                            password-reveal
                            placeholder="Your password"
                            required>
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot dark-mode">
                <b-button @click="login()" type="is-primary" icon-left="login">Login</b-button>
                <b-button @click="$parent.close()" type="is-danger" icon-left="close">Close</b-button>
            </footer>
        </div>
        <b-message v-if="loggedIn" title="Connecté" type="is-success" :closable="false">
            <b-button size="is-large"
                      tag="router-link"
                      to="/"
                      type="is-link"
                      icon-left="home">
                Aller vers la page d'accueil
            </b-button>
        </b-message>
    </form>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
                loading: false,
                message: ''
            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.status.loggedIn;
            },
            loggingIn() {
                return this.$store.state.status.loggingIn;
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', {'username': this.username, 'password': this.password })
            },
        }
    }
</script>

<style>
    .dark-mode{
        background-color: #363636;
        color: #fff;
    }
</style>
