import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from '@/router'
import { useRem } from '@/utils/flexiable'
import LibPlugin from '@/libs'
import 'virtual:svg-icons-register'

useRem()

createApp(App).use(router).use(LibPlugin).mount('#app')
