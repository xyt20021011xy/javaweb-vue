import { createRouter, createWebHistory } from 'vue-router'
import ErrorView from "@/components/ErrorView.vue";
import IndexView from "@/Layout/IndexView.vue";
import TestView from "@/views/TestView.vue";
import DashboardView from "@/views/DashboardView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
        path: '/',
        component: IndexView,
        children: [
            {
                path: '/',
                component:DashboardView,
            },
            {
                path: '/test',
                component:TestView,
            },
            {
                path:'/first',
                component:()=>import('@/views/FirstView.vue')
            },
            {
                path:'/form',
                component:()=>import('@/views/FormView.vue')
            },
            {
                path:'/teacher',
                component:()=>import('@/views/TeacherView.vue')
            },{
                path:'/course',
                component:()=>import('@/views/CourseView.vue')
            }
            ]
    },
    {
        path: '/404',
        component:ErrorView,
    },
    {
          path:'/login',
          component:()=>import('@/views/LoginView.vue')
     }
  ]

})
const originalPush = ['/login','/404'];
router.beforeEach((to, from, next) => {
    if(originalPush.includes(to.path)){
        next();
    }else{
        console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token')!==null){
            next();
        }else{
            next('/login');
        }

    }
});

export default router
