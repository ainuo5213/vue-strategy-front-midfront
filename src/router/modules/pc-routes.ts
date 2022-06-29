import { RouteRecordRaw } from 'vue-router'

const pcRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '', // 这一块儿其实是navigation，因为pc端下有的页面不展示navigation，所以不能在layout的main里写死
        name: 'home',
        component: () => import('@/views/main/index.vue')
      }
    ]
  }
]

export default pcRoutes
