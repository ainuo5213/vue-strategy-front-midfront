<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600"
      ref="ulRef"
    >
      <li
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
        @click="visible = true"
      >
        <a-svg-icon name="hamburger" class="w-1.5 h-1.5"></a-svg-icon>
      </li>
      <li
        v-for="(item, index) in categories"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        @click="onCategoryClick(item, index)"
        :class="{
          'text-zinc-100': !currentCategory
            ? index === 0
            : currentCategory.id === item.id
        }"
        :ref="setItemRef"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <a-popup v-model:visible="visible">
    <mobile-menu
      :categories="categories"
      :index="currentCategoryIndex"
      @item-click="onCategoryClick"
    ></mobile-menu>
  </a-popup>
</template>

<script lang="ts" setup>
import { onBeforeUpdate, onMounted, PropType, ref, watch } from 'vue'
import MobileMenu from '@/views/main/components/menu/index.vue'
import { ICategoryItemDTO } from '@/api/category'
import { useScroll } from '@vueuse/core'
const currentCategory = ref<ICategoryItemDTO>()
const currentCategoryIndex = ref<number>(0)
const ulRef = ref<HTMLUListElement>()
const visible = ref<boolean>(false)
const menuItemRefs: Array<HTMLLIElement> = []
const { x: ulScrollLeft } = useScroll(ulRef)
const { categories } = defineProps({
  categories: {
    type: Array as PropType<Array<ICategoryItemDTO>>,
    default: () => []
  }
})

const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})

if (categories.length > 0) {
  currentCategory.value = categories.at(0)
}

function setItemRef(el: any) {
  if (el) {
    menuItemRefs.push(el)
  }
}

let ulPadding = 10
onMounted(() => {
  ulPadding = parseFloat(getComputedStyle(ulRef.value!).paddingLeft) || 10
})
onBeforeUpdate(() => {
  menuItemRefs.length = 0
})

watch(currentCategoryIndex, (newValue) => {
  const { left, width } = menuItemRefs[newValue].getBoundingClientRect()
  sliderStyle.value = {
    transform: `translateX(${ulScrollLeft.value + left - ulPadding + 'px'})`,
    width: width + 'px'
  }
})

function onCategoryClick(data: ICategoryItemDTO, index: number) {
  currentCategory.value = data
  currentCategoryIndex.value = index
  visible.value = false
}
</script>

<style></style>
