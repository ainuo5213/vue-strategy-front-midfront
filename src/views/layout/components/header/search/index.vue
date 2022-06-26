<template>
  <div>
    <a-search v-model="inputValue" @search="onSearch" :dropdown="true">
      <template #dropdown> this is template </template>
    </a-search>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const inputValue = ref('')

function onSearch() {
  console.log(inputValue)
}
</script>

<style></style>
