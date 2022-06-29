import { getCategories, ICategoryItemDTO } from '@/api/category'
import { CATEGORY_NOMAR_DATA, ALL_CATEGIRY_ITEM } from '@/constants'
import { Module } from 'vuex'
import { RootState } from '@/store/types'

export interface CategoryState {
  categories: Array<ICategoryItemDTO>
}

const categoryModule: Module<CategoryState, RootState> = {
  namespaced: true,
  state: () => ({
    categories: CATEGORY_NOMAR_DATA
  }),
  mutations: {
    setCategories(state: CategoryState, categories: Array<ICategoryItemDTO>) {
      state.categories = [ALL_CATEGIRY_ITEM].concat(categories)
    }
  },
  actions: {
    async setCategories({ commit }) {
      const { categorys: _categories } = await getCategories()
      commit('setCategories', _categories)
    }
  }
}
export default categoryModule
