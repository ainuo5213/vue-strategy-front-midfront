<template>
  <button
    class="text-sm text-center rounded duration-150 flex justify-center items-center"
    :class="[
      typeEnums[type],
      sizeEnums[sizeKey].button,
      {
        'active:scale-105': animate
      }
    ]"
    @click.stop="emit('click', $event)"
  >
    <a-svg-icon
      name="loading"
      v-if="loading"
      class="h-2 w-2 animate-spin"
    ></a-svg-icon>
    <a-svg-icon
      :name="icon"
      v-if="icon"
      class="m-auto"
      :class="sizeEnums[sizeKey].icon"
      :color="iconColor"
      :fill-class="iconClass"
    ></a-svg-icon>
    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
const typeEnums = {
  primary: 'text-white bg-zinc-800 hover:bg-zinc-900 active:bg-zinc-900',
  main: 'text-white bg-main hover-main active:bg-main',
  info: 'text-zinc-800 bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-200'
}

const sizeEnums = {
  default: {
    button: 'w-8 h-4 text-base',
    icon: ''
  },
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5'
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: ''
  },
  'icon-small': {
    button: 'w-3 h-3',
    icon: 'w-1.5 h-1.5'
  }
}
</script>
<script setup lang="ts">
import { PropType, warn, computed } from 'vue'
type ButtonType = 'primary' | 'main' | 'info'
type SizeType = 'default' | 'icon-default' | 'small' | 'icon-small'
type SizeEnum = {
  button: string
  icon: string
}
const props = defineProps({
  icon: {
    type: String as PropType<string>,
    default: ''
  },
  iconColor: {
    type: String as PropType<string>,
    default: ''
  },
  iconClass: {
    type: String as PropType<string>,
    default: ''
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'main',
    validator(type: string) {
      const keys = Object.keys(typeEnums)
      const hasType = keys.includes(type)
      if (!hasType) {
        warn(`button's type must be in ${keys.join('、')}`)
        return false
      }
      return true
    }
  },
  size: {
    type: String as PropType<SizeType>,
    default: 'default',
    validator(type: string) {
      const keys = Object.keys(sizeEnums).filter((r) => !r.startsWith('icon'))
      const hasType = keys.includes(type)
      if (!hasType) {
        warn(`button's size must be in ${keys.join('、')}`)
        return false
      }
      return true
    }
  },
  loading: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  animate: {
    type: Boolean as PropType<boolean>,
    default: true
  }
})
const emit = defineEmits(['click'])
const sizeKey = computed(() => {
  return props.icon ? 'icon-' + props.size : props.size
})
</script>

<style lang="scss" scoped></style>
