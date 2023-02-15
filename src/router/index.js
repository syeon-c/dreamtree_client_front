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
    path: '/member_management',
    name: 'MemberManagementPage',
    component: () => import('@/views/MemberManagementPage.vue')
  },
  {
    path: '/student_info',
    name: 'StudentInfoPage',
    component: () => import('@/views/StudentInfoPage.vue')
  },
  {
    path: '/mypage_admin',
    name: 'MyPageAdmin',
    component: () => import('@/views/MyPageAdmin.vue'),
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
    name: consts.PROGRAM_LIST_PAGE,
    component: () => import('@/views/ProgramListPage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
