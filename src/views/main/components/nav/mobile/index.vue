<template>
  <div>我是移动</div>
</template>

<script lang="ts" setup>
import { getCategories } from '@/api/category'

async function getCategoryData() {
  await getCategories()
}
getCategoryData()
</script>

<style></style>
