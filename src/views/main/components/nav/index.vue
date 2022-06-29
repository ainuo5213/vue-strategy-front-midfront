<template>
  <mobile-navigation v-if="isMobile"></mobile-navigation>
  <pc-navigation v-else></pc-navigation>
</template>

<script lang="ts" setup>
import { isMobile } from '@/utils/flexiable'
import { useStore } from 'vuex'
import MobileNavigation from './mobile/index.vue'
import PcNavigation from './pc/index.vue'
const store = useStore()
store.dispatch('category/setCategories')
</script>

<style></style>
