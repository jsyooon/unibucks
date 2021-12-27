import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '@/views/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@/views/Order/index.vue'),
    children: [
      {
        path: '',
        redirect: '/order/all/beverage',
      },
      {
        path: 'all',
        redirect: '/order/all/beverage',
      },
      {
        path: 'all/:menuType',
        name: 'all',
        component: () => import('@/views/Order/All.vue'),
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/Order/My.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
