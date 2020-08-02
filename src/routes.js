import Vue from "vue";
import Router from 'vue-router';
import Home from "@/components/home/Home";
import ArmyList from "@/components/army/ArmyList";
import ArmyDetail from "@/components/army/ArmyDetail";
import MatchList from "@/components/match/MatchList";
import MatchCreate from "@/components/match/MatchCreate";
import MatchUpdate from "@/components/match/MatchUpdate";
import MatchDetail from "@/components/match/MatchDetail";
import StratagemList from "@/components/stratagem/StratagemList";
import Login from "@/components/home/Login";

Vue.use(Router);

function requireAuth (to, from, next) {
    if (to.path !== '/login' && !localStorage.getItem('token')) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
}

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
            beforeEnter: requireAuth
        },
        {
            path: '/login',
            name: 'login',
            component: Login,

        },
        {
            path: '/army',
            component: ArmyList,
            name: 'army-list',
            beforeEnter: requireAuth
        },
        {
            path: '/army/:id',
            name: 'army-detail',
            component: ArmyDetail,
            beforeEnter: requireAuth
        },
        {
            path: '/match',
            name: 'match-list',
            component: MatchList,
            beforeEnter: requireAuth
        },
        {
            path: '/match/create',
            name: 'match-create',
            component: MatchCreate,
            beforeEnter: requireAuth
        },
        {
            path: '/match/update/:id',
            name: 'match-update',
            component: MatchUpdate,
            beforeEnter: requireAuth
        },
        {
            path: '/match/:id',
            name: 'match-detail',
            component: MatchDetail,
            beforeEnter: requireAuth
        },
        {
            path: '/stratagem',
            name: 'stratagem-list',
            component: StratagemList,
            beforeEnter: requireAuth
        },
    ]
})


export default router
