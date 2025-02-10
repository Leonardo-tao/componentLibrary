import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Index',
          component: () => import('@/views/HomeView.vue'),
        },
      ],
    },
    {
      path: '/button',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Button',
          meta: { title: '按钮' },
          component: () => import('@/views/ButtonView.vue'),
        },
      ],
    },
    {
      path: '/collapse',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Collapse',
          meta: { title: '下拉菜单' },
          component: () => import('@/views/CollapseView.vue'),
        },
      ],
    }, 
  ],
})

export default router
