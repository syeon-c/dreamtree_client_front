// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/mypage',
    children: [
      {
        path: '',
        name: 'MyPage',
        component: () => import('@/views/Admin/MyPage.vue'),
      },
      {
      path: 'member',
      name: 'MemberAdminPage',
      component: () => import('@/views/Admin/MemberAdminPage.vue')
      },
      {
        path: 'parent',
        name: 'ParentMyPage',
        component: () => import('@/views/ParentMyPage.vue'),
      },
      {
        path: 'parentInfo/:id',
        name: 'ParentInfoPage',
        component: () => import('@/views/ParentInfoPage.vue'),
      },
    ]
  },
  {
    path: '/infoModify/:id',
    name: 'InfoModifyPage',
    component: () => import('@/views/InfoModifyPage.vue'),
  },
  {
    path: '/request',
    name: 'RequestListPage',
    component: () => import('@/views/RequestListPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
