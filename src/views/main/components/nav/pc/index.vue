<template>
  <div class="bg-white sticky top-0 left-0 w-full z-10">
    <ul
      class="w-[800px] relative flex flex-wrap justify-center overflow-x-auto px-[10px] py-1 text-xs text-zinc-600 duration-300 overflow-y-hidden mx-auto"
      :style="ulStyle"
    >
      <!-- 箭头 -->
      <li
        class="absolute right-1 bottom-1 z-20 p-1 rounded cursor-pointer duration-200 hover:bg-zinc-200"
        @click="toggleExpanded"
      >
        <a-svg-icon
          :name="expandIcon"
          class="w-1 h-1"
          fill-class="fill-zinc-900"
        ></a-svg-icon>
      </li>
      <li
        v-for="(item, index) in categories"
        :key="item.id"
        class="shrink-0 px-1.5 py-0 z-10 duration-200 text-zinc-900 text-base font-bold h-4 leading-4 cursor-pointer hover:bg-zinc-200 rounded mr-1 mb-1"
        @click="setCurrentCategoryIndex(index)"
        :class="{
          'text-zinc-900 bg-zinc-200': currentCategoryIndex === index
        }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const categories = computed(() => store.getters.categories)
const expanded = ref(false)
const minHeight = 56
const maxHeight = 206
const ulStyle = computed(() => {
  return {
    height: (expanded.value ? maxHeight : minHeight) + 'px'
  }
})
const expandIcon = computed(() => {
  return expanded.value ? 'fold' : 'unfold'
})
const currentCategoryIndex = ref(0)
function setCurrentCategoryIndex(index: number) {
  currentCategoryIndex.value = index
}
function toggleExpanded() {
  expanded.value = !expanded.value
}
</script>

<style></style>
