import { RouteRecordRaw } from 'vue-router'

const pcRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/layout/index.vue'),
    children: []
  }
]

export default pcRoutes
