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
    name: 'MyPage',
    component: () => import('@/views/MyPage.vue'),
    children: [
    ]
  },
  {
    path: '/mypage/parent',
    name: 'ParentMyPage',
    component: () => import('@/views/ParentMyPage.vue'),
  },
  {
    path: '/mypage/parentInfo/:id',
    name: 'ParentInfoPage',
    component: () => import('@/views/ParentInfoPage.vue'),
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
