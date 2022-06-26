<template>
  <div
    class="relative"
    @mouseleave="onLeave"
    @mouseenter="onEnter"
    v-bind="$attrs"
  >
    <div ref="reference">
      <slot name="reference"></slot>
    </div>
    <transition name="slide">
      <!-- 弹出层展示 -->
      <div
        v-show="show"
        class="absolute p-1 z-20 bg-white border rounded-md"
        ref="content"
        :style="contentStyle"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
const TOP_LEFT = 'top-left'
const TOP_RIGHT = 'top-right'
const BOTTOM_LEFT = 'bottom-left'
const BOTTOM_RIGHT = 'bottom-right'
const placements = [TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT]
</script>
<script lang="ts" setup>
import { nextTick, PropType, ref, warn, watch } from 'vue'

type Placement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
const props = defineProps({
  placement: {
    type: String as PropType<Placement>,
    default: BOTTOM_LEFT,
    validator(placement: string) {
      const result = placements.includes(placement)
      if (!result) {
        warn(`placement must be in ${placements.join('、')}`)
        return false
      }
      return true
    }
  }
})
const delay = 200
let timeout: number = 0

const show = ref(false)
function onEnter() {
  show.value = true
  if (timeout) {
    clearTimeout(timeout)
    timeout = 0
  }
}

function onLeave() {
  timeout = window.setTimeout(() => {
    show.value = false
  }, delay)
}

const reference = ref<HTMLDivElement>()
const content = ref<HTMLDivElement>()
function useElementSize(target: HTMLDivElement) {
  return {
    width: target.offsetWidth,
    height: target.offsetHeight
  }
}

const contentStyle = ref({
  top: '0px',
  left: '0px'
})

watch(show, async (val) => {
  if (!val) return
  await nextTick()
  const contentRect = useElementSize(content.value!)
  const referenceRect = useElementSize(reference.value!)
  switch (props.placement) {
    case TOP_LEFT:
      setContentStyle({ left: -contentRect.width, top: 0 })
      break
    case TOP_RIGHT:
      setContentStyle({ left: referenceRect.width, top: 0 })
      break
    case BOTTOM_LEFT:
      setContentStyle({ left: -contentRect.width, top: referenceRect.height })
      break
    default:
      setContentStyle({
        left: referenceRect.width,
        top: referenceRect.height
      })
      break
  }
})

function setContentStyle({ top, left }: { top: number; left: number }) {
  contentStyle.value.top = top + 'px'
  contentStyle.value.left = left + 'px'
}
</script>
