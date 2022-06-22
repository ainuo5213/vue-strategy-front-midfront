<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600"
      ref="ulRef"
    >
      <li
        ref="sliderRef"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
        @click="visible = true"
      >
        <svg-icon name="hamburger" class="w-1.5 h-1.5"></svg-icon>
      </li>
      <li
        v-for="(item, index) in categories"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        @click="onCategoryClick(item, $event)"
        :class="{
          'text-zinc-100': !currentCategory
            ? index === 0
            : currentCategory.id === item.id
        }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <popup v-model:visible="visible">
    <div>test</div>
  </popup>
</template>

<script lang="ts" setup>
import { onMounted, PropType, ref } from 'vue'

import { ICategoryItemDTO } from '@/api/category'
const currentCategory = ref<ICategoryItemDTO>()
const sliderRef = ref<HTMLLIElement>()
const ulRef = ref<HTMLUListElement>()
const visible = ref<boolean>(false)

const { categories } = defineProps({
  categories: {
    type: Array as PropType<Array<ICategoryItemDTO>>,
    default: () => []
  }
})
if (categories.length > 0) {
  currentCategory.value = categories.at(0)
}

const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})

let ulPadding = 10
onMounted(() => {
  ulPadding = parseFloat(getComputedStyle(ulRef.value!).paddingLeft) || 10
})

function onCategoryClick(data: ICategoryItemDTO, event: MouseEvent) {
  const target = event.target as HTMLLIElement
  sliderStyle.value.transform = `translateX(${target.offsetLeft - ulPadding}px)`
  sliderStyle.value.width = `${target.scrollWidth}px`
  currentCategory.value = data
}
function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}
async function onClose(done: () => void) {
  await sleep()
  done()
}
</script>

<style></style>
