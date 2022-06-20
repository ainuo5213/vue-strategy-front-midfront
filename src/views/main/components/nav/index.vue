<template>
  <mobile-navigation
    v-if="isMobile"
    :categories="categories"
  ></mobile-navigation>
</template>

<script lang="ts" setup>
import { isMobile } from '@/utils/flexiable'
import MobileNavigation from './mobile/index.vue'
import { getCategories, ICategoryItemDTO } from '@/api/category'
import { ref } from 'vue'

const categories = ref<Array<ICategoryItemDTO>>()
async function getCategoryData() {
  const { categorys: _categories } = await getCategories()
  categories.value = _categories
}
getCategoryData()
</script>

<style></style>
