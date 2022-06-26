<template>
  <a-popover placement="bottom-left">
    <template #reference>
      <a-svg-icon
        name="theme-light"
        class="w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60"
      ></a-svg-icon>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60"
        v-for="theme in themes"
      >
        <a-svg-icon
          :name="theme.icon"
          class="w-1.5 h-1.5 mr-1"
          fill-class="fill-zinc-900"
        ></a-svg-icon>
        <span class="text-zinc-800 text-sm">{{ theme.text }}</span>
      </div>
    </div>
  </a-popover>
</template>

<script lang="ts" setup>
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'

const themes = [
  {
    type: THEME_LIGHT,
    text: '极简白',
    icon: 'theme-light'
  },
  {
    type: THEME_DARK,
    text: '极夜黑',
    icon: 'theme-dark'
  },
  {
    type: THEME_SYSTEM,
    text: '跟随系统',
    icon: 'theme-system'
  }
]
</script>

<style></style>
