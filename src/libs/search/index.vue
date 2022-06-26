<template>
  <div
    class="relative p-0.5 rounded-xl border-white duration-500 hover:bg-red-100/40 group"
    ref="container"
  >
    <div>
      <a-svg-icon
        class="w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2"
        name="search"
        color="#707070"
      ></a-svg-icon>
      <input
        type="text"
        class="block w-full h-[44px] pl-4 outline-0 bg-zinc-100 caret-zinc-400 rounded-xl text-zinc-900 tracking-wide font-semibold border border-zinc-100 focus:border-red-300 text-sm duration-500 group-hover:bg-white group-hover:border-zinc-200"
        placeholder="搜索"
        v-model="modelValue"
        @keyup.enter="$emit('search', $event)"
        @focus="onFocus"
        @blur="onBlur"
        @change="onChange"
        @input="onInput"
      />
      <a-svg-icon
        v-show="modelValue.length > 0"
        @click="onClear"
        name="input-delete"
        class="h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 cursor-pointer duration-500"
      ></a-svg-icon>
      <div
        class="opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100"
      ></div>
      <a-button
        icon="search"
        icon-color="#fff"
        @click="$emit('search', $event)"
        class="absolute translate-y-[-50%] top-[50%] right-1 rounded-full"
      ></a-button>
    </div>
    <transition name="slide" v-if="dropdown" v-show="isFocus">
      <div
        class="max-h-[368px] w-full text-base overflow-auto bg-white absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 duration-500 hover:shadow-2xl"
      >
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { PropType, ref } from 'vue'
const container = ref<HTMLElement>()
onClickOutside(container, (e: PointerEvent) => {
  isFocus.value = false
  emit('blur', e)
})
const emit = defineEmits([
  'update:modelValue',
  'search',
  'focus',
  'blur',
  'clear',
  'change',
  'input'
])

defineProps({
  modelValue: {
    required: true,
    type: String as PropType<string>
  },
  dropdown: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})
function onFocus(e: FocusEvent) {
  isFocus.value = true
  emit('focus', e)
}
function onBlur(e: FocusEvent) {
  emit('blur', e)
}
function onClear() {
  emit('update:modelValue', '')
  emit('clear', '')
}
function onChange(e: Event) {
  const input = e.target as HTMLInputElement
  emit('change', input.value)
}
function onInput(e: Event) {
  const input = e.target as HTMLInputElement
  emit('input', input.value)
}
const isFocus = ref(false)
</script>
