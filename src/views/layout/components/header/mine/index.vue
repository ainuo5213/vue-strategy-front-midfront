<template>
  <a-popover placement="bottom-left" class="flex items-center">
    <template #reference>
      <div
        class="relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100"
      >
        <img
          class="w-4 h-4 rounded-sm"
          src="https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a8ec8a13632762d0a0cb5f55a7ec08fa503dc667.jpg"
        />
        <a-svg-icon
          class="h-1.5 w-1.5 ml-0.5"
          name="down-arrow"
          fill-class="fill-zinc-900"
        ></a-svg-icon>
        <a-svg-icon
          class="h-1.5 w-1.5 absolute right-[16px] bottom-0"
          name="vip"
        ></a-svg-icon>
      </div>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60"
        v-for="theme in menus"
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
const menus = [
  {
    text: '个人资料',
    icon: 'profile',
    path: '/profile'
  },
  {
    text: '升级VIP',
    icon: 'vip-profile',
    path: '/member'
  },
  {
    text: '退出登录',
    icon: 'logout'
  }
]
</script>

<style></style>
