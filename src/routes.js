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
import StratagemKanban from "@/components/stratagem/StratagemKanban";
import ObjectiveList from "@/components/objective/ObjectiveList";
import ScenarioList from "@/components/scenario/ScenarioList";
import PersonalObjectiveList from "@/components/personalObjective/PersonalObjectiveList";
import PersonalObjectiveCreate from "@/components/personalObjective/PersonalObjectiveCreate";
import PersonalObjectiveDetail from "@/components/personalObjective/PersonalObjectiveDetail";
import PersonalObjectiveUpdate from "@/components/personalObjective/PersonalObjectiveUpdate";
import ArmyListList from "@/components/armyList/ArmyListList";
import ArmyListCreate from "@/components/armyList/ArmyListCreate";
import ArmyListUpdate from "@/components/armyList/ArmyListUpdate";
import ArmyListDetail from "@/components/armyList/ArmyListDetail";
import Dashboard from "@/components/dashboard/Dashboard";

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
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
            meta: {
                breadcrumb: [
                    { name: 'Home' }
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Login"},
                ]
            },
        },
        {
            path: '/army',
            component: ArmyList,
            name: 'army-list',
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Armées"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/army/:id',
            name: 'army-detail',
            component: ArmyDetail,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Armées", link: '/army'},
                    { name: "Détail d'une armée"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/match',
            name: 'match-list',
            component: MatchList,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Parties"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/match/create',
            name: 'match-create',
            component: MatchCreate,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Parties", link: '/match'},
                    { name: "Création d'une partie"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/match/update/:id',
            name: 'match-update',
            component: MatchUpdate,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Parties", link: '/match'},
                    { name: "Mise à jour d'une partie"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/match/:id',
            name: 'match-detail',
            component: MatchDetail,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Parties", link: '/match'},
                    { name: "Détail d'une partie"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/stratagem',
            name: 'stratagem-list',
            component: StratagemList,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Stratagèmes"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/stratagem/kanban',
            name: 'stratagem-kanban',
            component: StratagemKanban,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Stratagèmes"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/objective',
            name: 'objective-list',
            component: ObjectiveList,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Objectifs"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/scenario',
            name: 'scenario-list',
            component: ScenarioList,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Scénarios"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/personal-objective',
            name: 'personal-objective-list',
            component: PersonalObjectiveList,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Objectifs personnels"},
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/personal-objective/create',
            name: 'personal-objective-create',
            component: PersonalObjectiveCreate,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Objectifs personnels", link: '/personal-objective' },
                    { name: "Création d'un objectif personnel" }
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/personal-objective/update/:id',
            name: 'personal-objective-update',
            component: PersonalObjectiveUpdate,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Objectifs personnels", link: '/personal-objective' },
                    { name: "Mise à jour d'un objectif personnel" }
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/personal-objective/:id',
            name: 'personal-objective-detail',
            component: PersonalObjectiveDetail,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Objectifs personnels", link: '/personal-objective' },
                    { name: "Détail d'un objectif personnel" }
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/army-list',
            name: 'army-list-list',
            component: ArmyListList,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Listes" },
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/army-list/create',
            name: 'army-list-create',
            component: ArmyListCreate,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Listes", link: '/army-list' },
                    { name: "Création d'une liste" }
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/army-list/update/:id',
            name: 'army-list-update',
            component: ArmyListUpdate,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Listes", link: '/army-list' },
                    { name: "Mise à jour de liste" }
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/army-list/:id',
            name: 'army-list-detail',
            component: ArmyListDetail,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Listes", link: '/army-list' },
                    { name: "Détail de liste" }
                ]
            },
            beforeEnter: requireAuth
        },
        {
            path: '/my/profile',
            name: 'MyProfile',
            component: Dashboard,
            meta: {
                breadcrumb: [
                    { name: "Home", link: '/' },
                    { name: "Mon Profil" }
                ]
            },
            beforeEnter: requireAuth
        },
    ]
})


export default router
