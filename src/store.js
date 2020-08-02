import Vue from 'vue'
import Vuex from 'vuex'
import httpToken from "@/http-common";
import moment from 'moment';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        status: {
            loggedIn: false,
            loggingIn: false,
        },
        token: '',
        expiration: '',
    },
    mutations: {
        loginRequest(state) {
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
            state.status = { loggingIn: true, loggedIn: false };
            state.token = '';
            state.expiration = '';
        },
        loginSuccess(state, token) {
            if ('key' in token) {
                localStorage.setItem('token', token.key);
                localStorage.setItem('expiration',moment().add(30, 'days'));
                state.status = { loggedIn: true, loggingIn: false };
                state.token = token.key;
                let expiration = moment().add(30, 'days').format("MM-DD-YYYY");
                console.log(expiration);
                state.expiration = expiration;
                console.log(localStorage.getItem('expiration'));
            }
        },
        stillLogged(state) {
            state.status = { loggedIn: true, loggingIn: false };
            state.token = localStorage.getItem('token');
            state.expiration = localStorage.getItem('expiration');
        },
        loginFailure(state) {
            state.status = { loggingIn: false, loggedIn: false };
            state.token = '';
            state.expiration = '';
        },
        logout(state) {
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
            state.status = { loggedIn: false, loggingIn: false };
            state.token = '';
            state.expiration = '';
            console.log(localStorage)
        },
    },
    actions: {
        login({ commit }, { username, password }) {
            commit('loginRequest');

            httpToken.post('/rest-auth/login/',{'username':username,'password':password})
                .then(
                    user => {
                        commit('loginSuccess', user.data);
                    },
                    error => {
                        commit('loginFailure', error);
                    }
                );
        },
        logout({ commit }) {
            commit('logout');
        },
        recreateState({ commit }) {
            if (localStorage.getItem('token') && localStorage.getItem('expiration')) {
                let date = localStorage.getItem('expiration');
                date = new Date(date);
                console.log(date);
                commit('stillLogged')
            }
        }
    }
})

export default store;
