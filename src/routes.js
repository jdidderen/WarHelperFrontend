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
        {
            path: '/stratagem/kanban',
            name: 'stratagem-kanban',
            component: StratagemKanban,
            beforeEnter: requireAuth
        },
        {
            path: '/objective',
            name: 'objective-list',
            component: ObjectiveList,
            beforeEnter: requireAuth
        },
        {
            path: '/scenario',
            name: 'scenario-list',
            component: ScenarioList,
            beforeEnter: requireAuth
        },
        {
            path: '/personal-objective',
            name: 'personal-objective-list',
            component: PersonalObjectiveList,
            beforeEnter: requireAuth
        },
        {
            path: '/personal-objective/create',
            name: 'personal-objective-create',
            component: PersonalObjectiveCreate,
            beforeEnter: requireAuth
        },
        {
            path: '/personal-objective/update/:id',
            name: 'personal-objective-update',
            component: PersonalObjectiveUpdate,
            beforeEnter: requireAuth
        },
        {
            path: '/personal-objective/:id',
            name: 'personal-objective-detail',
            component: PersonalObjectiveDetail,
            beforeEnter: requireAuth
        },
        {
            path: '/army-list',
            name: 'army-list-list',
            component: ArmyListList,
            beforeEnter: requireAuth
        },
        {
            path: '/army-list/create',
            name: 'army-list-create',
            component: ArmyListCreate,
            beforeEnter: requireAuth
        },
        {
            path: '/army-list/update/:id',
            name: 'army-list-update',
            component: ArmyListUpdate,
            beforeEnter: requireAuth
        },
        {
            path: '/army-list/:id',
            name: 'army-list-detail',
            component: ArmyListDetail,
            beforeEnter: requireAuth
        },
    ]
})


export default router
