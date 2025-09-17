import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/homepage',
        component: ()=>import('../components/homepage/index.vue')
    },
   
    {
        path : '/admin/dang-ky',
        component: ()=>import('../components/admin/dang-ky/index.vue'),
        meta : {layout : 'blank'}
    },
    {
        path : '/admin/dang-nhap',
        component: ()=>import('../components/admin/dang-nhap/index.vue'),
        meta : {layout: 'blank'}
    },
    {
        path : '/admin/khach-hang',
        component: ()=>import('../components/admin/quan-ly-khach-hang/index.vue'),
    },
    {
        path : '/admin/cart',
        component: ()=>import('../components/admin/cart/index.vue'),
    },
    {
        path : '/admin/thuoc',
        component: ()=>import('../components/admin/thuoc/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router