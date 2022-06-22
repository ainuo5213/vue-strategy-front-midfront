<template>
  <teleport to="body">
    <transition name="mask">
      <div
        class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
        v-if="visible && mask"
        @click="close"
      ></div>
    </transition>
    <transition name="content">
      <div
        v-if="visible"
        v-bind="$attrs"
        class="w-screen bg-white z-50 fixed bottom-0"
      >
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { useScrollLock } from '@vueuse/core'
import { PropType, watch } from 'vue'

const props = defineProps({
  mask: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  closeOnClickMask: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  visible: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  lockScroll: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})
const emit = defineEmits(['update:visible', 'close', 'open'])

// 锁定滚动
const isLocked = useScrollLock(document.body, props.lockScroll)
watch(
  () => props.visible,
  (newValue) => {
    newValue ? emit('open') : emit('close')
    if (props.lockScroll && newValue) {
      isLocked.value = true
    } else {
      isLocked.value = false
    }
  },
  {
    immediate: true
  }
)

function close() {
  if (props.closeOnClickMask) {
    emit('update:visible', false)
  }
}
</script>
<style scoped lang="scss">
// mask
.mask-enter-active,
.mask-leave-active {
  transition: all 0.3s;
}

.mask-enter-from,
.mask-leave-to {
  opacity: 0;
}

// content
.content-enter-active,
.content-leave-active {
  transition: all 0.3s;
}

.content-enter-from,
.content-leave-to {
  transform: translateY(100%);
}
</style>
