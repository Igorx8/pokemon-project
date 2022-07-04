import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    {
        meta: {
            public: true
        },
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
    },
    {
        meta: {
            public: true
        },
        path: '/lista',
        name: 'lista',
        component: () => import('../views/List.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router