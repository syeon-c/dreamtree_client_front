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
    path: '/mypage/admin/member/management',
    name: 'MemberManagementPage',
    component: () => import('@/views/MemberManagementPage.vue')
  },
  {
    path: '/mypage/admin/auth/management',
    name: 'AuthManagementPage',
    component: () => import('@/views/AuthManagementPage.vue')
  },
  {
    path: '/mypage/admin/college',
    name: 'CollegeAuthInfoPage',
    component: () => import('@/views/CollegeAuthInfoPage.vue')
  },
  {
    path: '/mypage/admin/certificate',
    name: 'CertificateAuthInfoPage',
    component: () => import('@/views/CertificateAuthInfoPage.vue')
  },
  {
    path: '/student',
    name: 'StudentInfoPage',
    component: () => import('@/views/StudentInfoPage.vue')
  },
  {
    path: '/student/modify',
    name: 'StudentModifyPage',
    component: () => import('@/views/StudentModifyPage.vue')
  },
  {
    path: '/mypage/admin',
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
