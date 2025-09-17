import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/',
        component: ()=>import('../components/homepage/index.vue')
    },
   
    {
        path : '/admin/dang-ky',
        component: ()=>import('../components/admin/dang-ky/index.vue')
    },
    {
        path : '/admin/dang-nhap',
        component: ()=>import('../components/admin/dang-nhap/index.vue')
    },
    {
        path : '/admin/quan-ly-khach-hang',
        component: ()=>import('../components/admin/quan-ly-khach-hang/index.vue')
    },
    {
        path : '/admin/quan-ly-nhan-vien',
        component: ()=>import('../components/admin/quan-ly-nhan-vien/index.vue')
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