import { createRouter, createWebHistory } from 'vue-router'
import { isMobile } from '@/utils/is'
import mobileRoutes from './modules/mobile-routes'
import pcRoutes from './modules/pc-routes'

const router = createRouter({
  history: createWebHistory(),
  routes: isMobile.value ? mobileRoutes : pcRoutes
})

export default router
