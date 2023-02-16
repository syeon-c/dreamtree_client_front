// Composables
import { createRouter, createWebHistory } from 'vue-router'
import consts from "@/consts/const";

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('@/views/MyPage.vue'),
    children: [

    ]
  },
  {
    path: '/request',
    name: 'RequestListPage',
    component: () => import('@/views/RequestListPage.vue'),
    children: [

    ]
  },
  {
    path: '/programs',
    children: [{
        path: '',
        name: consts.PROGRAM_LIST_PAGE,
        component: () => import('@/views/program/ProgramListPage.vue')
      },
      {
        path: ':id',
        name: consts.PROGRAM_DETAIL_PAGE,
        component: () => import('@/views/program/ProgramDetailPage.vue')
      },
      {
        path: 'form',
        name: consts.PROGRAM_ADD_PAGE,
        component: () => import('@/views/program/ProgramAddPage.vue')
      },
    ]
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
