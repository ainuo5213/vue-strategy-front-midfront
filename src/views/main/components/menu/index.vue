<template>
  <div class="py-2 h-[80vh] flex flex-col">
    <h2 class="text-xl text-zinc-900 font-bold mb-2 px-1">所有分类</h2>
    <ul class="overflow-x-scroll">
      <li
        v-for="(item, _index) in categories"
        :key="item.id"
        class="text-lg text-zinc-900 px-1 py-0.5 duration-100 active:bg-zinc-100"
        :class="{
          'bg-sky-600/75': index === _index
        }"
        @click="$emit('itemClick', item, _index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { useStore } from 'vuex'

defineEmits(['itemClick'])
defineProps({
  index: {
    type: Number as PropType<number>,
    default: 0
  }
})

const store = useStore()
const categories = computed(() => store.getters.categories)
</script>
