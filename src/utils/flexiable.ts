import { PC_DEVICE_WIDTH } from '@/constants'
import { useWindowSize } from '@vueuse/core'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const { width } = useWindowSize()
const MAX_FONT_SIZE = 40

/**
 * 是否是移动端设备
 */
export const isMobile = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

/**
 * 动态获取rem基准值，最大为40px（tailwindcss像素单位为rem）
 */
export function useRem() {
  const rem = ref(0)
  function onDOMLoaded() {
    const html = document.documentElement
    const fontSize = window.innerWidth / 10
    rem.value = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    html.style.fontSize = fontSize + 'px'
  }
  document.addEventListener('DOMContentLoaded', onDOMLoaded)
  return {
    rem
  }
}
