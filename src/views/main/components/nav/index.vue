<template>
  <mobile-navigation v-if="isMobile"></mobile-navigation>
  <pc-navigation v-else></pc-navigation>
</template>

<script lang="ts" setup>
import { isMobile } from '@/utils/is'
import MobileNavigation from './mobile/index.vue'
import PCNavigation from './pc/index.vue'
</script>

<style></style>
