<template>
    <section>
        <b-sidebar
                type="is-dark"
                :fullheight="fullheight"
                :fullwidth="fullwidth"
                :overlay="overlay"
                :right="right"
                :open.sync="open"
        >
            <div class="p-1">
                <img
                        src="../../assets/logo.png"
                        alt="Tyranids"
                />
                <b-menu>
                    <b-menu-list label="Menu">
                        <b-menu-item icon="home" label="Accueil" tag="router-link" :to="{ name: 'home' }" class="is-6"></b-menu-item>
                        <b-menu-item icon="checkerboard">
                            <template slot="label" slot-scope="props">
                                <span>Parties</span>
                                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                            </template>
                            <b-menu-item icon="view-list" label="Liste" tag="router-link" :to="{ name: 'match-list' }"></b-menu-item>
                            <b-menu-item icon="new-box" label="Créer" tag="router-link" :to="{ name: 'match-create' }"></b-menu-item>
                        </b-menu-item>
                        <b-menu-item icon="strategy">
                            <template slot="label" slot-scope="props">
                                <span>Stratagèmes</span>
                                <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-down' : 'menu-up'"></b-icon>
                            </template>
                            <b-menu-item icon="view-list" label="Liste" tag="router-link" :to="{ name: 'stratagem-list' }"></b-menu-item>
                            <b-menu-item icon="card-outline" label="Kanban" tag="router-link" :to="{ name: 'stratagem-kanban' }"></b-menu-item>
                        </b-menu-item>
                        <b-menu-item icon="ammunition" label="Armées" tag="router-link" :to="{ name: 'army-list' }" class="is-6"></b-menu-item>
                        <b-menu-item icon="knife" label="Objectif" tag="router-link" :to="{ name: 'objective-list' }" class="is-6"></b-menu-item>
                        <b-menu-item icon="clipboard-text" label="Scénarios" tag="router-link" :to="{ name: 'scenario-list' }" class="is-6"></b-menu-item>
                        <b-menu-item icon="calendar-star" label="Objectives personnels" tag="router-link" :to="{ name: 'personal-objective-list' }" class="is-6"></b-menu-item>
                        <b-menu-item icon="clipboard-list" label="Listes" tag="router-link" :to="{ name: 'army-list-list' }" class="is-6"></b-menu-item>
                    </b-menu-list>
                    <b-menu-list label="Actions">
                        <b-menu-item v-if="!loggedIn" icon="login" label="Login" tag="router-link" :to="{ name: 'login' }"></b-menu-item>
                        <b-menu-item v-if="loggedIn" @click="logout()" icon="logout" label="Logout"></b-menu-item>
                    </b-menu-list>
                </b-menu>
            </div>
        </b-sidebar>
        <b-button type="is-text is-large button-text" class="mdi mdi-menu" @click="open = true" />
    </section>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                open: false,
                overlay: false,
                fullheight: true,
                fullwidth: false,
                right: false
            };
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
    };
</script>

<style>
    .p-1 {
        padding: 1em;
    }
    p.menu-label,span{
        color: #fff;
    }
    button.button.is-text.is-large.button-text {
        text-decoration: none;
        color:white;
    }
    button.button.is-text.is-large.button-text:hover {
        background-color: grey;
    }
</style>
