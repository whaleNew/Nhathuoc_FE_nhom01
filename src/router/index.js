import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../components/homepage/index.vue')
    },
    {
        path : '/admin/danhmuc',
        component: ()=>import('../components/admin/danhmuc/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router