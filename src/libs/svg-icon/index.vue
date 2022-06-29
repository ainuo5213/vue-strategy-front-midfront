<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :class="fillClass" :fill="color"></use>
  </svg>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'

const props = defineProps({
  prefix: {
    type: String as PropType<string>,
    default: 'icon'
  },
  // 图标名字
  name: {
    type: String as PropType<string>,
    required: true
  },
  // 字体颜色
  color: {
    type: String
  },
  // 指定类名
  fillClass: {
    type: String
  }
})
// 真实显示的svg图标
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
