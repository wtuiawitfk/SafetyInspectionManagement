import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/loginPhone',
        name: 'loginPhone',
        component: () => import('../views/loginPhone.vue')
    },
    {
        path: '/index',
        name: 'index',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
    },
    {
        path: '/MHDIList',
        name: 'MHDIList',
        component: () => import('../views/MHDIList/MHDIList.vue')
    },
    {
        path: '/NCOSchedule',
        name: 'NCOSchedule',
        component: () => import('../views/MHDIList/NCOSchedule.vue')
    },
    {
        path: '/LUHDangers',
        name: 'LUHDangers',
        component: () => import('../views/MHDIList/LUHDangers.vue')
    },
    {
        path: '/LHDNCSchedule',
        name: 'LHDNCSchedule',
        component: () => import('../views/MHDIList/LHDNCSchedule.vue')
    },
    {
        path: '/LHDTCancellation',
        name: 'LHDTCancellation',
        component: () => import('../views/MHDIList/LHDTCancellation.vue')
    },
    {
        path: '/LHDTCancellationDetails',
        name: 'LHDTCancellationDetails',
        component: () => import('../views/MHDIList/LHDTCancellationDetails.vue')
    },
    {
        path: '/LHDNCScheduleDetails',
        name: 'LHDNCScheduleDetails',
        component: () => import('../views/MHDIList/LHDNCScheduleDetails.vue')
    },
    {
        path: '/NCOScheduleDetails',
        name: 'NCOScheduleDetails',
        component: () => import('../views/MHDIList/NCOScheduleDetails.vue')
    },
    {
        path: '/LUHDangersDetails',
        name: 'LUHDangersDetails',
        component: () => import('../views/MHDIList/LUHDangersDetails.vue')
    },
    {
        path: '/DIPSHazards',
        name: 'DIPSHazards',
        component: () => import('../views/DIPSHazards/DIPSHazards.vue')
    },
    {path: '*', redirect: '/login'}
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
