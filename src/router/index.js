// Composables
import { createRouter, createWebHistory } from 'vue-router'
import consts from "@/consts/const";

const routes = [
  {
    path: '/',
    name: consts.HOME_PAGE,
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/mypage',
    children: [
      {
        path: '',
        name: 'MyPage',
        component: () => import('@/views/admin/MyPage.vue'),
      },
      {
      path: 'member',
      name: 'MemberAdminPage',
      component: () => import('@/views/admin/MemberAdminPage.vue')
      },
      {
        path: 'parent',
        name: 'ParentMyPage',
        component: () => import('@/views/parents/ParentMyPage.vue'),
      },
      {
        path: 'parentInfo/:id',
        name: 'ParentInfoPage',
        component: () => import('@/views/parents/ParentInfoPage.vue'),
      },
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
    children: [
      {
        path: '',
        name: 'RequestListPage',
        component: () => import('@/views/request/RequestListPage.vue')
      },
      {
        path: '/:id',
        name: 'RequestDetailPage',
        component: () => import('@/views/request/RequestDetailPage.vue')
      },

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
  {
    path: '/lesson',
    children: [{
        path: 'form',
        name: consts.LESSON_ADD_PAGE,
        component: () => import('@/views/lesson/LessonAddPage.vue')
      },
    ]
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
