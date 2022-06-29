import { RootState } from '@/store/types'
export default {
  categories: (state: RootState) => state.category.categories
}
