import { RootState } from './types'
import { createStore } from 'vuex'
import categoryModule from './modules/category'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'
import { MENU_KEY } from '@/constants'

const store = createStore<RootState>({
  modules: {
    category: categoryModule
  },
  getters,
  plugins: [
    createPersistedState({
      key: MENU_KEY,
      paths: ['category']
    })
  ]
})

export default store
