<template>
  <div class="h-header w-full bg-white border-b border-b-zinc-200 px-2 py-1">
    <div class="flex items-center">
      <header-logo></header-logo>
      <header-search class="mr-1"></header-search>
      <header-theme class="mr-1"></header-theme>
      <header-mine></header-mine>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderLogo from './logo/index.vue'
import HeaderSearch from './search/index.vue'
import HeaderTheme from './theme/index.vue'
import HeaderMine from './mine/index.vue'
</script>

<style></style>
