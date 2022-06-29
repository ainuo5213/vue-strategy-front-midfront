import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from '@/router'
import { useRem } from '@/utils/flexiable'
import LibPlugin from '@/libs'
import store from '@/store'
import 'virtual:svg-icons-register'

useRem()

createApp(App).use(store).use(router).use(LibPlugin).mount('#app')
